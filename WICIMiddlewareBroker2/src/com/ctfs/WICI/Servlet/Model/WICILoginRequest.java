package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;

import com.ctfs.WICI.Model.AuthfieldValue;

public class WICILoginRequest implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String employerID;
	private String agentID;
	private String userLocation;
	private String apkVersion;
	private String mfgSerial;
	private String buildSerial;
	private String retailNetwork;
	private String locationID;
	private String derivedUserID;
	private String password;
	private String tabSerialId;
	
	
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
	 * @return the retailNetwork
	 */
	public String getRetailNetwork() {
		return retailNetwork;
	}
	/**
	 * @param retailNetwork the retailNetwork to set
	 */
	public void setRetailNetwork(String retailNetwork) {
		this.retailNetwork = retailNetwork;
	}
	/**
	 * @return the locationID
	 */
	public String getLocationID() {
		return locationID;
	}
	/**
	 * @param locationID the locationID to set
	 */
	public void setLocationID(String locationID) {
		this.locationID = locationID;
	}
	/**
	 * @return the derivedUserID
	 */
	public String getDerivedUserID() {
		return derivedUserID;
	}
	/**
	 * @param derivedUserID the derivedUserID to set
	 */
	public void setDerivedUserID(String derivedUserID) {
		this.derivedUserID = derivedUserID;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	
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
	 * @return the tabSerialId
	 */
	public String getTabSerialId() {
		return tabSerialId;
	}
	/**
	 * @param tabSerialId the tabSerialId to set
	 */
	public void setTabSerialId(String tabSerialId) {
		this.tabSerialId = tabSerialId;
	}
	public String getMfgSerial() {
		return mfgSerial;
	}
	public void setMfgSerial(String mfgSerial) {
		this.mfgSerial = mfgSerial;
	}
	public String getBuildSerial() {
		return buildSerial;
	}
	public void setBuildSerial(String buildSerial) {
		this.buildSerial = buildSerial;
	}
	@Override
	public String toString() {
		return "WICILoginRequest [employerID=" + employerID + ", agentID="
				+ agentID + ", userLocation=" + userLocation + ", apkVersion="
				+ apkVersion + ", mfgSerial=" + mfgSerial + ", buildSerial="
				+ buildSerial + ", retailNetwork=" + retailNetwork
				+ ", locationID=" + locationID + ", derivedUserID="
				+ derivedUserID + ", password=" + password + ", tabSerialId="
				+ tabSerialId + "]";
	}
	

}
