package com.ctfs.WICI.Helper;

import java.sql.SQLException;
import java.util.logging.Logger;

import com.ctfs.WICI.Model.IllegalAppVersionException;
import com.ctfs.WICI.dblayer.interfaces.IConfigurationTableEntity;
import com.ctfs.WICI.Model.AuthfieldValue;

public class ApplicationApkVersionValidator
{
	static Logger log = Logger.getLogger(ApplicationApkVersionValidator.class.getName());

	private final String LOG_ENTRY_PREFIX = "Version Check Failure:";

	public void validateApkVersion(String employerID, String agentID, String userLocation, String apkVersion, AuthfieldValue argSerials) throws SQLException, IllegalAppVersionException
	{
		String sMethod = this.getClass().getName() + "[validateApkVersion] ";
		log.info(sMethod);

		WICIDBHelper wicidbHelper = new WICIDBHelper();
		IConfigurationTableEntity configurationTableEntity = wicidbHelper.getApprovedAPKVersion(apkVersion);

		if (!validateConfigurationTableEntity(configurationTableEntity))
		{
			String mfgSerial = argSerials.getMfgSerial();
			String buildSerial = argSerials.getBuildSerial();
			throw new IllegalAppVersionException(String.format("\n%s\nFailed for the following user:\n---employerID: %s;\n---agentID: %s;\n---userLocation: %s\n---Authfield Value: { MfgSerial : %s, BuildSerial : %s }", LOG_ENTRY_PREFIX, employerID, agentID, userLocation,mfgSerial,buildSerial));
		}
	}

	private boolean validateConfigurationTableEntity(IConfigurationTableEntity configurationTableEntity)
	{
		String sMethod = this.getClass().getName() + "[validateConfigurationTableEntity] ";
		log.info(sMethod);

		return configurationTableEntity != null && validateStringParameter(configurationTableEntity.getConfigName()) && validateStringParameter(configurationTableEntity.getConfigValue());
	}

	private boolean validateStringParameter(String value)
	{
		String sMethod = this.getClass().getName() + "[validateStringParameter] ";
		log.info(sMethod);

		return value != null && !value.isEmpty();
	}
}
