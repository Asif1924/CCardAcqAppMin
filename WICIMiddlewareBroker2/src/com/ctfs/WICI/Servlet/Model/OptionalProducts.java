package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;
import java.util.Arrays;

public class OptionalProducts implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String insuranceCode;
	private String optionalProducts_CPC_AcceptBox;
	private String optionalProducts_CPLD_AcceptBox;
	private String signDate;
	private byte[] userSignature_CPC;
	private byte[] userSignature_CPLD;
	private String insuranceAgreedFlag;
	private String insuranceSignatureFlag;
	
	/**
	 * @return the insuranceCode
	 */
	public String getInsuranceCode() {
		return insuranceCode;
	}
	/**
	 * @param insuranceCode the insuranceCode to set
	 */
	public void setInsuranceCode(String insuranceCode) {
		this.insuranceCode = insuranceCode;
	}
	/**
	 * @return the optionalProducts_CPC_AcceptBox
	 */
	public String getOptionalProducts_CPC_AcceptBox() {
		return optionalProducts_CPC_AcceptBox;
	}
	/**
	 * @param optionalProducts_CPC_AcceptBox the optionalProducts_CPC_AcceptBox to set
	 */
	public void setOptionalProducts_CPC_AcceptBox(
			String optionalProducts_CPC_AcceptBox) {
		this.optionalProducts_CPC_AcceptBox = optionalProducts_CPC_AcceptBox;
	}
	/**
	 * @return the optionalProducts_CPLD_AcceptBox
	 */
	public String getOptionalProducts_CPLD_AcceptBox() {
		return optionalProducts_CPLD_AcceptBox;
	}
	/**
	 * @param optionalProducts_CPLD_AcceptBox the optionalProducts_CPLD_AcceptBox to set
	 */
	public void setOptionalProducts_CPLD_AcceptBox(
			String optionalProducts_CPLD_AcceptBox) {
		this.optionalProducts_CPLD_AcceptBox = optionalProducts_CPLD_AcceptBox;
	}
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
	 * @return the insuranceAgreedFlag
	 */
	public String getInsuranceAgreedFlag() {
		return insuranceAgreedFlag;
	}
	/**
	 * @param insuranceAgreedFlag the insuranceAgreedFlag to set
	 */
	public void setInsuranceAgreedFlag(String insuranceAgreedFlag) {
		this.insuranceAgreedFlag = insuranceAgreedFlag;
	}
	/**
	 * @return the userSignature_CPC
	 */
	public byte[] getUserSignature_CPC() {
		return userSignature_CPC;
	}
	/**
	 * @param userSignature_CPC the userSignature_CPC to set
	 */
	public void setUserSignature_CPC(byte[] userSignature_CPC) {
		this.userSignature_CPC = userSignature_CPC;
	}
	/**
	 * @return the userSignature_CPLD
	 */
	public byte[] getUserSignature_CPLD() {
		return userSignature_CPLD;
	}
	/**
	 * @param userSignature_CPLD the userSignature_CPLD to set
	 */
	public void setUserSignature_CPLD(byte[] userSignature_CPLD) {
		this.userSignature_CPLD = userSignature_CPLD;
	}
	public String getInsuranceSignatureFlag() {
		return insuranceSignatureFlag;
	}
	/**
	 * @param insuranceSignatureFlag the insuranceSignatureFlag to set
	 */
	public void setInsuranceSignatureFlag(String insuranceSignatureFlag) {
		this.insuranceSignatureFlag = insuranceSignatureFlag;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "OptionalProducts [insuranceCode=" + insuranceCode
				+ ", optionalProducts_CPC_AcceptBox="
				+ optionalProducts_CPC_AcceptBox
				+ ", optionalProducts_CPLD_AcceptBox="
				+ optionalProducts_CPLD_AcceptBox + ", signDate=" + signDate
				+ ", userSignature_CPC=" + Arrays.toString(userSignature_CPC)
				+ ", userSignature_CPLD=" + Arrays.toString(userSignature_CPLD)
				+ ", insuranceAgreedFlag=" + insuranceAgreedFlag
				+ ", insuranceSignatureFlag=" + insuranceSignatureFlag + "]";
	}
	
}
