package com.ctfs.WICI.Helper;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.logging.Logger;

import com.ctc.ctfs.channel.sharedservices.SharedWebServicesSOAPProxy;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;

public class WICIPortalProxyFactory
{
	static Logger log = Logger.getLogger(WICIPortalProxyFactory.class.getName());

	
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

			log.warning(sMethod + "---exception in invocation = " + CWE117Fix.encodeCRLF(potentialProblem.getMessage()));

			potentialProblem.printStackTrace();
		}
		return createdProxy;
	}
	

}
