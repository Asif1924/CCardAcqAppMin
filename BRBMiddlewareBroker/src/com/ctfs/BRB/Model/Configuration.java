package com.ctfs.BRB.Model;

import javax.xml.namespace.QName;

import com.ctfs.BRB.Interfaces.IConfiguration;

public class Configuration implements IConfiguration {
	protected String	webservicesEndpoint;
	protected QName	serviceName;
	
	protected String	webservicesEndpointforSS;
	protected QName	serviceNameforSS;

	public String getWebservicesEndpoint() {
		return webservicesEndpoint;
	}
	
	public QName getServiceName() {
		return serviceName;
	}
	
	public void setWebservicesEndpoint(String webservicesEndpoint) {
		this.webservicesEndpoint = webservicesEndpoint;
	}	
	
	public void setServiceName(QName serviceName) {
		this.serviceName = serviceName;
	}

	public String getWebservicesEndpointforSS() {
		return webservicesEndpointforSS;
	}

	public void setWebservicesEndpointforSS(String webservicesEndpointforSS) {
		this.webservicesEndpointforSS = webservicesEndpointforSS;
	}

	public QName getServiceNameforSS() {
		return serviceNameforSS;
	}

	public void setServiceNameforSS(QName serviceNameforSS) {
		this.serviceNameforSS = serviceNameforSS;
	}
	
	
	
}
