package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.Random;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.xml.bind.DatatypeConverter;
import com.ctfs.WICI.Helper.AuthorizationHelper;
import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Helper.WICIObjectsHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.AuthfieldValue;
import com.ctfs.WICI.Servlet.Model.WICILoginResponse;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.ctfs.WICI.exception.DuplicateAgentIDException;
import static com.ctfs.WICI.AppConstants.*;

public class AgentServlet extends WICIServlet
{
	private static final long serialVersionUID = 1L;
	static Logger log = Logger.getLogger(AgentServlet.class.getName());	

	WICIObjectsHelper requestHelper = new WICIObjectsHelper();
	WICIDBHelper wicidbHelper = new WICIDBHelper();	

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
		String password = requestMediator.searchElementInsidePostRequestBody("password") != null ? requestMediator.searchElementInsidePostRequestBody("password") : EMPTY_STRING;
		String userOperation=requestMediator.searchElementInsidePostRequestBody("userOperation") != null ? requestMediator.searchElementInsidePostRequestBody("userOperation") : EMPTY_STRING;
		String userName=requestMediator.searchElementInsidePostRequestBody("userName") != null ? requestMediator.searchElementInsidePostRequestBody("userName") : EMPTY_STRING;
		String locale=requestMediator.searchElementInsidePostRequestBody("locale") != null ? requestMediator.searchElementInsidePostRequestBody("locale") : EMPTY_STRING;
		String rollId=requestMediator.searchElementInsidePostRequestBody("rollId") != null ? requestMediator.searchElementInsidePostRequestBody("rollId") : EMPTY_STRING;
		
		log.info(sMethod + "::employerID: " + employerID);
		log.info(sMethod + "::agentID: " + agentID);
		log.info(sMethod + "::userLocation: " + userLocation);
		log.info(sMethod + "::apkVersion: " + apkVersion);
		log.info(sMethod + "::password: " + password);
		log.info(sMethod + "::userOperation: " + userOperation);
		log.info(sMethod + "::userName: " + userName);
		log.info(sMethod + "::locale: " + locale);
		log.info(sMethod + "::rollId: " + rollId);
		
		WICIResponse appResponse = new WICIResponse();
		WICILoginResponse loginResponse = new WICILoginResponse();
		String CONFIG_NAME_ENABLE_AGENT_AUTH = "ENABLE_AGENT_AUTH"; 
		try
		{
			AuthorizationHelper authorizationHelper = new AuthorizationHelper();
			AuthfieldValue values = authorizationHelper.getAuthfieldValue(requestMediator);
			String serialNumber=null;
			if (values != null && values.getMfgSerial() != null) {
				serialNumber = values.getMfgSerial().toUpperCase();
			}
		    log.info(sMethod + "::AuthID(mfgSerial=" + values.getMfgSerial() + ", buildSerial=" + values.getBuildSerial() + ")");
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
			log.warning(sMethod + " Exception: " + ex.getMessage());
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
			log.warning(sMethod + " Exception: " + ex.getMessage());
			appResponse.setError(true);
			appResponse.setMsg(ex.getMessage());
			ex.printStackTrace();
		}
		finally {
			requestMediator.processHttpResponse(appResponse);
		}
	}
	
	private String createAgent(int roleId, String userName, String activatedflag, String adminId, String passKey, String locale,String agency,String serialNumber) throws DuplicateAgentIDException,Exception
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
	}
}
