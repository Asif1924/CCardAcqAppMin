package com.ctfs.BRB.Servlet;

import java.io.IOException;
import java.sql.SQLException;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import javax.servlet.ServletException;

import com.ctfs.BRB.Helper.BRBDBHelper;
import com.ctfs.BRB.Helper.BRBServletMediator;
import com.ctfs.BRB.Helper.DictionaryInfoValidator;
import com.ctfs.BRB.Model.DictionaryInfo;
import com.ctfs.BRB.Model.InvalidDictionaryInformationException;
import com.ctfs.BRB.Model.Response;

// US4281
public class DictionaryInfoServlet extends BaseServlet
{
	private static final long serialVersionUID = -8430560820431498427L;
	private BRBDBHelper dbHelper;
	private Lock lock = new ReentrantLock();

	@Override
	void handleRequest(BRBServletMediator requestMediator) throws ServletException, IOException
	{
		String sMethod = "[DictionaryServlet:handleRequest] ";
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
			
			if (transactionId != null)
			{
				DictionaryInfoValidator dictInfoValidator = new DictionaryInfoValidator();
				DictionaryInfo dictInfo = dictInfoValidator.validateDictionaryInformation();						
				appResponse.setError(false);
				appResponse.setMsg("Success");
				appResponse.setData(dictInfo);
			}
			else
			{
				appResponse.setError(true);
				appResponse.setMsg(String.format("Invalid Transaction ID: %s", transactionId));
			}
		}
		catch (SQLException ex)
		{
			log.warning(sMethod + " Exception: " + ex.getMessage());
			appResponse.setError(true);
			appResponse.setMsg("Could not connect to the server. Please try again later.");// ex.getMessage();
		}
		catch (InvalidDictionaryInformationException ex)
		{
			log.info(sMethod + " Exception: " + ex.getMessage());
			String errorMessage = "One of the values are null for the dictionary configuration keys";

			// Prepare request response
			appResponse.setError(false);
			appResponse.setMsg(errorMessage);
		}
		catch (Exception ex)
		{
			log.warning(sMethod + " Exception: " + ex.getMessage());
			appResponse.setError(true);
			appResponse.setMsg(ex.getMessage());
		}
		log.info("ApppRespose Status message..."+appResponse.getMsg());
		log.info("the English URL "+appResponse.getData());
		/*log.info("the Frenech URL "+appResponse.getDictionaryInfo().getDictionaryURLFrench());
		log.info("the Latest Version "+appResponse.getDictionaryInfo().getLatestDictionaryVersion());
		log.info("the OlderDisctionary allowable "+appResponse.getDictionaryInfo().getOlderDictionaryAllowable());*/
		log.info("the Error Flag "+appResponse.isError());
		
		requestMediator.processHttpResponse(appResponse);
		
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