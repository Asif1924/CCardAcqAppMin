package com.ctfs.BRB.Model;

import java.io.Serializable;

public class BRBBaseTable implements Serializable
{	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	protected String transactionId;	
	public static final String EMPTY_STRING = "";

	public BRBBaseTable()
	{
		this.transactionId = null;
	}

	public BRBBaseTable(String transactionId)
	{
		this.transactionId = transactionId;
	}
	public String getTransactionId()
	{
		return transactionId;
	}

	public void setTransactionId(String transactionId)
	{
		this.transactionId = transactionId;
	}
}
