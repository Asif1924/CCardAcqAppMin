package com.ctfs.WICI.Model;


public class ReceiptCustomerInfo
{
	public String getRequestedProductType()
	{
		return requestedProductType;
	}
	public void setRequestedProductType(String requestedProductType)
	{
		this.requestedProductType = requestedProductType;
	}
	public String getFirstName()
	{
		return firstName;
	}
	public void setFirstName(String firstName)
	{
		this.firstName = firstName;
	}
	public String getMiddleInitial()
	{
		return middleInitial;
	}
	public void setMiddleInitial(String middleInitial)
	{
		this.middleInitial = middleInitial;
	}
	public String getLastName()
	{
		return lastName;
	}
	public void setLastName(String lastName)
	{
		this.lastName = lastName;
	}
	public String getApplicantSignature()
	{
		return applicantSignature;
	}
	public void setApplicantSignature(String applicantSignature)
	{
		this.applicantSignature = applicantSignature;
	}
	public String getProvince()
	{
		return province;
	}
	public void setProvince(String province)
	{
		this.province = province;
	}
	public String getPreferredLanguage()
	{
		return preferredLanguage;
	}
	public void setPreferredLanguage(String preferredLanguage)
	{
		this.preferredLanguage = preferredLanguage;
	}
	public String getInsuranceCode()
	{
		return insuranceCode;
	}
	public void setInsuranceCode(String insuranceCode)
	{
		this.insuranceCode = insuranceCode;
	}
	public String getCreditProtector()
	{
		return creditProtector;
	}
	public void setCreditProtector(String creditProtector)
	{
		this.creditProtector = creditProtector;
	}
	public String getIdentityWatch()
	{
		return identityWatch;
	}
	public void setIdentityWatch(String identityWatch)
	{
		this.identityWatch = identityWatch;
	}
	public String getStoreNumber()
	{
		return storeNumber;
	}
	public void setStoreNumber(String storeNumber)
	{
		this.storeNumber = storeNumber;
	}
	String requestedProductType;
	String firstName;
	String middleInitial;
	String lastName;
	String applicantSignature;

	String province;
	String preferredLanguage;
	
	String insuranceCode;
	String creditProtector;
	String identityWatch;
	String storeNumber;
	
}
