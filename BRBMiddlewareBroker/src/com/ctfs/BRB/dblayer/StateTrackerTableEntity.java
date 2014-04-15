package com.ctfs.BRB.dblayer;

import java.io.Serializable;
import java.sql.Timestamp;

import com.ctfs.BRB.dblayer.interfaces.IStateTrackerTableEntity;

/**
 * The persistent class for the BRB_STATE_TRACKER database table.
 * 
 */
public class StateTrackerTableEntity implements Serializable, IStateTrackerTableEntity {
	private static final long serialVersionUID = 1L;
	
	private String appid;
	private java.math.BigDecimal abandonscreenid;
	private java.math.BigDecimal appstateid;
	private Timestamp enddatetime;
	private Timestamp startdatetime;

    public StateTrackerTableEntity() {
    }

    @Override
	public String getAppId() {
		return this.appid;
	}

    @Override
	public void setAppId(String appid) {
		this.appid = appid;
	}

    @Override
	public java.math.BigDecimal getAbandonScreenId() {
		return this.abandonscreenid;
	}

    @Override
	public void setAbandonScreenId(java.math.BigDecimal abandonscreenid) {
		this.abandonscreenid = abandonscreenid;
	}

    @Override
	public java.math.BigDecimal getAppStateId() {
		return this.appstateid;
	}

    @Override
	public void setAppStateId(java.math.BigDecimal appstateid) {
		this.appstateid = appstateid;
	}

    @Override
	public Timestamp getEndDateTime() {
		return this.enddatetime;
	}

    @Override
	public void setEndDateTime(Timestamp enddatetime) {
		this.enddatetime = enddatetime;
	}

    @Override
	public Timestamp getStartDateTime() {
		return this.startdatetime;
	}

    @Override
	public void setStartDateTime(Timestamp startdatetime) {
		this.startdatetime = startdatetime;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString()
	{
		return "BrbStateTracker [appid=" + appid + ", abandonscreenid=" + abandonscreenid + ", appstateid=" + appstateid + ", enddatetime=" + enddatetime + ", startdatetime=" + startdatetime + "]";
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode()
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + ((appid == null) ? 0 : appid.hashCode());
		result = prime * result + ((appstateid == null) ? 0 : appstateid.hashCode());
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
		StateTrackerTableEntity other = (StateTrackerTableEntity) obj;
		if (appid == null)
		{
			if (other.appid != null)
				return false;
		}
		else if (!appid.equals(other.appid))
			return false;
		if (appstateid == null)
		{
			if (other.appstateid != null)
				return false;
		}
		else if (!appstateid.equals(other.appstateid))
			return false;
		return true;
	}	
}