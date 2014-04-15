package com.ctfs.WICI.TestCase;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;

import com.ctc.ctfs.channel.AddressStatus;
import com.ctc.ctfs.channel.webicaddressverification.WebICAddressLookupResponse;
import com.ctfs.WICI.Helper.AddressLookupHelper;

public class AddressLookupHelperTest
{
	@Test
	public void test_that_it_deserializes_addresslookupresponse_xml_to_addresslookupresponse_object()
	{
		AddressLookupHelper sut = new AddressLookupHelper();

		String xmlString = "";
		xmlString += "<WebICAddressLookupResponse>      <standardAddressLine1>ENFIELD PL</standardAddressLine1>    <standardAddressLine2></standardAddressLine2>  <standardCityName>MISSISSAUGA</standardCityName>  <standardProvince>ON</standardProvince>  <standardPostalCode>L5B4L8</standardPostalCode>  <addressStatus>N</addressStatus></WebICAddressLookupResponse>";
		WebICAddressLookupResponse expectedAddressLookupResponseObject = new WebICAddressLookupResponse();
		expectedAddressLookupResponseObject.setStandardPostalCode("L5B4L8");
		expectedAddressLookupResponseObject.setAddressStatus(AddressStatus.N);

		String deserializedPostalCode = ((WebICAddressLookupResponse) sut.deserializeXMLToWebICAddressLookupResponseObject(xmlString)).getStandardPostalCode();
		AddressStatus deserializedAddressStatus = ((WebICAddressLookupResponse) sut.deserializeXMLToWebICAddressLookupResponseObject(xmlString)).getAddressStatus();

		Assert.assertEquals(expectedAddressLookupResponseObject.getStandardPostalCode(), deserializedPostalCode);
		Assert.assertEquals(expectedAddressLookupResponseObject.getAddressStatus(), deserializedAddressStatus);
	}

	@Test
	public void test_that_it_deserializes_addresslookupresponse_xml_with_xml_junk_at_top_to_addresslookupresponse_object()
	{
		AddressLookupHelper sut = new AddressLookupHelper();

		String xmlString = "";
		xmlString += "<?xml version=\"1.0\" encoding=\"UTF-8\"?> <WebICAddressLookupResponse>      <standardAddressLine1>ENFIELD PL</standardAddressLine1>    <standardAddressLine2></standardAddressLine2>  <standardCityName>MISSISSAUGA</standardCityName>  <standardProvince>ON</standardProvince>  <standardPostalCode>L5B4L8</standardPostalCode>  <addressStatus>N</addressStatus></WebICAddressLookupResponse>";
		WebICAddressLookupResponse expectedAddressLookupResponseObject = new WebICAddressLookupResponse();
		expectedAddressLookupResponseObject.setStandardPostalCode("L5B4L8");
		expectedAddressLookupResponseObject.setAddressStatus(AddressStatus.N);

		String deserializedPostalCode = ((WebICAddressLookupResponse) sut.deserializeXMLToWebICAddressLookupResponseObject(xmlString)).getStandardPostalCode();
		AddressStatus deserializedAddressStatus = ((WebICAddressLookupResponse) sut.deserializeXMLToWebICAddressLookupResponseObject(xmlString)).getAddressStatus();

		Assert.assertEquals(expectedAddressLookupResponseObject.getStandardPostalCode(), deserializedPostalCode);
		Assert.assertEquals(expectedAddressLookupResponseObject.getAddressStatus(), deserializedAddressStatus);
	}

	@Test
	public void test_that_it_deserializes_addresslookupresponse_xml_with_addressline1_value_to_addresslookupresponse_object_also_with_addressline1_value()
	{
		AddressLookupHelper sut = new AddressLookupHelper();

		/*
		 * <?xml version="1.0" encoding="UTF-8"?> <WebICAddressLookupResponse>
		 * <standardAddressLine1>THOMAS ST</standardAddressLine1>
		 * <standardAddressLine2></standardAddressLine2>
		 * <standardCityName>MISSISSAUGA</standardCityName>
		 * <standardProvince>ON</standardProvince>
		 * <standardPostalCode>L5M0M2</standardPostalCode>
		 * <addressStatus>N</addressStatus></WebICAddressLookupResponse>
		 * {"standardAddressLine1"
		 * :[],"standardAddressLine2":[],"standardCityName"
		 * :"MISSISSAUGA","standardProvince"
		 * :"ON","standardPostalCode":"L5M0M2","addressStatus":"N"}
		 */

		String xmlString = "";
		xmlString += "<WebICAddressLookupResponse>      <standardAddressLine1>THOMAS ST</standardAddressLine1>    <standardAddressLine2></standardAddressLine2>  <standardCityName>MISSISSAUGA</standardCityName>  <standardProvince>ON</standardProvince>  <standardPostalCode>L5M0M2</standardPostalCode>  <addressStatus>N</addressStatus></WebICAddressLookupResponse>";
		List<String> deserializedAddressLine1 = ((WebICAddressLookupResponse) sut.deserializeXMLToWebICAddressLookupResponseObject(xmlString)).getStandardAddressLine1();
		Assert.assertEquals("THOMAS ST", "" + deserializedAddressLine1.get(0));
	}

	@Test
	public void test_that_it_deserializes_addresslookupresponse_xml_with_2_addressline1_values_to_addresslookupresponse_object_also_with_2_addressline1_values()
	{
		AddressLookupHelper sut = new AddressLookupHelper();

		/*
		 * <?xml version="1.0" encoding="UTF-8"?> <WebICAddressLookupResponse>
		 * <standardAddressLine1>THOMAS ST</standardAddressLine1>
		 * <standardAddressLine2></standardAddressLine2>
		 * <standardCityName>MISSISSAUGA</standardCityName>
		 * <standardProvince>ON</standardProvince>
		 * <standardPostalCode>L5M0M2</standardPostalCode>
		 * <addressStatus>N</addressStatus></WebICAddressLookupResponse>
		 * {"standardAddressLine1"
		 * :[],"standardAddressLine2":[],"standardCityName"
		 * :"MISSISSAUGA","standardProvince"
		 * :"ON","standardPostalCode":"L5M0M2","addressStatus":"N"}
		 */

		String xmlString = "";
		xmlString += "<WebICAddressLookupResponse><standardAddressLine1>THOMAS ST</standardAddressLine1><standardAddressLine1>THOMAS 2 ST</standardAddressLine1><standardAddressLine2></standardAddressLine2>  <standardCityName>MISSISSAUGA</standardCityName>  <standardProvince>ON</standardProvince>  <standardPostalCode>L5M0M2</standardPostalCode>  <addressStatus>N</addressStatus></WebICAddressLookupResponse>";
		List<String> deserializedAddressLine1 = ((WebICAddressLookupResponse) sut.deserializeXMLToWebICAddressLookupResponseObject(xmlString)).getStandardAddressLine1();
		Assert.assertEquals("THOMAS ST", "" + deserializedAddressLine1.get(0));
		Assert.assertEquals("THOMAS 2 ST", "" + deserializedAddressLine1.get(1));
	}

	@Test
	public void test_that_it_deserializes_addresslookupresponse_xml_with_2_addressline2_values_to_addresslookupresponse_object_also_with_2_addressline2_values()
	{
		AddressLookupHelper sut = new AddressLookupHelper();

		/*
		 * <?xml version="1.0" encoding="UTF-8"?> <WebICAddressLookupResponse>
		 * <standardAddressLine1>THOMAS ST</standardAddressLine1>
		 * <standardAddressLine2></standardAddressLine2>
		 * <standardCityName>MISSISSAUGA</standardCityName>
		 * <standardProvince>ON</standardProvince>
		 * <standardPostalCode>L5M0M2</standardPostalCode>
		 * <addressStatus>N</addressStatus></WebICAddressLookupResponse>
		 * {"standardAddressLine1"
		 * :[],"standardAddressLine2":[],"standardCityName"
		 * :"MISSISSAUGA","standardProvince"
		 * :"ON","standardPostalCode":"L5M0M2","addressStatus":"N"}
		 */

		String xmlString = "";
		xmlString += "<WebICAddressLookupResponse><standardAddressLine1>THOMAS ST</standardAddressLine1><standardAddressLine1>THOMAS 2 ST</standardAddressLine1><standardAddressLine2>foo</standardAddressLine2><standardAddressLine2>bar</standardAddressLine2>  <standardCityName>MISSISSAUGA</standardCityName>  <standardProvince>ON</standardProvince>  <standardPostalCode>L5M0M2</standardPostalCode>  <addressStatus>N</addressStatus></WebICAddressLookupResponse>";
		List<String> deserializedAddressLine2 = ((WebICAddressLookupResponse) sut.deserializeXMLToWebICAddressLookupResponseObject(xmlString)).getStandardAddressLine2();
		Assert.assertEquals("foo", "" + deserializedAddressLine2.get(0));
		Assert.assertEquals("bar", "" + deserializedAddressLine2.get(1));
	}

}
