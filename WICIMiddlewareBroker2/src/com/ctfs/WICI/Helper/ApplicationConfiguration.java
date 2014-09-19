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
		String sMethod="com.ctfs.WICI.Helper.ApplicationConfiguration.initialize()";
		log.info(sMethod+ " Entry");
	
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
			log.info(sMethod+" Exit");
		}
	}
	
	public static boolean isInitialized()
	{
		return initializationStatus;
	}
	
	
	public static void readApplicationConfiguration()
	{
		String sMethod="com.ctfs.WICI.Helper.ApplicationConfiguration.readApplicationConfiguration()";
		log.info(sMethod+ " Entry");
		try
		{
			if (! initializationStatus)
			{
				String appConfiguration = System.getProperty("application.configuration.location");
				if (appConfiguration != null)
					log.info("Configuring application based on settings located in <" + appConfiguration + ">");
				else
					throw new ConfigurationException("System property <application.configuration.location> has not been set");
			
				initialize(appConfiguration);
				log.info(sMethod+" Exit");
			}
		}
		catch(Exception e)
		{
			log.warning("Application Configuration could not be loaded" + " Exception: " + e.getMessage());
			e.printStackTrace();
		}
	}
	
	public static Map getCategoryKeys(String category) 
	{
		String sMethod="com.ctfs.WICI.Helper.ApplicationConfiguration.getCategoryKeys()";
		log.info(sMethod+ " Entry");
		Map rc = null;
		try
		{
			rc = theConfig.getCategoryKeys(category);
		}
		catch(ConfigurationException e)
		{
			e.printStackTrace();
		}
		log.info(sMethod+" Exit");
		return rc;
	}
	
	public static String getCategoryKeyValue(String category, String key)
	{
		String sMethod="com.ctfs.WICI.Helper.ApplicationConfiguration.getCategoryKeyValue()";
		log.info(sMethod+ " Entry");
		String rc = null;
		try
		{
			rc = theConfig.getCategoryKeyValue(category, key);
		}
		catch(ConfigurationException e)
		{
			e.printStackTrace();
		}
		log.info(sMethod+" Exit");
		return rc;
	}
	
	public static List getCategorys()
	{
		String sMethod="com.ctfs.WICI.Helper.ApplicationConfiguration.getCategorys()";
		log.info(sMethod+ " Entry");
		List rc = null;
		try
		{
			rc = theConfig.getCategorys();
		}
		catch(ConfigurationException e)
		{
			e.printStackTrace();
		}
		log.info(sMethod+" Exit");
		return rc;
	}
}
