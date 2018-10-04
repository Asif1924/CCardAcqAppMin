package com.ctfs.WICI.Helper;

import java.util.Map;
import java.util.logging.Logger;

import javax.xml.namespace.QName;

import com.ctfs.WICI.Servlet.Model.WICIConfiguration;

public class WICIConfigurationFactory
{
	
	private static final String CONFIGURATION_PROPERTIES="WICI_ENVIROINMENT_CONFIGURATION";
	private static final String WEBSERVICES_ENDPOINT_SHAREDSERVICES="WEBSERVICES_ENDPOINT_SHAREDSERVICES";
	private static final String ACCOUNTAPPLICATION_DELAY="WEBSERVICES_ACCOUNTAPPLICATION_DELAY";
	
	static Logger log = Logger.getLogger(WICIConfigurationFactory.class.getName());

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
}
