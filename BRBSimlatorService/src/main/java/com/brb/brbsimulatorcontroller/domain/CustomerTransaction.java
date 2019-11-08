package com.brb.brbsimulatorcontroller.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * The persistent class for the CUSTOMERTRANSACTION database table.
 * 
 */

@Entity
@Table(name="CUSTOMERTRANSACTION")
public class CustomerTransaction implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="TRANSACTIONID")
	private String transactionId;
	
	@Column(name="PROFILEID")
	private String profileId;
	
	@Column(name="EMAIL")
	private String email;
	
	@Column(name="FIRSTNAME")
	private String firstName;
	
	@Column(name="LASTNAME")
	private String lastName;
	
	@Column(name="ADDRESSLINE1")
	private String addressLine1;
	
	@Column(name="ADDRESSLINE2")
	private String addressLine2;
	
	@Column(name="CITY")
	private String city;
	
	@Column(name="PROVINCE")
	private String province;
	
	@Column(name="POSTALCODE")
	private String postalCode;
	
	@Column(name="PHONENUMBER")
	private String phoneNumber;
	
	@Column(name="LOYALTYNUMBER")
	private String loyaltyNumber;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="TRANSACTIONDATE")
	private Date transactionDate;
	
	@Column(name="LOYALTYPROGRAM")
	private String loyaltyProgram;
	
	@Column(name="REQUESTINGSYSTEM")
	private String requestingSystem;

	public CustomerTransaction() {
		
	}
	
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

	public Date getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(Date transactionDate) {
		this.transactionDate = transactionDate;
	}

	public String getLoyaltyProgram() {
		return loyaltyProgram;
	}

	public void setLoyaltyProgram(String loyaltyProgram) {
		this.loyaltyProgram = loyaltyProgram;
	}

	public String getRequestingSystem() {
		return requestingSystem;
	}

	public void setRequestingSystem(String requestingSystem) {
		this.requestingSystem = requestingSystem;
	}

}
