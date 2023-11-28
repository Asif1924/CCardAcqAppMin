package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import com.ctfs.WICI.Helper.AddressLookupHelper;
import com.ctfs.WICI.Helper.CWE117Fix;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.WICIDSSAddressInput;
import com.ctfs.WICI.Model.WICIDSSAddressResponse;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.ibm.icu.text.Transliterator;

public class AddressLookupServlet2 extends WICIServlet
{
	private static final long serialVersionUID = 1L;
	public static String EMPTY_STRING = "";
	
	static Logger log = Logger.getLogger(AddressLookupServlet2.class.getName());
	AddressLookupHelper addressLookupHelper = new AddressLookupHelper();
	
	public AddressLookupServlet2()
	{
	}

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		String sMethod = this.getClass().getName() + "[doPost] ";		log.info(sMethod);
		
		
		invokeAddressLookup(requestMediator);
		
	}

	private void invokeAddressLookup(WICIServletMediator requestMediator)
	{
		
		log.info("AddressLookupServlet2 [invokeAddressLookup] Called !");
		WICIDBHelper dbHelper = new WICIDBHelper();			
		String city = requestMediator.searchElementInsidePostRequestBody("city") != null ? requestMediator.searchElementInsidePostRequestBody("city").trim() : EMPTY_STRING;
		String postalCode = requestMediator.searchElementInsidePostRequestBody("postalCode") != null ? requestMediator.searchElementInsidePostRequestBody("postalCode").trim() : EMPTY_STRING;
		String addressLine1 = requestMediator.searchElementInsidePostRequestBody("addressline1") != null ? requestMediator.searchElementInsidePostRequestBody("addressline1").trim() : EMPTY_STRING;
		String addressLine2 = requestMediator.searchElementInsidePostRequestBody("addressline2") != null ? requestMediator.searchElementInsidePostRequestBody("addressline2") : EMPTY_STRING;
		String province = requestMediator.searchElementInsidePostRequestBody("province") != null ? requestMediator.searchElementInsidePostRequestBody("province").trim() : EMPTY_STRING;
		log.info("AddressLookupServlet2 [invokeAddressLookup]city=" + CWE117Fix.encodeCRLF(city) + ", postalCode=" + CWE117Fix.encodeCRLF(postalCode) +"addressLine1:: "+CWE117Fix.encodeCRLF(addressLine1)+"addressLine2::"+CWE117Fix.encodeCRLF(addressLine2)+"province ::: "+CWE117Fix.encodeCRLF(province));
		 
		WICIDSSAddressInput dssInput = new WICIDSSAddressInput();
		
		if(addressLine1.isEmpty()){
			
			throw new IllegalArgumentException(" Invalid address Line1 "+CWE117Fix.encodeCRLF(addressLine1));
		}
		dssInput.setCity(transliterator(city));
		dssInput.setPostalCode(postalCode);
	    dssInput.setAddressLine1(transliterator(addressLine1));
	    dssInput.setProvince(province);
        if(!addressLine2.isEmpty()){
        	dssInput.setAddressLine2(addressLine2);
		}
		
        log.info("dss input :::: "+CWE117Fix.encodeCRLF(dssInput.toString()));
		
		WICIDSSAddressResponse dssResponse = new WICIDSSAddressResponse();
		WICIResponse appResponse = new WICIResponse();
		appResponse.setError(true);
		appResponse.setMsg("Unknown error!");
		
		
		
		
		
		/*	SharedWebServicesSOAPProxy sharedWebServicesSOAPProxy = getWICISharedServicesProxy();
			WebICAddressLookupRequest addressLookupRequest = new WebICAddressLookupRequest();

			addressLookupRequest.setOriginalAddressLine1(streetNumber);
			addressLookupRequest.setOriginalPostalCode(postalCode);

			ServiceRequest serviceRequest = new ServiceRequest();
			ServiceResponse serviceResponse = new ServiceResponse();
			
			try
			{
				AddressLookupHelper lookupHelper = new AddressLookupHelper();
				serviceRequest.setServiceArgument1(lookupHelper.addressLookupSerialize(addressLookupRequest));
				serviceRequest.setMethodName("verifyAddress");
				serviceRequest.setServiceName("CTFSWebICGatewayService");
				
				serviceResponse = sharedWebServicesSOAPProxy.processRequest(serviceRequest);
				log.info("serviceResponse=" + serviceResponse.getPassFail()+","  + serviceResponse.getResponseArgument1());
			}
			catch (Exception e)
			{
				e.printStackTrace();
			}

			WICIResponse appResponse = formatOutputForTabletforSS(serviceResponse);
			log.info("appResponse=" + appResponse.getMsg() );*/	
		
		
		
		try
		{
			
			
			WICIConfiguration conf = new WICIConfigurationFactory().createReWriteDASSEndPointConfiguration();
			
			if( conf != null && conf.getDssEndPoint() != null &&  conf.getDssserviceEnv() != null) {
				
				log.info("AddressLookupServlet2 [invokeAddressLookup]Address service Point to   " +CWE117Fix.encodeCRLF(conf.getDssserviceEnv())  + " Endpoint "+CWE117Fix.encodeCRLF(conf.getDssEndPoint()) );
		
				if(conf.getDssserviceEnv().equalsIgnoreCase("DSSDEV")){
					
					dssResponse =	addressLookupHelper.retriveAddressHttpClient(dssInput , conf.getDssEndPoint());
					
					
				}else{
					
					dssResponse =	addressLookupHelper.retriveAddress(dssInput);
				}
			
			}
			
			  
			 if(dssResponse != null && dssResponse.getCity() != null && dssResponse.getCity().length() >=18 ){
						
						log.info("AddressLookupServlet2 [invokeAddressLookup] cityName from postalcode Resposne "+CWE117Fix.encodeCRLF(dssResponse.getCity()));
						String abbrCityNameResponse =	dbHelper.retrieve13charABBRCityName(dssResponse);
						
						if(abbrCityNameResponse != null ){
							dssResponse.setCity(abbrCityNameResponse);
					    log.info("AddressLookupServlet2 [invokeAddressLookup] cityName from retrive13charABBCityName "+CWE117Fix.encodeCRLF(dssResponse.getCity()));
					    
						appResponse.setData(dssResponse);
						appResponse.setError(false);
						appResponse.setMsg(EMPTY_STRING);
						}
					}
			 else{
					appResponse.setData(dssResponse);
					appResponse.setError(false);
					appResponse.setMsg(EMPTY_STRING);
			 }
			 log.info(" the final response broker to tablet  "+CWE117Fix.encodeCRLF(dssResponse.toString()));	
			
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		
			requestMediator.processHttpResponse(appResponse);
	}
	
	
	
	private String transliterator(String  specialCharString) {
		Transliterator transliterator = Transliterator.getInstance("NFD; [:Nonspacing Mark:] Remove; NFC;");
		return transliterator.transliterate(specialCharString);
	}
	
	

/*	private WICIResponse formatOutputForTabletforSS(ServiceResponse serviceResponse)
	{
		String sMethod = this.getClass().getName() + "[formatOutputForTablet] ";
		log.info(sMethod);
		
		WICIResponse appResponse = new WICIResponse();
		appResponse.setError(true);
		appResponse.setMsg("Unknown error!");

		
		String response = serviceResponse.getResponseArgument1();
		if (response != null)
		{
			String resultDocument = serviceResponse.getResponseArgument1();
			if (resultDocument != null)
			{
				log.log(Level.FINE, "---resultDocument:\n" + resultDocument);
				log.info(resultDocument);
				addressLookupHelper = new AddressLookupHelper();
				WICIServletMediator wiciServletMediator = new WICIServletMediator();
				StringBuffer WithoutFrenchSpecialChars = wiciServletMediator.replaceFrenchCharsForEquivalent(new StringBuffer(resultDocument));
				WebICAddressLookupResponse addressLookupResponse = addressLookupHelper.deserializeXMLToWebICAddressLookupResponseObject(WithoutFrenchSpecialChars.toString());
//				String jsonResponse = new WICIObjectsHelper().convertObjectToJSON(addressLookupResponse);
				log.info("addressLookupResponse : "+addressLookupResponse);
				appResponse.setError(false);
				appResponse.setData(addressLookupResponse);
				appResponse.setMsg(EMPTY_STRING);
			}
		}
		return appResponse;
	}*/
	
	
}