package com.ctfs.WICI.Concurrent;

import java.util.logging.Logger;

import com.ctfs.WICI.AppConstants;
import com.ctfs.WICI.Helper.AccountApplicationHelper;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Servlet.Model.CreditCardApplicationData;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.google.gson.Gson;
import com.ibm.websphere.asynchbeans.Work;

public class AccountApplicationRequestThread implements Work
{
	static Logger log = Logger.getLogger(AccountApplicationRequestThread.class.getName());

	private final String transactionID;
	private final CreditCardApplicationData creditCardApplicationData;	

	public AccountApplicationRequestThread(String argTransactionID, CreditCardApplicationData argCreditCardApplicationData)
	{
		this.transactionID = argTransactionID;
		this.creditCardApplicationData = argCreditCardApplicationData;
	}

	@Override
	public void run()
	{
		String sMethod = this.getClass().getName() + "[run] ";
		log.info(sMethod);

		WICIResponse accountApplicationResponse = new WICIResponse();
		String tabletResponse = "";

		updateTable(transactionID, tabletResponse, AppConstants.QUEUE_REQUEST_PENDING);

		try
		{
			accountApplicationResponse.setData(new AccountApplicationHelper().doRequest(creditCardApplicationData));
		}
		catch (Exception e)
		{
			e.printStackTrace();
			log.warning(sMethod + " Exception: " + e.getMessage());
			accountApplicationResponse.setError(true);
			accountApplicationResponse.setMsg(e.getMessage());
		}

		WICIConfiguration conf = new WICIConfigurationFactory().createWebServicesConfiguration();
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

		Gson gson = new Gson();
		tabletResponse = gson.toJson(accountApplicationResponse, WICIResponse.class);

		// Level.FINE is equivalent to debug
		log.info(sMethod + "::Response: \n" + tabletResponse);
		//log.log(Level.FINE, sMethod + "Response: \n" + tabletResponse);
		updateTable(transactionID, tabletResponse, AppConstants.QUEUE_REQUEST_COMPLETE);
	}

	private void updateTable(String argTransactionID, String argAccountApplicationResponse, String argTransactionState)
	{
		String sMethod = this.getClass().getName() + "[updateTable] ";
		log.info(sMethod);		

		try
		{
			new WICIDBHelper().updateAccountApplicationData(
					argTransactionID, 
					argAccountApplicationResponse,
					argTransactionState);
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
