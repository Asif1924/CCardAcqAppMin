package com.ctfs.BRB.Configuration;

import com.channel.ctfs.ctc.webicgateway.AccountAcquisitionPortalProxy;
import com.ctc.ctfs.channel.sharedservices.SharedWebServicesSOAPProxy;
import com.ctfs.BRB.Interfaces.IConfiguration;

public interface EnvironmentConfiguration {
	public IConfiguration getWebServicesEndpoint() throws Exception;
	public AccountAcquisitionPortalProxy getWebServicesProxy() throws Exception;
	public SharedWebServicesSOAPProxy getSharedWebServicesProxy() throws Exception;
}
