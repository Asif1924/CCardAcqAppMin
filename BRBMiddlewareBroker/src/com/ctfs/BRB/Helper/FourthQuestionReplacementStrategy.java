package com.ctfs.BRB.Helper;

import com.ctfs.BRB.Model.BRBIdentityExamBridge;

public class FourthQuestionReplacementStrategy
{	
	static final String EMPTY_STRING = "";

	public void replaceFourthQuestionRedundantData(BRBIdentityExamBridge brbIdentityExamBridge) throws Exception
	{
		if (brbIdentityExamBridge == null)
		{
			throw new IllegalArgumentException("Invalid 'BRBIdentityExamBridge' parameter!");
		}

		if (brbIdentityExamBridge.doesFourthQuestionExist())
		{
			brbIdentityExamBridge.setDecision(null);
			new ScoreIdentityExamMemento().restoreState(brbIdentityExamBridge);

			// Update id
			brbIdentityExamBridge.setId(brbIdentityExamBridge.getSessionId());
			brbIdentityExamBridge.setSessionId(null);

			// Update transaction id
			brbIdentityExamBridge.setTransactionId(brbIdentityExamBridge.getExternalId());
			brbIdentityExamBridge.setExternalId(null);
		}
	}	
}