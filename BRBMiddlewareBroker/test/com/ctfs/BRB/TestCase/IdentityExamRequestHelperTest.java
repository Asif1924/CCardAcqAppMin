package com.ctfs.BRB.TestCase;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.junit.Assert;
import org.junit.Test;

import com.ctfs.BRB.Helper.BRBServletMediator;
import com.ctfs.BRB.Helper.IdentityExamRequestHelper;
import com.ctfs.BRB.exceptions.XSSAttackException;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;

public class IdentityExamRequestHelperTest
{
	@Test
	public void test_that_instantiation_requires_a_servlet_mediator()
	{
		BRBServletMediator mockMediator = mock(BRBServletMediator.class);

		IdentityExamRequestHelper		systemUnderTest = new IdentityExamRequestHelper( mockMediator);
		
		Assert.assertTrue(systemUnderTest.getMediator()!=null);
	}
	
	@Test 
	public void test_that_servlet_mediator_buffer_is_not_null(){
		String test_value = "value";
		BRBServletMediator mockMediator = mock(BRBServletMediator.class);
		when(mockMediator.getBrbTransactionId()).thenReturn(test_value);
		Assert.assertTrue(test_value.equalsIgnoreCase(mockMediator.getBrbTransactionId()));
	}
	@Test (expected = XSSAttackException.class)
	public void test_sanitize_working_with_post_method() throws XSSAttackException, IOException{
		HttpServletRequest request = mock(HttpServletRequest.class);
		HttpServletResponse response = mock(HttpServletResponse.class);
		when(request.getMethod()).thenReturn("POST");
		String XssAtack = "<script>alert(\"Hi\")</script>";
		StringReader reader = new StringReader("{\"EventId\":"+XssAtack +",\"EventType\":\"DeviceEnterpriseWipeRequested\",\"DeviceId\":280,\"DeviceFriendlyName\":\"WIC-41062e0d324290d9\",\"EnrollmentEmailAddress\":\"michael.kirton@cantire.com\",\"EnrollmentUserName\":\"WIC\",\"EventTime\":\"\\/Date(1391182403986)\\/\",\"EnrollmentStatus\":\"EnterpriseWipePending\",\"CompromisedStatus\":\"\",\"CompromisedTimeStamp\":\"\\/Date(1391182409025)\\/\",\"ComplianceStatus\":\"Compliant\",\"PhoneNumber\":\"\",\"Udid\":\"System.Byte[]\",\"SerialNumber\":\"41062e0d324290d9\",\"MACAddress\":\"System.Byte[]\"}");
		when(request.getReader()).thenReturn(new BufferedReader(reader));
		BRBServletMediator mockMediator = new BRBServletMediator(request,response);
		mockMediator.IntializeMediator();
	}
	@Test (expected = XSSAttackException.class)
	public void test_sanitize_working_get_method() throws XSSAttackException, IOException{
		HttpServletRequest request = mock(HttpServletRequest.class);
		HttpServletResponse response = mock(HttpServletResponse.class);
		when(request.getMethod()).thenReturn("GET");
		List<String> list = new ArrayList<String>();
		String requestKey = "test_key";
		list.add(requestKey);
		String XssAtack = "<script>alert(\"Hi\")</script>";
		when(request.getParameterValues(requestKey)).thenReturn(new String[]{XssAtack});
		 final Iterator<String> iterator = list.iterator();
		when(request.getParameterNames()).thenReturn(new Enumeration<String>(){

			@Override
			public boolean hasMoreElements()
			{
				return iterator.hasNext();
			}

			@Override
			public String nextElement()
			{
				return iterator.next();
			}
			
		});
		StringReader reader = new StringReader("{\"EventId\":<script>alert()</script>,\"EventType\":\"DeviceEnterpriseWipeRequested\",\"DeviceId\":280,\"DeviceFriendlyName\":\"WIC-41062e0d324290d9\",\"EnrollmentEmailAddress\":\"michael.kirton@cantire.com\",\"EnrollmentUserName\":\"WIC\",\"EventTime\":\"\\/Date(1391182403986)\\/\",\"EnrollmentStatus\":\"EnterpriseWipePending\",\"CompromisedStatus\":\"\",\"CompromisedTimeStamp\":\"\\/Date(1391182409025)\\/\",\"ComplianceStatus\":\"Compliant\",\"PhoneNumber\":\"\",\"Udid\":\"System.Byte[]\",\"SerialNumber\":\"41062e0d324290d9\",\"MACAddress\":\"System.Byte[]\"}");
		when(request.getReader()).thenReturn(new BufferedReader(reader));
		BRBServletMediator mockMediator = new BRBServletMediator(request,response);
		mockMediator.IntializeMediator();
	}

	@Test
	public void test_that_it_gets_CreditCardApplicationData()
	{
		StringBuffer		identityExamPostRequestData = new StringBuffer();
		identityExamPostRequestData.append("{\"accountApplicationData\":[{\"model\":\"overview\",\"data\":[{\"name\":\"provinces\",\"value\":\"NS\"}]},{\"model\":\"personalInformation\",\"data\":[{\"name\":\"title\",\"value\":\"MR\"},{\"name\":\"loyaltyMembershipNumber\",\"value\":\"6365742222222222\"},{\"name\":\"firstName\",\"value\":\"BREDITU\"},{\"name\":\"lastName\",\"value\":\"PERIWINKLE\"},{\"name\":\"birthDate\",\"value\":\"1970-4-17\"},{\"name\":\"email\",\"value\":\"ASIFALLI@ROGERS.COM\"},{\"name\":\"receiveEmail\",\"value\":\"Y\"},{\"name\":\"correspondence\",\"value\":\"E\"},{\"name\":\"primaryPhone\",\"value\":\"4039674216\"},{\"name\":\"streetnumber\",\"value\":\"1\"},{\"name\":\"addressline1\",\"value\":\"LEACOCK COURT\"},{\"name\":\"city\",\"value\":\"DARTMOUTH\"},{\"name\":\"province\",\"value\":\"NS\"},{\"name\":\"postalcode\",\"value\":\"B2W4J4\"},{\"name\":\"house\",\"value\":\"O\"},{\"name\":\"housingpayment\",\"value\":\"213\"},{\"name\":\"sinceYears\",\"value\":\"2009\"},{\"name\":\"sinceMonths\",\"value\":\"4\"},{\"name\":\"isPrevAddressExist\",\"value\":false},{\"name\":\"employmentType\",\"value\":\"F\"},{\"name\":\"employerName\",\"value\":\"CTFS\"},{\"name\":\"employerCity\",\"value\":\"OAKVILLE\"},{\"name\":\"jobTitle\",\"value\":\"MA\"},{\"name\":\"jobDescription\",\"value\":\"MANAGER\"},{\"name\":\"howLongYears\",\"value\":\"2009\"},{\"name\":\"howLongMonthes\",\"value\":\"11\"},{\"name\":\"grossIncome\",\"value\":\"123213\"},{\"name\":\"cardVISAMCAMEX\",\"value\":\"N\"},{\"name\":\"cardBankLoan\",\"value\":\"N\"},{\"name\":\"cardStoreCard\",\"value\":\"N\"},{\"name\":\"cardChequingAcct\",\"value\":\"N\"},{\"name\":\"cardGasCard\",\"value\":\"N\"},{\"name\":\"cardSavingsAcct\",\"value\":\"N\"},{\"name\":\"isAnyBankingProducts\",\"value\":false}]},{\"model\":\"additionalInformation\",\"data\":[{\"name\":\"suplementaryYesNo\",\"value\":false},{\"name\":\"sameAddressArea\",\"value\":\"Y\"},{\"name\":\"optionalInsurance_CP\",\"value\":false},{\"name\":\"optionalInsurance_IW\",\"value\":false},{\"name\":\"optionalInsurance_PA\",\"value\":false}]},{\"model\":\"confirmation\",\"data\":[{\"name\":\"applicationAuthorizationYesNo\",\"value\":true},{\"name\":\"updateCTProfileYesNo\",\"value\":true}]}],");
		identityExamPostRequestData.append("\"language\":\"en\",\"firstName\":\"BREDITU\",\"middleName\":\"\",\"lastName\":\"PERIWINKLE\",\"phoneNumber\":\"4039674216\",\"dateOfBirth\":\"4/17/1970\",\"addressLine1\":\"1 LEACOCK COURT\",\"city\":\"DARTMOUTH\",\"province\":\"NS\",\"postalCode\":\"B2W4J4\",\"transactionId\":\"fa044bbc700b4ed4a4cc485b0a4748f51393187984571\",\"brbTransactionId\":\"fa044bbc700b4ed4a4cc485b0a4748f51393187984571\",\"TrackingScreenID\":5}");

		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		
		JsonElement jelem = gson.fromJson(identityExamPostRequestData.toString(),JsonElement.class);
		
		BRBServletMediator mockMediator = mock(BRBServletMediator.class);
		when(mockMediator.getPostRequestBody()).thenReturn(identityExamPostRequestData);
		when(mockMediator.getPostRequestBodyAsJson()).thenReturn(jelem);
		

		IdentityExamRequestHelper		systemUnderTest = new IdentityExamRequestHelper(mockMediator);
				
		Assert.assertEquals(jelem, mockMediator.getPostRequestBodyAsJson());
		Assert.assertEquals("NS",systemUnderTest.getCreditCardApplicationData().getModel("overview").get("provinces"));
	}
	
	@Test
	public void test_that_it_gets_IdentityExamPostRequest()
	{
		StringBuffer		identityExamPostRequestData = new StringBuffer();
		identityExamPostRequestData.append("{\"accountApplicationData\":[{\"model\":\"overview\",\"data\":[{\"name\":\"provinces\",\"value\":\"NS\"}]},{\"model\":\"personalInformation\",\"data\":[{\"name\":\"title\",\"value\":\"MR\"},{\"name\":\"loyaltyMembershipNumber\",\"value\":\"6365742222222222\"},{\"name\":\"firstName\",\"value\":\"BREDITU\"},{\"name\":\"lastName\",\"value\":\"PERIWINKLE\"},{\"name\":\"birthDate\",\"value\":\"1970-4-17\"},{\"name\":\"email\",\"value\":\"ASIFALLI@ROGERS.COM\"},{\"name\":\"receiveEmail\",\"value\":\"Y\"},{\"name\":\"correspondence\",\"value\":\"E\"},{\"name\":\"primaryPhone\",\"value\":\"4039674216\"},{\"name\":\"streetnumber\",\"value\":\"1\"},{\"name\":\"addressline1\",\"value\":\"LEACOCK COURT\"},{\"name\":\"city\",\"value\":\"DARTMOUTH\"},{\"name\":\"province\",\"value\":\"NS\"},{\"name\":\"postalcode\",\"value\":\"B2W4J4\"},{\"name\":\"house\",\"value\":\"O\"},{\"name\":\"housingpayment\",\"value\":\"213\"},{\"name\":\"sinceYears\",\"value\":\"2009\"},{\"name\":\"sinceMonths\",\"value\":\"4\"},{\"name\":\"isPrevAddressExist\",\"value\":false},{\"name\":\"employmentType\",\"value\":\"F\"},{\"name\":\"employerName\",\"value\":\"CTFS\"},{\"name\":\"employerCity\",\"value\":\"OAKVILLE\"},{\"name\":\"jobTitle\",\"value\":\"MA\"},{\"name\":\"jobDescription\",\"value\":\"MANAGER\"},{\"name\":\"howLongYears\",\"value\":\"2009\"},{\"name\":\"howLongMonthes\",\"value\":\"11\"},{\"name\":\"grossIncome\",\"value\":\"123213\"},{\"name\":\"cardVISAMCAMEX\",\"value\":\"N\"},{\"name\":\"cardBankLoan\",\"value\":\"N\"},{\"name\":\"cardStoreCard\",\"value\":\"N\"},{\"name\":\"cardChequingAcct\",\"value\":\"N\"},{\"name\":\"cardGasCard\",\"value\":\"N\"},{\"name\":\"cardSavingsAcct\",\"value\":\"N\"},{\"name\":\"isAnyBankingProducts\",\"value\":false}]},{\"model\":\"additionalInformation\",\"data\":[{\"name\":\"suplementaryYesNo\",\"value\":false},{\"name\":\"sameAddressArea\",\"value\":\"Y\"},{\"name\":\"optionalInsurance_CP\",\"value\":false},{\"name\":\"optionalInsurance_IW\",\"value\":false},{\"name\":\"optionalInsurance_PA\",\"value\":false}]},{\"model\":\"confirmation\",\"data\":[{\"name\":\"applicationAuthorizationYesNo\",\"value\":true},{\"name\":\"updateCTProfileYesNo\",\"value\":true}]}],");
		identityExamPostRequestData.append("\"language\":\"en\",\"firstName\":\"BREDITU\",\"middleName\":\"\",\"lastName\":\"PERIWINKLE\",\"phoneNumber\":\"4039674216\",\"dateOfBirth\":\"4/17/1970\",\"addressLine1\":\"1 LEACOCK COURT\",\"city\":\"DARTMOUTH\",\"province\":\"NS\",\"postalCode\":\"B2W4J4\",\"transactionId\":\"fa044bbc700b4ed4a4cc485b0a4748f51393187984571\",\"brbTransactionId\":\"fa044bbc700b4ed4a4cc485b0a4748f51393187984571\",\"TrackingScreenID\":5}");

		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		
		JsonElement jelem = gson.fromJson(identityExamPostRequestData.toString(),JsonElement.class);
		
		BRBServletMediator mockMediator = mock(BRBServletMediator.class);
		when(mockMediator.getPostRequestBody()).thenReturn(identityExamPostRequestData);
		when(mockMediator.getPostRequestBodyAsJson()).thenReturn(jelem);
		

		IdentityExamRequestHelper		systemUnderTest = new IdentityExamRequestHelper(mockMediator);
				
		Assert.assertEquals("en",systemUnderTest.getIdentityExamPostRequest().getLanguage());
	}
}
