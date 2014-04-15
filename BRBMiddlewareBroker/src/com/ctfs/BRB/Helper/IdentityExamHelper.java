package com.ctfs.BRB.Helper;

import java.util.logging.Logger;

import com.channel.ctfs.ctc.webicgateway.AccountAcquisitionPortalProxy;
import com.channel.ctfs.ctc.webicgateway.RequestBody;
import com.channel.ctfs.ctc.webicgateway.ResponseBody;
import com.channel.ctfs.ctc.webicgateway.ResponseBodyType;
import com.ctc.ctfs.channel.webicidentityexamination.WebICIdentityExamRequest;
import com.ctc.ctfs.channel.webicidentityexamination.WebICIdentityExamResponse;
import com.ctfs.BRB.Helper.Factory.AccountApplicationProxyBuilder;
import com.ctfs.BRB.Helper.Factory.ValidatorException;
import com.ctfs.BRB.Model.AccountApplicationRequestWrapper;
import com.ctfs.BRB.Model.BRBIdentityExamBridge;
import com.ctfs.BRB.Model.CreditCardApplicationData;
import com.ctfs.BRB.Model.MessageType;
import com.ctfs.BRB.Resources.ResourceHelper;
import com.ctfs.BRB.dblayer.ApplicationTransactionTableEntity;
import com.ctfs.BRB.dblayer.interfaces.IAppTransactionTableEntity;
import com.google.gson.Gson;

public class IdentityExamHelper
{
	static Logger log = Logger.getLogger(IdentityExamHelper.class.getName());

	protected String brbTransactionId;	

	public String getBrbTransactionId()
	{
		return brbTransactionId;
	}

	public BRBIdentityExamBridge doRequest(BRBServletMediator argMediator) throws Exception
	{
		String sMethod = "[doRequest]";
		log.info(sMethod + " Called...");
		
		RequestBody requestBody = new RequestBody();
		ResponseBody responseBody = new ResponseBody();

		WebICIdentityExamResponse response = null;
		BRBIdentityExamBridge brbIdentityExam = null;

		AccountAcquisitionPortalProxy accountApplicationProxy = (AccountAcquisitionPortalProxy) new AccountApplicationProxyBuilder().createWebServicesPortalProxy();

		try
		{
			brbTransactionId = argMediator.getBrbTransactionId();
			
			// Save AA request
			SaveAccountAppRequestData(argMediator);
			
			WebICIdentityExamRequest identityExamRequest = getWebICIdentityExamRequest(argMediator);
			String requestBodyString = serializeRequest(identityExamRequest);
			
			validateUserRequest(requestBodyString, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
			requestBody.setRequestBody(requestBodyString);
			responseBody = accountApplicationProxy.processRequest((new GenericObjectsHelper()).createMessageHeader(MessageType.TU_AUTHENTICATION_EXAM_IDENTITY, brbTransactionId), requestBody);
			response = deserializeResponse(responseBody);

			// Create proxy class
			brbIdentityExam = new BRBIdentityExamBridge(response.getIdentityExam(), brbTransactionId);			
			
			if (!brbIdentityExam.isIdentityExamModelValid()) {
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
						
			// Call AccountAppication flow
			brbIdentityExam = new AccountApplicationHelper().doRequest(getBrbTransactionId());
		}
		
		return brbIdentityExam;
	}
	
	private void SaveAccountAppRequestData(BRBServletMediator mediator) throws Exception
	{
		String sMethod = "[SaveAccountAppRequestData()] ";
		log.info(sMethod + " Called...");
		
		// Extract accountApplicationData
		CreditCardApplicationData ccData = new IdentityExamRequestHelper(mediator).getCreditCardApplicationData();  
		 		
		// Serialize AccountApplication request wrapper
		String accountApplicationRequestWrapperJson = new Gson().toJson(ccData.extractCreditCardData(), AccountApplicationRequestWrapper.class);
		
		// Insert data into table
		IAppTransactionTableEntity appTransactionTableEntity = new ApplicationTransactionTableEntity();
		appTransactionTableEntity.setTransactionId(getBrbTransactionId());
		appTransactionTableEntity.setAccountAppData(accountApplicationRequestWrapperJson);
		
		// Update table
		new BRBDBHelper().mergeIntoApplicationTransactionTable(appTransactionTableEntity);
	}

	public void validateUserRequest(String request, String schemaLocation) throws ValidatorException
	{
		String sMethod = "[validateUserRequest()] ";
		log.info(sMethod + " Called...");
		
		String requestCopy = new String(request);
		ValidatorManager manager = new ValidatorManager(schemaLocation);
		// need to attach header tag to that request
		requestCopy = manager.attachHeaderTagToRequstBody(requestCopy);
		// need to add xml namespace for Root element in XML document
		requestCopy = manager.attachNameSpaceTagToRequstBody(requestCopy);
		manager.validate(requestCopy);
	}

	private WebICIdentityExamRequest getWebICIdentityExamRequest(BRBServletMediator mediator) throws Exception
	{
		String sMethod = "[getWebICIdentityExamRequest()] ";
		log.info(sMethod + " Called...");
		
		IdentityExamHelperRequestTypeConverter idntExamTypeConverter = new IdentityExamHelperRequestTypeConverter();

		WebICIdentityExamRequest populatedIdentityExamRequest = idntExamTypeConverter.extractIdentityExamRequestParameters(mediator);

		return populatedIdentityExamRequest;
	}

	public WebICIdentityExamResponse deserializeResponse(ResponseBody responseBody) throws Exception
	{
		String sMethod = "[deserializeResponse] ";
		log.info(sMethod + " Called...");

		ResponseBodyType rawResponseBody = responseBody.getResponseBody();
		WebICIdentityExamResponse result = null;

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
			result = (new GenericObjectsHelper()).deserializeXMLToWebICIdentityExamResponseObject(xmlStr);
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			throw e;
		}
		return result;
	}

	public String serializeRequest(Object obj) throws Exception
	{
		String sMethod = "[serializeRequest] ";
		log.info(sMethod + " Called...");
		
		return (new GenericObjectsHelper().identityExamSerialize(obj));
	}
}