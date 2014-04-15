package com.ctfs.BRB.Helper;

import java.util.logging.Logger;

import com.ctc.ctfs.channel.webicidentityexamination.WebICScoreIdentityExamRequest;
import com.ctfs.BRB.Model.BRBIdentityExamBridge;
import com.google.gson.Gson;

public class ScoreIdentityExamAdapter
{
	static Logger log = Logger.getLogger(ScoreIdentityExamAdapter.class.getName());
	static final String EMPTY_STRING = "";

	public BRBIdentityExamBridge convertRequest(BRBServletMediator requestMediator) throws Exception
	{
		String sMethod = "[convertRequest()]";
		log.info(sMethod);

		BRBIdentityExamBridge scoreIdentityExam = null;

		try
		{
			// Get request body
			String identityExamJson = requestMediator.getPostRequestBody().toString();
			Gson gson2 = new Gson();

			// Map json object to java model
			scoreIdentityExam = gson2.fromJson(identityExamJson, BRBIdentityExamBridge.class);
		}
		catch (Exception ex)
		{
			log.info(sMethod + ex.getMessage());
			throw ex;
		}

		return scoreIdentityExam;
	}

	public WebICScoreIdentityExamRequest adaptRequest(BRBIdentityExamBridge identityExamBridge) throws Exception
	{
		String sMethod = "[adaptRequest()]";
		log.info(sMethod);

		WebICScoreIdentityExamRequest scoreIdentityExamRequest = new WebICScoreIdentityExamRequest();

		scoreIdentityExamRequest.setIdentityExam(identityExamBridge.getWebICIdentityExam());

		// TODO: Remove this for production version a.s.a.p.
		try
		{
			String result = (new Gson()).toJson(scoreIdentityExamRequest);
			log.info(sMethod + " ScoreIdentityExamRequest populated with data: \n" + result);
		}
		catch (Exception e)
		{
		}

		return scoreIdentityExamRequest;
	}
}