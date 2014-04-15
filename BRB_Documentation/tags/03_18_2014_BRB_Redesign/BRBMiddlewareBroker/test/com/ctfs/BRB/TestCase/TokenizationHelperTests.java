package com.ctfs.BRB.TestCase;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertSame;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import javax.naming.NamingException;

import org.junit.After;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import com.ctfs.BRB.Helper.ApplicationSettingsManager;
import com.ctfs.BRB.Helper.TokenizationHelper;
import com.ctfs.esockettransact.EsocketTransactSOAPProxy;
import com.ctfs.esockettransactio.ESocketTransactInput;
import com.ctfs.esockettransactio.StructuredDataEntry;
@Ignore
public class TokenizationHelperTests extends BaseTest
{
	protected String tuSessionId;
	protected String creditCardId;
	protected String creditCardExpiryDate;
	protected String agentIPAddress;
	EsocketTransactSOAPProxy mockEsocketTransactSOAPProxy;

	@Before
	public void setUp() throws IOException, SQLException, NamingException
	{		
		initizlizeInputData();
	}

	@After
	public void tearDown()
	{		
		releaseInputData();
	}

	@Test
	public void test_for_correct_tokenization_ws_request_formation()
	{
			assertNotNull("tokenizationHelper is NULL", tokenizationHelper);
			
			ESocketTransactInput eSocketTransactInput = tokenizationHelper.formTokenizationWSRequest(tuSessionId, creditCardId, creditCardExpiryDate, agentIPAddress);

			// Check result
			assertNotNull("eSocketTransactInput is NULL", eSocketTransactInput);
			assertSame(eSocketTransactInput.getAgentIPAddress(), ApplicationSettingsManager.getInstance().getTokenizationServiceAgentIP());
			assertSame(eSocketTransactInput.getId(), tuSessionId);
			assertSame(eSocketTransactInput.getHostSystem(), "WEBIC");
			assertSame(eSocketTransactInput.getHostSystemOperator(), "SYSTEM");
			assertSame(eSocketTransactInput.getTokenRequired(), "Y");
			assertSame(eSocketTransactInput.getTransaction().getMessageType(), "0600");
			assertSame(eSocketTransactInput.getTransaction().getMessageFields().getExtendedTransactionType(), "9750");
			assertSame(eSocketTransactInput.getTransaction().getMessageFields().getExpiryDate(), creditCardExpiryDate);
			assertSame(eSocketTransactInput.getTransaction().getMessageFields().getProcessingCode().getFromAccountType(), "00");
			assertSame(eSocketTransactInput.getTransaction().getMessageFields().getProcessingCode().getToAccountType(), "00");
			assertSame(eSocketTransactInput.getTransaction().getMessageFields().getProcessingCode().getTransactionType(), "91");
			List<StructuredDataEntry> structuredData = eSocketTransactInput.getTransaction().getMessageFields().getStructuredData().getEntry();
			assertTrue(structuredData.size() == 1);
			assertSame(structuredData.get(0).getName(), "ReferenceTransactionInfo");
			//assertSame(structuredData.get(0).getData(), TokenizationHelper.TRANSACTION_INFO_DATA);

	}

	protected void initizlizeInputData()
	{
		mockEsocketTransactSOAPProxy = mock(EsocketTransactSOAPProxy.class);
		tokenizationHelper = new TokenizationHelper(mockEsocketTransactSOAPProxy);
		
		tuSessionId = getUniqueIdentifier();
		creditCardId = getUniqueIdentifier();
		creditCardExpiryDate = getCurrentTimeAsString();
		agentIPAddress = ApplicationSettingsManager.getInstance().getTokenizationServiceAgentIP();
	}
	
	protected void releaseInputData()
	{
		tokenizationHelper = null;
		tuSessionId = null;
		creditCardId = null;
		creditCardExpiryDate = null;
		agentIPAddress = null;
	}
}
