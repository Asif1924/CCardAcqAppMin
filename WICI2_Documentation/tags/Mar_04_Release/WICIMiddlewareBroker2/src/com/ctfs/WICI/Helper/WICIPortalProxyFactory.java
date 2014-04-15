package com.ctfs.WICI.Helper;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.logging.Logger;
import com.channel.ctfs.ctc.webicgateway.AccountAcquisitionPortalProxy;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;

public class WICIPortalProxyFactory
{
	static Logger log = Logger.getLogger(WICIPortalProxyFactory.class.getName());

	public AccountAcquisitionPortalProxy createWICIWebServicesPortalProxy()
	{
		String sMethod = this.getClass().getName() + "[createWICIWebServicesPortalProxy] ";
		log.info(sMethod);

		AccountAcquisitionPortalProxy createdProxy = null;

		try
		{
			log.info("---invoking the web service");

			WICIConfiguration conf = new WICIConfigurationFactory().createWebServicesConfiguration();

			createdProxy = new AccountAcquisitionPortalProxy(new URL(conf.getWebservicesEndpoint()), conf.getServiceName());
		}
		catch (MalformedURLException potentialProblem)
		{

			log.warning(sMethod + "---exception in invocation = " + potentialProblem.getMessage());

			potentialProblem.printStackTrace();
		}
		return createdProxy;
	}

}
