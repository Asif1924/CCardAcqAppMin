package com.ctfs.BRB.Helper.Factory;

import java.net.URL;
import java.util.logging.Logger;

import com.ctc.ctfs.eCommUpdateCardData.BasicHttpBinding_IResponseServiceProxy;
import com.ctfs.BRB.Interfaces.IConfiguration;
import com.ctfs.BRB.Interfaces.IPortalProxyBuilder;

public class ECommCardDataSimulatorProxyBuilder implements IPortalProxyBuilder
{
	static Logger log = Logger.getLogger(ECommCardDataSimulatorProxyBuilder.class.getName());
	private String requestingSystem;
	
	public ECommCardDataSimulatorProxyBuilder (String requestingSystem) {
		String sMethod = "[ECommCardDataSimulatorProxyBuilder]";
		log.info(sMethod + "::REQUESTINGSYSTEM::" + requestingSystem);
		
		this.requestingSystem  = requestingSystem;
	}

	@Override
	public Object createWebServicesPortalProxy() throws Exception
	{
		String sMethod = "[createWebServicesPortalProxy]";
		log.info(sMethod + "::Called.");

		BasicHttpBinding_IResponseServiceProxy createdProxy = null;

		try
		{
			IConfiguration conf = new ECommCardDataSimulatorConfigurationFactory(requestingSystem).createWebServicesEndpoint();
			createdProxy = new BasicHttpBinding_IResponseServiceProxy(new URL(conf.getWebservicesEndpoint()), conf.getServiceName());						
		}
		catch (Exception e)
		{
			log.info(sMethod + "::Exception::" + e.getMessage());
			e.printStackTrace();
			throw e;
		}

		return createdProxy;
	}
	
	
	@Override
	public Object createSharedWebServicesPortalProxy() throws Exception
	{
		String sMethod = "[createSharedWebServicesPortalProxy]";
		log.info(sMethod + "::Called.");

		BasicHttpBinding_IResponseServiceProxy createdProxy = null;

		try
		{
			IConfiguration conf = new ECommCardDataSimulatorConfigurationFactory(requestingSystem).createWebServicesEndpoint();
			createdProxy = new BasicHttpBinding_IResponseServiceProxy(new URL(conf.getWebservicesEndpoint()), conf.getServiceName());						
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