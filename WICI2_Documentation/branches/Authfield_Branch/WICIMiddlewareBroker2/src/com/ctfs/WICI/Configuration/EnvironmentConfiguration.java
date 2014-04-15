package com.ctfs.WICI.Configuration;

import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.channel.ctfs.ctc.webicgateway.AccountAcquisitionPortalProxy;

public interface EnvironmentConfiguration
{
	public WICIConfiguration getWebServicesEndpoint();

	public AccountAcquisitionPortalProxy getWICIWebServicesProxy();
}
