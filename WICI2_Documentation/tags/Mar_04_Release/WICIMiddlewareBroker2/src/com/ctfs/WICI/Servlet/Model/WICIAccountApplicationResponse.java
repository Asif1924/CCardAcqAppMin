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
			// result.accountNumber = Base64.encode(entity.getAccountNumber());
			result.accountNumber = Base64.encodeBase64String(entity.getAccountNumber());
		}
		catch (Exception e)
		{
			result.accountNumber = null;
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

		return result;
	}
}
