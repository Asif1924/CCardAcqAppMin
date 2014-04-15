package com.ctfs.BRB.TestCase.AccountApplicationTests;

import org.junit.Before;
import org.junit.Test;

import com.ctfs.BRB.Helper.AccountApplicationHelper;
import com.ctfs.BRB.Helper.Factory.ValidatorException;
import com.ctfs.BRB.Resources.ResourceHelper;
import com.ctfs.BRB.TestCase.TestDataHelper;

public class AccountApplicationXSDValidator_PersonalInfoTests
{
	private AccountApplicationHelper helper;
	private TestDataHelper dataHelper;
	private String schemaLocation;

	@Before
	public void setUp()
	{
		helper = new AccountApplicationHelper();
		dataHelper = new TestDataHelper("dataForTests/AccountApplicationDataForTest/success");
		schemaLocation = ResourceHelper.getInstance().getValidationAccountApplicationPath();
	}

	@Test
	public void test_for_field_loyaltyMembershipNumber_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
			assert (request.contains("<loyaltyMembershipNumber>"));
		}
	}

	@Test
	public void test_for_field_loyaltyMembershipNumber_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("loyaltyMembershipNumber", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_field_loyaltyMembershipNumber_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("loyaltyMembershipNumber", request), "<loyaltyMembershipNumber>444e889426A66700</loyaltyMembershipNumber>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_field_loyaltyMembershipNumber_length() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("loyaltyMembershipNumber", request), "<loyaltyMembershipNumber>636574111111111100</loyaltyMembershipNumber>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_field_loyaltyMembershipNumber_should_be_numeric() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("loyaltyMembershipNumber", request), "<loyaltyMembershipNumber>QAWSEDRFTGYHUJIK</loyaltyMembershipNumber>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_firstName_can_single_quote() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("firstName", request), "<firstName>BRED'ITU'</firstName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_firstName_can_contain_numbers() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("firstName", request), "<firstName>BREDITU1234567890</firstName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_firstName_can_contain_hyphen() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("firstName", request), "<firstName>BREDITU-</firstName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_firstName_can_contain_space() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("firstName", request), "<firstName>B R E D I T U </firstName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_firstName_can_contain_French() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("firstName", request), "<firstName>\\u017F\\u0180\\u0181</firstName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_firstName_cant_contain_specific_char_1() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("firstName", request), "<firstName>BREDITU&</firstName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_firstName_cant_contain_specific_char_2() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("firstName", request), "<firstName>BREDITU_</firstName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_firstName_cant_contain_specific_char_3() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("firstName", request), "<firstName>BREDITU/</firstName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_firstName_cant_contain_specific_char_4() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("firstName", request), "<firstName>BREDITU*</firstName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_firstName_cant_be_empty() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("firstName", request), "<firstName></firstName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_firstName_cant_be_ommited() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("firstName", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_lastName_can_single_quote() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("lastName", request), "<lastName>BRED'ITU'</lastName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_lastName_can_contain_numbers() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("lastName", request), "<lastName>BREDITU1234567890</lastName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_lastName_can_contain_hyphen() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();

			String newRequest = request.replace(getNodeByTag("lastName", request), "<lastName>BREDITU-</lastName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_lastName_can_contain_space() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("lastName", request), "<lastName>B R E D I T U </lastName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_lastName_can_contain_French() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("lastName", request), "<lastName>\\u017F\\u0180\\u0181</lastName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_lastName_cant_contain_specific_char_1() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("lastName", request), "<lastName>BREDITU&</lastName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_lastName_cant_contain_specific_char_2() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("lastName", request), "<lastName>BREDITU_</lastName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_lastName_cant_contain_specific_char_3() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("lastName", request), "<lastName>BREDITU/</lastName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_lastName_cant_contain_specific_char_4() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("lastName", request), "<lastName>BREDITU*</lastName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_lastName_cant_be_empty() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("lastName", request), "<lastName></lastName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_lastName_cant_be_ommited() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("lastName", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	// middle name

	@Test
	public void test_for_dateOfBirth_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("dateOfBirth", request), "<dateOfBirth>1980-11-07</dateOfBirth>");
			helper.validateUserRequest(newRequest, schemaLocation);
			assert (newRequest.contains("<dateOfBirth>"));
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_dateOfBirth_incorrect_1() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("dateOfBirth", request), "<dateOfBirth>3980-05-07</dateOfBirth>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_dateOfBirth_incorrect_2() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("dateOfBirth", request), "<dateOfBirth>1980-00-07</dateOfBirth>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_dateOfBirth_incorrect_3() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("dateOfBirth", request), "<dateOfBirth>1980-00-32</dateOfBirth>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_dateOfBirth_incorrect_4() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("dateOfBirth", request), "<dateOfBirth>1990-11-00</dateOfBirth>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}
	@Test(expected = ValidatorException.class)
	public void test_for_dateOfBirth_incorrect_5() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("dateOfBirth", request), "<dateOfBirth>1980-13-17</dateOfBirth>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_sin_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("sin", request), "<sin>123456789</sin>");
			helper.validateUserRequest(newRequest, schemaLocation);
			assert (newRequest.contains("<sin>"));
		}
	}

	@Test
	public void test_for_sin_can_be_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("sin", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_sin_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("sin", request), "<sin>QWERTYUIO</sin>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_sin_incorrect_length() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("sin", request), "<sin>12345678</sin>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_sin_incorrect_length_2() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("sin", request), "<sin>1234567890</sin>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_idType_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("idType", request), "<idType>DNB</idType>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_idType_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("idType", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_idType_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("idType", request), "<idType>DR</idType>");
			helper.validateUserRequest(newRequest, schemaLocation);
			assert (newRequest.contains("<idType>"));
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_idNumber_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("idNumber", request), "<idNumber>DNB</idNumber>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_idNumber_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("idNumber", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_idNumber_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
			assert (request.contains("<idNumber>"));
		}
	}

	@Test
	public void test_for_placeOfIssue_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("placeOfIssue", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_placeOfIssue_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("placeOfIssue", request), "<placeOfIssue>OK</placeOfIssue>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_preferedLanguage_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("preferedLanguage", request), "<preferedLanguage>R</preferedLanguage>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_preferedLanguage_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("preferedLanguage", request), "<preferedLanguage>E</preferedLanguage>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("preferedLanguage", request), "<preferedLanguage>F</preferedLanguage>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_applicantGender_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("applicantGender", request), "<applicantGender>R</applicantGender>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_applicantGender_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("applicantGender", request), "<applicantGender>M</applicantGender>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("applicantGender", request), "<applicantGender>F</applicantGender>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_applicantGender_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("applicantGender", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentAddressType_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentAddressType", request), "<currentAddressType>Z</currentAddressType>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_currentAddressType_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentAddressType", request), "<currentAddressType>O</currentAddressType>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("currentAddressType", request), "<currentAddressType>R</currentAddressType>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("currentAddressType", request), "<currentAddressType>P</currentAddressType>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("currentAddressType", request), "<currentAddressType>M</currentAddressType>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentAddressType_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentAddressType", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentAddressLine1_incorrect_length() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentAddressLine1", request), "<currentAddressLine1>DFOIJASLDKFJ SLDKASFJASKLDFJASKDJF ASKDJSA DF SDAKFJ DSF F</currentAddressLine1>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_currentAddressLine1_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentAddressLine1", request), "<currentAddressLine1>234-1 LEACOCK COURT</currentAddressLine1>");
			helper.validateUserRequest(newRequest, schemaLocation);
			assert (newRequest.contains("<currentAddressLine1>"));
		}
	}

	@Test
	public void test_for_currentAddressLine1_containing_comma_period_and_hyphen() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentAddressLine1", request), "<currentAddressLine1>6-3215 LEACOCK COURT AV., UNIT 6</currentAddressLine1>");
			helper.validateUserRequest(newRequest, schemaLocation);
			//assert (newRequest.contains("<currentAddressLine1>"));
		}
	}	
		
	@Test(expected = ValidatorException.class)
	public void test_for_currentAddressLine1_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentAddressLine1", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentAddressLine2_incorrect_length() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{

			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<currentAddressLine2>"))
			{
				newRequest = request.replace(getNodeByTag("currentAddressLine2", request), "<currentAddressLine2>12-1 UQWEOPRUIQWPEOJ WEIOF JKSDFJKASHDFL KASDH FSAD FASS DF L</currentAddressLine2>");
			}
			else
			{
				newRequest = request.replace("</currentAddressLine1>",
						"</currentAddressLine1><currentAddressLine2>12-1 UQWEOPRUIQWPEOJ WEIOF JKSDFJKASHDFL KASDH FSAD FASS DF L</currentAddressLine2></currentAddressLine2>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_currentAddressLine2_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<currentAddressLine2>"))
			{
				newRequest = request.replace(getNodeByTag("currentAddressLine2", request), "<currentAddressLine2>234-1 LEACOCK COURT</currentAddressLine2>");
			}
			else
			{
				newRequest = request.replace("</currentAddressLine1>", "</currentAddressLine1><currentAddressLine2>234-1 LEACOCK COURT</currentAddressLine2>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
			assert (newRequest.contains("<currentAddressLine2>"));
		}
	}

	@Test
	public void test_for_currentAddressLine2_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentAddressLine2", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentCity_incorrect_length() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentCity", request), "<currentCity>DFOIJASLDKFJ SLDKASFJASKLDFJASKDJF ASKDJSA DF SDAKFJ DSF FASDFASDF</CURRENTCITY>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_currentCity_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentCity", request), "<currentCity> SAD 21 ,. ' -\\u017F</currentCity>");
			helper.validateUserRequest(newRequest, schemaLocation);
			assert (newRequest.contains("<currentCity>"));
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentCity_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentCity", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentProvince_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentProvince", request), "<currentProvince>OK</currentProvince>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_currentProvince_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentProvince", request), "<currentProvince>NS</currentProvince>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("currentProvince", request), "<currentProvince>AB</currentProvince>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("currentProvince", request), "<currentProvince>BC</currentProvince>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("currentProvince", request), "<currentProvince>MB</currentProvince>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("currentProvince", request), "<currentProvince>NB</currentProvince>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("currentProvince", request), "<currentProvince>NL</currentProvince>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("currentProvince", request), "<currentProvince>NT</currentProvince>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentProvince_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentProvince", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentPostalCode_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentPostalCode", request), "<currentPostalCode>03K3K3</currentPostalCode>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentPostalCode_incorrect_LENGTH() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentPostalCode", request), "<currentPostalCode>E3K3K</currentPostalCode>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_currentPostalCode_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentPostalCode", request), "<currentPostalCode>B2W4J4</currentPostalCode>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentPostalCode_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentPostalCode", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentCountry_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentCountry", request), "<currentCountry>US</currentCountry>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_currentCountry_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentCountry", request), "<currentCountry>CA</currentCountry>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentCountry_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentCountry", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentTelephoneNumber_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentTelephoneNumber", request), "<currentTelephoneNumber>123456789</currentTelephoneNumber>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_currentTelephoneNumber_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentTelephoneNumber", request), "<currentTelephoneNumber>1234567890</currentTelephoneNumber>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentTelephoneNumber_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentTelephoneNumber", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_yearsAtCurrentAddress_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("yearsAtCurrentAddress", request), "<yearsAtCurrentAddress>1999</yearsAtCurrentAddress>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_yearsAtCurrentAddress_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("yearsAtCurrentAddress", request), "<yearsAtCurrentAddress>12</yearsAtCurrentAddress>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_yearsAtCurrentAddress_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("yearsAtCurrentAddress", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_monthsAtCurrentAddress_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("monthsAtCurrentAddress", request), "<monthsAtCurrentAddress>12</monthsAtCurrentAddress>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_monthsAtCurrentAddress_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("monthsAtCurrentAddress", request), "<monthsAtCurrentAddress>11</monthsAtCurrentAddress>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_monthsAtCurrentAddress_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("monthsAtCurrentAddress", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentEmailAddress_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentEmailAddress", request), "<currentEmailAddress>QWERDSVWERER.COM</currentEmailAddress>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentEmailAddress_incorrect_1() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentEmailAddress", request), "<currentEmailAddress>QWERD@SVWERERCOM</currentEmailAddress>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentEmailAddress_incorrect_2() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentEmailAddress", request), "<currentEmailAddress>qwerd@svwerer.com</currentEmailAddress>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_currentEmailAddress_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentEmailAddress", request), "<currentEmailAddress>QWERDSV@WERER.COM</currentEmailAddress>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_currentEmailAddress_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("currentEmailAddress", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_previousAddressLine1_incorrect_length() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("previousAddressLine1", request),
					"<previousAddressLine1>DFOIJASLDKFJ SLDKASFJASKLDFJASKDJF ASKDJSA DF SDAKFJ DSF F</previousAddressLine1>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_previousAddressLine1_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
			String newRequest;
			if (request.contains("<previousAddressLine1>"))
			{
				newRequest = request.replace(getNodeByTag("previousAddressLine1", request), "<previousAddressLine1>234-1 LEACOCK COURT</previousAddressLine1>");
			}
			else
			{
				newRequest = request.replace("</currentEmailAddress>", "</currentEmailAddress><previousAddressLine1>234-1 LEACOCK COURT</previousAddressLine1>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
			assert (newRequest.contains("<previousAddressLine1>"));
		}
	}

	@Test
	public void test_for_previousAddressLine1_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("previousAddressLine1", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_previousAddressLine2_incorrect_length() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{

			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<previousAddressLine2>"))
			{
				newRequest = request.replace(getNodeByTag("previousAddressLine2", request),
						"<previousAddressLine2>12-1 UQWEOPRUIQWPEOJ WEIOF JKSDFJKASHDFL KASDH FSAD FASS DF L</previousAddressLine2>");
			}
			else
			{
				newRequest = request.replace("</currentEmailAddress>",
						"</currentEmailAddress><previousAddressLine2>12-1 UQWEOPRUIQWPEOJ WEIOF JKSDFJKASHDFL KASDH FSAD FASS DF L</previousAddressLine2></previousAddressLine2>");
			}
			assert (newRequest.contains("<previousAddressLine2>"));
			helper.validateUserRequest(newRequest, schemaLocation);

		}
	}

	@Test
	public void test_for_previousAddressLine2_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<previousAddressLine2>"))
			{
				newRequest = request.replace(getNodeByTag("previousAddressLine2", request), "<previousAddressLine2>234-1 LEACOCK COURT</previousAddressLine2>");
			}
			else
			{
				newRequest = request;
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_previousAddressLine2_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("previousAddressLine2", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_previousCity_incorrect_length() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("previousCity", request), "<previousCity>DFOIJASLDKFJ SLDKASFJASKLDFJASKDJF ASKDJSA DF SDAKFJ DSF FASDFASDF</previousCITY>");
			assert (newRequest.contains("<previousCity>"));
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_previousCity_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<previousCity>"))
			{
				newRequest = request.replace(getNodeByTag("previousCity", request), "<previousCity>SAD ' -  21,. 234-1 LEA</previousCity>");
			}
			else
			{
				newRequest = request.replace("</previousCity>", "</previousAddressLine1><previousCity>SAD ' -  21,. 234-1 LEA</previousCity>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
			assert (newRequest.contains("<previousCity>"));
		}
	}

	@Test
	public void test_for_previousCity_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("previousCity", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_previousProvinceState_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<previousProvinceState>"))
			{
				newRequest = request.replace(getNodeByTag("previousProvinceState", request), "<previousProvinceState>ZD</previousProvinceState>");
			}
			else
			{
				newRequest = request.replace("</currentEmailAddress>", "</currentEmailAddress><previousProvinceState>ZD</previousProvinceState>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_previousProvinceState_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<previousProvinceState>"))
			{
				newRequest = request.replace(getNodeByTag("previousProvinceState", request), "<previousProvinceState>AB</previousProvinceState>");
			}
			else
			{
				newRequest = request.replace("</currentEmailAddress>", "</currentEmailAddress><previousProvinceState>AB</previousProvinceState>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = newRequest.replace(getNodeByTag("previousProvinceState", newRequest), "<previousProvinceState>NS</previousProvinceState>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = newRequest.replace(getNodeByTag("previousProvinceState", newRequest), "<previousProvinceState>BC</previousProvinceState>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = newRequest.replace(getNodeByTag("previousProvinceState", newRequest), "<previousProvinceState>OT</previousProvinceState>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = newRequest.replace(getNodeByTag("previousProvinceState", newRequest), "<previousProvinceState>NB</previousProvinceState>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = newRequest.replace(getNodeByTag("previousProvinceState", newRequest), "<previousProvinceState>NL</previousProvinceState>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = newRequest.replace(getNodeByTag("previousProvinceState", newRequest), "<previousProvinceState>NT</previousProvinceState>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_previousProvinceState_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("previousProvinceState", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_previousPostalCode_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("previousPostalCode", request), "<previousPostalCode>03K3K3</previousPostalCode>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_previousPostalCode_incorrect_LENGTH() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("previousPostalCode", request), "<previousPostalCode>E3K3K</previousPostalCode>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_previousPostalCode_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<previousPostalCode>"))
			{
				newRequest = request.replace(getNodeByTag("previousPostalCode", request), "<previousPostalCode>B2W4J4</previousPostalCode>");
			}
			else
			{
				newRequest = request.replace("</currentEmailAddress>", "</currentEmailAddress><previousPostalCode>B2W4J4</previousPostalCode>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_previousPostalCode_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("previousPostalCode", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_previousCountry_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("previousCountry", request), "<previousCountry>US</previousCountry>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_previousCountry_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("previousCountry", request), "<previousCountry>CA</previousCountry>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_previousCountry_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("previousCountry", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_employementStatus_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("employementStatus", request), "<employementStatus>Z</employementStatus>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_employementStatus_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("employementStatus", request), "<employementStatus>R</employementStatus>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementStatus", request), "<employementStatus>R</employementStatus>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementStatus", request), "<employementStatus>F</employementStatus>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementStatus", request), "<employementStatus>P</employementStatus>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementStatus", request), "<employementStatus>S</employementStatus>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_employementStatus_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("employementStatus", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_jobTitle_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("jobTitle", request), "<jobTitle>SDFASJKDFAS</jobTitle>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_jobTitle_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("jobTitle", request), "<jobTitle>SDF ASJK D</jobTitle>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("jobTitle", request), "<jobTitle>01234</jobTitle>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("jobTitle", request), "<jobTitle>-_@,.</jobTitle>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_jobTitle_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("jobTitle", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_employementCategory_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>CA</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_employementCategory_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>DR</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>FA</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>GU</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>HO</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>LA</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>MA</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>MI</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>OF</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>OW</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>PR</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>RE</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>RT</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>SA</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>SE</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>ST</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>TR</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>UN</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("employementCategory", request), "<employementCategory>OT</employementCategory>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_employementCategory_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("employementCategory", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_employerName_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("employerName", request), "<employerName></employerName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_employerName_incorrect_LENGTH() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("employerName", request), "<employerName>ASDFJKLPOIUYTREWQASDFGHJKLNM,2VBCXZOI</employerName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_employerName_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("employerName", request), "<employerName>ASDFJKLPOIUYTREWQASDFGHJKLNM,.VBCXZO</employerName>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_employerName_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("employerName", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_employerCity_incorrect_length() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("employerCity", request), "<employerCity>DFOIJASLDKFJ SLDKASFJASKLDFJASKDJF ASKDJSA DF SDAKFJ DSF FASDFASDF</CURRENTCITY>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_employerCity_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("employerCity", request), "<employerCity> SAD 21 ,. ' -\\u017F</employerCity>");
			helper.validateUserRequest(newRequest, schemaLocation);
			assert (newRequest.contains("<employerCity>"));
		}
	}

	@Test
	public void test_for_employerCity_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("employerCity", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_employerCountry_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("employerCountry", request), "<employerCountry>US</employerCountry>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_employerCountry_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("employerCountry", request), "<employerCountry>CA</employerCountry>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_employerCountry_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("employerCountry", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_yearsAtEmployement_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("yearsAtEmployement", request), "<yearsAtEmployement>1000</yearsAtEmployement>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_yearsAtEmployement_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("yearsAtEmployement", request), "<yearsAtEmployement>0</yearsAtEmployement>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("yearsAtEmployement", request), "<yearsAtEmployement>15</yearsAtEmployement>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_yearsAtEmployement_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("yearsAtEmployement", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_monthsAtEmployement_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("monthsAtEmployement", request), "<monthsAtEmployement>12</monthsAtEmployement>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_monthsAtEmployement_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
			String newRequest = request.replace(getNodeByTag("monthsAtEmployement", request), "<monthsAtEmployement>0</monthsAtEmployement>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("monthsAtEmployement", request), "<monthsAtEmployement>11</monthsAtEmployement>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_monthsAtEmployement_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("monthsAtEmployement", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_grossAnnualIncome_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("grossAnnualIncome", request), "<grossAnnualIncome>9999999</grossAnnualIncome>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_grossAnnualIncome_incorrect_1() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("grossAnnualIncome", request), "<grossAnnualIncome>-1</grossAnnualIncome>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_grossAnnualIncome_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
			String newRequest = request.replace(getNodeByTag("grossAnnualIncome", request), "<grossAnnualIncome>0</grossAnnualIncome>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("grossAnnualIncome", request), "<grossAnnualIncome>999999</grossAnnualIncome>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_grossAnnualIncome_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("grossAnnualIncome", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_monthlyRentMortgageAmount_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("monthlyRentMortgageAmount", request), "<monthlyRentMortgageAmount>-1</monthlyRentMortgageAmount>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_monthlyRentMortgageAmount_incorrect_1() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("monthlyRentMortgageAmount", request), "<monthlyRentMortgageAmount>99999</monthlyRentMortgageAmount>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_monthlyRentMortgageAmount_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
			String newRequest = request.replace(getNodeByTag("monthlyRentMortgageAmount", request), "<monthlyRentMortgageAmount>0</monthlyRentMortgageAmount>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("monthlyRentMortgageAmount", request), "<monthlyRentMortgageAmount>9999</monthlyRentMortgageAmount>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_monthlyRentMortgageAmount_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("monthlyRentMortgageAmount", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_bankCardFlag_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("bankCardFlag", request), "<bankCardFlag></bankCardFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_bankCardFlag_incorrect_1() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("bankCardFlag", request), "<bankCardFlag>FALSE</bankCardFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_bankCardFlag_incorrect_2() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("bankCardFlag", request), "<bankCardFlag>YES</bankCardFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_bankCardFlag_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
			String newRequest = request.replace(getNodeByTag("bankCardFlag", request), "<bankCardFlag>Y</bankCardFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("bankCardFlag", request), "<bankCardFlag>N</bankCardFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_bankCardFlag_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("bankCardFlag", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_bankLoanFlag_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("bankLoanFlag", request), "<bankLoanFlag></bankLoanFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_bankLoanFlag_incorrect_1() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("bankLoanFlag", request), "<bankLoanFlag>FALSE</bankLoanFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_bankLoanFlag_incorrect_2() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("bankLoanFlag", request), "<bankLoanFlag>YES</bankLoanFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_bankLoanFlag_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
			String newRequest = request.replace(getNodeByTag("bankLoanFlag", request), "<bankLoanFlag>Y</bankLoanFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("bankLoanFlag", request), "<bankLoanFlag>N</bankLoanFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_bankLoanFlag_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("bankLoanFlag", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_chequingAccountFlag_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("chequingAccountFlag", request), "<chequingAccountFlag></chequingAccountFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_chequingAccountFlag_incorrect_1() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("chequingAccountFlag", request), "<chequingAccountFlag>FALSE</chequingAccountFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_chequingAccountFlag_incorrect_2() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("chequingAccountFlag", request), "<chequingAccountFlag>YES</chequingAccountFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_chequingAccountFlag_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
			String newRequest = request.replace(getNodeByTag("chequingAccountFlag", request), "<chequingAccountFlag>Y</chequingAccountFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("chequingAccountFlag", request), "<chequingAccountFlag>N</chequingAccountFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_chequingAccountFlag_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("chequingAccountFlag", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_savingsAccountFlag_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("savingsAccountFlag", request), "<savingsAccountFlag></savingsAccountFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_savingsAccountFlag_incorrect_1() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("savingsAccountFlag", request), "<savingsAccountFlag>FALSE</savingsAccountFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_savingsAccountFlag_incorrect_2() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("savingsAccountFlag", request), "<savingsAccountFlag>YES</savingsAccountFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_savingsAccountFlag_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
			String newRequest = request.replace(getNodeByTag("savingsAccountFlag", request), "<savingsAccountFlag>Y</savingsAccountFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("savingsAccountFlag", request), "<savingsAccountFlag>N</savingsAccountFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_savingsAccountFlag_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("savingsAccountFlag", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_storeCardFlag_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("storeCardFlag", request), "<storeCardFlag></storeCardFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_storeCardFlag_incorrect_1() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("storeCardFlag", request), "<storeCardFlag>FALSE</storeCardFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_storeCardFlag_incorrect_2() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("storeCardFlag", request), "<storeCardFlag>YES</storeCardFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_storeCardFlag_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
			String newRequest = request.replace(getNodeByTag("storeCardFlag", request), "<storeCardFlag>Y</storeCardFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("storeCardFlag", request), "<storeCardFlag>N</storeCardFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_storeCardFlag_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("storeCardFlag", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_gasCardFlag_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("gasCardFlag", request), "<gasCardFlag></gasCardFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_gasCardFlag_incorrect_1() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("gasCardFlag", request), "<gasCardFlag>FALSE</gasCardFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_gasCardFlag_incorrect_2() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("gasCardFlag", request), "<gasCardFlag>YES</gasCardFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_gasCardFlag_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
			String newRequest = request.replace(getNodeByTag("gasCardFlag", request), "<gasCardFlag>Y</gasCardFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
			newRequest = request.replace(getNodeByTag("gasCardFlag", request), "<gasCardFlag>N</gasCardFlag>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_gasCardFlag_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("gasCardFlag", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	private String getNodeByTag(String nodeName, String request)
	{
		int startPoint = request.indexOf("<" + nodeName + ">");
		if (startPoint == -1)
		{
			return "";
		}
		int endPoint = request.indexOf("</" + nodeName + ">") + ("</" + nodeName + ">").length();
		return request.substring(startPoint, endPoint);
	}

}
