package com.ctfs.BRB.Helper;

import com.ctfs.BRB.Model.BRBIdentityExamBridge;

public class FourthQuestionReplacementStrategy
{
	static final String FOURTH_QUESTION_MARK = "FAILED 4TH QUESTION";
	static final String EMPTY_STRING = "";

	public void replaceFourthQuestionRedundantData(BRBIdentityExamBridge brbIdentityExamBridge) throws Exception
	{
		if (brbIdentityExamBridge == null)
		{
			throw new IllegalArgumentException("Invalid 'BRBIdentityExamBridge' parameter!");
		}

		if (doesFourthQuestionExist(brbIdentityExamBridge))
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

	private Boolean doesFourthQuestionExist(BRBIdentityExamBridge brbIdentityExamBridge)
	{
		return brbIdentityExamBridge != null && brbIdentityExamBridge.getWebICIdentityExam() != null && brbIdentityExamBridge.getWebICIdentityExam().getDecision() != null
				&& brbIdentityExamBridge.getWebICIdentityExam().getDecision().contains(FOURTH_QUESTION_MARK);
	}
}
