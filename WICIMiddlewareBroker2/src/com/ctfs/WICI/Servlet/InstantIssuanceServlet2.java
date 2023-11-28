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
import com.ctfs.WICI.Helper.CWE117Fix;
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

public class InstantIssuanceServlet2 extends WICIServlet {
	private static final long serialVersionUID = 1L;
	
	static Logger log = Logger
			.getLogger(InstantIssuanceServlet2.class.getName());

	public InstantIssuanceServlet2() {

	}

	protected void handleRequest(WICIServletMediator requestMediator)
			throws ServletException, IOException {
		log.info("InstantIssuanceServlet2[doPost] ");
		//getAccountApplicationDataByExternarReferencId(requestMediator);
		
		
		DSSInstantIssuance(requestMediator);
		
		
   
	}

private void getAccountApplicationDataByExternarReferencId(WICIServletMediator requestMediator){
		
		 
		String msisdn = requestMediator.searchElementInsidePostRequestBody("MSISDN") != null ? requestMediator.searchElementInsidePostRequestBody("MSISDN") : EMPTY_STRING;
		String externalReferenceId = requestMediator.searchElementInsidePostRequestBody("transactionID") != null ? requestMediator.searchElementInsidePostRequestBody("transactionID") : EMPTY_STRING;
		String pan = requestMediator.searchElementInsidePostRequestBody("PAN") != null ? requestMediator.searchElementInsidePostRequestBody("PAN") : EMPTY_STRING;
		String deviceType = requestMediator.searchElementInsidePostRequestBody("deviceType") != null ? requestMediator.searchElementInsidePostRequestBody("deviceType") : EMPTY_STRING;
		
		SharedWebServicesSOAPProxy sharedServicesSOAPProxy = getWICISharedServicesProxy();

		WICIDBHelper wicidbHelper = new WICIDBHelper();
		log.info("InstantIssuanceServlet2[getAccountApplicationDataByExternarReferencId]externalReferenceId" + CWE117Fix.encodeCRLF(externalReferenceId));
		WICIResponse appResponse = new WICIResponse();
		appResponse.setError(true);
		try {
			AuthorizationHelper authorizationHelper = new AuthorizationHelper();
			AuthfieldValue values = authorizationHelper
					.getAuthfieldValue(requestMediator);

			log.info("InstantIssuanceServlet2[getAccountApplicationDataByExternarReferencId]::AuthID(mfgSerial=" +CWE117Fix.encodeCRLF( values.getMfgSerial())
					+ ", buildSerial=" + CWE117Fix.encodeCRLF(values.getBuildSerial()) + ")");
			if (externalReferenceId != null && !externalReferenceId.isEmpty()) {

				AccountApplicationSubmissionRequest	accountAplicationRequest = wicidbHelper.retrieveAccountApplicationRequest(externalReferenceId);
						
				if (accountAplicationRequest != null) {

					log.info("InstantIssuanceServlet2[getAccountApplicationDataByExternarReferencId]::msisdn: " + CWE117Fix.encodeCRLF((msisdn)));
					log.info("InstantIssuanceServlet2[getAccountApplicationDataByExternarReferencId]::externalReferenceId: "+ CWE117Fix.encodeCRLF(externalReferenceId));
					log.info("InstantIssuanceServlet2[getAccountApplicationDataByExternarReferencId]::pan: " + CWE117Fix.encodeCRLF(pan));
					log.info("InstantIssuanceServlet2[getAccountApplicationDataByExternarReferencId]::deviceType: "+CWE117Fix.encodeCRLF(deviceType));
					log.info("InstantIssuanceServlet2[getAccountApplicationDataByExternarReferencId]::consentGranted: "+CWE117Fix.encodeCRLF(accountAplicationRequest.getConsentGranted()));
					log.info("InstantIssuanceServlet2[getAccountApplicationDataByExternarReferencId]::admappId: "+CWE117Fix.encodeCRLF( accountAplicationRequest.getAdmAppId()));
					log.info("InstantIssuanceServlet2[getAccountApplicationDataByExternarReferencId]::unitName: "+CWE117Fix.encodeCRLF(accountAplicationRequest.getUnitNumber()));
					log.info("InstantIssuanceServlet2[getAccountApplicationDataByExternarReferencId]::streetName: "+ CWE117Fix.encodeCRLF(accountAplicationRequest.getStreetName()));
					log.info("InstantIssuanceServlet2[getAccountApplicationDataByExternarReferencId]::TransactionState: "+ CWE117Fix.encodeCRLF(accountAplicationRequest.getTransactionState()));
					
					//log.info(sMethod + "::request String: "+ accountAplicationRequest.getRequestString());
							

					AccountApplicationRequestType	accountApplciationRequestType = prepareApplicationRequestObject(accountAplicationRequest);

					accountApplciationRequestType.setExternalReferenceId(externalReferenceId);
					accountApplciationRequestType.setPan(pan);
					accountApplciationRequestType.setMsisdn(msisdn);
					accountApplciationRequestType.setDeviceType(deviceType);
					AccountApplicationHelper accountApplicationHelper = new AccountApplicationHelper();
					String requestStr = accountApplicationHelper.serializeRequestStr(accountApplciationRequestType);
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
						log.info("InstantIssuanceServlet2[getAccountApplicationDataByExternarReferencId]sharedservice Enstream response  "+ CWE117Fix.encodeCRLF(serviceResponse.getPassFail()));
					}
					if (serviceResponse != null  && "F".equalsIgnoreCase(serviceResponse.getPassFail()))
							 {
						appResponse.setEnstreamResponse("N");
						appResponse.setError(false);
						
						log.info("InstantIssuanceServlet2[getAccountApplicationDataByExternarReferencId]sharedservice Enstream response "+ CWE117Fix.encodeCRLF(serviceResponse.getPassFail()));
								
					}

					requestMediator.processHttpResponse(appResponse);

				}
			}

		} catch (Exception e) {
			log.warning("InstantIssuanceServlet2[getAccountApplicationDataByExternarReferencId] Exception: " + CWE117Fix.encodeCRLF(e.getMessage()));
			e.printStackTrace();
		}
		}
	
	
	private AccountApplicationRequestType prepareApplicationRequestObject(AccountApplicationSubmissionRequest accountSubmissionRequest ){
		AccountApplicationRequestType accountRequest = new AccountApplicationRequestType();
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
		log.warning("InstantIssuanceServlet2 prepareApplicationRequestObject[] Exception: " + CWE117Fix.encodeCRLF(e.getMessage()));
	}
	
	return accountRequest;
    }
	
	private void prepareRequestObjectFromParseXml(String requestStr, AccountApplicationSubmissionRequest accountSubmissionRequest ){
		log.info("[prepareRequestObjectFromParseXml] ");
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
			log.warning("[prepareRequestObjectFromParseXml]  Exception: " + CWE117Fix.encodeCRLF(e.getMessage()));
			e.printStackTrace();
		} catch (SAXException e) {
			log.warning("[prepareRequestObjectFromParseXml] Exception: " + CWE117Fix.encodeCRLF(e.getMessage()));
			e.printStackTrace();
		} catch (IOException e) {
			log.warning("[prepareRequestObjectFromParseXml] Exception: " + CWE117Fix.encodeCRLF(e.getMessage()));
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
		
		log.info("::InstantIssuanceServlet2[DSSInstantIssuance]");
		String msisdn = requestMediator.searchElementInsidePostRequestBody("MSISDN") != null ? requestMediator.searchElementInsidePostRequestBody("MSISDN") : EMPTY_STRING;
		String externalReferenceId = requestMediator.searchElementInsidePostRequestBody("transactionID") != null ? requestMediator.searchElementInsidePostRequestBody("transactionID") : EMPTY_STRING;
		String pan = requestMediator.searchElementInsidePostRequestBody("PAN") != null ? requestMediator.searchElementInsidePostRequestBody("PAN") : EMPTY_STRING;
		String deviceType = requestMediator.searchElementInsidePostRequestBody("deviceType") != null ? requestMediator.searchElementInsidePostRequestBody("deviceType") : EMPTY_STRING;
		

		WICIDBHelper wicidbHelper = new WICIDBHelper();
		log.info("::InstantIssuanceServlet2[DSSInstantIssuance]externalReferenceId" + CWE117Fix.encodeCRLF((externalReferenceId)));
		WICIResponse appResponse = new WICIResponse();
		appResponse.setError(true);
		boolean tabAuthorized = false;
		try {
			AuthorizationHelper authorizationHelper = new AuthorizationHelper();
			AuthfieldValue values = authorizationHelper
					.getAuthfieldValue(requestMediator);

			log.info("::InstantIssuanceServlet2[DSSInstantIssuance]::AuthID(mfgSerial=" + CWE117Fix.encodeCRLF(values.getMfgSerial())
					+ ", buildSerial=" + CWE117Fix.encodeCRLF(values.getBuildSerial()) + ")");
			
			validateSerialNumber(values.getBuildSerial());
			validateMfgSerialNumber(values.getMfgSerial());			
			
			
			
			
			if (externalReferenceId != null && !externalReferenceId.isEmpty()) {

				AccountApplicationSubmissionRequest	accountAplicationRequest = wicidbHelper.retrieveAccountApplicationRequest(externalReferenceId);
						
				if (accountAplicationRequest != null) {

					log.info("::InstantIssuanceServlet2[DSSInstantIssuance]::msisdn: " + CWE117Fix.encodeCRLF((msisdn)));
					log.info("::InstantIssuanceServlet2[DSSInstantIssuance]::externalReferenceId: "+ CWE117Fix.encodeCRLF(externalReferenceId));
					log.info("::InstantIssuanceServlet2[DSSInstantIssuance]::pan: " + CWE117Fix.encodeCRLF(pan));
					log.info("::InstantIssuanceServlet2[DSSInstantIssuance]::deviceType: "+CWE117Fix.encodeCRLF(deviceType));
					log.info("::InstantIssuanceServlet2[DSSInstantIssuance]::consentGranted: "+CWE117Fix.encodeCRLF(accountAplicationRequest.getConsentGranted()));
					log.info("::InstantIssuanceServlet2[DSSInstantIssuance]::admappId: "+ CWE117Fix.encodeCRLF(accountAplicationRequest.getAdmAppId()));
					log.info("::InstantIssuanceServlet2[DSSInstantIssuance]::unitName: "+CWE117Fix.encodeCRLF(accountAplicationRequest.getUnitNumber()));
					log.info("::InstantIssuanceServlet2[DSSInstantIssuance]::streetName: "+CWE117Fix.encodeCRLF( accountAplicationRequest.getStreetName()));
					log.info("::InstantIssuanceServlet2[DSSInstantIssuance]::TransactionState: "+ CWE117Fix.encodeCRLF(accountAplicationRequest.getTransactionState()));
					log.info("::InstantIssuanceServlet2[DSSInstantIssuance]::addressLine1: "+ CWE117Fix.encodeCRLF(accountAplicationRequest.getCurrentAddressLine1()));
					log.info("::InstantIssuanceServlet2[DSSInstantIssuance]::tabserialId : "+ CWE117Fix.encodeCRLF(accountAplicationRequest.getTabSerialId()));
					
					
					WICIConfiguration conf = new WICIConfigurationFactory().createReWriteDASSEndPointConfiguration();
					WICIDSSInstantIssuanceRequest	instantIssuanceRequest = prepareDSSInstantIssuanceRequest(accountAplicationRequest);
					instantIssuanceRequest.setExternalReferenceId(externalReferenceId);
					instantIssuanceRequest.setMsisdn(msisdn);
					instantIssuanceRequest.setPan(pan);
					instantIssuanceRequest.setDeviceType(deviceType);
					WICIDSSInstantIssuanceResponse dssResponse = new WICIDSSInstantIssuanceResponse();
					
					tabAuthorized = wicidbHelper.isDeviceWhitelisted(values.getMfgSerial(),values.getBuildSerial());
					
					log.info("::InstantIssuanceServlet2[DSSInstantIssuance]:::  tab authorized  flag  " +CWE117Fix.encodeCRLF(String.valueOf(tabAuthorized)));
					
					if(tabAuthorized){
						InstantIssuanceHelper helper = new InstantIssuanceHelper();
						
						log.info("::InstantIssuanceServlet2[DSSInstantIssuance]::DssInstantIssuanceRequest : "+ CWE117Fix.encodeCRLF(instantIssuanceRequest.toString()));
						
						helper.validateEnstreamRequest(instantIssuanceRequest);
						
						if( conf != null && conf.getRewriteDSSDIIEndPoint() != null && conf.getJwtToken() != null && conf.getRewriteDssServiceEnv() != null) {
							
							log.info("::InstantIssuanceServlet2[DSSInstantIssuance]InstatIssuance Point to   " +CWE117Fix.encodeCRLF(conf.getDssserviceEnv())  + " Endpoint "+CWE117Fix.encodeCRLF(conf.getDssDIIEndPoint()) +" jwtToken  "+CWE117Fix.encodeCRLF(conf .getJwtToken()));
					
							if(conf.getRewriteDssServiceEnv().equalsIgnoreCase("DSSDEV")){
							
							   dssResponse =	helper.instantIssuanceHttpClient(instantIssuanceRequest, conf.getRewriteDssServiceEnv(), conf .getJwtToken());
							
							}else{
								
								dssResponse =	helper.instantIssuanceSecureClient(instantIssuanceRequest, conf.getRewriteDssServiceEnv(), conf .getJwtToken());
								
							}
							
							
					if (dssResponse != null && "P".equalsIgnoreCase(dssResponse.getStatus())) 
							{
						appResponse.setEnstreamResponse("Y");
						appResponse.setError(false);
						log.info("::InstantIssuanceServlet2[DSSInstantIssuance]DSSS Enstream response  "+ CWE117Fix.encodeCRLF(dssResponse.getStatus()));
					}
					if (dssResponse != null  && "F".equalsIgnoreCase(dssResponse.getStatus()))
							 {
						appResponse.setEnstreamResponse("N");
						appResponse.setError(false);
						
						log.info("::InstantIssuanceServlet2[DSSInstantIssuance]Dss Enstream response "+ CWE117Fix.encodeCRLF(dssResponse.getStatus()));
								
					}
							
						
						}else{
							
							log.warning("::InstantIssuanceServlet2[DSSInstantIssuance] eror while loading configuration: "  );
							
						}
						
						appResponse.setData(dssResponse);
						log.info("::InstantIssuanceServlet2[DSSInstantIssuance]::DssInstantIssuanceResponse : "+ CWE117Fix.encodeCRLF(dssResponse != null ?dssResponse.toString() : null));
						
					}else{
						 appResponse = new WICIResponse();
						 appResponse.setError(true);
						 appResponse.setMsg("tab authorization failed");
						
					}
					
					requestMediator.processHttpResponse(appResponse);

				}
			}

		} catch (Exception e) {
			log.warning("::InstantIssuanceServlet2[DSSInstantIssuance] Exception: " + CWE117Fix.encodeCRLF(e.getMessage()));
			e.printStackTrace();
		}
		}
		
	private WICIDSSInstantIssuanceRequest prepareDSSInstantIssuanceRequest(AccountApplicationSubmissionRequest accountSubmissionRequest ){
		WICIDSSInstantIssuanceRequest dssRequest = new WICIDSSInstantIssuanceRequest();
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
		log.warning("prepareDSSInstantIssuanceRequest[]:: Exception: " +CWE117Fix.encodeCRLF(e.getMessage()));
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