package com.ctfs.BRB.dblayer.interfaces;

import java.sql.Timestamp;

public interface ICustomerTransactionTableEntity
{
	String getTransactionId();	
	String getEcommCustomerId();
	String getEmail();
	String getFirstName();
	String getLastName();
	String getPhone();
	String getAddressLine1();
	String getAddressLine2();
	String getCity();
	String getProvince();
	String getPostalCode();
	String getLoyaltyProgram();
	String getLoyaltyNumber();	
	Timestamp getTransactionDate();	
	String getRequestingSystem();	
		
	//
	void setTransactionDate(Timestamp transactionDate);
	void setTransactionId(String transactionId);	
	void setEcommCustomerId(String customerId);
	void setEmail(String email);
	void setFirstName(String firstName);
	void setLastName(String lastName);
	void setPhone(String phoneNumber);
	void setAddressLine1(String addressLine1);
	void setAddressLine2(String addressLine2);
	void setCity(String city);
	void setProvince(String province);
	void setPostalCode(String postalCode);
	void setLoyaltyProgram(String loyaltyProgram);
	void setLoyaltyNumber(String loyaltyNumber);		
	void setRequestingSystem(String requestingSystem);	
	
	 boolean isEntityValid ();
}
