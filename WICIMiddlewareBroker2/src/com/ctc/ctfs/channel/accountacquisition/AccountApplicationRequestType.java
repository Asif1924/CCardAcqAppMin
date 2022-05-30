package com.ctc.ctfs.channel.accountacquisition;

import java.io.Serializable;

import javax.xml.datatype.XMLGregorianCalendar;

public class AccountApplicationRequestType implements Serializable {

	private static final long serialVersionUID = 1L;
	private String externalReferenceId;
	private String storeNumber;

	private String agentId;

	private String tabSerialId;

	private String channelIndicator;

	private String agencyPromoCode;

	private String acquistionStrategyCode;

	private String controlConfirmationFlag;

	private String costOfCreditFlag;

	private String cardMemberFlag;

	private String triangleRewardFlag;

	private byte[] controlConfirmationSignature;

	public byte[] getControlConfirmationSignature() {
		return controlConfirmationSignature;
	}

	public void setControlConfirmationSignature(byte[] controlConfirmationSignature) {
		this.controlConfirmationSignature = controlConfirmationSignature;
	}

	private String requestedProductType;

	private String loyaltyMembershipNumber;

	private String firstName;

	private String lastName;

	private String middleInitial;

	private String dateOfBirth;

	private String sin;

	private String idType;

	private String idNumber;

	private String idExpiryDate; // US4365
	public String getIdExpiryDate() {
		return idExpiryDate;
	}

	public void setIdExpiryDate(String idExpiryDate) {
		this.idExpiryDate = idExpiryDate;
	}

	private String placeOfIssue;

	private String DSAScore;

	private String treatmentCode;

	private String tmxProfileId;

	private String PIISource;

	private String preferedLanguage;
	private String applicantGender;

	private String currentAddressType;

	private String currentAddressLine1;

	private String currentAddressLine2;

	private String currentCity;

	private ProvinceType currentProvince;

	private String currentPostalCode;

	private String currentCountry;

	private String currentTelephoneNumber;

	private String currentCellPhoneNumber;
	private Integer yearsAtCurrentAddress;
	private Integer monthsAtCurrentAddress;

	private String currentEmailAddress;

	private String previousAddressLine1;

	private String previousAddressLine2;

	private String previousCity;
	private ProvinceStateType previousProvinceState;
	private String previousPostalCode;
	private CountryType previousCountry;

	private String employmentStatus;

	/**
	 * @return the employmentStatus
	 */
	public String getEmploymentStatus() {
		return employmentStatus;
	}

	/**
	 * @param employmentStatus the employmentStatus to set
	 */
	public void setEmploymentStatus(String employmentStatus) {
		this.employmentStatus = employmentStatus;
	}

	/**
	 * @return the jobDescription
	 */
	public String getJobDescription() {
		return jobDescription;
	}

	/**
	 * @param jobDescription the jobDescription to set
	 */
	public void setJobDescription(String jobDescription) {
		this.jobDescription = jobDescription;
	}

	/**
	 * @return the jobCategory
	 */
	public String getJobCategory() {
		return jobCategory;
	}

	/**
	 * @param jobCategory the jobCategory to set
	 */
	public void setJobCategory(String jobCategory) {
		this.jobCategory = jobCategory;
	}

	private String jobDescription;

	private String jobCategory;

	private String employerName;

	private String employerCity;
	private String employerProvince;
	private String employerCountry;

	private String employerTelephoneNumber;
	private Integer yearsAtEmployement;
	private Integer monthsAtEmployement;
	private Integer grossAnnualIncome;
	private Integer grossAnnualHouseholdIncome;
	private Integer monthlyRentMortgageAmount;

	private String bankCardFlag;

	private String bankLoanFlag;

	private String chequingAccountFlag;

	private String savingsAccountFlag;

	private String storeCardFlag;

	private String gasCardFlag;

	private String supp1FirstName;

	private String supp1LastName;

	private String supp1MiddleInitial;

	private String supp1Relationship;

	private String supp1DateOfBirth;
	private String supp1AddrSameAsPrimary;

	private String supp1AddressLine1;

	private String supp1AddressLine2;

	private String supp1City;
	private String supp1Province;
	private String supp1PostalCode;
	private String supp1Country;

	private String supp1TelephoneNumber;

	private String agreedToTermsFlag;

	private byte[] applicantSignature;

	public byte[] getApplicantSignature() {
		return applicantSignature;
	}

	public void setApplicantSignature(byte[] applicantSignature) {
		this.applicantSignature = applicantSignature;
	}

	private String signatureFlag;

	private String signatureMatchFlag;

	private String dateSigned;

	private String insuranceAgreedFlag;

	private String insuranceAgreedFlag_CP;

	private String insuranceAgreedFlag_IW;

	private String insuranceCode;
	private String insuranceSignatureFlag;
	private String insuranceSignatureFlag_CP;
	private String insuranceSignatureFlag_IW;

	private String insuranceDateSigned;
	private String insuranceSignature;
	private byte[] insuranceSignatureCP;
	public byte[] getInsuranceSignatureCP() {
		return insuranceSignatureCP;
	}

	public void setInsuranceSignatureCP(byte[] insuranceSignatureCP) {
		this.insuranceSignatureCP = insuranceSignatureCP;
	}

	public byte[] getInsuranceSignatureIW() {
		return insuranceSignatureIW;
	}

	public void setInsuranceSignatureIW(byte[] insuranceSignatureIW) {
		this.insuranceSignatureIW = insuranceSignatureIW;
	}

	private byte[] insuranceSignatureIW;

	private String affiliationCode;

	private String acquirerCode;

	private String tuSessionID;

	private String tuExamResult;

	private String emailConsentFlag;

	private String enstreamConsent;

	private String msisdn;

	private String pan;

	private String admAppId;

	private String unitNumber;

	private String streetName;

	private String streetNumber;

	private String transactionState;

	private String deviceType;

	private String estmt_consent;

	private String businessStoreNo;

	private String accountNumber;

	private String formSubmId;
	
	private String userEmployerId;
	public String getUserEmployerId() {
		return userEmployerId;
	}

	public void setUserEmployerId(String userEmployerId) {
		this.userEmployerId = userEmployerId;
	}

	public String getUserBanner() {
		return userBanner;
	}

	public void setUserBanner(String userBanner) {
		this.userBanner = userBanner;
	}

	private String userBanner;
	

	public String getEstmt_consent() {
		return estmt_consent;
	}

	public void setEstmt_consent(String estmt_consent) {
		this.estmt_consent = estmt_consent;
	}

	/**
	 * @return the msisdn
	 */
	public String getMsisdn() {
		return msisdn;
	}

	/**
	 * @param msisdn
	 *            the msisdn to set
	 */
	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}

	/**
	 * @return the enstreamConsent
	 */
	public String getEnstreamConsent() {
		return enstreamConsent;
	}

	public String getBusinessStoreNo() {
		return businessStoreNo;
	}

	public void setBusinessStoreNo(String businessStoreNo) {
		this.businessStoreNo = businessStoreNo;
	}

	/**
	 * @param enstreamConsent
	 *            the enstreamConsent to set
	 */
	public void setEnstreamConsent(String enstreamConsent) {
		this.enstreamConsent = enstreamConsent;
	}

	private Integer requestedCreditLimit; // US3270 Feb 17th, 2015

	/**
	 * Gets the value of the externalReferenceId property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getExternalReferenceId() {
		return externalReferenceId;
	}

	/**
	 * Sets the value of the externalReferenceId property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setExternalReferenceId(String value) {
		this.externalReferenceId = value;
	}

	/**
	 * Gets the value of the storeNumber property.
	 * 
	 */
	public String getStoreNumber() {
		return storeNumber;
	}

	/**
	 * Sets the value of the storeNumber property.
	 * 
	 */
	public void setStoreNumber(String value) {
		this.storeNumber = value;
	}

	/**
	 * Gets the value of the agentId property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getAgentId() {
		return agentId;
	}

	/**
	 * Sets the value of the agentId property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setAgentId(String value) {
		this.agentId = value;
	}

	/**
	 * Gets the value of the agentId property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getTabSerialId() {
		return tabSerialId;
	}

	/**
	 * Sets the value of the agentId property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setTabSerialId(String value) {
		this.tabSerialId = value;
	}

	/**
	 * Gets the value of the channelIndicator property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getChannelIndicator() {
		return channelIndicator;
	}

	/**
	 * Sets the value of the channelIndicator property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setChannelIndicator(String value) {
		this.channelIndicator = value;
	}

	/**
	 * Gets the value of the agencyPromoCode property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getAgencyPromoCode() {
		return agencyPromoCode;
	}

	/**
	 * Sets the value of the agencyPromoCode property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setAgencyPromoCode(String value) {
		this.agencyPromoCode = value;
	}

	/**
	 * Gets the value of the acquistionStrategyCode property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getAcquistionStrategyCode() {
		return acquistionStrategyCode;
	}

	/**
	 * Sets the value of the acquistionStrategyCode property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setAcquistionStrategyCode(String value) {
		this.acquistionStrategyCode = value;
	}

	public String getCostOfCreditFlag() {
		return costOfCreditFlag;
	}

	public void setCostOfCreditFlag(String costOfCreditFlag) {
		this.costOfCreditFlag = costOfCreditFlag;
	}

	public String getCardMemberFlag() {
		return cardMemberFlag;
	}

	public void setCardMemberFlag(String cardMemberFlag) {
		this.cardMemberFlag = cardMemberFlag;
	}

	public String getTriangleRewardFlag() {
		return triangleRewardFlag;
	}

	public void setTriangleRewardFlag(String triangleRewardFlag) {
		this.triangleRewardFlag = triangleRewardFlag;
	}

	public String getControlConfirmationFlag() {
		return controlConfirmationFlag;
	}

	public void setControlConfirmationFlag(String controlConfirmationFlag) {
		this.controlConfirmationFlag = controlConfirmationFlag;
	}

	
	/**
	 * Gets the value of the requestedProductType property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getRequestedProductType() {
		return requestedProductType;
	}

	/**
	 * Sets the value of the requestedProductType property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setRequestedProductType(String value) {
		this.requestedProductType = value;
	}

	/**
	 * Gets the value of the loyaltyMembershipNumber property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getLoyaltyMembershipNumber() {
		return loyaltyMembershipNumber;
	}

	/**
	 * Sets the value of the loyaltyMembershipNumber property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setLoyaltyMembershipNumber(String value) {
		this.loyaltyMembershipNumber = value;
	}

	/**
	 * Gets the value of the firstName property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * Sets the value of the firstName property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setFirstName(String value) {
		this.firstName = value;
	}

	/**
	 * Gets the value of the lastName property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * Sets the value of the lastName property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setLastName(String value) {
		this.lastName = value;
	}

	/**
	 * @return the unitNumber
	 */
	public String getUnitNumber() {
		return unitNumber;
	}

	/**
	 * @param unitNumber
	 *            the unitNumber to set
	 */
	public void setUnitNumber(String unitNumber) {
		this.unitNumber = unitNumber;
	}

	/**
	 * @return the streetName
	 */
	public String getStreetName() {
		return streetName;
	}

	/**
	 * @param streetName
	 *            the streetName to set
	 */
	public void setStreetName(String streetName) {
		this.streetName = streetName;
	}

	/**
	 * @return the streetNumber
	 */
	public String getStreetNumber() {
		return streetNumber;
	}

	/**
	 * @param streetNumber
	 *            the streetNumber to set
	 */
	public void setStreetNumber(String streetNumber) {
		this.streetNumber = streetNumber;
	}

	/**
	 * Gets the value of the middleInitial property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getMiddleInitial() {
		return middleInitial;
	}

	/**
	 * Sets the value of the middleInitial property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setMiddleInitial(String value) {
		this.middleInitial = value;
	}

	/**
	 * Gets the value of the dateOfBirth property.
	 * 
	 * @return possible object is {@link XMLGregorianCalendar }
	 * 
	 */
	public String getDateOfBirth() {
		return dateOfBirth;
	}

	/**
	 * Sets the value of the dateOfBirth property.
	 * 
	 * @param value
	 *            allowed object is {@link XMLGregorianCalendar }
	 * 
	 */
	public void setDateOfBirth(String value) {
		this.dateOfBirth = value;
	}

	/**
	 * Gets the value of the sin property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getSin() {
		return sin;
	}

	/**
	 * Sets the value of the sin property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setSin(String value) {
		this.sin = value;
	}

	/**
	 * Gets the value of the idType property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getIdType() {
		return idType;
	}

	/**
	 * Sets the value of the idType property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setIdType(String value) {
		this.idType = value;
	}

	/**
	 * Gets the value of the idNumber property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getIdNumber() {
		return idNumber;
	}

	/**
	 * Sets the value of the idNumber property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setIdNumber(String value) {
		this.idNumber = value;
	}

	/**
	 * Gets the value of the placeOfIssue property.
	 * 
	 * @return possible object is {@link PlaceOfIssueType }
	 * 
	 */
	public String getPlaceOfIssue() {
		return placeOfIssue;
	}

	/**
	 * Sets the value of the placeOfIssue property.
	 * 
	 * @param value
	 *            allowed object is {@link PlaceOfIssueType }
	 * 
	 */
	public void setPlaceOfIssue(String value) {
		this.placeOfIssue = value;
	}

	/**
	 * Gets the value of the preferedLanguage property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getPreferedLanguage() {
		return preferedLanguage;
	}

	/**
	 * Sets the value of the preferedLanguage property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setPreferedLanguage(String value) {
		this.preferedLanguage = value;
	}

	/**
	 * Gets the value of the applicantGender property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getApplicantGender() {
		return applicantGender;
	}

	/**
	 * Sets the value of the applicantGender property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setApplicantGender(String value) {
		this.applicantGender = value;
	}

	/**
	 * Gets the value of the currentAddressType property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getCurrentAddressType() {
		return currentAddressType;
	}

	/**
	 * Sets the value of the currentAddressType property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setCurrentAddressType(String value) {
		this.currentAddressType = value;
	}

	/**
	 * Gets the value of the currentAddressLine1 property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getCurrentAddressLine1() {
		return currentAddressLine1;
	}

	/**
	 * Sets the value of the currentAddressLine1 property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setCurrentAddressLine1(String value) {
		this.currentAddressLine1 = value;
	}

	/**
	 * Gets the value of the currentAddressLine2 property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getCurrentAddressLine2() {
		return currentAddressLine2;
	}

	/**
	 * Sets the value of the currentAddressLine2 property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setCurrentAddressLine2(String value) {
		this.currentAddressLine2 = value;
	}

	/**
	 * Gets the value of the currentCity property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getCurrentCity() {
		return currentCity;
	}

	/**
	 * Sets the value of the currentCity property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setCurrentCity(String value) {
		this.currentCity = value;
	}

	/**
	 * Gets the value of the currentProvince property.
	 * 
	 * @return possible object is {@link ProvinceType }
	 * 
	 */
	public ProvinceType getCurrentProvince() {
		return currentProvince;
	}

	/**
	 * Sets the value of the currentProvince property.
	 * 
	 * @param value
	 *            allowed object is {@link ProvinceType }
	 * 
	 */
	public void setCurrentProvince(ProvinceType value) {
		this.currentProvince = value;
	}

	/**
	 * Gets the value of the currentPostalCode property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getCurrentPostalCode() {
		return currentPostalCode;
	}

	/**
	 * Sets the value of the currentPostalCode property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setCurrentPostalCode(String value) {
		this.currentPostalCode = value;
	}

	/**
	 * @return the admAppId
	 */
	public String getAdmAppId() {
		return admAppId;
	}

	/**
	 * @param admAppId
	 *            the admAppId to set
	 */
	public void setAdmAppId(String admAppId) {
		this.admAppId = admAppId;
	}

	/**
	 * Gets the value of the currentCountry property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getCurrentCountry() {
		return currentCountry;
	}

	/**
	 * Sets the value of the currentCountry property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setCurrentCountry(String value) {
		this.currentCountry = value;
	}

	/**
	 * Gets the value of the currentTelephoneNumber property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getCurrentTelephoneNumber() {
		return currentTelephoneNumber;
	}

	/**
	 * Sets the value of the currentTelephoneNumber property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setCurrentTelephoneNumber(String value) {
		this.currentTelephoneNumber = value;
	}

	/**
	 * Gets the value of the currentCellPhoneNumber property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getCurrentCellPhoneNumber() {
		return currentCellPhoneNumber;
	}

	/**
	 * Sets the value of the currentCellPhoneNumber property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setCurrentCellPhoneNumber(String value) {
		this.currentCellPhoneNumber = value;
	}

	/**
	 * Gets the value of the yearsAtCurrentAddress property.
	 * 
	 * @return possible object is {@link Integer }
	 * 
	 */
	public Integer getYearsAtCurrentAddress() {
		return yearsAtCurrentAddress;
	}

	/**
	 * Sets the value of the yearsAtCurrentAddress property.
	 * 
	 * @param value
	 *            allowed object is {@link Integer }
	 * 
	 */
	public void setYearsAtCurrentAddress(Integer value) {
		this.yearsAtCurrentAddress = value;
	}

	/**
	 * Gets the value of the monthsAtCurrentAddress property.
	 * 
	 * @return possible object is {@link Integer }
	 * 
	 */
	public Integer getMonthsAtCurrentAddress() {
		return monthsAtCurrentAddress;
	}

	/**
	 * Sets the value of the monthsAtCurrentAddress property.
	 * 
	 * @param value
	 *            allowed object is {@link Integer }
	 * 
	 */
	public void setMonthsAtCurrentAddress(Integer value) {
		this.monthsAtCurrentAddress = value;
	}

	/**
	 * Gets the value of the currentEmailAddress property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getCurrentEmailAddress() {
		return currentEmailAddress;
	}

	/**
	 * Sets the value of the currentEmailAddress property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setCurrentEmailAddress(String value) {
		this.currentEmailAddress = value;
	}

	/**
	 * Gets the value of the previousAddressLine1 property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getPreviousAddressLine1() {
		return previousAddressLine1;
	}

	/**
	 * Sets the value of the previousAddressLine1 property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setPreviousAddressLine1(String value) {
		this.previousAddressLine1 = value;
	}

	/**
	 * Gets the value of the previousAddressLine2 property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getPreviousAddressLine2() {
		return previousAddressLine2;
	}

	/**
	 * Sets the value of the previousAddressLine2 property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setPreviousAddressLine2(String value) {
		this.previousAddressLine2 = value;
	}

	/**
	 * Gets the value of the previousCity property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getPreviousCity() {
		return previousCity;
	}

	public String getDSAScore() {
		return DSAScore;
	}

	public void setDSAScore(String dSAScore) {
		DSAScore = dSAScore;
	}

	public String getTreatmentCode() {
		return treatmentCode;
	}

	public void setTreatmentCode(String treatmentCode) {
		this.treatmentCode = treatmentCode;
	}

	public String getTmxProfileId() {
		return tmxProfileId;
	}

	public void setTmxProfileId(String tmxProfileId) {
		this.tmxProfileId = tmxProfileId;
	}

	public String getPIISource() {
		return PIISource;
	}

	public void setPIISource(String pIISource) {
		PIISource = pIISource;
	}

	/**
	 * Sets the value of the previousCity property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setPreviousCity(String value) {
		this.previousCity = value;
	}

	/**
	 * Gets the value of the previousProvinceState property.
	 * 
	 * @return possible object is {@link ProvinceStateType }
	 * 
	 */
	public ProvinceStateType getPreviousProvinceState() {
		return previousProvinceState;
	}

	/**
	 * Sets the value of the previousProvinceState property.
	 * 
	 * @param value
	 *            allowed object is {@link ProvinceStateType }
	 * 
	 */
	public void setPreviousProvinceState(ProvinceStateType value) {
		this.previousProvinceState = value;
	}

	/**
	 * Gets the value of the previousPostalCode property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getPreviousPostalCode() {
		return previousPostalCode;
	}

	/**
	 * Sets the value of the previousPostalCode property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setPreviousPostalCode(String value) {
		this.previousPostalCode = value;
	}

	/**
	 * Gets the value of the previousCountry property.
	 * 
	 * @return possible object is {@link CountryType }
	 * 
	 */
	public CountryType getPreviousCountry() {
		return previousCountry;
	}

	/**
	 * Sets the value of the previousCountry property.
	 * 
	 * @param value
	 *            allowed object is {@link CountryType }
	 * 
	 */
	public void setPreviousCountry(CountryType value) {
		this.previousCountry = value;
	}

	
	
	public String getEmployerName() {
		return employerName;
	}

	/**
	 * Sets the value of the employerName property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setEmployerName(String value) {
		this.employerName = value;
	}

	/**
	 * Gets the value of the employerCity property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getEmployerCity() {
		return employerCity;
	}

	/**
	 * Sets the value of the employerCity property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setEmployerCity(String value) {
		this.employerCity = value;
	}

	/**
	 * Gets the value of the employerProvince property.
	 * 
	 * @return possible object is {@link ProvinceStateType }
	 * 
	 */
	public String getEmployerProvince() {
		return employerProvince;
	}

	/**
	 * Sets the value of the employerProvince property.
	 * 
	 * @param value
	 *            allowed object is {@link ProvinceStateType }
	 * 
	 */
	public void setEmployerProvince(String value) {
		this.employerProvince = value;
	}

	/**
	 * Gets the value of the employerCountry property.
	 * 
	 * @return possible object is {@link CountryType }
	 * 
	 */
	public String getEmployerCountry() {
		return employerCountry;
	}

	/**
	 * Sets the value of the employerCountry property.
	 * 
	 * @param value
	 *            allowed object is {@link CountryType }
	 * 
	 */
	public void setEmployerCountry(String value) {
		this.employerCountry = value;
	}

	/**
	 * Gets the value of the employerTelephoneNumber property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getEmployerTelephoneNumber() {
		return employerTelephoneNumber;
	}

	/**
	 * Sets the value of the employerTelephoneNumber property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setEmployerTelephoneNumber(String value) {
		this.employerTelephoneNumber = value;
	}

	/**
	 * Gets the value of the yearsAtEmployement property.
	 * 
	 * @return possible object is {@link Integer }
	 * 
	 */
	public Integer getYearsAtEmployement() {
		return yearsAtEmployement;
	}

	/**
	 * Sets the value of the yearsAtEmployement property.
	 * 
	 * @param value
	 *            allowed object is {@link Integer }
	 * 
	 */
	public void setYearsAtEmployement(Integer value) {
		this.yearsAtEmployement = value;
	}

	/**
	 * Gets the value of the monthsAtEmployement property.
	 * 
	 * @return possible object is {@link Integer }
	 * 
	 */
	public Integer getMonthsAtEmployement() {
		return monthsAtEmployement;
	}

	/**
	 * Sets the value of the monthsAtEmployement property.
	 * 
	 * @param value
	 *            allowed object is {@link Integer }
	 * 
	 */
	public void setMonthsAtEmployement(Integer value) {
		this.monthsAtEmployement = value;
	}

	/**
	 * Gets the value of the grossAnnualIncome property.
	 * 
	 * @return possible object is {@link Integer }
	 * 
	 */
	public Integer getGrossAnnualIncome() {
		return grossAnnualIncome;
	}

	/**
	 * Sets the value of the grossAnnualIncome property.
	 * 
	 * @param value
	 *            allowed object is {@link Integer }
	 * 
	 */
	public void setGrossAnnualIncome(Integer value) {
		this.grossAnnualIncome = value;
	}

	/**
	 * Gets the value of the grossAnnualHouseholdIncome property.
	 * 
	 * @return possible object is {@link Integer }
	 * 
	 */
	public Integer getGrossAnnualHouseholdIncome() {
		return grossAnnualHouseholdIncome;
	}

	/**
	 * Sets the value of the grossAnnualHouseholdIncome property.
	 * 
	 * @param value
	 *            allowed object is {@link Integer }
	 * 
	 */
	public void setGrossAnnualHouseholdIncome(Integer value) {
		this.grossAnnualHouseholdIncome = value;
	}

	/**
	 * Gets the value of the monthlyRentMortgageAmount property.
	 * 
	 * @return possible object is {@link Integer }
	 * 
	 */
	public Integer getMonthlyRentMortgageAmount() {
		return monthlyRentMortgageAmount;
	}

	/**
	 * Sets the value of the monthlyRentMortgageAmount property.
	 * 
	 * @param value
	 *            allowed object is {@link Integer }
	 * 
	 */
	public void setMonthlyRentMortgageAmount(Integer value) {
		this.monthlyRentMortgageAmount = value;
	}

	/**
	 * Gets the value of the bankCardFlag property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getBankCardFlag() {
		return bankCardFlag;
	}

	/**
	 * Sets the value of the bankCardFlag property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setBankCardFlag(String value) {
		this.bankCardFlag = value;
	}

	/**
	 * Gets the value of the bankLoanFlag property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getBankLoanFlag() {
		return bankLoanFlag;
	}

	/**
	 * Sets the value of the bankLoanFlag property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setBankLoanFlag(String value) {
		this.bankLoanFlag = value;
	}

	/**
	 * Gets the value of the chequingAccountFlag property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getChequingAccountFlag() {
		return chequingAccountFlag;
	}

	/**
	 * Sets the value of the chequingAccountFlag property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setChequingAccountFlag(String value) {
		this.chequingAccountFlag = value;
	}

	/**
	 * Gets the value of the savingsAccountFlag property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getSavingsAccountFlag() {
		return savingsAccountFlag;
	}

	/**
	 * Sets the value of the savingsAccountFlag property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setSavingsAccountFlag(String value) {
		this.savingsAccountFlag = value;
	}

	/**
	 * Gets the value of the storeCardFlag property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getStoreCardFlag() {
		return storeCardFlag;
	}

	/**
	 * Sets the value of the storeCardFlag property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setStoreCardFlag(String value) {
		this.storeCardFlag = value;
	}

	/**
	 * Gets the value of the gasCardFlag property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getGasCardFlag() {
		return gasCardFlag;
	}

	/**
	 * Sets the value of the gasCardFlag property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setGasCardFlag(String value) {
		this.gasCardFlag = value;
	}

	/**
	 * Gets the value of the supp1FirstName property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getSupp1FirstName() {
		return supp1FirstName;
	}

	/**
	 * Sets the value of the supp1FirstName property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setSupp1FirstName(String value) {
		this.supp1FirstName = value;
	}

	/**
	 * Gets the value of the supp1LastName property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getSupp1LastName() {
		return supp1LastName;
	}

	/**
	 * Sets the value of the supp1LastName property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setSupp1LastName(String value) {
		this.supp1LastName = value;
	}

	/**
	 * Gets the value of the supp1MiddleInitial property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getSupp1MiddleInitial() {
		return supp1MiddleInitial;
	}

	/**
	 * Sets the value of the supp1MiddleInitial property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setSupp1MiddleInitial(String value) {
		this.supp1MiddleInitial = value;
	}

	/**
	 * Gets the value of the supp1Relationship property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getSupp1Relationship() {
		return supp1Relationship;
	}

	/**
	 * Sets the value of the supp1Relationship property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setSupp1Relationship(String value) {
		this.supp1Relationship = value;
	}

	/**
	 * Gets the value of the supp1DateOfBirth property.
	 * 
	 * @return possible object is {@link XMLGregorianCalendar }
	 * 
	 */
	public String getSupp1DateOfBirth() {
		return supp1DateOfBirth;
	}

	/**
	 * Sets the value of the supp1DateOfBirth property.
	 * 
	 * @param value
	 *            allowed object is {@link XMLGregorianCalendar }
	 * 
	 */
	public void setSupp1DateOfBirth(String value) {
		this.supp1DateOfBirth = value;
	}

	/**
	 * Gets the value of the supp1AddrSameAsPrimary property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getSupp1AddrSameAsPrimary() {
		return supp1AddrSameAsPrimary;
	}

	/**
	 * Sets the value of the supp1AddrSameAsPrimary property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setSupp1AddrSameAsPrimary(String value) {
		this.supp1AddrSameAsPrimary = value;
	}

	/**
	 * Gets the value of the supp1AddressLine1 property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getSupp1AddressLine1() {
		return supp1AddressLine1;
	}

	/**
	 * Sets the value of the supp1AddressLine1 property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setSupp1AddressLine1(String value) {
		this.supp1AddressLine1 = value;
	}

	/**
	 * Gets the value of the supp1AddressLine2 property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getSupp1AddressLine2() {
		return supp1AddressLine2;
	}

	/**
	 * Sets the value of the supp1AddressLine2 property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setSupp1AddressLine2(String value) {
		this.supp1AddressLine2 = value;
	}

	/**
	 * Gets the value of the supp1City property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getSupp1City() {
		return supp1City;
	}

	/**
	 * Sets the value of the supp1City property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setSupp1City(String value) {
		this.supp1City = value;
	}

	/**
	 * Gets the value of the supp1Province property.
	 * 
	 * @return possible object is {@link ProvinceStateType }
	 * 
	 */
	public String getSupp1Province() {
		return supp1Province;
	}

	/**
	 * Sets the value of the supp1Province property.
	 * 
	 * @param value
	 *            allowed object is {@link ProvinceStateType }
	 * 
	 */
	public void setSupp1Province(String value) {
		this.supp1Province = value;
	}

	/**
	 * Gets the value of the supp1PostalCode property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getSupp1PostalCode() {
		return supp1PostalCode;
	}

	/**
	 * Sets the value of the supp1PostalCode property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setSupp1PostalCode(String value) {
		this.supp1PostalCode = value;
	}

	/**
	 * Gets the value of the supp1Country property.
	 * 
	 * @return possible object is {@link CountryType }
	 * 
	 */
	public String getSupp1Country() {
		return supp1Country;
	}

	/**
	 * Sets the value of the supp1Country property.
	 * 
	 * @param value
	 *            allowed object is {@link CountryType }
	 * 
	 */
	public void setSupp1Country(String value) {
		this.supp1Country = value;
	}

	/**
	 * Gets the value of the supp1TelephoneNumber property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getSupp1TelephoneNumber() {
		return supp1TelephoneNumber;
	}

	/**
	 * Sets the value of the supp1TelephoneNumber property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setSupp1TelephoneNumber(String value) {
		this.supp1TelephoneNumber = value;
	}

	/**
	 * Gets the value of the agreedToTermsFlag property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getAgreedToTermsFlag() {
		return agreedToTermsFlag;
	}

	/**
	 * Sets the value of the agreedToTermsFlag property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setAgreedToTermsFlag(String value) {
		this.agreedToTermsFlag = value;
	}

	public String getSignatureFlag() {
		return signatureFlag;
	}

	/**
	 * Sets the value of the signatureFlag property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setSignatureFlag(String value) {
		this.signatureFlag = value;
	}

	/**
	 * Gets the value of the signatureMatchFlag property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getSignatureMatchFlag() {
		return signatureMatchFlag;
	}

	/**
	 * Sets the value of the signatureMatchFlag property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setSignatureMatchFlag(String value) {
		this.signatureMatchFlag = value;
	}

	/**
	 * Gets the value of the dateSigned property.
	 * 
	 * @return possible object is {@link XMLGregorianCalendar }
	 * 
	 */
	public String getDateSigned() {
		return dateSigned;
	}

	/**
	 * Sets the value of the dateSigned property.
	 * 
	 * @param value
	 *            allowed object is {@link XMLGregorianCalendar }
	 * 
	 */
	public void setDateSigned(String value) {
		this.dateSigned = value;
	}

	/**
	 * Gets the value of the insuranceAgreedFlag property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getInsuranceAgreedFlag() {
		return insuranceAgreedFlag;
	}

	/**
	 * Sets the value of the insuranceAgreedFlag property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setInsuranceAgreedFlag(String value) {
		this.insuranceAgreedFlag = value;
	}

	public String getInsuranceAgreedFlag_CP() {
		return insuranceAgreedFlag_CP;
	}

	public void setInsuranceAgreedFlag_CP(String insuranceAgreedFlag_CP) {
		this.insuranceAgreedFlag_CP = insuranceAgreedFlag_CP;
	}

	public String getInsuranceAgreedFlag_IW() {
		return insuranceAgreedFlag_IW;
	}

	public void setInsuranceAgreedFlag_IW(String insuranceAgreedFlag_IW) {
		this.insuranceAgreedFlag_IW = insuranceAgreedFlag_IW;
	}

	/**
	 * Gets the value of the insuranceCode property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getInsuranceCode() {
		return insuranceCode;
	}

	/**
	 * Sets the value of the insuranceCode property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setInsuranceCode(String value) {
		this.insuranceCode = value;
	}

	/**
	 * Gets the value of the insuranceSignatureFlag property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getInsuranceSignatureFlag() {
		return insuranceSignatureFlag;
	}

	/**
	 * Sets the value of the insuranceSignatureFlag property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setInsuranceSignatureFlag(String value) {
		this.insuranceSignatureFlag = value;
	}

	public String getInsuranceSignatureFlag_CP() {
		return insuranceSignatureFlag_CP;
	}

	public void setInsuranceSignatureFlag_CP(String insuranceSignatureFlag_CP) {
		this.insuranceSignatureFlag_CP = insuranceSignatureFlag_CP;
	}

	public String getInsuranceSignatureFlag_IW() {
		return insuranceSignatureFlag_IW;
	}

	public void setInsuranceSignatureFlag_IW(String insuranceSignatureFlag_IW) {
		this.insuranceSignatureFlag_IW = insuranceSignatureFlag_IW;
	}

	/**
	 * Gets the value of the insuranceDateSigned property.
	 * 
	 * @return possible object is {@link XMLGregorianCalendar }
	 * 
	 */
	public String getInsuranceDateSigned() {
		return insuranceDateSigned;
	}

	/**
	 * Sets the value of the insuranceDateSigned property.
	 * 
	 * @param value
	 *            allowed object is {@link XMLGregorianCalendar }
	 * 
	 */
	public void setInsuranceDateSigned(String value) {
		this.insuranceDateSigned = value;
	}

	/**
	 * Gets the value of the insuranceSignature property.
	 * 
	 * @return possible object is byte[]
	 */
	public String getInsuranceSignature() {
		return insuranceSignature;
	}

	/**
	 * Sets the value of the insuranceSignature property.
	 * 
	 * @param value
	 *            allowed object is byte[]
	 */

	

	/**
	 * Gets the value of the affiliationCode property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getAffiliationCode() {
		return affiliationCode;
	}

	/**
	 * Sets the value of the affiliationCode property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setAffiliationCode(String value) {
		this.affiliationCode = value;
	}

	/**
	 * Gets the value of the acquirerCode property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getAcquirerCode() {
		return acquirerCode;
	}

	/**
	 * Sets the value of the acquirerCode property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setAcquirerCode(String value) {
		this.acquirerCode = value;
	}

	/**
	 * Gets the value of the tuSessionID property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getTUSessionID() {
		return tuSessionID;
	}

	/**
	 * Sets the value of the tuSessionID property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setTUSessionID(String value) {
		this.tuSessionID = value;
	}

	/**
	 * Gets the value of the tuExamResult property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getTUExamResult() {
		return tuExamResult;
	}

	/**
	 * Sets the value of the tuExamResult property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setTUExamResult(String value) {
		this.tuExamResult = value;
	}

	/**
	 * Gets the value of the emailConsentFlag property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getEmailConsentFlag() {
		return emailConsentFlag;
	}

	/**
	 * Sets the value of the emailConsentFlag property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setEmailConsentFlag(String value) {
		this.emailConsentFlag = value;
	}

	// US3270 Feb 17th, 2015

	/**
	 * Gets the value of the requestedCreditLimit property.
	 * 
	 * @return possible object is {@link Integer }
	 * 
	 */
	public Integer getRequestedCreditLimit() {
		return requestedCreditLimit;
	}

	/**
	 * Sets the value of the requestedCreditLimit property.
	 * 
	 * @param value
	 *            allowed object is {@link Integer }
	 * 
	 */
	public void setRequestedCreditLimit(Integer value) {
		this.requestedCreditLimit = value;
	}

	/**
	 * @return the pan
	 */
	public String getPan() {
		return pan;
	}

	/**
	 * @param pan
	 *            the pan to set
	 */
	public void setPan(String pan) {
		this.pan = pan;
	}

	/**
	 * @return the transactionState
	 */
	public String getTransactionState() {
		return transactionState;
	}

	/**
	 * @param transactionState
	 *            the transactionState to set
	 */
	public void setTransactionState(String transactionState) {
		this.transactionState = transactionState;
	}

	/**
	 * @return the deviceType
	 */
	public String getDeviceType() {
		return deviceType;
	}

	/**
	 * @param deviceType
	 *            the deviceType to set
	 */
	public void setDeviceType(String deviceType) {
		this.deviceType = deviceType;
	}
	
	

	public String getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	public String getFormSubmId() {
		return formSubmId;
	}

	public void setFormSubmId(String formSubmId) {
		this.formSubmId = formSubmId;
	}

	@Override
	public String toString() {
		return "AccountApplicationRequestType [" + "externalReferenceId="
				+ externalReferenceId + ", storeNumber=" + storeNumber
				+ ", agentId=" + agentId + ", tabSerialId=" + tabSerialId
				+ ", channelIndicator=" + channelIndicator
				+ ", agencyPromoCode=" + agencyPromoCode
				+ ", acquistionStrategyCode=" + acquistionStrategyCode
				+ ", controlConfirmationFlag=" + controlConfirmationFlag
				+ ", controlConfirmationSignature="
				+ controlConfirmationSignature + ", costOfCreditFlag="
				+ costOfCreditFlag + ", cardMemberFlag=" + cardMemberFlag
				+ ", triangleRewardFlag=" + triangleRewardFlag
				+ ", requestedProductType=" + requestedProductType
				+ ", loyaltyMembershipNumber=" + loyaltyMembershipNumber
				+ ", firstName=" + firstName + ", lastName=" + lastName
				+ ", middleInitial=" + middleInitial 
				+ ", dateOfBirth=" + dateOfBirth 
				+ ", sin=" + sin + ", idType=" + idType
				+ ", idNumber=" + idNumber + ", idExpiryDate=" + idExpiryDate
				+ ", placeOfIssue=" + placeOfIssue + ", preferedLanguage="
				+ preferedLanguage + ", treatmentCode=" + treatmentCode
				+ ", DSAScore=" + DSAScore + ", tmxProfileId=" + tmxProfileId
				+ ", PIISource=" + PIISource + ", applicantGender="
				+ applicantGender + ", currentAddressType="
				+ currentAddressType + ", currentAddressLine1="
				+ currentAddressLine1 + ", currentAddressLine2="
				+ currentAddressLine2 + ", currentCity=" + currentCity
				+ ", currentProvince=" + currentProvince
				+ ", currentPostalCode=" + currentPostalCode
				+ ", currentCountry=" + currentCountry
				+ ", currentTelephoneNumber=" + currentTelephoneNumber
				+ ", currentCellPhoneNumber=" + currentCellPhoneNumber
				+ ", yearsAtCurrentAddress=" + yearsAtCurrentAddress
				+ ", monthsAtCurrentAddress=" + monthsAtCurrentAddress
				+ ", currentEmailAddress=" + currentEmailAddress
				+ ", previousAddressLine1=" + previousAddressLine1
				+ ", previousAddressLine2=" + previousAddressLine2
				+ ", previousCity=" + previousCity + ", previousProvinceState=" + previousProvinceState 
				+ ", previousPostalCode=" + previousPostalCode + ", previousCountry=" + previousCountry
				+ ", employmentStatus=" + employmentStatus 
				+ ", jobDescription=" + jobDescription + ", jobCategory=" + jobCategory
				+ ", employerName=" + employerName + ", employerCity=" + employerCity 
				+ ", employerProvince=" + employerProvince
				+ ", employerCountry=" + employerCountry
				+ ", employerTelephoneNumber=" + employerTelephoneNumber
				+ ", yearsAtEmployement=" + yearsAtEmployement
				+ ", monthsAtEmployement=" + monthsAtEmployement
				+ ", grossAnnualIncome=" + grossAnnualIncome
				+ ", grossAnnualHouseholdIncome=" + grossAnnualHouseholdIncome
				+ ", monthlyRentMortgageAmount=" + monthlyRentMortgageAmount
				+ ", bankCardFlag=" + bankCardFlag + ", bankLoanFlag=" + bankLoanFlag 
				+ ", chequingAccountFlag=" + chequingAccountFlag
				+ ", savingsAccountFlag=" + savingsAccountFlag
				+ ", storeCardFlag=" + storeCardFlag + ", gasCardFlag=" + gasCardFlag 
				+ ", supp1FirstName=" + supp1FirstName
				+ ", supp1LastName=" + supp1LastName + ", supp1MiddleInitial=" + supp1MiddleInitial 
				+ ", supp1Relationship=" + supp1Relationship + ", supp1DateOfBirth=" + supp1DateOfBirth
				+ ", supp1AddrSameAsPrimary=" + supp1AddrSameAsPrimary
				+ ", supp1AddressLine1=" + supp1AddressLine1
				+ ", supp1AddressLine2=" + supp1AddressLine2 + ", supp1City="
				+ supp1City + ", supp1Province=" + supp1Province
				+ ", supp1PostalCode=" + supp1PostalCode + ", supp1Country="
				+ supp1Country + ", supp1TelephoneNumber="
				+ supp1TelephoneNumber + ", agreedToTermsFlag="
				+ agreedToTermsFlag + ", applicantSignature="
				+ applicantSignature + ", signatureFlag=" + signatureFlag
				+ ", signatureMatchFlag=" + signatureMatchFlag
				+ ", dateSigned=" + dateSigned + ", insuranceAgreedFlag="
				+ insuranceAgreedFlag + ", insuranceAgreedFlag_CP="
				+ insuranceAgreedFlag_CP + ", insuranceAgreedFlag_IW="
				+ insuranceAgreedFlag_IW + ", insuranceCode=" + insuranceCode
				+ ", insuranceSignatureFlag=" + insuranceSignatureFlag
				+ ", insuranceSignatureFlag_CP=" + insuranceSignatureFlag_CP
				+ ", insuranceSignatureFlag_IW=" + insuranceSignatureFlag_IW
				+ ", insuranceDateSigned=" + insuranceDateSigned
				+ ", insuranceSignature=" + insuranceSignature
				+ ", insuranceSignatureCP=" + insuranceSignatureCP
				+ ", insuranceSignatureIW=" + insuranceSignatureIW
				+ ", affiliationCode=" + affiliationCode + ", acquirerCode="
				+ acquirerCode + ", tuSessionID=" + tuSessionID
				+ ", tuExamResult=" + tuExamResult + ", emailConsentFlag="
				+ emailConsentFlag + ", enstreamConsent=" + enstreamConsent
				+ ", msisdn=" + msisdn + ", pan=" + pan + ", admAppId="
				+ admAppId + ", unitNumber=" + unitNumber + ", streetName="
				+ streetName + ", streetNumber=" + streetNumber
				+ ", transactionState=" + transactionState + ", deviceType="
				+ deviceType + ", estmt_consent=" + estmt_consent
				+ ", businessStoreNo=" + businessStoreNo + ", accountNumber="
				+ accountNumber + ", formSubmId=" + formSubmId
				+ ", requestedCreditLimit=" + requestedCreditLimit + "]";
	}

}
