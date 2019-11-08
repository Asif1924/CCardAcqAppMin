package com.brb.brbsimulatorcontroller.model;

import java.io.Serializable;

public class ValidateEcomProfileTransactionInput extends GenericAdjudicationInput implements Serializable{
	
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String brbTransactionId;
    private String TrackingScreenID;
	
	public String getBrbTransactionId() {
		return brbTransactionId;
	}
	public void setBrbTransactionId(String brbTransactionId) {
		this.brbTransactionId = brbTransactionId;
	}
	public String getTrackingScreenID() {
		return TrackingScreenID;
	}
	public void setTrackingScreenID(String trackingScreenID) {
		TrackingScreenID = trackingScreenID;
	}
	@Override
	public String toString() {
		return "ValidateEcomProfileTransactionInput [brbTransactionId=" + brbTransactionId + ", TrackingScreenID="
				+ TrackingScreenID + "]";
	}
	
}
