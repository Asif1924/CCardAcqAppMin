package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;
import java.util.Arrays;

public class ChooseProductData implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String employerID;
	private String productCard;
	private String agencyPromoCode;
	private String controlConfirmationFlag;
	private byte[] controlConfirmationSignature;
	private String costOfCreditAgreement;
	private String cardMemberAgreement;
	private String triangleRewardAgreement;
	private String agencyProgram;
	private String outletProvince;
	private String agencyPromoCodeDropDown;
	
	
	/**
	 * @return the employerID
	 */
	public String getEmployerID() {
		return employerID;
	}
	/**
	 * @param employerID the employerID to set
	 */
	public void setEmployerID(String employerID) {
		this.employerID = employerID;
	}
	/**
	 * @return the productCard
	 */
	public String getProductCard() {
		return productCard;
	}
	/**
	 * @param productCard the productCard to set
	 */
	public void setProductCard(String productCard) {
		this.productCard = productCard;
	}
	/**
	 * @return the agencyPromoCode
	 */
	public String getAgencyPromoCode() {
		return agencyPromoCode;
	}
	/**
	 * @param agencyPromoCode the agencyPromoCode to set
	 */
	public void setAgencyPromoCode(String agencyPromoCode) {
		this.agencyPromoCode = agencyPromoCode;
	}
	/**
	 * @return the controlConfirmationFlag
	 */
	public String getControlConfirmationFlag() {
		return controlConfirmationFlag;
	}
	/**
	 * @param controlConfirmationFlag the controlConfirmationFlag to set
	 */
	public void setControlConfirmationFlag(String controlConfirmationFlag) {
		this.controlConfirmationFlag = controlConfirmationFlag;
	}
	/**
	 * @return the costOfCreditAgreement
	 */
	public String getCostOfCreditAgreement() {
		return costOfCreditAgreement;
	}
	/**
	 * @param costOfCreditAgreement the costOfCreditAgreement to set
	 */
	public void setCostOfCreditAgreement(String costOfCreditAgreement) {
		this.costOfCreditAgreement = costOfCreditAgreement;
	}
	/**
	 * @return the cardMemberAgreement
	 */
	public String getCardMemberAgreement() {
		return cardMemberAgreement;
	}
	/**
	 * @param cardMemberAgreement the cardMemberAgreement to set
	 */
	public void setCardMemberAgreement(String cardMemberAgreement) {
		this.cardMemberAgreement = cardMemberAgreement;
	}
	/**
	 * @return the triangleRewardAgreement
	 */
	public String getTriangleRewardAgreement() {
		return triangleRewardAgreement;
	}
	/**
	 * @param triangleRewardAgreement the triangleRewardAgreement to set
	 */
	public void setTriangleRewardAgreement(String triangleRewardAgreement) {
		this.triangleRewardAgreement = triangleRewardAgreement;
	}
	/**
	 * @return the agencyProgram
	 */
	public String getAgencyProgram() {
		return agencyProgram;
	}
	/**
	 * @param agencyProgram the agencyProgram to set
	 */
	public void setAgencyProgram(String agencyProgram) {
		this.agencyProgram = agencyProgram;
	}
	public String getOutletProvince() {
		return outletProvince;
	}
	public void setOutletProvince(String outletProvince) {
		this.outletProvince = outletProvince;
	}
	
	/**
	 * @return the controlConfirmationSignature
	 */
	public byte[] getControlConfirmationSignature() {
		return controlConfirmationSignature;
	}
	/**
	 * @param controlConfirmationSignature the controlConfirmationSignature to set
	 */
	public void setControlConfirmationSignature(byte[] controlConfirmationSignature) {
		this.controlConfirmationSignature = controlConfirmationSignature;
	}
	/**
	 * @return the agencyPromoCodeDropDown
	 */
	public String getAgencyPromoCodeDropDown() {
		return agencyPromoCodeDropDown;
	}
	/**
	 * @param agencyPromoCodeDropDown the agencyPromoCodeDropDown to set
	 */
	public void setAgencyPromoCodeDropDown(String agencyPromoCodeDropDown) {
		this.agencyPromoCodeDropDown = agencyPromoCodeDropDown;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "ChooseProductData [employerID=" + employerID + ", productCard="
				+ productCard + ", agencyPromoCode=" + agencyPromoCode
				+ ", controlConfirmationFlag=" + controlConfirmationFlag
				+ ", controlConfirmationSignature="
				+ Arrays.toString(controlConfirmationSignature)
				+ ", costOfCreditAgreement=" + costOfCreditAgreement
				+ ", cardMemberAgreement=" + cardMemberAgreement
				+ ", triangleRewardAgreement=" + triangleRewardAgreement
				+ ", agencyProgram=" + agencyProgram + ", outletProvince="
				+ outletProvince + ", agencyPromoCodeDropDown="
				+ agencyPromoCodeDropDown + "]";
	}
	
}
