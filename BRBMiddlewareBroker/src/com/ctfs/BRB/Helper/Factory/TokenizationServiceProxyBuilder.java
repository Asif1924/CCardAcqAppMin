package com.ctfs.BRB.Helper.Factory;

import java.net.URL;
import java.util.logging.Logger;

import com.ctfs.BRB.Interfaces.IConfiguration;
import com.ctfs.BRB.Interfaces.IPortalProxyBuilder;
import com.ctfs.esockettransact.EsocketTransactSOAPProxy;

public class TokenizationServiceProxyBuilder implements IPortalProxyBuilder
{
	static Logger log = Logger.getLogger(TokenizationServiceProxyBuilder.class.getName());

	@Override
	public Object createWebServicesPortalProxy() throws Exception
	{
		String sMethod = "[createWebServicesPortalProxy]";
		log.info(sMethod + "::Called.");

		EsocketTransactSOAPProxy createdProxy = null;

		try
		{
			IConfiguration conf = new TokenizationServiceConfigurationFactory().createWebServicesEndpoint();
			createdProxy = new EsocketTransactSOAPProxy(new URL(conf.getWebservicesEndpoint()), conf.getServiceName());
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

		EsocketTransactSOAPProxy createdProxy = null;

		try
		{
			IConfiguration conf = new TokenizationServiceConfigurationFactory().createWebServicesEndpoint();
			createdProxy = new EsocketTransactSOAPProxy(new URL(conf.getWebservicesEndpoint()), conf.getServiceName());
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