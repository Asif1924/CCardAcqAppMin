package com.ctfs.WICI.Helper;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.logging.Logger;
import com.channel.ctfs.ctc.webicgateway.AccountAcquisitionPortalProxy;
import com.ctc.ctfs.channel.sharedservices.SharedWebServicesSOAPProxy;
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

			String webservicesEndpoint = conf.getWebservicesEndpoint();
			URL wsdlLocation = new URL(webservicesEndpoint);
			createdProxy = new AccountAcquisitionPortalProxy(wsdlLocation, conf.getServiceName());
		}
		catch (MalformedURLException potentialProblem)
		{

			log.warning(sMethod + "---exception in invocation = " + potentialProblem.getMessage());

			potentialProblem.printStackTrace();
		}
		return createdProxy;
	}
	
	public SharedWebServicesSOAPProxy createWICIWebSharedServicesPortalProxy()
	{
		String sMethod = this.getClass().getName() + "[createWICIWebServicesPortalProxy] ";
		log.info(sMethod);

		SharedWebServicesSOAPProxy createdProxy = null;

		try
		{
			log.info("---invoking the web service");

			WICIConfiguration conf = new WICIConfigurationFactory().createSharedServicesConfiguration();

			String webservicesEndpoint = conf.getWebservicesEndpoint();
			URL wsdlLocation = new URL(webservicesEndpoint);
			createdProxy = new SharedWebServicesSOAPProxy(wsdlLocation, conf.getServiceName());
		}
		catch (MalformedURLException potentialProblem)
		{

			log.warning(sMethod + "---exception in invocation = " + potentialProblem.getMessage());

			potentialProblem.printStackTrace();
		}
		return createdProxy;
	}
	

}
