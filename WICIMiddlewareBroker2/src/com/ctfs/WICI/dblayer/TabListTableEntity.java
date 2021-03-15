package com.ctfs.WICI.dblayer;

import java.io.Serializable;

import com.ctfs.WICI.dblayer.interfaces.ITabListTableEntity;

/**
 * The persistent class for the WICI_TAB_LIST database table.
 * 
 */
public class TabListTableEntity implements Serializable, ITabListTableEntity {
	private static final long serialVersionUID = 1L;
	
	private String agentID;
	private String mfgSerialNo;
	
	public String getAgentID() {
		return agentID;
	}
	public void setAgentID(String agentID) {
		this.agentID = agentID;
	}
	public String getMfgSerialNo() {
		return mfgSerialNo;
	}
	public void setMfgSerialNo(String mfgSerialNo) {
		this.mfgSerialNo = mfgSerialNo;
	}
    		
}