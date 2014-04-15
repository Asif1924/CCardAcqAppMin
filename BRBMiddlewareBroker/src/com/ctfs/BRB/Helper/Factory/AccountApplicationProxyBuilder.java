package com.ctfs.BRB.Helper.Factory;

import java.net.URL;
import java.util.logging.Logger;

import com.channel.ctfs.ctc.webicgateway.AccountAcquisitionPortalProxy;
import com.ctfs.BRB.Interfaces.IConfiguration;
import com.ctfs.BRB.Interfaces.IPortalProxyBuilder;

public class AccountApplicationProxyBuilder implements IPortalProxyBuilder
{
	static Logger log = Logger.getLogger(AccountApplicationProxyBuilder.class.getName());

	@Override
	public Object createWebServicesPortalProxy() throws Exception
	{
		String sMethod = "[createWebServicesPortalProxy]";
		log.info(sMethod + "::Called.");

		AccountAcquisitionPortalProxy createdProxy = null;

		try
		{
			IConfiguration conf = new AccountApplicationConfigurationFactory().createWebServicesEndpoint();
			createdProxy = new AccountAcquisitionPortalProxy(new URL(conf.getWebservicesEndpoint()), conf.getServiceName());
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
