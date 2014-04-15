package com.ctfs.BRB.dblayer;

import java.io.Serializable;
import java.sql.Timestamp;

import com.ctfs.BRB.dblayer.interfaces.ICustomerTransactionTableEntity;

/**
 * The persistent class for the CUSTOMERTRANSACTION database table.
 * 
 */
public class CustomerTransactionTableEntity implements Serializable, ICustomerTransactionTableEntity {
	private static final long serialVersionUID = 1L;

	private String transactionId;
	private String addressLine1;
	private String addressLine2;
	private String city;
	private String email;
	private String firstName;
	private String lastName;
	private String loyaltyNumber;
	private String loyaltyProgram;
	private String phoneNumber;
	private String postalCode;
	private String profileId;
	private String province;
	private String requestingSystem;
	private Timestamp transactionDate;
	
    public CustomerTransactionTableEntity() {
    }

    @Override
	public String getTransactionId() {
		return this.transactionId;
	}

    @Override
	public void setTransactionId(String transactionid) {
		this.transactionId = transactionid;
	}

    @Override
	public String getAddressLine1() {
		return this.addressLine1;
	}

    @Override
	public void setAddressLine1(String addressline1) {
		this.addressLine1 = addressline1;
	}

	@Override
	public String getAddressLine2() {
		return this.addressLine2;
	}

	@Override
	public void setAddressLine2(String addressline2) {
		this.addressLine2 = addressline2;
	}

	@Override
	public String getCity() {
		return this.city;
	}

	@Override
	public void setCity(String city) {
		this.city = city;
	}

	@Override
	public String getEmail() {
		return this.email;
	}

	@Override
	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String getFirstName() {
		return this.firstName;
	}
	
	@Override
	public void setFirstName(String firstname) {
		this.firstName = firstname;
	}

	@Override
	public String getLastName() {
		return this.lastName;
	}

	@Override
	public void setLastName(String lastname) {
		this.lastName = lastname;
	}

	@Override
	public String getLoyaltyNumber() {
		return this.loyaltyNumber;
	}

	@Override
	public void setLoyaltyNumber(String loyaltynumber) {
		this.loyaltyNumber = loyaltynumber;
	}

	@Override
	public String getLoyaltyProgram() {
		return this.loyaltyProgram;
	}

	@Override
	public void setLoyaltyProgram(String loyaltyprogram) {
		this.loyaltyProgram = loyaltyprogram;
	}

	@Override
	public String getPhone() {
		return this.phoneNumber;
	}

	@Override
	public void setPhone(String phonenumber) {
		this.phoneNumber = phonenumber;
	}

	@Override
	public String getPostalCode() {
		return this.postalCode;
	}

	@Override
	public void setPostalCode(String postalcode) {
		this.postalCode = postalcode;
	}

	@Override
	public String getEcommCustomerId()
	{
		return this.profileId;
	}

	@Override
	public void setEcommCustomerId(String customerId)
	{
		this.profileId = customerId;		
	}		

	@Override
	public String getProvince() {
		return this.province;
	}

	@Override
	public void setProvince(String province) {
		this.province = province;
	}

	@Override
	public String getRequestingSystem() {
		return this.requestingSystem;
	}

	@Override
	public void setRequestingSystem(String requestingsystem) {
		this.requestingSystem = requestingsystem;
	}

	@Override
	public Timestamp getTransactionDate() {
		return this.transactionDate;
	}

	@Override
	public void setTransactionDate(Timestamp transactionDate) {
		this.transactionDate = transactionDate;
	}	

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString()
	{
		return "Customertransaction [transactionid=" + transactionId + ", addressline1=" + addressLine1 + ", addressline2=" + addressLine2 + ", city=" + city + ", email=" + email + ", firstname="
				+ firstName + ", lastname=" + lastName + ", loyaltynumber=" + loyaltyNumber + ", loyaltyprogram=" + loyaltyProgram + ", phonenumber=" + phoneNumber + ", postalcode=" + postalCode
				+ ", profileid=" + profileId + ", province=" + province + ", requestingsystem=" + requestingSystem + ", transactiondate=" + transactionDate + "]";
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode()
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + ((transactionId == null) ? 0 : transactionId.hashCode());
		return result;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj)
	{
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CustomerTransactionTableEntity other = (CustomerTransactionTableEntity) obj;
		if (transactionId == null)
		{
			if (other.transactionId != null)
				return false;
		}
		else if (!transactionId.equals(other.transactionId))
			return false;
		return true;
	}
	
	public boolean isEntityValid () {
		return transactionId != null && !transactionId.isEmpty();
	}
}