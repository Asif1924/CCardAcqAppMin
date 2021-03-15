package com.ctfs.WICI.Model;

import java.io.Serializable;

public class EmailRiskAssessmentRequest implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String tabSerialNumber;
	private String phoneNumber;
	private String emailAddress;
	private String phone_Type;
	private String firstName;
	private String lastName;
	private String birthDate;
	private String province;
	private String postCode;
	private String city;
	private String addressline1;
	private String addressline2;
	private String sin;
	private String loginId;
	private String storePostCode;

	public String getTabSerialNumber() {
		return tabSerialNumber;
	}
	public void setTabSerialNumber(String tabSerialNumber) {
		this.tabSerialNumber = tabSerialNumber;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getEmailAddress() {
		return emailAddress;
	}
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
	public String getPhone_Type() {
		return phone_Type;
	}
	public void setPhone_Type(String phone_Type) {
		this.phone_Type = phone_Type;
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
	public String getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getPostCode() {
		return postCode;
	}
	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getAddressline1() {
		return addressline1;
	}
	public void setAddressline1(String addressline1) {
		this.addressline1 = addressline1;
	}
	public String getAddressline2() {
		return addressline2;
	}
	public void setAddressline2(String addressline2) {
		this.addressline2 = addressline2;
	}
	public String getSin() {
		return sin;
	}
	public void setSin(String sin) {
		this.sin = sin;
	}
	
	public String getLoginId() {
		return loginId;
	}
	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}
	public String getStorePostCode() {
		return storePostCode;
	}
	public void setStorePostCode(String storePostCode) {
		this.storePostCode = storePostCode;
	}
	@Override
	public String toString() {
		return "EmailRiskAssessmentRequest [tabSerialNumber=" + tabSerialNumber
				+ ", phoneNumber=" + phoneNumber + ", emailAddress="
				+ emailAddress + ", phone_Type=" + phone_Type + ", firstName="
				+ firstName + ", lastName=" + lastName + ", birthDate="
				+ birthDate + ", province=" + province + ", postCode="
				+ postCode + ", city=" + city + ", addressline1="
				+ addressline1 + ", addressline2=" + addressline2 + ", sin="
				+ sin + ", loginId=" + loginId + ", storePostCode="
				+ storePostCode + "]";
	}
	
	
	

}
