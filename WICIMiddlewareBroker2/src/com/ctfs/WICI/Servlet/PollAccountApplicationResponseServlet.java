package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Helper.WICIObjectsHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.AccountApplicationSubmissionResponse;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.ctfs.WICI.AppConstants;
import com.google.gson.Gson;

public class PollAccountApplicationResponseServlet extends WICIServlet
{
	private static final long serialVersionUID = 2L;
	static Logger log = Logger.getLogger(PollAccountApplicationResponseServlet.class.getName());
	public static String EMPTY_STRING = "";

	@Override
	public void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		String sMethod = this.getClass().getName() + "[PollAccountApplicationResponseServlet].[handleRequest] ";
		log.info(sMethod);

		String transactionID = requestMediator.searchElementInsidePostRequestBody("transactionID") != null ? requestMediator.searchElementInsidePostRequestBody("transactionID") : EMPTY_STRING;		
		String action = requestMediator.searchElementInsidePostRequestBody("action") != null ? requestMediator.searchElementInsidePostRequestBody("action") : EMPTY_STRING;		
		String retrievalToken = requestMediator.searchElementInsidePostRequestBody("retrievalToken") != null ? requestMediator.searchElementInsidePostRequestBody("retrievalToken").toUpperCase() : EMPTY_STRING;		
		String phone = requestMediator.searchElementInsidePostRequestBody("phone") != null ? requestMediator.searchElementInsidePostRequestBody("phone") : EMPTY_STRING;

		log.info(sMethod + " transactionID = " + transactionID);
		log.info(sMethod + " action = " + action);
		log.info(sMethod + " retrievalToken = " + retrievalToken);
		log.info(sMethod + " phone = " + phone);

		
		WICIResponse accountApplicationResponse = null;

		if ("retrieve".equalsIgnoreCase(action.toLowerCase()))
		{
			accountApplicationResponse = retrieveAccountApplicationResponse(transactionID);
		}
		else if ("purge".equalsIgnoreCase(action.toLowerCase()))
		{
			//As per Jody
			//accountApplicationResponse = purgeAccountApplication(transactionID);
		}
		else if ("retrievepend".equalsIgnoreCase(action.toLowerCase()))
		{
			accountApplicationResponse = retrievePendingAccountApplicationResponse(retrievalToken, phone);
		}

		boolean isRetrievable = new WICIDBHelper().isApprovedAppRetrievable(transactionID, retrievalToken, phone);
		if(!isRetrievable){
			accountApplicationResponse = new WICIObjectsHelper().createUnretrievableResponse();
		}
		
		requestMediator.processHttpResponse(accountApplicationResponse);
	}

	private WICIResponse retrievePendingAccountApplicationResponse(String argRetrievalToken, String argPhone)
	{
		String sMethod = this.getClass().getName() + "[PollAccountApplicationResponseServlet].[retrievePendingAccountApplicationResponse] retrievalToken=" + argRetrievalToken + ", phone=" + argPhone;
		log.info(sMethod);

		AccountApplicationSubmissionResponse accountApplicationSubmissionResponse = new AccountApplicationSubmissionResponse();
		
		WICIResponse pendRetrieveResponse = null;

		try
		{
			String transID = new WICIDBHelper().getTransactionIDForApprovedApp(argRetrievalToken, argPhone);
						
			//Attempt to update the retrieval count if this transaction is approved already
			//We want to do this first, because we want to return the updated count to the front-end
			new WICIDBHelper().updateRetrievalCountForApprovedApp(transID);
			 
			// Get account application response
			accountApplicationSubmissionResponse = new WICIDBHelper().retrievePendingApplicationData(argRetrievalToken,argPhone);
			accountApplicationSubmissionResponse.setExternalReferencId(transID);			
			 
			pendRetrieveResponse = new WICIResponse(false, accountApplicationSubmissionResponse.getTransactionState(), accountApplicationSubmissionResponse);
			 
			//Just use the Gson converter to log the response
			Gson gson = new Gson();
			String printedResponse = gson.toJson(pendRetrieveResponse, WICIResponse.class);				
			log.info(sMethod + "\n::Pend Retrieve Response: \n" + printedResponse);
			
		}
		catch (Exception e)
		{
			log.warning(e.getMessage());

			pendRetrieveResponse = new WICIResponse(true, AppConstants.PEND_RETRIEVE_ACCOUNTAPPLICATION_REQUEST_FAILED, accountApplicationSubmissionResponse);
		}

		return pendRetrieveResponse;
	}

	private WICIResponse retrieveAccountApplicationResponse(String argTransactionID)
	{
		String sMethod = this.getClass().getName() + "[PollAccountApplicationResponseServlet].[retrieveAccountApplicationResponse] argTransactionID=" + argTransactionID;
		log.info(sMethod);

		AccountApplicationSubmissionResponse accountApplicationSubmissionResponse = new AccountApplicationSubmissionResponse();
		WICIResponse retrieveResponse = null;

		
		try
		{
			new WICIDBHelper().updateRetrievalCountForApprovedApp(argTransactionID);
			
			// Get account application response
			accountApplicationSubmissionResponse = new WICIDBHelper().retrieveAccountApplicationResponse(argTransactionID);

			retrieveResponse = new WICIResponse(false, accountApplicationSubmissionResponse.getTransactionState(), accountApplicationSubmissionResponse);
			//For logging purposes only
			Gson gson = new Gson();
			String printedResponse = gson.toJson(retrieveResponse, WICIResponse.class);	
			
			log.info(sMethod + "\n::Retrieve Response: \n" + printedResponse);
		}
		catch (Exception e)
		{
			log.warning(e.getMessage());

			retrieveResponse = new WICIResponse(true, AppConstants.RETRIEVE_ACCOUNTAPPLICATION_REQUEST_FAILED, accountApplicationSubmissionResponse);
		}

		return retrieveResponse;
	}

	private WICIResponse purgeAccountApplication(String argTransactionID)
	{
		String sMethod = this.getClass().getName() + "[PollAccountApplicationResponseServlet].[purgeAccountApplication] argTransactionID=" + argTransactionID;
		log.info(sMethod);

		WICIResponse purgeResponse = null;

		try
		{
			// Delete account application response
			WICIDBHelper wicidbHelper = new WICIDBHelper();
			int rowsAffected = wicidbHelper.deleteAccountApplicationData(argTransactionID);

			// Form response for client
			purgeResponse = new WICIResponse(false, AppConstants.PURGE_REQUEST_SUCCESS, rowsAffected);
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());

			// Form response for client
			purgeResponse = new WICIResponse(false, AppConstants.PURGE_REQUEST_FAILED, ex.getMessage());
		}

		return purgeResponse;
	}
	
}
