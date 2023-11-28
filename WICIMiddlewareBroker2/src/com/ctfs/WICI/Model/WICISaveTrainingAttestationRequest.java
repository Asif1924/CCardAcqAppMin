package com.ctfs.WICI.Model;

import java.io.Serializable;


public class WICISaveTrainingAttestationRequest implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String storeLocationNumber;
	private String firstName;
	private String lastName;
	private String trainingContentVersion;
	private String employeeNumber;
	private String userName;
	private byte[] signature;
	private String outletTypeId;
	private String retailNetwork;
	
	
	public String getOutletTypeId() {
		return outletTypeId;
	}
	public void setOutletTypeId(String outletTypeId) {
		this.outletTypeId = outletTypeId;
	}
	public String getBusinessStoreNumber() {
		return businessStoreNumber;
	}
	public void setBusinessStoreNumber(String businessStoreNumber) {
		this.businessStoreNumber = businessStoreNumber;
	}
	private String businessStoreNumber;
	
	public String getStoreLocationNumber() {
		return storeLocationNumber;
	}
	public void setStoreLocationNumber(String storeLocationNumber) {
		this.storeLocationNumber = storeLocationNumber;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getTrainingContentVersion() {
		return trainingContentVersion;
	}
	public void setTrainingContentVersion(String trainingContentVersion) {
		this.trainingContentVersion = trainingContentVersion;
	}
	public String getEmployeeNumber() {
		return employeeNumber;
	}
	public void setEmployeeNumber(String employeeNumber) {
		this.employeeNumber = employeeNumber;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	@Override
	public String toString() {
		return "TrainingAttetationRequest [storeLocationNumber="
				+ storeLocationNumber + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", trainingContentVersion="
				+ trainingContentVersion + ", employeeNumber=" + employeeNumber
				+ ", userName=" + userName + "]";
	}
	public byte[] getSignature() {
		return signature;
	}
	public void setSignature(byte[] signature) {
		this.signature = signature;
	}
	public String getRetailNetwork() {
		return retailNetwork;
	}
	public void setRetailNetwork(String retailNetwork) {
		this.retailNetwork = retailNetwork;
	}
	
	
	
	
}
