package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;
import javax.servlet.ServletException;

import com.ctfs.WICI.Helper.AgentHelper;
import com.ctfs.WICI.Helper.CWE117Fix;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.WICIAgentInfoRequest;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICIResponse;


public class AgentServlet2 extends WICIServlet
{
	private static final long serialVersionUID = 1L;
	static Logger log = Logger.getLogger(AgentServlet2.class.getName());	

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{

		invokeValidate(requestMediator);
	}

	private void invokeValidate(WICIServletMediator requestMediator) throws IOException
	{
		log.info("AgentServlet2[invokeValidate]:: called");

		String employerID = requestMediator.searchElementInsidePostRequestBody("employerID") != null ? requestMediator.searchElementInsidePostRequestBody("employerID") : EMPTY_STRING;
		String agentID = requestMediator.searchElementInsidePostRequestBody("agentID") != null ? requestMediator.searchElementInsidePostRequestBody("agentID") : EMPTY_STRING;
		String userLocation = requestMediator.searchElementInsidePostRequestBody("userLocation") != null ? requestMediator.searchElementInsidePostRequestBody("userLocation") : EMPTY_STRING;
		String apkVersion = requestMediator.searchElementInsidePostRequestBody("apkVersion") != null ? requestMediator.searchElementInsidePostRequestBody("apkVersion") : EMPTY_STRING;
		String password = requestMediator.searchElementInsidePostRequestBody("password") != null ? requestMediator.searchElementInsidePostRequestBody("password") : EMPTY_STRING;
		String userOperation=requestMediator.searchElementInsidePostRequestBody("userOperation") != null ? requestMediator.searchElementInsidePostRequestBody("userOperation") : EMPTY_STRING;
		String userName=requestMediator.searchElementInsidePostRequestBody("userName") != null ? requestMediator.searchElementInsidePostRequestBody("userName") : EMPTY_STRING;
		String locale=requestMediator.searchElementInsidePostRequestBody("locale") != null ? requestMediator.searchElementInsidePostRequestBody("locale") : EMPTY_STRING;
		String rollId=requestMediator.searchElementInsidePostRequestBody("rollId") != null ? requestMediator.searchElementInsidePostRequestBody("rollId") : EMPTY_STRING;
		String mfgSerial = requestMediator.getRequestKVPairs().get("authfieldValue[MfgSerial]")!= null ? requestMediator.getRequestKVPairs().get("authfieldValue[MfgSerial]") : EMPTY_STRING;
		String buildSerial = requestMediator.getRequestKVPairs().get("authfieldValue[BuildSerial]")!= null ? requestMediator.getRequestKVPairs().get("authfieldValue[BuildSerial]") : EMPTY_STRING;
		
		log.info("AgentServlet2[invokeValidate]::::employerID: " + CWE117Fix.encodeCRLF(employerID));
		log.info("AgentServlet2[invokeValidate]::::agentID: " + CWE117Fix.encodeCRLF(agentID));
		log.info("AgentServlet2[invokeValidate]::::userLocation: " +CWE117Fix.encodeCRLF(userLocation));
		log.info("AgentServlet2[invokeValidate]::::apkVersion: " + CWE117Fix.encodeCRLF(apkVersion));
		log.info("AgentServlet2[invokeValidate]::::password: " + CWE117Fix.encodeCRLF(password));
		log.info("AgentServlet2[invokeValidate]::::userOperation: " + CWE117Fix.encodeCRLF(userOperation));
		log.info("AgentServlet2[invokeValidate]::::userName: " + CWE117Fix.encodeCRLF(userName));
		log.info("AgentServlet2[invokeValidate]::::locale: " + CWE117Fix.encodeCRLF(locale));
		log.info("AgentServlet2[invokeValidate]::::rollId: " + CWE117Fix.encodeCRLF(rollId));
		log.info("AgentServlet2[invokeValidate]::::mfgSerial: " + CWE117Fix.encodeCRLF(mfgSerial));
		log.info("AgentServlet2[invokeValidate]::::buildSerial: " + CWE117Fix.encodeCRLF(buildSerial));
		WICIResponse dssWICIResponse = new WICIResponse();
		dssWICIResponse.setError(true);
		dssWICIResponse.setMsg("Failed to get the response from Database!");
		
		try {
		
			WICIConfiguration conf = new WICIConfigurationFactory().createReWriteDASSEndPointConfiguration();
			AgentHelper agentHelper = new AgentHelper();
			WICIAgentInfoRequest wiciAgentInfoRequest = new WICIAgentInfoRequest();
			wiciAgentInfoRequest.setAgentID(agentID);
			wiciAgentInfoRequest.setApkVersion(apkVersion);
			wiciAgentInfoRequest.setEmployerID(employerID);
			wiciAgentInfoRequest.setLocale(locale);
			wiciAgentInfoRequest.setUserLocation(userLocation);
			wiciAgentInfoRequest.setUserOperation(userOperation);
			wiciAgentInfoRequest.setUserName(userName);
			wiciAgentInfoRequest.setPassword(password);
			wiciAgentInfoRequest.setRoleId(rollId);
			wiciAgentInfoRequest.setMfgSerial(mfgSerial);
			wiciAgentInfoRequest.setBuildSerial(buildSerial);
			
			log.info(":: WICIAgentInfoRequest = "+CWE117Fix.encodeCRLF(wiciAgentInfoRequest.toString()));
			
			if( conf != null && conf.getRewriteAgentEndPoint() != null && conf.getRewriteDssServiceEnv() != null) {
				
				log.info("AgentServlet2[invokeValidate]::Agent Point to   " +CWE117Fix.encodeCRLF(conf.getRewriteDssServiceEnv())  + " Endpoint "+CWE117Fix.encodeCRLF(conf.getRewriteAgentEndPoint()));
		
				if(conf.getDssserviceEnv().equalsIgnoreCase("DSSDEV")){
				
					log.info("AgentServlet2[invokeValidate]:: Calling agentHelper.handleHttpAgentInfoRequest(wiciAgentInfoRequest, endPoint)");
					dssWICIResponse = agentHelper.handleHttpAgentInfoRequest(wiciAgentInfoRequest, conf.getRewriteAgentEndPoint());
				
				}else{
					
					log.info("AgentServlet2[invokeValidate]:: Calling agentHelper.handleHttpsAgentInfoRequest(wiciAgentInfoRequest, endPoint)");
					dssWICIResponse = agentHelper.handleHttpsAgentInfoRequest(wiciAgentInfoRequest, conf.getRewriteAgentEndPoint());
					
				}
			}else {
				log.warning("AgentServlet2[invokeValidate]:: eror while loading configuration: " );
			}
	    	
			log.info(":: The DSSWICIResponse ::"+CWE117Fix.encodeCRLF(dssWICIResponse.toString()));
			
			if (dssWICIResponse != null) {
				
				dssWICIResponse.setError(false);
				dssWICIResponse.setMsg("Successfully get the response from Database!");
				
			}
			
		}catch (Exception e) {
			log.warning("AgentServlet2[invokeValidate]:: Exception: " + CWE117Fix.encodeCRLF(e.getMessage()));
			dssWICIResponse.setError(true);
			dssWICIResponse.setMsg(e.getMessage());
			e.printStackTrace();
		}
		
		requestMediator.processHttpResponse(dssWICIResponse);
		
		//WICILoginResponse loginResponse = new WICILoginResponse();
		//String CONFIG_NAME_ENABLE_AGENT_AUTH = "ENABLE_AGENT_AUTH"; 
		/*try
		{
			AuthorizationHelper authorizationHelper = new AuthorizationHelper();
			AuthfieldValue values = authorizationHelper.getAuthfieldValue(requestMediator);
			String serialNumber=null;
			if (values != null && values.getMfgSerial() != null) {
				serialNumber = values.getMfgSerial().toUpperCase();
			}
		    log.info("AgentServlet2[invokeValidate]::::AuthID(mfgSerial=" + values.getMfgSerial() + ", buildSerial=" + values.getBuildSerial() + ")");
			if(employerID != "" && employerID != null) {
				if (!"E".equalsIgnoreCase(employerID.toUpperCase())) {
					if(wicidbHelper.isAuthfieldCheckEnabled(CONFIG_NAME_ENABLE_AGENT_AUTH))
					{
						log.info("Authentication started...");
						if(userOperation!=null)
							if (userOperation.equalsIgnoreCase(CREATE)) {
								int roleId=getRoleId(USER);
								password=createPassWord();
								createAgent(roleId, (employerID+userName),ACTIVATED,agentID, encodePassWord(password), locale, employerID,serialNumber);
								loginResponse.setPassword(password);
								loginResponse.setMessage(AGENT_ID_CREATED_MSG);
								loginResponse.setStatusCode(AGENT_ID_CREATED);
							}
							else if (userOperation.equalsIgnoreCase(UPDATE)) {
								loginResponse = searchAgent((employerID + userName), employerID,userOperation,agentID,rollId);
							}
							else if(userOperation.equalsIgnoreCase(CONFIRM_UPDATE))
							{
								if(rollId!=null && (rollId.equalsIgnoreCase(ADMIN) || rollId.equalsIgnoreCase(SUPER_ADMIN)) && !(userName.equalsIgnoreCase(agentID)))
								{
								password=createPassWord();
								int updatedRec=updateAgent((employerID+userName),agentID ,encodePassWord(password),employerID,rollId);
								if (updatedRec > 0) {
									loginResponse.setPassword(password);
									loginResponse.setMessage(UPDATED_AGENT_MSG);
									loginResponse.setStatusCode(UPDATED_AGENT);
								} else {
									loginResponse.setMessage(UPDATE_AGENT_FAILED_MSG);
									loginResponse.setStatusCode(UPDATE_AGENT_FAILED);
								}
							  }else{
								  	loginResponse.setMessage(UPDATE_AGT_DENIED_MSG);
									loginResponse.setStatusCode(UPDATE_AGENT_FAILED);  
							  }
							}
							else if (userOperation.equalsIgnoreCase(DELETE)) {
								loginResponse = searchAgent((employerID + userName), employerID,userOperation,agentID,rollId);
							}
							else if(userOperation.equalsIgnoreCase(CONFIRM_DELETE))
							{
								if (rollId != null && (rollId.equalsIgnoreCase(ADMIN)||rollId.equalsIgnoreCase(SUPER_ADMIN))&& !(userName.equalsIgnoreCase(agentID))) {
									boolean deleteflag = deleteAgent((employerID + userName), agentID,serialNumber, employerID,rollId);
									if (deleteflag) {
										loginResponse.setMessage(DELETED_AGENT_MSG);
										loginResponse.setStatusCode(DELETED_AGENT);
									} else {
										loginResponse.setMessage(DEL_AGENT_FAILED_MSG);
										loginResponse.setStatusCode(DEL_AGENT_FAILED);
									}
								} else {
									loginResponse.setMessage(DEL_AGT_PER_DENIED_MSG);
									loginResponse.setStatusCode(DEL_AGENT_FAILED);
								}
							}
							else if(userOperation.equalsIgnoreCase(SEARCH))
							{
								loginResponse=searchAnyAgent((employerID+userName));
							}
						}
					}				
			}			
			appResponse.setError(false);
			appResponse.setMsg(loginResponse.getMessage());
			appResponse.setData(loginResponse);
		}
		catch (DuplicateAgentIDException ex)
		{
			log.warning("AgentServlet2[invokeValidate]:: Exception: " + ex.getMessage());
			loginResponse.setStatusCode(DUPLICATE_AGENT);
			loginResponse.setMessage(DUPLICATE_AGENT_MSG);
			appResponse.setError(false);
			appResponse.setMsg(DUPLICATE_AGENT_MSG);
			appResponse.setData(loginResponse);
		}
		catch (Exception ex)
		{
			loginResponse.setStatusCode(SERVICE_FAILURE);
			loginResponse.setMessage(SERVICE_FAILURE_MSG);
			log.warning("AgentServlet2[invokeValidate]:: Exception: " + ex.getMessage());
			appResponse.setError(true);
			appResponse.setMsg(ex.getMessage());
			ex.printStackTrace();
		}
		finally {
			requestMediator.processHttpResponse(appResponse);
		}*/
	}
	
	/*private String createAgent(int roleId, String userName, String activatedflag, String adminId, String passKey, String locale,String agency,String serialNumber) throws DuplicateAgentIDException,Exception
	{
		log.info("roleId"+roleId+"userName"+userName+"activatedflag"+activatedflag+"adminId"+adminId+"passKey"+passKey+"locale"+locale+"agency"+agency+"serialNumber"+serialNumber);
		wicidbHelper.insertUserInfo(roleId, userName, activatedflag, adminId, passKey, locale, agency,serialNumber);
		return passKey;
	}
	
	private String createPassWord()
	{
		log.info("Generating pass...");
		String uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		String intChar = "0123456789";
		Random r = new Random();
		String pass = "";
		while (pass.length() != 6) {
			int rPick = r.nextInt(4);
			for (int count = 0; count < 5; count++) {
				int spot = r.nextInt(25);
				pass += uCase.charAt(spot);
			}
			int spot = r.nextInt(9);
			pass += intChar.charAt(spot);
		}
		log.info("Generated Pass: " + pass);
		return pass;
	}
	
	private int getRoleId(String rolename) throws Exception
	{
		int roleId=wicidbHelper.getRoleId(rolename);
		return roleId;
	}
	private int updateAgent(String userName,String modifiedId,String passKey,String employerID,String rollId) throws Exception
	{
		log.info("::agentId:: " + userName);
		int update = wicidbHelper.updateAgent(userName, modifiedId,passKey,employerID,rollId);
		return update;
	}
	private boolean deleteAgent(String userName,String modifiedAdminId,String serialNumber,String employerID,String rollId) throws Exception
	{
		log.info("::agentId:: " + userName);
		int auth = wicidbHelper.deleteAgent(userName,modifiedAdminId,serialNumber,employerID,rollId);
		if (auth > 0) {
			return true;
		}
		return false;
	}
	private WICILoginResponse searchAgent(String userName,String agency,String userOperation,String agentID,String rollId) throws Exception
	{
		log.info("::agentId:: " + userName+"agency"+agency+"userOperation"+userOperation+"agentID"+agentID);
		WICILoginResponse wiciLoginResponse = wicidbHelper.searchAgent(userName,agency,userOperation,agentID,rollId);
		return wiciLoginResponse;
	}
	private WICILoginResponse searchAnyAgent(String userName) throws Exception
	{
		log.info("::agentId:: " + userName);
		WICILoginResponse wiciLoginResponse = wicidbHelper.searchAnyAgent(userName);
		return wiciLoginResponse;
	}
	private String encodePassWord(String passWord) throws Exception
	{
		String encodedPassWord = null;
		try {
			// Encode data
			encodedPassWord = DatatypeConverter.printBase64Binary(passWord.getBytes());
			log.info(passWord + " Encoded= " + encodedPassWord);
		} catch (Exception e) {
			throw e;
		}
		return encodedPassWord;
	}*/
}
