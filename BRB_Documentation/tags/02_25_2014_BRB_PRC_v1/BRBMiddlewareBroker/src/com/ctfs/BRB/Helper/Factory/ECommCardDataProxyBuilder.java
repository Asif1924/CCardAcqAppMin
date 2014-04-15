package com.ctfs.BRB.Helper.Factory;

import java.util.Map;
import java.util.logging.Logger;

import javax.xml.ws.BindingProvider;

import com.cantire.persistservice.PersistService;
import com.cantire.persistservice.PersistServiceDelegate;
import com.ctfs.BRB.Interfaces.IConfiguration;
import com.ctfs.BRB.Interfaces.IPortalProxyBuilder;

public class ECommCardDataProxyBuilder implements IPortalProxyBuilder
{
	static Logger log = Logger.getLogger(ECommCardDataProxyBuilder.class.getName());
	private String requestingSystem;
	private static PersistServiceDelegate createdProxy = null;
	
	public ECommCardDataProxyBuilder (String requestingSystem) {
		String sMethod = "[ECommCardDataProxyBuilder]";
		log.info(sMethod + "::REQUESTINGSYSTEM::" + requestingSystem);
		
		this.requestingSystem  = requestingSystem;
	}

	@Override
	public Object createWebServicesPortalProxy() throws Exception
	{
		String sMethod = "[createWebServicesPortalProxy]";
		log.info(sMethod + "::Called.");

		createdProxy = null;

		try
		{
			IConfiguration conf = new ECommCardDataConfigurationFactory(requestingSystem).createWebServicesEndpoint();

			createdProxy = new PersistService(null, conf.getServiceName()).getPersistService();
			log.info(sMethod + "::Attempting to set the endpoint using the binding provider on the proxy: ");
			log.info(sMethod + "::Property name: " + javax.xml.ws.BindingProvider.ENDPOINT_ADDRESS_PROPERTY);
			log.info(sMethod + "::Property value: " + conf.getWebservicesEndpoint());
			
			
			Map<String,Object> requestContext = ((BindingProvider)createdProxy).getRequestContext();
			requestContext.put("javax.xml.ws.service.endpoint.address", conf.getWebservicesEndpoint());
			
			//These two values we may or may not need, we'll have to investigate what happens
			//if we exclude them and see if it breaks anything. If not, we can exclude them,
			//otherwise we need them.
			requestContext.put("connection_timeout", "5");
			requestContext.put("timeout", "120");
			
			log.info(sMethod + "::Properties should be set at this point. ");
		}
		catch (Exception e)
		{
			log.info(sMethod + "::Exception::" + e.getMessage());
			e.printStackTrace();
			throw e;
		}

		return createdProxy;
	}
}