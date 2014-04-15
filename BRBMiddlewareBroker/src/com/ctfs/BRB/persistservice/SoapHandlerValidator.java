package com.ctfs.BRB.persistservice;

import java.io.StringWriter;
import java.util.logging.Logger;

import javax.xml.transform.Source;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.TransformerFactoryConfigurationError;
import javax.xml.transform.stream.StreamResult;
import javax.xml.ws.LogicalMessage;
import javax.xml.ws.WebServiceException;
import javax.xml.ws.handler.LogicalHandler;
import javax.xml.ws.handler.LogicalMessageContext;
import javax.xml.ws.handler.MessageContext;

import com.ctfs.BRB.Helper.ValidatorManager;
import com.ctfs.BRB.Helper.Factory.ValidatorException;
import com.ctfs.BRB.Resources.ResourceHelper;

public class SoapHandlerValidator implements LogicalHandler<LogicalMessageContext>
{
	private Logger log4j = Logger.getLogger(SoapHandlerValidator.class.getCanonicalName());

	public void validateUserRequest(String request, String schemaLocation) throws ValidatorException
	{
		ValidatorManager manager = new ValidatorManager(schemaLocation);
		manager.validate(request);
	}

	@Override
	public boolean handleMessage(LogicalMessageContext context)
	{
		Boolean isOutComeCall = (Boolean) context.get(MessageContext.MESSAGE_OUTBOUND_PROPERTY);
		// will validate only income calls methods of webservice
		if (isOutComeCall)
		{
			return Boolean.TRUE;
		}
		try
		{
			LogicalMessage message = context.getMessage();
			Source textForValidation = message.getPayload();
			StreamResult res = new StreamResult(new StringWriter());
			Transformer trans = TransformerFactory.newInstance().newTransformer();
			trans.transform(textForValidation, res);
			String xml = res.getWriter().toString();
			log4j.info(xml);
			validateUserRequest(xml, ResourceHelper.getInstance().getPersistServicePath());
			return Boolean.TRUE;
		}
		catch (ValidatorException e)
		{
			log4j.info(e.getMessage());
			throw new WebServiceException(e.getMessage());
		}
		catch (TransformerConfigurationException e)
		{
			log4j.info(e.getMessage());
			throw new WebServiceException(e.getMessage());
		}
		catch (TransformerFactoryConfigurationError e)
		{
			log4j.info(e.getMessage());
			throw new WebServiceException(e.getMessage());
		}
		catch (TransformerException e)
		{
			log4j.info(e.getMessage());
			throw new WebServiceException(e.getMessage());
		}

	}

	@Override
	public boolean handleFault(LogicalMessageContext context)
	{
		return false;
	}

	@Override
	public void close(MessageContext context)
	{

	}

}
