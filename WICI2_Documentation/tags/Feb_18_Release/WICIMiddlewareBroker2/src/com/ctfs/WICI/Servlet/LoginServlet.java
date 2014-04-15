package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;

import com.ctfs.WICI.Helper.ApplicationApkVersionValidator;
import com.ctfs.WICI.Helper.LoginInvocationHelper;
import com.ctfs.WICI.Helper.WICIObjectsHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.WICILoginResponse;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.ctfs.WICI.Helper.EmployerIDCodeValidator;
import com.ctfs.WICI.Model.IllegalAppVersionException;

public class LoginServlet extends WICIServlet
{
	private static final long serialVersionUID = 1L;
	static Logger log = Logger.getLogger(LoginServlet.class.getName());
	public static String EMPTY_STRING = "";

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

		String employerID = requestMediator.isHttpGetRequestParameterExist("employerID") ? requestMediator.getHttpGetRequestParameter("employerID") : EMPTY_STRING;
		String agentID = requestMediator.isHttpGetRequestParameterExist("agentID") ? requestMediator.getHttpGetRequestParameter("agentID") : EMPTY_STRING;
		String userLocation = requestMediator.isHttpGetRequestParameterExist("userLocation") ? requestMediator.getHttpGetRequestParameter("userLocation") : EMPTY_STRING;
		String apkVersion = requestMediator.isHttpGetRequestParameterExist("apkVersion") ? requestMediator.getHttpGetRequestParameter("apkVersion") : EMPTY_STRING;
		
		log.info(sMethod + "::employerID: " + employerID);
		log.info(sMethod + "::agentID: " + agentID);
		log.info(sMethod + "::userLocation: " + userLocation);
		log.info(sMethod + "::apkVersion: " + apkVersion);

		WICIResponse appResponse = new WICIResponse();
		WICILoginResponse loginResponse = new WICILoginResponse();

		try
		{
			new ApplicationApkVersionValidator().validateApkVersion(employerID, agentID, userLocation, apkVersion);
			
			Boolean employerIDValid = new EmployerIDCodeValidator().validateCode(employerID);
			
			if (!employerIDValid)
			{
				loginResponse.setMessage("Invalid Employer Id. Please correct and try again");
				loginResponse.setStatusCode(String.valueOf(HttpServletResponse.SC_FORBIDDEN)); // Force Failed Login Response
			}
			else
			{
				String derivedUserID = employerID + agentID;
				loginResponse = new LoginInvocationHelper().checkLocation(requestMediator, derivedUserID);
				loginResponse.setStatusCode(String.valueOf(HttpServletResponse.SC_OK));
			}

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
