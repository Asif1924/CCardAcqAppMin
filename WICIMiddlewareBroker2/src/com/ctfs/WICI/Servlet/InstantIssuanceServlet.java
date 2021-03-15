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
import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.AccountApplicationSubmissionRequest;
import com.ctfs.WICI.Model.AuthfieldValue;
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
		getAccountApplicationDataByExternarReferencId(requestMediator);
   
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
	
	
	
}