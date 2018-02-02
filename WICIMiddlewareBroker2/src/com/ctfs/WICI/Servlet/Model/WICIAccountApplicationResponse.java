package com.ctfs.WICI.Servlet.Model;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationResponseType;
//import com.sun.org.apache.xml.internal.security.utils.Base64;
import org.apache.commons.codec.binary.Base64;

public class WICIAccountApplicationResponse
{
	String accountNumber;

	public String getAccountNumber()
	{
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber)
	{
		this.accountNumber = accountNumber;
	}
	public String getAppStatus()
	{
		return appStatus;
	}
	
	String encryptedPan;
	
	public String getEncryptedPan() {
		return encryptedPan;
	}

	public void setEncryptedPan(String encryptedPan) {
		this.encryptedPan = encryptedPan;
	}

	String	maskedPAN; //US3692
	public String getMaskedPAN()
	{
		return maskedPAN;
	}
	public void setMaskedPAN(String maskedPAN)
	{
		this.maskedPAN = maskedPAN;
	}
	
	
	String accountReference;
	String expiryDate;
	String creditLimit;
	String apr;
	String cashAPR;

	String appStatus;
	String customerValueInd;

	public WICIAccountApplicationResponse()
	{

	}

	public WICIAccountApplicationResponse entityToModel(AccountApplicationResponseType entity)
	{
		WICIAccountApplicationResponse result = new WICIAccountApplicationResponse();
		result.accountReference = entity.getAccountReference();
		result.appStatus = entity.getAppStatus();
		result.customerValueInd = entity.getCustomerValueInd();
		result.expiryDate = entity.getExpiryDate();

		try
		{
			result.accountNumber = entity.getAccountNumber();
		}
		catch (Exception e)
		{
			result.accountNumber = null;
		}
		
		try
		{
			result.encryptedPan = entity.getEncryptedPan();
		}
		catch (Exception e)
		{
			result.encryptedPan = null;
		}

		try
		{
			result.creditLimit = entity.getCreditLimit().toString();
		}
		catch (Exception e)
		{
			result.creditLimit = null;
		}
		try
		{
			result.apr = entity.getApr().toString();
		}
		catch (Exception e)
		{
			result.apr = null;
		}
		try
		{
			result.cashAPR = entity.getCashAPR().toString();
		}
		catch (Exception e)
		{
			result.cashAPR = null;
		}
		
		
		//US3692
		try
		{
			result.maskedPAN = entity.getMaskedPAN().toString();
		}
		catch (Exception e)
		{
			result.maskedPAN = null;
		}
		

		return result;
	}
}
