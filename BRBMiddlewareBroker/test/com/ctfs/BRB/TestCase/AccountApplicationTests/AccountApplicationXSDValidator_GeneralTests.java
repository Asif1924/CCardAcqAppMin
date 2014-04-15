package com.ctfs.BRB.TestCase.AccountApplicationTests;

import org.junit.Before;
import org.junit.Test;

import com.ctfs.BRB.Helper.AccountApplicationHelper;
import com.ctfs.BRB.Helper.Factory.ValidatorException;
import com.ctfs.BRB.Resources.ResourceHelper;
import com.ctfs.BRB.TestCase.TestDataHelper;

public class AccountApplicationXSDValidator_GeneralTests
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
	public void test_for_validator_functionality() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
		}
	}

	@Test
	public void test_for_field_externalReferenceId_is_present() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
			assert (request.contains("externalReferenceId"));
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_field_externalReferenceId_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("externalReferenceId", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_field_externalReferenceId_incorrect_length() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("externalReferenceId", request), "<externalReferenceId>2342334253453234239489634895823974534250345354325345</externalReferenceId>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_field_storeNumber_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("storeNumber", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_field_storeNumber_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("storeNumber", request), "<storeNumber>12JKLSDHF121</storeNumber>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_field_storeNumber_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
			assert (request.contains("<storeNumber>"));
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_field_agentId_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("agentId", request), "<agentId>MQSYSQQ</agentId>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_field_agentId_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("agentId", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_field_agentId_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
			assert (request.contains("agentId"));
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_field_channelIndicator_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("channelIndicator", request), "<channelIndicator>WEBIC</channelIndicator>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_field_channelIndicator_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("channelIndicator", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_field_channelIndicator_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
			assert (request.contains("channelIndicator"));
		}
	}

	@Test
	public void test_for_field_agencyPromoCode_correct_four_symbols() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String newRequest;
			String request = dataHelper.getNextDataForTest();
			if (request.contains("<agencyPromoCode>"))
			{
				newRequest = request.replace(getNodeByTag("agencyPromoCode", request), "<agencyPromoCode>A667</agencyPromoCode>");
			}
			else
			{
				newRequest = request.replace("</channelIndicator>", "</channelIndicator><agencyPromoCode>A667</agencyPromoCode>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_field_agencyPromoCode_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String newRequest;
			String request = dataHelper.getNextDataForTest();
			if (request.contains("<agencyPromoCode>"))
			{
				newRequest = request.replace(getNodeByTag("agencyPromoCode", request), "<agencyPromoCode>A66744</agencyPromoCode>");
			}
			else
			{
				newRequest = request.replace("</channelIndicator>", "</channelIndicator><agencyPromoCode>A66744</agencyPromoCode>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_field_agencyPromoCode_correct_five_symbols() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String newRequest;
			String request = dataHelper.getNextDataForTest();
			if (request.contains("<agencyPromoCode>"))
			{
				newRequest = request.replace(getNodeByTag("agencyPromoCode", request), "<agencyPromoCode>A6674</agencyPromoCode>");
			}
			else
			{
				newRequest = request.replace("</channelIndicator>", "</channelIndicator><agencyPromoCode>A6674</agencyPromoCode>");
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_field_agencyPromoCode_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String newRequest;
			String request = dataHelper.getNextDataForTest();
			if (request.contains("<agencyPromoCode>"))
			{
				newRequest = request.replace(getNodeByTag("agencyPromoCode", request), "");
			}
			else
			{
				newRequest = request;
			}
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_field_acquistionStrategyCode_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, schemaLocation);
			assert (request.contains("acquistionStrategyCode"));
		}
	}

	@Test
	public void test_for_field_acquistionStrategyCode_correct_ns() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("acquistionStrategyCode", request), "<acquistionStrategyCode>005577</acquistionStrategyCode>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_field_acquistionStrategyCode_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("acquistionStrategyCode", request), "<acquistionStrategyCode>006677</acquistionStrategyCode>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_field_acquistionStrategyCode_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("acquistionStrategyCode", request), "");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test
	public void test_for_field_requestedProductType_correct() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();

			helper.validateUserRequest(request, schemaLocation);
			assert (request.contains("<requestedProductType>"));
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_field_requestedProductType_incorrect() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("requestedProductType", request), "<requestedProductType>A66700</requestedProductType>");
			helper.validateUserRequest(newRequest, schemaLocation);
		}
	}

	@Test(expected = ValidatorException.class)
	public void test_for_field_requestedProductType_missed() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			String newRequest = request.replace(getNodeByTag("requestedProductType", request), "");
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
