package com.ctfs.WICI.Model;

public class LoginInfo {
	
	
public String getEmployerID() {
	return employerID;
}
public void setEmployerID(String employerID) {
	this.employerID = employerID;
}
public String getAgentID() {
	return agentID;
}
public void setAgentID(String agentID) {
	this.agentID = agentID;
}
public String getUserLocation() {
	return userLocation;
}
public void setUserLocation(String userLocation) {
	this.userLocation = userLocation;
}
public String getApkVersion() {
	return apkVersion;
}
public void setApkVersion(String apkVersion) {
	this.apkVersion = apkVersion;
}
public String getAuthfieldValue() {
	return authfieldValue;
}
public void setAuthfieldValue(String authfieldValue) {
	this.authfieldValue = authfieldValue;
}
public String getMfgSerial() {
	return MfgSerial;
}
public void setMfgSerial(String mfgSerial) {
	MfgSerial = mfgSerial;
}
public String getBuildSerial() {
	return BuildSerial;
}
public void setBuildSerial(String buildSerial) {
	BuildSerial = buildSerial;
}


String employerID;
String agentID;
String userLocation;
String apkVersion;
String authfieldValue;
String MfgSerial;
String BuildSerial;
}
