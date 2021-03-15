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
	private static final String CONFIGURATION_CATEGORY="OUTLET_TYPE_ID";
	private static final String DSS_ADDRESS_ENDPOINT="DSS_ADDRESS_ENDPOINT";
	private static final String DSS_TMX_ENDPOINT="DSS_TMX_ENDPOINT";
	private static final String DSS_EMAIL_ENDPOINT="DSS_EMAIL_ENDPOINT";
	
	private static final String JKSConfig ="JKSConfig";
	private static final String JKSFileName ="JKSFileName";
	private static final String JKSPassword ="JKSPassword";
	private static final String TLSVersion ="TLSVersion";
	
	
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
	
	public WICIConfiguration readOutletTypeIdConfiguration(String retailNetwork)
	{
		String sMethod = this.getClass().getName() + "[readOutletTypeIdConfiguration] ";
		log.info(sMethod + " ::::::: " + retailNetwork);
		
		WICIConfiguration conf = new WICIConfiguration();
		   	    
		ApplicationConfiguration.readApplicationConfiguration();
		Map enviroinmentMap = ApplicationConfiguration.getCategoryKeys(CONFIGURATION_CATEGORY);
		log.info("Outlet type id CT :: "+ enviroinmentMap.get(retailNetwork));
						
		String outletTypeId = enviroinmentMap.get(retailNetwork).toString();// getOUTLET_TYPE_ID();
		
		conf.setOutletTypeId(outletTypeId);

		log.info(sMethod + "--- Outlet type id " + conf.getOutletTypeId());
		return conf;
	}
	
	public WICIConfiguration createDASSEndPointConfiguration()
	{
		String sMethod = this.getClass().getName() + "[createDASSEndPointConfiguration] ";
		log.info(sMethod);

		WICIConfiguration conf = new WICIConfiguration();
		ApplicationConfiguration.readApplicationConfiguration();
		Map enviroinmentMap = ApplicationConfiguration.getCategoryKeys(CONFIGURATION_PROPERTIES);
		Map jksconfigurationMap = ApplicationConfiguration.getCategoryKeys(JKSConfig);
		
	
		String dssEndPoint = enviroinmentMap.get(DSS_ADDRESS_ENDPOINT).toString();
		String tmxEndPoint = enviroinmentMap.get(DSS_TMX_ENDPOINT).toString();
		String emailEndPoint = enviroinmentMap.get(DSS_EMAIL_ENDPOINT).toString();
		
		conf.setDssEndPoint(dssEndPoint);
				
		String jksPath = jksconfigurationMap.get(JKSFileName).toString();
		String jksPassword = jksconfigurationMap.get(JKSPassword).toString();
		String jksTlsVersion = jksconfigurationMap.get(TLSVersion).toString();
		
		conf.setDssEndPoint(dssEndPoint);
		conf.setJksPath(jksPath);
		conf.setJksPassword(jksPassword);
		conf.setJksTlsVersion(jksTlsVersion);
		conf.setDssTmxEndPoint(tmxEndPoint);
		conf.setDssEmailEndPoint(emailEndPoint);
		
		log.info(sMethod + "---Jks Details  " + conf.getJksPath()   +"======"+conf.getJksPassword()+ "===="+conf.getJksTlsVersion()+"====="+conf.getDssTmxEndPoint()+"======"+conf.getDssEmailEndPoint());
		
		
		
		
		return conf;
	}
	
	
	
}
