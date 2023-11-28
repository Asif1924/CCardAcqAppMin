package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import com.ctfs.WICI.Helper.CWE117Fix;
import com.ctfs.WICI.Helper.PollAccountApplicationResponseHelper;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICIPollAccountApplicationRequest;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class PollAccountApplicationResponseServlet2 extends WICIServlet
{
	private static final long serialVersionUID = 2L;
	static Logger log = Logger.getLogger(PollAccountApplicationResponseServlet2.class.getName());
	public static String EMPTY_STRING = "";

	@Override
	public void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		log.info("PollAccountApplicationResponseServlet2[handleRequest]:: Called! ");

		String transactionID = requestMediator.searchElementInsidePostRequestBody("transactionID") != null ? requestMediator.searchElementInsidePostRequestBody("transactionID") : EMPTY_STRING;		
		String action = requestMediator.searchElementInsidePostRequestBody("action") != null ? requestMediator.searchElementInsidePostRequestBody("action") : EMPTY_STRING;		
		String retrievalToken = requestMediator.searchElementInsidePostRequestBody("retrievalToken") != null ? requestMediator.searchElementInsidePostRequestBody("retrievalToken").toUpperCase() : EMPTY_STRING;		
		String phone = requestMediator.searchElementInsidePostRequestBody("phone") != null ? requestMediator.searchElementInsidePostRequestBody("phone") : EMPTY_STRING;

		log.info("PollAccountApplicationResponseServlet2[handleRequest] transactionID = " + CWE117Fix.encodeCRLF(transactionID));
		log.info("PollAccountApplicationResponseServlet2[handleRequest] action = " +  CWE117Fix.encodeCRLF(action));
		log.info("PollAccountApplicationResponseServlet2[handleRequest] retrievalToken = " +  CWE117Fix.encodeCRLF(retrievalToken));
		log.info("PollAccountApplicationResponseServlet2[handleRequest] phone = " + CWE117Fix.encodeCRLF( phone));
		
		WICIResponse accountApplicationResponse = null;
		WICIPollAccountApplicationRequest wiciPollAccountApplicationRequest = new WICIPollAccountApplicationRequest();
		
		wiciPollAccountApplicationRequest.setTransactionID(transactionID);
		wiciPollAccountApplicationRequest.setAction(action);
		wiciPollAccountApplicationRequest.setRetrievalToken(retrievalToken);
		wiciPollAccountApplicationRequest.setPhone(phone);
		
		try {
			
			WICIConfiguration conf = new WICIConfigurationFactory().createReWriteDASSEndPointConfiguration();
			PollAccountApplicationResponseHelper pollAccountApplicationResponseHelper = new PollAccountApplicationResponseHelper();
			
			log.info("PollAccountApplicationResponseServlet2[handleRequest]:: DSSWICIPollAccountApplicationRequest = "+ CWE117Fix.encodeCRLF(wiciPollAccountApplicationRequest != null ?wiciPollAccountApplicationRequest.toString() : null));
			
			if( conf != null && conf.getRewritePollAccountAppEndPoint() != null && conf.getRewriteDssServiceEnv() != null) {
				
				log.info("PollAccountApplicationResponseServlet2[handleRequest]PollAccountApplication Point to   " +CWE117Fix.encodeCRLF(conf.getRewriteDssServiceEnv())  + " Endpoint "+CWE117Fix.encodeCRLF(conf.getRewritePollAccountAppEndPoint()));
		
				if(conf.getRewriteDssServiceEnv().equalsIgnoreCase("DSSDEV")){
				
					log.info("PollAccountApplicationResponseServlet2[handleRequest]:: Calling pollAccountApplicationResponseHelper.handleHttpPollAccountApplicationResponse(wiciPollAccountApplicationRequest, endPoint) ");
					accountApplicationResponse = pollAccountApplicationResponseHelper.
					                                 handleHttpPollAccountApplicationResponse(wiciPollAccountApplicationRequest, conf.getRewritePollAccountAppEndPoint());
				
				}else{
					
					log.info("PollAccountApplicationResponseServlet2[handleRequest]:: Calling pollAccountApplicationResponseHelper.handleHttpsPollAccountApplicationResponse(wiciPollAccountApplicationRequest, endPoint) ");
					accountApplicationResponse = pollAccountApplicationResponseHelper.
					                                 handleHttpsPollAccountApplicationResponse(wiciPollAccountApplicationRequest, conf.getRewritePollAccountAppEndPoint());
					
				}
			}else {
				log.warning("PollAccountApplicationResponseServlet2[handleRequest] eror while loading configuration: "  );
			}
			
			log.info("PollAccountApplicationResponseServlet2[handleRequest] The DSSWICIResponse = " +CWE117Fix.encodeCRLF(accountApplicationResponse != null ? accountApplicationResponse.toString() : null));
			
			if (accountApplicationResponse!= null) {
				
				accountApplicationResponse.setError(false);
				accountApplicationResponse.setMsg("Getting the PollAccountApplicationResponse Successfully!");
				
			}else{
				accountApplicationResponse.setError(true);
				accountApplicationResponse.setMsg("Failed to get the PollAccountApplicationResponse!");
			}
				
			
		} catch (Exception e) {
			log.warning("PollAccountApplicationResponseServlet2[handleRequest] Exception: " +CWE117Fix.encodeCRLF(e.getMessage()));
			accountApplicationResponse.setError(true);
			accountApplicationResponse.setMsg(e.getMessage());
			e.printStackTrace();
		}

		/*if ("retrieve".equalsIgnoreCase(action.toLowerCase())) {
			accountApplicationResponse = retrieveAccountApplicationResponse(transactionID);
		} else if ("purge".equalsIgnoreCase(action.toLowerCase())) {
			//As per Jody
			//accountApplicationResponse = purgeAccountApplication(transactionID);
		} else if ("retrievepend".equalsIgnoreCase(action.toLowerCase())) {
			accountApplicationResponse = retrievePendingAccountApplicationResponse(retrievalToken, phone);
		}

		boolean isRetrievable = new WICIDBHelper().isApprovedAppRetrievable(transactionID, retrievalToken, phone);
		if(!isRetrievable) {
			accountApplicationResponse = new WICIObjectsHelper().createUnretrievableResponse();
		}*/
		
		requestMediator.processHttpResponse(accountApplicationResponse);
	}

	/*private WICIResponse retrievePendingAccountApplicationResponse(String argRetrievalToken, String argPhone) {
		String sMethod = this.getClass().getName() + "[PollAccountApplicationResponseServlet].[retrievePendingAccountApplicationResponse] retrievalToken=" + argRetrievalToken + ", phone=" + argPhone;
		log.info(sMethod);

		AccountApplicationSubmissionResponse accountApplicationSubmissionResponse = new AccountApplicationSubmissionResponse();
		
		WICIResponse pendRetrieveResponse = null;

		try {
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
			
		} catch (Exception e) {
			log.warning(e.getMessage());
			pendRetrieveResponse = new WICIResponse(true, AppConstants.PEND_RETRIEVE_ACCOUNTAPPLICATION_REQUEST_FAILED, accountApplicationSubmissionResponse);
		}

		return pendRetrieveResponse;
	}

	private WICIResponse retrieveAccountApplicationResponse(String argTransactionID) {
		String sMethod = this.getClass().getName() + "[PollAccountApplicationResponseServlet].[retrieveAccountApplicationResponse] argTransactionID=" + argTransactionID;
		log.info(sMethod);

		AccountApplicationSubmissionResponse accountApplicationSubmissionResponse = new AccountApplicationSubmissionResponse();
		WICIResponse retrieveResponse = null;
		
		try {
			new WICIDBHelper().updateRetrievalCountForApprovedApp(argTransactionID);
			
			// Get account application response
			accountApplicationSubmissionResponse = new WICIDBHelper().retrieveAccountApplicationResponse(argTransactionID);

			retrieveResponse = new WICIResponse(false, accountApplicationSubmissionResponse.getTransactionState(), accountApplicationSubmissionResponse);
			//For logging purposes only
			Gson gson = new Gson();
			String printedResponse = gson.toJson(retrieveResponse, WICIResponse.class);	
			
			log.info(sMethod + "\n::Retrieve Response: \n" + printedResponse);
		} catch (Exception e) {
			log.warning(e.getMessage());
			retrieveResponse = new WICIResponse(true, AppConstants.RETRIEVE_ACCOUNTAPPLICATION_REQUEST_FAILED, accountApplicationSubmissionResponse);
		}

		return retrieveResponse;
	}

	private WICIResponse purgeAccountApplication(String argTransactionID) {
		String sMethod = this.getClass().getName() + "[PollAccountApplicationResponseServlet].[purgeAccountApplication] argTransactionID=" + argTransactionID;
		log.info(sMethod);

		WICIResponse purgeResponse = null;

		try {
			// Delete account application response
			WICIDBHelper wicidbHelper = new WICIDBHelper();
			int rowsAffected = wicidbHelper.deleteAccountApplicationData(argTransactionID);

			// Form response for client
			purgeResponse = new WICIResponse(false, AppConstants.PURGE_REQUEST_SUCCESS, rowsAffected);
		} catch (Exception ex) {
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
			// Form response for client
			purgeResponse = new WICIResponse(false, AppConstants.PURGE_REQUEST_FAILED, ex.getMessage());
		}

		return purgeResponse;
	}*/
	
}
