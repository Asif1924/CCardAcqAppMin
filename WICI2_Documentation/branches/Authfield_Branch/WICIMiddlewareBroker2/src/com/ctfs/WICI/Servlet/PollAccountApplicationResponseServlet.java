package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.ctfs.WICI.AppConstants;
import com.google.gson.Gson;

public class PollAccountApplicationResponseServlet extends WICIServlet
{
	private static final long serialVersionUID = 2L;	
	static Logger log = Logger.getLogger(PollAccountApplicationResponseServlet.class.getName());

	public PollAccountApplicationResponseServlet()
	{
		super();
		String sMethod = this.getClass().getName() + "[PollAccountApplicationResponseServlet] ";
		log.info(sMethod);
	}	

	@Override
	public void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		String sMethod = this.getClass().getName() + "[handleRequest] ";
		log.info(sMethod);

		String transactionID = "";		
		String action = "";
		WICIResponse accountApplicationResponse = null;
		
		if (requestMediator.isHttpGetRequestParameterExist("transactionID")){
			transactionID = requestMediator.getHttpGetRequestParameter("transactionID");
		}
		if (requestMediator.isHttpGetRequestParameterExist("action")) {
			action = requestMediator.getHttpGetRequestParameter("action");
		}

		if (action.equalsIgnoreCase("retrieve"))
		{
			accountApplicationResponse = getAccountApplicationResponse(transactionID);
		}
		else if (action.equalsIgnoreCase("purge"))
		{
			accountApplicationResponse = purgeAccountApplication(transactionID);
		}		
		
		requestMediator.processHttpResponse(accountApplicationResponse);
	}

	private WICIResponse purgeAccountApplication(String argTransactionID)
	{
		String sMethod = this.getClass().getName() + "[purgeAccountApplication] argTransactionID=" + argTransactionID;
		log.info(sMethod);	
		
		WICIResponse purgeResponse = null;
		
		try
		{
			// Delete account application response
			int rowsAffected = new WICIDBHelper().deleteAccountApplicationData(argTransactionID);
			
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

	private WICIResponse getAccountApplicationResponse(String argTransactionID)
	{
		String sMethod = this.getClass().getName() + "[getAccountApplicationResponse] argTransactionID=" + argTransactionID;
		log.info(sMethod);
		
		String accountApplicationResponse = "";
		WICIResponse retrieveResponse = null;
		
		try
		{
			// Get account application response
			accountApplicationResponse = new WICIDBHelper().getAccountApplicationData(argTransactionID);
			
			// Deserialize AccountApplication response
			Gson gson = new Gson();
			retrieveResponse = gson.fromJson(accountApplicationResponse, WICIResponse.class);
		}
		catch (Exception e)
		{
			log.warning(e.getMessage());
			
			retrieveResponse = new WICIResponse(
					true,
					AppConstants.RETRIVE_ACCOUNTAPPLICATION_REQUEST_FAILED,
					accountApplicationResponse);
		}		
		
		return retrieveResponse;
	}
}
