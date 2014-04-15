package com.ctfs.BRB.Helper;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.logging.Logger;

import com.ctfs.BRB.Helper.Factory.TokenizationServiceProxyBuilder;
import com.ctfs.BRB.dblayer.ApplicationTransactionTableEntity;
import com.ctfs.BRB.dblayer.interfaces.IAppTransactionTableEntity;
import com.ctfs.BRB.dblayer.interfaces.ICustomerTransactionTableEntity;
import com.ctfs.esockettransact.EsocketTransactSOAPProxy;
import com.ctfs.esockettransactio.ESocketTransactInput;
import com.ctfs.esockettransactio.ESocketTransactOutput;
import com.ctfs.esockettransactio.MessageFieldsRequest;
import com.ctfs.esockettransactio.MessageFieldsResponse;
import com.ctfs.esockettransactio.PCICompliantMessageFieldsRequest;
import com.ctfs.esockettransactio.PCICompliantTransactionRequest;
import com.ctfs.esockettransactio.ProcessingCode;
import com.ctfs.esockettransactio.StructuredData;
import com.ctfs.esockettransactio.StructuredDataEntry;
import com.ctfs.esockettransactio.TypeOfPassFail;
import com.google.gson.Gson;

public class TokenizationHelper
{
	static Logger log = Logger.getLogger(TokenizationHelper.class.getName());
	static final String EMPTY_STRING = "";
	static final String REFERENCE_NUMBER_START_NODE = "<ReferenceNumber>";
	static final String REFERENCE_NUMBER_END_NODE = "</ReferenceNumber>";

	EsocketTransactSOAPProxy tokenizationWSClient;
	public static final String TRANSACTION_INFO_DATA = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" + " <ReferenceTransactionInfo>" + " <Request>" + " <Channel>%s</Channel>"
			+ " <ICCVCPromptDate>%s</ICCVCPromptDate>" + " </Request> " + "</ReferenceTransactionInfo>";

	public TokenizationHelper() throws Exception
	{
		String sMethod = "[TokenizationHelper] ";
		log.info(sMethod + "called...");
		
		tokenizationWSClient = (EsocketTransactSOAPProxy) new TokenizationServiceProxyBuilder().createWebServicesPortalProxy();
	}

	public TokenizationHelper(EsocketTransactSOAPProxy transactSOAPProxy)
	{
		String sMethod = "[TokenizationHelper] ";
		log.info(sMethod + "called with params...");
		
		tokenizationWSClient = transactSOAPProxy;
	}

	public String getCreditCardPAN(String brbTransactionId, String creditCardId, String creditCardExpiryDate, String agentIPAddress) throws Exception
	{
		String sMethod = "[getCreditCardPAN] ";
		log.info(sMethod + "called...");

		if (tokenizationWSClient == null)
		{
			throw new IllegalArgumentException("Invalid 'tokenizationWSClient' parameter!");
		}

		Gson gson = new Gson();

		// Form service request
		ESocketTransactInput tokenizationRequest = formTokenizationWSRequest(brbTransactionId, creditCardId, creditCardExpiryDate, agentIPAddress);
		
		// Do request to the Tokenization WS
		ESocketTransactOutput response = tokenizationWSClient.transact(tokenizationRequest);

		String jsonResponse = gson.toJson(response, ESocketTransactOutput.class);
		log.info(sMethod + "::RESPONSE::" + jsonResponse);

		// Process response
		if (response == null || response.getTransaction() == null || response.getTransaction().getMessageFields() == null
				|| (response.getPassFail() != null && response.getPassFail() == TypeOfPassFail.F))
		{
			throw new NoSuchFieldException("The 'pan' field could not be found inside Tokenization WS response ");
		}

		// Save referenceNumber into DB to retry it later
		captureReferenceNumberToDB(brbTransactionId, response.getTransaction().getMessageFields());

		// Get credit card pan value
		return response.getTransaction().getMessageFields().getPan();
	}

	public ESocketTransactInput formTokenizationWSRequest(String brbTransactionId, String creditCardId, String creditCardExpiryDate, String agentIPAddress)
	{
		String sMethod = "[formTokenizationWSRequest] ";
		log.info(String.format("%s called with parameters 'brbTransactionId=%s', 'agentIPAddress=%s'", 
				sMethod, brbTransactionId, agentIPAddress));

		ESocketTransactInput tokenizationRequest = new ESocketTransactInput();

		PCICompliantTransactionRequest transactionRequest = new PCICompliantTransactionRequest();

		PCICompliantMessageFieldsRequest compliantMessageFieldsRequest = new PCICompliantMessageFieldsRequest();
		compliantMessageFieldsRequest.setPan(creditCardId);

		MessageFieldsRequest messageFieldsRequest = new MessageFieldsRequest();

		ProcessingCode processingCode = new ProcessingCode();
		processingCode.setFromAccountType("00");
		processingCode.setToAccountType("00");
		processingCode.setTransactionType("91");

		StructuredData structuredData = new StructuredData();
		StructuredDataEntry structuredDataEntry = new StructuredDataEntry();

		structuredDataEntry.setName("ReferenceTransactionInfo");

		String formattedTransactionData = getFormattedTransactionData(brbTransactionId);
		structuredDataEntry.setData(formattedTransactionData);

		structuredData.getEntry().add(structuredDataEntry);

		messageFieldsRequest.setProcessingCode(processingCode);
		messageFieldsRequest.setExpiryDate(creditCardExpiryDate);
		messageFieldsRequest.setStructuredData(structuredData);
		messageFieldsRequest.setExtendedTransactionType("9750");

		transactionRequest.setMessageType("0600");
		transactionRequest.setPciMessageFields(compliantMessageFieldsRequest);
		transactionRequest.setMessageFields(messageFieldsRequest);

		tokenizationRequest.setId(brbTransactionId);
		tokenizationRequest.setAgentIPAddress(agentIPAddress);
		tokenizationRequest.setHostSystem("WEBIC");
		tokenizationRequest.setHostSystemOperator("SYSTEM");
		tokenizationRequest.setTokenRequired("Y");
		tokenizationRequest.setTransaction(transactionRequest);

		return tokenizationRequest;
	}

	private String getFormattedTransactionData(String brbTransactionId)
	{
		String sMethod = "[getFormattedTransactionData] ";
		log.info(sMethod + "::BRBTransactionId::" + brbTransactionId);
		String formattedTransactionData = null;

		try
		{
			// Get RequestingSystem info by brbTransactionId from
			// CustomerTransaction table
			ICustomerTransactionTableEntity customerTransactionTblEntity = new BRBDBHelper().getFromCustomerTransactionTable(brbTransactionId);

			// Get formatted date time
			String formattedDate = getFormattedTimeStump();
			
			// Get formatted TRANSACTION DATA
			formattedTransactionData = String.format(TRANSACTION_INFO_DATA, customerTransactionTblEntity.getRequestingSystem(), formattedDate);
		}
		catch (Exception e)
		{
			log.warning(sMethod + "::Exception::" + e.getMessage());
		}

		log.info(sMethod + "::FormattedTransactionData::" + formattedTransactionData);
		
		return formattedTransactionData;
	}

	/**
	 * @return
	 */
	private String getFormattedTimeStump()
	{
		String sMethod = "[getFormattedTimeStump] ";
		log.info(sMethod + "::called.");
		
		// Get calendar
		Calendar calendar = Calendar.getInstance();
		
		// Add five days for current date
		calendar.add(Calendar.DAY_OF_MONTH, 5);
		String formattedDate =  new SimpleDateFormat("yyyyMMddHHmmss").format(calendar.getTime());
		
		log.info(sMethod + "::FormattedDate::" + formattedDate);
		
		return formattedDate;
	}

	private void captureReferenceNumberToDB(String brbTransactionId, MessageFieldsResponse msgFieldsResponse)
	{
		String sMethod = "[captureReferenceNumberToDB] ";
		log.info(sMethod + "::BRBTransactionId::" + brbTransactionId);

		try
		{
			// Get referenceNumber from response
			String referenceNumber = getReferenceNumber(msgFieldsResponse);

			log.info(String.format("%s called with parameters 'brbTransactionId=%s', 'referenceNumber=%s'", sMethod, brbTransactionId, referenceNumber));

			IAppTransactionTableEntity appTransactionTableEntity = new ApplicationTransactionTableEntity();
			appTransactionTableEntity.setTransactionId(brbTransactionId);
			appTransactionTableEntity.setReferenceNumber(referenceNumber);
			
			// Save referenceNumber into db
			new TokenizationMemento().saveState(appTransactionTableEntity);
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
		}
	}

	private String getReferenceNumber(MessageFieldsResponse msgFieldsResponse)
	{
		String sMethod = "[getReferenceNumber] ";
		log.info(sMethod + "called...");

		String referenceNumber = null;

		if (msgFieldsResponse.getStructuredData() == null || msgFieldsResponse.getStructuredData().getEntry() == null || msgFieldsResponse.getStructuredData().getEntry().isEmpty())
		{

			return referenceNumber;
		}

		try
		{
			// Get StructuredDataEntry
			StructuredDataEntry entry = msgFieldsResponse.getStructuredData().getEntry().get(0);

			// Get data as xml string
			String xmlEntry = entry.getData();

			// Get REFERENCE NUMBER START NODE index
			int startInx = xmlEntry.indexOf(REFERENCE_NUMBER_START_NODE);

			// Get REFERENCE NUMBER END NODE index
			int endInx = xmlEntry.indexOf(REFERENCE_NUMBER_END_NODE);

			// Get referenceNumber
			referenceNumber = xmlEntry.substring(startInx, endInx).replace(REFERENCE_NUMBER_START_NODE, EMPTY_STRING);

			log.info(String.format("%s return 'referenceNumber=%s'", sMethod, referenceNumber));
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
		}

		return referenceNumber;
	}
}
