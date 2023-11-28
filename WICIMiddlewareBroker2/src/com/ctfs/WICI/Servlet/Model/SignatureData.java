package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;
import java.util.Arrays;

public class SignatureData implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private byte[] userSignature;
	private String signDate;
	private String userAcceptAgreement;
	
	/**
	 * @return the signDate
	 */
	public String getSignDate() {
		return signDate;
	}
	/**
	 * @param signDate the signDate to set
	 */
	public void setSignDate(String signDate) {
		this.signDate = signDate;
	}
	
	/**
	 * @return the userAcceptAgreement
	 */
	public String getUserAcceptAgreement() {
		return userAcceptAgreement;
	}
	/**
	 * @param userAcceptAgreement the userAcceptAgreement to set
	 */
	public void setUserAcceptAgreement(String userAcceptAgreement) {
		this.userAcceptAgreement = userAcceptAgreement;
	}
	/**
	 * @return the userSignature
	 */
	public byte[] getUserSignature() {
		return userSignature;
	}
	/**
	 * @param userSignature the userSignature to set
	 */
	public void setUserSignature(byte[] userSignature) {
		this.userSignature = userSignature;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "SignatureData [userSignature=" + Arrays.toString(userSignature)
				+ ", signDate=" + signDate + ", userAcceptAgreement="
				+ userAcceptAgreement + "]";
	}
	
}
