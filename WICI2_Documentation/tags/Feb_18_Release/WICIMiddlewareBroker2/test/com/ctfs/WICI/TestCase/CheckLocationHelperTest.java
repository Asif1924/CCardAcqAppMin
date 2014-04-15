package com.ctfs.WICI.TestCase;

import static org.junit.Assert.fail;

import org.junit.Assert;
import org.junit.Test;
import com.ctc.ctfs.channel.webicuserlocation.WebICCheckLocationRequest;
import com.ctc.ctfs.channel.webicuserlocation.WebICCheckLocationResponse;
import com.ctfs.WICI.Helper.CheckLocationHelper;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.DomDriver;

public class CheckLocationHelperTest
{

	@Test
	public void test_that_it_creates_wellformed_xml_in_the_request()
	{
		CheckLocationHelper sut = new CheckLocationHelper();

		String expectedXMLString = "";
		expectedXMLString += "<WebICCheckLocationRequest>";
		expectedXMLString += "<userID>epamfmr</userID>";
		expectedXMLString += "<locationID>123</locationID>";
		expectedXMLString += "</WebICCheckLocationRequest>";

		WebICCheckLocationRequest locationRequest = new WebICCheckLocationRequest();
		locationRequest.setLocationID("123");
		locationRequest.setUserID("epamfmr");

		try
		{
			String resultXML = sut.userLocationSerialize(locationRequest).trim().toLowerCase().replace("\n", "").replace(" ", "");
			expectedXMLString = expectedXMLString.trim().toLowerCase().replace("\n", "").replace(" ", "");
			Assert.assertEquals(expectedXMLString, resultXML);
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
	}

	@Test
	public void testResponseDeserialization()
	{
		try
		{
			String xmlStr = "<WebICCheckLocationResponse>  	<message>User HUNMA belongs to Location 123</message> 	<outletName>ASSOCIATE STORE     </outletName> 	<outletNumber>123</outletNumber> 	<outletStreet>86 Josephine St               </outletStreet> 	<outletCity>Wingham                  </outletCity> 	<outletProvince>ON</outletProvince> 	<outletPostal>N0G2W0</outletPostal></WebICCheckLocationResponse>";
			xmlStr = xmlStr.replaceFirst("<message>(.*)</message>", "<message>SUCCESS</message>");
			XStream xstream = new XStream(new DomDriver());
			xstream.alias("WebICCheckLocationResponse", WebICCheckLocationResponse.class);
			WebICCheckLocationResponse result = (WebICCheckLocationResponse) xstream.fromXML(xmlStr);
		}
		catch (Exception e)
		{
			e.printStackTrace();
			fail();
		}
		assert (true);
	}
}
