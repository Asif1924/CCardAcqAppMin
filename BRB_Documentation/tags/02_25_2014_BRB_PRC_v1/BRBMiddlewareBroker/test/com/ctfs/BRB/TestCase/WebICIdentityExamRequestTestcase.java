package com.ctfs.BRB.TestCase;

import org.junit.Before;
import org.junit.Test;

import com.ctfs.BRB.Helper.IdentityExamHelper;
import com.ctfs.BRB.Helper.Factory.ValidatorException;
import com.ctfs.BRB.Resources.ResourceHelper;

public class WebICIdentityExamRequestTestcase
{
	private IdentityExamHelper helper;
	private TestDataHelper dataHelper;

	@Before
	public void setUp()
	{
		helper = new IdentityExamHelper(null);
		dataHelper = new TestDataHelper("dataForTests/WebICIdentityExamRequest");
	}

	// @Test
	public void test_for_validator_functionality() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			// "WebContent/WEB-INF/wsdl/Validation_WebICIdentityExamination.xsd"
			helper.validateUserRequest(request, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_validator_exception_for_wrong_field_channel() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(TestDataHelper.getNodeByTag("channel", request), "<channel></channel>");
			helper.validateUserRequest(newRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_validator_exception_for_wrong_field_language() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(TestDataHelper.getNodeByTag("language", request), "<language>er</language>");
			helper.validateUserRequest(newRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_validator_exception_for_wrong_field_firstName() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(TestDataHelper.getNodeByTag("firstName", request), "<firstName>name_in_wrong_format</firstName>");
			helper.validateUserRequest(newRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_validator_exception_for_wrong_field_middleName() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(TestDataHelper.getNodeByTag("middleName", request), "<middleName>middle_name_in_wrong_format</middleName>");
			helper.validateUserRequest(newRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_validator_exception_for_wrong_field_lastName() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(TestDataHelper.getNodeByTag("lastName", request), "<lastName>lastname_name_in_wrong_format</lastName>");
			helper.validateUserRequest(newRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_validator_exception_for_wrong_field_driversLicense() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(TestDataHelper.getNodeByTag("driversLicense", request), "<driversLicense>AAAA</driversLicense>");
			helper.validateUserRequest(newRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_validator_exception_for_wrong_field_driversLicenseExpirationDate() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(TestDataHelper.getNodeByTag("driversLicenseExpirationDate", request), "<driversLicenseExpirationDate>AAAA</>");
			helper.validateUserRequest(newRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_validator_exception_for_wrong_field_phoneNumber() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(TestDataHelper.getNodeByTag("phoneNumber", request), "<phoneNumber>AAAA</phoneNumber>");
			helper.validateUserRequest(newRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_validator_exception_for_wrong_field_dateOfBirth() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(TestDataHelper.getNodeByTag("dateOfBirth", request), "<dateOfBirth>06-07-1800<dateOfBirth>");
			helper.validateUserRequest(newRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_validator_exception_for_wrong_field_addressLine1() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(TestDataHelper.getNodeByTag("addressLine1", request), "<addressLine1></addressLine1>");
			helper.validateUserRequest(newRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}

	@Test
	public void test_for_validator_correct_field_addressLine1() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(TestDataHelper.getNodeByTag("addressLine1", request), "<addressLine1>SAD 21 ,. '-</addressLine1>");
			helper.validateUserRequest(newRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_validator_exception_for_wrong_field_addressLine2() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(TestDataHelper.getNodeByTag("addressLine2", request), "<addressLine2>AAAAAAAAAAaaaaaaaaaaAAAAAAAAAAaaaaaaaaaaA<addressLine2>");
			helper.validateUserRequest(newRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}

	@Test
	public void test_for_validator_correct_field_addressLine2() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(TestDataHelper.getNodeByTag("addressLine2", request), "<addressLine2>SAD 21 ,. '-</addressLine2>");
			helper.validateUserRequest(newRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_validator_exception_for_wrong_field_addressLine3() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(TestDataHelper.getNodeByTag("addressLine3", request), "<addressLine3>A</addressLine3>");
			helper.validateUserRequest(newRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_validator_exception_for_wrong_field_city() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(TestDataHelper.getNodeByTag("city", request), "<city>a</city>");
			helper.validateUserRequest(newRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}
	
	@Test
	public void test_for_validator_correct_city() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(TestDataHelper.getNodeByTag("city", request), "<city>SAD 21 ,. '-</city>");
			helper.validateUserRequest(newRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_validator_exception_for_wrong_field_province() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(TestDataHelper.getNodeByTag("province", request), "<province>a</province>");
			helper.validateUserRequest(newRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_validator_exception_for_wrong_field_postalCode() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(TestDataHelper.getNodeByTag("postalCode", request), "<postalCode>a</postalCode>");
			helper.validateUserRequest(newRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}
}
