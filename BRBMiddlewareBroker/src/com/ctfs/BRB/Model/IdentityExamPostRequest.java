package com.ctfs.BRB.Model;

import java.util.List;

public class IdentityExamPostRequest
{
	List <BaseModel>		accountApplicationData;
	String					language;
    String					firstName;
    String					middleName;
    String					lastName;
    String					phoneNumber;
    String					dateOfBirth;
    String					addressLine1;
    String					city;
    String					province;
    String 					postalCode;
    String					transactionId;
    String					brbTransactionId;
    String					TrackingScreenID;
    
	public List<BaseModel> getAccountApplicationData()
	{
		return accountApplicationData;
	}
	public void setAccountApplicationData(List<BaseModel> accountApplicationData)
	{
		this.accountApplicationData = accountApplicationData;
	}
	public String getLanguage()
	{
		return language;
	}
	public void setLanguage(String language)
	{
		this.language = language;
	}
	public String getFirstName()
	{
		return firstName;
	}
	public void setFirstName(String firstName)
	{
		this.firstName = firstName;
	}
	public String getMiddleName()
	{
		return middleName;
	}
	public void setMiddleName(String middleName)
	{
		this.middleName = middleName;
	}
	public String getLastName()
	{
		return lastName;
	}
	public void setLastName(String lastName)
	{
		this.lastName = lastName;
	}
	public String getPhoneNumber()
	{
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber)
	{
		this.phoneNumber = phoneNumber;
	}
	public String getDateOfBirth()
	{
		return dateOfBirth;
	}
	public void setDateOfBirth(String dateOfBirth)
	{
		this.dateOfBirth = dateOfBirth;
	}
	public String getAddressLine1()
	{
		return addressLine1;
	}
	public void setAddressLine1(String addressLine1)
	{
		this.addressLine1 = addressLine1;
	}
	public String getCity()
	{
		return city;
	}
	public void setCity(String city)
	{
		this.city = city;
	}
	public String getProvince()
	{
		return province;
	}
	public void setProvince(String province)
	{
		this.province = province;
	}
	public String getPostalCode()
	{
		return postalCode;
	}
	public void setPostalCode(String postalCode)
	{
		this.postalCode = postalCode;
	}
	public String getTransactionId()
	{
		return transactionId;
	}
	public void setTransactionId(String transactionId)
	{
		this.transactionId = transactionId;
	}
	public String getBrbTransactionId()
	{
		return brbTransactionId;
	}
	public void setBrbTransactionId(String brbTransactionId)
	{
		this.brbTransactionId = brbTransactionId;
	}
	public String getTrackingScreenID()
	{
		return TrackingScreenID;
	}
	public void setTrackingScreenID(String trackingScreenID)
	{
		TrackingScreenID = trackingScreenID;
	}

}
