package com.ctfs.BRB.Helper.Factory;

import java.util.logging.Logger;
import javax.xml.namespace.QName;

public class AccountApplicationConfigurationFactory extends ConfigurationFactory
{
	static Logger log = Logger.getLogger(AccountApplicationConfigurationFactory.class.getName());
	protected final static String ENDPOINT_PROPERTY_NAME = "accountApplicationWebServiceEndpoint";
	protected final static String SERVICE_NAMESPACE = "http://www.ctc.ctfs.channel.com/WebICGateway/";
	protected final static String SERVICE_NAME = "WebICGateway";
	
	protected final static String ENDPOINT_PROPERTY_NAME_SS = "accountApplicationWebServiceEndpointforSS";
	protected final static String SERVICE_NAMESPACE_SS = "http://web.sharedservices.ctfs.com/SharedWebServices/";
	protected final static String SERVICE_NAME_SS = "SharedWebServices";

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
	
	
	@Override
	public QName getEndpointServiceNameforSS()
	{
		String sMethod = "[getEndpointServiceNameforSS]";
		log.info(sMethod + "::SERVICE-NAMESPACE-SS::" + SERVICE_NAMESPACE_SS + "::SERVICE-NAME-SS::" + SERVICE_NAME_SS);

		return new QName(SERVICE_NAMESPACE_SS, SERVICE_NAME_SS);
	}

	@Override
	public String getPropertyNameforSS()
	{
		String sMethod = "[getPropertyNameforSS]";
		log.info(sMethod + "::ENDPOINT-PROPERTY-NAME-SS::" + ENDPOINT_PROPERTY_NAME_SS);

		return ENDPOINT_PROPERTY_NAME_SS;
	}

}