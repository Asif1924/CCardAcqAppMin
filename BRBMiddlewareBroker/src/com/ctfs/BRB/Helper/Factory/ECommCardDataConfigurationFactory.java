package com.ctfs.BRB.Helper.Factory;

import java.util.logging.Logger;

import javax.xml.namespace.QName;

public class ECommCardDataConfigurationFactory extends ConfigurationFactory
{
	static Logger log = Logger.getLogger(ECommCardDataConfigurationFactory.class.getName());
	protected final static String ENDPOINT_PROPERTY_NAME = "eCommCardDataWebServiceEndpoint_";
	protected final static String SERVICE_NAMESPACE = "http://persistservice.cantire.com/";
	protected final static String SERVICE_NAME = "PersistService";
	private String requestingSystem;

	public ECommCardDataConfigurationFactory(String requestingSystem)
	{
		this.requestingSystem = requestingSystem;
	}

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
		log.info(sMethod + "::ENDPOINT-PROPERTY-NAME::" + ENDPOINT_PROPERTY_NAME + ", ::REQUESTINGSYSTEM::" + requestingSystem);

		return ENDPOINT_PROPERTY_NAME + requestingSystem;
	}
}
