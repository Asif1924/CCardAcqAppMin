package com.ctfs.BRB.Helper;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctc.ctfs.channel.accountacquisition.AccountApplicationResponseType;
import com.ctc.ctfs.channel.sharedservices.ServiceRequest;
import com.ctc.ctfs.channel.sharedservices.ServiceResponse;
import com.ctc.ctfs.channel.sharedservices.SharedWebServicesSOAPProxy;
import com.ctfs.BRB.EmailService.CustomerEmailModel;
import com.ctfs.BRB.EmailService.EmailAuthorizationModel;
import com.ctfs.BRB.EmailService.EmailServiceHelper;
import com.ctfs.BRB.Helper.AppStateReporter.AccountApplicationStatus;
import com.ctfs.BRB.Helper.AppStateReporter.ErrorState;
import com.ctfs.BRB.Helper.Factory.AccountApplicationProxyBuilder;
import com.ctfs.BRB.Helper.Factory.ECommCardDataFactory;
import com.ctfs.BRB.Helper.Factory.ServerConfigurationHelper;
import com.ctfs.BRB.Helper.Factory.ValidatorException;
import com.ctfs.BRB.Helper.ecommcarddata.AbstractECommCardDataFacade;
import com.ctfs.BRB.Model.AccountApplicationRequestWrapper;
import com.ctfs.BRB.Model.AccountApplicationResponse;
import com.ctfs.BRB.Model.BRBIdentityExamBridge;
import com.ctfs.BRB.Model.WebIcMQRespVO;
import com.ctfs.BRB.Resources.ResourceHelper;
import com.ctfs.BRB.dblayer.interfaces.IAppTransactionTableEntity;
import com.ctfs.BRB.dblayer.interfaces.ICustomerTransactionTableEntity;
import com.ctfs.BRB.exceptions.BrbFlowException;
import com.exacttarget.wsdl.partnerapi.CreateResponse;

public class AccountApplicationHelper
{
	static Logger log = Logger.getLogger(AccountApplicationHelper.class.getName());
	static final String APPROVED_STATUS = "APPROVED";
	static final int ECOMCARDDATA_ATTEMPTS_NUMBER = 3;
	
	public BRBIdentityExamBridge doRequest(String brbTransactionId) throws Exception
	{
		String sMethod = "[doRequest] ";
		log.info(sMethod + "::Called.");
		
			log.info(sMethod + "::Called from Sharedservice.");
			ServiceRequest serviceRequest = new ServiceRequest();
			ServiceResponse serviceResponse = new ServiceResponse();
			AccountApplicationResponseType accountResponse = null;
			WebIcMQRespVO response = null;
			AccountApplicationRequestWrapper accountAppRequestWrapper = null;
			AccountApplicationResponse accountAppResponse = null;	
			BRBIdentityExamBridge brbIdentityExamBridge = null;
			try
			{
				IAppTransactionTableEntity appTransactionTableEntity = new BRBDBHelper().getFromApplicationTransactionTable(brbTransactionId);

				// Deserialize AccountApplication request wrapper
				accountAppRequestWrapper = new BRBGsonDecorator().getWrappedGson().fromJson(appTransactionTableEntity.getAccountAppData(), AccountApplicationRequestWrapper.class);

				// Set TU session id value
				accountAppRequestWrapper.getAccountApplicationRequest().setTUSessionID(appTransactionTableEntity.getSessionId());
				
				// Restore and set tuExamResult value
				String tuExamRes = getTUScoreResult(appTransactionTableEntity.getScoreIdentityExamResponse());

				// Set tuExamResult
				accountAppRequestWrapper.getAccountApplicationRequest().setTUExamResult(tuExamRes);
					
				SharedWebServicesSOAPProxy accountApplicationProxy = (SharedWebServicesSOAPProxy) new AccountApplicationProxyBuilder().createSharedWebServicesPortalProxy();

				String requestBodyString = serializeRequest(accountAppRequestWrapper.getAccountApplicationRequest());
				log.info(sMethod + requestBodyString);

				validateUserRequest(requestBodyString, ResourceHelper.getInstance().getValidationAccountApplicationPath());

				serviceRequest.setMethodName("processIcApplication");
				serviceRequest.setServiceArgument1(requestBodyString);
				serviceRequest.setServiceName("CTFSWebICGatewayService");
				log.info("serviceRequest=" + serviceRequest.getServiceArgument1());
				
				serviceResponse = accountApplicationProxy.processRequest(serviceRequest);
				log.info("serviceResponse=" + serviceResponse.getPassFail()+","  + serviceResponse.getResponseArgument1());
				
				response = deserializeResponseforSS(serviceResponse);

				// Map Account Application Response
				accountAppResponse = (new AccountApplicationResponse()).entityToModelforSS(response, brbTransactionId);

				brbIdentityExamBridge = new BRBIdentityExamBridge(accountAppResponse, brbTransactionId);
				
				// Report application state
				reportAppStateforSS(response, brbTransactionId);

				// Check response
				if(accountAppResponse.getAppStatus()!=null)
				{
					if (accountAppRequestWrapper.getAccountApplicationRequest().getChannelIndicator().equalsIgnoreCase("WP")) {
						if (!sendEmailToCustomer(accountAppRequestWrapper,accountAppResponse, response.getQueueName())) {
							throw new BrbFlowException("Send Email to the Customer operation failed");
						}
					}
				}
				if (accountAppResponse.isModelValid())
					{
					// Check result
					if (!callECommCardDataService(accountAppRequestWrapper, accountAppResponse))
					{
						throw new BrbFlowException("Comunicate with ECommCardData Web Service operation failed");
					}
				}
			}
			catch (BrbFlowException ex)
			{
				log.warning(sMethod + " BrbFlow Exception: " + ex.getMessage());

				// According CTCOFSMB-1363
				new AppStateReporter().reportState(brbTransactionId, AccountApplicationStatus.PENDING, null, null, null);
				throw ex;
			}
			catch (ValidatorException ex)
			{
				log.warning(sMethod + " Validator Exception: " + ex.getMessage());

				new AppStateReporter().reportState(brbTransactionId, null, null, null, ErrorState.XSDError);
				throw ex;
			}
			catch (Exception ex)
			{
				log.warning(sMethod + " General Exception: " + ex.getMessage());

				new AppStateReporter().reportState(brbTransactionId, null, null, null, ErrorState.OtherError);
				throw ex;
			}
			finally
			{			 
				// According to CTCOFSMB-1343
				new BRBDBHelper().deleteFromCustomerTransactionTable(brbTransactionId);
				
			}

			return brbIdentityExamBridge;
		}

	private void reportAppStateforSS(WebIcMQRespVO accountResponse, String transactionId)
	{
		String sMethod = "[reportAppStateforSS] ";
		log.info(sMethod + "::Called.");

		try
		{
			if (accountResponse.getAppStatus().equalsIgnoreCase(AccountApplicationStatus.APPROVED.toString()))
			{
				new AppStateReporter().reportState(transactionId, AccountApplicationStatus.APPROVED, null, null, null);
			}
			else if (accountResponse.getAppStatus().equalsIgnoreCase(AccountApplicationStatus.PENDING.toString()))
			{
				new AppStateReporter().reportState(transactionId, AccountApplicationStatus.PENDING, null, null, null);
			}
			else if (accountResponse.getAppStatus().equalsIgnoreCase(AccountApplicationStatus.DECLINED.toString()))
			{
				new AppStateReporter().reportState(transactionId, AccountApplicationStatus.DECLINED, null, null, null);
			}

		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
		}
	}

	public void validateUserRequest(String request, String schemaLocation) throws ValidatorException
	{
		String sMethod = "[validateUserRequest] ";
		log.info(sMethod + "::Called.");

		String requestCopy = new String(request);
		ValidatorManager manager = new ValidatorManager(schemaLocation);
		// need to attach header tag to that request
		requestCopy = manager.attachHeaderTagToRequstBody(requestCopy);
		// need to add xml namespace for Root element in XML document
		requestCopy = manager.attachNameSpaceTagToRequstBody(requestCopy);
		// StringReader reader = new StringReader(requestCopy);
		manager.validate(requestCopy);
	}

	public WebIcMQRespVO deserializeResponseforSS(ServiceResponse serviceResponse) throws Exception
	{
		String sMethod = "[deserializeResponseforSS] ";
		log.info(sMethod + "::Called.");

		WebIcMQRespVO result = null;

		String response = serviceResponse.getResponseArgument1();
		if (response == null)
		{
			return result;
		}

		try
		{
			result = (new GenericObjectsHelper()).deserializeXMLToAccountApplicationResponseObjectforSS(response);
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
		log.info(sMethod + "::Called.");

		return (new GenericObjectsHelper().accountApplicationSerialize(obj));
	}

	private boolean ignoreEmailSending()
	{
		String sMethod = "[ignoreEmailSending] ";
		log.info(sMethod + "::Called.");

		boolean ignoreEmailServiceSetting = false;
		try
		{
			ignoreEmailServiceSetting = new ServerConfigurationHelper().createIgnoreEmailServiceSetting();
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
		}

		return ignoreEmailServiceSetting;
	}

	protected boolean sendEmailToCustomer(AccountApplicationRequestWrapper accountRequestWrapper, AccountApplicationResponse accountAppResponse,String queueName) throws Exception
	{
		String sMethod = "[sendEmailToCustomer] ";
		log.info(sMethod + "::Called.");

		try
		{
			if (ignoreEmailSending())
			{
				log.info(sMethod + "IGNORING e-mail sending, ONLY FOR DEVELOPERS PURPOSE");
				return true;
			}

			AccountApplicationRequestType accountRequest = accountRequestWrapper.getAccountApplicationRequest();

			List<String> emails = new ArrayList<String>();
			emails.add(accountRequest.getCurrentEmailAddress());

			int clientId = Integer.parseInt(ApplicationSettingsManager.getInstance().getEmailServiceClientId());
			
			String appStatus=accountAppResponse.getAppStatus();
			if (queueName != null && queueName.equalsIgnoreCase("STOREID")) {
				appStatus = "STOREID";
			}
			log.info("queueName : "+queueName + "appStatus :"+appStatus);
			
			CustomerEmailModel customerEmailModel = new CustomerEmailModel();
			// US5242	Bill 134 - BRB - Updated emails
			customerEmailModel.initializeModel(accountAppResponse.getCreditLimit(), accountAppResponse.getApr(), accountAppResponse.getCashAPR(), accountRequest.getFirstName(),
					accountRequest.getLastName(), accountRequest.getInsuranceCode(), clientId, accountRequest.getPreferedLanguage(), emails, accountRequest.getRequestedProductType(),
					accountAppResponse.getLoyaltyMembershipNumber(),appStatus, accountRequest.getCurrentAddressLine1(),accountRequest.getCurrentAddressLine2(), accountRequest.getCurrentCity(), accountRequest.getCurrentProvince(),
					accountRequest.getCurrentPostalCode());

			String username = ApplicationSettingsManager.getInstance().getEmailServiceUserName();
			String password = ApplicationSettingsManager.getInstance().getEmailServiceUserPwd();
			EmailAuthorizationModel authorizationModel = new EmailAuthorizationModel(username, password);

			EmailServiceHelper emailServiceHelper = new EmailServiceHelper(authorizationModel, customerEmailModel);
			CreateResponse response = emailServiceHelper.sendEmail();

			return response != null && response.getOverallStatus() != null && response.getOverallStatus().toUpperCase().equals("OK");
		}
		catch (Exception ex)
		{
			log.warning(sMethod + " Exception: " + ex.getMessage());

			// According CTCOFSMB-1363
			throw new BrbFlowException(ex.getMessage());
		}
	}

	protected boolean callECommCardDataService(AccountApplicationRequestWrapper accountRequestWrapper, AccountApplicationResponse accountAppResponse) throws Exception
	{
		String sMethod = "[callECommCardDataService] ";
		log.info(sMethod + "::Called.");

		AbstractECommCardDataFacade eCommCardDataFacade = null;

		try
		{
			// Get RequestingSystem info by brbTransactionId from
			// CustomerTransaction table
			ICustomerTransactionTableEntity customerTransactionTblEntity = new BRBDBHelper().getFromCustomerTransactionTable(accountRequestWrapper.getBrbTransactionId());

			// Get needed eCommCardDataFacade instance
			eCommCardDataFacade = new ECommCardDataFactory().createECommCardDataFacade(customerTransactionTblEntity.getRequestingSystem());
		}
		catch (Exception ex)
		{
			log.warning(sMethod + " Exception: " + ex.getMessage());

			// According CTCOFSMB-1363
			throw new BrbFlowException(ex.getMessage());
		}

		// Do request
		return eCommCardDataFacade.doRequestRecurcive(accountRequestWrapper, accountAppResponse, ECOMCARDDATA_ATTEMPTS_NUMBER);
	}

	protected String getTUScoreResult(String ScoreIdentityExamResponse)
	{
		String sMethod = "[getTUScoreResult] ";
		log.info(sMethod + "::Called.");

		String decision = "E";

		try
		{ 
			XmlHelper xmlHelper = new XmlHelper();

			// Get the document's root XML node
			NodeList root = xmlHelper.convertStringToDocument(ScoreIdentityExamResponse).getChildNodes();

			// Navigate down the hierarchy to get to the WebICScoreIdentityExamResponse node
			Node response = xmlHelper.getNode("WebICScoreIdentityExamResponse", root);
			Node identityExam = xmlHelper.getNode("identityExam", response.getChildNodes());

			// Load the identityExam's data from the XML
			NodeList nodes = identityExam.getChildNodes();

			// Retrieve score
			decision = xmlHelper.getNodeValue("decision", nodes);
			
			if (ScoreIdentityExamDecisions.Passed.equalsNameIgnoreCase(decision) ||
					ScoreIdentityExamDecisions.Passed4ThQuestion.equalsNameIgnoreCase(decision)){
				decision = "Y";
			} else {
				decision = "F";
			} 
		}
		catch (Exception ex)
		{
			//ex.printStackTrace();
			log.warning(sMethod + " Exception: " + ex.getMessage());			
		}

		return decision;
	}
}
