package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.TrainingAttestationResponse;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class CheckAttestationServlet extends WICIServlet {
	
	private static final long serialVersionUID = 1L;

	static Logger log = Logger.getLogger(CheckAttestationServlet.class.getName());

	public CheckAttestationServlet() {

	}

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException {
		
		String sMethod = this.getClass().getName() + "[doPost] ";
		log.info(sMethod);

		checkAttestationData(requestMediator);

	}

	public void checkAttestationData(WICIServletMediator requestMediator)
	{
		
		WICIDBHelper wicidbHelper = new WICIDBHelper();
		String sMethod = this.getClass().getName() + "[saveAttestationData] ";
		
		String storeLocationNumber = requestMediator.searchElementInsidePostRequestBody("storeLocationNumber") != null ? requestMediator.searchElementInsidePostRequestBody("storeLocationNumber") : EMPTY_STRING;
		String firstName = requestMediator.searchElementInsidePostRequestBody("firstName") != null ? requestMediator.searchElementInsidePostRequestBody("firstName") : EMPTY_STRING;
		String lastName = requestMediator.searchElementInsidePostRequestBody("lastName") != null ? requestMediator.searchElementInsidePostRequestBody("lastName") : EMPTY_STRING;
		
		log.info(sMethod + "TAB Request Parames  " + "storeLocationNumber === "+storeLocationNumber+ "  firstName === "+firstName +"  lastName === "+lastName);
		
		WICIResponse appResponse = new WICIResponse();
		 TrainingAttestationResponse attetationResponse = null;
		
		appResponse.setError(true);
		
		try {
			
	       validateAttestationData(storeLocationNumber,firstName, lastName);
	       
	       String userName = storeLocationNumber.trim()+firstName.trim()+lastName.trim();
	       
	       log.info(sMethod + " userName for fetch the AttestationData "+ userName);
	       
	       attetationResponse =  wicidbHelper.getTrainingAttestationData(userName.toUpperCase());
	       
	       if(attetationResponse != null &&  attetationResponse.getAttestationDate() != null && attetationResponse.getSignature() != null){
	    	   
	    	   appResponse.setError(false);
	    	   appResponse.setData(attetationResponse);
	    	   appResponse.setMsg("Training Attestation Data available for given User");
	       }

		} catch (Exception e) {
			
			appResponse.setMsg("Training Attestation  Data not available this user" );
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
		}
		finally
		{
			requestMediator.processHttpResponse(appResponse);
		}
		
		}
	
	private void validateAttestationData(String storeLocationNumber,
			String firstName, String lastName) {

		if (storeLocationNumber == null || storeLocationNumber.isEmpty()) {
			throw new IllegalArgumentException(
					"Invalid 'storeLocationNumber' argument!");
		}
		if (firstName == null || firstName.isEmpty()) {
			throw new IllegalArgumentException("Invalid 'firstName' argument!");
		}
		if (lastName == null || lastName.isEmpty()) {
			throw new IllegalArgumentException("Invalid 'lastName' argument!");
		}

	}
	
}
