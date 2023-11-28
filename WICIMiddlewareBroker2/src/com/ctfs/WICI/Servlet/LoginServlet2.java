package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import com.ctfs.WICI.Helper.AuthorizationHelper;
import com.ctfs.WICI.Helper.CWE117Fix;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICILoginHelper;
import com.ctfs.WICI.Helper.WICIObjectsHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.AuthfieldValue;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICIDSSResponse;
import com.ctfs.WICI.Servlet.Model.WICILoginRequest;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class LoginServlet2 extends WICIServlet
{
	private static final long serialVersionUID = 1L;
	static Logger log = Logger.getLogger(LoginServlet2.class.getName());	
	WICIObjectsHelper requestHelper = new WICIObjectsHelper();

	protected boolean isCheckLTPATokenRequired()
	{
		return false;
	}

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		log.info("LoginServlet2[handleRequest]:: Called !");

		invokeValidate(requestMediator);
	}

	private void invokeValidate(WICIServletMediator requestMediator) throws IOException
	{
		log.info("LoginServlet2[invokeValidate]::Called !");

		String employerID = requestMediator.searchElementInsidePostRequestBody("employerID") != null ? requestMediator.searchElementInsidePostRequestBody("employerID") : EMPTY_STRING;
		String agentID = requestMediator.searchElementInsidePostRequestBody("agentID") != null ? requestMediator.searchElementInsidePostRequestBody("agentID") : EMPTY_STRING;
		String userLocation = requestMediator.searchElementInsidePostRequestBody("userLocation") != null ? requestMediator.searchElementInsidePostRequestBody("userLocation") : EMPTY_STRING;
		String apkVersion = requestMediator.searchElementInsidePostRequestBody("apkVersion") != null ? requestMediator.searchElementInsidePostRequestBody("apkVersion") : EMPTY_STRING;
		String password = requestMediator.searchElementInsidePostRequestBody("password") != null ? requestMediator.searchElementInsidePostRequestBody("password") : EMPTY_STRING;
		String retailNetwork = requestMediator.searchElementInsidePostRequestBody("retailNetwork") != null ? requestMediator.searchElementInsidePostRequestBody("retailNetwork") : EMPTY_STRING;
		//String serialNumber = requestMediator.searchElementInsidePostRequestBody("serialNumber") != null ? requestMediator.searchElementInsidePostRequestBody("serialNumber") : EMPTY_STRING;
		//String userOperation=requestMediator.searchElementInsidePostRequestBody("userOperation") != null ? requestMediator.searchElementInsidePostRequestBody("userOperation") : EMPTY_STRING;
		
		//String mfgSerial = requestMediator.getRequestKVPairs().get("authfieldValue[MfgSerial]")!= null ? requestMediator.getRequestKVPairs().get("authfieldValue[MfgSerial]") : EMPTY_STRING;
		//String buildSerial = requestMediator.getRequestKVPairs().get("authfieldValue[BuildSerial]")!= null ? requestMediator.getRequestKVPairs().get("authfieldValue[BuildSerial]") : EMPTY_STRING;
		
		//Boolean blackListedEmpIDAgtIDValid = false;
		
		log.info("LoginServlet2[invokeValidate]::employerID: " + CWE117Fix.encodeCRLF(employerID));
		log.info("LoginServlet2[invokeValidate]::agentID: " + CWE117Fix.encodeCRLF(agentID));
		log.info("LoginServlet2[invokeValidate]::userLocation: " + CWE117Fix.encodeCRLF(userLocation));
		log.info("LoginServlet2[invokeValidate]::apkVersion: " + CWE117Fix.encodeCRLF(apkVersion));
		log.info("LoginServlet2[invokeValidate]::password: " + CWE117Fix.encodeCRLF(password));
		log.info("LoginServlet2[invokeValidate]::retailNetwork: " + CWE117Fix.encodeCRLF(retailNetwork));
		//log.info(sMethod + "::serialNumber: " + serialNumber);
		//log.info("LoginServlet2[invokeValidate]::mfgSerial = " + CWE117Fix.encodeCRLF(mfgSerial));
		//log.info("LoginServlet2[invokeValidate]::buildSerial = " + CWE117Fix.encodeCRLF(buildSerial));
		
		
		WICIResponse appResponse = new WICIResponse();
		WICIDSSResponse dssResp = new WICIDSSResponse();
		
		AuthorizationHelper authorizationHelper = new AuthorizationHelper();
		AuthfieldValue values;
		
		//boolean authfieldCheckEnable=false; 
	   // boolean enableEnstreamAuth = false;
	   // boolean isDebugMode = false;
		//String CONFIG_NAME_ENABLE_ENSTREAM_AUTH = "ENABLE_ENSTREAM_AUTH"; 
		
		try
		{
			WICIConfiguration conf = new WICIConfigurationFactory().createReWriteDASSEndPointConfiguration();
			WICILoginHelper loginHelper = new WICILoginHelper();
			
			//AuthField Code Changes
			values = authorizationHelper.getAuthfieldValue(requestMediator);
			log.info("[LoginServlet2[invokeValidate]::AuthID(mfgSerial) =" + CWE117Fix.encodeCRLF(values.getMfgSerial()) + ", [LoginServlet2[invokeValidate]::AuthID(buildSerial) ==" + CWE117Fix.encodeCRLF(values.getBuildSerial()) + ")");
			
			String mfgSerial = values.getMfgSerial()!= null ? values.getMfgSerial() : EMPTY_STRING;
			String buildSerial = values.getBuildSerial()!= null ? values.getBuildSerial(): EMPTY_STRING;
			
			log.info("[LoginServlet2[invokeValidate]:: After getting value from UI mfgSerial = " + CWE117Fix.encodeCRLF(mfgSerial));
			log.info("[LoginServlet2[invokeValidate]:: After getting value from UI buildSerial = " + CWE117Fix.encodeCRLF(buildSerial));
			
			//constructing the LoginRequest object
			WICILoginRequest loginRequest = constructWiciLoginRequest(employerID,agentID, userLocation,apkVersion, password,
					                                     retailNetwork, mfgSerial,buildSerial);
			
			log.info("LoginServlet2[invokeValidate]::DssWICILoginRequest : "+ CWE117Fix.encodeCRLF(loginRequest != null ?loginRequest.toString() : null));
			
			if( conf != null && conf.getRewriteLoginEndPoint() != null && conf.getRewriteDssServiceEnv() != null) {
				
				log.info("LoginServlet2[invokeValidate]Login Point to   " + CWE117Fix.encodeCRLF(conf.getRewriteDssServiceEnv())  + " Endpoint "+ CWE117Fix.encodeCRLF(conf.getRewriteLoginEndPoint()));
		
				if(conf.getRewriteDssServiceEnv().equalsIgnoreCase("DSSDEV")){
				
					log.info("LoginServlet2[invokeValidate]:: Calling loginHelper.submitWiciLoginHttpClient(loginRequest, endPoint)!");
					dssResp = loginHelper.submitWiciLoginHttpClient(loginRequest, conf.getRewriteLoginEndPoint());
				
				}else{
					
					log.info("LoginServlet2[invokeValidate]:: Calling loginHelper.submitWiciLoginHttpsClient(loginRequest, endPoint)!");
				    dssResp = loginHelper.submitWiciLoginHttpsClient(loginRequest, conf.getRewriteLoginEndPoint());
					
				}
			}else {
				log.warning("LoginServlet2[invokeValidate] eror while loading configuration: "  );
			}
			
			log.info("LoginServlet2[invokeValidate] Login2 DSS Rsponse  "+ CWE117Fix.encodeCRLF(dssResp != null ? dssResp.toString() : null));
			
			if ( dssResp != null && dssResp.getData() != null) {
				
				appResponse.setData(dssResp.getData());
				appResponse.setError(false);
				appResponse.setMsg(EMPTY_STRING);
			}else{
				
				appResponse.setError(true);
				appResponse.setMsg("The User login is not successfull!");
			}
			
		}catch (Exception ex)
		{
			log.warning("LoginServlet2[invokeValidate] Exception: " +  CWE117Fix.encodeCRLF(ex.getMessage()));
			appResponse.setError(true);
			appResponse.setMsg(ex.getMessage());
		}
		finally
		{
			requestMediator.processHttpResponse(appResponse);
		}
			
			/*AuthorizationHelper authorizationHelper = new AuthorizationHelper();

			AuthfieldValue values = authorizationHelper.getAuthfieldValue(requestMediator);

			//US3125 - Sep 16th 2014 Release
			log.info(sMethod + "::AuthID(mfgSerial=" + values.getMfgSerial() + ", buildSerial=" + values.getBuildSerial() + ")");
			
			ApplicationApkVersionValidator applicationApkVersionValidator = new ApplicationApkVersionValidator();
			applicationApkVersionValidator.validateApkVersion(employerID, agentID, userLocation, apkVersion, values);

			EmployerIDCodeValidator employerIDCodeValidator = new EmployerIDCodeValidator();
			Boolean employerIDValid = employerIDCodeValidator.validateCode(employerID);
			log.info("Employer Id Valid returned value :: " + employerIDValid);
			String roleId=null;
			// US4231
			
			
			
			if(employerID != "" && employerID != null) {
				if (!"E".equalsIgnoreCase(employerID.toUpperCase())) {
					try {
						WICIDBHelper wicidbHelper = new WICIDBHelper();
						LoginInfo logonInfo = new LoginInfo();
						logonInfo.setAgentID(agentID);
						logonInfo.setApkVersion(apkVersion);
						logonInfo.setBuildSerial((values.getBuildSerial()));
						logonInfo.setEmployerID(employerID);
						logonInfo.setMfgSerial(values.getMfgSerial());
						logonInfo.setUserLocation(userLocation);

						blackListedEmpIDAgtIDValid = wicidbHelper.employerIdAgentIDExists(logonInfo);
						log.info("Employer Id and Agent Id Exists returned value :: " + blackListedEmpIDAgtIDValid);
					} catch (Exception e) {
						log.info("Error :: Employer Id and Agent Id validation check error!");
					}
					
					WICIDBHelper wicidbHelper = new WICIDBHelper();	
					String CONFIG_NAME_ENABLE_AGENT_AUTH = "ENABLE_AGENT_AUTH"; 
					authfieldCheckEnable=wicidbHelper.isAuthfieldCheckEnabled(CONFIG_NAME_ENABLE_AGENT_AUTH);
					if(authfieldCheckEnable)
					{
						log.info("Authentication started...");
						WICIDBHelper wiciAuthHelper = new WICIDBHelper();
						roleId=wiciAuthHelper.validateUserNamePassKey((employerID+agentID),encodePassWord(password),agentID);
						log.info("roleId"+roleId);
						if(roleId==null)
						{
							loginResponse.setMessage(LOGIN_FAILED);
							loginResponse.setStatusCode(LOGIN_FAILED_CD);
						}
					}
				}				
			}			
			
			if (!employerIDValid)
			{
				loginResponse.setMessage("Invalid Employer Id. Please correct and try again");
				loginResponse.setStatusCode(String.valueOf(HttpServletResponse.SC_FORBIDDEN)); // Force Failed Login Response
			}
			else if (blackListedEmpIDAgtIDValid)
			{
				loginResponse.setMessage("Login Failed. Please Contact your administrator");
				loginResponse.setStatusCode(String.valueOf(HttpServletResponse.SC_FORBIDDEN)); // Force Failed Login Response
			}
			else
			{
				if(roleId!=null || "E".equalsIgnoreCase(employerID.toUpperCase())|| !authfieldCheckEnable)
				{
				String derivedUserID = employerID + agentID;
				LoginInvocationHelper loginInvocationHelper = new LoginInvocationHelper();
				loginResponse = loginInvocationHelper.checkLocation(retailNetwork, userLocation, derivedUserID);
				loginResponse.setStatusCode(String.valueOf(HttpServletResponse.SC_OK));
				WICIDBHelper wicidbhelper = new WICIDBHelper();	
				enableEnstreamAuth = wicidbhelper.isAuthfieldCheckEnabled(CONFIG_NAME_ENABLE_ENSTREAM_AUTH);
				loginResponse.setEnableEnstreamAuth(enableEnstreamAuth);
				isDebugMode = wicidbhelper.isDebugMode(values.getMfgSerial(), values.getBuildSerial());
				loginResponse.setDebugMode(isDebugMode);
				try {
					WICIDBHelper wicidbHelper = new WICIDBHelper();
					LoginInfo logonInfo = new LoginInfo();
					logonInfo.setAgentID(agentID);
					logonInfo.setApkVersion(apkVersion);
					logonInfo.setBuildSerial((values.getBuildSerial()));
					logonInfo.setEmployerID(employerID);
					logonInfo.setMfgSerial(values.getMfgSerial());
					logonInfo.setUserLocation(userLocation);
					
					if(wicidbHelper.deviceWithThisMfgSerialNumberExists(values.getMfgSerial())) {
						boolean loggedIn = false;
						loggedIn = wicidbHelper.checkAgentPreLoggedin(logonInfo);
						log.info("loggedIn Response :: " + loggedIn);
						
						if( loggedIn ) {				
							String errorMsg = "Your login details are currently in use";

							// Prepare login response
							loginResponse.setStatusCode(String.valueOf(HttpServletResponse.SC_OK));
							loginResponse.setMessage(errorMsg);

							// Prepare request response
							appResponse.setError(false);
							appResponse.setMsg(errorMsg);
							appResponse.setData(loginResponse);
						} else {
							wicidbHelper.logonInfo(logonInfo);
						}
					} else {
						wicidbHelper.logonInfo(logonInfo);
					}
					
				} catch (Exception e) {
					log.info("Error :: Update Logon info into DB");
				}
				}
			}
			
			if(roleId!=null || "E".equalsIgnoreCase(employerID.toUpperCase())|| !authfieldCheckEnable )
			{
			DictionaryInfoValidator dictInfoValidator = new DictionaryInfoValidator();
			DictionaryInfo dictInfo = dictInfoValidator.validateDictionaryInformation();						
			loginResponse.setDictionaryInfo(dictInfo);
			appResponse.setError(false);
			appResponse.setMsg(loginResponse.getMessage());
			}
			else {
				appResponse.setError(true);
			}
			
			log.info(loginResponse + " loginResponse: " + loginResponse.getRoleId());
			loginResponse.setRoleId(roleId);
			appResponse.setData(loginResponse);*/
		//}
		/*catch (IllegalAppVersionException ex)
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
		}*/
		
		
	}
	
	/*private String encodePassWord(String passWord)
	{
		String encodedPassWord = null;
		try {
			// Encode data
			encodedPassWord = DatatypeConverter.printBase64Binary(passWord
					.getBytes());
			System.out.println(passWord + " Encoded= " + encodedPassWord);
		} catch (Exception e) {
			System.out.println(e);
		}
		return encodedPassWord;
	}*/
	
	//Constructing the WiciLoginRequest Object
	
	private WICILoginRequest constructWiciLoginRequest(String employerID,
			                                           String agentID,
			                                           String userLocation,
			                                           String apkVersion,
			                                           String password,
			                                           String retailNetwork,
			                                           String mfgSerial,
			                                           String buildSerial){
		
          WICILoginRequest loginRequest = new WICILoginRequest();
		
			loginRequest.setEmployerID(employerID);
			loginRequest.setAgentID(agentID);
			loginRequest.setUserLocation(userLocation);
			loginRequest.setApkVersion(apkVersion);
			loginRequest.setPassword(password);
			loginRequest.setRetailNetwork(retailNetwork);
			loginRequest.setMfgSerial(mfgSerial);
			loginRequest.setBuildSerial(buildSerial);
			
		return loginRequest;
		
	}

}
