package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import com.channel.ctfs.ctc.webicgateway.AccountAcquisitionPortalProxy;
import com.ctfs.WICI.Helper.CheckLocationHelper;
import com.ctfs.WICI.Helper.WICIObjectsHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class UserLocationServlet extends WICIServlet
{
	private static final long serialVersionUID = 1L;
	WICIObjectsHelper requestHelper = new WICIObjectsHelper();
	static Logger log = Logger.getLogger(UserLocationServlet.class.getName());
	public static String EMPTY_STRING = "";

	public UserLocationServlet()
	{
	}

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		String sMethod = this.getClass().getName() + "[handleRequest] ";
		log.info(sMethod);
		
		WICIResponse appResponse = new WICIResponse();		

		try
		{
			AccountAcquisitionPortalProxy userLocationProxy = getWICIWebServicesProxy();
			String userId = requestMediator.searchElementInsidePostRequestBody("userId") != null ? requestMediator.searchElementInsidePostRequestBody("userId") : EMPTY_STRING;;
			String locationId = requestMediator.searchElementInsidePostRequestBody("locationId") != null ? requestMediator.searchElementInsidePostRequestBody("locationId") : EMPTY_STRING;;
			
			appResponse.setData(new CheckLocationHelper().doRequest(requestMediator, userId, locationId, userLocationProxy));
		}
		catch (Exception ex)
		{			
			log.warning(sMethod + " Exception: " + ex.getMessage());

			appResponse.setError(true);
			appResponse.setMsg(ex.getMessage());
		}
		
		requestMediator.processHttpResponse(appResponse);		
	}
}
