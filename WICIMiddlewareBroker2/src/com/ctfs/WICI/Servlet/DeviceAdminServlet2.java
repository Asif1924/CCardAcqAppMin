package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import com.ctfs.WICI.Helper.CWE117Fix;
import com.ctfs.WICI.Helper.DeviceAdminHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class DeviceAdminServlet2 extends WICIServlet
{
	private static final long serialVersionUID = 1L;
	static Logger log = Logger.getLogger(DeviceAdminServlet2.class.getName());

	@Override
	void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		log.info("DeviceAdminServlet2[handleRequest]::Called !");

		WICIResponse appResponse = new WICIResponse();

		try
		{
			String payloadData = EMPTY_STRING;

			StringBuffer sb = requestMediator.getPostRequestBody();
			log.info("DeviceAdminServlet2[handleRequest]:: postRequestBody = " + CWE117Fix.encodeCRLF(sb.toString()));

			payloadData = sb.toString();

			DeviceAdminHelper deviceAdminHelper = new DeviceAdminHelper(payloadData, requestMediator.geContentType());
			deviceAdminHelper.processPayload();

			appResponse = new WICIResponse(false, "DeviceAdminServlet success response", true);
		}
		catch (Exception ex)
		{
			log.warning("DeviceAdminServlet2[handleRequest] Exception: " + ex.getMessage());
			appResponse.setError(true);
			appResponse.setMsg(ex.getMessage());
		}
		finally
		{
			requestMediator.processHttpResponse(appResponse);
		}
	}
}