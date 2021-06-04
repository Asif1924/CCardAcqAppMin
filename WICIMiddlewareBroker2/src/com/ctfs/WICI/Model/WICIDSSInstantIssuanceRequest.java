package com.ctfs.WICI.Model;

import java.io.Serializable;

public class WICIDSSInstantIssuanceRequest implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String externalReferenceId;
	private String admAppId;
	private String pan;
	private String firstName;
	private String lastName;
	private String unitNumber;
	private String addressline1;
	private String currentCity;
	private String currentProvince;
	private String currentPostalCode;
	private String currentCountry;
	private String preferedLanguage;
	private String enstreamConsent;
	private String msisdn;
	private String deviceType;
	private String transactionState;
	private String tabSerialID;
	
	/**
	 * @return the externalReferenceId
	 */
	public String getExternalReferenceId() {
		return externalReferenceId;
	}
	/**
	 * @param externalReferenceId the externalReferenceId to set
	 */
	public void setExternalReferenceId(String externalReferenceId) {
		this.externalReferenceId = externalReferenceId;
	}
	/**
	 * @return the admAppId
	 */
	public String getAdmAppId() {
		return admAppId;
	}
	/**
	 * @param admAppId the admAppId to set
	 */
	public void setAdmAppId(String admAppId) {
		this.admAppId = admAppId;
	}
	/**
	 * @return the pan
	 */
	public String getPan() {
		return pan;
	}
	/**
	 * @param pan the pan to set
	 */
	public void setPan(String pan) {
		this.pan = pan;
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
	 * @return the unitNumber
	 */
	public String getUnitNumber() {
		return unitNumber;
	}
	/**
	 * @param unitNumber the unitNumber to set
	 */
	public void setUnitNumber(String unitNumber) {
		this.unitNumber = unitNumber;
	}
	/**
	 * @return the addressline1
	 */
	public String getAddressline1() {
		return addressline1;
	}
	/**
	 * @param addressline1 the addressline1 to set
	 */
	public void setAddressline1(String addressline1) {
		this.addressline1 = addressline1;
	}
	/**
	 * @return the currentCity
	 */
	public String getCurrentCity() {
		return currentCity;
	}
	/**
	 * @param currentCity the currentCity to set
	 */
	public void setCurrentCity(String currentCity) {
		this.currentCity = currentCity;
	}
	/**
	 * @return the currentProvince
	 */
	public String getCurrentProvince() {
		return currentProvince;
	}
	/**
	 * @param currentProvince the currentProvince to set
	 */
	public void setCurrentProvince(String currentProvince) {
		this.currentProvince = currentProvince;
	}
	/**
	 * @return the currentPostalCode
	 */
	public String getCurrentPostalCode() {
		return currentPostalCode;
	}
	/**
	 * @param currentPostalCode the currentPostalCode to set
	 */
	public void setCurrentPostalCode(String currentPostalCode) {
		this.currentPostalCode = currentPostalCode;
	}
	/**
	 * @return the currentCountry
	 */
	public String getCurrentCountry() {
		return currentCountry;
	}
	/**
	 * @param currentCountry the currentCountry to set
	 */
	public void setCurrentCountry(String currentCountry) {
		this.currentCountry = currentCountry;
	}
	/**
	 * @return the preferedLanguage
	 */
	public String getPreferedLanguage() {
		return preferedLanguage;
	}
	/**
	 * @param preferedLanguage the preferedLanguage to set
	 */
	public void setPreferedLanguage(String preferedLanguage) {
		this.preferedLanguage = preferedLanguage;
	}
	/**
	 * @return the enstreamConsent
	 */
	public String getEnstreamConsent() {
		return enstreamConsent;
	}
	/**
	 * @param enstreamConsent the enstreamConsent to set
	 */
	public void setEnstreamConsent(String enstreamConsent) {
		this.enstreamConsent = enstreamConsent;
	}
	/**
	 * @return the msisdn
	 */
	public String getMsisdn() {
		return msisdn;
	}
	/**
	 * @param msisdn the msisdn to set
	 */
	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}
	/**
	 * @return the deviceType
	 */
	public String getDeviceType() {
		return deviceType;
	}
	/**
	 * @param deviceType the deviceType to set
	 */
	public void setDeviceType(String deviceType) {
		this.deviceType = deviceType;
	}
	/**
	 * @return the transactionState
	 */
	public String getTransactionState() {
		return transactionState;
	}
	/**
	 * @param transactionState the transactionState to set
	 */
	public void setTransactionState(String transactionState) {
		this.transactionState = transactionState;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "WICIDSSInstantIssuanceRequest [externalReferenceId="
				+ externalReferenceId + ", admAppId=" + admAppId + ", pan="
				+ pan + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", unitNumber=" + unitNumber + ", addressline1="
				+ addressline1 + ", currentCity=" + currentCity
				+ ", currentProvince=" + currentProvince
				+ ", currentPostalCode=" + currentPostalCode
				+ ", currentCountry=" + currentCountry + ", preferedLanguage="
				+ preferedLanguage + ", enstreamConsent=" + enstreamConsent
				+ ", msisdn=" + msisdn + ", deviceType=" + deviceType
				+ ", transactionState=" + transactionState + "]";
	}
	/**
	 * @return the tabSerialID
	 */
	public String getTabSerialID() {
		return tabSerialID;
	}
	/**
	 * @param tabSerialID the tabSerialID to set
	 */
	public void setTabSerialID(String tabSerialID) {
		this.tabSerialID = tabSerialID;
	}
	
}
