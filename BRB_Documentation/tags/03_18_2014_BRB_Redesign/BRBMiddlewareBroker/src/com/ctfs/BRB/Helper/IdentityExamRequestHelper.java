package com.ctfs.BRB.Helper;

import java.lang.reflect.Type;
import java.util.List;
import java.util.logging.Logger;

import com.ctfs.BRB.Model.BaseModel;
import com.ctfs.BRB.Model.CreditCardApplicationData;
import com.ctfs.BRB.Model.IdentityExamPostRequest;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class IdentityExamRequestHelper
{
	static Logger log = Logger.getLogger(IdentityExamRequestHelper.class.getName());
	BRBServletMediator theMediator = null;
	IdentityExamPostRequest theIdentityExamPostRequest = null;

	public IdentityExamRequestHelper(BRBServletMediator argMediator)
	{
		String sMethod = "[IdentityExamRequestHelper()]";
		log.info(sMethod);
		theMediator = argMediator;
	}

	public BRBServletMediator getMediator()
	{
		String sMethod = "[getMediator()]";
		log.info(sMethod);
		return theMediator;
	}

	private void deserializeRequestFromMediator()
	{
		String sMethod = "[deserializeRequestFromMediator()]";
		log.info(sMethod);

		Gson gson = new Gson();
		String json = theMediator.getPostRequestBodyAsJson().toString();
		Type compoundType = new TypeToken<IdentityExamPostRequest>()
		{
		}.getType();

		theIdentityExamPostRequest = gson.fromJson(json, compoundType);
	}

	public CreditCardApplicationData getCreditCardApplicationData()
	{
		String sMethod = "[getAccountApplicationReqestParams()]";
		log.info(sMethod);

		deserializeRequestFromMediator();
		List<BaseModel> models = theIdentityExamPostRequest.getAccountApplicationData();
		CreditCardApplicationData ccData = new CreditCardApplicationData(models, theMediator.getBrbTransactionId(), theMediator.getTrackingScreenID());

		return ccData;
	}

	public IdentityExamPostRequest getIdentityExamPostRequest()
	{
		String sMethod = "[getIdentityExamPostRequest()]";
		log.info(sMethod);

		deserializeRequestFromMediator();
		return theIdentityExamPostRequest;
	}
}