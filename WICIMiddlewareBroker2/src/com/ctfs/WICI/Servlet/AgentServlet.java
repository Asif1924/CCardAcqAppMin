package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.Random;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.xml.bind.DatatypeConverter;
import com.ctfs.WICI.Helper.AuthorizationHelper;
import com.ctfs.WICI.Helper.CWE117Fix;
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

		String employerID = requestMediator.searchElementInsidePostRequestBody("employerID") != null ? requestMediator.searchElementInsidePostRequestBody("employerID") : EMPTY_STRING;
		String agentID = requestMediator.searchElementInsidePostRequestBody("agentID") != null ? requestMediator.searchElementInsidePostRequestBody("agentID") : EMPTY_STRING;
		String userLocation = requestMediator.searchElementInsidePostRequestBody("userLocation") != null ? requestMediator.searchElementInsidePostRequestBody("userLocation") : EMPTY_STRING;
		String apkVersion = requestMediator.searchElementInsidePostRequestBody("apkVersion") != null ? requestMediator.searchElementInsidePostRequestBody("apkVersion") : EMPTY_STRING;
		String password = requestMediator.searchElementInsidePostRequestBody("password") != null ? requestMediator.searchElementInsidePostRequestBody("password") : EMPTY_STRING;
		String userOperation=requestMediator.searchElementInsidePostRequestBody("userOperation") != null ? requestMediator.searchElementInsidePostRequestBody("userOperation") : EMPTY_STRING;
		String userName=requestMediator.searchElementInsidePostRequestBody("userName") != null ? requestMediator.searchElementInsidePostRequestBody("userName") : EMPTY_STRING;
		String locale=requestMediator.searchElementInsidePostRequestBody("locale") != null ? requestMediator.searchElementInsidePostRequestBody("locale") : EMPTY_STRING;
		String rollId=requestMediator.searchElementInsidePostRequestBody("rollId") != null ? requestMediator.searchElementInsidePostRequestBody("rollId") : EMPTY_STRING;
		
		log.info("AgentServlet[invokeValidate]::employerID: " + CWE117Fix.encodeCRLF(employerID));
		log.info("AgentServlet[invokeValidate]::agentID: " + CWE117Fix.encodeCRLF(agentID));
		log.info("AgentServlet[invokeValidate]::userLocation: " + CWE117Fix.encodeCRLF(userLocation));
		log.info("AgentServlet[invokeValidate]::apkVersion: " + CWE117Fix.encodeCRLF(apkVersion));
		log.info("AgentServlet[invokeValidate]::password: " + CWE117Fix.encodeCRLF(password));
		log.info("AgentServlet[invokeValidate]::userOperation: " + CWE117Fix.encodeCRLF(userOperation));
		log.info("AgentServlet[invokeValidate]::userName: " + CWE117Fix.encodeCRLF(userName));
		log.info("AgentServlet[invokeValidate]::locale: " + CWE117Fix.encodeCRLF(locale));
		log.info("AgentServlet[invokeValidate]::rollId: " + CWE117Fix.encodeCRLF(rollId));
		
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
		    log.info("AgentServlet[invokeValidate]::AuthID(mfgSerial=" + CWE117Fix.encodeCRLF(values.getMfgSerial()) + ", buildSerial=" + CWE117Fix.encodeCRLF(values.getBuildSerial()) + ")");
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
			log.warning("AgentServlet[invokeValidate] Exception: " + CWE117Fix.encodeCRLF(ex.getMessage()));
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
			log.warning("AgentServlet[invokeValidate] Exception: " + CWE117Fix.encodeCRLF(ex.getMessage()));
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
		log.info("roleId"+CWE117Fix.encodeCRLF(String.valueOf(roleId))+"userName"+CWE117Fix.encodeCRLF(userName)+"activatedflag"+CWE117Fix.encodeCRLF(activatedflag)+"adminId"+CWE117Fix.encodeCRLF(adminId)+"passKey"+CWE117Fix.encodeCRLF(passKey)+"locale"+CWE117Fix.encodeCRLF(locale)+"agency"+CWE117Fix.encodeCRLF(agency)+"serialNumber"+CWE117Fix.encodeCRLF(serialNumber));
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
		log.info("Generated Pass: " + CWE117Fix.encodeCRLF(pass));
		return pass;
	}
	
	private int getRoleId(String rolename) throws Exception
	{
		int roleId=wicidbHelper.getRoleId(rolename);
		return roleId;
	}
	private int updateAgent(String userName,String modifiedId,String passKey,String employerID,String rollId) throws Exception
	{
		log.info("::agentId:: " + CWE117Fix.encodeCRLF(userName));
		int update = wicidbHelper.updateAgent(userName, modifiedId,passKey,employerID,rollId);
		return update;
	}
	private boolean deleteAgent(String userName,String modifiedAdminId,String serialNumber,String employerID,String rollId) throws Exception
	{
		log.info("::agentId:: " + CWE117Fix.encodeCRLF(userName));
		int auth = wicidbHelper.deleteAgent(userName,modifiedAdminId,serialNumber,employerID,rollId);
		if (auth > 0) {
			return true;
		}
		return false;
	}
	private WICILoginResponse searchAgent(String userName,String agency,String userOperation,String agentID,String rollId) throws Exception
	{
		log.info("::agentId:: " + CWE117Fix.encodeCRLF(userName)+"agency"+CWE117Fix.encodeCRLF(agency)+"userOperation"+CWE117Fix.encodeCRLF(userOperation)+"agentID"+CWE117Fix.encodeCRLF(agentID));
		WICILoginResponse wiciLoginResponse = wicidbHelper.searchAgent(userName,agency,userOperation,agentID,rollId);
		return wiciLoginResponse;
	}
	private WICILoginResponse searchAnyAgent(String userName) throws Exception
	{
		log.info("::agentId:: " + CWE117Fix.encodeCRLF(userName));
		WICILoginResponse wiciLoginResponse = wicidbHelper.searchAnyAgent(userName);
		return wiciLoginResponse;
	}
	private String encodePassWord(String passWord) throws Exception
	{
		String encodedPassWord = null;
		try {
			// Encode data
			encodedPassWord = DatatypeConverter.printBase64Binary(passWord.getBytes());
			log.info(passWord + " Encoded= " + CWE117Fix.encodeCRLF(encodedPassWord));
		} catch (Exception e) {
			throw e;
		}
		return encodedPassWord;
	}
}
