package com.ctfs.BRB.TestCase;

import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.Reader;
import java.io.StringReader;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.junit.Before;
import org.junit.Test;

import com.ctc.ctfs.channel.webicidentityexamination.WebICIdentityExamRequest;
import com.ctfs.BRB.Helper.BRBServletMediator;
import com.ctfs.BRB.Helper.IdentityExamHelperRequestTypeConverter;
import com.ctfs.BRB.Helper.WASDefender;
import com.ctfs.BRB.Model.HTTPMethodType;
import com.ctfs.BRB.Model.Response;
import com.ctfs.BRB.exceptions.XSSAttackException;

public class BRBServletMediatorTest
{
	String body = "{\"language\":\"en\",\"firstName\":\"BREDITU\",\"middleName\":\"\",\"lastName\":\"PERIWINKLE\",\"phoneNumber\":\"1111111111\",\"dateOfBirth\":\"5/17/1970\",\"addressLine1\":\"1 LEACOCK COURT\",\"city\":\"DARTMOUTH\",\"province\":\"NS\",\"postalCode\":\"B2W4J4\",\"transactionId\":\"3867d37cda7b40f1bb4bcc771d2b89821387449230267\",\"brbTransactionId\":\"3867d37cda7b40f1bb4bcc771d2b89821387449230267\",\"TrackingScreenID\":5}";
	BRBServletMediator mediator = null;

	@Before
	public void init() throws IOException
	{
		try
		{
			initMediator(body);
		}
		catch (XSSAttackException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Test
	public void test_for_correct_transactionId_returned_from_mediator()
	{
		assertEquals(mediator.getBrbTransactionId(), "3867d37cda7b40f1bb4bcc771d2b89821387449230267");
	}

	@Test
	public void test_for_correct_request_Type_returned_from_mediator()
	{
		assertEquals(mediator.getHttpMethodType(), HTTPMethodType.POST);
	}

	@Test
	public void test_for_correct_conversion_of_request_to_model() throws Exception
	{
		IdentityExamHelperRequestTypeConverter converter = new IdentityExamHelperRequestTypeConverter();
		WebICIdentityExamRequest identityRequest = converter.extractIdentityExamRequestParameters(mediator);
		assertEquals(identityRequest.getFirstName(), "BREDITU");
	}

	@Test
	public void test_that_application_json_content_type_is_being_set_in_the_response_header_for_all_valid_json_responses()
	{
		processResponse();
		verify(mediator.getResponse()).setContentType("application/json");
	}

	@Test
	public void test_that_unauthorized_use_of_system_is_being_set_in_the_response_header_for_all_invalid_input_values() throws IOException
	{
		String dirtyRequest = "{\"language\":\"<script>$(document).ready(function(){});</script>\"}";
		try
		{
			new WASDefender().scanForXSSInjections(dirtyRequest);
		}
		catch (Exception e)
		{
			assertEquals("Unauthorized use of system", e.getMessage());
		}
	}

	@Test
	public void test_that_x_frame_options_header_is_being_set_in_the_response_header_for_any_response()
	{
		processResponse();
		verify(mediator.getResponse()).addHeader("X-Frame-Options", "SAMEORIGIN");

	}
	
	@Test
	public void test_for_French_special_characters_replacement(){
		StringBuffer frenchString = new StringBuffer("\u00C2 \u00C1 \u00C4,\u00C6, \u00C0, \u00CA, \u00CB, \u00C9, \u00C8, \u00CF, \u00CE, \u0152, \u00D3, \u00D4, \u00DC, \u00DB, \u00D9, \u0178 , \u00C7");
		StringBuffer result = mediator.replaceFrenchCharsForEquivalent(frenchString);
		assertTrue(result.indexOf("\u00C2")==-1);
		assertTrue(result.indexOf("\u00C1")==-1);
		assertTrue(result.indexOf("\u00C4")==-1);
		assertTrue(result.indexOf("\u00C6")==-1);
		assertTrue(result.indexOf("\u00C0")==-1);
		assertTrue(result.indexOf("\u00CA")==-1);
		assertTrue(result.indexOf("\u00CB")==-1);
		assertTrue(result.indexOf("\u00C9")==-1);
		assertTrue(result.indexOf("\u00C8")==-1);
		assertTrue(result.indexOf("\u00CF")==-1);
		assertTrue(result.indexOf("\u00CE")==-1);
		assertTrue(result.indexOf("\u0152")==-1);
		assertTrue(result.indexOf("\u00D3")==-1);
		assertTrue(result.indexOf("\u00D4")==-1);
		assertTrue(result.indexOf("\u00DC")==-1);
		assertTrue(result.indexOf("\u00DB")==-1);
		assertTrue(result.indexOf("\u00D9")==-1);
		assertTrue(result.indexOf("\u0178")==-1);
		assertTrue(result.indexOf("\u00C7")==-1);
	}

	private void initMediator(String argBody) throws IOException, XSSAttackException
	{
		HttpServletRequest request = mock(HttpServletRequest.class);
		HttpServletResponse response = mock(HttpServletResponse.class);
		Reader strReader = new StringReader(argBody);
		BufferedReader reader = new BufferedReader(strReader);
		when(request.getReader()).thenReturn(reader);
		when(request.getMethod()).thenReturn(HTTPMethodType.POST.name());
		mediator = new BRBServletMediator(request, response);
		mediator.IntializeMediator();
	}

	private void processResponse()
	{
		Response appResponse = new Response();
		appResponse.setData(new Object());
		appResponse.setError(false);
		appResponse.setMsg("Message");
		mediator.processHttpResponse(appResponse);
	}
}
