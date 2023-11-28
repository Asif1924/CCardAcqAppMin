package com.ctfs.WICI.Model;

import java.io.Serializable;
import java.util.Arrays;
import java.util.Date;


public class WICICheckTrainingAttestationResponse implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private byte[]  signature;
	private Date attestationDate;
	private boolean insertStatus;
	private String message;
	private boolean error;
	
	
	public byte[] getSignature() {
		return signature;
	}
	public void setSignature(byte[] signature) {
		this.signature = signature;
	}
	public Date getAttetationDate() {
		return attestationDate;
	}
	public void setAttetationDate(Date attetationDate) {
		this.attestationDate = attetationDate;
	}
	public boolean isInsertStatus() {
		return insertStatus;
	}
	public void setInsertStatus(boolean insertStatus) {
		this.insertStatus = insertStatus;
	}
	public Date getAttestationDate() {
		return attestationDate;
	}
	public void setAttestationDate(Date attestationDate) {
		this.attestationDate = attestationDate;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public boolean getError() {
		return error;
	}
	public void setError(boolean error) {
		this.error = error;
	}
	@Override
	public String toString() {
		return "WICITrainingAttestationResponse [signature=" + Arrays.toString(signature) + ", attestationDate="
				+ attestationDate + ", insertStatus=" + insertStatus + ", message=" + message + ", error=" + error
				+ "]";
	}
	
}
