package com.ctfs.BRB.TestCase.AccountApplicationTests;

import static org.junit.Assert.fail;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.io.BufferedReader;
import java.io.Reader;
import java.io.StringReader;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctfs.BRB.Helper.AccountApplicationRequestTypeConverter;
import com.ctfs.BRB.Helper.BRBServletMediator;
import com.ctfs.BRB.Helper.GenericObjectsHelper;
import com.ctfs.BRB.Helper.ScoreIdentityExamMemento;
import com.ctfs.BRB.Model.AccountApplicationRequestWrapper;
import com.ctfs.BRB.Model.BaseModel;
import com.ctfs.BRB.Model.CreditCardApplicationData;
import com.ctfs.BRB.Model.HTTPMethodType;
import com.ctfs.BRB.TestCase.InputData.AccountApplicationRequestData;


public class AccountApplicationRequestTypeConverterTest
{
	// static Logger log =
	// Logger.getLogger(AccountApplicationHelper.class.getName());
	private AccountApplicationRequestData input = new AccountApplicationRequestData();

	AccountApplicationRequestTypeConverter converter;
	ScoreIdentityExamMemento memento;
	BRBServletMediator mediator;

	@Before
	public void setUp() throws Exception
	{
		HttpServletRequest request = mock(HttpServletRequest.class);
		HttpServletResponse response = mock(HttpServletResponse.class);
		Reader strReader = new StringReader(input.getBRBCardDataModelsJson().toString());
		BufferedReader reader = new BufferedReader(strReader);
		when(request.getReader()).thenReturn(reader);
		when(request.getMethod()).thenReturn(HTTPMethodType.POST.name());
		mediator = new BRBServletMediator(request, response);
		mediator.IntializeMediator();
		memento = mock(ScoreIdentityExamMemento.class);
		when(memento.getExternalId("")).thenReturn("");
		when(memento.getSessionId("")).thenReturn("");
		converter = new AccountApplicationRequestTypeConverter();
	}

	@Test
	public void ensure_that_it_can_run_under_ant()
	{
		Assert.assertEquals(true, true);
	}
	
	@Test
	public void check_prev_address_elements_personalData2_Address() throws Exception
	{
		CreditCardApplicationData appData = new CreditCardApplicationData(mediator);
		
		AccountApplicationRequestWrapper requestWrapper = converter.convert(appData, memento);		
		Assert.assertNotNull(requestWrapper);
		
		AccountApplicationRequestType request = requestWrapper.getAccountApplicationRequest();		
		Assert.assertNotNull(request);
		
		String addressLine1 = request.getPreviousAddressLine1();
		Assert.assertEquals("45-3 LEACOCK COURT SUP", addressLine1);
	}

	@Test
	public void check_address_elements_personalData2_Address() throws Exception
	{
		CreditCardApplicationData appData = new CreditCardApplicationData(mediator);
		
		AccountApplicationRequestWrapper requestWrapper = converter.convert(appData, memento);
		Assert.assertNotNull(requestWrapper);
		
		AccountApplicationRequestType request = requestWrapper.getAccountApplicationRequest();
		Assert.assertNotNull(request);
		
		String addressLine1 = request.getCurrentAddressLine1();
		Assert.assertEquals("234-1 LEACOCK COURT", addressLine1);
		String addressLine2 = request.getCurrentAddressLine2();
		Assert.assertEquals("123 BROOKLYN", addressLine2);
	}

	@Test
	public void check_address_elements_supCardRequestData() throws Exception
	{
		CreditCardApplicationData appData = new CreditCardApplicationData(mediator);
		
		AccountApplicationRequestWrapper requestWrapper = converter.convert(appData, memento);
		Assert.assertNotNull(requestWrapper);
		
		AccountApplicationRequestType request = requestWrapper.getAccountApplicationRequest();
		Assert.assertNotNull(request);
		
		String addressLine1 = request.getSupp1AddressLine1();
		Assert.assertEquals("23-12 LEACOCK COURT", addressLine1);
	}

	@Test
	public void check_birthDate_RequestData() throws Exception
	{
		CreditCardApplicationData appData = new CreditCardApplicationData(mediator);

		AccountApplicationRequestWrapper requestWrapper = converter.convert(appData, memento);
		Assert.assertNotNull(requestWrapper);
		
		AccountApplicationRequestType request = requestWrapper.getAccountApplicationRequest();
		Assert.assertNotNull(request);
		
		String strRequest;
		String dateOfBirth = "";
		try
		{
			strRequest = new GenericObjectsHelper().accountApplicationSerialize(request);
			dateOfBirth = getNodeByTag("dateOfBirth", strRequest);
		}
		catch (Exception e)
		{
			fail();
		}
		Assert.assertEquals("<dateOfBirth>1970-12-01</dateOfBirth>", dateOfBirth);
	}

	@Test(expected = ParseException.class)
	public void check_birthDate_incorrect_day_RequestData() throws Exception
	{
		CreditCardApplicationData appData = new CreditCardApplicationData(mediator);

		AccountApplicationRequestWrapper requestWrapper = converter.convert(appData, memento);
		Assert.assertNotNull(requestWrapper);
		
		AccountApplicationRequestType request = requestWrapper.getAccountApplicationRequest();
		Assert.assertNotNull(request);
		
		String strRequest;
		String dateOfBirth = "";
		try
		{
			SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
			dateFormat.setLenient(false);
			request.setDateOfBirth(new BaseModel().getGregorianDate(dateFormat.parse("1970-12-00")));
			strRequest = new GenericObjectsHelper().accountApplicationSerialize(request);
			dateOfBirth = getNodeByTag("dateOfBirth", strRequest);
		}
		catch (Exception e)
		{
			throw e;
		}
		Assert.assertNotSame("<dateOfBirth>1970-12-00</dateOfBirth>", dateOfBirth);
	}

	@Test(expected = ParseException.class)
	public void check_birthDate_incorrect_Month_RequestData() throws Exception
	{
		CreditCardApplicationData appData = new CreditCardApplicationData(mediator);

		AccountApplicationRequestWrapper requestWrapper = converter.convert(appData, memento);
		Assert.assertNotNull(requestWrapper);
		
		AccountApplicationRequestType request = requestWrapper.getAccountApplicationRequest();
		Assert.assertNotNull(request);
		
		String strRequest;
		String dateOfBirth = "";
		try
		{
			SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
			dateFormat.setLenient(false);
			request.setDateOfBirth(new BaseModel().getGregorianDate(dateFormat.parse("1970-00-01")));
			strRequest = new GenericObjectsHelper().accountApplicationSerialize(request);
			dateOfBirth = getNodeByTag("dateOfBirth", strRequest);
		}
		catch (Exception e)
		{
			throw e;
		}
		Assert.assertNotSame("<dateOfBirth>1970-12-00</dateOfBirth>", dateOfBirth);
	}

	@Test(expected = ParseException.class)
	public void check_birthDate_Month_RequestData() throws Exception
	{
		CreditCardApplicationData appData = new CreditCardApplicationData(mediator);

		AccountApplicationRequestWrapper requestWrapper = converter.convert(appData, memento);
		Assert.assertNotNull(requestWrapper);
		
		AccountApplicationRequestType request = requestWrapper.getAccountApplicationRequest();
		Assert.assertNotNull(request);
		
		String strRequest;
		String dateOfBirth = "";
		try
		{
			SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
			dateFormat.setLenient(false);
			request.setDateOfBirth(new BaseModel().getGregorianDate(dateFormat.parse("1970-13-1")));
			strRequest = new GenericObjectsHelper().accountApplicationSerialize(request);
			dateOfBirth = getNodeByTag("dateOfBirth", strRequest);
		}
		catch (Exception e)
		{
			throw e;
		}
		Assert.assertEquals("<dateOfBirth>1970-13-01</dateOfBirth>", dateOfBirth);
	}

	@Test
	public void check_savingsAccountFlag_RequestData() throws Exception
	{
		CreditCardApplicationData appData = new CreditCardApplicationData(mediator);

		AccountApplicationRequestWrapper requestWrapper = converter.convert(appData, memento);
		Assert.assertNotNull(requestWrapper);
		
		AccountApplicationRequestType request = requestWrapper.getAccountApplicationRequest();
		Assert.assertNotNull(request);
		
		String savingsAccountFlag = request.getSavingsAccountFlag();
		Assert.assertEquals("Y", savingsAccountFlag);
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