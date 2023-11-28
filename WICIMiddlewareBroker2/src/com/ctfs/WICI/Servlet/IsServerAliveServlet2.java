package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ctfs.WICI.Helper.CWE117Fix;
import com.ctfs.WICI.Helper.ServerAliveHelper;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.HealthCheckResponse;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class IsServerAliveServlet2 extends HttpServlet
{
	private static final long serialVersionUID = 1L;
	static Logger log = Logger.getLogger(IsServerAliveServlet2.class.getName());

	public IsServerAliveServlet2() {
	}

	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException {
		//String sMethod = this.getClass().getName() + "[doGet] ";
		//log.info(sMethod + "IsServerAliveServlet2");
		handleRequest(response);
	}

	protected void handleRequest(HttpServletResponse response)throws ServletException, IOException {
		HealthCheckResponse healthCheckResponse = new HealthCheckResponse();
		WICIResponse appResponse = new WICIResponse();
		WICIServletMediator wiciServletMediator = new WICIServletMediator();
		
		try{
			WICIConfiguration conf = new WICIConfigurationFactory().createReWriteDASSEndPointConfiguration();
			ServerAliveHelper serverAliveHelper = new ServerAliveHelper();
			
			if( conf != null && conf.getRewriteServerAliveEndPoint() != null && conf.getRewriteDssServiceEnv() != null) {
				
				log.info("IsServerAliveServlet2[handleRequest]IsServerAlive Point to   " +CWE117Fix.encodeCRLF(conf.getRewriteDssServiceEnv())  + " Endpoint "+CWE117Fix.encodeCRLF(conf.getRewriteServerAliveEndPoint()));
		
				if(conf.getDssserviceEnv().equalsIgnoreCase("DSSDEV")){
				
					log.info("IsServerAliveServlet2[handleRequest] Calling serverAliveHelper.checkHttpIsServerAlive(endPoint)! ");
					healthCheckResponse = serverAliveHelper.checkHttpIsServerAlive(conf.getRewriteServerAliveEndPoint());
				
				}else{
					
					log.info("IsServerAliveServlet2[handleRequest]Calling serverAliveHelper.checkHttpsIsServerAlive(endPoint)!");
					healthCheckResponse = serverAliveHelper.checkHttpsIsServerAlive(conf.getRewriteServerAliveEndPoint());
					
				}
			}else {
				log.warning("IsServerAliveServlet2[handleRequest]Calling eror while loading configuration: " );
			}	
			
			log.info("::IsServerAliveServlet2[handleRequest]Calling The DSSHealthCheckResponse = "+CWE117Fix.encodeCRLF(healthCheckResponse != null ? healthCheckResponse.toString(): null));
			
			if (healthCheckResponse!= null) {
				appResponse.setError(false);
				appResponse.setData(healthCheckResponse);
				appResponse.setMsg(":: The Server is Alive!");
			}else{
				appResponse.setError(true);
				appResponse.setMsg(":: The Server is not Alive!");
			}
			
		}catch(Exception e){
			
			log.warning("IsServerAliveServlet2[handleRequest]Calling Exception: " + CWE117Fix.encodeCRLF(e.getMessage()));
			appResponse.setError(true);
			appResponse.setMsg(e.getMessage());
			e.printStackTrace();
		}
		
//		WICIDBHelper wicidbHelper = new WICIDBHelper();
//		String status = null;
//		HealthCheckResponse appResponse = null;
//		try {
//			HealthCheckRecord healthCheckRecord = wicidbHelper.getHealthCheckRecord(hostName);
//			String ltmHealth = null;
//			String gtmHealth = null;
//
//			if (healthCheckRecord.getLtmEnabled().equalsIgnoreCase("1")) {
//				ltmHealth = "online";
//			}
//			if (healthCheckRecord.getLtmEnabled().equalsIgnoreCase("0")) {
//				ltmHealth = "offline";
//			}
//			if (healthCheckRecord.getGtmEnabled().equalsIgnoreCase("1")) {
//				gtmHealth = "available";
//			}
//			if (healthCheckRecord.getGtmEnabled().equalsIgnoreCase("0")) {
//				gtmHealth = "disabled";
//			}
//			status = ltmHealth + "-" + gtmHealth;
//			//log.warning("status :" + status);
//
//		} catch (Exception ex) {
//			response.setStatus(500);
//			appResponse = new HealthCheckResponse();
//			ex.printStackTrace();
//			log.info("Excepton Occured while getting HealthCheck Information");
//		}
//		appResponse = new HealthCheckResponse(status);
//		GsonBuilder gson = new GsonBuilder().disableHtmlEscaping();
//
//		PrintWriter writer = null;
//
//		try {
//			writer = response.getWriter();
//			String responseAsJsonString = gson.create().toJson(appResponse,appResponse.getClass());
//			log.info(sMethod + "::responseAsJsonString for HealthCheck:: "	+ responseAsJsonString);
//			writer.append(responseAsJsonString);
//		} catch (Exception e) {
//			log.warning(sMethod+ "::Error occurred during process servlet response::"+ e.getMessage());
//		} finally {
//			if (writer != null) {
//				try {
//					writer.flush();
//					writer.close();
//				} catch (Exception e) {
//					log.warning(sMethod	+ "::Error occurred during close 'PrintWriter' stream::"+ e.getMessage());
//				}
//			}
//		}
		wiciServletMediator.processHttpResponse(appResponse);
	}
}