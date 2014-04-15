package com.ctfs.WICI.Helper;

import java.util.logging.Level;
import java.util.logging.Logger;

import com.channel.ctfs.ctc.webicgateway.AccountAcquisitionPortalProxy;
import com.channel.ctfs.ctc.webicgateway.RequestBody;
import com.channel.ctfs.ctc.webicgateway.ResponseBody;
import com.channel.ctfs.ctc.webicgateway.ResponseBodyType;
import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctc.ctfs.channel.accountacquisition.AccountApplicationResponseType;
import com.ctfs.WICI.Servlet.Model.CreditCardApplicationData;
import com.ctfs.WICI.Servlet.Model.WICIAccountApplicationResponse;
import com.ctfs.WICI.Servlet.Model.WICIMessageType;

public class AccountApplicationHelper
{
	static Logger log = Logger.getLogger(AccountApplicationHelper.class.getName());

	public WICIAccountApplicationResponse doRequest(WICIServletMediator requestMediatort) throws Exception
	{
		String sMethod = this.getClass().getName() + "[doRequest HttpServletRequest] ";
		log.info(sMethod);

		return this.doRequest(new CreditCardApplicationData(requestMediatort));
	}

	public WICIAccountApplicationResponse doRequest(StringBuffer argCardDataAsString) throws Exception
	{
		String sMethod = this.getClass().getName() + "[doRequest StringBuffer] ";
		log.info(sMethod);

		log.log(Level.INFO, sMethod + "::argCardDataAsString::" + argCardDataAsString);

		return this.doRequest(new CreditCardApplicationData(argCardDataAsString));
	}

	public WICIAccountApplicationResponse doRequest(CreditCardApplicationData argCardData) throws Exception
	{
		String sMethod = this.getClass().getName() + "[doRequest CreditCardApplicationData] ";
		log.info(sMethod);

		RequestBody requestBody = new RequestBody();
		ResponseBody responseBody = new ResponseBody();
		AccountApplicationResponseType result = null;
		AccountAcquisitionPortalProxy accountApplicationProxy = new WICIPortalProxyFactory().createWICIWebServicesPortalProxy();

		try
		{
			AccountApplicationRequestType accountRequest = argCardData.convertToAccountApplicationRequest();
			String requestBodyString = serializeRequest(accountRequest);

			log.info(sMethod + "::requestBodyString::" + requestBodyString);
			//log.log(Level.FINE, sMethod + "::requestBodyString::" + requestBodyString);

			requestBody.setRequestBody(requestBodyString);
			responseBody = accountApplicationProxy.processRequest((new WICIObjectsHelper()).createMessageHeader(WICIMessageType.ACCOUNT_APPLICATION), requestBody);
			result = deserializeResponse(responseBody);
		}
		catch (Exception e)
		{
			log.warning(sMethod + "::Exception::" + e.getMessage());
			throw e;
		}
		WICIAccountApplicationResponse wiciAccountApplicationResponse = new WICIAccountApplicationResponse();
		return wiciAccountApplicationResponse.entityToModel(result);
	}

	public AccountApplicationResponseType deserializeResponse(ResponseBody responseBody) throws Exception
	{
		String sMethod = this.getClass().getName() + "[deserializeResponse] ";
		log.info(sMethod);

		ResponseBodyType rawResponseBody = responseBody.getResponseBody();
		AccountApplicationResponseType accountApplicationResponse = null;
		String accountApplicationResponseXML = "";

		if (rawResponseBody == null)
		{
			return accountApplicationResponse;
		}

		accountApplicationResponseXML = responseBody.getResponseBody().getResultDocument();

		if (accountApplicationResponseXML == null)
		{
			return accountApplicationResponse;
		}

		log.info(sMethod + "::accountApplicationResponseXML::" + accountApplicationResponseXML);
		//log.log(Level.FINE, sMethod + "::accountApplicationResponseXML::" + accountApplicationResponseXML);

		try
		{
			WICIObjectsHelper wiciObjectsHelper = new WICIObjectsHelper();
			accountApplicationResponse = wiciObjectsHelper.deserializeXMLToAccountApplicationResponseObject(accountApplicationResponseXML);
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			throw e;
		}

		return accountApplicationResponse;
	}

	public String serializeRequest(Object obj) throws Exception
	{
		String sMethod = this.getClass().getName() + "[serializeRequest] ";
		log.info(sMethod);

		WICIObjectsHelper wiciObjectsHelper = new WICIObjectsHelper();
		return (wiciObjectsHelper.accountApplicationSerialize(obj));
	}
}
