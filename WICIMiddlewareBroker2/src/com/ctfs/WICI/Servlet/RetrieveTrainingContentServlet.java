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
		
		String sMethod = this.getClass().getName() + "[handleRequest] ";
		log.info(sMethod);
		
		WICIResponse tableResponse = new WICIResponse();
		RetrieveTrainingContent trainingContentResponse = null;
		
		try {
			WICIDBHelper dbHelper = new WICIDBHelper();
			
			trainingContentResponse = dbHelper.retrieveTrainingContentVersion();
			log.info(sMethod +"::RetrieveTrainingContent response:::"+trainingContentResponse);
			
			if (trainingContentResponse!= null) {
				
				tableResponse.setData(trainingContentResponse);
				
				tableResponse.setError(false);
				tableResponse.setMsg("Successfully fetched the RetrieveTrainingContent data from the Database");
				
				log.info(sMethod +":::Successfully set the RetrieveTrainingContent Data to WICIResponse:::");
				
			}else {
				
				tableResponse.setError(true);
				tableResponse.setMsg("Failed to fetch the RetrieveTrainingContent data from the Database");
				
				log.info(sMethod +":::Failed to set the RetrieveTrainingContent Data to WICIResponse:::");
			}
			
			
		}catch (Exception e) {
			log.info(sMethod +":::Exception occured while fetching the RetrieveTrainingContent data from DB:::");
			e.printStackTrace();
			tableResponse.setError(true);
			tableResponse.setMsg("Failure");
		}
		
		requestMediator.processHttpResponse(tableResponse);
	}

}
