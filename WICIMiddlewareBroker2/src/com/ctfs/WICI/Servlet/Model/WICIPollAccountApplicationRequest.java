package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;

import javax.validation.constraints.NotNull;

public class WICIPollAccountApplicationRequest implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String transactionID;
	private String action;
	private String retrievalToken;
	private String phone;
	
	
	public String getTransactionID() {
		return transactionID;
	}
	public void setTransactionID(String transactionID) {
		this.transactionID = transactionID;
	}
	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
	}
	public String getRetrievalToken() {
		return retrievalToken;
	}
	public void setRetrievalToken(String retrievalToken) {
		this.retrievalToken = retrievalToken;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}

	
}
