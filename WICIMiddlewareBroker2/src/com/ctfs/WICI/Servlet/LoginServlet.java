package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;

import com.ctfs.WICI.Helper.ApplicationApkVersionValidator;
import com.ctfs.WICI.Helper.AuthorizationHelper;
import com.ctfs.WICI.Helper.DictionaryInfoValidator;
import com.ctfs.WICI.Helper.EmployerIDCodeValidator;
import com.ctfs.WICI.Helper.LoginInvocationHelper;
import com.ctfs.WICI.Helper.WICIObjectsHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.AuthfieldValue;
import com.ctfs.WICI.Model.DictionaryInfo;
import com.ctfs.WICI.Model.IllegalAppVersionException;
import com.ctfs.WICI.Model.InvalidDictionaryInformationException;
import com.ctfs.WICI.Servlet.Model.WICILoginResponse;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class LoginServlet extends WICIServlet
{
	private static final long serialVersionUID = 1L;
	static Logger log = Logger.getLogger(LoginServlet.class.getName());	

	WICIObjectsHelper requestHelper = new WICIObjectsHelper();

	protected boolean isCheckLTPATokenRequired()
	{
		return false;
	}

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		String sMethod = this.getClass().getName() + "[handleRequest] ";
		log.info(sMethod);

		invokeValidate(requestMediator);
	}

	private void invokeValidate(WICIServletMediator requestMediator) throws IOException
	{
		String sMethod = this.getClass().getName() + "[invokeValidate] ";
		log.info(sMethod);

		String employerID = requestMediator.searchElementInsidePostRequestBody("employerID") != null ? requestMediator.searchElementInsidePostRequestBody("employerID") : EMPTY_STRING;
		String agentID = requestMediator.searchElementInsidePostRequestBody("agentID") != null ? requestMediator.searchElementInsidePostRequestBody("agentID") : EMPTY_STRING;
		String userLocation = requestMediator.searchElementInsidePostRequestBody("userLocation") != null ? requestMediator.searchElementInsidePostRequestBody("userLocation") : EMPTY_STRING;
		String apkVersion = requestMediator.searchElementInsidePostRequestBody("apkVersion") != null ? requestMediator.searchElementInsidePostRequestBody("apkVersion") : EMPTY_STRING;

		log.info(sMethod + "::employerID: " + employerID);
		log.info(sMethod + "::agentID: " + agentID);
		log.info(sMethod + "::userLocation: " + userLocation);
		log.info(sMethod + "::apkVersion: " + apkVersion);
		
		
		WICIResponse appResponse = new WICIResponse();
		WICILoginResponse loginResponse = new WICILoginResponse();

		try
		{
			AuthorizationHelper authorizationHelper = new AuthorizationHelper();

			AuthfieldValue values = authorizationHelper.getAuthfieldValue(requestMediator);

			//US3125 - Sep 16th 2014 Release
			log.info(sMethod + "::AuthID(mfgSerial=" + values.getMfgSerial() + ", buildSerial=" + values.getBuildSerial() + ")");
			
			ApplicationApkVersionValidator applicationApkVersionValidator = new ApplicationApkVersionValidator();
			applicationApkVersionValidator.validateApkVersion(employerID, agentID, userLocation, apkVersion, values);

			EmployerIDCodeValidator employerIDCodeValidator = new EmployerIDCodeValidator();
			Boolean employerIDValid = employerIDCodeValidator.validateCode(employerID);

			if (!employerIDValid)
			{
				loginResponse.setMessage("Invalid Employer Id. Please correct and try again");
				loginResponse.setStatusCode(String.valueOf(HttpServletResponse.SC_FORBIDDEN)); // Force Failed Login Response
			}
			else
			{
				String derivedUserID = employerID + agentID;
				LoginInvocationHelper loginInvocationHelper = new LoginInvocationHelper();
				loginResponse = loginInvocationHelper.checkLocation(requestMediator, derivedUserID);
				loginResponse.setStatusCode(String.valueOf(HttpServletResponse.SC_OK));
			}
			
			DictionaryInfoValidator dictInfoValidator = new DictionaryInfoValidator();
			DictionaryInfo dictInfo = dictInfoValidator.validateDictionaryInformation();						
			loginResponse.setDictionaryInfo(dictInfo);
			
			appResponse.setError(false);
			appResponse.setMsg(loginResponse.getMessage());
			appResponse.setData(loginResponse);
		}
		catch (IllegalAppVersionException ex)
		{
			log.info(sMethod + " Exception: " + ex.getMessage());
			String errrorMsg = "Version does not match!";

			// Prepare login response
			loginResponse.setStatusCode(String.valueOf(HttpServletResponse.SC_NON_AUTHORITATIVE_INFORMATION));
			loginResponse.setMessage(errrorMsg);

			// Prepare request response
			appResponse.setError(false);
			appResponse.setMsg(errrorMsg);
			appResponse.setData(loginResponse);
		}
		catch (InvalidDictionaryInformationException ex)
		{
			log.info(sMethod + " Exception: " + ex.getMessage());
			String errorMessage = "One of the values are null for the dictionary configuration keys";

			// Prepare login response
			loginResponse.setStatusCode(String.valueOf(HttpServletResponse.SC_NON_AUTHORITATIVE_INFORMATION));
			loginResponse.setMessage(errorMessage);

			// Prepare request response
			appResponse.setError(false);
			appResponse.setMsg(errorMessage);
			appResponse.setData(loginResponse);
		}
		
		catch (Exception ex)
		{
			log.warning(sMethod + " Exception: " + ex.getMessage());
			appResponse.setError(true);
			appResponse.setMsg(ex.getMessage());
		}
		finally
		{
			requestMediator.processHttpResponse(appResponse);
		}
	}
}
