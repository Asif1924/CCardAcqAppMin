package com.ctfs.BRB.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import com.ctfs.BRB.Helper.BRBServletMediator;
import com.ctfs.BRB.Helper.IdentityExamHelper;
import com.ctfs.BRB.Model.BRBIdentityExamBridge;
import com.ctfs.BRB.Model.Response;
import com.ctfs.BRB.Resources.Constants;

public class IdentityExamServlet extends BaseServlet
{

	private static final long serialVersionUID = 4468234294825915337L;

	static Logger log = Logger.getLogger(IdentityExamServlet.class.getName());

	public IdentityExamServlet()
	{
	}

	@Override
	//(AA)
	//To conform to the initial Architecture of BRB, we must do the following listed below in the try/catch block
	void handleRequest(BRBServletMediator requestMediator) throws ServletException, IOException
	{
		String sMethod = "[IdentityExamServlet.handleRequest] ";
		log.info(sMethod);

		Response appResponse = new Response();

		try
		{
			BRBIdentityExamBridge identityExamBridge = new IdentityExamHelper().doRequest(requestMediator);
			if (identityExamBridge != null)
			{
				appResponse.setData(identityExamBridge);
			}
			else 
			{
				appResponse.setError(true);
				appResponse.setMsg(Constants.DefaultAccountAppFlowIssueMsg);
			}
		}
		catch (Exception ex)
		{
			ex.printStackTrace();
			log.warning(sMethod + " Exception: " + ex.getMessage());
			appResponse.setError(true);
			appResponse.setMsg(ex.getMessage());
		}

		requestMediator.processHttpResponse(appResponse);
	}
}