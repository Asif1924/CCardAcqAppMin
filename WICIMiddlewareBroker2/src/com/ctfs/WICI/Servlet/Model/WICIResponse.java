package com.ctfs.WICI.Servlet.Model;

import com.ctfs.WICI.Interfaces.IResponse;
import com.ctfs.WICI.Model.AccountApplicationSubmissionRequest;

public class WICIResponse implements IResponse
{
	protected boolean error;
	protected String msg;
	protected Object data;
	protected String consentGranted;
	protected String transactionId;
	protected String enstreamResponse;
	protected String admAppId;
	AccountApplicationSubmissionRequest accountApplicationSubmissionRequest;
	
	public WICIResponse() {
		this.error = false;
		this.msg = "";
		this.data = null;
	}
	public WICIResponse(boolean error, String msg, Object data) {
		this.error = error;
		this.msg = msg;
		this.data = data;
	}
	public WICIResponse(boolean error, String msg, String transactionId,String consentGranted,String admAppId) {
		this.error = error;
		this.msg = msg;
		this.transactionId = transactionId;
		this.consentGranted=consentGranted;
		this.admAppId=admAppId;
	}
	
	/**
	 * @return the error
	 */
	public boolean isError()
	{
		return error;
	}
	/**
	 * @param error the error to set
	 */
	public void setError(boolean error)
	{
		this.error = error;
	}
	/**
	 * @return the msg
	 */
	public String getMsg()
	{
		return msg;
	}
	/**
	 * @param msg the msg to set
	 */
	public void setMsg(String msg)
	{
		this.msg = msg;
	}
	/**
	 * @return the data
	 */
	public Object getData()
	{
		return data;
	}
	/**
	 * @param data the data to set
	 */
	public void setData(Object data)
	{
		this.data = data;
	}
	/**
	 * @return the enstreamResponse
	 */
	public String getEnstreamResponse() {
		return enstreamResponse;
	}
	/**
	 * @return the consentGranted
	 */
	public String getConsentGranted() {
		return consentGranted;
	}
	/**
	 * @param consentGranted the consentGranted to set
	 */
	public void setConsentGranted(String consentGranted) {
		this.consentGranted = consentGranted;
	}
	/**
	 * @return the transacationId
	 */
	public String getTransacationId() {
		return transactionId;
	}
	/**
	 * @param transacationId the transacationId to set
	 */
	public void setTransacationId(String transacationId) {
		this.transactionId = transacationId;
	}
	/**
	 * @param enstreamResponse the enstreamResponse to set
	 */
	public void setEnstreamResponse(String enstreamResponse) {
		this.enstreamResponse = enstreamResponse;
	}
	/**
	 * @return the admAppId
	 */
	public String getAdmAppId() {
		return admAppId;
	}
	/**
	 * @return the accountApplicationSubmissionRequest
	 */
	public AccountApplicationSubmissionRequest getAccountApplicationSubmissionRequest() {
		return accountApplicationSubmissionRequest;
	}
	/**
	 * @param accountApplicationSubmissionRequest the accountApplicationSubmissionRequest to set
	 */
	public void setAccountApplicationSubmissionRequest(
			AccountApplicationSubmissionRequest accountApplicationSubmissionRequest) {
		this.accountApplicationSubmissionRequest = accountApplicationSubmissionRequest;
	}
	/**
	 * @param admAppId the admAppId to set
	 */
	public void setAdmAppId(String admAppId) {
		this.admAppId = admAppId;
	}

}