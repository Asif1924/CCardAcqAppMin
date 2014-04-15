package com.ctfs.BRB.Configuration;

import com.ctfs.BRB.Interfaces.IConfiguration;
import com.channel.ctfs.ctc.webicgateway.AccountAcquisitionPortalProxy;

public interface EnvironmentConfiguration {
	public IConfiguration getWebServicesEndpoint() throws Exception;
	public AccountAcquisitionPortalProxy getWebServicesProxy() throws Exception;
}
