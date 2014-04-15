package com.ctfs.BRB.Servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import com.ctfs.BRB.Helper.BRBServletMediator;
import com.ctfs.BRB.Helper.ScoreIdentityExamHelper;
import com.ctfs.BRB.Model.Response;

public class ScoreIdentityExamServlet extends BaseServlet
{
	private static final long serialVersionUID = -212476661021132873L;

	@Override
	void handleRequest(BRBServletMediator requestMediator) throws ServletException, IOException
	{
		String sMethod = "[ScoreIdentityExamServlet:handleRequest] ";
		log.info(sMethod);

		Response appResponse = new Response();

		try
		{
			appResponse.setData(new ScoreIdentityExamHelper().doRequest(requestMediator));
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