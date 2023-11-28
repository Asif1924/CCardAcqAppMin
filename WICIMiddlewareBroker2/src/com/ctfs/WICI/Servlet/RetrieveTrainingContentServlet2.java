package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;

import com.ctfs.WICI.Helper.CWE117Fix;
import com.ctfs.WICI.Helper.RetrieveTrainingContentHelper;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICIRetrieveApprovedTrainingContentResponse;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class RetrieveTrainingContentServlet2 extends WICIServlet{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	static Logger log = Logger.getLogger(RetrieveTrainingContentServlet2.class.getName());	
	
	public RetrieveTrainingContentServlet2(){
		
	}

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException {
		
		
		log.info("RetrieveTrainingContentServlet2[handleRequest] called");
		WICIResponse appResponse = new WICIResponse();
		WICIRetrieveApprovedTrainingContentResponse trainingContentResponse = null;
		
		try {
			WICIConfiguration conf = new WICIConfigurationFactory().createReWriteDASSEndPointConfiguration();
			RetrieveTrainingContentHelper retrieveTrainingContentHelper = new RetrieveTrainingContentHelper();
			
			if( conf != null && conf.getRewriteRetrieveTrainingEndPoint() != null && conf.getRewriteDssServiceEnv() != null) {
				
				log.info("RetrieveTrainingContentServlet2[handleRequest] :::RetrieveTrainingContent Point to   " +CWE117Fix.encodeCRLF(conf.getRewriteDssServiceEnv())  + " Endpoint "+CWE117Fix.encodeCRLF(conf.getRewriteRetrieveTrainingEndPoint()));
		
				if(conf.getRewriteDssServiceEnv().equalsIgnoreCase("DSSDEV")){
				
					trainingContentResponse = retrieveTrainingContentHelper.retrieveHttpApprovedTrainingContent(conf.getRewriteRetrieveTrainingEndPoint());
				
				}else{
					
					trainingContentResponse = retrieveTrainingContentHelper.retrieveHttpsApprovedTrainingContent(conf.getRewriteRetrieveTrainingEndPoint());
					
				}
			}else {
				log.warning("RetrieveTrainingContentServlet2[handleRequest]  eror while loading configuration: "  );
			}
			
			if (trainingContentResponse!= null) {
				
				trainingContentResponse.setStatusCode(String.valueOf(HttpServletResponse.SC_OK));
				
				appResponse.setData(trainingContentResponse);
				appResponse.setError(false);
				appResponse.setMsg("TrainingContent Retrieved Successfully!");
				
			}else {
				
				appResponse.setError(true);
				appResponse.setMsg("Failed to Retrieve the TrainingConent!");
			}
			
			
		}catch (Exception e) {
			log.warning("RetrieveTrainingContentServlet2[handleRequest]  Exception: " + CWE117Fix.encodeCRLF(e.getMessage()));
			appResponse.setError(true);
			appResponse.setMsg(e.getMessage());
			e.printStackTrace();
		}
		
		requestMediator.processHttpResponse(appResponse);
	}

}
