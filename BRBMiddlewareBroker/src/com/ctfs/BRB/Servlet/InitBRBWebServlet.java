package com.ctfs.BRB.Servlet;

import java.io.IOException;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import javax.servlet.ServletException;

import com.ctfs.BRB.Helper.BRBDBHelper;
import com.ctfs.BRB.Helper.BRBServletMediator;
import com.ctfs.BRB.Model.Response;
import com.ctfs.BRB.dblayer.StateTrackerTableEntity;
import com.ctfs.BRB.dblayer.interfaces.ICustomerTransactionTableEntity;
import com.ctfs.BRB.dblayer.interfaces.IStateTrackerTableEntity;

public class InitBRBWebServlet extends BaseServlet
{
	private static final long serialVersionUID = 4468234294825915337L;
	private BRBDBHelper dbHelper;
	private Lock lock = new ReentrantLock();

	@Override
	void handleRequest(BRBServletMediator requestMediator) throws ServletException, IOException
	{
		String sMethod = "[InitBRBWebServlet:handleRequest] ";
		log.info(sMethod);
		
		String transactionId = requestMediator.getBrbTransactionId();

		Response appResponse = new Response();
		// use for UnitTesting
		lock.lock();
		if (dbHelper == null)
		{
			dbHelper = new BRBDBHelper();
		}
		lock.unlock();
		try
		{
			validateTransactionId(transactionId);

			// Retrieve data from the table by transactionId
			ICustomerTransactionTableEntity customerTransactionTblEntity = dbHelper.getFromCustomerTransactionTable(transactionId);

			if (customerTransactionTblEntity.isEntityValid())
			{
				// Don't send EcommCustomerId to the client
				customerTransactionTblEntity.setEcommCustomerId(null);

				// Set output data
				appResponse.setData(customerTransactionTblEntity);

				IStateTrackerTableEntity stateTrackerTableEntity = new StateTrackerTableEntity();
				stateTrackerTableEntity.setAppId(transactionId);
				stateTrackerTableEntity.setStartDateTime(new Timestamp(Calendar.getInstance().getTimeInMillis()));

				dbHelper.insertEmptyRecordIntoStateTrackerTable(stateTrackerTableEntity);
			}
			else
			{
				appResponse.setError(true);
				appResponse.setMsg(String.format("Could not find data with Transaction ID: %s", transactionId));
			}
		}
		catch (SQLException ex)
		{
			log.warning(sMethod + " Exception: " + ex.getMessage());
			appResponse.setError(true);
			appResponse.setMsg("Could not connect to the server. Please try again later.");// ex.getMessage();
		}
		catch (Exception ex)
		{
			log.warning(sMethod + " Exception: " + ex.getMessage());
			appResponse.setError(true);
			appResponse.setMsg(ex.getMessage());
		}
		finally
		{
			requestMediator.processHttpResponse(appResponse);
		}
	}

	/**
	 * it using for UnitTest Only
	 * 
	 * @param dbHelper
	 */
	public void setDbHelper(BRBDBHelper dbHelper)
	{
		this.dbHelper = dbHelper;
	}
	
}