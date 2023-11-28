package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.ServletException;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctfs.WICI.AppConstants;
import com.ctfs.WICI.Concurrent.AccountApplicationRequestThread;
import com.ctfs.WICI.Helper.AccountApplicationRequestTypeConverter;
import com.ctfs.WICI.Helper.AuthorizationHelper;
import com.ctfs.WICI.Helper.CWE117Fix;
import com.ctfs.WICI.Helper.ExternalReferenceIdHelper;
import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.AccountApplicationContactInfo;
import com.ctfs.WICI.Model.AccountApplicationSubmissionResponse;
import com.ctfs.WICI.Model.AuthfieldValue;
import com.ctfs.WICI.Servlet.Model.BaseModel;
import com.ctfs.WICI.Servlet.Model.CreditCardApplicationData;
import com.ctfs.WICI.Servlet.Model.DatabaseResponse;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.google.gson.Gson;
import com.ibm.websphere.asynchbeans.WorkException;
import com.ibm.websphere.asynchbeans.WorkItem;
import com.ibm.websphere.asynchbeans.WorkManager;

public class InitAccountApplicationServlet extends WICIServlet
{	
	private static final long serialVersionUID = 4L;	
	com.ibm.websphere.asynchbeans.WorkManager accountApplicationWorkManager;

	public InitAccountApplicationServlet()
	{
		log.info("InitAccountApplicationServlet called");

		try {
			InitialContext ctx = new InitialContext();
			accountApplicationWorkManager = (com.ibm.websphere.asynchbeans.WorkManager) ctx.lookup("wm/default");
			log.info("Work Manager " + accountApplicationWorkManager);
		} catch (NamingException e) {
			e.printStackTrace(System.out);
		}
	}

	@Override
	void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		log.info("InitAccountApplicationServlet[handleRequest] ");

		try {
			queueAccountApplicationRequest(requestMediator);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private void queueAccountApplicationRequest(WICIServletMediator requestMediator) throws Exception {
		
		log.info("InitAccountApplicationServlet[queueAccountApplicationRequest] requestMediator : " + CWE117Fix.encodeCRLF(requestMediator != null ?requestMediator.toString() : null));
		
		String transactionID = "";
		String duplicateTransID = null;
		String agentID = null;
		String serialNumber=null;
		
		CreditCardApplicationData incomingCreditCardApplicationData = new CreditCardApplicationData(requestMediator);	
		AuthorizationHelper authorizationHelper = new AuthorizationHelper();
		WICIDBHelper wicidbHelper = new WICIDBHelper();
		
		AuthfieldValue values = authorizationHelper.getAuthfieldValue(requestMediator);

		//US3125 - Sep 16th 2014 Release consentGranted
		log.info("InitAccountApplicationServlet[queueAccountApplicationRequest] ::AuthID(mfgSerial=" + CWE117Fix.encodeCRLF(values.getMfgSerial()) + ", buildSerial=" + CWE117Fix.encodeCRLF(values.getBuildSerial()) + ")");
		if (values.getMfgSerial() != null) {
			serialNumber = values.getMfgSerial().toUpperCase();
		}
		
		String userID = ((BaseModel) incomingCreditCardApplicationData.getModel("loginScreen")).get("agentID");
		String employerID = ((BaseModel) incomingCreditCardApplicationData.getModel("loginScreen")).get("employerID");
		
		if (employerID != null && employerID.equalsIgnoreCase("E")) {
			agentID = userID;
		} else {
			agentID = employerID + userID;
		}
		
		String applicationReferenceID = ((BaseModel) incomingCreditCardApplicationData.getModel("contactInfoScreen")).get("applicationReferenceID");
		duplicateTransID = wicidbHelper.getDuplicateTransactionIDWithUserId(applicationReferenceID, agentID);
		log.info("InitAccountApplicationServlet[queueAccountApplicationRequest] \n:: Agent ID & Application ReferenceID from Tablet Request :: \n" + CWE117Fix.encodeCRLF(agentID) + " :: " + CWE117Fix.encodeCRLF(applicationReferenceID));
		log.info("InitAccountApplicationServlet[queueAccountApplicationRequest] \n:: Duplicate Transaction ID :: \n" + CWE117Fix.encodeCRLF(duplicateTransID));
		
		if(duplicateTransID != null && duplicateTransID.equalsIgnoreCase(applicationReferenceID)) {
			AccountApplicationSubmissionResponse accountApplicationSubmissionResponse = new AccountApplicationSubmissionResponse();
			WICIResponse retrieveResponse = null;
			
			try {
				// Get account application response
				accountApplicationSubmissionResponse.setTransactionState(AppConstants.QUEUE_REQUEST_PENDING);
				
				String responseDataString = "{\"error\":false,\"msg\":\"\",\"data\":{\"appStatus\":\"PENDING\",\"queueName\":\"PREFIX\"}}";
				
				Gson gson = new Gson();
				WICIResponse responseData = gson.fromJson(responseDataString, WICIResponse.class);								
				accountApplicationSubmissionResponse.setResponseData(responseData);
				String retrievalToken = new ExternalReferenceIdHelper().getLastPartOfExternalRefId(duplicateTransID);
				
				accountApplicationSubmissionResponse.setRetrievalToken(retrievalToken);
				//AccountApplicationContactInfo aaContactInfo = new AccountApplicationRequestTypeConverter().createAccountApplicationContactInfo(incomingCreditCardApplicationData);
				//String currentTelephone = aaContactInfo.getPrimaryPhone();
				//accountApplicationSubmissionResponse.setCurrentTelephone(currentTelephone);
				//accountApplicationSubmissionResponse.setConsentGranted(resultSet.getString("CONSENT_GRANTED"));
				accountApplicationSubmissionResponse.setExternalReferencId(duplicateTransID);

				retrieveResponse = new WICIResponse(false, accountApplicationSubmissionResponse.getTransactionState(), accountApplicationSubmissionResponse);
				//For logging purposes only
				Gson gson1 = new Gson();
				String printedResponse = gson1.toJson(retrieveResponse, WICIResponse.class);	
				
				log.info("InitAccountApplicationServlet[queueAccountApplicationRequest]  \n::Duplicate Submission Response: \n" + CWE117Fix.encodeCRLF(printedResponse));
				
				requestMediator.processHttpResponse(retrieveResponse);
			} catch (Exception e) {
				log.warning(e.getMessage());
				retrieveResponse = new WICIResponse(true, AppConstants.RETRIEVE_ACCOUNTAPPLICATION_REQUEST_FAILED, accountApplicationSubmissionResponse);
				
				requestMediator.processHttpResponse(retrieveResponse);
			}
		} else {
			DatabaseResponse dbInsertionResponse = insertIntoTable(incomingCreditCardApplicationData,serialNumber);
			
			if (!dbInsertionResponse.isError()) {
				//transactionID = (String) dbInsertionResponse.getData();
				transactionID = (String) dbInsertionResponse.getAccountApplicationRequestType().getExternalReferenceId();
				WICIResponse databaseResponse = new WICIResponse(false, AppConstants.QUEUE_REQUEST_SUBMIT, transactionID);
				final AccountApplicationRequestType aaObject = dbInsertionResponse.getAccountApplicationRequestType();
				
				// Update response
				requestMediator.processHttpResponse(databaseResponse);

				AccountApplicationRequestThread concurrentAccountApplicationRequest = new AccountApplicationRequestThread(transactionID, incomingCreditCardApplicationData, aaObject);

				try {
					WorkItem managedAccountApplicationThread = accountApplicationWorkManager.startWork(concurrentAccountApplicationRequest);
					ArrayList<WorkItem> managedThreads = new ArrayList<WorkItem>();
					managedThreads.add(managedAccountApplicationThread);
					accountApplicationWorkManager.join(managedThreads, WorkManager.JOIN_AND, 4000);
				} catch (WorkException e) {
					e.printStackTrace();
				} catch (IllegalArgumentException e) {
					e.printStackTrace();
				}
			} else {	
				// Update response
				requestMediator.processHttpResponse(dbInsertionResponse);
			}
		}
		
	}
	
	private DatabaseResponse insertIntoTable(CreditCardApplicationData incomingCreditCardApplicationData,String tabSerialNum) {
		log.info("InitAccountApplicationServlet[insertIntoTable]");
		
		WICIDBHelper wicidbHelper = new WICIDBHelper();
		String CONFIG_NAME_ENABLE_AGENT_AUTH = "ENABLE_AGENT_AUTH"; 

		DatabaseResponse databaseResponse = null;
		String userID = ((BaseModel) incomingCreditCardApplicationData.getModel("loginScreen")).get("agentID");
		String employerId = ((BaseModel) incomingCreditCardApplicationData.getModel("loginScreen")).get("employerID");
		String firstName = ((BaseModel) incomingCreditCardApplicationData.getModel("loginScreen")).get("firstName");
		String lastName = ((BaseModel) incomingCreditCardApplicationData.getModel("loginScreen")).get("lastName");
		String retailNetWork = ((BaseModel) incomingCreditCardApplicationData.getModel("loginScreen")).get("retailNetWork");
		String longitude = ((BaseModel) incomingCreditCardApplicationData.getModel("loginScreen")).get("longitude");
		String latitude = ((BaseModel) incomingCreditCardApplicationData.getModel("loginScreen")).get("latitude");
		
		String sec_firstName = ((BaseModel) incomingCreditCardApplicationData.getModel("loginScreen")).get("firstNameOtherStaffMember") != null ? ((BaseModel) incomingCreditCardApplicationData.getModel("loginScreen")).get("firstNameOtherStaffMember") : EMPTY_STRING;
		String sec_lastName = ((BaseModel) incomingCreditCardApplicationData.getModel("loginScreen")).get("lastNameOtherStaffMember") != null ? ((BaseModel) incomingCreditCardApplicationData.getModel("loginScreen")).get("lastNameOtherStaffMember") : EMPTY_STRING;
		String sec_employee_number = ((BaseModel) incomingCreditCardApplicationData.getModel("loginScreen")).get("employeeNumberIdOtherStaffMember") != null ? ((BaseModel) incomingCreditCardApplicationData.getModel("loginScreen")).get("employeeNumberIdOtherStaffMember") : EMPTY_STRING;;

		String unitNumber= ((BaseModel) incomingCreditCardApplicationData.getModel("personalData2_Address")).get("suiteunit");
		String streetNumber= ((BaseModel) incomingCreditCardApplicationData.getModel("personalData2_Address")).get("streetnumber");
		String streetName= ((BaseModel) incomingCreditCardApplicationData.getModel("personalData2_Address")).get("addressline1");
		
		String applicationReferenceID = ((BaseModel) incomingCreditCardApplicationData.getModel("contactInfoScreen")).get("applicationReferenceID");
		
		log.info("InitAccountApplicationServlet[insertIntoTable] applicationReferenceID from tablet request :: " + CWE117Fix.encodeCRLF(applicationReferenceID));
		
		boolean authfieldCheckEnable=wicidbHelper.isAuthfieldCheckEnabled(CONFIG_NAME_ENABLE_AGENT_AUTH);
		
		AccountApplicationRequestType aaObject = new AccountApplicationRequestTypeConverter().createAccountApplicationRequestFromCreditCardApplicationData(incomingCreditCardApplicationData,tabSerialNum,authfieldCheckEnable);
		AccountApplicationContactInfo aaContactInfo = new AccountApplicationRequestTypeConverter().createAccountApplicationContactInfo(incomingCreditCardApplicationData);
		
		String requestData = incomingCreditCardApplicationData.getSOAPRequestBodyString(aaObject);
		String transactionID = aaObject.getExternalReferenceId();
		String consentGranted = aaObject.getEnstreamConsent();
		String retrievalToken = new ExternalReferenceIdHelper().getLastPartOfExternalRefId(transactionID);
		String currentTelephone = aaContactInfo.getPrimaryPhone();
		
		log.info("InitAccountApplicationServlet[insertIntoTable] transactionID from requestConverter :: " + CWE117Fix.encodeCRLF(transactionID));
		
		try {
			if (employerId != null && employerId.equalsIgnoreCase("E")
					|| !authfieldCheckEnable) {
				wicidbHelper.insertAccountApplicationData(transactionID,
						userID, requestData, retrievalToken, currentTelephone,consentGranted,unitNumber,streetNumber,streetName,aaObject,employerId, firstName,lastName,retailNetWork,longitude,latitude,sec_firstName,sec_lastName,sec_employee_number);
			} else {
				wicidbHelper.insertAccountApplicationData(transactionID,(employerId + userID), requestData, retrievalToken,currentTelephone,consentGranted,unitNumber,streetNumber,streetName,aaObject,employerId, null, null, retailNetWork,longitude,latitude,sec_firstName,sec_lastName,sec_employee_number);
			}
			databaseResponse = new DatabaseResponse(false, "INSERT_SUCCESS", transactionID,aaObject);
		} catch (Exception e) {
			log.warning("InitAccountApplicationServlet[insertIntoTable]---Problem inserting the requestData into table=" + CWE117Fix.encodeCRLF(e.getMessage()));
			databaseResponse = new DatabaseResponse(true, "INSERT_FAILED", e.getMessage(),aaObject);
			e.printStackTrace();
		}
		
		return databaseResponse;
	}
}