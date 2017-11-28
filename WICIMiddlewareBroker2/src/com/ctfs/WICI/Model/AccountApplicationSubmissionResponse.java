package com.ctfs.WICI.Model;

import com.ctfs.WICI.Servlet.Model.CreditCardApplicationData;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class AccountApplicationSubmissionResponse {
	WICIResponse ResponseData;
	String RetrievalToken;
	String TransactionState;
	CreditCardApplicationData ActivationItems;
	String consentGranted;
	String externalReferencId;
	String currentTelephone;

	public CreditCardApplicationData getActivationItems() {
		return this.ActivationItems;
	}

	public void setActivationItems(CreditCardApplicationData activationItems) {
		this.ActivationItems = activationItems;
	}

	public WICIResponse getResponseData() {
		return ResponseData;
	}

	public void setResponseData(WICIResponse responseData) {
		ResponseData = responseData;
	}

	public String getRetrievalToken() {
		return RetrievalToken;
	}

	public void setRetrievalToken(String retrievalToken) {
		RetrievalToken = retrievalToken;
	}

	public String getTransactionState() {
		return TransactionState;
	}

	public void setTransactionState(String transactionState) {
		TransactionState = transactionState;
	}

	public String getConsentGranted() {
		return consentGranted;
	}

	public void setConsentGranted(String consentGranted) {
		this.consentGranted = consentGranted;
	}

	public String getExternalReferencId() {
		return externalReferencId;
	}

	/**
	 * @return the currentTelephone
	 */
	public String getCurrentTelephone() {
		return currentTelephone;
	}

	/**
	 * @param currentTelephone the currentTelephone to set
	 */
	public void setCurrentTelephone(String currentTelephone) {
		this.currentTelephone = currentTelephone;
	}

	public void setExternalReferencId(String externalReferencId) {
		this.externalReferencId = externalReferencId;
	}

}
