package com.ctfs.BRB.TestCase;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

import org.junit.Assert;
import org.junit.Test;

import com.channel.ctfs.ctc.webicgateway.RequestBody;
import com.channel.ctfs.ctc.webicgateway.ResponseBody;
import com.ctc.ctfs.channel.AddressStatus;
import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctc.ctfs.channel.accountacquisition.PlaceOfIssueType;
import com.ctc.ctfs.channel.accountacquisition.ProvinceType;
import com.ctc.ctfs.channel.webicaddressverification.WebICAddressLookupResponse;
import com.ctfs.BRB.Helper.GenericObjectsHelper;

import com.ctc.ctfs.channel.accountacquisition.*;

public class ObjectsHelperTest
{

	private XMLGregorianCalendar getXMLGregorianCalendarDateFromString(String argDateAsString) throws ParseException, DatatypeConfigurationException
	{
		System.out.println("getXMLGregorianCalendarDateFromString");
		SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");
		Date simpleDate = dateFormatter.parse(argDateAsString);
		GregorianCalendar gregsCal = new GregorianCalendar();
		gregsCal.setTime(simpleDate);
		javax.xml.datatype.XMLGregorianCalendar xmlDateAccordingToPopeGregory = DatatypeFactory.newInstance().newXMLGregorianCalendar(gregsCal);
		return xmlDateAccordingToPopeGregory;
	}

	@Test
	public void test_that_it_converts_a_class_to_JSON()
	{
		GenericObjectsHelper sut = new GenericObjectsHelper();

		com.ctc.ctfs.channel.webicaddressverification.WebICAddressLookupResponse testObject = new com.ctc.ctfs.channel.webicaddressverification.WebICAddressLookupResponse();
		testObject.setStandardPostalCode("L5M0M2");

		Assert.assertEquals("{\"standardPostalCode\":\"L5M0M2\"}", sut.convertObjectToJSON(testObject));
	}

	@Test
	public void test_that_it_converts_a_WebICAddressLookupResponse_class_to_JSON()
	{
		GenericObjectsHelper sut = new GenericObjectsHelper();

		WebICAddressLookupResponse testObject = new WebICAddressLookupResponse();
		testObject.setStandardPostalCode("L5M0M2");

		Assert.assertEquals("{\"standardPostalCode\":\"L5M0M2\"}", sut.convertObjectToJSON(testObject));
	}

	@Test
	public void test_that_it_serializes_AccountApplicationRequest_with_XMLGregorianCalendar_DateField_To_String_Not_XMLGregorianCalendar_complex_Type()
	{
		GenericObjectsHelper sut = new GenericObjectsHelper();
		AccountApplicationRequestType accountApplicationRequest = new com.ctc.ctfs.channel.accountacquisition.ObjectFactory().createAccountApplicationRequestType();

		/*
		 * accountApplicationRequest.setExternalReferenceId(
		 * "3788B296-68EE-4242-B12A-F1B37EA64DA2");
		 */
		accountApplicationRequest.setStoreNumber(424);
		/*
		 * accountApplicationRequest.setAgentId("0256");
		 * accountApplicationRequest.setChannelIndicator("IP");
		 * accountApplicationRequest.setAgencyPromoCode("E9999");
		 * accountApplicationRequest.setAcquistionStrategyCode("0A8855");
		 *
		 * accountApplicationRequest.setRequestedProductType("OMC");
		 * accountApplicationRequest.setFirstName("JOHN");
		 * accountApplicationRequest.setLastName("DOE");
		 */
		XMLGregorianCalendar xmlDateOfBirth = null;
		try
		{
			xmlDateOfBirth = getXMLGregorianCalendarDateFromString("1970-01-01");
		}
		catch (ParseException e1)
		{
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		catch (DatatypeConfigurationException e1)
		{
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

		accountApplicationRequest.setDateOfBirth(xmlDateOfBirth);

		/*
		 * accountApplicationRequest.setIdType("DR");
		 * accountApplicationRequest.setIdNumber("D0000-00917-00101");
		 * accountApplicationRequest.setPlaceOfIssue(PlaceOfIssueType.ON);
		 * accountApplicationRequest.setPreferedLanguage("E");
		 *
		 *
		 *
		 * accountApplicationRequest.setApplicantGender("M");
		 * accountApplicationRequest.setCurrentAddressType("O");
		 * accountApplicationRequest
		 * .setCurrentAddressLine1("2180 WINSTON PARK DRIVE");
		 * accountApplicationRequest.setCurrentCity("OAKVILLE");
		 * accountApplicationRequest.setCurrentProvince(ProvinceType.ON);
		 * accountApplicationRequest.setCurrentPostalCode("L6H5W1");
		 * accountApplicationRequest.setCurrentCountry("CA");
		 * accountApplicationRequest.setCurrentTelephoneNumber("9053293332");
		 *
		 * accountApplicationRequest.setYearsAtCurrentAddress(5);
		 * accountApplicationRequest.setMonthsAtCurrentAddress(6);
		 * accountApplicationRequest
		 * .setCurrentEmailAddress("TEST@ENDONETWORKS.COM");
		 *
		 * accountApplicationRequest.setEmployementStatus("F");
		 * accountApplicationRequest.setJobTitle("NONE");
		 * accountApplicationRequest.setEmployementCategory("UN");
		 * accountApplicationRequest.setYearsAtEmployement(2);
		 * accountApplicationRequest.setMonthsAtEmployement(11);
		 * accountApplicationRequest.setGrossAnnualIncome(65000);
		 * accountApplicationRequest.setMonthlyRentMortgageAmount(1200);
		 *
		 * accountApplicationRequest.setBankCardFlag("Y");
		 * accountApplicationRequest.setBankLoanFlag("Y");
		 * accountApplicationRequest.setChequingAccountFlag("N");
		 * accountApplicationRequest.setSavingsAccountFlag("Y");
		 * accountApplicationRequest.setStoreCardFlag("N");
		 * accountApplicationRequest.setGasCardFlag("N");
		 * accountApplicationRequest.setAgreedToTermsFlag("Y");
		 *
		 *
		 * byte[] signatureConverted =
		 * convertSignatureStringToByte("/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAUf/9k="
		 * );
		 * accountApplicationRequest.setApplicantSignature(signatureConverted);
		 *
		 * accountApplicationRequest.setSignatureFlag("Y");
		 * accountApplicationRequest.setSignatureMatchFlag("Y");
		 *
		 * XMLGregorianCalendar xmlDateSigned = null; try { xmlDateSigned =
		 * getXMLGregorianCalendarDateFromString("2010-06-15"); } catch
		 * (ParseException e1) { // TODO Auto-generated catch block
		 * e1.printStackTrace(); } catch (DatatypeConfigurationException e1) {
		 * // TODO Auto-generated catch block e1.printStackTrace(); }
		 */
		// accountApplicationRequest.setDateSigned(xmlDateSigned);

		System.out.println("invokeAccountApplication::creating Request");
		RequestBody requestBody = new RequestBody();
		ResponseBody responseBody = new ResponseBody();

		String expectedString = "";
		// expectedString+= "<AccountApplicationRequest>\n";
		/*
		 * expectedString+=
		 * "<externalReferenceId>3788B296-68EE-4242-B12A-F1B37EA64DA2</externalReferenceId>\n"
		 * ;
		 */
		// expectedString+= "<storeNumber>424</storeNumber>\n";
		/*
		 * expectedString+= "<agentId>0256</agentId>\n"; expectedString+=
		 * "<channelIndicator>IP</channelIndicator>\n"; expectedString+=
		 * "<agencyPromoCode>E9999</agencyPromoCode>\n"; expectedString+=
		 * "<acquistionStrategyCode>0A8855</acquistionStrategyCode>\n";
		 * expectedString+=
		 * "<requestedProductType>OMC</requestedProductType>\n";
		 * expectedString+= "<firstName>JOHN</firstName>\n"; expectedString+=
		 * "<lastName>DOE</lastName>\n";
		 */
		// expectedString+= "<dateOfBirth>1970-01-01</dateOfBirth>\n";
		/*
		 * expectedString+= "<idType>DR</idType>\n"; expectedString+=
		 * "<idNumber>D0000-00917-00101</idNumber>\n"; expectedString+=
		 * "<placeOfIssue>ON</placeOfIssue>\n"; expectedString+=
		 * "<preferedLanguage>E</preferedLanguage>\n"; expectedString+=
		 * "<applicantGender>M</applicantGender>\n"; expectedString+=
		 * "<currentAddressType>O</currentAddressType>\n"; expectedString+=
		 * "<currentAddressLine1>2180 WINSTON PARK DRIVE</currentAddressLine1>\n"
		 * ; expectedString+= "<currentCity>OAKVILLE</currentCity>\n";
		 * expectedString+= "<currentProvince>ON</currentProvince>\n";
		 * expectedString+= "<currentPostalCode>L6H5W1</currentPostalCode>\n";
		 * expectedString+= "<currentCountry>CA</currentCountry>\n";
		 * expectedString+=
		 * "<currentTelephoneNumber>9053293332</currentTelephoneNumber>\n";
		 * expectedString+=
		 * "<yearsAtCurrentAddress>5</yearsAtCurrentAddress>\n";
		 * expectedString+=
		 * "<monthsAtCurrentAddress>6</monthsAtCurrentAddress>\n";
		 * expectedString+=
		 * "<currentEmailAddress>TEST@ENDONETWORKS.COM</currentEmailAddress>\n";
		 * expectedString+= "<employementStatus>F</employementStatus>\n";
		 * expectedString+= "<jobTitle>NONE</jobTitle>\n"; expectedString+=
		 * "<employementCategory>UN</employementCategory>\n"; expectedString+=
		 * "<yearsAtEmployement>2</yearsAtEmployement>\n"; expectedString+=
		 * "<monthsAtEmployement>11</monthsAtEmployement>\n"; expectedString+=
		 * "<grossAnnualIncome>65000</grossAnnualIncome>"; expectedString+=
		 * "<monthlyRentMortgageAmount>1200</monthlyRentMortgageAmount>\n";
		 * expectedString+= "<bankCardFlag>Y</bankCardFlag>\n"; expectedString+=
		 * "<bankLoanFlag>Y</bankLoanFlag>\n"; expectedString+=
		 * "<chequingAccountFlag>N</chequingAccountFlag>\n"; expectedString+=
		 * "<savingsAccountFlag>Y</savingsAccountFlag>\n"; expectedString+=
		 * "<storeCardFlag>N</storeCardFlag>\n"; expectedString+=
		 * "<gasCardFlag>N</gasCardFlag>\n"; expectedString+=
		 * "<agreedToTermsFlag>Y</agreedToTermsFlag>\n"; //expectedString+=
		 * "<applicantSignature>LzlqLzRBQVFTa1pKUmdBQkFRRUFZQUJnQUFELzJ3QkRBQVVmLzlrPQ==</applicantSignature>\n"
		 * ; expectedString+= "<signatureFlag>Y</signatureFlag>\n";
		 * expectedString+= "<signatureMatchFlag>Y</signatureMatchFlag>\n";
		 */
		// expectedString+= "</AccountApplicationRequest>\n";

		expectedString = "<AccountApplicationRequest>\n";
		expectedString += "  <storeNumber>424</storeNumber>\n";
		expectedString += "  <dateOfBirth>1970-01-01</dateOfBirth>\n";
		expectedString += "</AccountApplicationRequest>\n";

		Assert.assertTrue(expectedString.indexOf("<dateOfBirth>") != -1);
	}

	@Test
	public void test_that_it_deserializes_accountapplicationresponse_xml_to_accountapplicationresponse_object()
	{
		GenericObjectsHelper sut = new GenericObjectsHelper();
		// <?xml version="1.0" encoding="UTF-8"?>
		// <tns:AccountApplicationResponse>
		// <tns:appStatus>PENDING</tns:appStatus></tns:AccountApplicationResponse>
		String xmlString = "";
		xmlString += "<tns:AccountApplicationResponse>  <tns:appStatus>PENDING</tns:appStatus></tns:AccountApplicationResponse>";
		AccountApplicationResponseType expectedAccountApplicationResponseObject = new AccountApplicationResponseType();
		expectedAccountApplicationResponseObject.setAppStatus("PENDING");

		String deserializedAppStatus = ((AccountApplicationResponseType) sut.deserializeXMLToAccountApplicationResponseObject(xmlString)).getAppStatus();

		Assert.assertEquals(expectedAccountApplicationResponseObject.getAppStatus(), deserializedAppStatus);
	}

	@Test
	public void test_that_it_converts_XMLGregorianDate_to_String()
	{
		GenericObjectsHelper sut = new GenericObjectsHelper();

		XMLGregorianCalendar xmlDateOfBirth = null;
		try
		{
			xmlDateOfBirth = getXMLGregorianCalendarDateFromString("1970-01-01");
		}
		catch (ParseException e1)
		{
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		catch (DatatypeConfigurationException e1)
		{
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

		Assert.assertEquals("1970-01-01", sut.getDateAsStringFromXMLGregorianCalendarDateObject(xmlDateOfBirth));
	}

}
