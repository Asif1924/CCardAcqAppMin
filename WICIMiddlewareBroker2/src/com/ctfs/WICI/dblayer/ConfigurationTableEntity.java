package com.ctfs.WICI.dblayer;

import java.io.Serializable;
import java.sql.Timestamp;

import com.ctfs.WICI.dblayer.interfaces.IConfigurationTableEntity;

/**
 * The persistent class for the WICI_CONFIG database table.
 * 
 */
public class ConfigurationTableEntity implements Serializable, IConfigurationTableEntity {
	private static final long serialVersionUID = 1L;
	
	private String configName;
	private String configValue;
	private Timestamp lastUpdatedDate;
	private String lastUpdatedUser;
	
    @Override
	public String getConfigName() {
		return this.configName;
	}

    @Override
	public void setConfigName(String configName) {
		this.configName = configName;
	}

    @Override
	public String getConfigValue() {
		return this.configValue;
	}

    @Override
	public void setConfigValue(String configValue) {
		this.configValue = configValue;
	}

    @Override
	public Timestamp getLastUpdatedDate() {
		return this.lastUpdatedDate;
	}

    @Override
	public void setLastUpdatedDate(Timestamp lastUpdatedDate) {
		this.lastUpdatedDate = lastUpdatedDate;
	}

    @Override
	public String getLastUpdatedUser() {
		return this.lastUpdatedUser;
	}

    @Override
	public void setLastUpdatedUser(String lastUpdatedUser) {
		this.lastUpdatedUser = lastUpdatedUser;
	}
    
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString()
	{
		return "Applicationtransaction [configName=" + configName + ", configValue=" + configValue + ", lastUpdatedDate=" + 
		lastUpdatedDate + ", lastUpdatedUser=" + lastUpdatedUser + "]";
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode()
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + ((configName == null) ? 0 : configName.hashCode());
		return result;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj)
	{
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ConfigurationTableEntity other = (ConfigurationTableEntity) obj;
		if (configName == null)
		{
			if (other.configName != null)
				return false;
		}
		else if (!configName.equals(other.configName))
			return false;
		return true;
	}	
}