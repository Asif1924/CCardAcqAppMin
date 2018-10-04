package com.ctfs.BRB.Helper.Factory;

import java.net.URL;
import java.util.logging.Logger;

import com.ctfs.BRB.Interfaces.IConfiguration;
import com.ctfs.BRB.Interfaces.IPortalProxyBuilder;
import com.exacttarget.wsdl.partnerapi.PartnerAPI;

public class EmailServiceProxyBuilder implements IPortalProxyBuilder
{
	static Logger log = Logger.getLogger(EmailServiceProxyBuilder.class.getName());

	@Override
	public Object createSharedWebServicesPortalProxy() throws Exception
	{
		String sMethod = "[createSharedWebServicesPortalProxy]";
		log.info(sMethod + "::Called.");

		PartnerAPI createdProxy = null;

		try
		{
			IConfiguration conf = new EmailServiceConfigurationFactory().createWebServicesEndpointforSS();
			createdProxy = new PartnerAPI(new URL(conf.getWebservicesEndpointforSS()), conf.getServiceNameforSS());
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