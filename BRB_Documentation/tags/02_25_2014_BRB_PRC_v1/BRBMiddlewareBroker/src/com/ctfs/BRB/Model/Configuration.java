package com.ctfs.BRB.Model;

import javax.xml.namespace.QName;

import com.ctfs.BRB.Interfaces.IConfiguration;

public class Configuration implements IConfiguration {
	protected String	webservicesEndpoint;
	protected QName	serviceName;	

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
}
