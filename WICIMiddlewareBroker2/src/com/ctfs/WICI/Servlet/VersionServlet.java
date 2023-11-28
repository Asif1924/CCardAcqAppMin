package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import com.ctfs.WICI.WICIVersionStub;
import com.ctfs.WICI.Helper.CWE117Fix;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.WICIVersion;

public class VersionServlet extends WICIServlet
{
	private static final long serialVersionUID = 1L;
	static Logger log = Logger.getLogger(VersionServlet.class.getName());

	public VersionServlet()
	{
	}

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		log.info("VersionServlet[handleRequest]");
		String version = new WICIVersionStub().value;
		WICIVersion servletVersion = new WICIVersion();

		servletVersion.setVersion(version);
		log.info("---Version=" + CWE117Fix.encodeCRLF(version));

		requestMediator.processHttpResponse(servletVersion);
	}
}
