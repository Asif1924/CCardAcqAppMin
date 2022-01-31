package com.ctfs.WICI.Helper;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;

import com.ctfs.WICI.Enums.ContentType;
import com.ctfs.WICI.Enums.HTTPMethodType;
import com.ctfs.WICI.Interfaces.IResponse;
import com.ctfs.WICI.Model.AuthfieldValue;
import com.ctfs.WICI.Model.UnauthorizedDeviceException;
import com.ctfs.WICI.Model.XSSAttackException;
import com.ctfs.WICI.Servlet.Model.PendAccountApplicationResponse;
import com.ctfs.WICI.Servlet.Model.WICIAuthorizationFailedResponse;
import com.ctfs.WICI.Servlet.Model.WICILoginFailedResponse;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class WICIServletMediator
{
	static Logger 			log 				= Logger.getLogger(WICIServletMediator.class.getName());
	HTTPMethodType 			httpMethodType;
	@Override
	public String toString() {
		return "WICIServletMediator [httpMethodType=" + httpMethodType
				+ ", postRequestBody=" + postRequestBody + ", servletRequest="
				+ servletRequest + ", servletResponse=" + servletResponse
				+ ", postRequestBodyAsJson=" + postRequestBodyAsJson
				+ ", contentType=" + contentType + ", requestKVPairs="
				+ requestKVPairs + ", skipRequestSanitization="
				+ skipRequestSanitization + "]";
	}

	StringBuffer 			postRequestBody;
	HttpServletRequest 		servletRequest;
	HttpServletResponse 	servletResponse;
	JsonElement 			postRequestBodyAsJson;
	ContentType 			contentType;
	HashMap<String, String>	requestKVPairs	= new HashMap<String, String>();
	boolean skipRequestSanitization = false;

	public HashMap<String, String> getRequestKVPairs()
	{
		return requestKVPairs;
	}

	public WICIServletMediator(HttpServletRequest request, HttpServletResponse response)
	{
		this.servletResponse = response;
		this.servletRequest = request;
	}

	public void IntializeMediator (boolean skipSanitization) throws XSSAttackException {
		skipRequestSanitization = skipSanitization;
		parseHttpRequest(this.servletRequest);
	}

	public WICIServletMediator()
	{
	}

	public StringBuffer getPostRequestBody()
	{
		return postRequestBody;
	}

	public HTTPMethodType getHttpMethodType()
	{
		return httpMethodType;
	}

	public HttpServletRequest getRequest()
	{
		return servletRequest;
	}

	public HttpServletResponse getResponse()
	{
		return servletResponse;
	}

	public ContentType geContentType()
	{
		return contentType;
	}

	public String getHttpGetRequestParameter(String paramName)
	{
		return getRequest().getParameter(paramName);
	}

	public Boolean isHttpGetRequestParameterExist(String paramName)
	{
		return getHttpGetRequestParameter(paramName) != null;
	}

	public JsonElement getPostRequestBodyAsJson()
	{
		return postRequestBodyAsJson;
	}

	public void parseHttpRequest(HttpServletRequest request) throws XSSAttackException
	{
		String sMethod = "[parseHttpRequest]";
		log.info(sMethod + "::Called!");

		try
		{
			validateServletRequest(request);
			detectHttpMethodRequest();
			grabRequestContentType();
			grabRequestBody();
		}
		catch (XSSAttackException xssEx){
			log.warning(sMethod + "::XSSAttack exception occurred during parsing HttpRequest::" + xssEx.getMessage());
			throw xssEx;
		}
		catch (Exception e)
		{
			log.warning(sMethod + "::Error occurred during parsing HttpRequest::" + e.getMessage());
		}
	}

	public boolean deviceAuthorizationPassed() throws Exception
	{
		String sMethod = "[deviceAuthorizationPassed]";
		log.info(sMethod + "::Called!");
		AuthorizationHelper authorizationHelper = new AuthorizationHelper();

		if( authorizationHelper.authorizationPassed(this))
		{
			AuthfieldValue values = authorizationHelper.getAuthfieldValue(this);
			sendDeviceUnauthorizedResponse(values);
			return false;
		}

		if(isCheckLTPATokenRequired() && !checkLTPAToken(servletRequest)){
			sendLoginFailedResponse();
			return false;
		}

		return true;
	}

	private boolean checkLTPAToken(HttpServletRequest request) throws ServletException, IOException {
		String sMethod = this.getClass().getName() + "[checkLTPAToken] ";
		log.info(sMethod);

		TokenCheckerByRequest tokenChecker = new TokenCheckerByRequest(request);
		return tokenChecker.ltpaTokenExists();
	}

	protected boolean isCheckLTPATokenRequired(){
		return false;
	}

	//public void sendLoginFailedResponse(HttpServletResponse response) throws IOException{
	public void sendLoginFailedResponse() throws IOException{
		String sMethod = this.getClass().getName() + "[sendLoginFailedResponse] ";
		log.info(sMethod);

		WICILoginFailedResponse 		loginFailedResponse 			= new WICILoginFailedResponse(false, "checkLTPAToken failed!", true);
        WICIResponse 					wiciResponse 					= new WICIResponse(false, "Access issue detected. Application will be redirected to the login page.", loginFailedResponse);

        processHttpResponse(wiciResponse);
	}

	public void sendDeviceUnauthorizedResponse( AuthfieldValue argAuthfieldValue ) throws IOException, UnauthorizedDeviceException{
		String sMethod = this.getClass().getName() + "[sendDeviceUnauthorizedResponse] ";
		log.info(sMethod);

		WICIAuthorizationFailedResponse deviceUnauthorizedResponse 		= new WICIAuthorizationFailedResponse(false, "Device not authorized!", true);
        WICIResponse 					wiciResponse 					= new WICIResponse(false, "Access issue detected. Application will be redirected to the login page.", deviceUnauthorizedResponse);

        processHttpResponse(wiciResponse);

        String exceptionMessage = constructUnauthorizedExceptionMessage(argAuthfieldValue);

		throw new UnauthorizedDeviceException(exceptionMessage);
	}

	private String constructUnauthorizedExceptionMessage(AuthfieldValue argAuthfieldValue)
	{
		String mfgSerial 		= "";
        String buildSerial 		= "";
        if( argAuthfieldValue!=null )
        {
        	mfgSerial 		= argAuthfieldValue.getMfgSerial();
        	buildSerial		= argAuthfieldValue.getBuildSerial();
        }

		String employerID = this.searchElementInsidePostRequestBody("employerID") != null ? this.searchElementInsidePostRequestBody("employerID") : "";
		String agentID = this.searchElementInsidePostRequestBody("agentID") != null ? this.searchElementInsidePostRequestBody("agentID") : "";
		String userLocation = this.searchElementInsidePostRequestBody("userLocation") != null ? this.searchElementInsidePostRequestBody("userLocation") : "";

		String userMessage = String.format("\n---EmployerID = %s\n---Agent ID = %s\n---Location = %s",employerID, agentID, userLocation);

		if( employerID.equals("") || agentID.equals("") || userLocation.equals("") )
			userMessage = "";

		String exceptionMessage = String.format("\nAuthfield Check Failure:%s\n---Authfield value={ MfgSerial:%s , BuildSerial:%s } ", userMessage, mfgSerial, buildSerial );
		return exceptionMessage;
	}


	public void processXMLResponse(PendAccountApplicationResponse response){
		String sMethod = "[processXMLResponse]";
		log.info(sMethod + "::Called!");
		
		PrintWriter writer = null;
		try
		{
			validateServletResponse(servletResponse);
			validateResponse(response);
			updateResponseHeaderXML();
			String responseAsXML = new WICIObjectsHelper().serializePendAccountApplicationResponse(response);
			responseAsXML = responseAsXML.replace("com.ctfs.WICI.Servlet.Model.PendAccountApplicationResponse", "PendAccountApplicationResponse");
			writer = this.servletResponse.getWriter();
			writer.append(responseAsXML);
		}
		catch (Exception e)
		{
			log.warning(sMethod + "::Error occurred during process servlet response::" + e.getMessage());
		}
		finally
		{
			if (writer != null)
			{
				try
				{
					writer.flush();
					writer.close();
				}
				catch (Exception e)
				{
					log.warning(sMethod + "::Error occurred during close 'PrintWriter' stream::" + e.getMessage());
				}
			}
		}
	}
	
	public void processHttpResponse(IResponse response)
	{
		processHttpResponse(response, null);
	}

	public void processHttpResponse(IResponse response, List<Object> gsonTypeAdapters)
	{
		String sMethod = "[processHttpResponse]";
		log.info(sMethod + "::Called!");

		GsonBuilder gson = new GsonBuilder().disableHtmlEscaping();

		PrintWriter writer = null;

		try
		{
			validateServletResponse(servletResponse);
			validateResponse(response);
			updateResponseHeader();
			writer = this.servletResponse.getWriter();
			if (gsonTypeAdapters != null)
			{
				for (Object typeAdapter : gsonTypeAdapters)
				{
					Class<? extends IResponse> class1 = response.getClass();
					gson.registerTypeAdapter(class1, typeAdapter);
				}
			}
			String responseAsJsonString = gson.create().toJson(response, response.getClass());
			
			log.info(sMethod + "::tablet Response :: "+responseAsJsonString);
			
			writer.append(responseAsJsonString);
		}
		catch (Exception e)
		{
			log.warning(sMethod + "::Error occurred during process servlet response::" + e.getMessage());
		}
		finally
		{
			if (writer != null)
			{
				try
				{
					writer.flush();
					writer.close();
				}
				catch (Exception e)
				{
					log.warning(sMethod + "::Error occurred during close 'PrintWriter' stream::" + e.getMessage());
				}
			}
		}
	}

	protected void updateResponseHeaderXML()
	{
		servletResponse.setContentType("text/xml");
		servletResponse.addHeader("X-Frame-Options", "SAMEORIGIN");
		servletResponse.addHeader("Access-Control-Allow-Origin", "*");
	}	
	
	protected void updateResponseHeader()
	{
		servletResponse.setContentType("application/json");
		servletResponse.addHeader("X-Frame-Options", "SAMEORIGIN");
		servletResponse.addHeader("Access-Control-Allow-Origin", "*");
	}

	protected void grabRequestBody() throws Exception
	{
		String sMethod = "[grabRequestBody]";
		log.info(sMethod + "::Called!");

		try
		{
			if (httpMethodType == HTTPMethodType.POST)
			{
				readPostRequestBody();
			}

			if (!skipRequestSanitization)
			{
				sanitizeServletRequest();
			}
		}
		catch (XSSAttackException xssEx){
			log.warning(sMethod + "::XSSAttack exception occurred during grab request body::" + xssEx.getMessage());
			throw xssEx;
		}
		catch (Exception e)
		{
			log.warning(sMethod + "::Error occurred during grab request body::" + e.getMessage());
			throw e;
		}
	}

	protected void readPostRequestBody() throws Exception
	{
		String sMethod = "[readPostRequestBody]";
		log.info(sMethod + "::Called!");

		postRequestBody = new StringBuffer();

		try
		{
			String postRequestString = IOUtils.toString(servletRequest.getInputStream(), "UTF-8");

			log.info(sMethod + "::Raw Request Body:: "+ postRequestString);

			postRequestString = postRequestString.replace("\uFEFF",""); // Remove the BOM

			log.info(sMethod + "::Raw Request Body after BOM removal:: "+ postRequestString);

			postRequestBody = new StringBuffer(postRequestString);

			log.info(sMethod + " result: " + postRequestBody.toString());
		}
		catch (Exception e)
		{
			log.warning(sMethod + "::Error occurred getting parameter::" + e.getMessage());
			throw e;
		}
	}

	protected void sanitizeServletRequest() throws Exception
	{
		String sMethod = "[sanitizeServletRequest]";
		log.info(sMethod + "::Called!");

		WASDefender wasDefender = new WASDefender();

		if (httpMethodType == HTTPMethodType.GET)
		{
			// Get all HTTP GET request parameters
			Enumeration<String> parameterNames = servletRequest.getParameterNames();

			// Scan parameters values
			while (parameterNames.hasMoreElements())
			{
				String paramName = parameterNames.nextElement();
				String[] paramValues = servletRequest.getParameterValues(paramName);

				for (int i = 0; i < paramValues.length; i++)
				{
					String scanForXSSInjections = wasDefender.scanForXSSInjections(paramValues[i]);
					paramValues[i] = org.apache.commons.lang3.StringEscapeUtils.unescapeXml(scanForXSSInjections);

					requestKVPairs.put(paramName, paramValues[i]);
					log.info(sMethod + String.format("Result of the sanitizing: \n %s = %s", paramName, paramValues[i]));
				}
			}
		}
		else if (httpMethodType == HTTPMethodType.POST)
		{
			String encodedPostRequestBody = wasDefender.scanForXSSInjections(getPostRequestBody().toString());

			postRequestBody = new StringBuffer(org.apache.commons.lang3.StringEscapeUtils.unescapeXml(encodedPostRequestBody));

			log.info(sMethod + String.format("Result of the sanitizing: \n PostRequestBody = %s", postRequestBody));
		}
	}

	private void detectHttpMethodRequest()
	{
		String sMethod = "[detectHttpMethodRequest]";
		log.info(sMethod + "::Called!");

		httpMethodType = HTTPMethodType.fromValue(servletRequest.getMethod());

		log.info(sMethod + "::Detected HTTP method type:: " + httpMethodType.toString());
	}

	private void grabRequestContentType()
	{
		String sMethod = "[grabRequestContentType]";
		log.info(sMethod + "::Called!");
		String rawContentType = servletRequest.getContentType();

		log.info(sMethod + "::Detected HTTP RAW Request content type:: " + rawContentType);

		contentType = ContentType.fromValue(rawContentType);
		log.info(sMethod + "::Detected HTTP Request content type:: " + contentType.toString());
	}

	public String searchElementInsidePostRequestBody(String elementToSearch)
	{
		return searchElementInsidePostRequestBody(postRequestBody.toString(),  elementToSearch);
	}

	private String searchElementInsidePostRequestBody(String postRequestBody, String elementToSearch)
	{
		String sMethod = "[searchElementInsidePostRequestBody]";
		log.info(String.format("%s::Called with parameters:: PostRequestBody='%s', ElementToSearch='%s'", sMethod, postRequestBody, elementToSearch));

		String serarchElement = null;

		// Get request body as json element
		postRequestBodyAsJson = processJsonRequestBody(postRequestBody);

		if (postRequestBodyAsJson.isJsonArray())
		{
			serarchElement = processJsonArray(postRequestBodyAsJson, elementToSearch);
		}
		else if (postRequestBodyAsJson.isJsonObject())
		{
			serarchElement = processJsonObject(postRequestBodyAsJson, elementToSearch);
		}

		return serarchElement;
	}

	private JsonElement processJsonRequestBody(String postRequestBody)
	{
		String sMethod = "[processJsonRequestBody]";
		log.info(String.format("%s::Called with parameters:: PostRequestBody='%s'", sMethod, postRequestBody));

		JsonParser jParser = new JsonParser();

		return jParser.parse(postRequestBody);
	}

	private String processJsonArray(JsonElement jElement, String elementToSearch)
	{
		String sMethod = "[processJsonArray]";
		log.info(String.format("%s::Called with parameters:: ElementToSearch='%s'", sMethod, elementToSearch));

		String searchElement = null;
		JsonArray jArray = jElement.getAsJsonArray();
		for (int i = 0; i < jArray.size(); i++)
		{
			JsonObject el = (JsonObject) jArray.get(i);
			if (el.has(elementToSearch))
			{
				searchElement = el.get(elementToSearch).getAsString();
			}
		}

		return searchElement;
	}

	private String processJsonObject(JsonElement jElement, String elementToSearch)
	{
		String sMethod = "[processJsonObject]";
		log.info(String.format("%s::Called with parameters:: ElementToSearch='%s'", sMethod, elementToSearch));

		JsonObject jObject = jElement.getAsJsonObject();

		JsonElement searchElement = jObject.get(elementToSearch);

		return searchElement != null ? searchElement.getAsString() : null;
	}

	private void validateServletRequest(HttpServletRequest request)
	{
		String sMethod = "[validateServletRequest]";
		log.info(sMethod + "::Called!");

		if (request == null)
		{
			throw new IllegalArgumentException("Invalid 'HttpServletRequest' parameter!");
		}
	}

	private void validateServletResponse(HttpServletResponse response)
	{
		String sMethod = "[validateServletResponse]";
		log.info(sMethod + "::Called!");

		if (response == null)
		{
			throw new IllegalArgumentException("Invalid 'HttpServletResponse' parameter!");
		}
	}

	private void validateResponse(IResponse response)
	{
		String sMethod = "[validateResponse]";
		log.info(sMethod + "::Called!");

		if (response == null)
		{
			throw new IllegalArgumentException("Invalid 'Response' parameter!");
		}
	}

	public StringBuffer replaceFrenchCharsForEquivalent(StringBuffer argRequestBodybuffer)
	{
		return replaceFrenchCharsForEquivalent(argRequestBodybuffer, false);
	}

	public StringBuffer replaceFrenchCharsForEquivalent(StringBuffer argRequestBodybuffer, boolean addressLookup)
	{

		String input = argRequestBodybuffer.toString();
		String aLetter = "A";
		String aLetterFrench = "[\u00C0-\u00C6]";
		String eLetter = "E";
		String eLetterFrench = "[\u00C8\u00C9\u00CB\u00CA]";
		String iLetter = "I";
		String iLetterFrench = "[\u00CE\u00CF]";
		String oLetter = "O";
		String oLetterFrench = "[\u00D4\u00D3\u00D2\u0152]";
		String uLetter = "U";
		String uLetterFrench = "[\u00D9\u00DB\u00DC]";
		String yLetter = "Y";
		String yLetterFrench = "[\u0178]";
		String cLetter = "C";
		String cLetterFrench = "[\u00C7]";
		String hyphenReplacement = " ";
		String hyphen = "-";
		HashMap<String, String> equivalentsMap = new HashMap<String, String>();
		equivalentsMap.put(aLetter, aLetterFrench);
		equivalentsMap.put(eLetter, eLetterFrench);
		equivalentsMap.put(iLetter, iLetterFrench);
		equivalentsMap.put(oLetter, oLetterFrench);
		equivalentsMap.put(uLetter, uLetterFrench);
		equivalentsMap.put(yLetter, yLetterFrench);
		equivalentsMap.put(cLetter, cLetterFrench);
		if (addressLookup)
		{
			equivalentsMap.put(hyphenReplacement, hyphen);
		}
		for (String e : equivalentsMap.keySet())
		{
			input = input.replaceAll(equivalentsMap.get(e), e);
		}
		return new StringBuffer(input);
	}


}