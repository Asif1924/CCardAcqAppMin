package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;

public class ContactInfoScreen implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String applicationReferenceID;
	private String primaryLandline_CheckField;
	private String secondaryLandline_CheckField;
	private String primaryMobile_CheckField;
	private String secondaryMobile_CheckField;
	private String homePhone;
	private String cellPhone;
	private String email;
	private String receiveEmail;
	private String estmt_consent;
	private boolean homePhoneRadioGroup;
	private boolean cellPhoneRadioGroup;
	
	/**
	 * @return the applicationReferenceID
	 */
	public String getApplicationReferenceID() {
		return applicationReferenceID;
	}
	/**
	 * @param applicationReferenceID the applicationReferenceID to set
	 */
	public void setApplicationReferenceID(String applicationReferenceID) {
		this.applicationReferenceID = applicationReferenceID;
	}
	/**
	 * @return the primaryLandline_CheckField
	 */
	public String getPrimaryLandline_CheckField() {
		return primaryLandline_CheckField;
	}
	/**
	 * @param primaryLandline_CheckField the primaryLandline_CheckField to set
	 */
	public void setPrimaryLandline_CheckField(String primaryLandline_CheckField) {
		this.primaryLandline_CheckField = primaryLandline_CheckField;
	}
	/**
	 * @return the secondaryLandline_CheckField
	 */
	public String getSecondaryLandline_CheckField() {
		return secondaryLandline_CheckField;
	}
	/**
	 * @param secondaryLandline_CheckField the secondaryLandline_CheckField to set
	 */
	public void setSecondaryLandline_CheckField(String secondaryLandline_CheckField) {
		this.secondaryLandline_CheckField = secondaryLandline_CheckField;
	}
	/**
	 * @return the primaryMobile_CheckField
	 */
	public String getPrimaryMobile_CheckField() {
		return primaryMobile_CheckField;
	}
	/**
	 * @param primaryMobile_CheckField the primaryMobile_CheckField to set
	 */
	public void setPrimaryMobile_CheckField(String primaryMobile_CheckField) {
		this.primaryMobile_CheckField = primaryMobile_CheckField;
	}
	/**
	 * @return the secondaryMobile_CheckField
	 */
	public String getSecondaryMobile_CheckField() {
		return secondaryMobile_CheckField;
	}
	/**
	 * @param secondaryMobile_CheckField the secondaryMobile_CheckField to set
	 */
	public void setSecondaryMobile_CheckField(String secondaryMobile_CheckField) {
		this.secondaryMobile_CheckField = secondaryMobile_CheckField;
	}
	/**
	 * @return the homePhone
	 */
	public String getHomePhone() {
		return homePhone;
	}
	/**
	 * @param homePhone the homePhone to set
	 */
	public void setHomePhone(String homePhone) {
		this.homePhone = homePhone;
	}
	/**
	 * @return the cellPhone
	 */
	public String getCellPhone() {
		return cellPhone;
	}
	/**
	 * @param cellPhone the cellPhone to set
	 */
	public void setCellPhone(String cellPhone) {
		this.cellPhone = cellPhone;
	}
	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}
	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}
	/**
	 * @return the receiveEmail
	 */
	public String getReceiveEmail() {
		return receiveEmail;
	}
	/**
	 * @param receiveEmail the receiveEmail to set
	 */
	public void setReceiveEmail(String receiveEmail) {
		this.receiveEmail = receiveEmail;
	}
	/**
	 * @return the estmt_consent
	 */
	public String getEstmt_consent() {
		return estmt_consent;
	}
	/**
	 * @param estmt_consent the estmt_consent to set
	 */
	public void setEstmt_consent(String estmt_consent) {
		this.estmt_consent = estmt_consent;
	}
	/**
	 * @return the homePhoneRadioGroup
	 */
	public boolean isHomePhoneRadioGroup() {
		return homePhoneRadioGroup;
	}
	/**
	 * @param homePhoneRadioGroup the homePhoneRadioGroup to set
	 */
	public void setHomePhoneRadioGroup(boolean homePhoneRadioGroup) {
		this.homePhoneRadioGroup = homePhoneRadioGroup;
	}
	/**
	 * @return the cellPhoneRadioGroup
	 */
	public boolean isCellPhoneRadioGroup() {
		return cellPhoneRadioGroup;
	}
	/**
	 * @param cellPhoneRadioGroup the cellPhoneRadioGroup to set
	 */
	public void setCellPhoneRadioGroup(boolean cellPhoneRadioGroup) {
		this.cellPhoneRadioGroup = cellPhoneRadioGroup;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "ContactInfoScreen [applicationReferenceID="
				+ applicationReferenceID + ", primaryLandline_CheckField="
				+ primaryLandline_CheckField
				+ ", secondaryLandline_CheckField="
				+ secondaryLandline_CheckField + ", primaryMobile_CheckField="
				+ primaryMobile_CheckField + ", secondaryMobile_CheckField="
				+ secondaryMobile_CheckField + ", homePhone=" + homePhone
				+ ", cellPhone=" + cellPhone + ", email=" + email
				+ ", receiveEmail=" + receiveEmail + ", estmt_consent="
				+ estmt_consent + ", homePhoneRadioGroup="
				+ homePhoneRadioGroup + ", cellPhoneRadioGroup="
				+ cellPhoneRadioGroup + "]";
	}
	
}
