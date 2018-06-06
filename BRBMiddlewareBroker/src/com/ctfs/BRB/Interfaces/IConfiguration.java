package com.ctfs.BRB.Interfaces;

import javax.xml.namespace.QName;

public interface IConfiguration
{
	String getWebservicesEndpoint();
	QName getServiceName();
	
	String getWebservicesEndpointforSS();
	QName getServiceNameforSS();
	
	void setWebservicesEndpoint(String webservicesEndpoint);	
	void setServiceName(QName serviceName);
	
	void setWebservicesEndpointforSS(String webservicesEndpointforSS);	
	void setServiceNameforSS(QName serviceNameforSS);
}
