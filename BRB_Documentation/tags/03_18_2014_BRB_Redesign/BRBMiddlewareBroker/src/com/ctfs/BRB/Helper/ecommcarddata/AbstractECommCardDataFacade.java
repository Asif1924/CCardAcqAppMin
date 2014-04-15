package com.ctfs.BRB.Helper.ecommcarddata;

import java.util.logging.Logger;

import com.ctc.ctfs.eCommUpdateCardData.PassFailType;
import com.ctfs.BRB.Helper.AppStateReporter;
import com.ctfs.BRB.Helper.BRBDBHelper;
import com.ctfs.BRB.Helper.TokenizationMemento;
import com.ctfs.BRB.Helper.AppStateReporter.AccountApplicationStatus;
import com.ctfs.BRB.Helper.AppStateReporter.ECommPassOrFail;
import com.ctfs.BRB.Model.AccountApplicationRequestWrapper;
import com.ctfs.BRB.Model.AccountApplicationResponse;
import com.ctfs.BRB.dblayer.interfaces.IAppTransactionTableEntity;
import com.ctfs.BRB.dblayer.interfaces.ICustomerTransactionTableEntity;

public abstract class AbstractECommCardDataFacade
{
	static Logger log = Logger.getLogger(AbstractECommCardDataFacade.class.getName());

	protected String requestingSystem;

	public AbstractECommCardDataFacade(String requestingSystem)
	{
		String sMethod = "[AbstractECommCardDataFacade] ";
		log.info(sMethod + "::RequestingSystem is::" + requestingSystem);

		this.requestingSystem = requestingSystem;
	}

	/**
	 * @return the requestingSystem
	 */
	public String getRequestingSystem()
	{
		return requestingSystem;
	}

	/**
	 * Call EcomCardData web service
	 */
	public abstract boolean doRequest(AccountApplicationRequestWrapper accountApplicationRequestWrapper, AccountApplicationResponse accountAppResponse) throws Exception;

	/**
	 * Call EcomCardData web service recursive
	 */
	public boolean doRequestRecurcive(AccountApplicationRequestWrapper accountApplicationRequestWrapper, AccountApplicationResponse accountAppResponse, int recursionCounter) throws Exception
	{
		String sMethod = "[doRequestRecurcive] ";
		log.info(sMethod + "called..");
		
		// Call EcomCardDara web service
		boolean ecomResponse = doRequest(accountApplicationRequestWrapper, accountAppResponse);

		// Decrease counter
		recursionCounter--;

		// Check termination condition
		if (ecomResponse || recursionCounter == 0)
		{
			return ecomResponse;
		}

		// One more circle
		return doRequestRecurcive(accountApplicationRequestWrapper, accountAppResponse, recursionCounter);
	}

	protected String getEcommCustomerId(String transactionId)
	{
		String sMethod = "[getEcommCustomerId] ";
		log.info(sMethod + "called..");

		String ecommCustomerId = null;

		try
		{
			ICustomerTransactionTableEntity customerTransactionTblEntity = new BRBDBHelper().getFromCustomerTransactionTable(transactionId);

			ecommCustomerId = customerTransactionTblEntity.getEcommCustomerId();

			log.info(String.format("%s return 'ecommCustomerId=%s'", sMethod, ecommCustomerId));
		}
		catch (Exception ex)
		{
			log.warning(sMethod + " Exception: " + ex.getMessage());
		}

		return ecommCustomerId;
	}

	protected String getReferenceNumber(String transactionId)
	{
		String sMethod = "[getReferenceNumber] ";
		log.info(sMethod + "called..");

		String referenceNumber = null;
		try
		{
			// Restore Tokenization data
			IAppTransactionTableEntity appTransactionTableEntity = new TokenizationMemento().restoreState(transactionId);

			// Get ReferenceNumber from DB
			referenceNumber = appTransactionTableEntity.getReferenceNumber();

			log.info(String.format("%s return 'referenceNumber=%s'", sMethod, referenceNumber));
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
		}

		return referenceNumber;
	}
	
	protected void reportAppState (boolean isRequestPassed, String transactionId) {
		String sMethod = "[reportAppState] ";
		log.info(sMethod + "called with parameters:\n isRequestPassed=" + isRequestPassed + "\n transactionId=" + transactionId);
		
		if (isRequestPassed)
		{
			new AppStateReporter().reportState(transactionId, AccountApplicationStatus.APPROVED, null, ECommPassOrFail.Pass, null);
		}
		else
		{
			new AppStateReporter().reportState(transactionId, AccountApplicationStatus.APPROVED, null, ECommPassOrFail.Fail, null);
		}
	}
}
