package com.ctfs.BRB.Model;

import java.util.logging.Logger;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;

public class AccountApplicationRequestWrapper
{
	static Logger log = Logger.getLogger(AccountApplicationRequestWrapper.class.getName());
	
	private AccountApplicationRequestType accountApplicationRequest;
	private boolean shouldUpdateCTProfile;
	private String brbTransactionId;
	private String trackingScreenID;

	public AccountApplicationRequestWrapper(AccountApplicationRequestType accountApplicationRequestType) {
		accountApplicationRequest = accountApplicationRequestType;
	}
	
	public AccountApplicationRequestWrapper(
			AccountApplicationRequestType accountApplicationRequestType, 
			String transactionId) {
		accountApplicationRequest = accountApplicationRequestType;
		brbTransactionId = transactionId;
	}
	
	/**
	 * @return the accountApplicationRequest
	 */
	public AccountApplicationRequestType getAccountApplicationRequest()
	{
		return accountApplicationRequest;
	}

	/**
	 * @return the shouldUpdateCTProfile
	 */
	public boolean isShouldUpdateCTProfile()
	{
		return shouldUpdateCTProfile;
	}

	/**
	 * @param shouldUpdateCTProfile the shouldUpdateCTProfile to set
	 */
	public void setShouldUpdateCTProfile(boolean shouldUpdateCTProfile)
	{
		this.shouldUpdateCTProfile = shouldUpdateCTProfile;
	}

	/**
	 * @return the brbTransactionId
	 */
	public String getBrbTransactionId()
	{
		return brbTransactionId;
	}

	/**
	 * @param brbTransactionId the brbTransactionId to set
	 */
	public void setBrbTransactionId(String brbTransactionId)
	{
		this.brbTransactionId = brbTransactionId;
	}
	
	/**
	 * @return the trackingScreenID
	 */
	public String getTrackingScreenID()
	{	
		return trackingScreenID;
	}
	
	/**
	 * @param trackingScreenID the trackingScreenID to set
	 */
	public void setTrackingScreenID(String trackingScreenID)
	{	
		this.trackingScreenID = trackingScreenID;
	}
}
