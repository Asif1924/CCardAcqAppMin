package com.ctfs.BRB.Helper.Factory;

import java.util.logging.Logger;
import javax.xml.namespace.QName;

public class EmailServiceConfigurationFactory extends ConfigurationFactory
{
	static Logger log = Logger.getLogger(EmailServiceConfigurationFactory.class.getName());
	protected final static String ENDPOINT_PROPERTY_NAME = "emailWebServiceEndpoint";
	protected final static String SERVICE_NAMESPACE = "http://exacttarget.com/wsdl/partnerAPI";
	protected final static String SERVICE_NAME = "PartnerAPI";

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