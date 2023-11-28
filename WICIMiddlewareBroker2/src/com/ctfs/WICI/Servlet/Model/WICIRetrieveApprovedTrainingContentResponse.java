package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Arrays;

public class WICIRetrieveApprovedTrainingContentResponse implements Serializable 
{

	private static final long serialVersionUID = 1L;
	
	private int trainingContentId;
	private byte[] trainingContentEn;;
	private byte[] trainingContentFr;
	private int trainingContentVersion;
	private Timestamp activateDate;
	private String statusCode;
	
	
	/**
	 * @return the trainingContentId
	 */
	public int getTrainingContentId() {
		return trainingContentId;
	}
	/**
	 * @param trainingContentId the trainingContentId to set
	 */
	public void setTrainingContentId(int trainingContentId) {
		this.trainingContentId = trainingContentId;
	}
	/**
	 * @return the trainingContentEn
	 */
	public byte[] getTrainingContentEn() {
		return trainingContentEn;
	}
	/**
	 * @param trainingContentEn the trainingContentEn to set
	 */
	public void setTrainingContentEn(byte[] trainingContentEn) {
		this.trainingContentEn = trainingContentEn;
	}
	/**
	 * @return the trainingContentFr
	 */
	public byte[] getTrainingContentFr() {
		return trainingContentFr;
	}
	/**
	 * @param trainingContentFr the trainingContentFr to set
	 */
	public void setTrainingContentFr(byte[] trainingContentFr) {
		this.trainingContentFr = trainingContentFr;
	}
	/**
	 * @return the trainingContentVersion
	 */
	public int getTrainingContentVersion() {
		return trainingContentVersion;
	}
	/**
	 * @param trainingContentVersion the trainingContentVersion to set
	 */
	public void setTrainingContentVersion(int trainingContentVersion) {
		this.trainingContentVersion = trainingContentVersion;
	}
	/**
	 * @return the activateDate
	 */
	public Timestamp getActivateDate() {
		return activateDate;
	}
	/**
	 * @param activateDate the activateDate to set
	 */
	public void setActivateDate(Timestamp activateDate) {
		this.activateDate = activateDate;
	}
	
	
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "RetrieveTrainingContent [trainingContentId="
				+ trainingContentId + ", trainingContentEn="
				+ Arrays.toString(trainingContentEn) + ", trainingContentFr="
				+ Arrays.toString(trainingContentFr)
				+ ", trainingContentVersion=" + trainingContentVersion
				+ ", activateDate=" + activateDate + "]";
	}
	/**
	 * @return the statusCode
	 */
	public String getStatusCode() {
		return statusCode;
	}
	/**
	 * @param statusCode the statusCode to set
	 */
	public void setStatusCode(String statusCode) {
		this.statusCode = statusCode;
	}
	
}
