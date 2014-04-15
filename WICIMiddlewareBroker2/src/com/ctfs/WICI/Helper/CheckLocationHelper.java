package com.ctfs.WICI.Helper;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.xml.ws.Holder;

import com.channel.ctfs.ctc.webicgateway.AccountAcquisitionPortalProxy;
import com.channel.ctfs.ctc.webicgateway.MessageHeader;
import com.channel.ctfs.ctc.webicgateway.RequestBody;
import com.channel.ctfs.ctc.webicgateway.ResponseBody;
import com.channel.ctfs.ctc.webicgateway.ResponseBodyType;
import com.ctc.ctfs.channel.webicuserlocation.WebICCheckLocationRequest;
import com.ctc.ctfs.channel.webicuserlocation.WebICCheckLocationResponse;
import com.ctfs.WICI.Servlet.Model.WICICheckLocationResponse;
import com.ctfs.WICI.Servlet.Model.WICIMessageType;

public class CheckLocationHelper
{
	static Logger log = Logger.getLogger(CheckLocationHelper.class.getName());
	public static String EMPTY_STRING = "";

	public WICICheckLocationResponse doRequest(WICIServletMediator requestMediator,
			String argDerivedUserID,
			String locationId,
			AccountAcquisitionPortalProxy argUserLocationProxy) throws Exception
	{
		String sMethod = this.getClass().getName() + "[doRequest] ";
		log.info(sMethod + String.format("::locationId: %s; userId: %s", locationId, argDerivedUserID));
		
		RequestBody requestBody = new RequestBody();
		ResponseBody responseBody = new ResponseBody();
		WebICCheckLocationResponse userLocationResponse = null;
		
		try
		{
			WebICCheckLocationRequest locationRequest = new WebICCheckLocationRequest();
			locationRequest.setLocationID(locationId);
			locationRequest.setUserID(argDerivedUserID);
			requestBody.setRequestBody(userLocationSerialize(locationRequest));
			WICIObjectsHelper wiciObjectsHelper = new WICIObjectsHelper();
			Holder<MessageHeader> createMessageHeader = wiciObjectsHelper.createMessageHeader(WICIMessageType.USER_LOCATION);
			responseBody = argUserLocationProxy.processRequest(createMessageHeader, requestBody);
			userLocationResponse = deserializeResponse(responseBody);
		}
		catch (Exception e)
		{

			log.warning(sMethod + " Exception: " + e.getMessage());

			throw e;
		}
		return (new WICICheckLocationResponse()).entityToModel(userLocationResponse);
	}

	public WebICCheckLocationResponse deserializeResponse(ResponseBody responseBody) throws Exception
	{
		String sMethod = this.getClass().getName() + "[deserializeResponse] ";
		log.info(sMethod);

		ResponseBodyType rawResponseBody = responseBody.getResponseBody();
		WebICCheckLocationResponse userLocationResponse = null;

		if (rawResponseBody == null)
		{
			return userLocationResponse;
		}

		ResponseBodyType responseBody2 = responseBody.getResponseBody();
		String resultDocument = responseBody2.getResultDocument();

		if (resultDocument == null)
		{
			return userLocationResponse;
		}

		log.log(Level.FINE, "---resultDocument: \n" + resultDocument);

		try
		{
			WICIObjectsHelper conversionHelper = new WICIObjectsHelper();
			userLocationResponse = conversionHelper.deserializeXMLToWebICCheckLocationResponseObject(resultDocument);
		}
		catch (Exception e)
		{

			log.warning(sMethod + " Exception: " + e.getMessage());

			throw e;
		}

		return userLocationResponse;
	}

	public String userLocationSerialize(Object obj) throws Exception
	{
		String sMethod = this.getClass().getName() + "[userLocationSerialize] ";
		log.info(sMethod);

		String userLocationSerializedValue = "";
		com.thoughtworks.xstream.XStream userLocationParser = new com.thoughtworks.xstream.XStream();
		Map userLocationList = new HashMap();

		userLocationList.put("WebICCheckLocationRequest", WebICCheckLocationRequest.class);

		Iterator userLocationPairs = userLocationList.entrySet().iterator();

		while (userLocationPairs.hasNext())
		{
			Map.Entry entry = (Map.Entry) userLocationPairs.next();
			userLocationParser.alias((String) entry.getKey(), (Class) entry.getValue());
		}
		userLocationSerializedValue = userLocationParser.toXML(obj);

		log.log(Level.FINE, "---userLocation Request XML: \n" + userLocationSerializedValue);

		return userLocationSerializedValue;
	}
}
