package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.DatatypeConverter;
import com.ctfs.WICI.Helper.ApplicationApkVersionValidator;
import com.ctfs.WICI.Helper.AuthorizationHelper;
import com.ctfs.WICI.Helper.CWE117Fix;
import com.ctfs.WICI.Helper.DictionaryInfoValidator;
import com.ctfs.WICI.Helper.EmployerIDCodeValidator;
import com.ctfs.WICI.Helper.LoginInvocationHelper;
import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Helper.WICIObjectsHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.AuthfieldValue;
import com.ctfs.WICI.Model.DictionaryInfo;
import com.ctfs.WICI.Model.IllegalAppVersionException;
import com.ctfs.WICI.Model.InvalidDictionaryInformationException;
import com.ctfs.WICI.Model.LoginInfo;
import com.ctfs.WICI.Servlet.Model.WICILoginResponse;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import static com.ctfs.WICI.AppConstants.*;

public class LoginServlet extends WICIServlet
{
	private static final long serialVersionUID = 1L;
	
    static final String CONFIGNAME_WICITRAININGMODULE_EFFECTIVEDATE = "WICITRAININGMODULE_EFFECTIVEDATE";
	static final String CONFIGNAME_CHECKATTESTATION_LIST = "CHECKATTESTATION_LIST";
	
	static Logger log = Logger.getLogger(LoginServlet.class.getName());	
	WICIObjectsHelper requestHelper = new WICIObjectsHelper();

	protected boolean isCheckLTPATokenRequired()
	{
		return false;
	}

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		log.info("LoginServlet[handleRequest]");

		invokeValidate(requestMediator);
	}

	private void invokeValidate(WICIServletMediator requestMediator) throws IOException
	{
		
		String employerID = requestMediator.searchElementInsidePostRequestBody("employerID") != null ? requestMediator.searchElementInsidePostRequestBody("employerID") : EMPTY_STRING;
		String agentID = requestMediator.searchElementInsidePostRequestBody("agentID") != null ? requestMediator.searchElementInsidePostRequestBody("agentID") : EMPTY_STRING;
		String userLocation = requestMediator.searchElementInsidePostRequestBody("userLocation") != null ? requestMediator.searchElementInsidePostRequestBody("userLocation") : EMPTY_STRING;
		String apkVersion = requestMediator.searchElementInsidePostRequestBody("apkVersion") != null ? requestMediator.searchElementInsidePostRequestBody("apkVersion") : EMPTY_STRING;
		String password = requestMediator.searchElementInsidePostRequestBody("password") != null ? requestMediator.searchElementInsidePostRequestBody("password") : EMPTY_STRING;
		String retailNetwork = requestMediator.searchElementInsidePostRequestBody("retailNetwork") != null ? requestMediator.searchElementInsidePostRequestBody("retailNetwork") : EMPTY_STRING;
		//String serialNumber = requestMediator.searchElementInsidePostRequestBody("serialNumber") != null ? requestMediator.searchElementInsidePostRequestBody("serialNumber") : EMPTY_STRING;
		//String userOperation=requestMediator.searchElementInsidePostRequestBody("userOperation") != null ? requestMediator.searchElementInsidePostRequestBody("userOperation") : EMPTY_STRING;
		
		Boolean blackListedEmpIDAgtIDValid = false;
		
		log.info("LoginServlet[invokeValidate]::employerID: " + CWE117Fix.encodeCRLF(employerID));
		log.info("LoginServlet[invokeValidate]::agentID: " + CWE117Fix.encodeCRLF(agentID));
		log.info("LoginServlet[invokeValidate]::userLocation: " + CWE117Fix.encodeCRLF(userLocation));
		log.info("LoginServlet[invokeValidate]::apkVersion: " + CWE117Fix.encodeCRLF(apkVersion));
		log.info("LoginServlet[invokeValidate]::password: " + CWE117Fix.encodeCRLF(password));
		log.info("LoginServlet[invokeValidate]::retailNetwork: " + CWE117Fix.encodeCRLF(retailNetwork));
		//log.info(sMethod + "::serialNumber: " + serialNumber);
		
		WICIResponse appResponse = new WICIResponse();
		WICILoginResponse loginResponse = new WICILoginResponse();
		boolean authfieldCheckEnable=false; 
	    boolean enableEnstreamAuth = false;
	    boolean isDebugMode = false;
		String CONFIG_NAME_ENABLE_ENSTREAM_AUTH = "ENABLE_ENSTREAM_AUTH"; 

		try
		{
			AuthorizationHelper authorizationHelper = new AuthorizationHelper();

			AuthfieldValue values = authorizationHelper.getAuthfieldValue(requestMediator);
			//US3125 - Sep 16th 2014 Release
			log.info("LoginServlet[invokeValidate]::AuthID(mfgSerial=" + CWE117Fix.encodeCRLF(values.getMfgSerial()) + ", buildSerial=" + CWE117Fix.encodeCRLF(values.getBuildSerial()) + ")");
			
			ApplicationApkVersionValidator applicationApkVersionValidator = new ApplicationApkVersionValidator();
			applicationApkVersionValidator.validateApkVersion(employerID, agentID, userLocation, apkVersion, values);

			EmployerIDCodeValidator employerIDCodeValidator = new EmployerIDCodeValidator();
			Boolean employerIDValid = employerIDCodeValidator.validateCode(employerID);
			log.info("Employer Id Valid returned value :: " + CWE117Fix.encodeCRLF(String.valueOf(employerIDValid)));
			String roleId=null;
			String trainingModuleEffectiveDate = null;
			String checkAttestation_List = null;
			
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
						log.info("Employer Id and Agent Id Exists returned value :: " + CWE117Fix.encodeCRLF(String.valueOf(blackListedEmpIDAgtIDValid)));
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
						log.info("roleId"+CWE117Fix.encodeCRLF(String.valueOf(roleId)));
						if(roleId==null)
						{
							loginResponse.setMessage(LOGIN_FAILED);
							loginResponse.setStatusCode(LOGIN_FAILED_CD);
						}
						
						trainingModuleEffectiveDate = wicidbHelper
								.getConfigValueByConfigName(CONFIGNAME_WICITRAININGMODULE_EFFECTIVEDATE);

						if (trainingModuleEffectiveDate != null) {

							loginResponse.setTrainingModuleEffectiveDate(trainingModuleEffectiveDate);

						}
						checkAttestation_List = wicidbHelper
								.getConfigValueByConfigName(CONFIGNAME_CHECKATTESTATION_LIST);

						if (checkAttestation_List != null) {
							loginResponse.setCheckAttestation_List(checkAttestation_List);
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
					
					trainingModuleEffectiveDate = wicidbHelper.getConfigValueByConfigName(CONFIGNAME_WICITRAININGMODULE_EFFECTIVEDATE);
					
					if(trainingModuleEffectiveDate != null ){
						loginResponse.setTrainingModuleEffectiveDate(trainingModuleEffectiveDate);
					}
					
					checkAttestation_List = wicidbHelper.getConfigValueByConfigName(CONFIGNAME_CHECKATTESTATION_LIST);
					
					if(checkAttestation_List != null ){
						loginResponse.setCheckAttestation_List(checkAttestation_List);
					}
					
					if(wicidbHelper.deviceWithThisMfgSerialNumberExists(values.getMfgSerial())) {
						boolean loggedIn = false;
						loggedIn = wicidbHelper.checkAgentPreLoggedin(logonInfo);
						log.info("loggedIn Response :: " + CWE117Fix.encodeCRLF(String.valueOf(loggedIn)));
						
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
			
			log.info(CWE117Fix.encodeCRLF(loginResponse != null ?loginResponse.toString() : null) + " loginResponse: " + CWE117Fix.encodeCRLF(loginResponse.getRoleId()));
			loginResponse.setRoleId(roleId);
			appResponse.setData(loginResponse);
		}
		catch (IllegalAppVersionException ex)
		{
			log.info("LoginServlet[invokeValidate] Exception: " + CWE117Fix.encodeCRLF(ex.getMessage()));
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
			log.info("LoginServlet[invokeValidate] Exception: " + CWE117Fix.encodeCRLF(ex.getMessage()));
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
			log.warning("LoginServlet[invokeValidate] Exception: " + CWE117Fix.encodeCRLF(ex.getMessage()));
			appResponse.setError(true);
			appResponse.setMsg(ex.getMessage());
		}
		finally
		{
			requestMediator.processHttpResponse(appResponse);
		}
	}
	
	private String encodePassWord(String passWord)
	{
		String encodedPassWord = null;
		try {
			// Encode data
			encodedPassWord = DatatypeConverter.printBase64Binary(passWord
					.getBytes());
			System.out.println(CWE117Fix.encodeCRLF(passWord) + " Encoded= " + CWE117Fix.encodeCRLF(encodedPassWord));
		} catch (Exception e) {
			System.out.println(e);
		}
		return encodedPassWord;
	}

}
