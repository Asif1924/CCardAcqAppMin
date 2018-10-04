package com.ctfs.BRB.Configuration;

import com.ctc.ctfs.channel.sharedservices.SharedWebServicesSOAPProxy;

public interface EnvironmentConfiguration {
	public SharedWebServicesSOAPProxy getSharedWebServicesProxy() throws Exception;
}
