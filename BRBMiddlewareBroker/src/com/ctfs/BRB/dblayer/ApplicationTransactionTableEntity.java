package com.ctfs.BRB.dblayer;

import java.io.Serializable;

import com.ctfs.BRB.dblayer.interfaces.IAppTransactionTableEntity;

/**
 * The persistent class for the APPLICATIONTRANSACTION database table.
 * 
 */
public class ApplicationTransactionTableEntity implements Serializable, IAppTransactionTableEntity {
	private static final long serialVersionUID = 1L;
	
	private String transactionid;
	private String accountapplicationdata;
	private String examinteractionid;
	private String sessionid;
	private String tokenizationreferencenumber;
	private String scoreidentityexamresponse;
	
    public ApplicationTransactionTableEntity() {
    }

    @Override
	public String getTransactionId() {
		return this.transactionid;
	}

    @Override
	public void setTransactionId(String transactionId) {
		this.transactionid = transactionId;
	}

    @Override
	public String getAccountAppData() {
		return this.accountapplicationdata;
	}

    @Override
	public void setAccountAppData(String accountAppData) {
		this.accountapplicationdata = accountAppData;
	}
    
    @Override
	public String getScoreIdentityExamResponse() {
		return this.scoreidentityexamresponse;
	}

    @Override
	public void setScoreIdentityExamResponse(String scoreIdentityExamResponse) {
		this.scoreidentityexamresponse = scoreIdentityExamResponse;
	}

    @Override
	public String getExamInteractionId() {
		return this.examinteractionid;
	}

    @Override
	public void setExamInteractionId(String examInteractionId) {
		this.examinteractionid = examInteractionId;
	}

    @Override
	public String getSessionId() {
		return this.sessionid;
	}

    @Override
	public void setSessionId(String seesionId) {
		this.sessionid = seesionId;
	}

    @Override
	public String getReferenceNumber() {
		return this.tokenizationreferencenumber;
	}

    @Override
	public void setReferenceNumber(String referenceNumber) {
		this.tokenizationreferencenumber = referenceNumber;
	}	

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString()
	{
		return "Applicationtransaction [transactionid=" + transactionid + ", accountapplicationdata=" + accountapplicationdata + ", examinteractionid=" + examinteractionid + ", sessionid="
				+ sessionid + ", tokenizationreferencenumber=" + tokenizationreferencenumber + ", scoreidentityexamresponse=" + scoreidentityexamresponse + "]";
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode()
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + ((transactionid == null) ? 0 : transactionid.hashCode());
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
		ApplicationTransactionTableEntity other = (ApplicationTransactionTableEntity) obj;
		if (transactionid == null)
		{
			if (other.transactionid != null)
				return false;
		}
		else if (!transactionid.equals(other.transactionid))
			return false;
		return true;
	}	
}