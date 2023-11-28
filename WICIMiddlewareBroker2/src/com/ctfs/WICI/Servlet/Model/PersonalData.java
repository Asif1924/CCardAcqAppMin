package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;

public class PersonalData implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String loyaltyMembershipNumber;
	private String firstName;
	private String initial;
	private String lastName;
	private String birthDate;
	private String idtype;
	private String idnumbers;
	private String placeofissue;
	private String correspondence;
	private String idExpiryDate;
	private String title;
	private int requestedCreditLimit;
	private String DSAScore;
	private String treatmentCode;
	private String tmxProfileID;
	private String PIISource;
	private String age;
	private boolean manualFill;
	
	
	/**
	 * @return the loyaltyMembershipNumber
	 */
	public String getLoyaltyMembershipNumber() {
		return loyaltyMembershipNumber;
	}
	/**
	 * @param loyaltyMembershipNumber the loyaltyMembershipNumber to set
	 */
	public void setLoyaltyMembershipNumber(String loyaltyMembershipNumber) {
		this.loyaltyMembershipNumber = loyaltyMembershipNumber;
	}
	/**
	 * @return the firstName
	 */
	public String getFirstName() {
		return firstName;
	}
	/**
	 * @param firstName the firstName to set
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	/**
	 * @return the initial
	 */
	public String getInitial() {
		return initial;
	}
	/**
	 * @param initial the initial to set
	 */
	public void setInitial(String initial) {
		this.initial = initial;
	}
	/**
	 * @return the lastName
	 */
	public String getLastName() {
		return lastName;
	}
	/**
	 * @param lastName the lastName to set
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	/**
	 * @return the birthDate
	 */
	public String getBirthDate() {
		return birthDate;
	}
	/**
	 * @param birthDate the birthDate to set
	 */
	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}
	/**
	 * @return the idtype
	 */
	public String getIdtype() {
		return idtype;
	}
	/**
	 * @param idtype the idtype to set
	 */
	public void setIdtype(String idtype) {
		this.idtype = idtype;
	}
	/**
	 * @return the idnumbers
	 */
	public String getIdnumbers() {
		return idnumbers;
	}
	/**
	 * @param idnumbers the idnumbers to set
	 */
	public void setIdnumbers(String idnumbers) {
		this.idnumbers = idnumbers;
	}
	/**
	 * @return the placeofissue
	 */
	public String getPlaceofissue() {
		return placeofissue;
	}
	/**
	 * @param placeofissue the placeofissue to set
	 */
	public void setPlaceofissue(String placeofissue) {
		this.placeofissue = placeofissue;
	}
	/**
	 * @return the correspondence
	 */
	public String getCorrespondence() {
		return correspondence;
	}
	/**
	 * @param correspondence the correspondence to set
	 */
	public void setCorrespondence(String correspondence) {
		this.correspondence = correspondence;
	}
	/**
	 * @return the idExpiryDate
	 */
	public String getIdExpiryDate() {
		return idExpiryDate;
	}
	/**
	 * @param idExpiryDate the idExpiryDate to set
	 */
	public void setIdExpiryDate(String idExpiryDate) {
		this.idExpiryDate = idExpiryDate;
	}
	/**
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}
	/**
	 * @param title the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}
	/**
	 * @return the requestedCreditLimit
	 */
	public int getRequestedCreditLimit() {
		return requestedCreditLimit;
	}
	/**
	 * @param requestedCreditLimit the requestedCreditLimit to set
	 */
	public void setRequestedCreditLimit(int requestedCreditLimit) {
		this.requestedCreditLimit = requestedCreditLimit;
	}
	/**
	 * @return the dSAScore
	 */
	public String getDSAScore() {
		return DSAScore;
	}
	/**
	 * @param dSAScore the dSAScore to set
	 */
	public void setDSAScore(String dSAScore) {
		DSAScore = dSAScore;
	}
	/**
	 * @return the treatmentCode
	 */
	public String getTreatmentCode() {
		return treatmentCode;
	}
	/**
	 * @param treatmentCode the treatmentCode to set
	 */
	public void setTreatmentCode(String treatmentCode) {
		this.treatmentCode = treatmentCode;
	}
	/**
	 * @return the tmxProfileID
	 */
	public String getTmxProfileID() {
		return tmxProfileID;
	}
	/**
	 * @param tmxProfileID the tmxProfileID to set
	 */
	public void setTmxProfileID(String tmxProfileID) {
		this.tmxProfileID = tmxProfileID;
	}
	/**
	 * @return the pIISource
	 */
	public String getPIISource() {
		return PIISource;
	}
	/**
	 * @param pIISource the pIISource to set
	 */
	public void setPIISource(String pIISource) {
		PIISource = pIISource;
	}
	/**
	 * @return the age
	 */
	public String getAge() {
		return age;
	}
	/**
	 * @param age the age to set
	 */
	public void setAge(String age) {
		this.age = age;
	}
	/**
	 * @return the manualFill
	 */
	public boolean isManualFill() {
		return manualFill;
	}
	/**
	 * @param manualFill the manualFill to set
	 */
	public void setManualFill(boolean manualFill) {
		this.manualFill = manualFill;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "PersonalData [loyaltyMembershipNumber="
				+ loyaltyMembershipNumber + ", firstName=" + firstName
				+ ", initial=" + initial + ", lastName=" + lastName
				+ ", birthDate=" + birthDate + ", idtype=" + idtype
				+ ", idnumbers=" + idnumbers + ", placeofissue=" + placeofissue
				+ ", correspondence=" + correspondence + ", idExpiryDate="
				+ idExpiryDate + ", title=" + title + ", requestedCreditLimit="
				+ requestedCreditLimit + ", DSAScore=" + DSAScore
				+ ", treatmentCode=" + treatmentCode + ", tmxProfileID="
				+ tmxProfileID + ", PIISource=" + PIISource + ", age=" + age
				+ ", manualFill=" + manualFill + "]";
	}
	
}
