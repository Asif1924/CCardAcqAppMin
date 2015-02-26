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
import com.ctfs.WICI.Helper.ExternalReferenceIdHelper;
import com.ctfs.WICI.Helper.UniqueIDGenerator;
import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.BaseModel;
import com.ctfs.WICI.Servlet.Model.CreditCardApplicationData;
import com.ctfs.WICI.Servlet.Model.DatabaseResponse;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.ibm.websphere.asynchbeans.WorkException;
import com.ibm.websphere.asynchbeans.WorkItem;
import com.ibm.websphere.asynchbeans.WorkManager;

public class InitAccountApplicationServlet extends WICIServlet
{	
	private static final long serialVersionUID = 4L;	
	com.ibm.websphere.asynchbeans.WorkManager accountApplicationWorkManager;

	public InitAccountApplicationServlet()
	{
		String sMethod = this.getClass().getName() + "[InitAccountApplicationServlet] ";
		log.info(sMethod);

		try
		{
			InitialContext ctx = new InitialContext();
			accountApplicationWorkManager = (com.ibm.websphere.asynchbeans.WorkManager) ctx.lookup("wm/default");
			log.info("Work Manager " + accountApplicationWorkManager);
		}
		catch (NamingException e)
		{
			e.printStackTrace(System.out);
		}
	}

	@Override
	void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		String sMethod = this.getClass().getName() + "[handleRequest] ";
		log.info(sMethod);

		queueAccountApplicationRequest(requestMediator);
	}

	private void queueAccountApplicationRequest(WICIServletMediator requestMediator)
	{
		String sMethod = this.getClass().getName() + "[queueAccountApplicationRequest] ";
		log.info(sMethod);

		String transactionID = "";		
		CreditCardApplicationData incomingCreditCardApplicationData = new CreditCardApplicationData(requestMediator);		
		
		DatabaseResponse dbInsertionResponse = insertIntoTable(incomingCreditCardApplicationData);
		
		if (!dbInsertionResponse.isError())
		{
			//transactionID = (String) dbInsertionResponse.getData();
			transactionID = (String) dbInsertionResponse.getAccountApplicationRequestType().getExternalReferenceId();
			WICIResponse databaseResponse = new WICIResponse(false, AppConstants.QUEUE_REQUEST_SUBMIT, transactionID);
						
			final AccountApplicationRequestType aaObject = dbInsertionResponse.getAccountApplicationRequestType();
			
			// Update response
			requestMediator.processHttpResponse(databaseResponse);

			AccountApplicationRequestThread concurrentAccountApplicationRequest = new AccountApplicationRequestThread(transactionID, incomingCreditCardApplicationData, aaObject);

			try
			{
				WorkItem managedAccountApplicationThread = accountApplicationWorkManager.startWork(concurrentAccountApplicationRequest);
				ArrayList<WorkItem> managedThreads = new ArrayList<WorkItem>();
				managedThreads.add(managedAccountApplicationThread);
				accountApplicationWorkManager.join(managedThreads, WorkManager.JOIN_AND, 4000);
			}
			catch (WorkException e)
			{
				e.printStackTrace();
			}
			catch (IllegalArgumentException e)
			{
				e.printStackTrace();
			}
		}
		else
		{	
			// Update response
			requestMediator.processHttpResponse(dbInsertionResponse);
		}
	}

	private DatabaseResponse insertIntoTable(CreditCardApplicationData incomingCreditCardApplicationData)
	{
		String sMethod = this.getClass().getName() + "[insertIntoTable] ";
		log.info(sMethod);

		DatabaseResponse databaseResponse = null;
		String userID = ((BaseModel) incomingCreditCardApplicationData.getModel("loginScreen")).get("agentID");
		AccountApplicationRequestType aaObject = new AccountApplicationRequestTypeConverter().createAccountApplicationRequestFromCreditCardApplicationData(incomingCreditCardApplicationData);
		String requestData = incomingCreditCardApplicationData.getSOAPRequestBodyString(aaObject);
		String transactionID = aaObject.getExternalReferenceId();
		String retrievalToken = new ExternalReferenceIdHelper().getLastPartOfExternalRefId(transactionID);
		String currentTelephone = aaObject.getCurrentTelephoneNumber();
		
		try
		{
			WICIDBHelper wicidbHelper = new WICIDBHelper();
			wicidbHelper.insertAccountApplicationData(transactionID, userID, requestData, retrievalToken,currentTelephone);

			databaseResponse = new DatabaseResponse(false, "INSERT_SUCCESS", transactionID,aaObject);
		}
		catch (Exception e)
		{
			log.warning(sMethod + "---Problem inserting the requestData into table=" + e.getMessage());

			databaseResponse = new DatabaseResponse(true, "INSERT_FAILED", e.getMessage(),aaObject);

			e.printStackTrace();
		}
		
		return databaseResponse;
	}
}