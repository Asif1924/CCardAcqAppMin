package com.ctfs.BRB.Interfaces;

import javax.xml.namespace.QName;

public interface IConfiguration
{
	String getWebservicesEndpoint();
	QName getServiceName();
	
	void setWebservicesEndpoint(String webservicesEndpoint);	
	void setServiceName(QName serviceName);
}
