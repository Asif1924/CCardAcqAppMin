package com.ctfs.WICI.TestCase;

import java.lang.reflect.Type;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.GregorianCalendar;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;

import com.channel.ctfs.ctc.webicgateway.RequestBody;
import com.channel.ctfs.ctc.webicgateway.ResponseBody;
import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctc.ctfs.channel.accountacquisition.AccountApplicationResponseType;
import com.ctc.ctfs.channel.webicaddressverification.WebICAddressLookupResponse;
import com.ctfs.WICI.Helper.WICIObjectsHelper;
import com.ctfs.WICI.Model.AccountApplicationPostRequest;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;


public class WICIObjectsHelperTest
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
		WICIObjectsHelper sut = new WICIObjectsHelper();

		com.ctc.ctfs.channel.webicaddressverification.WebICAddressLookupResponse testObject = new com.ctc.ctfs.channel.webicaddressverification.WebICAddressLookupResponse();
		testObject.setStandardPostalCode("L5M0M2");

		Assert.assertEquals("{\"standardPostalCode\":\"L5M0M2\"}", sut.convertObjectToJSON(testObject));
	}

	@Test
	public void test_that_it_converts_a_WebICAddressLookupResponse_class_to_JSON()
	{
		WICIObjectsHelper sut = new WICIObjectsHelper();

		WebICAddressLookupResponse testObject = new WebICAddressLookupResponse();
		testObject.setStandardPostalCode("L5M0M2");

		Assert.assertEquals("{\"standardPostalCode\":\"L5M0M2\"}", sut.convertObjectToJSON(testObject));
	}

	@Test
	public void test_that_it_serializes_AccountApplicationRequest_with_XMLGregorianCalendar_DateField_To_String_Not_XMLGregorianCalendar_complex_Type()
	{
		WICIObjectsHelper sut = new WICIObjectsHelper();
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
		WICIObjectsHelper sut = new WICIObjectsHelper();
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
		WICIObjectsHelper sut = new WICIObjectsHelper();

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

	@Test @Ignore
	public void test_that_it_converts_postrequestbodyjson_to_object()
	{
		WICIObjectsHelper sut = new WICIObjectsHelper();

		String postRequestBody = "{'accountApplicationData':[{'model':'queueModel','data':[{'name':'queueTransactionID','value':'WICI_45_1392845551934-0'}]},{'model':'loginScreen','data':[{'name':'employerID','value':'e'},{'name':'locationFieldID','value':'345'},{'name':'agentID','value':'45'}]},{'model':'chooseProductModel','data':[{'name':'productCard','value':'OMC'},{'name':'agencyProgram','value':'4022'},{'name':'agencyPromoCode','value':'4022'},{'name':'province','value':'MB'}]},{'model':'personalData','data':[]},{'model':'personalData2_Address','data':[]},{'model':'financialData','data':[{'name':'cardVISAMCAMEX','value':'N'},{'name':'cardBankLoan','value':'N'},{'name':'cardStoreCard','value':'N'},{'name':'cardChequingAcct','value':'N'},{'name':'cardGasCard','value':'N'},{'name':'cardSavingsAcct','value':'N'}]},{'model':'supCardRequestData','data':[{'name':'cardYesNo','value':'N'},{'name':'sameAddressYesNo','value':'Y'}]},{'model':'signatureModel','data':[{'name':'userAcceptAgreement','value':'Y'},{'name':'userSingnature','value':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiwAAACLCAYAAABC8cKWAAARtUlEQVR4Xu3dX6hlVR0H8H1mRscx wP5EGQ4EUFFqUHQg5nzYg8lVvRUBE5IgRRUNHcaoz8TPaT3jqQPgYHSSEZKUEnZQ75cxXoKLCmKClIHHwKpJFObP3f3W/v8mX33nHvvufeeP vs89mwuePMOXuv/VnLc7537bXX6hQ2AgQIECBAgEDmAp3My6d4BAgQIECAAIFCYNEICBAgQIAAgewFBJbsq0gBCRAgQIAAAYFFGyBAgAABAgSyFxBYsq8iBSRAgAABAgQEFm2AAAECBAgQyF5AYMm ihSQAAECBAgQEFi0AQIECBAgQCB7AYEl ypSQAIECBAgQEBg0QYIECBAgACB7AUEluyrSAEJECBAgAABgUUbIECAAAECBLIXEFiyryIFJECAAAECBAQWbYAAAQIECBDIXkBgyb6KFJAAAQIECBAQWLQBAgQIECBAIHsBgSX7KlJAAgQIECBAQGDRBggQIECAAIHsBQSW7KtIAQkQIECAAAGBRRsgQIAAAQIEshcQWLKvIgUkQIAAAQIEBBZtgAABAgQIEMheQGDJvooUkAABAgQIEBBYtAECBAgQIEAgewGBJfsqUkACBAgQIEBAYNEGCBAgQIAAgewFBJbsq0gBCRAgQIAAAYFFGyBAgAABAgSyFxBYsq8iBSRAgAABAgQEFm2AAAECBAgQyF5AYMm ihSQAAECBAgQEFi0AQIECBAgQCB7AYEl ypSQAIECBAgQEBg0QYIECBAgACB7AUEluyrSAEJECBAgAABgUUbIECAAAECBLIXEFiyryIFJECAAAECBAQWbYAAAQIECBDIXkBgyb6KFJAAAQIECBAQWLQBAgQIECBAIHsBgSX7KlJAAgQIECBAQGDRBggQIECAAIHsBQSW7KtIAQkQIECAAAGBRRsgQIAAAQIEshcQWLKvIgUkQIAAAQIEBBZtgAABAgQIEMheQGDJvooUkAABAgQIEBBYtAECBAgQIEAgewGBJfsqUkACBAgQIEBAYNEGCBAgQIAAgewFBJbsq0gBCRAgQIAAAYFFGyBAgAABAgSyFxBYsq8iBSRAgAABAgQEFm2AAAECBAgQyF5AYMm ihapgMvXFUXnNUVRvlgUew7Gz9iHbq/r/lvnd5vrdJ4uirXY09a5rPtz36 L4ov/XiRV10qAAIE2CAgsbajFubqG70TYOHN1BJJreoEkfhZpj7 fyZbCSzP4rDZKEv9e1kLORb8XemZSV05KgMACCwgsC1z507n05Qgje67vhpKyH06mc rhZzkXf713vAVIPTll7IMtBaBewOnEz7VaIDr3TFHcVn/teIviaAQIEGipgMDS0oqdzWWl3pOzvXBSHIoypH0n22MXvqmML/305X/BtlnvzMF49ZU7KcAW7xlX6Kn17qQenP4trnUh54WiOLrFra8JXKFDEiBAIDMBgSWzCpmf4lTjTd4U5X1rt dkcItnlEuIWyrF07GnEBJ7GmcyrS/l1OPTqd1 qsbCpGBT3w41/juFsHFtr8SBLtnZwdb15Kx2j1Efp3N0SNDb2Zm8iwABArkJCCy51cjMy7MSX9Zl2Rj0mr7gU09G2rY73iSFk9RDkMaBxJfstILJJCGboaduUoZVp2 VCnEw9t308rwc7z wzavp35Lq/ayCzvNxjFNFsfTUNo/l5QQIEMhCQGDJohpmUYiVq Ks74w9ekiqWzfbDSLDCh23L6pwEsEk7fviz57IWQ VAuFgq5s3//zabbaK0/H6i0d8TwqPEWJS71YVIvXMjAjnZQQIzE5AYJmd/QzOnMaYnPtwfEkd7oWU3ZQhjeN4ohtMpn1bZzfFnrf39ntz0m2satBy2g729vTn7dyu2mzsTdRjP2zuiwAjaM5bS1FeAm0XEFjaXsNFP6SsfSSCRewjbek2Tm A67rBrulLLbal3s RjuVFUxHoB5v mJzBral0Oy8eI99w2 iWU6rj2MuH23EbbyqV4CQECExQQGCZIO5sD/3tg0Vx0TfiC djUY5XX1iWTvy2XeohmW0lTfHs1RNc0UNTTcaXBh6n3pohvTOdmLSv7E2yNyhehNfOz7oB5kz0vngse4oV51QECPQEBJbWNYUT0YtSfiku631DLi0GXZY/ib8/6bfm1lX8Di oGlPT34fdXnop/v3SxsHr45TcPtqhvLcRILA9AYFle16Zvrq67XNzhJEjUcArGoX8T/x3L6S4lZNpBWZUrEGASbcPm7eSUnjZF3tzcG8vwJR/iZ6YWPrAk0gZVaiiEGiNgMAy11VZdfN/Pi4hBZVmN358cZT3Rk9K9KbYCOxEoFpGIY196vfANB/P3mxOmdXuHDHpaaT0JJIZfndSA95DgMB5AYFlLlvDIKgsRfFf1biE  ML4i63fOayYjMvdDWwtx9e4mmzodtWswBHeOnP6tuf0VeYybziFY9AFgICSxbVMGohbo9xKXtvjVd/ovGO/8Z/n4je ggqHkcdVdPrditQDzCdGyOIbLRG09nemdLtpM222vww1USDse5SGyYa3K2z9xMgkAQElrloB4MelXjqZ12dPRcf6l Np4HiCQ5BZS6qstWF7D JVC10ebD3JFJ6GmmzSfBGCTPRK1NNRvjX2P9gjEyrG5GLI7ChgMCSfeNYPhxF/G58 Nef1OgFFeNTsq8 BQyBepAp0rwwh2Lfan6YJLfBGJlqbEzvMWuT3GliBBZFQGDJtqbTPCr7fhzFe0 tiGfig/ozBtJmW2kKtm2BoWEm2v6w9Zc6scZVuRb/1rz15DHrbbt7A4H5ExBYsqyzldvig/nr0avSW9W3TI TflZQybKyFGoiAoMgk3pj0mDfYWNkNnpKaTXeE7tZeidSNQ5KYEYCAsuM4IeftupV Wn3A7q/lffEGJUIMMaoZFVVCjMDgXVPKaUg0xgbs9UsvXtjmQH/H82g4pySwFgEBJaxMI7jIKlXpUiDavd3j5bmryg 6imJcdg6RjsFtnzMeqNZemP8i96XdrYJV9VmAYFl5rW7clV8eD4QXd7vqhXljngS4tjMi6YABOZKYMtZehtLDNQH7y5F74uNAIGcBQSWmdbOyu0RVI5GYOnVg16VmVaHk7dIYN0svWmZgeaj1c3el9oCj24dtaghuJQWCQgsM6nM6jfBH8X Br0qM6kAJ104ger2UQouw9ZIejn /sB6kvTY9J7VWJogel6sTr1wzcUFZykgsEy1WqonHx6KU37g/GnL0/Hn9xqrMtWKcLKFFkiD2/fGLw1VgGkuMTDsyaN4bLpzUnhZ6Ebj4jMQEFimVgnLH4zf2H4Yt3/ShFlp 1/scUto6fjUiuBEBAg0BKqVziO8lP3el/qtow0G7QovmhGBWQgILFNRX74ufkN7vNar8mh8SMYEcLqap8LvJARGFki3a1N4qXpf6qtTbxReose0/KXlAkYG9kICOxYQWHZMN obT8SHXvn3eHWyjpVsOzcXxZHoabERIJC3QBr3UhweLbykMS p58XTRnnXqdLNs4DAMtHaq7qbT0VguSxOk6YUf7ffxCYK7uAEJiSwUXiplguof47G00ZFBJezd tBnVBVOOzCCggsE636lbTGydXxm1d8qBVvjp6VZyZ6OgcnQGAKAoPwcmuc7OLaCV MP6dfTnpb1esSwWVpdQqFcgoCrRcQWCZWxSdiLaDym93Ddz4dYeXeiZ3KgQkQmJFANUXB4djjVu9gS0/ 1YJMmqCuOB6fAffPqJBOS6AVAgLLRKqxWhPob3HoWFW2jAG2R2uPMU/khA5KgMBMBQYT1X0hihG9qv2tvr5RNbPuyfhsiF4XaxrNtLqcfC4FBJaJVNvKH Ow74g9nizY90YfThNBdlACmQpUvS4puNTneKnP75LGudwV41yix8WTgplWomJlKCCwjL1S7rwxxtf vHvYzic9ETR2YAckMCcC1QR1EVw6h6PAvfldmitKpyeL1qLH5Wga72YjQGATAYFl7M1j5Uwccl/sL8Rgu/4kcWM/iwMSIDAvAtUM16nHJe39iekaA3SL1e5j0ca5zEutKuf0BQSWsZovx29Sne93D1l Kn5rig8gGwECBPoC1WfE8fiv/qR0acbr9DncG6SbxrmsPRj7I0Vx7AluBAicFxBYxtoaln8Vnz03xCFjMbWlxlL2Yz2RgxEgMNcCJ2Im3TL1uFxfu4whj0XviUej9brMdVUr/NgEBJaxUVbdvv/qHS5N1f2hsR3agQgQaKlA9URh6nFJSwH0bxeleZsak9F1IrikeV3MpNvShuCyRhAQWEZAGu0lbgeN5uRVBAhcKFD9wnM4/v6O2OuT0UVvbXHg/OurR6NTeIknjAzU1ZIWS0BgGVt9r5yMQ/Umjzobs9p6XHFstA5EYKEEBpPR1XtdkkBjAUbhZaGahYtd1 2IY1cCK6kbN23/jG7b1 /qUN5MgACBSqDquU3BpT6ni/CidSykgB6WsVV7P7AsMR2bqQMRINAVGMyku43wYgFGraddAr5c21WfroYAgdYLbCe8FDEhXeehGPOSHgR4qvU0LrDVAgJLq6vXxREg0G6BwWDduHVUX8OoSAswpq02gLdaPfqkJ43a3SLafHUCS5tr17URILBAAtUj0umWUSO8dGJ8XVn7rO8P1nXLaIEaRysuVWBpRTW6CAIECNQFBusY3bq l6X5pFF/SYC9D1ukVQvKXUBgyb2GlI8AAQK7Ehg8Jt2bdqE6WLpllJ5s3N87dKwgnSansxDjrqi9eaICAstEeR2cAAECuQgMBuumJQGuPl q5grS1UDdu2Klab0uuVSdclQCAouGQIAAgYUTWL4mPv5TcKlPTtdYiLHQ67Jw7SLvCxZY8q4fpSNAgMCEBarJ6WKvL8So12XC6A6/AwGBZQdo3kKAAIH2CQwG6qbw0l IUa9L yp6bq9IYJnbqlNwAgQITEpgO70uR2IhRhuByQsILJM3dgYCBAjMqcCovS7FyVht m6Lvs5pNc9JsQWWOakoxSRAgMBsBYb1uhQvRpkuq5VrNf4cTxgtxRNGNgLjFRBYxuvpaAQIEGi5wNBelzSvy1rsl3QvPs2mu/Zg7I8UxbEnWg7i8qYkMBeB5b777vtTeLxtSiZOQ4AAAQJbCLz0Ulk8 eTp4tFHXylOnTo3ePXFF3eK06fTnHTd7dpr9xc33XSguPzyPUzzFfjzLbfc8vZ8i9eLwbkXMJVPYJmHWlJGAgQWVeDZZ89VweU3v0kPFfW XOLX4fJ8biluuOGSKrhceulc/J68aFUpsCxajbteAgQILLbAYPXoO8Khv1J0fZxLTEZX3uNW0WK3kp1evai7UznvI0CAAIFNBKpBusfjBVf2XvRK/OyNcUl/U8baRXtiP/OYp4s0pFEEBJZRlLyGAAECBHYocEFwSTeKmt89sX7Rnh/Eo9GPF8WXf7vDE3lbywUElpZXsMsjQIBAHgJVcPlelKV/qygV60zqamn83bF4LDrdUrIRWCcgsGgQBAgQIDBFgZVDkVFi0cVOWnixf7sodbpEcCn730nR41J rSiO/mKKBXOqzAUElswrSPEIECDQXoFq1egUXKJXpdjfu84X4md/LaMH4jZRBJfbnm6vgSsbVUBgGVXK6wgQIEBgggInvhK9Kt KE8SELet6W56LW0RXTPDEDj0nAgLLnFSUYhIgQKD9AstviWuM0NL5eO9an48/P1QURz7X/mt3hVsJCCxbCfl3AgQIEJiywJ03RW/LSszX8o8Yx/L KZ/c6TIVEFgyrRjFIkCAAAECBM4LCCxaAwECBAgQIJC9gMCSfRUpIAECBAgQICCwaAMECBAgQIBA9gICS/ZVpIAECBAgQICAwKINECBAgAABAtkLCCzZV5ECEiBAgAABAgKLNkCAAAECBAhkLyCwZF9FCkiAAAECBAgILNoAAQIECBAgkL2AwJJ9FSkgAQIECBAgILBoAwQIECBAgED2AgJL9lWkgAQIECBAgIDAog0QIECAAAEC2QsILNlXkQISIECAAAECAos2QIAAAQIECGQvILBkX0UKSIAAAQIECAgs2gABAgQIECCQvcD/AeKNAbm64i74AAAAAElFTkSuQmCC'},{'name':'signDate','value':'2014-02-19'}]},{'model':'OptionalProductsModel','data':[{'name':'signDate','value':'2014-02-19'},{'name':'insuranceCode','value':'N'},{'name':'insuranceAgreedFlag','value':'N'}]},{'model':'summaryData','data':[]}],'authfieldValue':{'MfgSerial':'20:50:00:00:00:00','BuildSerial':'123213123213'}}";

		postRequestBody = "{'authfieldValue':{'MfgSerial':'20:50:00:00:00:00','BuildSerial':'123213123213'}}";
		postRequestBody = "{accountApplicationData:[{k1:'5',k2:'6'}],authfieldValue:{'MfgSerial':'20:50:00:00:00:00','BuildSerial':'123213123213'}}";
		postRequestBody = "{'accountApplicationData':[{'model':'queueModel','data':[{'name':'queueTransactionID','value':'WICI_45_1392845551934-0'}]},{'model':'loginScreen','data':[{'name':'employerID','value':'e'},{'name':'locationFieldID','value':'345'},{'name':'agentID','value':'45'}]},{'model':'chooseProductModel','data':[{'name':'productCard','value':'OMC'},{'name':'agencyProgram','value':'4022'},{'name':'agencyPromoCode','value':'4022'},{'name':'province','value':'MB'}]},{'model':'personalData','data':[]},{'model':'personalData2_Address','data':[]},{'model':'financialData','data':[{'name':'cardVISAMCAMEX','value':'N'},{'name':'cardBankLoan','value':'N'},{'name':'cardStoreCard','value':'N'},{'name':'cardChequingAcct','value':'N'},{'name':'cardGasCard','value':'N'},{'name':'cardSavingsAcct','value':'N'}]},{'model':'supCardRequestData','data':[{'name':'cardYesNo','value':'N'},{'name':'sameAddressYesNo','value':'Y'}]},{'model':'signatureModel','data':[{'name':'userAcceptAgreement','value':'Y'},{'name':'userSingnature','value':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiwAAACLCAYAAABC8cKWAAARtUlEQVR4Xu3dX6hlVR0H8H1mRscx wP5EGQ4EUFFqUHQg5nzYg8lVvRUBE5IgRRUNHcaoz8TPaT3jqQPgYHSSEZKUEnZQ75cxXoKLCmKClIHHwKpJFObP3f3W/v8mX33nHvvufeeP vs89mwuePMOXuv/VnLc7537bXX6hQ2AgQIECBAgEDmAp3My6d4BAgQIECAAIFCYNEICBAgQIAAgewFBJbsq0gBCRAgQIAAAYFFGyBAgAABAgSyFxBYsq8iBSRAgAABAgQEFm2AAAECBAgQyF5AYMm ihSQAAECBAgQEFi0AQIECBAgQCB7AYEl ypSQAIECBAgQEBg0QYIECBAgACB7AUEluyrSAEJECBAgAABgUUbIECAAAECBLIXEFiyryIFJECAAAECBAQWbYAAAQIECBDIXkBgyb6KFJAAAQIECBAQWLQBAgQIECBAIHsBgSX7KlJAAgQIECBAQGDRBggQIECAAIHsBQSW7KtIAQkQIECAAAGBRRsgQIAAAQIEshcQWLKvIgUkQIAAAQIEBBZtgAABAgQIEMheQGDJvooUkAABAgQIEBBYtAECBAgQIEAgewGBJfsqUkACBAgQIEBAYNEGCBAgQIAAgewFBJbsq0gBCRAgQIAAAYFFGyBAgAABAgSyFxBYsq8iBSRAgAABAgQEFm2AAAECBAgQyF5AYMm ihSQAAECBAgQEFi0AQIECBAgQCB7AYEl ypSQAIECBAgQEBg0QYIECBAgACB7AUEluyrSAEJECBAgAABgUUbIECAAAECBLIXEFiyryIFJECAAAECBAQWbYAAAQIECBDIXkBgyb6KFJAAAQIECBAQWLQBAgQIECBAIHsBgSX7KlJAAgQIECBAQGDRBggQIECAAIHsBQSW7KtIAQkQIECAAAGBRRsgQIAAAQIEshcQWLKvIgUkQIAAAQIEBBZtgAABAgQIEMheQGDJvooUkAABAgQIEBBYtAECBAgQIEAgewGBJfsqUkACBAgQIEBAYNEGCBAgQIAAgewFBJbsq0gBCRAgQIAAAYFFGyBAgAABAgSyFxBYsq8iBSRAgAABAgQEFm2AAAECBAgQyF5AYMm ihapgMvXFUXnNUVRvlgUew7Gz9iHbq/r/lvnd5vrdJ4uirXY09a5rPtz36 L4ov/XiRV10qAAIE2CAgsbajFubqG70TYOHN1BJJreoEkfhZpj7 fyZbCSzP4rDZKEv9e1kLORb8XemZSV05KgMACCwgsC1z507n05Qgje67vhpKyH06mc rhZzkXf713vAVIPTll7IMtBaBewOnEz7VaIDr3TFHcVn/teIviaAQIEGipgMDS0oqdzWWl3pOzvXBSHIoypH0n22MXvqmML/305X/BtlnvzMF49ZU7KcAW7xlX6Kn17qQenP4trnUh54WiOLrFra8JXKFDEiBAIDMBgSWzCpmf4lTjTd4U5X1rt dkcItnlEuIWyrF07GnEBJ7GmcyrS/l1OPTqd1 qsbCpGBT3w41/juFsHFtr8SBLtnZwdb15Kx2j1Efp3N0SNDb2Zm8iwABArkJCCy51cjMy7MSX9Zl2Rj0mr7gU09G2rY73iSFk9RDkMaBxJfstILJJCGboaduUoZVp2 VCnEw9t308rwc7z wzavp35Lq/ayCzvNxjFNFsfTUNo/l5QQIEMhCQGDJohpmUYiVq Ks74w9ekiqWzfbDSLDCh23L6pwEsEk7fviz57IWQ VAuFgq5s3//zabbaK0/H6i0d8TwqPEWJS71YVIvXMjAjnZQQIzE5AYJmd/QzOnMaYnPtwfEkd7oWU3ZQhjeN4ohtMpn1bZzfFnrf39ntz0m2satBy2g729vTn7dyu2mzsTdRjP2zuiwAjaM5bS1FeAm0XEFjaXsNFP6SsfSSCRewjbek2Tm A67rBrulLLbal3s RjuVFUxHoB5v mJzBral0Oy8eI99w2 iWU6rj2MuH23EbbyqV4CQECExQQGCZIO5sD/3tg0Vx0TfiC djUY5XX1iWTvy2XeohmW0lTfHs1RNc0UNTTcaXBh6n3pohvTOdmLSv7E2yNyhehNfOz7oB5kz0vngse4oV51QECPQEBJbWNYUT0YtSfiku631DLi0GXZY/ib8/6bfm1lX8Di oGlPT34fdXnop/v3SxsHr45TcPtqhvLcRILA9AYFle16Zvrq67XNzhJEjUcArGoX8T/x3L6S4lZNpBWZUrEGASbcPm7eSUnjZF3tzcG8vwJR/iZ6YWPrAk0gZVaiiEGiNgMAy11VZdfN/Pi4hBZVmN358cZT3Rk9K9KbYCOxEoFpGIY196vfANB/P3mxOmdXuHDHpaaT0JJIZfndSA95DgMB5AYFlLlvDIKgsRfFf1biE  ML4i63fOayYjMvdDWwtx9e4mmzodtWswBHeOnP6tuf0VeYybziFY9AFgICSxbVMGohbo9xKXtvjVd/ovGO/8Z/n4je ggqHkcdVdPrditQDzCdGyOIbLRG09nemdLtpM222vww1USDse5SGyYa3K2z9xMgkAQElrloB4MelXjqZ12dPRcf6l Np4HiCQ5BZS6qstWF7D JVC10ebD3JFJ6GmmzSfBGCTPRK1NNRvjX2P9gjEyrG5GLI7ChgMCSfeNYPhxF/G58 Nef1OgFFeNTsq8 BQyBepAp0rwwh2Lfan6YJLfBGJlqbEzvMWuT3GliBBZFQGDJtqbTPCr7fhzFe0 tiGfig/ozBtJmW2kKtm2BoWEm2v6w9Zc6scZVuRb/1rz15DHrbbt7A4H5ExBYsqyzldvig/nr0avSW9W3TI TflZQybKyFGoiAoMgk3pj0mDfYWNkNnpKaTXeE7tZeidSNQ5KYEYCAsuM4IeftupV Wn3A7q/lffEGJUIMMaoZFVVCjMDgXVPKaUg0xgbs9UsvXtjmQH/H82g4pySwFgEBJaxMI7jIKlXpUiDavd3j5bmryg 6imJcdg6RjsFtnzMeqNZemP8i96XdrYJV9VmAYFl5rW7clV8eD4QXd7vqhXljngS4tjMi6YABOZKYMtZehtLDNQH7y5F74uNAIGcBQSWmdbOyu0RVI5GYOnVg16VmVaHk7dIYN0svWmZgeaj1c3el9oCj24dtaghuJQWCQgsM6nM6jfBH8X Br0qM6kAJ104ger2UQouw9ZIejn /sB6kvTY9J7VWJogel6sTr1wzcUFZykgsEy1WqonHx6KU37g/GnL0/Hn9xqrMtWKcLKFFkiD2/fGLw1VgGkuMTDsyaN4bLpzUnhZ6Ebj4jMQEFimVgnLH4zf2H4Yt3/ShFlp 1/scUto6fjUiuBEBAg0BKqVziO8lP3el/qtow0G7QovmhGBWQgILFNRX74ufkN7vNar8mh8SMYEcLqap8LvJARGFki3a1N4qXpf6qtTbxReose0/KXlAkYG9kICOxYQWHZMN obT8SHXvn3eHWyjpVsOzcXxZHoabERIJC3QBr3UhweLbykMS p58XTRnnXqdLNs4DAMtHaq7qbT0VguSxOk6YUf7ffxCYK7uAEJiSwUXiplguof47G00ZFBJezd tBnVBVOOzCCggsE636lbTGydXxm1d8qBVvjp6VZyZ6OgcnQGAKAoPwcmuc7OLaCV MP6dfTnpb1esSwWVpdQqFcgoCrRcQWCZWxSdiLaDym93Ddz4dYeXeiZ3KgQkQmJFANUXB4djjVu9gS0/ 1YJMmqCuOB6fAffPqJBOS6AVAgLLRKqxWhPob3HoWFW2jAG2R2uPMU/khA5KgMBMBQYT1X0hihG9qv2tvr5RNbPuyfhsiF4XaxrNtLqcfC4FBJaJVNvKH Ow74g9nizY90YfThNBdlACmQpUvS4puNTneKnP75LGudwV41yix8WTgplWomJlKCCwjL1S7rwxxtf vHvYzic9ETR2YAckMCcC1QR1EVw6h6PAvfldmitKpyeL1qLH5Wga72YjQGATAYFl7M1j5Uwccl/sL8Rgu/4kcWM/iwMSIDAvAtUM16nHJe39iekaA3SL1e5j0ca5zEutKuf0BQSWsZovx29Sne93D1l Kn5rig8gGwECBPoC1WfE8fiv/qR0acbr9DncG6SbxrmsPRj7I0Vx7AluBAicFxBYxtoaln8Vnz03xCFjMbWlxlL2Yz2RgxEgMNcCJ2Im3TL1uFxfu4whj0XviUej9brMdVUr/NgEBJaxUVbdvv/qHS5N1f2hsR3agQgQaKlA9URh6nFJSwH0bxeleZsak9F1IrikeV3MpNvShuCyRhAQWEZAGu0lbgeN5uRVBAhcKFD9wnM4/v6O2OuT0UVvbXHg/OurR6NTeIknjAzU1ZIWS0BgGVt9r5yMQ/Umjzobs9p6XHFstA5EYKEEBpPR1XtdkkBjAUbhZaGahYtd1 2IY1cCK6kbN23/jG7b1 /qUN5MgACBSqDquU3BpT6ni/CidSykgB6WsVV7P7AsMR2bqQMRINAVGMyku43wYgFGraddAr5c21WfroYAgdYLbCe8FDEhXeehGPOSHgR4qvU0LrDVAgJLq6vXxREg0G6BwWDduHVUX8OoSAswpq02gLdaPfqkJ43a3SLafHUCS5tr17URILBAAtUj0umWUSO8dGJ8XVn7rO8P1nXLaIEaRysuVWBpRTW6CAIECNQFBusY3bq l6X5pFF/SYC9D1ukVQvKXUBgyb2GlI8AAQK7Ehg8Jt2bdqE6WLpllJ5s3N87dKwgnSansxDjrqi9eaICAstEeR2cAAECuQgMBuumJQGuPl q5grS1UDdu2Klab0uuVSdclQCAouGQIAAgYUTWL4mPv5TcKlPTtdYiLHQ67Jw7SLvCxZY8q4fpSNAgMCEBarJ6WKvL8So12XC6A6/AwGBZQdo3kKAAIH2CQwG6qbw0l IUa9L yp6bq9IYJnbqlNwAgQITEpgO70uR2IhRhuByQsILJM3dgYCBAjMqcCovS7FyVht m6Lvs5pNc9JsQWWOakoxSRAgMBsBYb1uhQvRpkuq5VrNf4cTxgtxRNGNgLjFRBYxuvpaAQIEGi5wNBelzSvy1rsl3QvPs2mu/Zg7I8UxbEnWg7i8qYkMBeB5b777vtTeLxtSiZOQ4AAAQJbCLz0Ulk8 eTp4tFHXylOnTo3ePXFF3eK06fTnHTd7dpr9xc33XSguPzyPUzzFfjzLbfc8vZ8i9eLwbkXMJVPYJmHWlJGAgQWVeDZZ89VweU3v0kPFfW XOLX4fJ8biluuOGSKrhceulc/J68aFUpsCxajbteAgQILLbAYPXoO8Khv1J0fZxLTEZX3uNW0WK3kp1evai7UznvI0CAAIFNBKpBusfjBVf2XvRK/OyNcUl/U8baRXtiP/OYp4s0pFEEBJZRlLyGAAECBHYocEFwSTeKmt89sX7Rnh/Eo9GPF8WXf7vDE3lbywUElpZXsMsjQIBAHgJVcPlelKV/qygV60zqamn83bF4LDrdUrIRWCcgsGgQBAgQIDBFgZVDkVFi0cVOWnixf7sodbpEcCn730nR41J rSiO/mKKBXOqzAUElswrSPEIECDQXoFq1egUXKJXpdjfu84X4md/LaMH4jZRBJfbnm6vgSsbVUBgGVXK6wgQIEBgggInvhK9Kt KE8SELet6W56LW0RXTPDEDj0nAgLLnFSUYhIgQKD9AstviWuM0NL5eO9an48/P1QURz7X/mt3hVsJCCxbCfl3AgQIEJiywJ03RW/LSszX8o8Yx/L KZ/c6TIVEFgyrRjFIkCAAAECBM4LCCxaAwECBAgQIJC9gMCSfRUpIAECBAgQICCwaAMECBAgQIBA9gICS/ZVpIAECBAgQICAwKINECBAgAABAtkLCCzZV5ECEiBAgAABAgKLNkCAAAECBAhkLyCwZF9FCkiAAAECBAgILNoAAQIECBAgkL2AwJJ9FSkgAQIECBAgILBoAwQIECBAgED2AgJL9lWkgAQIECBAgIDAog0QIECAAAEC2QsILNlXkQISIECAAAECAos2QIAAAQIECGQvILBkX0UKSIAAAQIECAgs2gABAgQIECCQvcD/AeKNAbm64i74AAAAAElFTkSuQmCC'},{'name':'signDate','value':'2014-02-19'}]},{'model':'OptionalProductsModel','data':[{'name':'signDate','value':'2014-02-19'},{'name':'insuranceCode','value':'N'},{'name':'insuranceAgreedFlag','value':'N'}]},{'model':'summaryData','data':[]}],authfieldValue:{'MfgSerial':'20:50:00:00:00:00','BuildSerial':'123213123213'}}";

		postRequestBody = "{'accountApplicationData':[{'model':'queueModel','data':[{'name':'queueTransactionID','value':'WICI_45_1392845551934-0'}]},{'model':'loginScreen','data':[{'name':'employerID','value':'e'},{'name':'locationFieldID','value':'345'},{'name':'agentID','value':'45'}]},{'model':'chooseProductModel','data':[{'name':'productCard','value':'OMC'},{'name':'agencyProgram','value':'4022'},{'name':'agencyPromoCode','value':'4022'},{'name':'province','value':'MB'}]},{'model':'personalData','data':[]},{'model':'personalData2_Address','data':[]},{'model':'financialData','data':[{'name':'cardVISAMCAMEX','value':'N'},{'name':'cardBankLoan','value':'N'},{'name':'cardStoreCard','value':'N'},{'name':'cardChequingAcct','value':'N'},{'name':'cardGasCard','value':'N'},{'name':'cardSavingsAcct','value':'N'}]},{'model':'supCardRequestData','data':[{'name':'cardYesNo','value':'N'},{'name':'sameAddressYesNo','value':'Y'}]},{'model':'signatureModel','data':[{'name':'userAcceptAgreement','value':'Y'},{'name':'userSingnature','value':'1'},{'name':'signDate','value':'2014-02-19'}]},{'model':'OptionalProductsModel','data':[{'name':'signDate','value':'2014-02-19'},{'name':'insuranceCode','value':'N'},{'name':'insuranceAgreedFlag','value':'N'}]},{'model':'summaryData','data':[]}],authfieldValue:{'MfgSerial':'20:50:00:00:00:00','BuildSerial':'123213123213'}}";


		//{"accountApplicationData":[{"model":"queueModel","data":[{"name":"queueTransactionID","value":"WICI_45_1392916919043-0"}]},{"model":"loginScreen","data":[{"name":"employerID","value":"e"},{"name":"locationFieldID","value":"300"},{"name":"agentID","value":"45"}]},{"model":"chooseProductModel","data":[{"name":"productCard","value":"OMC"},{"name":"agencyProgram","value":"5200"},{"name":"agencyPromoCode","value":"5200"},{"name":"province","value":"QC"}]},{"model":"personalData","data":[{"name":"placeofissue","value":"AB"},{"name":"idtype","value":"BI"},{"name":"idnumbers","value":"23423423423423423423"},{"name":"title","value":"MR"},{"name":"firstName","value":"ASIF"},{"name":"initial","value":"M"},{"name":"lastName","value":"ALLI"},{"name":"birthDate","value":"1975-03-08"},{"name":"email","value":"asifalli@rogers.com"},{"name":"homePhone","value":"2979974540"},{"name":"correspondence","value":"E"}]},{"model":"personalData2_Address","data":[{"name":"postalcode","value":"L5M0M2"},{"name":"streetnumber","value":"3215"},{"name":"addressline1","value":"THOMAS ST"},{"name":"addressline2","value":"UNIT 6"},{"name":"city","value":"MISSISSAUGA"},{"name":"province","value":"ON"},{"name":"house","value":"O"},{"name":"housingpayment","value":"1232"},{"name":"years","value":"4"},{"name":"months","value":"4"}]},{"model":"financialData","data":[{"name":"cardVISAMCAMEX","value":"N"},{"name":"cardBankLoan","value":"N"},{"name":"cardStoreCard","value":"N"},{"name":"cardChequingAcct","value":"N"},{"name":"cardGasCard","value":"N"},{"name":"cardSavingsAcct","value":"N"},{"name":"employmentType","value":"R"},{"name":"grossIncome","value":"123123"},{"name":"sin","value":"213123123"}]},{"model":"supCardRequestData","data":[{"name":"cardYesNo","value":"N"},{"name":"sameAddressYesNo","value":"Y"}]},{"model":"signatureModel","data":[{"name":"userAcceptAgreement","value":"Y"},{"name":"userSingnature","value":"data:image/png;base64,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"},{"name":"signDate","value":"2014-02-20"}]},{"model":"OptionalProductsModel","data":[{"name":"signDate","value":"2014-02-20"},{"name":"insuranceCode","value":"N"},{"name":"insuranceAgreedFlag","value":"N"}]},{"model":"summaryData","data":[]}],"authfieldValue":{"MfgSerial":"20:50:00:00:00:00","BuildSerial":"123213123213"}}
		String realPostRequestBody = "{'accountApplicationData':[{'model':'queueModel','data':[{'name':'queueTransactionID','value':'WICI_45_1392916919043-0'}]},{'model':'loginScreen','data':[{'name':'employerID','value':'e'},{'name':'locationFieldID','value':'300'},{'name':'agentID','value':'45'}]},{'model':'chooseProductModel','data':[{'name':'productCard','value':'OMC'},{'name':'agencyProgram','value':'5200'},{'name':'agencyPromoCode','value':'5200'},{'name':'province','value':'QC'}]},{'model':'personalData','data':[{'name':'placeofissue','value':'AB'},{'name':'idtype','value':'BI'},{'name':'idnumbers','value':'23423423423423423423'},{'name':'title','value':'MR'},{'name':'firstName','value':'ASIF'},{'name':'initial','value':'M'},{'name':'lastName','value':'ALLI'},{'name':'birthDate','value':'1975-03-08'},{'name':'email','value':'asifalli@rogers.com'},{'name':'homePhone','value':'2979974540'},{'name':'correspondence','value':'E'}]},{'model':'personalData2_Address','data':[{'name':'postalcode','value':'L5M0M2'},{'name':'streetnumber','value':'3215'},{'name':'addressline1','value':'THOMAS ST'},{'name':'addressline2','value':'UNIT 6'},{'name':'city','value':'MISSISSAUGA'},{'name':'province','value':'ON'},{'name':'house','value':'O'},{'name':'housingpayment','value':'1232'},{'name':'years','value':'4'},{'name':'months','value':'4'}]},{'model':'financialData','data':[{'name':'cardVISAMCAMEX','value':'N'},{'name':'cardBankLoan','value':'N'},{'name':'cardStoreCard','value':'N'},{'name':'cardChequingAcct','value':'N'},{'name':'cardGasCard','value':'N'},{'name':'cardSavingsAcct','value':'N'},{'name':'employmentType','value':'R'},{'name':'grossIncome','value':'123123'},{'name':'sin','value':'213123123'}]},{'model':'supCardRequestData','data':[{'name':'cardYesNo','value':'N'},{'name':'sameAddressYesNo','value':'Y'}]},{'model':'signatureModel','data':[{'name':'userAcceptAgreement','value':'Y'},{'name':'userSingnature','value':'data:image/png;base64,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'},{'name':'signDate','value':'2014-02-20'}]},{'model':'OptionalProductsModel','data':[{'name':'signDate','value':'2014-02-20'},{'name':'insuranceCode','value':'N'},{'name':'insuranceAgreedFlag','value':'N'}]},{'model':'summaryData','data':[]}],'authfieldValue':{'MfgSerial':'20:50:00:00:00:00','BuildSerial':'123213123213'}}";

		AccountApplicationPostRequest postRequest = null;

		Gson gson = new Gson();
		//String json = argRequestBody.toString();
		//Type collectionType = new TypeToken<Collection<BaseModel>>(){}.getType();
		Type compoundType = new TypeToken<AccountApplicationPostRequest>(){}.getType();

		postRequest = gson.fromJson(realPostRequestBody, compoundType);

		Assert.assertTrue(postRequest!=null);

		Assert.assertEquals("",postRequest.getAuthfieldValue().getMfgSerial());

		//JsonParserFactory factory=JsonParserFactory.getInstance();
		//JSONParser parser=factory.newJsonParser();
		//Map jsonData=parser.parseJson(postRequestBody);

		//HashMap value=(HashMap)jsonData.get("authfieldValue");

		//Assert.assertEquals("asdfadsf",value);

		//AccountApplicationPostRequest aaPR = null;
		//List<BaseModel>		cardData = null;

		//Gson gson = new GsonBuilder().setPrettyPrinting().create();
		//Gson gson = new GsonBuilder().registerTypeAdapter(AccountApplicationPostRequest.class,aaPR).create();
		//aaPR = gson.fromJson(postRequestBody, AccountApplicationPostRequest.class);

		//Assert.assertNotNull(aaPR);

		//Assert.assertEquals("asdfasdf",aaPR.getAuthfieldValue().getMfgSerial());

		//GsonBuilder gsonBuilder = new GsonBuilder().registerTypeAdapter(AccountApplicationPostRequest.class, aaPR);
		//gsonBuilder.create();

		//aaPR = gsonBuilder.fromJson(postRequestBody,)

		//JsonParser jsonParser = new JsonParser();
		//JsonObject jo = (JsonObject)jsonParser.parse(postRequestBody);
		//Assert.assertNotNull(jo);

		//Assert.assertEquals("asdfasdf",jo.get("authfieldValue"));

		//Assert.assertTrue(jo.get("accountApplicationData").getAsString());

		//AccountApplicationPostRequest req = gson.fromJson(postRequestBody, AccountApplicationPostRequest.class);
		//AuthfieldValue av = req.getAuthfieldValue();

		//List<BaseModel> lists = req.getAccountApplicationData();

		//Assert.assertTrue(av!=null);
		//Assert.assertTrue(lists!=null);

		//Assert.assertEquals("asdfasdf",av.getMfgSerial());
		//Assert.assertEquals("asdfasdf",av.getBuildSerial());

	}

}
