package com.ctfs.WICI.Model;

import com.ctfs.WICI.Servlet.Model.CreditCardApplicationData;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class AccountApplicationSubmissionResponse
{
	WICIResponse 				ResponseData;
	String 						RetrievalToken;
	String 						TransactionState;
	CreditCardApplicationData	ActivationItems;

	public CreditCardApplicationData getActivationItems()
	{
		return this.ActivationItems;
	}
	public void setActivationItems(CreditCardApplicationData activationItems)
	{
		this.ActivationItems = activationItems;
	}
	public WICIResponse getResponseData()
	{
		return ResponseData;
	}
	public void setResponseData(WICIResponse responseData)
	{
		ResponseData = responseData;
	}
	public String getRetrievalToken()
	{
		return RetrievalToken;
	}
	public void setRetrievalToken(String retrievalToken)
	{
		RetrievalToken = retrievalToken;
	}
	public String getTransactionState()
	{
		return TransactionState;
	}
	public void setTransactionState(String transactionState)
	{
		TransactionState = transactionState;
	}
	

}
