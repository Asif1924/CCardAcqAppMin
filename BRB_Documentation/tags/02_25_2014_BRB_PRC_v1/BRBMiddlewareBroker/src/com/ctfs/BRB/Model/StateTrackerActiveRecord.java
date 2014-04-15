package com.ctfs.BRB.Model;

import com.ctfs.BRB.Interfaces.Column;
import com.ctfs.BRB.Interfaces.Table;
import com.ctfs.BRB.Interfaces.TableActiveRecord;

/**
 * Simple POJO class represent instance of
 *         BRB_STATE_TRACKER table
 */
@Table(tableName = "webic_app.BRB_STATE_TRACKER")
public class StateTrackerActiveRecord implements TableActiveRecord
{
	private String appId;
	private String appStateID;
	private String abandonScreenID;
	private String startDateTime;
	private String endDateTime;

	@Column(columnName = "AppId", isPrimaryKey = true)
	public String getAppId()
	{
		return appId;
	}

	public void setAppId(String appId)
	{
		this.appId = appId;
	}

	@Column(columnName = "AppStateID")
	public String getAppStateID()
	{
		return appStateID;
	}

	public void setAppStateID(String appStateID)
	{
		this.appStateID = appStateID;
	}

	@Column(columnName = "AbandonScreenID")
	public String getAbandonScreenID()
	{
		return abandonScreenID;
	}

	public void setAbandonScreenID(String abandonScreenID)
	{
		this.abandonScreenID = abandonScreenID;
	}

	@Column(columnName = "StartDateTime")
	public String getStartDateTime()
	{
		return startDateTime;
	}

	public void setStartDateTime(String startDateTime)
	{
		this.startDateTime = startDateTime;
	}

	@Column(columnName = "EndDateTime")
	public String getEndDateTime()
	{
		return endDateTime;
	}

	public void setEndDateTime(String endDateTime)
	{
		this.endDateTime = endDateTime;
	}

}
