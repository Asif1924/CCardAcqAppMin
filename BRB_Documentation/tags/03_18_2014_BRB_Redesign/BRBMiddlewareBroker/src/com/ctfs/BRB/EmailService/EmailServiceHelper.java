package com.ctfs.BRB.EmailService;

import java.util.List;
import java.util.logging.Logger;

import javax.xml.ws.Binding;
import javax.xml.ws.BindingProvider;
import javax.xml.ws.handler.Handler;

import com.ctfs.BRB.Helper.Factory.EmailServiceProxyBuilder;
import com.exacttarget.wsdl.partnerapi.Attribute;
import com.exacttarget.wsdl.partnerapi.ClientID;
import com.exacttarget.wsdl.partnerapi.CreateRequest;
import com.exacttarget.wsdl.partnerapi.CreateResponse;
import com.exacttarget.wsdl.partnerapi.ObjectFactory;
import com.exacttarget.wsdl.partnerapi.PartnerAPI;
import com.exacttarget.wsdl.partnerapi.Soap;
import com.exacttarget.wsdl.partnerapi.Subscriber;
import com.exacttarget.wsdl.partnerapi.TriggeredSend;
import com.exacttarget.wsdl.partnerapi.TriggeredSendDefinition;
import com.google.gson.Gson;

public class EmailServiceHelper
{
	static final Logger log = Logger.getLogger(EmailServiceHelper.class.getName());
	static final String EMPTY_STRING = "";
	protected final Soap emailWSClient;
	protected final CustomerEmailModel customerEmailModel;
	protected final EmailAuthorizationModel authorizationModel;

	public EmailServiceHelper(EmailAuthorizationModel emailAuthorizationModel, CustomerEmailModel customerEmailModel) throws Exception
	{
		PartnerAPI service = (PartnerAPI) new EmailServiceProxyBuilder().createWebServicesPortalProxy();

		emailWSClient = service.getSoap();

		validateCustomerEmailModel(customerEmailModel);
		validateAuthorizationModel(emailAuthorizationModel);

		this.authorizationModel = emailAuthorizationModel;
		this.customerEmailModel = customerEmailModel;

		initializeSoapClient();
	}

	protected void initializeSoapClient()
	{
		String sMethod = "[initializeSoapClient]::";
		log.info(sMethod + " called!");

		BindingProvider bindingProvider = (BindingProvider) emailWSClient;

		Binding binding = bindingProvider.getBinding();
		List<Handler> handlers = binding.getHandlerChain();
		handlers.add(new ExactTargetAuthenticationHandler(authorizationModel.getUsername(), authorizationModel.getPassword()));
		binding.setHandlerChain(handlers);
	}

	public CreateResponse sendEmail()
	{
		String sMethod = "[sendEmail]::";
		log.info(sMethod + " called!");

		CreateResponse response = null;
		try
		{
			TriggeredSendDefinition sendDefinition = new TriggeredSendDefinition();
			sendDefinition.setCustomerKey(customerEmailModel.getCustomerKey());

			// Define TriggeredSend
			TriggeredSend triggeredSend = new TriggeredSend();

			// Create subscribers
			createSubscribers(triggeredSend.getSubscribers());
			triggeredSend.setTriggeredSendDefinition(sendDefinition);

			// Set client id
			ClientID clnId = new ClientID();
			clnId.setID(customerEmailModel.getClientId());
			triggeredSend.setClient(clnId);

			CreateRequest request = new CreateRequest();
			request.getObjects().add(triggeredSend);

			Gson gson = new Gson();
			String jsonRequest = gson.toJson(triggeredSend, TriggeredSend.class);

			log.info(sMethod + "::REQUEST::" + jsonRequest);

			response = emailWSClient.create(request);
		}
		catch (final Exception e)
		{
			log.warning(sMethod + "Failed to send email via ExactTarget!" + e.getMessage());
		}

		return response;
	}

	protected List<Subscriber> createSubscribers(final List<Subscriber> subscribers)
	{
		String sMethod = "[createSubscribers] ";
		log.info(sMethod + " called!");

		List<String> emails = customerEmailModel.getEmails();

		if (subscribers == null || emails == null)
		{
			throw new IllegalArgumentException("Invalid 'Subscribers' or 'Emails' parameter!");
		}

		try
		{
			for (String email : emails)
			{
				ObjectFactory objectFactory = new ObjectFactory();
				Subscriber subscriber = objectFactory.createSubscriber();

				createAttributesForSubscriber(subscriber);
				subscriber.setEmailAddress(email);
				subscriber.setSubscriberKey(email);

				subscribers.add(subscriber);
			}
		}
		catch (Exception e)
		{
			log.warning(sMethod + "Failed to send email via ExactTarget!" + e.getMessage());
		}

		return subscribers;
	}

	protected Subscriber createAttributesForSubscriber(final Subscriber subscriber)
	{
		String sMethod = "[createAttributes] ";
		log.info(sMethod + " called!");

		List<Attribute> attributes = customerEmailModel.getAttributeCollection();

		if (subscriber == null || attributes == null)
		{
			throw new IllegalArgumentException("Invalid 'Subscriber' or 'Attributes' parameter!");
		}

		for (Attribute attribute : attributes)
		{
			subscriber.getAttributes().add(attribute);
		}

		return subscriber;
	}

	protected void validateCustomerEmailModel(CustomerEmailModel customerEmailModel)
	{
		if (customerEmailModel == null || !customerEmailModel.isModelValid())
		{
			throw new IllegalArgumentException("Invalid 'customerEmailModel' parameter!");
		}
	}

	protected void validateAuthorizationModel(EmailAuthorizationModel authorizationModel)
	{
		if (authorizationModel == null || !authorizationModel.isModelValid())
		{
			throw new IllegalArgumentException("Invalid 'authorizationModel' parameter!");
		}
	}
}