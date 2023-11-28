package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;

public class WICIAgentInfoRequest implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String employerID;
	private String agentID;
	private String userLocation;
	private String apkVersion;
	private String password;
	private String userOperation;
	private String userName;
	private String locale;
	private String roleId;
	private String mfgSerial;
	private String buildSerial;
	
	/**
	 * @return the employerID
	 */
	public String getEmployerID() {
		return employerID;
	}
	/**
	 * @param employerID the employerID to set
	 */
	public void setEmployerID(String employerID) {
		this.employerID = employerID;
	}
	/**
	 * @return the agentID
	 */
	public String getAgentID() {
		return agentID;
	}
	/**
	 * @param agentID the agentID to set
	 */
	public void setAgentID(String agentID) {
		this.agentID = agentID;
	}
	/**
	 * @return the userLocation
	 */
	public String getUserLocation() {
		return userLocation;
	}
	/**
	 * @param userLocation the userLocation to set
	 */
	public void setUserLocation(String userLocation) {
		this.userLocation = userLocation;
	}
	/**
	 * @return the apkVersion
	 */
	public String getApkVersion() {
		return apkVersion;
	}
	/**
	 * @param apkVersion the apkVersion to set
	 */
	public void setApkVersion(String apkVersion) {
		this.apkVersion = apkVersion;
	}
	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}
	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	/**
	 * @return the userOperation
	 */
	public String getUserOperation() {
		return userOperation;
	}
	/**
	 * @param userOperation the userOperation to set
	 */
	public void setUserOperation(String userOperation) {
		this.userOperation = userOperation;
	}
	/**
	 * @return the userName
	 */
	public String getUserName() {
		return userName;
	}
	/**
	 * @param userName the userName to set
	 */
	public void setUserName(String userName) {
		this.userName = userName;
	}
	/**
	 * @return the locale
	 */
	public String getLocale() {
		return locale;
	}
	/**
	 * @param locale the locale to set
	 */
	public void setLocale(String locale) {
		this.locale = locale;
	}
	/**
	 * @return the roleId
	 */
	public String getRoleId() {
		return roleId;
	}
	/**
	 * @param roleId the roleId to set
	 */
	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}
	/**
	 * @return the mfgSerial
	 */
	public String getMfgSerial() {
		return mfgSerial;
	}
	/**
	 * @param mfgSerial the mfgSerial to set
	 */
	public void setMfgSerial(String mfgSerial) {
		this.mfgSerial = mfgSerial;
	}
	/**
	 * @return the buildSerial
	 */
	public String getBuildSerial() {
		return buildSerial;
	}
	/**
	 * @param buildSerial the buildSerial to set
	 */
	public void setBuildSerial(String buildSerial) {
		this.buildSerial = buildSerial;
	}
	
}
