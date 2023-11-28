package com.ctfs.WICI.Helper;

import java.util.Map;
import java.util.logging.Logger;

import javax.xml.namespace.QName;

import com.ctfs.WICI.Servlet.Model.WICIConfiguration;

public class WICIConfigurationFactory
{
	private static final String CONFIGURATION_PROPERTIES="WICI_ENVIRONMENT_CONFIGURATION";
	private static final String WEBSERVICES_ENDPOINT_SHAREDSERVICES="WEBSERVICES_ENDPOINT_SHAREDSERVICES";
	private static final String ACCOUNTAPPLICATION_DELAY="WEBSERVICES_ACCOUNTAPPLICATION_DELAY";
	private static final String CONFIGURATION_CATEGORY="OUTLET_TYPE_ID";
	private static final String DSS_ADDRESS_ENDPOINT="DSS_ADDRESS_ENDPOINT";
	private static final String DSS_TMX_ENDPOINT="DSS_TMX_ENDPOINT";
	private static final String DSS_EMAIL_ENDPOINT="DSS_EMAIL_ENDPOINT";
	private static final String DSS_CP_ELIGIBILITY_ENDPOINT="DSS_CP_ELIGIBILITY_ENDPOINT";
	
	private static final String JKSConfig ="JKSConfig";
	private static final String JKSFileName ="JKSFileName";
	private static final String JKSPassword ="JKSPassword";
	private static final String TLSVersion ="TLSVersion";
	
	private static final String DSS_DII_ENDPOINT ="DSS_DII_ENDPOINT";
	private static final String JWT_TOKEN ="JWT_TOKEN";
	private static final String DSS_SERVICE_ENV ="DSS_SERVICE_ENV";
	private static final String DSS_SUBMITAPP_ENDPOINT ="DSS_SUBMITAPP_ENDPOINT";
	private static final String DSS_JOBDESC_ENDPOINT="DSS_JOBDESC_ENDPOINT";
	
	//VERSION 2 REWRITE END POINTS
	private static final String REWRITE_CONFIGURATION_PROPERTIES="WICI_REWRITE_ENVIRONMENT_CONFIGURATION";
	private static final String DSS_REWRITE_ADDRESS_ENDPOINT="DSS_REWRITE_ADDRESS_ENDPOINT";
	private static final String DSS_REWRITE_TMX_ENDPOINT="DSS_REWRITE_TMX_ENDPOINT";
	private static final String DSS_REWRITE_EMAIL_ENDPOINT="DSS_REWRITE_EMAIL_ENDPOINT";
	private static final String DSS_REWRITE_CP_ELIGIBILITY_ENDPOINT="DSS_REWRITE_CP_ELIGIBILITY_ENDPOINT";
	
	private static final String DSS_REWRITE_DII_ENDPOINT ="DSS_REWRITE_DII_ENDPOINT";
	private static final String DSS_REWRITE_SERVICE_ENV ="DSS_REWRITE_SERVICE_ENV";
	private static final String DSS_REWRITE_SUBMITAPP_ENDPOINT ="DSS_REWRITE_SUBMITAPP_ENDPOINT";
	private static final String DSS_REWRITE_JOBDESC_ENDPOINT="DSS_REWRITE_JOBDESC_ENDPOINT";
	
	private static final String DSS_REWRITE_LOGIN_ENDPOINT="DSS_REWRITE_LOGIN_ENDPOINT";
	private static final String DSS_REWRITE_SAVETRAINING_ATTESTATION_ENDPOINT="DSS_REWRITE_SAVETRAINING_ATTESTATION_ENDPOINT";
	private static final String DSS_REWRITE_RETRIEVETRAINING_CONTENT_ENDPOINT="DSS_REWRITE_RETRIEVETRAINING_CONTENT_ENDPOINT";
	private static final String DSS_REWRITE_CHECKTRAINING_ATTESTATION_ENDPOINT="DSS_REWRITE_CHECKTRAINING_ATTESTATION_ENDPOINT";
	private static final String DSS_REWRITE_INITACCOUNTAPP_ENDPOINT="DSS_REWRITE_INITACCOUNTAPP_ENDPOINT";
	private static final String DSS_REWRITE_POLLACCOUNTAPP_ENDPOINT="DSS_REWRITE_POLLACCOUNTAPP_ENDPOINT";
	private static final String DSS_REWRITE_AGENT_ENDPOINT="DSS_REWRITE_AGENT_ENDPOINT";
	private static final String DSS_REWRITE_ISSERVER_ENDPOINT="DSS_REWRITE_ISSERVER_ENDPOINT";
	
	static Logger log = Logger.getLogger(WICIConfigurationFactory.class.getName());

	public WICIConfiguration createSharedServicesConfiguration()
	{
		//String sMethod = this.getClass().getName() + "[SharedServicesConfiguration] ";
		log.info("WICIConfigurationFactory.createSharedServicesConfiguration[]");

		WICIConfiguration conf = new WICIConfiguration();
		QName serviceName = new QName("http://web.sharedservices.ctfs.com/SharedWebServices/", "SharedWebServices");
				
		ApplicationConfiguration.readApplicationConfiguration();
		Map environmentMap = ApplicationConfiguration.getCategoryKeys(CONFIGURATION_PROPERTIES);
		log.info("Back end pointed to "+ CWE117Fix.encodeCRLF(environmentMap.get(WEBSERVICES_ENDPOINT_SHAREDSERVICES) != null ? environmentMap.get(WEBSERVICES_ENDPOINT_SHAREDSERVICES).toString() : null));
			
		String webservicesEndPoint = environmentMap.get(WEBSERVICES_ENDPOINT_SHAREDSERVICES).toString();// getEndpointFromConfigurationFile();
		String accountApplicationDelay = environmentMap.get(ACCOUNTAPPLICATION_DELAY).toString();//getAccountApplicationDelayFromConfigurationFile();
		
		conf.setWebservicesEndpoint(webservicesEndPoint);
		conf.setServiceName(serviceName);

		try {
			conf.setAccountApplicationDelay(Integer.parseInt(accountApplicationDelay));
		} catch (Exception e) {
			log.warning("WICIConfigurationFactory.createSharedServicesConfiguration[]---error setting AccountApplicationDelay: " + CWE117Fix.encodeCRLF(e.getMessage()));
		}

		log.info("WICIConfigurationFactory.createSharedServicesConfiguration[]---WebServices endpoint set to " + CWE117Fix.encodeCRLF(conf.getWebservicesEndpoint() != null ? conf.getWebservicesEndpoint().toString(): null));
		log.info("WICIConfigurationFactory.createSharedServicesConfiguration[]---ServiceName set to " + CWE117Fix.encodeCRLF(conf.getServiceName() != null ?conf.getServiceName().toString() : null));
		log.info("WICIConfigurationFactory.createSharedServicesConfiguration[]---AccountApplication delay set to " + CWE117Fix.encodeCRLF(conf.getAccountApplicationDelay() != null ? conf.getAccountApplicationDelay().toString() : null));
		return conf;
	}
	
	public WICIConfiguration readOutletTypeIdConfiguration(String retailNetwork) {
		//String sMethod = this.getClass().getName() + "WICIConfigurationFactory[readOutletTypeIdConfiguration] ";
		log.info("WICIConfigurationFactory[readOutletTypeIdConfiguration]  ::::::: " + CWE117Fix.encodeCRLF(retailNetwork));
		
		WICIConfiguration conf = new WICIConfiguration();
		   	    
		ApplicationConfiguration.readApplicationConfiguration();
		Map environmentMap = ApplicationConfiguration.getCategoryKeys(CONFIGURATION_CATEGORY);
		log.info("Outlet type id CT :: "+ CWE117Fix.encodeCRLF(environmentMap.get(retailNetwork) != null ? environmentMap.get(retailNetwork).toString(): null));
						
		String outletTypeId = environmentMap.get(retailNetwork).toString();// getOUTLET_TYPE_ID();
		conf.setOutletTypeId(outletTypeId);

		log.info("WICIConfigurationFactory[readOutletTypeIdConfiguration] --- Outlet type id " + CWE117Fix.encodeCRLF(conf.getOutletTypeId()));
		return conf;
	}
	
	public WICIConfiguration createDASSEndPointConfiguration() {
		log.info("WICIConfigurationFactory[createDASSEndPointConfiguration] ");

		WICIConfiguration conf = new WICIConfiguration();
		ApplicationConfiguration.readApplicationConfiguration();
		Map environmentMap = ApplicationConfiguration.getCategoryKeys(CONFIGURATION_PROPERTIES);
		Map jksconfigurationMap = ApplicationConfiguration.getCategoryKeys(JKSConfig);

		log.info(DSS_ADDRESS_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_ADDRESS_ENDPOINT) != null ? environmentMap.get(DSS_ADDRESS_ENDPOINT).toString(): null));
		log.info(DSS_TMX_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_TMX_ENDPOINT)!= null ? environmentMap.get(DSS_TMX_ENDPOINT).toString(): null));
		log.info(DSS_EMAIL_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_EMAIL_ENDPOINT)!= null ? environmentMap.get(DSS_EMAIL_ENDPOINT).toString(): null));
		log.info(DSS_DII_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_DII_ENDPOINT)!= null ? environmentMap.get(DSS_DII_ENDPOINT).toString(): null));
		log.info(JWT_TOKEN + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(JWT_TOKEN) != null ? environmentMap.get(JWT_TOKEN).toString(): null));
		log.info(DSS_SERVICE_ENV + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_SERVICE_ENV) != null ? environmentMap.get(DSS_SERVICE_ENV).toString(): null));
		log.info(DSS_SUBMITAPP_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_SUBMITAPP_ENDPOINT)!= null ? environmentMap.get(DSS_ADDRESS_ENDPOINT).toString(): null));
		log.info(DSS_CP_ELIGIBILITY_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_CP_ELIGIBILITY_ENDPOINT)!= null ? environmentMap.get(DSS_CP_ELIGIBILITY_ENDPOINT).toString(): null));
		
		String dssEndPoint = environmentMap.get(DSS_ADDRESS_ENDPOINT).toString();
		String tmxEndPoint = environmentMap.get(DSS_TMX_ENDPOINT).toString();
		String emailEndPoint = environmentMap.get(DSS_EMAIL_ENDPOINT).toString();
		String dssDIIEndPoit = environmentMap.get(DSS_DII_ENDPOINT).toString();
		String jwtToken = environmentMap.get(JWT_TOKEN).toString();
		String dssServiceEnv = environmentMap.get(DSS_SERVICE_ENV).toString();
		String dsssubmitAPPEndpont = environmentMap.get(DSS_SUBMITAPP_ENDPOINT).toString();
		String jobDescEndpoint = environmentMap.get(DSS_JOBDESC_ENDPOINT).toString();
		String cPEligibilityEndpoint = environmentMap.get(DSS_CP_ELIGIBILITY_ENDPOINT).toString();
		conf.setDssEndPoint(dssEndPoint);
		
		log.info("jksPath -> "+CWE117Fix.encodeCRLF(jksconfigurationMap.get(JKSFileName) != null ? jksconfigurationMap.get(JKSFileName).toString() : null));
		log.info("jksPassword -> "+CWE117Fix.encodeCRLF(jksconfigurationMap.get(JKSPassword) != null ? jksconfigurationMap.get(JKSPassword).toString() : null));
		log.info("jksTlsVersion -> "+CWE117Fix.encodeCRLF(jksconfigurationMap.get(TLSVersion) != null ? jksconfigurationMap.get(JKSPassword).toString() : null));
		
		String jksPath = jksconfigurationMap.get(JKSFileName).toString();
		String jksPassword = jksconfigurationMap.get(JKSPassword).toString();
		String jksTlsVersion = jksconfigurationMap.get(TLSVersion).toString();
		conf.setDssEndPoint(dssEndPoint);
		conf.setJksPath(jksPath);
		conf.setJksPassword(jksPassword);
		conf.setJksTlsVersion(jksTlsVersion);
		conf.setDssTmxEndPoint(tmxEndPoint);
		conf.setDssEmailEndPoint(emailEndPoint);
		conf.setDssDIIEndPoint(dssDIIEndPoit);
		conf.setJwtToken(jwtToken);
		conf.setDssserviceEnv(dssServiceEnv);
		conf.setDsssubmitAppEndPoint(dsssubmitAPPEndpont);
		conf.setJobDescEndPoint(jobDescEndpoint);
		conf.setCpEligibilityEndPoint(cPEligibilityEndpoint);
		log.info("WICIConfigurationFactory[createDASSEndPointConfiguration] ---JobDesc Endpoint  " + CWE117Fix.encodeCRLF(conf.getJobDescEndPoint() != null ?conf.getJobDescEndPoint().toString() : null));
		
		return conf;
	}
	
	//VERSION 2 REWRITE CONFIGURATION
	
	public WICIConfiguration createReWriteSharedServicesConfiguration()
	{
		//String sMethod = this.getClass().getName() + "WICIConfigurationFactory[ReWriteSharedServicesConfiguration] ";
		log.info("WICIConfigurationFactory[ReWriteSharedServicesConfiguration] ");

		WICIConfiguration conf = new WICIConfiguration();
		QName serviceName = new QName("http://web.sharedservices.ctfs.com/SharedWebServices/", "SharedWebServices");
				
		ApplicationConfiguration.readApplicationConfiguration();
		Map environmentMap = ApplicationConfiguration.getCategoryKeys(REWRITE_CONFIGURATION_PROPERTIES);
		log.info("Back end pointed to "+ environmentMap.get(WEBSERVICES_ENDPOINT_SHAREDSERVICES));
			
		String webservicesEndPoint = environmentMap.get(WEBSERVICES_ENDPOINT_SHAREDSERVICES).toString();// getEndpointFromConfigurationFile();
		String accountApplicationDelay = environmentMap.get(ACCOUNTAPPLICATION_DELAY).toString();//getAccountApplicationDelayFromConfigurationFile();
		
		conf.setWebservicesEndpoint(webservicesEndPoint);
		conf.setServiceName(serviceName);

		try {
			conf.setAccountApplicationDelay(Integer.parseInt(accountApplicationDelay));
		} catch (Exception e) {
			log.warning("WICIConfigurationFactory[ReWriteSharedServicesConfiguration] ---error setting rewrite AccountApplicationDelay: " + CWE117Fix.encodeCRLF(e.getMessage()));
		}

		log.info("WICIConfigurationFactory[ReWriteSharedServicesConfiguration] ---WebServices rewrite endpoint set to " + CWE117Fix.encodeCRLF(conf.getWebservicesEndpoint()));
		log.info("WICIConfigurationFactory[ReWriteSharedServicesConfiguration] ---Rewrite ServiceName set to " + CWE117Fix.encodeCRLF(conf.getServiceName().toString()));
		log.info("WICIConfigurationFactory[ReWriteSharedServicesConfiguration] ---Rewrite AccountApplication delay set to " + CWE117Fix.encodeCRLF(conf.getAccountApplicationDelay().toString()));
		return conf;
	}
	public WICIConfiguration createReWriteDASSEndPointConfiguration() {
		//String sMethod = this.getClass().getName() + "WICIConfigurationFactory[createReWriteDASSEndPointConfiguration] ";
		
		log.info("WICIConfigurationFactory[createReWriteDASSEndPointConfiguration] ");

		WICIConfiguration conf = new WICIConfiguration();
		ApplicationConfiguration.readApplicationConfiguration();
		Map environmentMap = ApplicationConfiguration.getCategoryKeys(REWRITE_CONFIGURATION_PROPERTIES);
		Map jksconfigurationMap = ApplicationConfiguration.getCategoryKeys(JKSConfig);

		log.info(DSS_REWRITE_ADDRESS_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_REWRITE_ADDRESS_ENDPOINT).toString()));
		log.info(DSS_REWRITE_TMX_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_REWRITE_TMX_ENDPOINT).toString()));
		log.info(DSS_REWRITE_EMAIL_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_REWRITE_EMAIL_ENDPOINT).toString()));
		log.info(DSS_REWRITE_DII_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_REWRITE_DII_ENDPOINT).toString()));
		log.info(JWT_TOKEN + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(JWT_TOKEN).toString()));
		log.info(DSS_REWRITE_SERVICE_ENV + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_REWRITE_SERVICE_ENV).toString()));
		log.info(DSS_REWRITE_SUBMITAPP_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_REWRITE_SUBMITAPP_ENDPOINT).toString()));
		log.info(DSS_REWRITE_CP_ELIGIBILITY_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_REWRITE_CP_ELIGIBILITY_ENDPOINT).toString()));
		log.info(DSS_REWRITE_JOBDESC_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_REWRITE_JOBDESC_ENDPOINT).toString()));
		
		log.info(DSS_REWRITE_LOGIN_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_REWRITE_LOGIN_ENDPOINT).toString()));
		log.info(DSS_REWRITE_SAVETRAINING_ATTESTATION_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_REWRITE_SAVETRAINING_ATTESTATION_ENDPOINT).toString()));
		log.info(DSS_REWRITE_RETRIEVETRAINING_CONTENT_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_REWRITE_RETRIEVETRAINING_CONTENT_ENDPOINT).toString()));
		log.info(DSS_REWRITE_CHECKTRAINING_ATTESTATION_ENDPOINT + " -> "+ environmentMap.get(DSS_REWRITE_CHECKTRAINING_ATTESTATION_ENDPOINT).toString());
		log.info(DSS_REWRITE_INITACCOUNTAPP_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_REWRITE_INITACCOUNTAPP_ENDPOINT).toString()));
		log.info(DSS_REWRITE_POLLACCOUNTAPP_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_REWRITE_POLLACCOUNTAPP_ENDPOINT).toString()));
		log.info(DSS_REWRITE_AGENT_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_REWRITE_AGENT_ENDPOINT).toString()));
		log.info(DSS_REWRITE_ISSERVER_ENDPOINT + " -> "+ CWE117Fix.encodeCRLF(environmentMap.get(DSS_REWRITE_ISSERVER_ENDPOINT).toString()));
		
		String dssEndPoint = environmentMap.get(DSS_REWRITE_ADDRESS_ENDPOINT).toString();
		String rewritedssTmxEndPoint = environmentMap.get(DSS_REWRITE_TMX_ENDPOINT).toString();
		String emailEndPoint = environmentMap.get(DSS_REWRITE_EMAIL_ENDPOINT).toString();
		String rewriteDSSDIIEndPoint = environmentMap.get(DSS_REWRITE_DII_ENDPOINT).toString();
		String jwtToken = environmentMap.get(JWT_TOKEN).toString();
		String dssServiceEnv = environmentMap.get(DSS_REWRITE_SERVICE_ENV).toString();
		String dsssubmitAPPEndpont = environmentMap.get(DSS_REWRITE_SUBMITAPP_ENDPOINT).toString();
		String reWrtieDSSJobDescEndPoint = environmentMap.get(DSS_REWRITE_JOBDESC_ENDPOINT).toString();
		String rewritecpEligibilityEndPoint = environmentMap.get(DSS_REWRITE_CP_ELIGIBILITY_ENDPOINT).toString();
		conf.setDssEndPoint(dssEndPoint);
		
		String loginEndpoint = environmentMap.get(DSS_REWRITE_LOGIN_ENDPOINT).toString();
		String saveAttestationEndpoint = environmentMap.get(DSS_REWRITE_SAVETRAINING_ATTESTATION_ENDPOINT).toString();
		String retrieveTrainingContentEndpoint = environmentMap.get(DSS_REWRITE_RETRIEVETRAINING_CONTENT_ENDPOINT).toString();
		String checkAttestationEndpoint = environmentMap.get(DSS_REWRITE_CHECKTRAINING_ATTESTATION_ENDPOINT).toString();
		String initAccountAppEndpoint = environmentMap.get(DSS_REWRITE_INITACCOUNTAPP_ENDPOINT).toString();
		String pollAccountAppEndpoint = environmentMap.get(DSS_REWRITE_POLLACCOUNTAPP_ENDPOINT).toString();
		String agentEndpoint = environmentMap.get(DSS_REWRITE_AGENT_ENDPOINT).toString();
		String isServerEndpoint = environmentMap.get(DSS_REWRITE_ISSERVER_ENDPOINT).toString();
		
		log.info("jksPath -> "+CWE117Fix.encodeCRLF(jksconfigurationMap.get(JKSFileName).toString()));
		log.info("jksPassword -> "+CWE117Fix.encodeCRLF(jksconfigurationMap.get(JKSPassword).toString()));
		log.info("jksTlsVersion -> "+CWE117Fix.encodeCRLF(jksconfigurationMap.get(TLSVersion).toString()));
		
		String jksPath = jksconfigurationMap.get(JKSFileName).toString();
		String jksPassword = jksconfigurationMap.get(JKSPassword).toString();
		String jksTlsVersion = jksconfigurationMap.get(TLSVersion).toString();
		conf.setDssEndPoint(dssEndPoint);
		conf.setJksPath(jksPath);
		conf.setJksPassword(jksPassword);
		conf.setJksTlsVersion(jksTlsVersion);
		conf.setDssEmailEndPoint(emailEndPoint);
		conf.setJwtToken(jwtToken);
		conf.setRewriteDssServiceEnv(dssServiceEnv);
		conf.setDsssubmitAppEndPoint(dsssubmitAPPEndpont);
		conf.setRewriteLoginEndPoint(loginEndpoint);
		conf.setRewriteSaveAttestationEndPoint(saveAttestationEndpoint);
		conf.setRewriteRetrieveTrainingEndPoint(retrieveTrainingContentEndpoint);
		conf.setRewriteCheckAttestationEndPoint(checkAttestationEndpoint);
		conf.setRewriteInitAccountAppEndPoint(initAccountAppEndpoint);
		conf.setRewritePollAccountAppEndPoint(pollAccountAppEndpoint);
		conf.setRewriteAgentEndPoint(agentEndpoint);
		conf.setRewriteServerAliveEndPoint(isServerEndpoint);
		conf.setRewriteDSSDIIEndPoint(rewriteDSSDIIEndPoint);
		conf.setRewritecpEligibilityEndPoint(rewritecpEligibilityEndPoint);
		conf.setRewritedssTmxEndPoint(rewritedssTmxEndPoint);
		conf.setReWrtieDSSJobDescEndPoint(reWrtieDSSJobDescEndPoint);
		conf.setRewriteLoginEndPoint(loginEndpoint);
		conf.setRewriteSaveAttestationEndPoint(saveAttestationEndpoint);
		conf.setRewriteRetrieveTrainingEndPoint(retrieveTrainingContentEndpoint);
		conf.setRewriteCheckAttestationEndPoint(checkAttestationEndpoint);
		conf.setRewriteInitAccountAppEndPoint(initAccountAppEndpoint);
		conf.setRewritePollAccountAppEndPoint(pollAccountAppEndpoint);
		conf.setRewriteAgentEndPoint(agentEndpoint);
		conf.setRewriteServerAliveEndPoint(isServerEndpoint);
		
		return conf;
	}
	
}
