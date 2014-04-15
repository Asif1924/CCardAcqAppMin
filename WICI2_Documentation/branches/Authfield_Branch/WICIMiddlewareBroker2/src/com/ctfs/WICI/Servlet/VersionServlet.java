package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import com.ctfs.WICI.WICIVersionStub;
import com.ctfs.WICI.Servlet.Model.WICIVersion;
import com.ctfs.WICI.Helper.WICIServletMediator;

public class VersionServlet extends WICIServlet
{
	private static final long serialVersionUID = 1L;
	static Logger log = Logger.getLogger(VersionServlet.class.getName());

	public VersionServlet()
	{
	}

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		String sMethod = this.getClass().getName() + "[handleRequest] ";
		log.info(sMethod);

		String version = new WICIVersionStub().value;
		WICIVersion servletVersion = new WICIVersion();

		servletVersion.setVersion(version);
		log.info("---Version=" + version);
		
		requestMediator.processHttpResponse(servletVersion);

		/*WICIConfiguration conf = new WICIConfigurationFactory().createWebServicesConfiguration();
		Integer accountApplicationDelay = conf.getAccountApplicationDelay();

		if (accountApplicationDelay != null && accountApplicationDelay > 0)
		{
			log.info(sMethod + "---Delaying for " + accountApplicationDelay + " milliseconds");
			try
			{
				Thread.sleep(accountApplicationDelay);
			}
			catch (NumberFormatException e)
			{
				e.printStackTrace();
			}
			catch (InterruptedException e)
			{
				e.printStackTrace();
			}
		}*/
	}
}
