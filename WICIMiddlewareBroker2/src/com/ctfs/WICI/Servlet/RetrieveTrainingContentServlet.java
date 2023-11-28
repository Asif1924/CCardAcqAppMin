package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.RetrieveTrainingContent;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class RetrieveTrainingContentServlet extends WICIServlet{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	static Logger log = Logger.getLogger(RetrieveTrainingContentServlet.class.getName());	
	
	public RetrieveTrainingContentServlet(){
		
	}

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException {
		log.info("RetrieveTrainingContentServlet[handleRequest]");
		
		WICIResponse tableResponse = new WICIResponse();
		RetrieveTrainingContent trainingContentResponse = null;
		
		try {
			WICIDBHelper dbHelper = new WICIDBHelper();
			
			trainingContentResponse = dbHelper.retrieveTrainingContentVersion();
			//Tejas - Do not print the below line.  It is writing more than 10MB logs into the log file.  We are losing out on important information in the logs.
			//log.info(sMethod +"::RetrieveTrainingContent response:::"+trainingContentResponse);
			
			if (trainingContentResponse!= null) {
				
				tableResponse.setData(trainingContentResponse);
				
				tableResponse.setError(false);
				tableResponse.setMsg("Successfully fetched the RetrieveTrainingContent data from the Database");
				
				log.info("RetrieveTrainingContentServlet[handleRequest]:::Successfully set the RetrieveTrainingContent Data to WICIResponse:::");
				
			}else {
				
				tableResponse.setError(true);
				tableResponse.setMsg("Failed to fetch the RetrieveTrainingContent data from the Database");
				
				log.info("RetrieveTrainingContentServlet[handleRequest]:::Failed to set the RetrieveTrainingContent Data to WICIResponse:::");
			}
			
			
		}catch (Exception e) {
			log.info("RetrieveTrainingContentServlet[handleRequest]:::Exception occured while fetching the RetrieveTrainingContent data from DB:::");
			e.printStackTrace();
			tableResponse.setError(true);
			tableResponse.setMsg("Failure");
		}
		
		requestMediator.processHttpResponse(tableResponse);
	}

}
