package com.ctfs.BRB.Helper.ecommcarddata;

import java.util.logging.Logger;

import javax.xml.bind.JAXBElement;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctc.ctfs.eCommUpdateCardData.AddressDetailsType;
import com.ctc.ctfs.eCommUpdateCardData.BasicHttpBinding_IResponseServiceProxy;
import com.ctc.ctfs.eCommUpdateCardData.CardDetailsType;
import com.ctc.ctfs.eCommUpdateCardData.CardRequestType;
import com.ctc.ctfs.eCommUpdateCardData.CardResponseType;
import com.ctc.ctfs.eCommUpdateCardData.CustomerInfoType;
import com.ctc.ctfs.eCommUpdateCardData.ObjectFactory;
import com.ctc.ctfs.eCommUpdateCardData.PassFailType;
import com.ctfs.BRB.Helper.Factory.ECommCardDataSimulatorProxyBuilder;
import com.ctfs.BRB.Helper.Factory.ValidatorException;
import com.ctfs.BRB.Model.AccountApplicationRequestWrapper;
import com.ctfs.BRB.Model.AccountApplicationResponse;
import com.ctfs.BRB.exceptions.BrbFlowException;

public class ECommCardDataSimulatorFacade extends AbstractECommCardDataFacade
{
	static Logger log = Logger.getLogger(ECommCardDataSimulatorFacade.class.getName());

	public ECommCardDataSimulatorFacade(String requestingSystem)
	{
		super(requestingSystem);
	}

	@Override
	public boolean doRequest(AccountApplicationRequestWrapper accountRequestWrapper, AccountApplicationResponse accountAppResponse) throws Exception
	{
		String sMethod = "[doRequest]";
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
			BasicHttpBinding_IResponseServiceProxy eCommCardDataProxy = (BasicHttpBinding_IResponseServiceProxy) new ECommCardDataSimulatorProxyBuilder(requestingSystem)
					.createSharedWebServicesPortalProxy();

			cardRequest = (CardRequestType) getCardRequest(accountRequestWrapper, accountAppResponse);

			cardResponse = eCommCardDataProxy.saveCustomerCardData(cardRequest);

			operationResult = cardResponse.getPassFail() == PassFailType.P;

			// Report state
			reportAppState(operationResult, transactionId);
		}
		catch (ValidatorException ex)
		{
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

	public Object getCardRequest(AccountApplicationRequestWrapper accountRequestWrapper, AccountApplicationResponse accountAppResponse) throws Exception
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
				ObjectFactory objFactory = new ObjectFactory();
				AddressDetailsType addressDetails = new AddressDetailsType();
				addressDetails.setAddressLine1(accountRequest.getCurrentAddressLine1());

				addressDetails.setAddressLine2(objFactory.createAddressDetailsTypeAddressLine2(accountRequest.getCurrentAddressLine2()));
				addressDetails.setCity(accountRequest.getCurrentCity());
				addressDetails.setPostalCode(accountRequest.getCurrentPostalCode());
				addressDetails.setProvince(accountRequest.getCurrentProvince().toString());

				JAXBElement<AddressDetailsType> customerInfoTypeAddressDetailsJAXB = objFactory.createCustomerInfoTypeAddressDetails(addressDetails);
				customerInfoType.setAddressDetails(customerInfoTypeAddressDetailsJAXB);

				customerInfoType.setEmail(objFactory.createCustomerInfoTypeEmail(accountRequest.getCurrentEmailAddress()));
				customerInfoType.setFirstName(objFactory.createCustomerInfoTypeFirstName(accountRequest.getFirstName()));
				customerInfoType.setLastName(objFactory.createCustomerInfoTypeLastName(accountRequest.getLastName()));
				customerInfoType.setPhone(objFactory.createCustomerInfoTypePhone(accountRequest.getCurrentTelephoneNumber()));
			}

			// Set early stored EcommCustomerId
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
