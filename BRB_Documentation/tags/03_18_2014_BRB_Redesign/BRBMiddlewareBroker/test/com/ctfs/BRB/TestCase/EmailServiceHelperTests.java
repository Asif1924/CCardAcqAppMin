package com.ctfs.BRB.TestCase;

import static org.junit.Assert.fail;

import org.junit.Ignore;
import org.junit.Test;

public class EmailServiceHelperTests extends BaseTest
{
	@Ignore
	@Test
	public void test_initialize_transactionId_by_timestamp_success()
	{
		String username = "jason.lostracco@ctfs.com";
		String password = "welcome@1";
		try
		{
			//EmailServiceHelper emailHelper = new EmailServiceHelper(username, password);

			//CreateResponse response = emailHelper.sendTestEmail();
		}
		catch (Exception ex)
		{
			fail(ex.getMessage());
		}
	}
}
