package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import com.ctfs.WICI.Helper.DeviceAdminHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class DeviceAdminServlet extends WICIServlet
{
	private static final long serialVersionUID = 1L;
	static Logger log = Logger.getLogger(DeviceAdminServlet.class.getName());
	private static final String PAYLOAD_PARAMETER = "payload";

	@Override
	void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		String sMethod = "[handleRequest]";
		log.info(sMethod + "::Called!");

		WICIResponse appResponse = new WICIResponse();

		try
		{
			String payloadData = EMPTY_STRING;

			StringBuffer sb = requestMediator.getPostRequestBody();
			log.info(sMethod + ":: postRequestBody = " + sb.toString());

			payloadData = sb.toString();

			DeviceAdminHelper deviceAdminHelper = new DeviceAdminHelper(payloadData, requestMediator.geContentType());
			deviceAdminHelper.processPayload();

			appResponse = new WICIResponse(false, "DeviceAdminServlet success response", true);
		}
		catch (Exception ex)
		{
			log.warning(sMethod + " Exception: " + ex.getMessage());
			appResponse.setError(true);
			appResponse.setMsg(ex.getMessage());
		}
		finally
		{
			requestMediator.processHttpResponse(appResponse);
		}
	}
}
