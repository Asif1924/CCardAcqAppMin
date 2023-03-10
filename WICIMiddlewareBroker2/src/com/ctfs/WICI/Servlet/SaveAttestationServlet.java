package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import org.apache.commons.codec.binary.Base64;

import com.ctfs.WICI.Helper.LoginInvocationHelper;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.TrainingAttestationRequest;
import com.ctfs.WICI.Model.TrainingAttestationResponse;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICILoginResponse;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class SaveAttestationServlet extends WICIServlet {
	
	private static final long serialVersionUID = 1L;
	private static final String MODEL_LOGIN_SCREEN = "loginScreen";

	static Logger log = Logger.getLogger(SaveAttestationServlet.class.getName());

	public SaveAttestationServlet() {

	}

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException {
		
		String sMethod = this.getClass().getName() + "[doPost] ";
		log.info(sMethod);

		saveAttestationData(requestMediator);

	}

	public void saveAttestationData(WICIServletMediator requestMediator)
	{
		
		String sMethod = this.getClass().getName() + "[saveAttestationData] ";
		String storeLocationNumber = requestMediator.searchElementInsidePostRequestBody("storeLocationNumber") != null ? requestMediator.searchElementInsidePostRequestBody("storeLocationNumber") : EMPTY_STRING;
		String firstName = requestMediator.searchElementInsidePostRequestBody("firstName") != null ? requestMediator.searchElementInsidePostRequestBody("firstName") : EMPTY_STRING;
		String lastName = requestMediator.searchElementInsidePostRequestBody("lastName") != null ? requestMediator.searchElementInsidePostRequestBody("lastName") : EMPTY_STRING;
		String employeeNumber = requestMediator.searchElementInsidePostRequestBody("employeeNumber") != null ? requestMediator.searchElementInsidePostRequestBody("employeeNumber") : EMPTY_STRING;
		String signature = requestMediator.searchElementInsidePostRequestBody("singnature") != null ? requestMediator.searchElementInsidePostRequestBody("singnature") : EMPTY_STRING;
		String trainingContentVersion = requestMediator.searchElementInsidePostRequestBody("trainingContentVersion") != null ? requestMediator.searchElementInsidePostRequestBody("trainingContentVersion") : EMPTY_STRING;
		//WICI-154 --start
		String retailNetwork = requestMediator.searchElementInsidePostRequestBody("retailNetwork") != null ? requestMediator.searchElementInsidePostRequestBody("retailNetwork") : EMPTY_STRING;
		//WICI-154 --end
		log.info(sMethod + "TAB Request Params  " + "storeLocationNumber === "+storeLocationNumber+ "  firstName === "+firstName +"  lastName === "+lastName+ " employeeNumber  "+employeeNumber +" signature  "+signature+" trainingContentVersion  "+trainingContentVersion+" retailNetwork  "+retailNetwork);
		WICIDBHelper wicidbHelper = new WICIDBHelper();
		WICIResponse appResponse = new WICIResponse();
		
		boolean attestationExits = false;
		
		try {
			
		byte[] decodedBase64Image = Base64.decodeBase64(signature);
		
		log.info(sMethod + "attestationSingnature  "+decodedBase64Image);
		
		//WICI-154 --start
		String derivedUserID = employeeNumber;
		WICILoginResponse loginResponse = new WICILoginResponse();
		LoginInvocationHelper loginInvocationHelper = new LoginInvocationHelper();
		loginResponse = loginInvocationHelper.checkLocation(retailNetwork, storeLocationNumber, derivedUserID);
		
		log.info(sMethod + ":: retailNetwork :: " + retailNetwork);
		
		String outletTypeId = loginResponse.getCheckLocation().getOutletName();
		log.info(sMethod + " outletTypeId id: "+ outletTypeId);
		//Business store number
		String businessStoreNumber = loginResponse.getCheckLocation().getBusinessStoreNumber();
		log.info(sMethod + " businessStoreNumber "+ businessStoreNumber);
		
		if (businessStoreNumber == null || businessStoreNumber.isEmpty()) {
			// search based on the store location number
			businessStoreNumber = loginResponse.getCheckLocation().getOutletNumber();
			log.info(sMethod + " businessStoreNumber "+ loginResponse.getCheckLocation().getOutletNumber());
		}
		//CT Sale outlet number
		String ctSaleOutletNumber = loginResponse.getCheckLocation().getOutletNumber();
		log.info(sMethod + " ctSaleOutletNumber "+ ctSaleOutletNumber);
		
		if(!ctSaleOutletNumber.isEmpty() && ctSaleOutletNumber != null){
			storeLocationNumber = ctSaleOutletNumber;
		}
		
		//WICI-154 --end
		TrainingAttestationRequest trainingAttestationRequest = new TrainingAttestationRequest();
		trainingAttestationRequest.setStoreLocationNumber(storeLocationNumber);
		trainingAttestationRequest.setFirstName(firstName);
		trainingAttestationRequest.setLastName(lastName);
		trainingAttestationRequest.setEmployeeNumber(employeeNumber);
		trainingAttestationRequest.setSignature(decodedBase64Image);
		trainingAttestationRequest.setTrainingContentVersion(trainingContentVersion);
		trainingAttestationRequest.setOutletTypeId(outletTypeId);
		trainingAttestationRequest.setBusinessStoreNumber(businessStoreNumber);
		
		
		   appResponse.setError(true);
		
	       validateAttestationData(trainingAttestationRequest);
	       
           String userName = storeLocationNumber.trim()+firstName.trim()+lastName.trim();
	       
	       log.info(sMethod + " saveAttestationUserName "+ userName);
	       
	       
	       TrainingAttestationResponse  attetationResponse =   wicidbHelper.getTrainingAttestationData(userName.toUpperCase());
	       
           if(attetationResponse != null && attetationResponse.getAttestationDate() != null && attetationResponse.getSignature() != null){
        	   attestationExits = true;
	    	   appResponse.setError(false);
	    	   appResponse.setMsg("Attestation already exists for this user");
	       }
	       trainingAttestationRequest.setUserName(userName);
	       
	      if( wicidbHelper.saveTrainingAttestationData(trainingAttestationRequest) && !attestationExits){
	    	  appResponse.setError(false);
	    	  appResponse.setMsg("AttestationTrainingData saved sucessfully");
	    	  
	       }
	       
		} catch (Exception e) {
			appResponse.setMsg("Failed saving AttestationTrainingData into Database"); 
			log.warning(sMethod + " Exception: " + e.getMessage());
			appResponse.setMsg(e.getMessage());
			e.printStackTrace();
		}
		finally
		{
			requestMediator.processHttpResponse(appResponse);
		}
		
		}
	
	
	
	private  void validateAttestationData(TrainingAttestationRequest request) {

		if (request.getStoreLocationNumber() == null || request.getStoreLocationNumber().isEmpty()) {
			throw new IllegalArgumentException("Invalid 'storeLocationNumber' argument!");
		}
		if (request.getFirstName() == null || request.getFirstName().isEmpty()) {
			throw new IllegalArgumentException("Invalid 'firstName' argument!");
		}
		if (request.getLastName() == null || request.getLastName().isEmpty()) {
			throw new IllegalArgumentException("Invalid 'lastName' argument!");
		}
		if (request.getTrainingContentVersion() == null || request.getTrainingContentVersion().isEmpty()) {
			throw new IllegalArgumentException("Invalid 'trainingContentVersion' argument!");
		}
		if (request.getSignature() == null ) {
			throw new IllegalArgumentException("Invalid 'signature' argument!");
		}

	}
}