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
	String cpEligibilityEndPoint;
	
	//Newly Added
	String rewriteLoginEndPoint;
	String rewriteSaveAttestationEndPoint;
	String rewriteRetrieveTrainingEndPoint;
	String rewriteCheckAttestationEndPoint;
	String rewriteInitAccountAppEndPoint;
	String rewritePollAccountAppEndPoint;
	String rewriteAgentEndPoint;
	String rewriteServerAliveEndPoint;
	String rewriteDssServiceEnv;
	String rewriteDSSDIIEndPoint;
	String rewritedssTmxEndPoint;
	String rewritecpEligibilityEndPoint;
	String reWrtieDSSJobDescEndPoint;

	
	public String getJobDescEndPoint() {
		return jobDescEndPoint;
	}

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

	public String getCpEligibilityEndPoint() {
		return cpEligibilityEndPoint;
	}

	public void setCpEligibilityEndPoint(String cpEligibilityEndPoint) {
		this.cpEligibilityEndPoint = cpEligibilityEndPoint;
	}

	/**
	 * @return the rewriteLoginEndPoint
	 */
	public String getRewriteLoginEndPoint() {
		return rewriteLoginEndPoint;
	}

	/**
	 * @param rewriteLoginEndPoint the rewriteLoginEndPoint to set
	 */
	public void setRewriteLoginEndPoint(String rewriteLoginEndPoint) {
		this.rewriteLoginEndPoint = rewriteLoginEndPoint;
	}

	/**
	 * @return the rewriteSaveAttestationEndPoint
	 */
	public String getRewriteSaveAttestationEndPoint() {
		return rewriteSaveAttestationEndPoint;
	}

	/**
	 * @param rewriteSaveAttestationEndPoint the rewriteSaveAttestationEndPoint to set
	 */
	public void setRewriteSaveAttestationEndPoint(
			String rewriteSaveAttestationEndPoint) {
		this.rewriteSaveAttestationEndPoint = rewriteSaveAttestationEndPoint;
	}

	/**
	 * @return the rewriteRetrieveTrainingEndPoint
	 */
	public String getRewriteRetrieveTrainingEndPoint() {
		return rewriteRetrieveTrainingEndPoint;
	}

	/**
	 * @param rewriteRetrieveTrainingEndPoint the rewriteRetrieveTrainingEndPoint to set
	 */
	public void setRewriteRetrieveTrainingEndPoint(
			String rewriteRetrieveTrainingEndPoint) {
		this.rewriteRetrieveTrainingEndPoint = rewriteRetrieveTrainingEndPoint;
	}

	/**
	 * @return the rewriteCheckAttestationEndPoint
	 */
	public String getRewriteCheckAttestationEndPoint() {
		return rewriteCheckAttestationEndPoint;
	}

	/**
	 * @param rewriteCheckAttestationEndPoint the rewriteCheckAttestationEndPoint to set
	 */
	public void setRewriteCheckAttestationEndPoint(
			String rewriteCheckAttestationEndPoint) {
		this.rewriteCheckAttestationEndPoint = rewriteCheckAttestationEndPoint;
	}

	/**
	 * @return the rewriteInitAccountAppEndPoint
	 */
	public String getRewriteInitAccountAppEndPoint() {
		return rewriteInitAccountAppEndPoint;
	}

	/**
	 * @param rewriteInitAccountAppEndPoint the rewriteInitAccountAppEndPoint to set
	 */
	public void setRewriteInitAccountAppEndPoint(
			String rewriteInitAccountAppEndPoint) {
		this.rewriteInitAccountAppEndPoint = rewriteInitAccountAppEndPoint;
	}

	/**
	 * @return the rewritePollAccountAppEndPoint
	 */
	public String getRewritePollAccountAppEndPoint() {
		return rewritePollAccountAppEndPoint;
	}

	/**
	 * @param rewritePollAccountAppEndPoint the rewritePollAccountAppEndPoint to set
	 */
	public void setRewritePollAccountAppEndPoint(
			String rewritePollAccountAppEndPoint) {
		this.rewritePollAccountAppEndPoint = rewritePollAccountAppEndPoint;
	}

	/**
	 * @return the rewriteAgentEndPoint
	 */
	public String getRewriteAgentEndPoint() {
		return rewriteAgentEndPoint;
	}

	/**
	 * @param rewriteAgentEndPoint the rewriteAgentEndPoint to set
	 */
	public void setRewriteAgentEndPoint(String rewriteAgentEndPoint) {
		this.rewriteAgentEndPoint = rewriteAgentEndPoint;
	}

	/**
	 * @return the rewriteServerAliveEndPoint
	 */
	public String getRewriteServerAliveEndPoint() {
		return rewriteServerAliveEndPoint;
	}

	/**
	 * @param rewriteServerAliveEndPoint the rewriteServerAliveEndPoint to set
	 */
	public void setRewriteServerAliveEndPoint(String rewriteServerAliveEndPoint) {
		this.rewriteServerAliveEndPoint = rewriteServerAliveEndPoint;

	}


	/**
	 * @return the rewriteDssServiceEnv
	 */
	public String getRewriteDssServiceEnv() {
		return rewriteDssServiceEnv;
	}

	/**
	 * @param rewriteDssServiceEnv the rewriteDssServiceEnv to set
	 */
	public void setRewriteDssServiceEnv(String rewriteDssServiceEnv) {
		this.rewriteDssServiceEnv = rewriteDssServiceEnv;
	}

	public String getRewriteDSSDIIEndPoint() {
		return rewriteDSSDIIEndPoint;
	}

	public void setRewriteDSSDIIEndPoint(String rewriteDSSDIIEndPoint) {
		this.rewriteDSSDIIEndPoint = rewriteDSSDIIEndPoint;
	}

	public String getRewritedssTmxEndPoint() {
		return rewritedssTmxEndPoint;
	}

	public void setRewritedssTmxEndPoint(String rewritedssTmxEndPoint) {
		this.rewritedssTmxEndPoint = rewritedssTmxEndPoint;
	}

	public String getRewritecpEligibilityEndPoint() {
		return rewritecpEligibilityEndPoint;
	}

	public void setRewritecpEligibilityEndPoint(String rewritecpEligibilityEndPoint) {
		this.rewritecpEligibilityEndPoint = rewritecpEligibilityEndPoint;
	}

	public String getReWrtieDSSJobDescEndPoint() {
		return reWrtieDSSJobDescEndPoint;
	}

	public void setReWrtieDSSJobDescEndPoint(String reWrtieDSSJobDescEndPoint) {
		this.reWrtieDSSJobDescEndPoint = reWrtieDSSJobDescEndPoint;
	}
	
}
