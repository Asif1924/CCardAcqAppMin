package com.ctfs.BRB.Helper;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.logging.Logger;

import com.channel.ctfs.ctc.webicgateway.AccountAcquisitionPortalProxy;
import com.channel.ctfs.ctc.webicgateway.RequestBody;
import com.channel.ctfs.ctc.webicgateway.ResponseBody;
import com.channel.ctfs.ctc.webicgateway.ResponseBodyType;
import com.ctc.ctfs.channel.webicidentityexamination.Answer;
import com.ctc.ctfs.channel.webicidentityexamination.IdentityExam;
import com.ctc.ctfs.channel.webicidentityexamination.Question;
import com.ctc.ctfs.channel.webicidentityexamination.WebICScoreIdentityExamRequest;
import com.ctc.ctfs.channel.webicidentityexamination.WebICScoreIdentityExamResponse;
import com.ctfs.BRB.Helper.Factory.AccountApplicationProxyBuilder;
import com.ctfs.BRB.Helper.Factory.ValidatorException;
import com.ctfs.BRB.Model.BRBIdentityExamBridge;
import com.ctfs.BRB.Model.MessageType;
import com.ctfs.BRB.Resources.ResourceHelper;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.DomDriver;

public class ScoreIdentityExamHelper
{
	static Logger log = Logger.getLogger(ScoreIdentityExamHelper.class.getName());
	static final String EMPTY_STRING = "";
	static final String QUESTION_REFERENCE = "<question reference=\"../question\"/>";

	protected String brbTransactionId;

	/**
	 * Gets the value of the BRB transactionId property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getBrbTransactionId()
	{
		return brbTransactionId;
	}

	public BRBIdentityExamBridge doRequest(BRBServletMediator requestMediator) throws Exception
	{
		String sMethod = "[doRequest()]";
		log.info(sMethod);

		// Define body objects
		RequestBody requestBody = new RequestBody();
		ResponseBody responseBody = new ResponseBody();

		WebICScoreIdentityExamResponse response = null;
		BRBIdentityExamBridge brbIdentityExam = null;

		// Create Score WS proxy
		AccountAcquisitionPortalProxy accountApplicationProxy = (AccountAcquisitionPortalProxy) new AccountApplicationProxyBuilder().createWebServicesPortalProxy();

		try
		{
			// Save internal transaction id
			brbTransactionId = requestMediator.getBrbTransactionId();

			// Form request body
			String requestBodyString = getFormedScoreIdentityExamRequest(requestMediator);

			// Set up request body
			requestBody.setRequestBody(requestBodyString);

			// Sent request and get response
			responseBody = accountApplicationProxy.processRequest((new GenericObjectsHelper()).createMessageHeader(MessageType.TU_AUTHENTICATION_EXAM_IDENTITY, getBrbTransactionId()), requestBody);

			// Process response
			response = deserializeResponse(responseBody);

			// Create proxy class
			brbIdentityExam = new BRBIdentityExamBridge(response.getIdentityExam(), response.getResult(), getBrbTransactionId());

			// Save BRBIdentityExamBridge object internal state
			new ScoreIdentityExamMemento().saveState(brbIdentityExam, getResponseBody(responseBody));

			if (!brbIdentityExam.doesFourthQuestionExist())
			{
				try
				{
					// Call AccountAppication flow
					brbIdentityExam = new AccountApplicationHelper().doRequest(getBrbTransactionId());
				}
				catch (Exception ex)
				{
					log.warning(sMethod + " Exception during calling AccountAppication flow: " + ex.getMessage());
					ex.printStackTrace();
					
					brbIdentityExam = null;
				}
			}
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
			// Call AccountAppication flow
			brbIdentityExam = new AccountApplicationHelper().doRequest(getBrbTransactionId());
		}

		return brbIdentityExam;
	}

	private String getFormedScoreIdentityExamRequest(BRBServletMediator requestMediator) throws Exception
	{
		String sMethod = "[getFormedScoreIdentityExamRequest()]";
		log.info(sMethod);

		ScoreIdentityExamAdapter scoreIdentityExamAdapter = new ScoreIdentityExamAdapter();

		// Adapt BRBWeb client request
		BRBIdentityExamBridge brbIdentityExamBridge = scoreIdentityExamAdapter.convertRequest(requestMediator);

		new FourthQuestionReplacementStrategy().replaceFourthQuestionRedundantData(brbIdentityExamBridge);

		WebICScoreIdentityExamRequest populatedScoreIdentityExamRequest = scoreIdentityExamAdapter.adaptRequest(brbIdentityExamBridge);

		String formedScoreIdentityExamRequest = serializeWebICScoreIdentityExamRequest(populatedScoreIdentityExamRequest);

		// Validate request
		validateUserRequest(formedScoreIdentityExamRequest, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());

		String encodedScoreIdentityExamRequestBody = org.apache.commons.lang3.StringEscapeUtils.escapeXml(formedScoreIdentityExamRequest);

		return encodedScoreIdentityExamRequestBody;
	}

	public void validateUserRequest(String request, String schemaLocation) throws ValidatorException
	{
		String requestCopy = new String(request);
		ValidatorManager manager = new ValidatorManager(schemaLocation);
		// need to attach header tag to that request
		requestCopy = manager.attachHeaderTagToRequstBody(requestCopy);
		// need to add xml namespace for Root element in XML document
		requestCopy = manager.attachNameSpaceTagToRequstBody(requestCopy);
		manager.validate(requestCopy);
	}

	private WebICScoreIdentityExamResponse deserializeResponse(ResponseBody responseBody) throws Exception
	{
		String sMethod = "[deserializeResponse()] ";
		log.info(sMethod);

		ResponseBodyType rawResponseBody = responseBody.getResponseBody();
		WebICScoreIdentityExamResponse result = null;

		if (rawResponseBody == null)
		{
			return result;
		}
		String xmlStr = responseBody.getResponseBody().getResultDocument();
		if (xmlStr == null)
		{
			return result;
		}
		log.info(sMethod + " xmlStr: \n" + xmlStr);

		try
		{
			String replacedXmlStr = xmlStr.replace(QUESTION_REFERENCE, EMPTY_STRING);
			result = deserializeWebICScoreIdentityExamResponse(replacedXmlStr);
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			throw e;
		}

		return result;
	}

	private String getResponseBody(ResponseBody responseBody)
	{
		return responseBody != null ? responseBody.getResponseBody().getResultDocument() : EMPTY_STRING;
	}

	private String serializeWebICScoreIdentityExamRequest(WebICScoreIdentityExamRequest webICScoreIdentityExamRequest) throws Exception
	{
		String sMethod = "[serializeWebICScoreIdentityExamRequest]";
		log.info(sMethod);

		String scoreIdentityExamSerializedValue = EMPTY_STRING;
		com.thoughtworks.xstream.XStream xstream = new com.thoughtworks.xstream.XStream();

		xstream.aliasType("question", Question.class);
		xstream.aliasType("answer", Answer.class);

		Map identityExamList = new HashMap();
		identityExamList.put("WebICScoreIdentityExamRequest", WebICScoreIdentityExamRequest.class);
		Iterator identityExamPairs = identityExamList.entrySet().iterator();
		while (identityExamPairs.hasNext())
		{
			Map.Entry entry = (Map.Entry) identityExamPairs.next();
			xstream.alias((String) entry.getKey(), (Class) entry.getValue());
		}
		scoreIdentityExamSerializedValue = xstream.toXML(webICScoreIdentityExamRequest);

		log.info(sMethod + "ScoreIdentityExam Request XML: \n" + scoreIdentityExamSerializedValue);

		return scoreIdentityExamSerializedValue;
	}

	private WebICScoreIdentityExamResponse deserializeWebICScoreIdentityExamResponse(String xmlStr)
	{
		String sMethod = "[deserializeWebICScoreIdentityExamResponse] ";
		log.info(sMethod);

		log.info(sMethod + "xmlStr:\n" + xmlStr);

		WebICScoreIdentityExamResponse scoreIdentityExamResponse = new WebICScoreIdentityExamResponse();
		XStream xstream = new XStream(new DomDriver());

		xstream.alias("WebICScoreIdentityExamResponse", WebICScoreIdentityExamResponse.class);
		xstream.aliasType("identityExam", IdentityExam.class);
		xstream.aliasType("question", Question.class);
		xstream.aliasType("answer", Answer.class);

		scoreIdentityExamResponse = (WebICScoreIdentityExamResponse) xstream.fromXML(xmlStr);

		return scoreIdentityExamResponse;
	}
}
