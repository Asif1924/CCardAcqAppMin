package com.ctfs.WICI.Servlet.Model;

import com.ctfs.WICI.Model.DictionaryInfo;

public class WICILoginResponse
{
	

	String statusCode;
	String LTPAToken;
	String message;
	String roles;
	String roleId;
	String password;
	String enrollmentDate;
	String agentId;
	boolean enableEnstreamAuth;
	boolean isDebugMode;
	WICICheckLocationResponse checkLocation;
	DictionaryInfo dictionaryInfo;
	String trainingModuleEffectiveDate;
	String checkAttestation_List;
	
	public String getCheckAttestation_List() {
		return checkAttestation_List;
	}

	public void setCheckAttestation_List(String checkAttestation_List) {
		this.checkAttestation_List = checkAttestation_List;
	}

	public String getAgentId() {
		return agentId;
	}

	public void setAgentId(String agentId) {
		this.agentId = agentId;
	}
	
	public String getEnrollmentDate() {
		return enrollmentDate;
	}

	public void setEnrollmentDate(String enrollmentDate) {
		this.enrollmentDate = enrollmentDate;
	}
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	
	public DictionaryInfo getDictionaryInfo() {
		return dictionaryInfo;
	}

	public void setDictionaryInfo(DictionaryInfo dictionaryInfo) {
		this.dictionaryInfo = dictionaryInfo;
	}

	public String getRoles()
	{
		return roles;
	}

	public void setRoles(String roles)
	{
		this.roles = roles;
	}

	public String getMessage()
	{
		return message;
	}

	public void setMessage(String message)
	{
		this.message = message;
	}

	public WICICheckLocationResponse getCheckLocation()
	{
		return checkLocation;
	}

	public void setCheckLocation(WICICheckLocationResponse checkLocation)
	{
		this.checkLocation = checkLocation;
	}

	public String getStatusCode()
	{
		return statusCode;
	}

	public void setStatusCode(String statusCode)
	{
		this.statusCode = statusCode;
	}

	public String getLTPAToken()
	{
		return LTPAToken;
	}

	public void setLTPAToken(String lTPAToken)
	{
		LTPAToken = lTPAToken;
	}
	
	public String getRoleId() {
		return roleId;
	}


	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}

	/**
	 * @return the enableEnstreamAuth
	 */
	public boolean isEnableEnstreamAuth() {
		return enableEnstreamAuth;
	}

	/**
	 * @param enableEnstreamAuth the enableEnstreamAuth to set
	 */
	public void setEnableEnstreamAuth(boolean enableEnstreamAuth) {
		this.enableEnstreamAuth = enableEnstreamAuth;
	}

	public boolean isDebugMode() {
		return isDebugMode;
	}

	public void setDebugMode(boolean isDebugMode) {
		this.isDebugMode = isDebugMode;
	}

	public String getTrainingModuleEffectiveDate() {
		return trainingModuleEffectiveDate;
	}

	public void setTrainingModuleEffectiveDate(String trainingModuleEffectiveDate) {
		this.trainingModuleEffectiveDate = trainingModuleEffectiveDate;
	}

	@Override
	public String toString() {
		return "WICILoginResponse [statusCode=" + statusCode + ", LTPAToken="
				+ LTPAToken + ", message=" + message + ", roles=" + roles
				+ ", roleId=" + roleId + ", password=" + password
				+ ", enrollmentDate=" + enrollmentDate + ", agentId=" + agentId
				+ ", enableEnstreamAuth=" + enableEnstreamAuth
				+ ", isDebugMode=" + isDebugMode + ", checkLocation="
				+ checkLocation + ", dictionaryInfo=" + dictionaryInfo
				+ ", trainingModuleEffectiveDate="
				+ trainingModuleEffectiveDate + ", checkAttestation_List="
				+ checkAttestation_List + "]";
	}



}
