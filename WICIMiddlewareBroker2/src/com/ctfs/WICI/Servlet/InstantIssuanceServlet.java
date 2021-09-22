package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.io.StringReader;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.CharacterData;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctc.ctfs.channel.accountacquisition.ProvinceType;
import com.ctc.ctfs.channel.sharedservices.ServiceRequest;
import com.ctc.ctfs.channel.sharedservices.ServiceResponse;
import com.ctc.ctfs.channel.sharedservices.SharedWebServicesSOAPProxy;
import com.ctfs.WICI.Helper.AccountApplicationHelper;
import com.ctfs.WICI.Helper.AuthorizationHelper;
import com.ctfs.WICI.Helper.InstantIssuanceHelper;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.AccountApplicationSubmissionRequest;
import com.ctfs.WICI.Model.AuthfieldValue;
import com.ctfs.WICI.Model.WICIDSSInstantIssuanceRequest;
import com.ctfs.WICI.Model.WICIDSSInstantIssuanceResponse;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class InstantIssuanceServlet extends WICIServlet {
	private static final long serialVersionUID = 1L;
	
	static Logger log = Logger
			.getLogger(InstantIssuanceServlet.class.getName());

	public InstantIssuanceServlet() {

	}

	protected void handleRequest(WICIServletMediator requestMediator)
			throws ServletException, IOException {
		String sMethod = this.getClass().getName() + "[doPost] ";
		log.info(sMethod);
		//getAccountApplicationDataByExternarReferencId(requestMediator);
		
		
		DSSInstantIssuance(requestMediator);
		
		
   
	}

	private void getAccountApplicationDataByExternarReferencId(WICIServletMediator requestMediator){
		
		String sMethod = this.getClass().getName() + "[getAccountApplicationDataByExternarReferencId] ";
		String msisdn = requestMediator.searchElementInsidePostRequestBody("MSISDN") != null ? requestMediator.searchElementInsidePostRequestBody("MSISDN") : EMPTY_STRING;
		String externalReferenceId = requestMediator.searchElementInsidePostRequestBody("transactionID") != null ? requestMediator.searchElementInsidePostRequestBody("transactionID") : EMPTY_STRING;
		String pan = requestMediator.searchElementInsidePostRequestBody("PAN") != null ? requestMediator.searchElementInsidePostRequestBody("PAN") : EMPTY_STRING;
		String deviceType = requestMediator.searchElementInsidePostRequestBody("deviceType") != null ? requestMediator.searchElementInsidePostRequestBody("deviceType") : EMPTY_STRING;
		
		SharedWebServicesSOAPProxy sharedServicesSOAPProxy = getWICISharedServicesProxy();

		WICIDBHelper wicidbHelper = new WICIDBHelper();
		log.info(sMethod + "externalReferenceId" + externalReferenceId);
		WICIResponse appResponse = new WICIResponse();
		appResponse.setError(true);
		try {
			AuthorizationHelper authorizationHelper = new AuthorizationHelper();
			AuthfieldValue values = authorizationHelper
					.getAuthfieldValue(requestMediator);

			log.info(sMethod + "::AuthID(mfgSerial=" + values.getMfgSerial()
					+ ", buildSerial=" + values.getBuildSerial() + ")");
			if (externalReferenceId != null && !externalReferenceId.isEmpty()) {

				AccountApplicationSubmissionRequest	accountAplicationRequest = wicidbHelper.retrieveAccountApplicationRequest(externalReferenceId);
						
				if (accountAplicationRequest != null) {

					log.info(sMethod + "::msisdn: " + msisdn);
					log.info(sMethod + "::externalReferenceId: "+ externalReferenceId);
					log.info(sMethod + "::pan: " + pan);
					log.info(sMethod + "::deviceType: "+deviceType);
					log.info(sMethod + "::consentGranted: "+accountAplicationRequest.getConsentGranted());
					log.info(sMethod + "::admappId: "+ accountAplicationRequest.getAdmAppId());
					log.info(sMethod + "::unitName: "+accountAplicationRequest.getUnitNumber());
					log.info(sMethod + "::streetName: "+ accountAplicationRequest.getStreetName());
					log.info(sMethod + "::TransactionState: "+ accountAplicationRequest.getTransactionState());
					
					//log.info(sMethod + "::request String: "+ accountAplicationRequest.getRequestString());
							

					AccountApplicationRequestType	accountApplciationRequestType = prepareApplicationRequestObject(accountAplicationRequest);

					accountApplciationRequestType.setExternalReferenceId(externalReferenceId);
					accountApplciationRequestType.setPan(pan);
					accountApplciationRequestType.setMsisdn(msisdn);
					accountApplciationRequestType.setDeviceType(deviceType);
					AccountApplicationHelper accountApplicationHelper = new AccountApplicationHelper();
					String requestStr = accountApplicationHelper.serializeRequestStr(accountApplciationRequestType);
					log.info(sMethod + " enstream calling request String: "+requestStr);	
					ServiceRequest serviceRequest = new ServiceRequest();
					ServiceResponse serviceResponse = new ServiceResponse();
					serviceRequest.setServiceArgument1(requestStr);

					serviceRequest.setMethodName("instantIssuance");
					serviceRequest.setServiceName("CTFSWebICGatewayService");
					serviceResponse = sharedServicesSOAPProxy
							.processRequest(serviceRequest);

					if (serviceResponse != null && "P".equalsIgnoreCase(serviceResponse.getPassFail())) 
							{
						appResponse.setEnstreamResponse("Y");
						appResponse.setError(false);
						log.info(sMethod + "sharedservice Enstream response  "+ serviceResponse.getPassFail());
					}
					if (serviceResponse != null  && "F".equalsIgnoreCase(serviceResponse.getPassFail()))
							 {
						appResponse.setEnstreamResponse("N");
						appResponse.setError(false);
						
						log.info(sMethod + "sharedservice Enstream response "+ serviceResponse.getPassFail());
								
					}

					requestMediator.processHttpResponse(appResponse);

				}
			}

		} catch (Exception e) {
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
		}
		}
	
	
	private AccountApplicationRequestType prepareApplicationRequestObject(AccountApplicationSubmissionRequest accountSubmissionRequest ){
		AccountApplicationRequestType accountRequest = new AccountApplicationRequestType();
		String sMethod = this.getClass().getName() + "[prepareApplicationRequestObject] ";
		log.info(sMethod+accountSubmissionRequest.getRequestString());
	try {
		if(accountSubmissionRequest.getRequestString() != null)
		{   
			prepareRequestObjectFromParseXml(accountSubmissionRequest.getRequestString(),accountSubmissionRequest);
			
			accountRequest.setEnstreamConsent(accountSubmissionRequest.getConsentGranted());
			accountRequest.setFirstName(accountSubmissionRequest.getFirstName());
			accountRequest.setLastName(accountSubmissionRequest.getLastName());
			accountRequest.setCurrentPostalCode(accountSubmissionRequest.getCurrentPostalCode());
			accountRequest.setCurrentProvince(ProvinceType.valueOf(accountSubmissionRequest.getCurrentProvince()));
			accountRequest.setCurrentCity(accountSubmissionRequest.getCurrentCity());
			accountRequest.setPreferedLanguage(accountSubmissionRequest.getPreferedLanguage());
			accountRequest.setCurrentCountry(accountSubmissionRequest.getCurrentCountry());
			accountRequest.setUnitNumber(accountSubmissionRequest.getUnitNumber());
			accountRequest.setStreetName(accountSubmissionRequest.getStreetName());
			accountRequest.setAdmAppId(accountSubmissionRequest.getAdmAppId());
			accountRequest.setTransactionState(accountSubmissionRequest.getTransactionState());
			accountRequest.setStoreNumber("0");
		}
	} catch (Exception e) {
		e.printStackTrace();
		log.warning(sMethod + " Exception: " + e.getMessage());
	}
	
	return accountRequest;
    }
	
	private void prepareRequestObjectFromParseXml(String requestStr, AccountApplicationSubmissionRequest accountSubmissionRequest ){
		String sMethod = this.getClass().getName() + "[prepareRequestObjectFromParseXml] ";
		log.info(sMethod);
		try {
			DocumentBuilder db = DocumentBuilderFactory.newInstance().newDocumentBuilder();
			    InputSource is = new InputSource();
			    is.setCharacterStream(new StringReader(requestStr));

			    Document doc = db.parse(is);
			    //root element in AccountApplicationRequestType
			    NodeList nodes = doc.getElementsByTagName("AccountApplicationRequest");

			    for (int i = 0; i < nodes.getLength(); i++) {
			      Element element = (Element) nodes.item(i);
			      NodeList name = element.getElementsByTagName("firstName");
			      Element firstName = (Element) name.item(0);
			      accountSubmissionRequest.setFirstName(getCharacterDataFromElement(firstName));
			      
			      NodeList lastName = element.getElementsByTagName("lastName");
			      accountSubmissionRequest.setLastName(getCharacterDataFromElement((Element) lastName.item(0)));
			      
			      NodeList currentPostalCode = element.getElementsByTagName("currentPostalCode");
			      accountSubmissionRequest.setCurrentPostalCode(getCharacterDataFromElement((Element) currentPostalCode.item(0)));
			      
			      NodeList currentCountry = element.getElementsByTagName("currentCountry");
			      accountSubmissionRequest.setCurrentCountry(getCharacterDataFromElement((Element) currentCountry.item(0)));
			      
			      NodeList currentCity = element.getElementsByTagName("currentCity");
			      accountSubmissionRequest.setCurrentCity(getCharacterDataFromElement((Element) currentCity.item(0)));
			      
			      NodeList currentProvince = element.getElementsByTagName("currentProvince");
			      accountSubmissionRequest.setCurrentProvince(getCharacterDataFromElement((Element) currentProvince.item(0)));
			      
			      NodeList preferedLanguage = element.getElementsByTagName("preferedLanguage");
			      accountSubmissionRequest.setPreferedLanguage(getCharacterDataFromElement((Element) preferedLanguage.item(0)));
			      
			      NodeList currentAddressLine1 = element.getElementsByTagName("currentAddressLine1");
			      accountSubmissionRequest.setCurrentAddressLine1(getCharacterDataFromElement((Element) currentAddressLine1.item(0)));
			      
	
			      NodeList tabSerialId = element.getElementsByTagName("tabSerialId");
			      accountSubmissionRequest.setTabSerialId(getCharacterDataFromElement((Element) tabSerialId.item(0)));
			      
	
			      
			    }
		} catch (ParserConfigurationException e) {
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
		} catch (SAXException e) {
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
		} catch (IOException e) {
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
		}
		
	}
	private String getCharacterDataFromElement(Element e) {
	    Node child = e.getFirstChild();
	    if (child instanceof CharacterData) {
	      CharacterData cd = (CharacterData) child;
	      return cd.getData();
	    }
	    return EMPTY_STRING;
	  }
	
	// this API point to DASH InstantIssuance service
	
	private void DSSInstantIssuance(WICIServletMediator requestMediator){
		
		String sMethod = this.getClass().getName() + "[DSSInstantIssuance] ";
		String msisdn = requestMediator.searchElementInsidePostRequestBody("MSISDN") != null ? requestMediator.searchElementInsidePostRequestBody("MSISDN") : EMPTY_STRING;
		String externalReferenceId = requestMediator.searchElementInsidePostRequestBody("transactionID") != null ? requestMediator.searchElementInsidePostRequestBody("transactionID") : EMPTY_STRING;
		String pan = requestMediator.searchElementInsidePostRequestBody("PAN") != null ? requestMediator.searchElementInsidePostRequestBody("PAN") : EMPTY_STRING;
		String deviceType = requestMediator.searchElementInsidePostRequestBody("deviceType") != null ? requestMediator.searchElementInsidePostRequestBody("deviceType") : EMPTY_STRING;
		

		WICIDBHelper wicidbHelper = new WICIDBHelper();
		log.info(sMethod + "externalReferenceId" + externalReferenceId);
		WICIResponse appResponse = new WICIResponse();
		appResponse.setError(true);
		boolean tabAuthorized = false;
		try {
			AuthorizationHelper authorizationHelper = new AuthorizationHelper();
			AuthfieldValue values = authorizationHelper
					.getAuthfieldValue(requestMediator);

			log.info(sMethod + "::AuthID(mfgSerial=" + values.getMfgSerial()
					+ ", buildSerial=" + values.getBuildSerial() + ")");
			
			validateSerialNumber(values.getBuildSerial());
			validateMfgSerialNumber(values.getMfgSerial());			
			
			
			
			
			if (externalReferenceId != null && !externalReferenceId.isEmpty()) {

				AccountApplicationSubmissionRequest	accountAplicationRequest = wicidbHelper.retrieveAccountApplicationRequest(externalReferenceId);
						
				if (accountAplicationRequest != null) {

					log.info(sMethod + "::msisdn: " + msisdn);
					log.info(sMethod + "::externalReferenceId: "+ externalReferenceId);
					log.info(sMethod + "::pan: " + pan);
					log.info(sMethod + "::deviceType: "+deviceType);
					log.info(sMethod + "::consentGranted: "+accountAplicationRequest.getConsentGranted());
					log.info(sMethod + "::admappId: "+ accountAplicationRequest.getAdmAppId());
					log.info(sMethod + "::unitName: "+accountAplicationRequest.getUnitNumber());
					log.info(sMethod + "::streetName: "+ accountAplicationRequest.getStreetName());
					log.info(sMethod + "::TransactionState: "+ accountAplicationRequest.getTransactionState());
					log.info(sMethod + "::addressLine1: "+ accountAplicationRequest.getCurrentAddressLine1());
					log.info(sMethod + "::tabserialId : "+ accountAplicationRequest.getTabSerialId());
					
					
					WICIConfiguration conf = new WICIConfigurationFactory().createDASSEndPointConfiguration();
					WICIDSSInstantIssuanceRequest	instantIssuanceRequest = prepareDSSInstantIssuanceRequest(accountAplicationRequest);
					instantIssuanceRequest.setExternalReferenceId(externalReferenceId);
					instantIssuanceRequest.setMsisdn(msisdn);
					instantIssuanceRequest.setPan(pan);
					instantIssuanceRequest.setDeviceType(deviceType);
					WICIDSSInstantIssuanceResponse dssResponse = new WICIDSSInstantIssuanceResponse();
					
					tabAuthorized = wicidbHelper.isDeviceWhitelisted(values.getMfgSerial(),values.getBuildSerial());
					
					log.info(sMethod +  ":::  tab authorized  flag  " +tabAuthorized);
					
					if(tabAuthorized){
						InstantIssuanceHelper helper = new InstantIssuanceHelper();
						
						log.info(sMethod + "::DssInstantIssuanceRequest : "+ instantIssuanceRequest);
						
						helper.validateEnstreamRequest(instantIssuanceRequest);
						
						if( conf != null && conf.getDssDIIEndPoint() != null && conf .getJwtToken() != null && conf.getDssserviceEnv() != null) {
							
							log.info(sMethod + "InstatIssuance Point to   " +conf.getDssserviceEnv()  + " Endpoint "+conf.getDssDIIEndPoint() +" jwtToken  "+conf .getJwtToken());
					
							if(conf.getDssserviceEnv().equalsIgnoreCase("DSSDEV")){
							
							   dssResponse =	helper.instantIssuanceHttpClient(instantIssuanceRequest, conf.getDssDIIEndPoint(), conf .getJwtToken());
							
							}else{
								
								dssResponse =	helper.instantIssuanceSecureClient(instantIssuanceRequest, conf.getDssDIIEndPoint(), conf .getJwtToken());
								
							}
							
							
					if (dssResponse != null && "P".equalsIgnoreCase(dssResponse.getStatus())) 
							{
						appResponse.setEnstreamResponse("Y");
						appResponse.setError(false);
						log.info(sMethod + "DSSS Enstream response  "+ dssResponse.getStatus());
					}
					if (dssResponse != null  && "F".equalsIgnoreCase(dssResponse.getStatus()))
							 {
						appResponse.setEnstreamResponse("N");
						appResponse.setError(false);
						
						log.info(sMethod + "Dss Enstream response "+ dssResponse.getStatus());
								
					}
							
						
						}else{
							
							log.warning(sMethod + " eror while loading configuration: "  );
							
						}
						
						appResponse.setData(dssResponse);
						log.info(sMethod + "::DssInstantIssuanceResponse : "+ dssResponse);
						
					}else{
						 appResponse = new WICIResponse();
						 appResponse.setError(true);
						 appResponse.setMsg("tab authorization failed");
						
					}
					
					requestMediator.processHttpResponse(appResponse);

				}
			}

		} catch (Exception e) {
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
		}
		}
		
	private WICIDSSInstantIssuanceRequest prepareDSSInstantIssuanceRequest(AccountApplicationSubmissionRequest accountSubmissionRequest ){
		WICIDSSInstantIssuanceRequest dssRequest = new WICIDSSInstantIssuanceRequest();
		String sMethod = this.getClass().getName() + "[prepareDSSInstantIssuanceRequest] ";
		log.info(sMethod+accountSubmissionRequest.getRequestString());
	try {
		if(accountSubmissionRequest.getRequestString() != null)
		{   
			prepareRequestObjectFromParseXml(accountSubmissionRequest.getRequestString(),accountSubmissionRequest);
			
			dssRequest.setEnstreamConsent(accountSubmissionRequest.getConsentGranted());
			dssRequest.setFirstName(accountSubmissionRequest.getFirstName());
			dssRequest.setLastName(accountSubmissionRequest.getLastName());
			dssRequest.setCurrentPostalCode(accountSubmissionRequest.getCurrentPostalCode());
			dssRequest.setCurrentProvince(accountSubmissionRequest.getCurrentProvince());
			dssRequest.setCurrentCity(accountSubmissionRequest.getCurrentCity());
			dssRequest.setPreferedLanguage(accountSubmissionRequest.getPreferedLanguage());
			dssRequest.setCurrentCountry(accountSubmissionRequest.getCurrentCountry());
			dssRequest.setUnitNumber(accountSubmissionRequest.getUnitNumber());
			//accountRequest.setStreetName(accountSubmissionRequest.getStreetName());
			dssRequest.setAdmAppId(accountSubmissionRequest.getAdmAppId());
			dssRequest.setTransactionState(accountSubmissionRequest.getTransactionState());
			//accountRequest.setStoreNumber("0");
			dssRequest.setAddressline1(accountSubmissionRequest.getCurrentAddressLine1());
			
			dssRequest.setTabSerialID(accountSubmissionRequest.getTabSerialId());
			
			
		}
	} catch (Exception e) {
		e.printStackTrace();
		log.warning(sMethod + " Exception: " + e.getMessage());
	}
	
	return dssRequest;
    }
	private void validateSerialNumber(String argSerialNumber)
	{
		if (argSerialNumber == null || argSerialNumber.isEmpty())
		{
			throw new IllegalArgumentException("Invalid 'argSerialNumber' argument!");
		}
	}
	private void validateMfgSerialNumber(String argMfgSerialNumber)
	{
		if (argMfgSerialNumber == null || argMfgSerialNumber.isEmpty())
		{
			throw new IllegalArgumentException("Invalid 'argMfgSerialNumber' argument!");
		}
	}
	
	
	
	
	
}