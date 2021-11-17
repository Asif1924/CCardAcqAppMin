package com.ctfs.WICI.Servlet.Model;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctfs.WICI.Helper.AccountApplicationRequestTypeConverter;
import com.ctfs.WICI.Helper.WICIObjectsHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.AccountApplicationPostRequest;
import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import com.google.gson.reflect.TypeToken;

public class CreditCardApplicationData
{
	static Logger log = Logger.getLogger(CreditCardApplicationData.class.getName());

	public List<BaseModel> models;
	private StringBuffer requestBodyStr;

	public CreditCardApplicationData(){
		String sMethod = this.getClass().getName() + "[CreditCardApplicationData].CreditCardApplicationData() ";
		log.info(sMethod);
		
		models = new ArrayList<BaseModel>();
	}
	
	public CreditCardApplicationData(WICIServletMediator requestMediator)
	{
		String sMethod = this.getClass().getName() + "[CreditCardApplicationData].CreditCardApplicationData(WICIServletMediator) ";
		log.info(sMethod);

		requestBodyStr = requestMediator.getPostRequestBody();
		models = deserializeRequestBody(requestBodyStr);
	}

	public CreditCardApplicationData(StringBuffer argRequestBody)
	{
		String sMethod = this.getClass().getName() + "[CreditCardApplicationData] ";
		log.info(sMethod);

		requestBodyStr = argRequestBody;
		models = deserializeRequestBody(requestBodyStr);
	}

	private List<BaseModel> deserializeRequestBody(StringBuffer argRequestBody)
	{
		String sMethod = this.getClass().getName() + "[deserializeRequestBody] ";
		log.info(sMethod + " argRequestBody : " + argRequestBody);

		List<BaseModel> models = null;

		AccountApplicationPostRequest postRequest = null;

		try
		{
			/*
			Gson gson = new Gson();
			String json = argRequestBody.toString();
			Type collectionType = new TypeToken<Collection<BaseModel>>(){}.getType();

			models = gson.fromJson(json, collectionType);
			*/
			Gson gson = new Gson();
			Type compoundType = new TypeToken<AccountApplicationPostRequest>(){}.getType();
			postRequest = gson.fromJson(argRequestBody.toString(), compoundType);
			log.info(sMethod + " postRequest : " + postRequest);
			models = postRequest.getAccountApplicationData();
			

		}
		catch (JsonSyntaxException e)
		{
			log.warning(sMethod + "Error! Cannot de-serialise json!" + e.getMessage());
			e.printStackTrace();
		}

		return models;
	}

	public String getRequestBodyString()
	{
		String sMethod = this.getClass().getName() + "[getRequestBodyString] ";
		log.info(sMethod);

		return requestBodyStr.toString();
	}

	public String getSOAPRequestBodyString()
	{
		String sMethod = this.getClass().getName() + "[getSOAPRequestBodyString] ";
		log.info(sMethod);

		AccountApplicationRequestType accountRequestObject = (new AccountApplicationRequestTypeConverter()).createAccountApplicationRequestFromCreditCardApplicationData(this,null,false);
		String SOAPRequestBodyString = null;
		try
		{
			SOAPRequestBodyString = new WICIObjectsHelper().accountApplicationSerialize(accountRequestObject);
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return SOAPRequestBodyString;
	}

	public String getSOAPRequestBodyString( Object argAARequestType )
	{
		String sMethod = this.getClass().getName() + "[getSOAPRequestBodyString( AccountApplicationRequestType )] ";
		log.info(sMethod);

		String SOAPRequestBodyString = null;
		try
		{
			SOAPRequestBodyString = new WICIObjectsHelper().accountApplicationSerialize(argAARequestType);
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return SOAPRequestBodyString;
	}	
	
	public AccountApplicationRequestType convertToAccountApplicationRequest()
	{
		String sMethod = this.getClass().getName() + "[convertToAccountApplicationRequest] ";
		log.info(sMethod);

		return (new AccountApplicationRequestTypeConverter()).createAccountApplicationRequestFromCreditCardApplicationData(this,null,false);
	}

	public BaseModel getModel(String name)
	{
		String sMethod = this.getClass().getName() + "[getModel] ";
		log.info(sMethod + name);

		for (BaseModel item : this.models)
		{
			if (item.model.equals(name))
			{
				return item;
			}
		}

		return null;
	}
}
