package com.ctfs.WICI.Configuration;

import com.ctc.ctfs.channel.sharedservices.SharedWebServicesSOAPProxy;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;

public interface EnvironmentConfiguration {

	public WICIConfiguration getSharedServicesEndpoint();

	public SharedWebServicesSOAPProxy getWICISharedServicesProxy();

}
