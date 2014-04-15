package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.ServletException;

import com.ctfs.WICI.AppConstants;
import com.ctfs.WICI.Concurrent.AccountApplicationRequestThread;
import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.BaseModel;
import com.ctfs.WICI.Servlet.Model.CreditCardApplicationData;
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
				
		WICIResponse dbInsertionResponse = insertIntoTable(incomingCreditCardApplicationData);
		
		if (!dbInsertionResponse.isError())
		{
			transactionID = (String) dbInsertionResponse.getData();
			WICIResponse databaseResponse = new WICIResponse(false, AppConstants.QUEUE_REQUEST_SUBMIT, transactionID);
						
			// Update response
			requestMediator.processHttpResponse(databaseResponse);

			AccountApplicationRequestThread concurrentAccountApplicationRequest = new AccountApplicationRequestThread(transactionID, incomingCreditCardApplicationData);

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

	private WICIResponse insertIntoTable(CreditCardApplicationData incomingCreditCardApplicationData)
	{
		String sMethod = this.getClass().getName() + "[insertIntoTable] ";
		log.info(sMethod);

		WICIResponse databaseResponse = null;
		String transactionID = ((BaseModel) incomingCreditCardApplicationData.getModel("queueModel")).get("queueTransactionID");
		String userID = ((BaseModel) incomingCreditCardApplicationData.getModel("loginScreen")).get("agentID");
		String requestData = incomingCreditCardApplicationData.getSOAPRequestBodyString();

		//log.log(Level.FINE, "---Attempting to insert the requestData into table=" + requestData);
		
		try
		{
			WICIDBHelper wicidbHelper = new WICIDBHelper();
			wicidbHelper.insertAccountApplicationData(transactionID, userID, requestData);

			databaseResponse = new WICIResponse(false, "INSERT_SUCCESS", transactionID);
		}
		catch (Exception e)
		{
			log.warning(sMethod + "---Problem inserting the requestData into table=" + e.getMessage());

			databaseResponse = new WICIResponse(true, "INSERT_FAILED", e.getMessage());

			e.printStackTrace();
		}
		
		return databaseResponse;
	}
}