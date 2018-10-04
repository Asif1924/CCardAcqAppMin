package com.ctfs.WICI.Concurrent;

import java.util.logging.Logger;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctfs.WICI.AppConstants;
import com.ctfs.WICI.Helper.AccountApplicationHelper;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Servlet.Model.CreditCardApplicationData;
import com.ctfs.WICI.Servlet.Model.WICIAccountApplicationResponse;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.google.gson.Gson;
import com.ibm.websphere.asynchbeans.Work;

public class AccountApplicationRequestThread implements Work
{
	static Logger log = Logger.getLogger(AccountApplicationRequestThread.class.getName());

	private final String transactionID;
	private final CreditCardApplicationData creditCardApplicationData;
	private final AccountApplicationRequestType aaRequestType;
	
	public AccountApplicationRequestThread(String argTransactionID, CreditCardApplicationData argCreditCardApplicationData, final AccountApplicationRequestType aaRequestObject)
	{
		this.transactionID = argTransactionID;
		this.creditCardApplicationData = argCreditCardApplicationData;
		this.aaRequestType = aaRequestObject;
	}

	@Override
	public void run()
	{
		String sMethod = this.getClass().getName() + "[AccountApplicationRequestThread].[run] ";
		log.info(sMethod);
		
		WICIDBHelper wicidbHelper = new WICIDBHelper();
		
		WICIResponse accountApplicationResponse = new WICIResponse();
		WICIAccountApplicationResponse submissionResponse = new WICIAccountApplicationResponse();
		String tabletResponse = "";
		
		//updateTable(transactionID, tabletResponse, AppConstants.QUEUE_REQUEST_PENDING,submissionResponse.getAppStatus());

		try
		{
			AccountApplicationHelper accountApplicationHelper = new AccountApplicationHelper();

			submissionResponse = accountApplicationHelper.doRequest(creditCardApplicationData, aaRequestType); 
			accountApplicationResponse.setData(submissionResponse);
		}
		catch (Exception e)
		{
			e.printStackTrace();
			log.warning(sMethod + " Exception: " + e.getMessage());
			accountApplicationResponse.setError(true);
			accountApplicationResponse.setMsg(e.getMessage());
		}
			simulateDelayIfNecessaryforSS();

		Gson gson = new Gson();
		tabletResponse = gson.toJson(accountApplicationResponse, WICIResponse.class);
		log.info(sMethod + "::Response: \n" + tabletResponse);
		
		String 	transactionState = AppConstants.QUEUE_REQUEST_COMPLETE;
		
		if( "PENDING".equalsIgnoreCase(submissionResponse.getAppStatus() ) )
			transactionState = AppConstants.QUEUE_REQUEST_PENDING;
			
		updateTable(transactionID, tabletResponse, transactionState,submissionResponse.getAppStatus());
		
		if(aaRequestType.getSin().equalsIgnoreCase("123498765")){
			try {
				wicidbHelper.updateAccountApplicationData(transactionID, tabletResponse, AppConstants.QUEUE_REQUEST_COMPLETE,submissionResponse.getAppStatus());
			} catch (Exception e) {
				e.printStackTrace();
			}
		}	
	}

	
	private void simulateDelayIfNecessaryforSS()
	{
		WICIConfigurationFactory wiciConfigurationFactory = new WICIConfigurationFactory();
		WICIConfiguration conf = wiciConfigurationFactory.createSharedServicesConfiguration();
		Integer accountApplicationDelay = conf.getAccountApplicationDelay();
		if (accountApplicationDelay != null && accountApplicationDelay > 0)
		{
			try
			{
				Thread.sleep(accountApplicationDelay);
			}
			catch (NumberFormatException e)
			{
				e.printStackTrace();
			}
			catch (InterruptedException e)
			{
				e.printStackTrace();
			}
		}
	}

	private void updateTable(String argTransactionID, String argAccountApplicationResponse, String argTransactionState,String appStatus)
	{
		String sMethod = this.getClass().getName() + "[AccountApplicationRequestThread].[updateTable] ";
		log.info(sMethod);

		try
		{
			WICIDBHelper wicidbHelper = new WICIDBHelper();
//			wicidbHelper.updateAccountApplicationData(argTransactionID, argAccountApplicationResponse, argTransactionState,appStatus);
			
			//If the app is approved, set the initial value of its retrieval count
			new WICIDBHelper().updateRetrievalCountForApprovedApp(argTransactionID);

		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
	}

	@Override
	public void release()
	{
		// TODO Auto-generated method stub

	}
}
