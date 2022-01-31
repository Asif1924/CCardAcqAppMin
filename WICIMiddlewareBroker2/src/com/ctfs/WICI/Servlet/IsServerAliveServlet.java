package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.InetAddress;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Model.HealthCheckRecord;
import com.ctfs.WICI.Servlet.Model.HealthCheckResponse;
import com.google.gson.GsonBuilder;

public class IsServerAliveServlet extends HttpServlet
{
	private static final long serialVersionUID = 1L;
	static Logger log = Logger.getLogger(IsServerAliveServlet.class.getName());

	public IsServerAliveServlet() {
	}

	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException {
		String sMethod = this.getClass().getName() + "[doGet] ";
		log.info(sMethod + "IsServerAliveServlet");
		handleRequest(response);
	}

	protected void handleRequest(HttpServletResponse response)throws ServletException, IOException {
		String sMethod = this.getClass().getName()+ "[IsServerAliveServlet handleRequest] ";
		log.info(sMethod);

		String hostName = InetAddress.getLocalHost().getHostName();
		WICIDBHelper wicidbHelper = new WICIDBHelper();
		String status = null;
		HealthCheckResponse appResponse = null;
		try {
			HealthCheckRecord healthCheckRecord = wicidbHelper.getHealthCheckRecord(hostName);
			String ltmHealth = null;
			String gtmHelath = null;

			if (healthCheckRecord.getLtmEnabled().equalsIgnoreCase("1")) {
				ltmHealth = "online";
			}
			if (healthCheckRecord.getLtmEnabled().equalsIgnoreCase("0")) {
				ltmHealth = "offline";
			}
			if (healthCheckRecord.getGtmEnabled().equalsIgnoreCase("1")) {
				gtmHelath = "available";
			}
			if (healthCheckRecord.getGtmEnabled().equalsIgnoreCase("0")) {
				gtmHelath = "disabled";
			}
			status = ltmHealth + "-" + gtmHelath;
			log.info("status :" + status);

		} catch (Exception ex) {
			response.setStatus(500);
			appResponse = new HealthCheckResponse();
			ex.printStackTrace();
			log.info("Excepton Occured while getting HealthCheck Information");
		}
		appResponse = new HealthCheckResponse(status);
		GsonBuilder gson = new GsonBuilder().disableHtmlEscaping();

		PrintWriter writer = null;

		try {
			writer = response.getWriter();
			String responseAsJsonString = gson.create().toJson(appResponse,appResponse.getClass());
			log.info(sMethod + "::responseAsJsonString :: "	+ responseAsJsonString);
			writer.append(responseAsJsonString);
		} catch (Exception e) {
			log.warning(sMethod+ "::Error occurred during process servlet response::"+ e.getMessage());
		} finally {
			if (writer != null) {
				try {
					writer.flush();
					writer.close();
				} catch (Exception e) {
					log.warning(sMethod	+ "::Error occurred during close 'PrintWriter' stream::"+ e.getMessage());
				}
			}
		}
	}
}