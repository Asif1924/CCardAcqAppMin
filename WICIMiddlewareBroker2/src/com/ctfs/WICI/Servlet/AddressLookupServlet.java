package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import com.ctc.ctfs.channel.sharedservices.ServiceRequest;
import com.ctc.ctfs.channel.sharedservices.ServiceResponse;
import com.ctc.ctfs.channel.sharedservices.SharedWebServicesSOAPProxy;
import com.ctc.ctfs.channel.webicaddressverification.WebICAddressLookupRequest;
import com.ctc.ctfs.channel.webicaddressverification.WebICAddressLookupResponse;
import com.ctfs.WICI.Helper.AddressLookupHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class AddressLookupServlet extends WICIServlet
{
	private static final long serialVersionUID = 1L;
	public static String EMPTY_STRING = "";
	
	static Logger log = Logger.getLogger(AddressLookupServlet.class.getName());
	AddressLookupHelper addressLookupHelper = new AddressLookupHelper();
	
	public AddressLookupServlet()
	{
	}

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		String sMethod = this.getClass().getName() + "[doPost] ";		log.info(sMethod);

		invokeAddressLookup(requestMediator);
	}

	private void invokeAddressLookup(WICIServletMediator requestMediator)
	{
		String sMethod = this.getClass().getName() + "[invokeAddressLookup] ";
				
		String streetNumber = requestMediator.searchElementInsidePostRequestBody("streetNumber") != null ? requestMediator.searchElementInsidePostRequestBody("streetNumber") : EMPTY_STRING;;
		String postalCode = requestMediator.searchElementInsidePostRequestBody("postalCode") != null ? requestMediator.searchElementInsidePostRequestBody("postalCode") : EMPTY_STRING;;
		
		log.info(sMethod + "streetNumber=" + streetNumber + ", postalCode=" + postalCode);
		
			SharedWebServicesSOAPProxy sharedWebServicesSOAPProxy = getWICISharedServicesProxy();
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
			log.info("appResponse=" + appResponse.getMsg() );		
			requestMediator.processHttpResponse(appResponse);
	}

	private WICIResponse formatOutputForTabletforSS(ServiceResponse serviceResponse)
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
	}
}
