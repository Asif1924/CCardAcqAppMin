package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import org.apache.commons.codec.binary.Base64;

import com.ctfs.WICI.Helper.CWE117Fix;
import com.ctfs.WICI.Helper.CheckAttestationHelper;
import com.ctfs.WICI.Helper.LoginInvocationHelper;
import com.ctfs.WICI.Helper.SaveAttestationHelper;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.WICICheckTrainingAttestationResponse;
import com.ctfs.WICI.Model.WICISaveTrainingAttestationRequest;
import com.ctfs.WICI.Model.WICISaveTrainingAttestationResponse;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICILoginResponse;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class SaveAttestationServlet2 extends WICIServlet {
	
	private static final long serialVersionUID = 1L;
	//private static final String MODEL_LOGIN_SCREEN = "loginScreen";

	static Logger log = Logger.getLogger(SaveAttestationServlet2.class.getName());

	public SaveAttestationServlet2() {

	}

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException {
		
		log.info("SaveAttestationServlet2[doPost]called");

		saveAttestationData(requestMediator);

	}

	public void saveAttestationData(WICIServletMediator requestMediator)
	{
		
		log.info("SaveAttestationServlet2[saveAttestationData] :: Called!");
		
		String storeLocationNumber = requestMediator.searchElementInsidePostRequestBody("storeLocationNumber") != null ? requestMediator.searchElementInsidePostRequestBody("storeLocationNumber") : EMPTY_STRING;
		String firstName = requestMediator.searchElementInsidePostRequestBody("firstName") != null ? requestMediator.searchElementInsidePostRequestBody("firstName") : EMPTY_STRING;
		String lastName = requestMediator.searchElementInsidePostRequestBody("lastName") != null ? requestMediator.searchElementInsidePostRequestBody("lastName") : EMPTY_STRING;
		String employeeNumber = requestMediator.searchElementInsidePostRequestBody("employeeNumber") != null ? requestMediator.searchElementInsidePostRequestBody("employeeNumber") : EMPTY_STRING;
		String signature = requestMediator.searchElementInsidePostRequestBody("signature") != null ? requestMediator.searchElementInsidePostRequestBody("signature") : EMPTY_STRING;
		String trainingContentVersion = requestMediator.searchElementInsidePostRequestBody("trainingContentVersion") != null ? requestMediator.searchElementInsidePostRequestBody("trainingContentVersion") : EMPTY_STRING;
		
		//WICI-154 --start
		String retailNetwork = requestMediator.searchElementInsidePostRequestBody("retailNetwork") != null ? requestMediator.searchElementInsidePostRequestBody("retailNetwork") : EMPTY_STRING;
		//WICI-154 --end
		
		log.info("SaveAttestationServlet2[saveAttestationData]TAB Request Params  " + "storeLocationNumber === "+CWE117Fix.encodeCRLF(storeLocationNumber)+ "  firstName === "+CWE117Fix.encodeCRLF(firstName) +"  lastName === "+CWE117Fix.encodeCRLF(lastName)+ " employeeNumber  "+CWE117Fix.encodeCRLF(employeeNumber) +" signature  "+CWE117Fix.encodeCRLF(signature)+" trainingContentVersion  "+CWE117Fix.encodeCRLF(trainingContentVersion)+" retailNetwork  "+CWE117Fix.encodeCRLF(retailNetwork));
		
		//CreditCardApplicationData incomingCreditCardApplicationData = new CreditCardApplicationData(requestMediator);
		//BaseModel model;
		CheckAttestationHelper checkAttestationHelper = new CheckAttestationHelper();
		SaveAttestationHelper saveAttestationHelper = new SaveAttestationHelper();
		WICIResponse appResponse = new WICIResponse();
		WICISaveTrainingAttestationResponse saveWiciTrainingAttestationResponse = new WICISaveTrainingAttestationResponse();
		WICICheckTrainingAttestationResponse checkWiciTrainingAttestationResponse = new WICICheckTrainingAttestationResponse();
		
		boolean attestationExits = false;
		
		try {
			
		WICIConfiguration conf = new WICIConfigurationFactory().createReWriteDASSEndPointConfiguration();
	//	model = incomingCreditCardApplicationData.getModel(MODEL_LOGIN_SCREEN);
		
       byte[] decodedBase64Image = Base64.decodeBase64(signature);
		log.info("SaveAttestationServlet2[saveAttestationData]AttestationSignature  "+CWE117Fix.encodeCRLF(String.valueOf(decodedBase64Image)));
		
		//WICI-154 --start
		String derivedUserID = employeeNumber;
		WICILoginResponse loginResponse = new WICILoginResponse();
		LoginInvocationHelper loginInvocationHelper = new LoginInvocationHelper();
		loginResponse = loginInvocationHelper.checkLocation(retailNetwork, storeLocationNumber, derivedUserID);
		
		log.info("SaveAttestationServlet2[saveAttestationData]:: retailNetwork :: " + CWE117Fix.encodeCRLF(retailNetwork));
		
		String outletTypeId = loginResponse.getCheckLocation().getOutletName();
		log.info("SaveAttestationServlet2[saveAttestationData] outletTypeId id: "+ CWE117Fix.encodeCRLF(outletTypeId));
		//Business store number
		String businessStoreNumber = loginResponse.getCheckLocation().getBusinessStoreNumber();
		log.info("SaveAttestationServlet2[saveAttestationData] businessStoreNumber "+ CWE117Fix.encodeCRLF(businessStoreNumber));
		
		if (businessStoreNumber == null || businessStoreNumber.isEmpty()) {
			// search based on the store location number
			businessStoreNumber = loginResponse.getCheckLocation().getOutletNumber();
			log.info("SaveAttestationServlet2[saveAttestationData] businessStoreNumber "+ CWE117Fix.encodeCRLF(loginResponse.getCheckLocation().getOutletNumber()));
		}
		//CT Sale outlet number
		String ctSaleOutletNumber = loginResponse.getCheckLocation().getOutletNumber();
		log.info("SaveAttestationServlet2[saveAttestationData] ctSaleOutletNumber "+ CWE117Fix.encodeCRLF(ctSaleOutletNumber));
		
		if(!ctSaleOutletNumber.isEmpty() && ctSaleOutletNumber != null){
			storeLocationNumber = ctSaleOutletNumber;
		}
		//WICI-154 --end
		
		WICISaveTrainingAttestationRequest trainingAttestationRequest = new WICISaveTrainingAttestationRequest();
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
           //String userName = storeLocationNumber.trim()+firstName.trim()+lastName.trim();
	       
	       //log.info(sMethod + " userName for fetch the AttestationData "+ userName);
	       //trainingAttestationRequest.setUserName(userName);
	       
	       //Checking the Attestation already exists for this user.
	       log.info("SaveAttestationServlet2[saveAttestationData] WICITrainingAttestationRequest for fetch the AttestationData "+ CWE117Fix.encodeCRLF(trainingAttestationRequest.toString()));
	       
	       if( conf != null && conf.getRewriteCheckAttestationEndPoint() != null && conf.getRewriteDssServiceEnv() != null) {
				
				log.info("SaveAttestationServlet2[saveAttestationData] CheckAttestation Point to   " +CWE117Fix.encodeCRLF(conf.getRewriteDssServiceEnv())  + " Endpoint "+CWE117Fix.encodeCRLF(conf.getRewriteCheckAttestationEndPoint()));
		
				if(conf.getRewriteDssServiceEnv().equalsIgnoreCase("DSSDEV")){
				
					checkWiciTrainingAttestationResponse =  checkAttestationHelper.checkHttpAttestationData(trainingAttestationRequest, conf.getRewriteCheckAttestationEndPoint());
				
				}else{
					
					checkWiciTrainingAttestationResponse =  checkAttestationHelper.checkHttpsAttestationData(trainingAttestationRequest, conf.getRewriteCheckAttestationEndPoint());
					
				}
			}else {
				log.warning("SaveAttestationServlet2[saveAttestationData] eror while loading configuration: " );
			}	
	       
	       if(checkWiciTrainingAttestationResponse != null && checkWiciTrainingAttestationResponse.getAttestationDate() != null && checkWiciTrainingAttestationResponse.getSignature() != null){
        	   attestationExits = true;
	    	   appResponse.setError(false);
	    	   appResponse.setMsg("Attestation already exists for this user");
	       }
	       
	       //Saving the Attestation for the given user.
	       
	       if( conf != null && conf.getRewriteSaveAttestationEndPoint() != null && conf.getRewriteDssServiceEnv() != null) {
				
				log.info("SaveAttestationServlet2[saveAttestationData] SaveAttestation Point to   " +CWE117Fix.encodeCRLF(conf.getRewriteDssServiceEnv())  + " Endpoint "+CWE117Fix.encodeCRLF(conf.getRewriteSaveAttestationEndPoint()));
		
				if(conf.getRewriteDssServiceEnv().equalsIgnoreCase("DSSDEV")){
				
				    saveWiciTrainingAttestationResponse = saveAttestationHelper.saveHttpAttestationData(trainingAttestationRequest, conf.getRewriteSaveAttestationEndPoint());
				
				}else{
					
				    saveWiciTrainingAttestationResponse = saveAttestationHelper.saveHttpsAttestationData(trainingAttestationRequest, conf.getRewriteSaveAttestationEndPoint());
					
				}
			}
	       
	      if(saveWiciTrainingAttestationResponse!= null && saveWiciTrainingAttestationResponse.isInsertStatus() && !attestationExits){
	    	  
	    	  appResponse.setData(saveWiciTrainingAttestationResponse);
	    	  appResponse.setError(false);
	    	  appResponse.setMsg("AttestationTrainingData saved sucessfully!");
	    	  
	       }else{
	    	   appResponse.setMsg("Failed to save the AttestationTrainingData into Database!"); 
	       }
	       
		} catch (Exception e) {
			appResponse.setMsg("Failed to save the AttestationTrainingData into Database!"); 
			log.warning("SaveAttestationServlet2[saveAttestationData] Exception: " + e.getMessage());
			appResponse.setMsg(e.getMessage());
			e.printStackTrace();
		}
		finally
		{
			requestMediator.processHttpResponse(appResponse);
		}
		
		}
	
	
	
	private  void validateAttestationData(WICISaveTrainingAttestationRequest request) {

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