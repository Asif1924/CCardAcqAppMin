package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class IsAliveServlet extends WICIServlet
{
	private static final long serialVersionUID = 1L;
	static Logger log = Logger.getLogger(IsAliveServlet.class.getName());

	public IsAliveServlet()
	{
	}

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		log.info("IsAliveServlet[handleRequest]" );
		WICIResponse appResponse = new WICIResponse(false, "IsAliveServlet success response", true);
		
		requestMediator.processHttpResponse(appResponse);
	}
}