package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import com.ctfs.WICI.Helper.CWE117Fix;
import com.ctfs.WICI.Helper.CheckAttestationHelper;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.WICICheckTrainingAttestationResponse;
import com.ctfs.WICI.Model.WICISaveTrainingAttestationRequest;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class CheckAttestationServlet2 extends WICIServlet {
	
	private static final long serialVersionUID = 1L;

	static Logger log = Logger.getLogger(CheckAttestationServlet2.class.getName());

	public CheckAttestationServlet2() {

	}

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException {
		
		String sMethod = this.getClass().getName() + "[doPost] ";
		log.info(sMethod);

		checkAttestationData(requestMediator);

	}

	public void checkAttestationData(WICIServletMediator requestMediator)
	{
		
		CheckAttestationHelper checkAttestationHelper = new CheckAttestationHelper();
		log.info("CheckAttestationServlet2[checkAttestationData]::[Called! ::]");
		
		String storeLocationNumber = requestMediator.searchElementInsidePostRequestBody("storeLocationNumber") != null ? requestMediator.searchElementInsidePostRequestBody("storeLocationNumber") : EMPTY_STRING;
		String firstName = requestMediator.searchElementInsidePostRequestBody("firstName") != null ? requestMediator.searchElementInsidePostRequestBody("firstName") : EMPTY_STRING;
		String lastName = requestMediator.searchElementInsidePostRequestBody("lastName") != null ? requestMediator.searchElementInsidePostRequestBody("lastName") : EMPTY_STRING;
		String retailNetwork = requestMediator.searchElementInsidePostRequestBody("retailNetwork") != null ? requestMediator.searchElementInsidePostRequestBody("retailNetwork") : EMPTY_STRING;
		
		log.info("CheckAttestationServlet2[checkAttestationData]TAB Request Parames  " + "storeLocationNumber === "+CWE117Fix.encodeCRLF(storeLocationNumber)+ "  firstName === "+CWE117Fix.encodeCRLF(firstName) +"  lastName === "+CWE117Fix.encodeCRLF(lastName));
		WICIResponse appResponse = new WICIResponse();
		appResponse.setError(true);
		
		WICICheckTrainingAttestationResponse checkTrainingResponse = new WICICheckTrainingAttestationResponse();
		try {
			WICIConfiguration conf = new WICIConfigurationFactory().createReWriteDASSEndPointConfiguration();
			WICISaveTrainingAttestationRequest trainingAttestationRequest = new WICISaveTrainingAttestationRequest();
			trainingAttestationRequest.setStoreLocationNumber(storeLocationNumber);
			trainingAttestationRequest.setFirstName(firstName);
			trainingAttestationRequest.setLastName(lastName);
			trainingAttestationRequest.setRetailNetwork(retailNetwork);
			
	       validateAttestationData(trainingAttestationRequest);
	       
	       log.info("CheckAttestationServlet2[checkAttestationData] WICITrainingAttestationRequest for fetch the AttestationData "+ CWE117Fix.encodeCRLF(trainingAttestationRequest.toString()));
	       
	       if( conf != null && conf.getRewriteCheckAttestationEndPoint() != null && conf.getRewriteDssServiceEnv() != null) {
				
				log.info("CheckAttestationServlet2[checkAttestationData]CheckAttestation Point to   " +CWE117Fix.encodeCRLF(conf.getRewriteDssServiceEnv())  + " Endpoint "+CWE117Fix.encodeCRLF(conf.getRewriteCheckAttestationEndPoint()));
		
				if(conf.getRewriteDssServiceEnv().equalsIgnoreCase("DSSDEV")){
				
					log.info("CheckAttestationServlet2[checkAttestationData]:: Calling checkAttestationHelper.checkHttpAttestationData(trainingAttestationRequest, endPoint) ");
					checkTrainingResponse =  checkAttestationHelper.checkHttpAttestationData(trainingAttestationRequest, conf.getRewriteCheckAttestationEndPoint());
					
					if (checkTrainingResponse != null && checkTrainingResponse.getAttestationDate() != null
							&& checkTrainingResponse.getSignature() != null) {

						appResponse.setError(false); 
						appResponse.setData(checkTrainingResponse);
						appResponse.setMsg(checkTrainingResponse.getMessage());
					} else{
						
						appResponse.setError(true); 
						appResponse.setData(checkTrainingResponse);
						appResponse.setMsg(checkTrainingResponse.getMessage());
					}
				
				}else{
					
					log.info("CheckAttestationServlet2[checkAttestationData]:: Calling checkAttestationHelper.checkAttestationData(trainingAttestationRequest, endPoint) ");
					checkTrainingResponse =  checkAttestationHelper.checkHttpsAttestationData(trainingAttestationRequest, conf.getRewriteCheckAttestationEndPoint());
					if (checkTrainingResponse != null && checkTrainingResponse.getAttestationDate() != null
							&& checkTrainingResponse.getSignature() != null) {

						appResponse.setError(false); 
						appResponse.setData(checkTrainingResponse);
						appResponse.setMsg(checkTrainingResponse.getMessage());
					} else{
						
						appResponse.setError(true); 
						appResponse.setData(checkTrainingResponse);
						appResponse.setMsg(checkTrainingResponse.getMessage());
					}
					
				}
			}else {
				log.warning("CheckAttestationServlet2[checkAttestationData] eror while loading configuration: " );
			}	

		} catch (Exception e) {
			log.warning("CheckAttestationServlet2[checkAttestationData] Exception: " + CWE117Fix.encodeCRLF(e.getMessage()));
			e.printStackTrace();
		}
		finally
		{
			requestMediator.processHttpResponse(appResponse);
		}
		
		}
	
	private void validateAttestationData(WICISaveTrainingAttestationRequest trainingAttestationRequest) {

		if (trainingAttestationRequest.getStoreLocationNumber() == null ||
				trainingAttestationRequest.getStoreLocationNumber().isEmpty()) {
			throw new IllegalArgumentException(
					"Invalid 'storeLocationNumber' argument!");
		}
		if (trainingAttestationRequest.getFirstName() == null || trainingAttestationRequest.getFirstName().isEmpty()) {
			throw new IllegalArgumentException("Invalid 'firstName' argument!");
		}
		if (trainingAttestationRequest.getLastName() == null || trainingAttestationRequest.getLastName().isEmpty()) {
			throw new IllegalArgumentException("Invalid 'lastName' argument!");
		}
		if (trainingAttestationRequest.getRetailNetwork() == null || trainingAttestationRequest.getRetailNetwork().isEmpty()) {
			throw new IllegalArgumentException("Invalid 'retailNetwork' argument!");
		}

	}
	
}