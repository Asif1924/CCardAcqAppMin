package com.ctfs.WICI.Model;

import java.io.Serializable;
import java.sql.Blob;
import java.util.Date;


public class TrainingAttestationRequest implements Serializable {

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
	
	public byte[] getSignature() {
		return signature;
	}
	public void setSignature(byte[] signature) {
		this.signature = signature;
	}
	
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
	public String toString() {
		return "TrainingAttestationRequest [storeLocationNumber=" + storeLocationNumber + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", trainingContentVersion=" + trainingContentVersion + ", employeeNumber="
				+ employeeNumber + ", userName=" + userName + ", signature="
				+ (signature != null ? arrayToString(signature, signature.length) : null) + "]";
	}
	private String arrayToString(Object array, int len) {
		StringBuffer buffer = new StringBuffer();
		buffer.append("[");
		for (int i = 0; i < len; i++) {
			if (i > 0)
				buffer.append(", ");
			if (array instanceof byte[])
				buffer.append(((byte[]) array)[i]);
		}
		buffer.append("]");
		return buffer.toString();
	}
	
	
	
}
