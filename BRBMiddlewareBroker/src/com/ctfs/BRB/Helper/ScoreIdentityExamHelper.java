package com.ctfs.BRB.Helper;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.logging.Logger;

import com.ctc.ctfs.channel.sharedservices.ServiceRequest;
import com.ctc.ctfs.channel.sharedservices.ServiceResponse;
import com.ctc.ctfs.channel.sharedservices.SharedWebServicesSOAPProxy;
import com.ctc.ctfs.channel.webicidentityexamination.Answer;
import com.ctc.ctfs.channel.webicidentityexamination.IdentityExam;
import com.ctc.ctfs.channel.webicidentityexamination.Question;
import com.ctc.ctfs.channel.webicidentityexamination.WebICScoreIdentityExamRequest;
import com.ctc.ctfs.channel.webicidentityexamination.WebICScoreIdentityExamResponse;
import com.ctfs.BRB.Helper.Factory.AccountApplicationProxyBuilder;
import com.ctfs.BRB.Helper.Factory.ValidatorException;
import com.ctfs.BRB.Model.BRBIdentityExamBridge;
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
		
			ServiceRequest serviceRequest = new ServiceRequest();
			ServiceResponse serviceResponse = new ServiceResponse();

			WebICScoreIdentityExamResponse response = null;
			BRBIdentityExamBridge brbIdentityExam = null;

			// Create Score WS proxy
			SharedWebServicesSOAPProxy sharedWebServicesSOAPProxy = (SharedWebServicesSOAPProxy) new AccountApplicationProxyBuilder().createSharedWebServicesPortalProxy();

			try
			{
				// Save internal transaction id
				brbTransactionId = requestMediator.getBrbTransactionId();

				// Form request body
				String requestBodyString = getFormedScoreIdentityExamRequest(requestMediator);

				// Set up request body
				serviceRequest.setMethodName("scoreIdentityExam");
				serviceRequest.setServiceArgument1(requestBodyString);
				serviceRequest.setServiceName("CTFSWebICGatewayService");
				
				log.info("serviceRequest=" + serviceRequest.getServiceArgument1());
				
				serviceResponse = sharedWebServicesSOAPProxy.processRequest(serviceRequest);
				log.info("serviceResponse=" + serviceResponse.getPassFail()+","  + serviceResponse.getResponseArgument1());
				
				response = deserializeResponseforSS(serviceResponse);

				// Create proxy class
				brbIdentityExam = new BRBIdentityExamBridge(response.getIdentityExam(), response.getResult(), getBrbTransactionId());

				// Save BRBIdentityExamBridge object internal state
				new ScoreIdentityExamMemento().saveState(brbIdentityExam, serviceResponse.getResponseArgument1());

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

	
	
	private WebICScoreIdentityExamResponse deserializeResponseforSS(ServiceResponse serviceResponse) throws Exception
	{
		String sMethod = "[deserializeResponseforSS()] ";
		log.info(sMethod);

		String xmlStr = serviceResponse.getResponseArgument1();
		WebICScoreIdentityExamResponse result = null;
		
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
	
	private WebICScoreIdentityExamResponse deserializeWebICScoreIdentityExamResponseforSS(String xmlStr)
	{
		String sMethod = "[deserializeWebICScoreIdentityExamResponseforSS] ";
		log.info(sMethod);

		log.info(sMethod + "xmlStr:\n" + xmlStr);

		WebICScoreIdentityExamResponse scoreIdentityExamResponse = new WebICScoreIdentityExamResponse();
		XStream xstream = new XStream(new DomDriver());

		xstream.alias("WebICScoreIdentityExamResponse", WebICScoreIdentityExamResponse.class);
		xstream.aliasType("identityExam", IdentityExam.class);
		xstream.aliasType("question", Question.class);
		xstream.aliasType("answer", Answer.class);
		xstream.aliasType("com.ctfs.webic.ioclasses.WebICQuestionBO", Question.class);
		xstream.aliasType("com.ctfs.webic.ioclasses.WebICAnswerBO", Answer.class);
		
		scoreIdentityExamResponse = (WebICScoreIdentityExamResponse) xstream.fromXML(xmlStr);

		return scoreIdentityExamResponse;
	}
}
