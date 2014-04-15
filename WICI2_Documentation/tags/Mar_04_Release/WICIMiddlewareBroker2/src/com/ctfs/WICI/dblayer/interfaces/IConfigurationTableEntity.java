package com.ctfs.WICI.dblayer.interfaces;

import java.sql.Timestamp;

/**
 * Don't forget update (re-map) AppTransaction interface, AppTransactionTableToEntity and EntityToAppTransactionTable classes
 * after APPLICATIONTRANSACTION have been updated
 */
public interface IConfigurationTableEntity
{
	String getConfigName();
	String getConfigValue();
	Timestamp getLastUpdatedDate();
	String getLastUpdatedUser();	
	void setConfigName(String configName);
	void setConfigValue(String configValue);
	void setLastUpdatedDate(Timestamp lastUpdatedDate);
	void setLastUpdatedUser(String lastUpdatedUser);	
}
