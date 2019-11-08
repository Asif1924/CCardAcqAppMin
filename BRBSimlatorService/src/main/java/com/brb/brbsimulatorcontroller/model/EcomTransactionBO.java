package com.brb.brbsimulatorcontroller.model;

import java.util.Date;

public class EcomTransactionBO {
	
	private String transactionId;
	private String profileId;
	private String email;
	private String firstName;
	private String lastName;
	private String addressLine1;
	private String addressLine2;
	private String city;
	private String province;
	private String postalCode;
	private String phoneNumber;
	private String loyaltyNumber;
	private String loyaltyProgram;
	private Date transactionDate;
	private String requestingSystem;
	
	public String getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}
	public String getProfileId() {
		return profileId;
	}
	public void setProfileId(String profileId) {
		this.profileId = profileId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
	public String getAddressLine1() {
		return addressLine1;
	}
	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}
	public String getAddressLine2() {
		return addressLine2;
	}
	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getPostalCode() {
		return postalCode;
	}
	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getLoyaltyNumber() {
		return loyaltyNumber;
	}
	public void setLoyaltyNumber(String loyaltyNumber) {
		this.loyaltyNumber = loyaltyNumber;
	}
	public String getLoyaltyProgram() {
		return loyaltyProgram;
	}
	public void setLoyaltyProgram(String loyaltyProgram) {
		this.loyaltyProgram = loyaltyProgram;
	}
	public Date getTransactionDate() {
		return transactionDate;
	}
	public void setTransactionDate(Date transactionDate) {
		this.transactionDate = transactionDate;
	}
	public String getRequestingSystem() {
		return requestingSystem;
	}
	public void setRequestingSystem(String requestingSystem) {
		this.requestingSystem = requestingSystem;
	}

}
