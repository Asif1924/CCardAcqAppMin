package com.ctfs.BRB.Helper.Factory;

import java.util.logging.Logger;

import javax.xml.namespace.QName;

public class ServerConfigurationFactory extends ConfigurationFactory
{
	static Logger log = Logger.getLogger(ServerConfigurationFactory.class.getName());
	protected final static String PROPERTY_NAME = "serverTimeout";
	protected final static String IGNORE_EMAIL_SERVICE = "ignoreEmailService";

	@Override
	public QName getEndpointServiceNameforSS()
	{
		return null;
	}

	@Override
	public String getPropertyNameforSS()
	{
		String sMethod = "[getPropertyNameforSS]";
		log.info(sMethod + "::PROPERTY_NAME::" + PROPERTY_NAME);

		return PROPERTY_NAME;
	}

	public String getIgnoreEmailServiceProperty()
	{
		String sMethod = "[getIgnoreEmailServicePropertyName]";
		log.info(sMethod + "::IGNORE_EMAIL_SERVICE::" + IGNORE_EMAIL_SERVICE);

		String ignoreEmailServiceSetting = "false"; // false is the default if
													// the property doesn't
													// exist

		try
		{
			ignoreEmailServiceSetting = getPropertyFromConfigurationFile(IGNORE_EMAIL_SERVICE);
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
		}

		return ignoreEmailServiceSetting;
	}
}