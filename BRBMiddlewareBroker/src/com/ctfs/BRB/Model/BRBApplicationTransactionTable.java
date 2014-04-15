package com.ctfs.BRB.Model;

import java.io.Serializable;

import com.ctfs.BRB.Interfaces.AppTransaction;

/**
 * Don't forget update (re-map) AppTransaction interface, AppTransactionTableToEntity and EntityToAppTransactionTable classes
 * after APPLICATIONTRANSACTION has been updated
 */
public class BRBApplicationTransactionTable extends BRBBaseTable implements Serializable, AppTransaction
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	protected String sessionId;
	protected String examInteractionId;
	protected String accountAppData;
	protected String referenceNumber;

	public BRBApplicationTransactionTable()
	{
		super();
		sessionId = null;
		examInteractionId = null;
		accountAppData = null;
		referenceNumber = null;
	}

	public BRBApplicationTransactionTable(String transactionId, String sessionId, String examInteractionId, String accountAppData)
	{
		super(transactionId);
		this.sessionId = sessionId;
		this.examInteractionId = examInteractionId;
		this.accountAppData = accountAppData;
		referenceNumber = null;
	}

	public BRBApplicationTransactionTable(String transactionId, String sessionId, String examInteractionId)
	{
		super(transactionId);
		this.sessionId = sessionId;
		this.examInteractionId = examInteractionId;
		this.accountAppData = null;
		referenceNumber = null;
	}
	
	public BRBApplicationTransactionTable(String transactionId, String referenceNumber)
	{
		super(transactionId);
		this.sessionId = null;
		this.examInteractionId = null;
		this.accountAppData = null;
		this.referenceNumber = referenceNumber;
	}

	/**
	 * @return the sessionId
	 */
	@Override
	public String getSessionId()
	{
		return sessionId;
	}

	/**
	 * @param sessionId
	 *            the sessionId to set
	 */
	@Override
	public void setSessionId(String sessionId)
	{
		this.sessionId = sessionId;
	}

	/**
	 * @return the examInteractionId
	 */
	@Override
	public String getExamInteractionId()
	{
		return examInteractionId;
	}

	/**
	 * @param examInteractionId
	 *            the examInteractionId to set
	 */
	@Override
	public void setExamInteractionId(String examInteractionId)
	{
		this.examInteractionId = examInteractionId;
	}

	/**
	 * @return the accountAppData
	 */
	@Override
	public String getAccountAppData()
	{
		return accountAppData;
	}

	/**
	 * @param accountAppData
	 *            the accountAppData to set
	 */
	@Override
	public void setAccountAppData(String accountAppData)
	{
		this.accountAppData = accountAppData;
	}

	/**
	 * @return the referenceNumber
	 */
	@Override
	public String getReferenceNumber()
	{
		return referenceNumber;
	}

	/**
	 * @param referenceNumber
	 *            the referenceNumber to set
	 */
	@Override
	public void setReferenceNumber(String referenceNumber)
	{
		this.referenceNumber = referenceNumber;
	}
}