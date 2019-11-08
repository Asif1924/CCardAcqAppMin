package com.ctfs.WICI.Servlet.Model;

import javax.xml.namespace.QName;

public class WICIConfiguration
{
	Integer accountApplicationDelay;

	public Integer getAccountApplicationDelay()
	{
		return accountApplicationDelay;
	}

	public void setAccountApplicationDelay(Integer accountApplicationDelay)
	{
		this.accountApplicationDelay = accountApplicationDelay;
	}

	String webservicesEndpoint;
	QName serviceName;

	public String getWebservicesEndpoint()
	{
		return webservicesEndpoint;
	}

	public void setWebservicesEndpoint(String webservicesEndpoint)
	{
		this.webservicesEndpoint = webservicesEndpoint;
	}

	public QName getServiceName()
	{
		return serviceName;
	}

	public void setServiceName(QName serviceName)
	{
		this.serviceName = serviceName;
	}
	
	String outletTypeId;

	public String getOutletTypeId() {
		return outletTypeId;
	}

	public void setOutletTypeId(String outletTypeId) {
		this.outletTypeId = outletTypeId;
	}
}
