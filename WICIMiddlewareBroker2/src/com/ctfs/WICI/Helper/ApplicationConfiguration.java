package com.ctfs.WICI.Helper;

import java.util.List;
import java.util.Map;
import java.util.logging.Logger;


public class ApplicationConfiguration 
{
	static Logger log = Logger.getLogger(ApplicationConfiguration.class.getName());
	private static ConfigurationReader theConfig = new ConfigurationReader();
	private static boolean initializationStatus = false;
	
	public synchronized static void initialize(String configFile) throws ConfigurationException
	{
		log.info("ApplicationConfiguration.initialize() Entry");
	
		if (!initializationStatus)
		{
			try
			{
				theConfig.setConfigFile(configFile);
				theConfig.loadConfiguration();
			}
			catch(ConfigurationException ce)
			{
				ce.printStackTrace();
				throw ce;
			}
			initializationStatus = true;
			log.info("ApplicationConfiguration.initialize() Exit");
		}
	}
	
	public static boolean isInitialized()
	{
		return initializationStatus;
	}
	
	
	public static void readApplicationConfiguration()
	{
		log.info("ApplicationConfiguration.readApplicationConfiguration Entry");
		try
		{
			if (! initializationStatus)
			{
				String appConfiguration = System.getProperty("application.configuration.location");
				if (appConfiguration != null)
					log.info("Configuring application based on settings located in <" + CWE117Fix.encodeCRLF(appConfiguration) + ">");
				else
					throw new ConfigurationException("System property <application.configuration.location> has not been set");
			
				initialize(appConfiguration);
				log.info("ApplicationConfiguration.readApplicationConfiguration Exit");
			}
		}
		catch(Exception e)
		{
			log.warning("Application Configuration could not be loaded" + " Exception: " + CWE117Fix.encodeCRLF(e.getMessage()));
			e.printStackTrace();
		}
	}
	
	public static Map getCategoryKeys(String category) 
	{
		log.info("ApplicationConfiguration.getCategoryKeys Entry");
		Map rc = null;
		try
		{
			rc = theConfig.getCategoryKeys(category);
		}
		catch(ConfigurationException e)
		{
			e.printStackTrace();
		}
		log.info("ApplicationConfiguration.getCategoryKeys Exit");
		return rc;
	}
	
	public static String getCategoryKeyValue(String category, String key)
	{
		log.info( "ApplicationConfiguration.getCategoryKeyValue Entry");
		String rc = null;
		try
		{
			rc = theConfig.getCategoryKeyValue(category, key);
		}
		catch(ConfigurationException e)
		{
			e.printStackTrace();
		}
		log.info("ApplicationConfiguration.getCategoryKeyValue Exit");
		return rc;
	}
	
	public static List getCategorys()
	{
		log.info("ApplicationConfiguration.getCategorys Entry");
		List rc = null;
		try
		{
			rc = theConfig.getCategorys();
		}
		catch(ConfigurationException e)
		{
			e.printStackTrace();
		}
		log.info("ApplicationConfiguration.getCategorys Exit");
		return rc;
	}
}
