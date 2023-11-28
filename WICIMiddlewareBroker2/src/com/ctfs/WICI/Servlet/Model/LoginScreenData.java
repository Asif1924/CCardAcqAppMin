package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;

public class LoginScreenData implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String employerID;
	private String agentID;
	private String firstName;
	private String lastName;
	private String retailNetWork;
	private String longitude;
	private String latitude;
	private String firstNameOtherStaffMember;
	private String lastNameOtherStaffMember;
	private String employeeNumberIdOtherStaffMember;
	private String outletProvince;
	private String locationFieldIDADM;
	private String businessStoreNumber;
	private String locationFieldID;
	private boolean isDebugMode;
	private String outletPostalcode;
	private String password;
	
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
	 * @return the firstName
	 */
	public String getFirstName() {
		return firstName;
	}
	/**
	 * @param firstName the firstName to set
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	/**
	 * @return the lastName
	 */
	public String getLastName() {
		return lastName;
	}
	/**
	 * @param lastName the lastName to set
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	/**
	 * @return the retailNetWork
	 */
	public String getRetailNetWork() {
		return retailNetWork;
	}
	/**
	 * @param retailNetWork the retailNetWork to set
	 */
	public void setRetailNetWork(String retailNetWork) {
		this.retailNetWork = retailNetWork;
	}
	/**
	 * @return the longitude
	 */
	public String getLongitude() {
		return longitude;
	}
	/**
	 * @param longitude the longitude to set
	 */
	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}
	/**
	 * @return the latitude
	 */
	public String getLatitude() {
		return latitude;
	}
	/**
	 * @param latitude the latitude to set
	 */
	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}
	/**
	 * @return the firstNameOtherStaffMember
	 */
	public String getFirstNameOtherStaffMember() {
		return firstNameOtherStaffMember;
	}
	/**
	 * @param firstNameOtherStaffMember the firstNameOtherStaffMember to set
	 */
	public void setFirstNameOtherStaffMember(String firstNameOtherStaffMember) {
		this.firstNameOtherStaffMember = firstNameOtherStaffMember;
	}
	/**
	 * @return the lastNameOtherStaffMember
	 */
	public String getLastNameOtherStaffMember() {
		return lastNameOtherStaffMember;
	}
	/**
	 * @param lastNameOtherStaffMember the lastNameOtherStaffMember to set
	 */
	public void setLastNameOtherStaffMember(String lastNameOtherStaffMember) {
		this.lastNameOtherStaffMember = lastNameOtherStaffMember;
	}
	/**
	 * @return the employeeNumberIdOtherStaffMember
	 */
	public String getEmployeeNumberIdOtherStaffMember() {
		return employeeNumberIdOtherStaffMember;
	}
	/**
	 * @param employeeNumberIdOtherStaffMember the employeeNumberIdOtherStaffMember to set
	 */
	public void setEmployeeNumberIdOtherStaffMember(
			String employeeNumberIdOtherStaffMember) {
		this.employeeNumberIdOtherStaffMember = employeeNumberIdOtherStaffMember;
	}
	/**
	 * @return the outletProvince
	 */
	public String getOutletProvince() {
		return outletProvince;
	}
	/**
	 * @param outletProvince the outletProvince to set
	 */
	public void setOutletProvince(String outletProvince) {
		this.outletProvince = outletProvince;
	}
	/**
	 * @return the locationFieldIDADM
	 */
	public String getLocationFieldIDADM() {
		return locationFieldIDADM;
	}
	/**
	 * @param locationFieldIDADM the locationFieldIDADM to set
	 */
	public void setLocationFieldIDADM(String locationFieldIDADM) {
		this.locationFieldIDADM = locationFieldIDADM;
	}
	/**
	 * @return the businessStoreNumber
	 */
	public String getBusinessStoreNumber() {
		return businessStoreNumber;
	}
	/**
	 * @param businessStoreNumber the businessStoreNumber to set
	 */
	public void setBusinessStoreNumber(String businessStoreNumber) {
		this.businessStoreNumber = businessStoreNumber;
	}
	/**
	 * @return the locationFieldID
	 */
	public String getLocationFieldID() {
		return locationFieldID;
	}
	/**
	 * @param locationFieldID the locationFieldID to set
	 */
	public void setLocationFieldID(String locationFieldID) {
		this.locationFieldID = locationFieldID;
	}
	/**
	 * @return the isDebugMode
	 */
	public boolean isDebugMode() {
		return isDebugMode;
	}
	/**
	 * @param isDebugMode the isDebugMode to set
	 */
	public void setDebugMode(boolean isDebugMode) {
		this.isDebugMode = isDebugMode;
	}
	/**
	 * @return the outletPostalcode
	 */
	public String getOutletPostalcode() {
		return outletPostalcode;
	}
	/**
	 * @param outletPostalcode the outletPostalcode to set
	 */
	public void setOutletPostalcode(String outletPostalcode) {
		this.outletPostalcode = outletPostalcode;
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
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "LoginScreenData [employerID=" + employerID + ", agentID="
				+ agentID + ", firstName=" + firstName + ", lastName="
				+ lastName + ", retailNetWork=" + retailNetWork
				+ ", longitude=" + longitude + ", latitude=" + latitude
				+ ", firstNameOtherStaffMember=" + firstNameOtherStaffMember
				+ ", lastNameOtherStaffMember=" + lastNameOtherStaffMember
				+ ", employeeNumberIdOtherStaffMember="
				+ employeeNumberIdOtherStaffMember + ", outletProvince="
				+ outletProvince + ", locationFieldIDADM=" + locationFieldIDADM
				+ ", businessStoreNumber=" + businessStoreNumber
				+ ", locationFieldID=" + locationFieldID + ", isDebugMode="
				+ isDebugMode + ", outletPostalcode=" + outletPostalcode
				+ ", password=" + password + "]";
	}
	
}
