package com.ctfs.WICI.Model;

import java.io.Serializable;
import java.util.Date;


public class TrainingAttestationResponse implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private byte[]  signature;
	private Date attestationDate;
	
	public byte[] getSignature() {
		return signature;
	}
	public void setSignature(byte[] signature) {
		this.signature = signature;
	}
	public Date getAttestationDate() {
		return attestationDate;
	}
	public void setAttestationDate(Date attestationDate) {
		this.attestationDate = attestationDate;
	}

}
