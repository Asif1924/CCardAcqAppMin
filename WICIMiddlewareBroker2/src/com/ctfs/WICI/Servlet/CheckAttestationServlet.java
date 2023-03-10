package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import com.ctfs.WICI.Helper.LoginInvocationHelper;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.TrainingAttestationResponse;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICILoginResponse;
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
		String retailNetwork = requestMediator.searchElementInsidePostRequestBody("retailNetwork") != null ? requestMediator.searchElementInsidePostRequestBody("retailNetwork") : EMPTY_STRING;
		
		log.info(sMethod + "TAB Request Parames  " + "storeLocationNumber === "+storeLocationNumber+ "  firstName === "+firstName +"  lastName === "+lastName);
		
		
		WICIResponse appResponse = new WICIResponse();
		 TrainingAttestationResponse attetationResponse = null;
		
		appResponse.setError(true);
		
		try {

			validateAttestationData(storeLocationNumber, firstName, lastName, retailNetwork);
			
			//WICI-154 -- start
			
			WICILoginResponse loginResponse = new WICILoginResponse();
			LoginInvocationHelper loginInvocationHelper = new LoginInvocationHelper();
			loginResponse = loginInvocationHelper.checkLocation(retailNetwork, storeLocationNumber, null);
			String outletTypeId = loginResponse.getCheckLocation().getOutletName();
			
			log.info(sMethod + " outletTypeId for fetch the AttestationData " + outletTypeId);
			String dbUserName = loginResponse.getCheckLocation().getOutletNumber() + firstName.trim() + lastName.trim();
			
			attetationResponse = wicidbHelper.getTrainingAttestationData(dbUserName.toUpperCase());

			log.info(sMethod + " userName for fetch the AttestationData " + dbUserName);
			
			if(!outletTypeId.equals(attetationResponse.getRetailNetwork())){
				appResponse.setError(true);
				appResponse.setData(attetationResponse);
				appResponse.setMsg("Invalid 'retailNetwork' argument");
				return;
			}
			
			if(!loginResponse.getCheckLocation().getOutletNumber().equals(attetationResponse.getStoreLocationNumber())) {
				appResponse.setError(true);
				appResponse.setData(attetationResponse);
				appResponse.setMsg("Invalid 'storeLocationNumber' argument");
				return;
			}
			if(!firstName.toUpperCase().equals(attetationResponse.getFirstName().toUpperCase())) {
				appResponse.setError(true);
				appResponse.setData(attetationResponse);
				appResponse.setMsg("Invalid 'firstName' argument");
				return;
			}
			if(!lastName.toUpperCase().equals(attetationResponse.getLastName().toUpperCase())) {
				appResponse.setError(true);
				appResponse.setData(attetationResponse);
				appResponse.setMsg("Invalid 'lastName' argument");
				return;
			}
			
			if (attetationResponse != null && attetationResponse.getAttestationDate() != null
					&& attetationResponse.getSignature() != null) {

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
			String firstName, String lastName, String retailNetwork) {

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
		if (retailNetwork == null || retailNetwork.isEmpty()) {
			throw new IllegalArgumentException("Invalid 'retailNetwork' argument!");
		}

	}
	
}
