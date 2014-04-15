package com.ctfs.BRB.TestCase;

import java.util.HashMap;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;

import org.junit.Ignore;

import com.ctfs.BRB.Helper.ScoreIdentityExamMemento;
import com.ctfs.BRB.Helper.ecommcarddata.ECommCardDataSimulatorFacade;

@Ignore
public class ECommCardDataHelperTest
{
	static Logger log = Logger.getLogger(ECommCardDataHelperTest.class.getName());
	ECommCardDataSimulatorFacade helper;
	HttpServletRequest httpRequest;
	HashMap<String, String> parameterMap;
	ScoreIdentityExamMemento memento;

	/*@Before
	public void setUp() throws Exception
	{
		httpRequest = mock(HttpServletRequest.class);
		memento = mock(ScoreIdentityExamMemento.class);
		when(memento.getExternalId("")).thenReturn("");
		when(memento.getSessionId("")).thenReturn("");
		helper = new ECommCardDataSimulatorFacade();	
		
		JsonParser jParser = new JsonParser();
		
		JsonElement jElement = jParser.parse(new ECommRequestData().getBRBCardDataJson());
		
		JsonObject j = helper.getPostParametersObject(jElement);
		helper.setPostParametersObject(j);
	}*/

//	@Test
//	public void check_addressLine1_element()
//	{
//		CardRequestType request = helper.getCardRequest(memento);
//		assertEquals("1, LEACOCK COURT", request.getCustomerInfo().getAddressLine1());
//	}
//
//	@Test
//	public void check_addressLine2_element()
//	{
//		CardRequestType request = helper.getCardRequest( memento);
//		assertEquals("123", request.getCustomerInfo().getAddressLine2());
//	}
//
//	@Test
//	public void check_city_element()
//	{
//		CardRequestType request = helper.getCardRequest( memento);
//		assertEquals("DARTMOUTH", request.getCustomerInfo().getCity());
//	}
//
//	@Test
//	public void check_EcommCustomerId_element()
//	{
//		
//		CardRequestType request = helper.getCardRequest(memento);
//		assertEquals("asdf", request.getCustomerInfo().getEcommCustomerId());
//	}
//
//	@Test
//	public void check_email_element()
//	{
//		CardRequestType request = helper.getCardRequest( memento);
//		assertEquals("QW@QW.QW", request.getCustomerInfo().getEmail());
//	}
//	
//	@Test
//	public void check_firstName_element()
//	{
//		CardRequestType request = helper.getCardRequest( memento);
//		assertEquals("BREDITU", request.getCustomerInfo().getFirstName());
//	}
//	
//	@Test
//	public void check_lastName_element()
//	{
//		CardRequestType request = helper.getCardRequest(memento);
//		assertEquals("PERIWINKLE", request.getCustomerInfo().getLastName());
//	}
//	
//	@Test
//	public void check_phoneNumber_element()
//	{
//		CardRequestType request = helper.getCardRequest( memento);
//		assertEquals("1111111111", request.getCustomerInfo().getPhone());
//	}
//	
//	@Test
//	public void check_postalCode_element()
//	{
//		CardRequestType request = helper.getCardRequest( memento);
//		assertEquals("B2W4J4", request.getCustomerInfo().getPostalCode());
//	}
//
//	@Test
//	public void check_province_element()
//	{
//		CardRequestType request = helper.getCardRequest( memento);
//		assertEquals("NS", request.getCustomerInfo().getProvince());
//	}
//
//	@Test
//	public void check_expiryDate_element()
//	{
//		CardRequestType request = helper.getCardRequest( memento);
//		assertEquals("1711", request.getCustomerInfo().getExpiryDate());
//	}
//	
//	@Test
//	public void check_maskedPan_element()
//	{
//		CardRequestType request = helper.getCardRequest( memento);
//		assertEquals("544612xxxxxx9619", request.getCustomerInfo().getMaskedPan());
//	}
}
