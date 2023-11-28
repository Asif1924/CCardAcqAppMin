package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;

public class SummaryData implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String summaryAgentID;

	/**
	 * @return the summaryAgentID
	 */
	public String getSummaryAgentID() {
		return summaryAgentID;
	}

	/**
	 * @param summaryAgentID the summaryAgentID to set
	 */
	public void setSummaryAgentID(String summaryAgentID) {
		this.summaryAgentID = summaryAgentID;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "SummaryData [summaryAgentID=" + summaryAgentID + "]";
	}
	
}
