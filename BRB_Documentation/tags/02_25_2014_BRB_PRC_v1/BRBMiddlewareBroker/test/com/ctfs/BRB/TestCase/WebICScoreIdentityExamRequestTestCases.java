package com.ctfs.BRB.TestCase;

import org.junit.Before;
import org.junit.Test;

import com.ctfs.BRB.Helper.ScoreIdentityExamHelper;
import com.ctfs.BRB.Resources.ResourceHelper;

public class WebICScoreIdentityExamRequestTestCases
{
	private ScoreIdentityExamHelper helper;
	private TestDataHelper dataHelper;

	@Before
	public void setUp()
	{
		helper = new ScoreIdentityExamHelper();
		dataHelper = new TestDataHelper("dataForTests/WebICScoreIdentityExamRequest");
	}

	@Test
	public void test_for_validator_functionality() throws Exception
	{
		while (dataHelper.hasSomethingToRead())
		{
			String request = dataHelper.getNextDataForTest();
			helper.validateUserRequest(request, ResourceHelper.getInstance().getValidationWebICIdentityExaminationPath());
		}
	}
}
