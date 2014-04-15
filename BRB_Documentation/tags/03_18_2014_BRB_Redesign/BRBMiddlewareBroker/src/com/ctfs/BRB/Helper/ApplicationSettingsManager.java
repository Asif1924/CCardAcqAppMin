package com.ctfs.BRB.Helper;

import java.util.Properties;
import java.util.logging.Logger;
import com.ctfs.BRB.Resources.ResourceHelper;

public class ApplicationSettingsManager
{
	static Logger log = Logger.getLogger(ApplicationSettingsManager.class.getName());
	private static volatile ApplicationSettingsManager instance = null;
	private static final String AppSettingsFileName = "/config/appConfig.properties";
	private static final String EmailService_UserName = "emailService.username";
	private static final String EmailService_UserPwd = "emailService.password";
	private static final String EmailService_ClientId = "emailService.clientId";	
	private static final String EMPTY_STRING = "";
	private static final String TokenizationService_AgentIP = "tokenizationService.agentIPAddress";
	private static final String DecryptionKeyStoreFileName = "decryption.keystoreFilename";

	protected Properties appProperties;

	private ApplicationSettingsManager()
	{
		appProperties = new Properties();

		loadApplicationSettings();
	}

	public static ApplicationSettingsManager getInstance()
	{
		if (instance == null)
		{
			synchronized (ApplicationSettingsManager.class)
			{
				if (instance == null)
				{
					instance = new ApplicationSettingsManager();
				}
			}
		}
		return instance;
	}

	/**
	 * @return the appProperties
	 */
	public Properties getAppProperties()
	{
		return appProperties;
	}

	public String getEmailServiceUserName()
	{
		validateAppProperties();
		return appProperties.getProperty(EmailService_UserName, EMPTY_STRING);
	}

	public String getEmailServiceUserPwd()
	{
		validateAppProperties();
		return appProperties.getProperty(EmailService_UserPwd, EMPTY_STRING);
	}	

	public String getEmailServiceClientId()
	{
		validateAppProperties();
		return appProperties.getProperty(EmailService_ClientId, EMPTY_STRING);
	}	

	public String getTokenizationServiceAgentIP()
	{
		validateAppProperties();
		return appProperties.getProperty(TokenizationService_AgentIP, EMPTY_STRING);
	}

	protected void loadApplicationSettings()
	{
		String sMethod = "[loadApplicationSettings] ";
		log.info(sMethod + "called...");

		try
		{
			// Load a properties file from class path, inside static method
			appProperties.load(ResourceHelper.getInstance().loadResourceAsStream(AppSettingsFileName));
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
		}
	}

	protected void validateAppProperties()
	{
		if (appProperties == null)
		{
			throw new IllegalArgumentException("Invalid 'AppProperties' parameter!");
		}
	}

	public String getDecryptionKeyStoreFileName()
	{
		validateAppProperties();
		return appProperties.getProperty(DecryptionKeyStoreFileName, EMPTY_STRING);
	}
}
