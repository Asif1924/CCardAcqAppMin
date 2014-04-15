package com.ctfs.BRB.Servlet;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;

import com.ctfs.BRB.Helper.AppStateReporter;
import com.ctfs.BRB.Helper.BRBDBHelper;
import com.ctfs.BRB.Helper.BRBServletMediator;
import com.ctfs.BRB.Model.Response;
import com.ctfs.BRB.Resources.Constants;
import com.ctfs.BRB.exceptions.SQLInjectionAttackException;
import com.ctfs.BRB.exceptions.TransactionIdExpiredException;
import com.google.gson.JsonElement;

public class CompletionBRBWebServlet extends BaseServlet
{
	private static final long serialVersionUID = 3525649007250155569L;

	@Override
	void handleRequest(BRBServletMediator requestMediator) throws ServletException, IOException
	{
		String sMethod = "[CompletionBRBWebServlet:handleRequest] ";
		log.info(sMethod);

		String transactionId = null;		
		String scenario = null;
		String trackingScreenID = null;		

		Response appResponse = null;
		BRBDBHelper dbHelper = null;

		try
		{
			appResponse = new Response();
			dbHelper = new BRBDBHelper();
			
			transactionId = requestMediator.getBrbTransactionId();
			scenario = getParamenterByName(requestMediator, "scenario");
			trackingScreenID = requestMediator.getTrackingScreenID();
			
			log.info("CompletionBRBWebServlet:handleRequest parameter scenario is value" + scenario);
			
			validateTransactionId(transactionId);

			reportState(transactionId, scenario, trackingScreenID, dbHelper);

			// Delete data from the table by transactionId
			dbHelper.deleteFromCustomerTransactionTable(transactionId);
			
			appResponse.setData(String.format("Data for session with id '%s' has been succesfully deleted", transactionId));
		}
		catch (SQLException ex)
		{
			log.warning(sMethod + " Exception: " + ex.getMessage());
			appResponse.setError(true);
			appResponse.setMsg(Constants.DefaulrConnectionIssueMsg);// ex.getMessage();
		}
		catch(SQLInjectionAttackException e){
			appResponse.setError(true);
			log.warning(sMethod + " Exception: " + e.getMessage());
			appResponse.setData(Constants.UnauthorizedSystemUsingMsg);
		}
		catch(IllegalArgumentException e){
			appResponse.setError(true);
			log.warning(sMethod + " Exception: " + e.getMessage());
			appResponse.setData(Constants.UnauthorizedSystemUsingMsg);
		}
		catch (Exception ex)
		{
			log.warning(sMethod + " Exception: " + ex.getMessage());
			appResponse.setError(true);
			appResponse.setMsg(ex.getMessage());
		}

		requestMediator.processHttpResponse(appResponse);
	}

	private void reportState(String transactionId, String scenario, String trackingScreenID, BRBDBHelper dbHelper)
	{
		new AppStateReporter().reportAbandonState(transactionId, scenario, trackingScreenID, dbHelper);
	}

	private String getParamenterByName(BRBServletMediator requestMediator, String name)
	{
		JsonElement requestElement = requestMediator.getPostRequestBodyAsJson();
		
		if (requestElement != null && requestElement.getAsJsonObject().has(name))
		{
			return requestElement.getAsJsonObject().get(name).getAsString();
		}
		else
		{
			return null;
		}
	}
	
	@Override
	protected void ValidateBRBTransactionID (BRBServletMediator servletMediator) throws TransactionIdExpiredException {
		// Skip this validation because we don't have any transaction Id info for version servlet.
		// Fix CTCOFSMB-1366
	}
}
