package com.ctfs.BRB.TestCase;

import static org.junit.Assert.*;
import org.junit.Test;
import com.ctfs.BRB.Helper.ApplicationSettingsManager;

public class ApplicationSettingsManagerTests
{
	@Test
	public void test_load_app_settings_success()
	{
		try
		{
			// Check manager before use it
			assertNotNull("ApplicationSettingsManager is NULL", ApplicationSettingsManager.getInstance());
			assertNotNull("AppProperties is NULL", ApplicationSettingsManager.getInstance().getAppProperties());

			String userName = ApplicationSettingsManager.getInstance().getEmailServiceUserName();
			String userPwd = ApplicationSettingsManager.getInstance().getEmailServiceUserPwd();		
			String userIdAsStr = ApplicationSettingsManager.getInstance().getEmailServiceClientId();
			int userIdAsInt = Integer.parseInt(ApplicationSettingsManager.getInstance().getEmailServiceClientId());
			String agentIPAddress = ApplicationSettingsManager.getInstance().getTokenizationServiceAgentIP();

			//decryption.keystoreFilename
			String decryptionKeyStorefileName = ApplicationSettingsManager.getInstance().getDecryptionKeyStoreFileName();

			// Check result
			assertNotNull("userName is NULL", userName);
			assertNotNull("userPwd is NULL", userPwd);			
			assertNotNull("userIdAsStr is NULL", userIdAsStr);
			assertNotNull("userIdAsInt is NULL", userIdAsInt);
			assertNotNull("agentIPAddress is NULL", agentIPAddress);
			assertNotNull("KeyStoreFileName is NULL", decryptionKeyStorefileName);

			assertFalse("userName is EMPTY", userName.isEmpty());
			assertFalse("userPwd is EMPTY", userPwd.isEmpty());	
			assertFalse("userIdAsStr is EMPTY", userIdAsStr.isEmpty());
			assertTrue("userIdAsInt less than 0", userIdAsInt > 0);
			assertFalse("agentIPAddress is EMPTY", agentIPAddress.isEmpty());
			assertFalse("KeyStoreFileName is EMPTY", decryptionKeyStorefileName.isEmpty());
		}
		catch (Exception ex)
		{
			fail(ex.getMessage());
		}
	}
}
