package com.ctfs.BRB.Model;

import java.util.logging.Logger;
import com.ctc.ctfs.channel.accountacquisition.AccountApplicationResponseType;
import com.ctfs.BRB.Helper.ApplicationSettingsManager;
import com.ctfs.BRB.Helper.TokenizationHelper;
import com.ctfs.BRB.Helper.CryptoUtils.PANCryptoUtil;
import com.google.gson.Gson;

public class AccountApplicationResponse
{
	static Logger log = Logger.getLogger(AccountApplicationResponse.class.getName());

	protected String accountNumber;
	protected String accountReference;
	protected String expiryDate;
	protected String creditLimit;
	protected String apr;
	protected String cashAPR;
	protected String appStatus;
	protected String customerValueInd;
	protected String respCardType;
	protected String loyaltyMembershipNumber;


	public String getAccountNumber()
	{
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber)
	{
		this.accountNumber = accountNumber;
	}

	/**
	 * @return the accountReference
	 */
	public String getAccountReference()
	{
		return accountReference;
	}

	/**
	 * @return the expiryDate
	 */
	public String getExpiryDate()
	{
		return expiryDate;
	}

	/**
	 * @return the creditLimit
	 */
	public String getCreditLimit()
	{
		return creditLimit;
	}

	/**
	 * @return the apr
	 */
	public String getApr()
	{
		return apr;
	}

	/**
	 * @return the cashAPR
	 */
	public String getCashAPR()
	{
		return cashAPR;
	}

	/**
	 * @return the appStatus
	 */
	public String getAppStatus()
	{
		return appStatus;
	}

	/**
	 * @return the customerValueInd
	 */
	public String getCustomerValueInd()
	{
		return customerValueInd;
	}
	
	/**
	 * @return the respCardType
	 */
	public String getRespCardType() {
		return respCardType;
	}

	public void setRespCardType(String respCardType) {
		this.respCardType = respCardType;
	}
	public String getLoyaltyMembershipNumber() {
		return loyaltyMembershipNumber;
	}

	public void setLoyaltyMembershipNumber(String loyaltyMembershipNumber) {
		this.loyaltyMembershipNumber = loyaltyMembershipNumber;
	}
	public AccountApplicationResponse entityToModel(AccountApplicationResponseType argEntity, String argBrbTransactionID) throws Exception
	{
		String sMethod = "[entityToModel] ";
		log.info(sMethod + "called...");

		this.accountReference = argEntity.getAccountReference();
		this.appStatus = argEntity.getAppStatus();
		this.customerValueInd = argEntity.getCustomerValueInd();
		this.expiryDate = argEntity.getExpiryDate();
		this.accountNumber = null;
		this.loyaltyMembershipNumber=argEntity.getLoyaltyMembershipNumber();

		if(appStatus != null && appStatus.equalsIgnoreCase("APPROVED")) {
			this.respCardType = argEntity.getRespCardType();
		}
		/*if(argEntity.getQueueName()!=null && argEntity.getQueueName().equalsIgnoreCase("STOREID"))
		{
			this.appStatus="STOREID";
		}*/
		
		if(appStatus != null && appStatus.equalsIgnoreCase("APPROVED"))
		{
			try
			{
				// Invoke PAN Decryption Helper
				PANCryptoUtil PANHandler = new PANCryptoUtil();

				String decryptedPAN = PANHandler.decrypt(argEntity.getAccountNumber());

				// Get agent IP address
				String agentIPAddress = ApplicationSettingsManager.getInstance().getTokenizationServiceAgentIP();

				TokenizationHelper tokenizationHelper = new TokenizationHelper();

				// Get masked PAN
				this.accountNumber = tokenizationHelper.getCreditCardPAN(argBrbTransactionID, decryptedPAN, this.getExpiryDate(), agentIPAddress);

				log.info(sMethod + "::MASKED PAN IS::" + this.accountNumber);

				Gson gson = new Gson();
				String json = gson.toJson(this, AccountApplicationResponse.class);
				log.info(sMethod + "::AccountApplicationResponse::" + json);
			}
			catch (Exception e)
			{
				log.warning(sMethod + "Get masked PAN Exception: " + e.getMessage());
				this.accountNumber = null;		
				
				// Show pending screen
				throw e;
			}
		}

		try
		{
			this.creditLimit = argEntity.getCreditLimit().toString();
		}
		catch (Exception e)
		{
			log.warning(sMethod + "Get CreditLimit Exception: " + e.getMessage());
			this.creditLimit = null;
		}
		try
		{
			this.apr = argEntity.getApr().toString();
		}
		catch (Exception e)
		{
			log.warning(sMethod + "Get APR Exception: " + e.getMessage());
			this.apr = null;
		}
		try
		{			
			this.cashAPR = argEntity.getCashAPR().toString();
		}
		catch (Exception e)
		{
			log.warning(sMethod + "Get CashAPR Exception: " + e.getMessage());
			this.cashAPR = null;
		}

		return this;
	}	
	
	public AccountApplicationResponse entityToModelforSS(WebIcMQRespVO argEntity, String argBrbTransactionID) throws Exception
	{
		String sMethod = "[entityToModelforSS] ";
		log.info(sMethod + "called...");

		this.accountReference = argEntity.getAccountReference();
		this.appStatus = argEntity.getAppStatus();
		this.customerValueInd = argEntity.getCustomerValueInd();
		this.expiryDate = argEntity.getExpiryDate();
		this.accountNumber = null;

		if(appStatus != null && appStatus.equalsIgnoreCase("APPROVED")) {
			this.respCardType = argEntity.getRespCardType();
		}
		/*if (argEntity.getQueueName() != null
				&& argEntity.getQueueName().equalsIgnoreCase("STOREID")) {
			this.appStatus = "STOREID";
		}
		*/
		if(appStatus != null && appStatus.equalsIgnoreCase("APPROVED"))
		{
			try
			{
				// Invoke PAN Decryption Helper
				PANCryptoUtil PANHandler = new PANCryptoUtil();

				String decryptedPAN = PANHandler.decrypt(argEntity.getAccountNumber().getBytes());

				// Get agent IP address
				String agentIPAddress = ApplicationSettingsManager.getInstance().getTokenizationServiceAgentIP();

				TokenizationHelper tokenizationHelper = new TokenizationHelper();

				// Get masked PAN
				this.accountNumber = tokenizationHelper.getCreditCardPAN(argBrbTransactionID, decryptedPAN, this.getExpiryDate(), agentIPAddress);

				log.info(sMethod + "::MASKED PAN IS::" + this.accountNumber);

				Gson gson = new Gson();
				String json = gson.toJson(this, AccountApplicationResponse.class);
				log.info(sMethod + "::AccountApplicationResponse::" + json);
			}
			catch (Exception e)
			{
				log.warning(sMethod + "Get masked PAN Exception: " + e.getMessage());
				this.accountNumber = null;		
				
				// Show pending screen
				throw e;
			}
		}

		try
		{
			this.creditLimit = argEntity.getCreditLimit().toString();
		}
		catch (Exception e)
		{
			log.warning(sMethod + "Get CreditLimit Exception: " + e.getMessage());
			this.creditLimit = null;
		}
		try
		{
			this.apr = argEntity.getApr().toString();
		}
		catch (Exception e)
		{
			log.warning(sMethod + "Get APR Exception: " + e.getMessage());
			this.apr = null;
		}
		try
		{			
			this.cashAPR = argEntity.getCashAPR().toString();
		}
		catch (Exception e)
		{
			log.warning(sMethod + "Get CashAPR Exception: " + e.getMessage());
			this.cashAPR = null;
		}

		return this;
	}	
	
	public boolean isModelValid () {
		return getAccountNumber() != null && !getAccountNumber().isEmpty();
	} 
}
