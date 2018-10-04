package com.ctfs.BRB.Interfaces;

import javax.xml.namespace.QName;

public interface IConfiguration
{
	String getWebservicesEndpointforSS();
	QName getServiceNameforSS();
	
	void setWebservicesEndpointforSS(String webservicesEndpointforSS);	
	void setServiceNameforSS(QName serviceNameforSS);
}
