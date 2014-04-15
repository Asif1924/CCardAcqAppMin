package com.ctfs.WICI.Helper;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Type;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ctfs.WICI.Enums.HTTPMethodType;
import com.ctfs.WICI.Interfaces.IResponse;
import com.ctfs.WICI.Model.AccountApplicationPostRequest;
import com.ctfs.WICI.Model.AuthfieldValue;
import com.ctfs.WICI.Model.XSSAttackException;
import com.ctfs.WICI.Servlet.Model.WICILoginFailedResponse;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.reflect.TypeToken;

public class WICIServletMediator
{
	static Logger 			log 				= Logger.getLogger(WICIServletMediator.class.getName());
	HTTPMethodType 			httpMethodType;
	StringBuffer 			postRequestBody;
	HttpServletRequest 		servletRequest;
	HttpServletResponse 	servletResponse;
	JsonElement 			postRequestBodyAsJson;
	HashMap<String, String>	getRequestKVPairs	= new HashMap<String, String>();

	public WICIServletMediator(HttpServletRequest request, HttpServletResponse response)
	{
		this.servletResponse = response;
		this.servletRequest = request;
	}

	public void IntializeMediator () throws XSSAttackException {
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
		String sMethod = "[checkLTPATokenAndDeviceAuthorization]";
		log.info(sMethod + "::Called!");

		if( isAuthfieldCheckEnabled() && !authorizedTablet(servletRequest))
		{
			sendDeviceUnauthorizedResponse();
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

	protected boolean isAuthfieldCheckEnabled()
	{
		String sMethod = this.getClass().getName() + "[isAuthfieldCheckEnabled] ";
		log.info(sMethod);

		return new WICIDBHelper().isAuthfieldCheckEnabled();
	}

	private boolean authorizedTablet( HttpServletRequest request ) throws Exception
	{
		String sMethod = this.getClass().getName() + "[authorizedTablet] ";
		log.info(sMethod);

		AuthfieldValue authfieldValue = getAuthfieldValue(request);

		log.info(sMethod + "::mfgSerial=" + authfieldValue.getMfgSerial() + ", buildSerial=" + authfieldValue.getBuildSerial());

		return new WICIDBHelper().isDeviceWhitelisted(authfieldValue.getMfgSerial(), authfieldValue.getBuildSerial());
	}

	private AuthfieldValue getAuthfieldValue(HttpServletRequest request) throws Exception
	{
		String sMethod = this.getClass().getName() + "[getAuthfieldValue] ";
		log.info(sMethod);

		AuthfieldValue authfieldValue = new AuthfieldValue();

		if (httpMethodType == HTTPMethodType.GET)
		{
			String mfgSerial 		= getRequestKVPairs.get("authfieldValue[MfgSerial]");
			String buildSerial 		= getRequestKVPairs.get("authfieldValue[BuildSerial]");
			log.info(sMethod + "::mfgSerial = " + mfgSerial);
			log.info(sMethod + "::buildSerial = " + buildSerial);

			authfieldValue.setMfgSerial(mfgSerial);
			authfieldValue.setBuildSerial(buildSerial);
		}
		if( httpMethodType == HTTPMethodType.POST )
		{
			log.info(sMethod + "===============In POST");

			AccountApplicationPostRequest postRequest = null;

			Gson gson = new Gson();
			Type compoundType = new TypeToken<AccountApplicationPostRequest>(){}.getType();

			postRequest = gson.fromJson(postRequestBody.toString(), compoundType);

			authfieldValue = postRequest.getAuthfieldValue();

			log.info(sMethod + "::mfgSerial = " + authfieldValue.getMfgSerial());
			log.info(sMethod + "::buildSerial = " + authfieldValue.getBuildSerial());
		}

		return authfieldValue;
	}

	//public void sendLoginFailedResponse(HttpServletResponse response) throws IOException{
	public void sendLoginFailedResponse() throws IOException{
		String sMethod = this.getClass().getName() + "[sendLoginFailedResponse] ";
		log.info(sMethod);

		WICILoginFailedResponse 		loginFailedResponse 		= new WICILoginFailedResponse(false, "checkLTPAToken failed!", true);
        WICIResponse 					wiciResponse 				= new WICIResponse(false, "Access issue detected. Application will be redirected to the login page.", loginFailedResponse);

        processHttpResponse(wiciResponse);
	}

	public void sendDeviceUnauthorizedResponse() throws IOException{
		String sMethod = this.getClass().getName() + "[sendLoginFailedResponse] ";
		log.info(sMethod);

		WICILoginFailedResponse 		deviceUnauthorizedResponse 		= new WICILoginFailedResponse(false, "Device not authorized!", true);
        WICIResponse 					wiciResponse 					= new WICIResponse(false, "Access issue detected. Application will be redirected to the login page.", deviceUnauthorizedResponse);

        processHttpResponse(wiciResponse);
	}


	public void processHttpResponse(IResponse response)
	{
		processHttpResponse(response, null);
	}

	public void processHttpResponse(IResponse response, List<Object> gsonTypeAdapters)
	{
		String sMethod = "[processHttpResponse]";
		log.info(sMethod + "::Called!");

		GsonBuilder gson = new GsonBuilder();

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
					gson.registerTypeAdapter(response.getClass(), typeAdapter);
				}
			}
			String responseAsJsonString = gson.create().toJson(response, response.getClass());
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

	protected void updateResponseHeader()
	{
		servletResponse.setContentType("application/json");
		servletResponse.addHeader("X-Frame-Options", "SAMEORIGIN");
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

			sanitizeServletRequest();
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

		String line = null;
		try
		{
			BufferedReader reader = servletRequest.getReader();
			while ((line = reader.readLine()) != null)
			{
				postRequestBody.append(line);
			}
			log.info(sMethod + " result: " + postRequestBody.toString());
		}
		catch (Exception e)
		{
			log.warning(sMethod + "::Error occurred getting json parameter::" + e.getMessage());
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
					paramValues[i] = org.apache.commons.lang3.StringEscapeUtils.unescapeXml(wasDefender.scanForXSSInjections(paramValues[i]));

					getRequestKVPairs.put(paramName, paramValues[i]);
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
		String sMethod = "[tryGetBRBTransactionIdParam]";
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