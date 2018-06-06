package com.ctfs.BRB.Helper.Factory;

import java.io.InputStream;
import java.util.Map;
import java.util.logging.Logger;

import javax.xml.namespace.QName;

import com.ctfs.BRB.Helper.ApplicationConfiguration;
import com.ctfs.BRB.Interfaces.IConfiguration;
import com.ctfs.BRB.Model.Configuration;

public abstract class ConfigurationFactory
{
	static Logger log = Logger.getLogger(ConfigurationFactory.class.getName());
	private static final String CONFIGURATION_PROPERTIES="BRB_ENVIROINMENT_CONFIGURATION";
	private static final String STORE_CONFIGURATION_PROPERTIES="BRB_ECOMM_STOREID_CONFIGURATION";
	/**
	 * This scaffolding is to allow proper unit tests
	 */
	private PathDataCreator resourcePath = new PathDataCreator()
	{
		protected final static String CONFIGURATION_FILE_PATH = "/WEB-INF/configuration.properties";

		@Override
		public InputStream getDataPathStream()
		{
			return ConfigurationFactory.class.getResourceAsStream(CONFIGURATION_FILE_PATH);
		}
	};

	protected final static String ENDPOINT_SUFFIX = "";
	static final String EMPTY_STRING = "";

	public abstract QName getEndpointServiceName();

	public abstract String getPropertyName();
	
	public abstract QName getEndpointServiceNameforSS();

	public abstract String getPropertyNameforSS();

	public IConfiguration createWebServicesEndpoint() throws Exception
	{
		String sMethod = "[createWebServicesEndpoint]";
		log.info(sMethod + "::Called!");

		IConfiguration conf = null;
		try
		{
			conf = new Configuration();
			String webservicesEndPoint = getPropertyFromConfigurationFile();
			conf.setWebservicesEndpoint(webservicesEndPoint);
			conf.setServiceName(getEndpointServiceName());
		}
		catch (Exception e)
		{
			log.info(sMethod + "::Exception::" + e.getMessage());
			e.printStackTrace();
			throw e;
		}

		log.info(sMethod + "::New Endpoint Address::" + conf.getWebservicesEndpoint());

		return conf;
	}
	
	public IConfiguration createWebServicesEndpointforSS() throws Exception
	{
		String sMethod = "[createWebServicesEndpointforSS]";
		log.info(sMethod + "::Called!");

		IConfiguration conf = null;
		try
		{
			conf = new Configuration();
			String webservicesEndPointforSS = getPropertyFromConfigurationFileforSS();
			conf.setWebservicesEndpointforSS(webservicesEndPointforSS);
			conf.setServiceNameforSS(getEndpointServiceNameforSS());
		}
		catch (Exception e)
		{
			log.info(sMethod + "::Exception::" + e.getMessage());
			e.printStackTrace();
			throw e;
		}

		log.info(sMethod + "::New Endpoint Address for SS::" + conf.getWebservicesEndpointforSS());

		return conf;
	}
	
		
	//US3538 BRB – Externalize BRBMiddlewareBroker configuration - back out
	/*
	protected String getPropertyFromConfigurationFile(String argPropertyName) throws Exception
	{
		String sMethod = "[getEndpointAddressFromConfigurationFile( " + argPropertyName + ")]";
		String propertyValue = null;
		InputStream configurationFile = null;
		try
		{
			// Define hash table for properties
			Properties properties = new Properties();

			// Get configuration file
			configurationFile = resourcePath.getDataPathStream();

			// Load properties list
			properties.load(configurationFile);

			// Get needed property
			propertyValue = properties.getProperty(argPropertyName, EMPTY_STRING);

			// Validate endpointProperty value
			validateEndpointPropertyValue(propertyValue);

			propertyValue += getEndpointSuffix();
		}
		catch (Exception e)
		{
			log.info(sMethod + "::Exception::" + e.getMessage());
			e.printStackTrace();
			throw e;
		}
		finally
		{
			if (configurationFile != null)
			{
				configurationFile.close();
			}
		}

		return propertyValue;		
	}
	*/
	/*
	protected String getPropertyFromConfigurationFile() throws Exception
	{
		String sMethod = "[getEndpointAddressFromConfigurationFile]";
		String propertyValue = null;
		InputStream configurationFile = null;
		try
		{
			// Define hash table for properties
			Properties properties = new Properties();

			// Get configuration file
			configurationFile = resourcePath.getDataPathStream();

			// Load properties list
			properties.load(configurationFile);

			// Get needed property
			propertyValue = properties.getProperty(getPropertyName(), EMPTY_STRING);

			// Validate endpointProperty value
			validateEndpointPropertyValue(propertyValue);

			propertyValue += getEndpointSuffix();
		}
		catch (Exception e)
		{
			log.info(sMethod + "::Exception::" + e.getMessage());
			e.printStackTrace();
			throw e;
		}
		finally
		{
			if (configurationFile != null)
			{
				configurationFile.close();
			}
		}

		return propertyValue;
	}

	
	*/
	
	protected String getPropertyFromConfigurationFile(String argPropertyName) throws Exception
	{
		String sMethod = "[getEndpointAddressFromConfigurationFile( " + argPropertyName + ")]";
		String propertyValue = null;  
		
		
		try
		{			
			ApplicationConfiguration.readApplicationConfiguration();
			Map enviroinmentMap = ApplicationConfiguration.getCategoryKeys(CONFIGURATION_PROPERTIES);
			log.info("getPropertyFromConfigurationFile( " + argPropertyName + ") : "+ enviroinmentMap.get(argPropertyName));
				
			propertyValue = enviroinmentMap.get(argPropertyName).toString();// getEndpointFromConfigurationFile();
		  	
			// Validate endpointProperty value
			validateEndpointPropertyValue(propertyValue);

			propertyValue += getEndpointSuffix();
		}
		catch (Exception e)
		{
			log.info(sMethod + "::Exception::" + e.getMessage());
			e.printStackTrace();
			throw e;
		}		 

		return propertyValue;		
	}
		 
	protected String getPropertyFromConfigurationFile() throws Exception
	{
		String sMethod = "[getEndpointAddressFromConfigurationFile]";
		String propertyValue = null;
		
		
		try
		{			
			ApplicationConfiguration.readApplicationConfiguration();
			Map enviroinmentMap = ApplicationConfiguration.getCategoryKeys(CONFIGURATION_PROPERTIES);
			log.info("getPropertyFromConfigurationFile( " + getPropertyName() + ") : "+ enviroinmentMap.get(getPropertyName()));
				
			propertyValue = enviroinmentMap.get(getPropertyName()).toString();// getEndpointFromConfigurationFile();
		  	
			// Validate endpointProperty value
			validateEndpointPropertyValue(propertyValue);

			propertyValue += getEndpointSuffix();
		}
		catch (Exception e)
		{
			log.info(sMethod + "::Exception::" + e.getMessage());
			e.printStackTrace();
			throw e;
		}		 

		return propertyValue;  
		 
	} 
	
	protected String getPropertyFromConfigurationFileforSS() throws Exception
	{
		String sMethod = "[getPropertyFromConfigurationFileforSS]";
		String propertyValue = null;
		
		
		try
		{			
			ApplicationConfiguration.readApplicationConfiguration();
			Map enviroinmentMap = ApplicationConfiguration.getCategoryKeys(CONFIGURATION_PROPERTIES);
			log.info("getPropertyFromConfigurationFileforSS( " + getPropertyNameforSS() + ") : "+ enviroinmentMap.get(getPropertyNameforSS()));
				
			propertyValue = enviroinmentMap.get(getPropertyNameforSS()).toString();// getEndpointFromConfigurationFile();
		  	
			// Validate endpointProperty value
			validateEndpointPropertyValue(propertyValue);

			propertyValue += getEndpointSuffix();
		}
		catch (Exception e)
		{
			log.info(sMethod + "::Exception::" + e.getMessage());
			e.printStackTrace();
			throw e;
		}		 

		return propertyValue;  
		 
	} 
	
	protected String getEndpointSuffix()
	{
		String sMethod = "[getEndpointSuffix]";
		log.info(sMethod + "::ENDPOINT-SUFFIX::" + ENDPOINT_SUFFIX);

		return ENDPOINT_SUFFIX;
	}

	protected void validateEndpointPropertyValue(String endpointProperty)
	{
		if (endpointProperty == null || endpointProperty.isEmpty())
		{
			throw new IllegalArgumentException("Invalid 'endpointProperty' value!");
		}
	}

	public interface PathDataCreator
	{
		InputStream getDataPathStream();
	}

	public void setResourcePath(PathDataCreator resourcePath)
	{
		this.resourcePath = resourcePath;
	}
	// US4580
	protected String getPropertyFromStoreIdConfigurationFile(String argPropertyName) throws Exception
	{
		String sMethod = "[getEndpointAddressFromConfigurationFile( " + argPropertyName + ")]";
		String propertyValue = null;  
		
		
		try
		{			
			ApplicationConfiguration.readApplicationConfiguration();
			Map enviroinmentMap = ApplicationConfiguration.getCategoryKeys(STORE_CONFIGURATION_PROPERTIES);
			log.info("getPropertyFromConfigurationFile( " + argPropertyName + ") : "+ enviroinmentMap.get(argPropertyName));
				
			propertyValue = enviroinmentMap.get(argPropertyName).toString();// getEndpointFromConfigurationFile();
		  	
			// Validate endpointProperty value
			validateEndpointPropertyValue(propertyValue);

			propertyValue += getEndpointSuffix();
		}
		catch (Exception e)
		{
			log.info(sMethod + "::Exception::" + e.getMessage());
			e.printStackTrace();
			throw e;
		}		 

		return propertyValue;		
	}
		
}