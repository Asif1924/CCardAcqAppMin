package com.ctfs.BRB.Interfaces;

/**
 * Don't forget update (re-map) AppTransaction interface, AppTransactionTableToEntity and EntityToAppTransactionTable classes
 * after APPLICATIONTRANSACTION has been updated
 */
public interface AppTransaction
{
	String getTransactionId();
	String getSessionId();
	String getExamInteractionId();
	String getAccountAppData();
	void setTransactionId(String transactionId);
	void setSessionId(String seesionId);
	void setExamInteractionId(String examInteractionId);
	void setAccountAppData(String accountAppData);
	String getReferenceNumber();
	void setReferenceNumber(String referenceNumber);
}
