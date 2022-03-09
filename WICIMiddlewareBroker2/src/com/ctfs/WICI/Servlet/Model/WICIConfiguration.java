package com.ctfs.WICI.Servlet.Model;

import javax.xml.namespace.QName;

public class WICIConfiguration
{
	Integer accountApplicationDelay;
	String dssEndPoint;
	String jksTlsVersion;
	String jksPassword;
	String jksPath;
	String dssTmxEndPoint;
	String dssEmailEndPoint;
	String dssDIIEndPoint;
	String jwtToken;
	String dssserviceEnv;
	String dsssubmitAppEndPoint;
	String shareserviceEnabled;
	String jobDescEndPoint;
	
	
	/**
	 * @return the jobDescEndPoint
	 */
	public String getJobDescEndPoint() {
		return jobDescEndPoint;
	}


	/**
	 * @param jobDescEndPoint the jobDescEndPoint to set
	 */
	public void setJobDescEndPoint(String jobDescEndPoint) {
		this.jobDescEndPoint = jobDescEndPoint;
	}


	public String getShareserviceEnabled() {
		return shareserviceEnabled;
	}


	public void setShareserviceEnabled(String shareserviceEnabled) {
		this.shareserviceEnabled = shareserviceEnabled;
	}


	public String getDsssubmitAppEndPoint() {
		return dsssubmitAppEndPoint;
	}

	
	public void setDsssubmitAppEndPoint(String dsssubmitAppEndPoint) {
		this.dsssubmitAppEndPoint = dsssubmitAppEndPoint;
	}

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

	public String getDssTmxEndPoint() {
		return dssTmxEndPoint;
	}

	public void setDssTmxEndPoint(String dssTmxEndPoint) {
		this.dssTmxEndPoint = dssTmxEndPoint;
	}

	public String getDssEmailEndPoint() {
		return dssEmailEndPoint;
	}

	public void setDssEmailEndPoint(String dssEmailEndPoint) {
		this.dssEmailEndPoint = dssEmailEndPoint;
	}

	public String getDssDIIEndPoint() {
		return dssDIIEndPoint;
	}

	public void setDssDIIEndPoint(String dssDIIEndPoint) {
		this.dssDIIEndPoint = dssDIIEndPoint;
	}

	public String getJwtToken() {
		return jwtToken;
	}

	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}

	public String getDssserviceEnv() {
		return dssserviceEnv;
	}

	public void setDssserviceEnv(String dssserviceEnv) {
		this.dssserviceEnv = dssserviceEnv;
	}

	
}
