package com.ctfs.WICI.Helper;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.ctc.ctfs.channel.webicaddressverification.WebICAddressLookupRequest;
import com.ctc.ctfs.channel.webicaddressverification.WebICAddressLookupResponse;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.DomDriver;

public class AddressLookupHelper
{
	static Logger log = Logger.getLogger(AddressLookupHelper.class.getName());

	public String addressLookupSerialize(Object obj) throws Exception
	{
		String sMethod = this.getClass().getName() + "[addressLookupSerialize] ";
		log.info(sMethod);

		String addressLookupReturnValue = "";
		com.thoughtworks.xstream.XStream addressLookupParser = new com.thoughtworks.xstream.XStream();
		Map addressLookupList = new HashMap();

		addressLookupList.put("WebICAddressLookupRequest", WebICAddressLookupRequest.class);

		Iterator addressLookupPairs = addressLookupList.entrySet().iterator();

		while (addressLookupPairs.hasNext())
		{
			Map.Entry entry = (Map.Entry) addressLookupPairs.next();
			addressLookupParser.alias((String) entry.getKey(), (Class) entry.getValue());
		}
		addressLookupReturnValue = addressLookupParser.toXML(obj);

		log.log(Level.FINE, "---AddressLookup Request XML:\n" + addressLookupReturnValue);

		return addressLookupReturnValue;
	}

	public WebICAddressLookupResponse deserializeXMLToWebICAddressLookupResponseObject(String argXMLString)
	{
		String sMethod = this.getClass().getName() + "[deserializeXMLToWebICAddressLookupResponseObject] ";
		log.info(sMethod);

		log.log(Level.FINE, "---argXMLString = " + argXMLString);

		WebICAddressLookupResponse deserializedAddressLookupResponseObject = new WebICAddressLookupResponse();
		XStream xstream = new XStream(new DomDriver());

		xstream.alias("WebICAddressLookupResponse", WebICAddressLookupResponse.class);
		xstream.addImplicitCollection(WebICAddressLookupResponse.class, "standardAddressLine1", "standardAddressLine1", String.class);
		xstream.addImplicitCollection(WebICAddressLookupResponse.class, "standardAddressLine2", "standardAddressLine2", String.class);

		deserializedAddressLookupResponseObject = (WebICAddressLookupResponse) xstream.fromXML(argXMLString);
		return deserializedAddressLookupResponseObject;
	}
}
