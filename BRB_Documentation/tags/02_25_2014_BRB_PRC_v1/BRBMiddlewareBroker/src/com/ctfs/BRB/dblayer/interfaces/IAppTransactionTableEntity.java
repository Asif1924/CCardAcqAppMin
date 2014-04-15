package com.ctfs.BRB.dblayer.interfaces;

/**
 * Don't forget update (re-map) AppTransaction interface, AppTransactionTableToEntity and EntityToAppTransactionTable classes
 * after APPLICATIONTRANSACTION has been updated
 */
public interface IAppTransactionTableEntity
{
	String getTransactionId();
	String getSessionId();
	String getExamInteractionId();
	String getAccountAppData();
	String getReferenceNumber();
	String getScoreIdentityExamResponse();
	void setTransactionId(String transactionId);
	void setSessionId(String seesionId);
	void setExamInteractionId(String examInteractionId);
	void setAccountAppData(String accountAppData);	
	void setReferenceNumber(String referenceNumber);
	void setScoreIdentityExamResponse(String scoreIdentityExamResponse);
}