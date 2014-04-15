package com.ctfs.BRB.Helper.Factory;

import java.util.logging.Logger;
import javax.xml.namespace.QName;

public class AccountApplicationConfigurationFactory extends ConfigurationFactory
{
	static Logger log = Logger.getLogger(AccountApplicationConfigurationFactory.class.getName());
	protected final static String ENDPOINT_PROPERTY_NAME = "accountApplicationWebServiceEndpoint";
	protected final static String SERVICE_NAMESPACE = "http://www.ctc.ctfs.channel.com/WebICGateway/";
	protected final static String SERVICE_NAME = "WebICGateway";

	@Override
	public QName getEndpointServiceName()
	{
		String sMethod = "[getEndpointServiceName]";
		log.info(sMethod + "::SERVICE-NAMESPACE::" + SERVICE_NAMESPACE + "::SERVICE-NAME::" + SERVICE_NAME);

		return new QName(SERVICE_NAMESPACE, SERVICE_NAME);
	}

	@Override
	public String getPropertyName()
	{
		String sMethod = "[getPropertyName]";
		log.info(sMethod + "::ENDPOINT-PROPERTY-NAME::" + ENDPOINT_PROPERTY_NAME);

		return ENDPOINT_PROPERTY_NAME;
	}
}