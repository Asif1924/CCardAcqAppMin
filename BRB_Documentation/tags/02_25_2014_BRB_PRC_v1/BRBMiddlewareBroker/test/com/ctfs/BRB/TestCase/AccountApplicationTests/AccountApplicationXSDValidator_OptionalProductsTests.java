package com.ctfs.BRB.TestCase.AccountApplicationTests;

import org.junit.Before;
import org.junit.Test;

import com.ctfs.BRB.Helper.AccountApplicationHelper;
import com.ctfs.BRB.Helper.Factory.ValidatorException;
import com.ctfs.BRB.Resources.ResourceHelper;
import com.ctfs.BRB.TestCase.TestDataHelper;

public class AccountApplicationXSDValidator_OptionalProductsTests
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
	public void test_for_supp1FirstName_can_single_quote() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1FirstName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1FirstName", request), "<supp1FirstName>BRED'ITU'</supp1FirstName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1FirstName>BRED'ITU'</supp1FirstName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_supp1FirstName_can_contain_numbers() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1FirstName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1FirstName", request), "<supp1FirstName>BREDITU1234567890</supp1FirstName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1FirstName>BREDITU1234567890</supp1FirstName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_supp1FirstName_can_contain_hyphen() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1FirstName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1FirstName", request), "<supp1FirstName>BREDITU-</supp1FirstName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1FirstName>BREDITU-</supp1FirstName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_supp1FirstName_can_contain_space() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1FirstName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1FirstName", request), "<supp1FirstName>B R E D I T U </supp1FirstName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1FirstName>B R E D I T U </supp1FirstName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_supp1FirstName_can_contain_French() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1FirstName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1FirstName", request), "<supp1FirstName>\\u017F\\u0180\\u0181</supp1FirstName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1FirstName>\\u017F\\u0180\\u0181</supp1FirstName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_supp1FirstName_cant_contain_specific_char_1() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1FirstName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1FirstName", request), "<supp1FirstName>BREDITU&</supp1FirstName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1FirstName>BREDITU&</supp1FirstName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_supp1FirstName_cant_contain_specific_char_2() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1FirstName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1FirstName", request), "<supp1FirstName>BREDITU_</supp1FirstName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1FirstName>BREDITU_</supp1FirstName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_supp1FirstName_cant_contain_specific_char_3() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1FirstName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1FirstName", request), "<supp1FirstName>BREDITU/</supp1FirstName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1FirstName>BREDITU/</supp1FirstName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_supp1FirstName_cant_contain_specific_char_4() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1FirstName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1FirstName", request), "<supp1FirstName>BREDITU*</supp1FirstName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1FirstName>BREDITU*</supp1FirstName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_supp1FirstName_cant_be_empty() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1FirstName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1FirstName", request), "<supp1FirstName></supp1FirstName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1FirstName></supp1FirstName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_supp1FirstName_can_be_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			newRequest = request.replace(getNodeByTag("supp1FirstName", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_supp1LastName_can_single_quote() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1LastName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1LastName", request), "<supp1LastName>BRED'ITU'</supp1LastName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1LastName>BRED'ITU'</supp1LastName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_supp1LastName_can_contain_numbers() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1LastName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1LastName", request), "<supp1LastName>BREDITU1234567890</supp1LastName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1LastName>BREDITU1234567890</supp1LastName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_supp1LastName_can_contain_hyphen() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();

			String newRequest;
			if (request.contains("<supp1LastName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1LastName", request), "<supp1LastName>BREDITU-</supp1LastName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1LastName>BREDITU-</supp1LastName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_supp1LastName_can_contain_space() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1LastName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1LastName", request), "<supp1LastName>B R E D I T U </supp1LastName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1LastName>B R E D I T U </supp1LastName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_supp1LastName_can_contain_French() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1LastName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1LastName", request), "<supp1LastName>\\u017F\\u0180\\u0181</supp1LastName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1LastName>\\u017F\\u0180\\u0181</supp1LastName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_supp1LastName_cant_contain_specific_char_1() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1LastName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1LastName", request), "<supp1LastName>BREDITU&</supp1LastName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1LastName>BREDITU&</supp1LastName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_supp1LastName_cant_contain_specific_char_2() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1LastName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1LastName", request), "<supp1LastName>BREDITU_</supp1LastName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1LastName>BREDITU_</supp1LastName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_supp1LastName_cant_contain_specific_char_3() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1LastName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1LastName", request), "<supp1LastName>BREDITU/</supp1LastName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1LastName>BREDITU/</supp1LastName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_supp1LastName_cant_contain_specific_char_4() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1LastName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1LastName", request), "<supp1LastName>BREDITU*</supp1LastName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1LastName>BREDITU*</supp1LastName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_supp1LastName_cant_be_empty() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1LastName>"))
			{
				newRequest = request.replace(getNodeByTag("supp1LastName", request), "<supp1LastName></supp1LastName>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1LastName></supp1LastName>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_supp1LastName_cant_be_ommited() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("supp1LastName", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_supp1Relationship_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("supp1Relationship", request), "<supp1Relationship>Son</supp1Relationship>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_supp1Relationship_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
			String newRequest;
			if (request.contains("<supp1Relationship>"))
			{
				newRequest = request.replace(getNodeByTag("supp1Relationship", request), "<supp1Relationship>SON</supp1Relationship>");
			}
			else
			{
				newRequest = request.replace("</gasCardFlag>", "</gasCardFlag><supp1Relationship>SON</supp1Relationship>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
			assert (newRequest.contains("<supp1Relationship>"));
		}
	}

	@Test
	public void test_for_supp1Relationship_cant_be_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("supp1Relationship", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_supp1DateOfBirth_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			if (request.contains("<supp1DateOfBirth>"))
			{
				String newRequest = request.replace(getNodeByTag("supp1DateOfBirth", request), "<supp1DateOfBirth>1980-11-07</supp1DateOfBirth>");
				helper.validateUserRequest(newRequest, schemaLocation);
				assert (newRequest.contains("<supp1DateOfBirth>"));
			}
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_supp1DateOfBirth_incorrect_1() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{

			String request = dataHelper.getNextDataForTest();
			if (request.contains("<supp1DateOfBirth>"))
			{
				String newRequest = request.replace(getNodeByTag("supp1DateOfBirth", request), "<supp1DateOfBirth>3980-05-07</supp1DateOfBirth>");
				helper.validateUserRequest(newRequest, schemaLocation);
			}
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_supp1DateOfBirth_incorrect_2() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			if (request.contains("<supp1DateOfBirth>"))
			{
				String newRequest = request.replace(getNodeByTag("supp1DateOfBirth", request), "<supp1DateOfBirth>1980-00-07</supp1DateOfBirth>");
				helper.validateUserRequest(newRequest, schemaLocation);
			}
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_supp1DateOfBirth_incorrect_3() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			if (request.contains("<supp1DateOfBirth>"))
			{
				String newRequest = request.replace(getNodeByTag("supp1DateOfBirth", request), "<supp1DateOfBirth>1980-00-32</supp1DateOfBirth>");
				helper.validateUserRequest(newRequest, schemaLocation);
			}
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_supp1DateOfBirth_incorrect_4() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			if (request.contains("<supp1DateOfBirth>"))
			{
				String newRequest = request.replace(getNodeByTag("supp1DateOfBirth", request), "<supp1DateOfBirth>1990-11-00</supp1DateOfBirth>");
				helper.validateUserRequest(newRequest, schemaLocation);
			}
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_supp1DateOfBirth_incorrect_5() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			if (request.contains("<supp1DateOfBirth>"))
			{
				String newRequest = request.replace(getNodeByTag("supp1DateOfBirth", request), "<supp1DateOfBirth>1980-13-17</supp1DateOfBirth>");
				helper.validateUserRequest(newRequest, schemaLocation);
			}
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_supp1AddressLine1_incorrect_length() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			if (request.contains("<supp1AddressLine1>"))
			{
				String newRequest = request.replace(getNodeByTag("supp1AddressLine1", request), "<supp1AddressLine1>DFOIJASLDKFJ SLDKASFJASKLDFJASKDJF ASKDJSA DF SDAKFJ DSF F</supp1AddressLine1>");
				helper.validateUserRequest(newRequest, schemaLocation);
			}
			else
			{
				throw new ValidatorException("");
			}
		}
	}

	@Test
	public void test_for_supp1AddressLine1_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			if (request.contains("<supp1AddressLine1>"))
			{
				String newRequest = request.replace(getNodeByTag("supp1AddressLine1", request), "<supp1AddressLine1> SAD - 21 ,. '234-1 LEACOCK COURT </supp1AddressLine1>");
				helper.validateUserRequest(newRequest, schemaLocation);
				assert (newRequest.contains("<supp1AddressLine1>"));
			}

		}
	}

	@Test
	public void test_for_supp1AddressLine2_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest;
			if (request.contains("<supp1AddressLine2>"))
			{
				newRequest = request.replace(getNodeByTag("supp1AddressLine2", request), "<supp1AddressLine2> SAD - 21 ,. '234-1 LEACOCK COURT </supp1AddressLine2>");
				helper.validateUserRequest(newRequest, schemaLocation);
				assert (newRequest.contains("<supp1AddressLine2>"));
			}
		}
	}

	@Test
	public void test_for_supp1City_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			if (request.contains("<supp1City>"))
			{
				String newRequest = request.replace(getNodeByTag("supp1City", request), "<supp1City> SAD 21 ,. ' - </supp1City>");
				helper.validateUserRequest(newRequest, schemaLocation);
				assert (newRequest.contains("<supp1City>"));
			}
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
