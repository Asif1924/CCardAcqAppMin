package com.ctfs.BRB.dblayer.interfaces;

import java.sql.Timestamp;

public interface IStateTrackerTableEntity
{
	public final static String APPSTATEID_COLUMN_NAME = "APPSTATEID";
	public final static String ABANDONSCREENID_COLUMN_NAME = "ABANDONSCREENID";
	public final static String APPID_COLUMN_NAME = "APPID";
	public final static String  ENDDATETIME_COLUMN_NAME= "ENDDATETIME";
	public final static String  STARTDATETIME_COLUMN_NAME= "STARTDATETIME";
	public String getAppId();
	public void setAppId(String appid);
	public java.math.BigDecimal getAbandonScreenId();
	public void setAbandonScreenId(java.math.BigDecimal abandonscreenid);
	public java.math.BigDecimal getAppStateId();
	public void setAppStateId(java.math.BigDecimal appstateid);
	public Timestamp getEndDateTime();
	public void setEndDateTime(Timestamp enddatetime);
	public Timestamp getStartDateTime();
	public void setStartDateTime(Timestamp startdatetime);
}
