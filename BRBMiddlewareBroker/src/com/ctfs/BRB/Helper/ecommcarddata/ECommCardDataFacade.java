package com.ctfs.BRB.Helper.ecommcarddata;

import java.util.logging.Logger;

import com.cantire.persistservice.AddressDetailsType;
import com.cantire.persistservice.CardDetailsType;
import com.cantire.persistservice.CardRequestType;
import com.cantire.persistservice.CardResponseType;
import com.cantire.persistservice.CustomerInfoType;
import com.cantire.persistservice.PassFailType;
import com.cantire.persistservice.PersistServiceDelegate;
import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctfs.BRB.Helper.Factory.ECommCardDataProxyBuilder;
import com.ctfs.BRB.Helper.Factory.ValidatorException;
import com.ctfs.BRB.Model.AccountApplicationRequestWrapper;
import com.ctfs.BRB.Model.AccountApplicationResponse;
import com.ctfs.BRB.exceptions.BrbFlowException;

public class ECommCardDataFacade extends AbstractECommCardDataFacade
{
	static Logger log = Logger.getLogger(ECommCardDataFacade.class.getName());

	public ECommCardDataFacade(String requestingSystem)
	{
		super(requestingSystem);
	}

	@Override
	public boolean doRequest(AccountApplicationRequestWrapper accountRequestWrapper, AccountApplicationResponse accountAppResponse) throws Exception
	{
		String sMethod = "[ECommCardDataFacade.doRequest]";
		log.info(sMethod + "called...");

		CardRequestType cardRequest = null;
		CardResponseType cardResponse = null;
		boolean operationResult = false;	
		
		String transactionId = null;
		String trackingScreenID = null;
		
		try
		{	
			transactionId = accountRequestWrapper.getBrbTransactionId();
			trackingScreenID = accountRequestWrapper.getTrackingScreenID();
			
			log.info(sMethod + "\ntransactionId = " + transactionId + "\ntrackingScreenID = " + trackingScreenID);
			
			// Create proxy client
			PersistServiceDelegate eCommCardDataProxy = (PersistServiceDelegate) new ECommCardDataProxyBuilder(requestingSystem).createSharedWebServicesPortalProxy();

			cardRequest = (CardRequestType) getCardRequest(accountRequestWrapper, accountAppResponse);
			
			cardResponse = eCommCardDataProxy.saveCustomerCardData(cardRequest);
			
			operationResult = cardResponse.getPassFail() == PassFailType.P;
			
			// Report state
			reportAppState(operationResult, transactionId);			
		}
		catch (ValidatorException ex) {
			log.warning(sMethod + " Validator Exception: " + ex.getMessage());			
			
			throw ex;
		}
		catch (Exception ex)
		{
			log.warning(sMethod + " Exception: " + ex.getMessage());
			
			// According CTCOFSMB-1363
			throw new BrbFlowException(ex.getMessage());
		}		

		return operationResult;
	}

	protected Object getCardRequest(AccountApplicationRequestWrapper accountRequestWrapper, AccountApplicationResponse accountAppResponse) throws Exception
	{
		String sMethod = "[getCardRequest]";
		log.info(sMethod);
		CardRequestType cardRequest = null;

		try
		{
			AccountApplicationRequestType accountRequest = accountRequestWrapper.getAccountApplicationRequest();

			cardRequest = new CardRequestType();

			CustomerInfoType customerInfoType = new CustomerInfoType();

			if (accountRequestWrapper.isShouldUpdateCTProfile())
			{
				AddressDetailsType addressDetails = new AddressDetailsType();
				addressDetails.setAddressLine1(accountRequest.getCurrentAddressLine1());
				addressDetails.setAddressLine2(accountRequest.getCurrentAddressLine2());
				addressDetails.setCity(accountRequest.getCurrentCity());
				addressDetails.setPostalCode(accountRequest.getCurrentPostalCode());
				addressDetails.setProvince(accountRequest.getCurrentProvince().toString());
				customerInfoType.setAddressDetails(addressDetails);

				customerInfoType.setEmail(accountRequest.getCurrentEmailAddress());
				customerInfoType.setFirstName(accountRequest.getFirstName());
				customerInfoType.setLastName(accountRequest.getLastName());
				customerInfoType.setPhone(accountRequest.getCurrentTelephoneNumber());
			}

			customerInfoType.setEcommCustomerId(getEcommCustomerId(accountRequestWrapper.getBrbTransactionId()));

			CardDetailsType cardDetails = new CardDetailsType();
			cardDetails.setExpiryDate(accountAppResponse.getExpiryDate());
			cardDetails.setMaskedPan(accountAppResponse.getAccountNumber());
			cardDetails.setReferenceNumber(getReferenceNumber(accountRequestWrapper.getBrbTransactionId()));

			customerInfoType.setCardDetails(cardDetails);
			cardRequest.setCustomerInfo(customerInfoType);

			cardRequest.setBrbTransId(accountRequestWrapper.getBrbTransactionId());
		}
		catch (Exception ex)
		{
			log.warning(sMethod + " Exception: " + ex.getMessage());
			
			throw ex;
		}

		return cardRequest;
	}
}
