package com.ctfs.BRB.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import com.ctfs.BRB.Helper.AccountApplicationHelper;
import com.ctfs.BRB.Helper.BRBServletMediator;
import com.ctfs.BRB.Helper.GenericObjectsHelper;
import com.ctfs.BRB.Helper.Factory.ValidatorException;
import com.ctfs.BRB.Model.Response;

public class AccountApplicationServlet extends BaseServlet
{
	private static final String VALIDATOR_EXCEPTION_MESSAGE = "Due to technical difficulties we are unable to process your application, please try again later.";
	private static final String GENERIC_EXCEPTION_MESSAGE = "Unfortunately our Instant Credit services are temporarily unavailable, please try again later.";
	private static final long serialVersionUID = 1L;
	GenericObjectsHelper requestHelper = new GenericObjectsHelper();
	static Logger log = Logger.getLogger(AccountApplicationServlet.class.getName());

	public AccountApplicationServlet()
	{
	}

	protected void handleRequest(BRBServletMediator requestMediator) throws ServletException, IOException
	{
		String sMethod = "[handleRequest] ";
		log.info(sMethod);
		
		Response appResponse = new Response();
		try
		{
			appResponse.setData(new AccountApplicationHelper().doRequest(requestMediator));
		}
		catch (ValidatorException ex)
		{
			log.warning(sMethod + " Exception: " + ex.getMessage());
			
			appResponse.setError(true);
			appResponse.setMsg(VALIDATOR_EXCEPTION_MESSAGE);
		}
		catch (Exception ex)
		{			
			log.warning(sMethod + " Exception: " + ex.getMessage());			
			
			appResponse.setError(true);
			appResponse.setMsg(GENERIC_EXCEPTION_MESSAGE);

		}
		
		
		requestMediator.processHttpResponse(appResponse);	
	}
}
