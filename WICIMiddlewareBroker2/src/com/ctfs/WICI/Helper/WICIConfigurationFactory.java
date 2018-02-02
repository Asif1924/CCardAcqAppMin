package com.ctfs.WICI.Helper;

import java.io.IOException;
import java.io.InputStream;
import java.util.Map;
import java.util.Properties;
import java.util.logging.Logger;
import javax.xml.namespace.QName;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;

public class WICIConfigurationFactory
{
	
	private static final String CONFIGURATION_PROPERTIES="WICI_ENVIROINMENT_CONFIGURATION";
	private static final String WEBSERVICES_ENDPOINT="WEBSERVICES_ENDPOINT";
	private static final String WEBSERVICES_ENDPOINT_SHAREDSERVICES="WEBSERVICES_ENDPOINT_SHAREDSERVICES";

	private static final String ACCOUNTAPPLICATION_DELAY="WEBSERVICES_ACCOUNTAPPLICATION_DELAY";
	
	static Logger log = Logger.getLogger(WICIConfigurationFactory.class.getName());

	public WICIConfiguration createWebServicesConfiguration()
	{
		String sMethod = this.getClass().getName() + "[createWebServicesConfiguration] ";
		log.info(sMethod);

 /*     Old Code - US3537	WICI - Externalize WICIMiddlewareBroker Configuration   
		WICIConfiguration conf = new WICIConfiguration();
		String webservicesEndPoint = getEndpointFromConfigurationFile();
		QName serviceName = new QName("http://www.ctc.ctfs.channel.com/WebICGateway/", "WebICGateway");
		String accountApplicationDelay = getAccountApplicationDelayFromConfigurationFile();

		conf.setWebservicesEndpoint(webservicesEndPoint);
		conf.setServiceName(serviceName);

		try
		{
			conf.setAccountApplicationDelay(Integer.parseInt(accountApplicationDelay));
		}
		catch (Exception e)
		{
			log.warning(sMethod + "---error setting AccountApplicationDelay: " + e.getMessage());
		}
*/
		
		//New Code Begin - US3537	WICI - Externalize WICIMiddlewareBroker Configuration
		WICIConfiguration conf = new WICIConfiguration();
		QName serviceName = new QName("http://www.ctc.ctfs.channel.com/WebICGateway/", "WebICGateway");
				
		   	    
		ApplicationConfiguration.readApplicationConfiguration();
		Map enviroinmentMap = ApplicationConfiguration.getCategoryKeys(CONFIGURATION_PROPERTIES);
		log.info("Back end pointed to "+ enviroinmentMap.get(WEBSERVICES_ENDPOINT));
			
			
		String webservicesEndPoint = enviroinmentMap.get(WEBSERVICES_ENDPOINT).toString();// getEndpointFromConfigurationFile();
		String accountApplicationDelay = enviroinmentMap.get(ACCOUNTAPPLICATION_DELAY).toString();//getAccountApplicationDelayFromConfigurationFile();
		
		conf.setWebservicesEndpoint(webservicesEndPoint);
		conf.setServiceName(serviceName);

		try
		{
			conf.setAccountApplicationDelay(Integer.parseInt(accountApplicationDelay));
		}
		catch (Exception e)
		{
			log.warning(sMethod + "---error setting AccountApplicationDelay: " + e.getMessage());
		}
		// New code End

		log.info(sMethod + "---WebServices endpoint set to " + conf.getWebservicesEndpoint());
		log.info(sMethod + "---ServiceName set to " + conf.getServiceName());
		log.info(sMethod + "---AccountApplication delay set to " + conf.getAccountApplicationDelay());
		return conf;
	}
	public WICIConfiguration createSharedServicesConfiguration()
	{
		String sMethod = this.getClass().getName() + "[SharedServicesConfiguration] ";
		log.info(sMethod);

		WICIConfiguration conf = new WICIConfiguration();
		QName serviceName = new QName("http://web.sharedservices.ctfs.com/SharedWebServices/", "SharedWebServices");
				
		   	    
		ApplicationConfiguration.readApplicationConfiguration();
		Map enviroinmentMap = ApplicationConfiguration.getCategoryKeys(CONFIGURATION_PROPERTIES);
		log.info("Back end pointed to "+ enviroinmentMap.get(WEBSERVICES_ENDPOINT_SHAREDSERVICES));
			
			
		String webservicesEndPoint = enviroinmentMap.get(WEBSERVICES_ENDPOINT_SHAREDSERVICES).toString();// getEndpointFromConfigurationFile();
		String accountApplicationDelay = enviroinmentMap.get(ACCOUNTAPPLICATION_DELAY).toString();//getAccountApplicationDelayFromConfigurationFile();
		
		conf.setWebservicesEndpoint(webservicesEndPoint);
		conf.setServiceName(serviceName);

		try
		{
			conf.setAccountApplicationDelay(Integer.parseInt(accountApplicationDelay));
		}
		catch (Exception e)
		{
			log.warning(sMethod + "---error setting AccountApplicationDelay: " + e.getMessage());
		}

		log.info(sMethod + "---WebServices endpoint set to " + conf.getWebservicesEndpoint());
		log.info(sMethod + "---ServiceName set to " + conf.getServiceName());
		log.info(sMethod + "---AccountApplication delay set to " + conf.getAccountApplicationDelay());
		return conf;
	}

	private String getEndpointFromConfigurationFile()
	{
		String sMethod = this.getClass().getName() + "[getEndpointFromConfigurationFile] ";
		log.info(sMethod);

		Properties properties = new Properties();

		try
		{
			InputStream configurationFile = WICIConfigurationFactory.class.getResourceAsStream("/WEB-INF/configuration.properties");

			if (configurationFile != null)
			{
				properties.load(configurationFile);
			}
		}
		catch (IOException e)
		{
			log.warning(sMethod + "---Exception" + e.getMessage());
			e.printStackTrace();
		}

		return properties.getProperty("webservicesEndpoint", "http://172.23.38.12:80/WebICGateway/services/AccountAcquisitionPortal");
	}

	private String getAccountApplicationDelayFromConfigurationFile()
	{
		String sMethod = this.getClass().getName() + "[getAccountApplicationDelayFromConfigurationFile] ";
		log.info(sMethod);

		Properties properties = new Properties();

		try
		{
			InputStream configurationFile = WICIConfigurationFactory.class.getResourceAsStream("/WEB-INF/configuration.properties");

			if (configurationFile != null)
			{
				properties.load(configurationFile);
			}
		}
		catch (IOException e)
		{
			log.warning(sMethod + "---Exception" + e.getMessage());
			e.printStackTrace();
		}

		return properties.getProperty("webservices.accountapplication.delay", "0");
	}
}
