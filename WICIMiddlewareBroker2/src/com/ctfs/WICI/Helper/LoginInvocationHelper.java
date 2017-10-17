package com.ctfs.WICI.Helper;

import java.util.ArrayList;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletResponse;

import com.ctc.ctfs.channel.webicuserlocation.WebICCheckLocationRequest;
import com.ctfs.WICI.Servlet.Model.WICICheckLocationResponse;
import com.ctfs.WICI.Servlet.Model.WICILoginResponse;
import com.google.gson.Gson;

public class LoginInvocationHelper
{
	static Logger log = Logger.getLogger(LoginInvocationHelper.class.getName());
	public static String EMPTY_STRING = "";

	// TODO: DO NOT REMOVE. This was commented because the login feature was de-scoped. When it is re-scoped, this will be useful
	/*public WICILoginResponse deriveLoginResponse(LDAPResponse argLDAPResponse, HttpServletResponse argTabletResponse, String argUserID, String argUserLocation)
	{
		String sMethod = "[deriveLoginResponse]";
		log.info(sMethod);

		WICILoginResponse loginResponse = new WICILoginResponse();
		WICICheckLocationResponse userLocationResponse = new WICICheckLocationResponse();
		String message = "";
		String ltpaToken = "";
		String loginError = "";
		String roles = "";
		int httpStatusCode = argLDAPResponse.getHttpStatusCode();
		HttpResponse httpResponse = argLDAPResponse.getHttpResponse();
		Header[] responseHeaders = httpResponse.getAllHeaders();

		log.info(sMethod + "--HTTP response code: " + httpStatusCode);

		for (int i = 0; responseHeaders != null && i < responseHeaders.length; i++)
		{
			Header header = responseHeaders[i];
			log.info(sMethod + "--Got header: " + header.getName() + " with value: " + header.getValue());

			String headerName = header.getName();
			String headerValue = header.getValue();

			if (headerName.equalsIgnoreCase("Set-Cookie") && headerValue.toLowerCase().startsWith("ltpatoken2="))
				ltpaToken = headerValue;
			else if (headerName.equalsIgnoreCase("Set-Cookie") && headerValue.toLowerCase().startsWith("roles="))
			{
				roles = headerValue.substring("roles=".length());
				roles = roles.replace("Secure", "");
				roles = roles.replace(";", "");
				roles = roles.replace("\\", "");
				roles = roles.trim();
			}
			else if (headerName.equalsIgnoreCase("Set-Cookie") && headerValue.toLowerCase().startsWith("loginerror="))
				loginError = headerValue.substring("loginError=".length());
		}

		if (httpStatusCode == 200)
		{
			argTabletResponse.addHeader("Set-Cookie", ltpaToken);
			message = "SUCCESSFUL Authentication and authorization for user " + argUserID;

			userLocationResponse = attemptUserLocationCheck(argUserID, argUserLocation);
			loginResponse.setCheckLocation(userLocationResponse);
		}
		else if (httpStatusCode == 403)
		{
			if (loginError != null && loginError.startsWith("User authenticated but does not have appropriate role based access"))
				message = "User " + argUserID + " successfully authenticated but is not in appropriate role.";
			else
				message = "User " + argUserID + " failed authentication";
		}
		else
		{
			message = "Unexpected HTTP status code: " + httpStatusCode;
		}

		loginResponse.setRoles(roles);
		loginResponse.setMessage(message);
		loginResponse.setStatusCode("" + httpStatusCode);
		loginResponse.setLTPAToken(ltpaToken);

		return loginResponse;
	}*/

	private WICICheckLocationResponse attemptUserLocationCheck(WebICCheckLocationRequest locationRequest)
	{
		String sMethod = "[attemptUserLocationCheck]";
		log.info(sMethod);

		WICICheckLocationResponse resp = null;
		WICIDBHelper helper = new WICIDBHelper();

		try
		{
			//Removed WebICGateway call for retrieving UserLocation
			/*WICIPortalProxyFactory wiciPortalProxyFactory = new WICIPortalProxyFactory();
			AccountAcquisitionPortalProxy userLocationProxy = wiciPortalProxyFactory.createWICIWebServicesPortalProxy();
			String userLocation = requestMediator.searchElementInsidePostRequestBody("userLocation") != null ? requestMediator.searchElementInsidePostRequestBody("userLocation") : EMPTY_STRING;;
			CheckLocationHelper checkLocationHelper = new CheckLocationHelper();
			resp = checkLocationHelper.doRequest(requestMediator, argDerivedUserID, userLocation, userLocationProxy);*/
			
			//Direct DB Call to retrieve UserLocation
			
			resp = helper.retrieveUserLocation(locationRequest);
			
		}
		catch (Exception e)
		{
			e.printStackTrace();
			log.warning(sMethod + " Exception: " + e.getMessage());
		}

		return resp;
	}

	public WICILoginResponse checkLocation(String userLocation, String argDerivedUserID)
	{
		WICILoginResponse loginResponse = new WICILoginResponse();
		WICICheckLocationResponse userLocationResponse = new WICICheckLocationResponse();
		WebICCheckLocationRequest checkLocationRequest = new WebICCheckLocationRequest();
		checkLocationRequest.setLocationID(userLocation);
		userLocationResponse = attemptUserLocationCheck(checkLocationRequest);
		loginResponse.setCheckLocation(userLocationResponse);
		String message = "SUCCESSFUL Authentication and authorization for user " + argDerivedUserID;
		loginResponse.setRoles(getFMRRolesJSON());
		loginResponse.setMessage(message);
		loginResponse.setStatusCode(String.valueOf(HttpServletResponse.SC_OK));
		loginResponse.setLTPAToken("FakeToken");

		return loginResponse;
	}

	private ArrayList<String> createFMRRolesList()
	{
		ArrayList<String> FMRRolesList = new ArrayList<String>();
		FMRRolesList.add("FMR");
		return FMRRolesList;
	}

	private String getFMRRolesJSON()
	{
		Gson gson = new Gson();
		String rolesJSON = gson.toJson(createFMRRolesList(), ArrayList.class);
		return rolesJSON;
	}
}
