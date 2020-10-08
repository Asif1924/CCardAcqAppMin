package com.ctfs.WICI.Servlet.Model;

import javax.xml.namespace.QName;

public class WICIConfiguration
{
	Integer accountApplicationDelay;
	String dssEndPoint;
	String jksTlsVersion;
	String jksPassword;
	String jksPath;
	
	public String getJksTlsVersion() {
		return jksTlsVersion;
	}

	public void setJksTlsVersion(String jksTlsVersion) {
		this.jksTlsVersion = jksTlsVersion;
	}

	
	public String getJksPath() {
		return jksPath;
	}

	public void setJksPath(String jksPath) {
		this.jksPath = jksPath;
	}

	public String getJksPassword() {
		return jksPassword;
	}

	public void setJksPassword(String jksPassword) {
		this.jksPassword = jksPassword;
	}


	public String getDssEndPoint() {
		return dssEndPoint;
	}

	public void setDssEndPoint(String dssEndPoint) {
		this.dssEndPoint = dssEndPoint;
	}

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
