package com.ctfs.WICI.Servlet.Model;

public class PendAccountApplicationRequest
{
	public String getExternalReferenceId()
	{
		return externalReferenceId;
	}
	public void setExternalReferenceId(String externalReferenceId)
	{
		this.externalReferenceId = externalReferenceId;
	}
	public String getApplicationId()
	{
		return applicationId;
	}
	public void setApplicationId(String applicationId)
	{
		this.applicationId = applicationId;
	}
	public String getAccountReference()
	{
		return accountReference;
	}
	public void setAccountReference(String accountReference)
	{
		this.accountReference = accountReference;
	}	public String getAccountNumber()
	{
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber)
	{
		this.accountNumber = accountNumber;
	}
	public String getExpiryDate()
	{
		return expiryDate;
	}
	public void setExpiryDate(String expiryDate)
	{
		this.expiryDate = expiryDate;
	}
	public String getCreditLimit()
	{
		return creditLimit;
	}
	public void setCreditLimit(String creditLimit)
	{
		this.creditLimit = creditLimit;
	}
	public String getApr()
	{
		return apr;
	}
	public void setApr(String apr)
	{
		this.apr = apr;
	}
	public String getCashAPR()
	{
		return cashAPR;
	}
	public void setCashAPR(String cashAPR)
	{
		this.cashAPR = cashAPR;
	}
	public String getAppStatus()
	{
		return appStatus;
	}
	public void setAppStatus(String appStatus)
	{
		this.appStatus = appStatus;
	}
	public String getCustomerValueInd()
	{
		return customerValueInd;
	}
	public void setCustomerValueInd(String customerValueInd)
	{
		this.customerValueInd = customerValueInd;
	}
	public String getMaskedPAN()
	{
		return maskedPAN;
	}
	public void setMaskedPAN(String maskedPAN)
	{
		this.maskedPAN = maskedPAN;
	}
	public String getEncryptedPan() {
		return encryptedPan;
	}
	public void setEncryptedPan(String encryptedPan) {
		this.encryptedPan = encryptedPan;
	}
	public String getRespCardType() {
		return respCardType;
	}
	public void setRespCardType(String respCardType) {
		this.respCardType = respCardType;
	}
	
	String 	externalReferenceId;
	String 	applicationId;
	String 	accountReference;
	String	accountNumber;
	String	expiryDate;
	String	creditLimit;
	String	apr;
	String	cashAPR;
	String 	appStatus;
	String	customerValueInd;
	String	maskedPAN; //US3692
	String  encryptedPan; // US4709
	String  respCardType;	
}
