package com.ctfs.BRB.Model;

import java.lang.reflect.Type;
import java.util.Collection;
import java.util.List;
import java.util.StringTokenizer;
import java.util.logging.Logger;

import com.ctfs.BRB.Helper.AccountApplicationRequestTypeConverter;
import com.ctfs.BRB.Helper.BRBServletMediator;
import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import com.google.gson.reflect.TypeToken;

public class CreditCardApplicationData
{
	static Logger log = Logger.getLogger(CreditCardApplicationData.class.getName());

	public static final String MODEL_PERSONAL_INFORMATION = "personalInformation";
	public static final String MODEL_ADDITIONAL_INFORMATION = "additionalInformation";
	public static final String MODEL_IDENTITY_VERIFICATION = "identityVerification";
	public static final String MODEL_OVERVIEW = "overview";
	public static final String MODEL_CONFIRMATION = "confirmation";

	public List<BaseModel> models;
	String brbTransactionId;
	String trackingScreenID;
	
	String ipAddress;

	public String getIpAddress() {
		return ipAddress;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	public String getBrbTransactionId()
	{
		return brbTransactionId;
	}

	public String getTrackingScreenID()
	{
		return trackingScreenID;
	}

	public CreditCardApplicationData(List<BaseModel> argModels, String argBRBTransactionId, String argTrackingScreenId)
	{
		models = argModels;
		brbTransactionId = argBRBTransactionId;
		trackingScreenID = argTrackingScreenId;
	}

	public CreditCardApplicationData(BRBServletMediator requestMediator)
	{
		String sMethod = "[CreditCardApplicationData]";
		log.info(sMethod);

		brbTransactionId = requestMediator.getBrbTransactionId();
		trackingScreenID = requestMediator.getTrackingScreenID();
		
		

		models = deserializeRequestBody(requestMediator.getPostRequestBody());
	}

	private List<BaseModel> deserializeRequestBody(StringBuffer requestBody)
	{
		String sMethod = "[deserializeRequestBody] ";
		log.info(sMethod);
		log.info(sMethod + "requestBody: " + requestBody);

		List<BaseModel> models = null;
		try
		{
			Gson gson = new Gson();
			String json = requestBody.toString();
			Type collectionType = new TypeToken<Collection<BaseModel>>()
			{
			}.getType();
			models = gson.fromJson(json, collectionType);

		}
		catch (JsonSyntaxException e)
		{
			log.warning(sMethod + "Error! Cannot de-serialise json!" + e.getMessage());
			e.printStackTrace();
		}

		try
		{
			String result = (new Gson()).toJson(models);
			log.info(sMethod + " models list is deserialized in: " + result);
		}
		catch (Exception e)
		{
		}

		return models;
	}

	public AccountApplicationRequestWrapper extractCreditCardData() throws Exception
	{
		String sMethod = "[extractCreditCardData]";
		log.info(sMethod + " called...");

		AccountApplicationRequestWrapper accountApplicationRequestWrapper = null;
		try
		{
			accountApplicationRequestWrapper = (new AccountApplicationRequestTypeConverter()).convert(this);
			// Save BRB transaction ID
			accountApplicationRequestWrapper.setBrbTransactionId(this.getBrbTransactionId());
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}

		return accountApplicationRequestWrapper;
	}

	public BaseModel getModel(String name)
	{
		String sMethod = "[getModel]";
		log.info(sMethod + name);

		for (BaseModel item : this.models)
		{
			if (item.model.equals(name))
			{
				return item;
			}
		}

		log.warning(sMethod + "model is not found!");

		return null;
	}
	

	
}
