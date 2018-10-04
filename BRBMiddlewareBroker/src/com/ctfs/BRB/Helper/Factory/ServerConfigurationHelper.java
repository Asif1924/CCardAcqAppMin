package com.ctfs.BRB.Helper.Factory;

import java.util.logging.Logger;

public class ServerConfigurationHelper
{
	static Logger log = Logger.getLogger(ServerConfigurationHelper.class.getName());

	private ServerConfigurationFactory configurationFactory;
	
	public ServerConfigurationHelper()
	{
		configurationFactory = new ServerConfigurationFactory();		
	}
	
	public ServerConfigurationHelper(ServerConfigurationFactory serverConfigurationFactory)
	{
		configurationFactory = serverConfigurationFactory;		
	}
	
	public String createServerTimeoutSetting() throws Exception
	{
		String sMethod = "[createServerSetting]";
		log.info(sMethod + "::Called.");

		String serverTimeout = "";
		
		try
		{	
			serverTimeout = configurationFactory.getPropertyFromConfigurationFileforSS();
		}
		catch (Exception e)
		{
			log.info(sMethod + "::Exception::" + e.getMessage());			
			throw e;
		}

		return serverTimeout;
	}

	public boolean createIgnoreEmailServiceSetting() throws Exception
	{
		String sMethod = "[createIgnoreEmailServiceSetting]";
		log.info(sMethod + "::Called.");

		return Boolean.parseBoolean(configurationFactory.getIgnoreEmailServiceProperty());
	}
	// US4580
	public String createStoreIndicatorStringSetting(String StorIndicatorArg) throws Exception{
		String sMethod = "[createStoreIndicatorStringSetting]";
		log.info(sMethod + "::Called.");

		String storeIndicator = "";
		
		try
		{	
			storeIndicator = configurationFactory.getPropertyFromStoreIdConfigurationFile(StorIndicatorArg);
		}
		catch (Exception e)
		{
			log.info(sMethod + "::Exception::" + e.getMessage());			
			throw e;
		}

		return storeIndicator;
	}
		
}
