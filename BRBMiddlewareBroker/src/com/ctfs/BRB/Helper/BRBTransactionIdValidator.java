package com.ctfs.BRB.Helper;

import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.logging.Logger;

import javax.naming.NamingException;

import com.ctfs.BRB.Helper.Factory.ServerConfigurationFactory;
import com.ctfs.BRB.Helper.Factory.ServerConfigurationHelper;
import com.ctfs.BRB.Helper.Factory.StateTrackerUpdaterFactory;
import com.ctfs.BRB.dblayer.interfaces.ICustomerTransactionTableEntity;
import com.ctfs.BRB.exceptions.SQLInjectionAttackException;
import com.ctfs.BRB.exceptions.TransactionIdExpiredException;

public class BRBTransactionIdValidator
{
	static Logger log = Logger.getLogger(BRBTransactionIdValidator.class.getName());
	private static final String TimeoutTrackingScreenID = "12"; //'No Screen - Middleware Timeout'
	private static final long DefaultTransactionIdTimeOut = 1800000; // In
																		// milliseconds
																		// (30
																		// minutes)
	private static final String DefaultTransactionIdTimeOutMsg = "BRB Transaction ID has been expired"; // In
																											// milliseconds
																											// (30
																											// minutes)

	public void validateBrbTransactionIDForExpiry(String transactionID) throws TransactionIdExpiredException
	{
		String sMethod = "[validateBrbTransactionIDForExpiry] ";
		log.info(sMethod);

		validateTransactionId(transactionID);

		try
		{
			BRBDBHelper dbHelper = new BRBDBHelper();
			
			// Get data from the table
			ICustomerTransactionTableEntity customerTransactionTableEntity = dbHelper.getFromCustomerTransactionTable(transactionID);
			
			validateCustomerTransactionTableEntity(customerTransactionTableEntity);	
			
			Timestamp transactionDate = customerTransactionTableEntity.getTransactionDate();

			long currentTime = new Date().getTime();
			long transactionTime = transactionDate.getTime();
			// Get the server timeout value
			long sessionTimeOut = readServerTimeoutSetting();

			// Check for session expiry
			if (currentTime - transactionTime >= sessionTimeOut)
			{
				// Update database
				updateDBLayer(dbHelper, transactionID);
				throw new TransactionIdExpiredException(DefaultTransactionIdTimeOutMsg);
			}
		}
		catch (TransactionIdExpiredException ex)
		{
			log.warning(sMethod + " Exception: " + ex.getMessage());
			throw ex;
		}
		catch (Exception ex)
		{
			log.warning(sMethod + " Exception: " + ex.getMessage());
		}
	}
	
	private void updateDBLayer(BRBDBHelper dbHelper, String transactionID) throws SQLException, NamingException, SQLInjectionAttackException
	{
		String sMethod = "[updateDBLayer]";
		log.info(sMethod);
		
		// Update state Traker table
		new AppStateReporter().reportAbandonState(
				transactionID, 
				StateTrackerUpdaterFactory.STATE_TRACKER_TRANSACTION_ID_EXPIRE, 
				TimeoutTrackingScreenID, 
				dbHelper);
		
		// Delete data from the table by transactionId
		dbHelper.deleteFromCustomerTransactionTable(transactionID);
	}

	private long readServerTimeoutSetting()
	{
		String sMethod = "[readServerTimeoutSetting]";
		log.info(sMethod);

		long timeoutValue = DefaultTransactionIdTimeOut;
		try
		{
			String timeoutValueStr = new ServerConfigurationHelper().createServerTimeoutSetting();
			timeoutValue = Long.parseLong(timeoutValueStr);
		}
		catch (Exception ex)
		{
			log.warning(sMethod + " Exception: " + ex.getMessage());
		}

		log.info(sMethod + " ::SERVER TIMEOUT VALUE:: " + timeoutValue);

		return timeoutValue;
	}

	protected void validateTransactionId(String transactionId) throws TransactionIdExpiredException
	{
		String sMethod = "[validateTransactionId]";
		log.info(sMethod);
		
		if (transactionId == null || transactionId.isEmpty())
		{		
			// According CTCOFSMB-1333
			throw new TransactionIdExpiredException(DefaultTransactionIdTimeOutMsg);
		}
	}	
	
	protected void validateCustomerTransactionTableEntity(ICustomerTransactionTableEntity customerTransactionTableEntity) throws TransactionIdExpiredException
	{
		String sMethod = "[validateCustomerTransactionTableEntity]";
		log.info(sMethod);
		
		// According CTCOFSMB-1333
		if (customerTransactionTableEntity == null || !customerTransactionTableEntity.isEntityValid()){
			throw new TransactionIdExpiredException(DefaultTransactionIdTimeOutMsg);
		}	
	}	
}