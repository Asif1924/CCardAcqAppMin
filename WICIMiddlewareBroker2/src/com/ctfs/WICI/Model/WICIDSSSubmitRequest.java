package com.ctfs.WICI.Model;

import java.io.Serializable;

public class WICIDSSSubmitRequest implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String externalReferenceId;
	private String storeNumber;
	private String agentId;
	private String tabSerialId;
	// channelIndicator
	private String channel;
	private String pcID;
	private String acquistionStrategyCode;
	private String controlConfirmationFlag;
	private String costOfCreditFlag;
	private String cardMemberFlag;
	private String triangleRewardFlag;
	private byte[] controlConfirmationSignature;
	private String requestedProductType;
	private String loyaltyMembershipNumber;
	private String firstName;
	private String lastName;
	private String middleInitial;
	private String dateOfBirth;
	private String sin;
	private String idType;
	private String idNumber;
	private String idExpiryDate;
	private String placeOfIssue;
	private String DSAScore;
	private String treatmentCode;
	private String tmxProfileId;
	private String PIISource;
	private String preferedLanguage;
	private String title;
	private String house;
	private String addressline1;
	private String addressline2;
	private String city;

	private String province;
	private String postalcode;
	private String homePhone;
	private String cellPhone;
	private Integer yearsAtCurrentAddress;
	private Integer monthsAtCurrentAddress;
	private String email;
	private String addressline1_prev;
	private String addressline2_prev;
	private String city_prev;
	private String province_prev;
	private String postalcode_prev;
	private String previousCountry;
	private String employmentStatus;
	private String jobTitle;
	private String jobCategory;
	private String employerName;

	private String employerCity;
	// not yet used TBD
	private String employerProvince;
	private String employerCountry;
	private String employerTelephoneNumber;
	private Integer yearsAtEmployement;
	private Integer monthsAtEmployement;
	private Integer grossIncome;
	private Integer grossHouseholdIncome;
	private Integer housingpayment;
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
	private byte[] insuranceSignature;
	private byte[] insuranceSignatureCP;
	private byte[] insuranceSignatureIW;
	private String affiliationCode;
	private String acquirerCode;
	private String tuSessionID;
	private String tuExamResult;

	private String receiveEmail;
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
	 * @return the storeNumber
	 */
	public String getStoreNumber() {
		return storeNumber;
	}
	/**
	 * @param storeNumber the storeNumber to set
	 */
	public void setStoreNumber(String storeNumber) {
		this.storeNumber = storeNumber;
	}
	/**
	 * @return the agentId
	 */
	public String getAgentId() {
		return agentId;
	}
	/**
	 * @param agentId the agentId to set
	 */
	public void setAgentId(String agentId) {
		this.agentId = agentId;
	}
	/**
	 * @return the tabSerialId
	 */
	public String getTabSerialId() {
		return tabSerialId;
	}
	/**
	 * @param tabSerialId the tabSerialId to set
	 */
	public void setTabSerialId(String tabSerialId) {
		this.tabSerialId = tabSerialId;
	}
	/**
	 * @return the channel
	 */
	public String getChannel() {
		return channel;
	}
	/**
	 * @param channel the channel to set
	 */
	public void setChannel(String channel) {
		this.channel = channel;
	}
	/**
	 * @return the pcID
	 */
	public String getPcID() {
		return pcID;
	}
	/**
	 * @param pcID the pcID to set
	 */
	public void setPcID(String pcID) {
		this.pcID = pcID;
	}
	/**
	 * @return the acquistionStrategyCode
	 */
	public String getAcquistionStrategyCode() {
		return acquistionStrategyCode;
	}
	/**
	 * @param acquistionStrategyCode the acquistionStrategyCode to set
	 */
	public void setAcquistionStrategyCode(String acquistionStrategyCode) {
		this.acquistionStrategyCode = acquistionStrategyCode;
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
	 * @return the costOfCreditFlag
	 */
	public String getCostOfCreditFlag() {
		return costOfCreditFlag;
	}
	/**
	 * @param costOfCreditFlag the costOfCreditFlag to set
	 */
	public void setCostOfCreditFlag(String costOfCreditFlag) {
		this.costOfCreditFlag = costOfCreditFlag;
	}
	/**
	 * @return the cardMemberFlag
	 */
	public String getCardMemberFlag() {
		return cardMemberFlag;
	}
	/**
	 * @param cardMemberFlag the cardMemberFlag to set
	 */
	public void setCardMemberFlag(String cardMemberFlag) {
		this.cardMemberFlag = cardMemberFlag;
	}
	/**
	 * @return the triangleRewardFlag
	 */
	public String getTriangleRewardFlag() {
		return triangleRewardFlag;
	}
	/**
	 * @param triangleRewardFlag the triangleRewardFlag to set
	 */
	public void setTriangleRewardFlag(String triangleRewardFlag) {
		this.triangleRewardFlag = triangleRewardFlag;
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
	 * @return the requestedProductType
	 */
	public String getRequestedProductType() {
		return requestedProductType;
	}
	/**
	 * @param requestedProductType the requestedProductType to set
	 */
	public void setRequestedProductType(String requestedProductType) {
		this.requestedProductType = requestedProductType;
	}
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
	 * @return the middleInitial
	 */
	public String getMiddleInitial() {
		return middleInitial;
	}
	/**
	 * @param middleInitial the middleInitial to set
	 */
	public void setMiddleInitial(String middleInitial) {
		this.middleInitial = middleInitial;
	}
	/**
	 * @return the dateOfBirth
	 */
	public String getDateOfBirth() {
		return dateOfBirth;
	}
	/**
	 * @param dateOfBirth the dateOfBirth to set
	 */
	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	/**
	 * @return the sin
	 */
	public String getSin() {
		return sin;
	}
	/**
	 * @param sin the sin to set
	 */
	public void setSin(String sin) {
		this.sin = sin;
	}
	/**
	 * @return the idType
	 */
	public String getIdType() {
		return idType;
	}
	/**
	 * @param idType the idType to set
	 */
	public void setIdType(String idType) {
		this.idType = idType;
	}
	/**
	 * @return the idNumber
	 */
	public String getIdNumber() {
		return idNumber;
	}
	/**
	 * @param idNumber the idNumber to set
	 */
	public void setIdNumber(String idNumber) {
		this.idNumber = idNumber;
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
	 * @return the placeOfIssue
	 */
	public String getPlaceOfIssue() {
		return placeOfIssue;
	}
	/**
	 * @param placeOfIssue the placeOfIssue to set
	 */
	public void setPlaceOfIssue(String placeOfIssue) {
		this.placeOfIssue = placeOfIssue;
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
	 * @return the tmxProfileId
	 */
	public String getTmxProfileId() {
		return tmxProfileId;
	}
	/**
	 * @param tmxProfileId the tmxProfileId to set
	 */
	public void setTmxProfileId(String tmxProfileId) {
		this.tmxProfileId = tmxProfileId;
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
	 * @return the house
	 */
	public String getHouse() {
		return house;
	}
	/**
	 * @param house the house to set
	 */
	public void setHouse(String house) {
		this.house = house;
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
	 * @return the addressline2
	 */
	public String getAddressline2() {
		return addressline2;
	}
	/**
	 * @param addressline2 the addressline2 to set
	 */
	public void setAddressline2(String addressline2) {
		this.addressline2 = addressline2;
	}
	/**
	 * @return the city
	 */
	public String getCity() {
		return city;
	}
	/**
	 * @param city the city to set
	 */
	public void setCity(String city) {
		this.city = city;
	}
	/**
	 * @return the province
	 */
	public String getProvince() {
		return province;
	}
	/**
	 * @param province the province to set
	 */
	public void setProvince(String province) {
		this.province = province;
	}
	/**
	 * @return the postalcode
	 */
	public String getPostalcode() {
		return postalcode;
	}
	/**
	 * @param postalcode the postalcode to set
	 */
	public void setPostalcode(String postalcode) {
		this.postalcode = postalcode;
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
	 * @return the yearsAtCurrentAddress
	 */
	public Integer getYearsAtCurrentAddress() {
		return yearsAtCurrentAddress;
	}
	/**
	 * @param yearsAtCurrentAddress the yearsAtCurrentAddress to set
	 */
	public void setYearsAtCurrentAddress(Integer yearsAtCurrentAddress) {
		this.yearsAtCurrentAddress = yearsAtCurrentAddress;
	}
	/**
	 * @return the monthsAtCurrentAddress
	 */
	public Integer getMonthsAtCurrentAddress() {
		return monthsAtCurrentAddress;
	}
	/**
	 * @param monthsAtCurrentAddress the monthsAtCurrentAddress to set
	 */
	public void setMonthsAtCurrentAddress(Integer monthsAtCurrentAddress) {
		this.monthsAtCurrentAddress = monthsAtCurrentAddress;
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
	 * @return the addressline1_prev
	 */
	public String getAddressline1_prev() {
		return addressline1_prev;
	}
	/**
	 * @param addressline1_prev the addressline1_prev to set
	 */
	public void setAddressline1_prev(String addressline1_prev) {
		this.addressline1_prev = addressline1_prev;
	}
	/**
	 * @return the addressline2_prev
	 */
	public String getAddressline2_prev() {
		return addressline2_prev;
	}
	/**
	 * @param addressline2_prev the addressline2_prev to set
	 */
	public void setAddressline2_prev(String addressline2_prev) {
		this.addressline2_prev = addressline2_prev;
	}
	/**
	 * @return the city_prev
	 */
	public String getCity_prev() {
		return city_prev;
	}
	/**
	 * @param city_prev the city_prev to set
	 */
	public void setCity_prev(String city_prev) {
		this.city_prev = city_prev;
	}
	/**
	 * @return the province_prev
	 */
	public String getProvince_prev() {
		return province_prev;
	}
	/**
	 * @param province_prev the province_prev to set
	 */
	public void setProvince_prev(String province_prev) {
		this.province_prev = province_prev;
	}
	/**
	 * @return the postalcode_prev
	 */
	public String getPostalcode_prev() {
		return postalcode_prev;
	}
	/**
	 * @param postalcode_prev the postalcode_prev to set
	 */
	public void setPostalcode_prev(String postalcode_prev) {
		this.postalcode_prev = postalcode_prev;
	}
	/**
	 * @return the previousCountry
	 */
	public String getPreviousCountry() {
		return previousCountry;
	}
	/**
	 * @param previousCountry the previousCountry to set
	 */
	public void setPreviousCountry(String previousCountry) {
		this.previousCountry = previousCountry;
	}
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
	 * @return the jobTitle
	 */
	public String getJobTitle() {
		return jobTitle;
	}
	/**
	 * @param jobTitle the jobTitle to set
	 */
	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
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
	/**
	 * @return the employerName
	 */
	public String getEmployerName() {
		return employerName;
	}
	/**
	 * @param employerName the employerName to set
	 */
	public void setEmployerName(String employerName) {
		this.employerName = employerName;
	}
	/**
	 * @return the employerCity
	 */
	public String getEmployerCity() {
		return employerCity;
	}
	/**
	 * @param employerCity the employerCity to set
	 */
	public void setEmployerCity(String employerCity) {
		this.employerCity = employerCity;
	}
	/**
	 * @return the employerProvince
	 */
	public String getEmployerProvince() {
		return employerProvince;
	}
	/**
	 * @param employerProvince the employerProvince to set
	 */
	public void setEmployerProvince(String employerProvince) {
		this.employerProvince = employerProvince;
	}
	/**
	 * @return the employerCountry
	 */
	public String getEmployerCountry() {
		return employerCountry;
	}
	/**
	 * @param employerCountry the employerCountry to set
	 */
	public void setEmployerCountry(String employerCountry) {
		this.employerCountry = employerCountry;
	}
	/**
	 * @return the employerTelephoneNumber
	 */
	public String getEmployerTelephoneNumber() {
		return employerTelephoneNumber;
	}
	/**
	 * @param employerTelephoneNumber the employerTelephoneNumber to set
	 */
	public void setEmployerTelephoneNumber(String employerTelephoneNumber) {
		this.employerTelephoneNumber = employerTelephoneNumber;
	}
	/**
	 * @return the yearsAtEmployement
	 */
	public Integer getYearsAtEmployement() {
		return yearsAtEmployement;
	}
	/**
	 * @param yearsAtEmployement the yearsAtEmployement to set
	 */
	public void setYearsAtEmployement(Integer yearsAtEmployement) {
		this.yearsAtEmployement = yearsAtEmployement;
	}
	/**
	 * @return the monthsAtEmployement
	 */
	public Integer getMonthsAtEmployement() {
		return monthsAtEmployement;
	}
	/**
	 * @param monthsAtEmployement the monthsAtEmployement to set
	 */
	public void setMonthsAtEmployement(Integer monthsAtEmployement) {
		this.monthsAtEmployement = monthsAtEmployement;
	}
	/**
	 * @return the grossIncome
	 */
	public Integer getGrossIncome() {
		return grossIncome;
	}
	/**
	 * @param grossIncome the grossIncome to set
	 */
	public void setGrossIncome(Integer grossIncome) {
		this.grossIncome = grossIncome;
	}
	/**
	 * @return the grossHouseholdIncome
	 */
	public Integer getGrossHouseholdIncome() {
		return grossHouseholdIncome;
	}
	/**
	 * @param grossHouseholdIncome the grossHouseholdIncome to set
	 */
	public void setGrossHouseholdIncome(Integer grossHouseholdIncome) {
		this.grossHouseholdIncome = grossHouseholdIncome;
	}
	/**
	 * @return the housingpayment
	 */
	public Integer getHousingpayment() {
		return housingpayment;
	}
	/**
	 * @param housingpayment the housingpayment to set
	 */
	public void setHousingpayment(Integer housingpayment) {
		this.housingpayment = housingpayment;
	}
	/**
	 * @return the bankCardFlag
	 */
	public String getBankCardFlag() {
		return bankCardFlag;
	}
	/**
	 * @param bankCardFlag the bankCardFlag to set
	 */
	public void setBankCardFlag(String bankCardFlag) {
		this.bankCardFlag = bankCardFlag;
	}
	/**
	 * @return the bankLoanFlag
	 */
	public String getBankLoanFlag() {
		return bankLoanFlag;
	}
	/**
	 * @param bankLoanFlag the bankLoanFlag to set
	 */
	public void setBankLoanFlag(String bankLoanFlag) {
		this.bankLoanFlag = bankLoanFlag;
	}
	/**
	 * @return the chequingAccountFlag
	 */
	public String getChequingAccountFlag() {
		return chequingAccountFlag;
	}
	/**
	 * @param chequingAccountFlag the chequingAccountFlag to set
	 */
	public void setChequingAccountFlag(String chequingAccountFlag) {
		this.chequingAccountFlag = chequingAccountFlag;
	}
	/**
	 * @return the savingsAccountFlag
	 */
	public String getSavingsAccountFlag() {
		return savingsAccountFlag;
	}
	/**
	 * @param savingsAccountFlag the savingsAccountFlag to set
	 */
	public void setSavingsAccountFlag(String savingsAccountFlag) {
		this.savingsAccountFlag = savingsAccountFlag;
	}
	/**
	 * @return the storeCardFlag
	 */
	public String getStoreCardFlag() {
		return storeCardFlag;
	}
	/**
	 * @param storeCardFlag the storeCardFlag to set
	 */
	public void setStoreCardFlag(String storeCardFlag) {
		this.storeCardFlag = storeCardFlag;
	}
	/**
	 * @return the gasCardFlag
	 */
	public String getGasCardFlag() {
		return gasCardFlag;
	}
	/**
	 * @param gasCardFlag the gasCardFlag to set
	 */
	public void setGasCardFlag(String gasCardFlag) {
		this.gasCardFlag = gasCardFlag;
	}
	/**
	 * @return the supp1FirstName
	 */
	public String getSupp1FirstName() {
		return supp1FirstName;
	}
	/**
	 * @param supp1FirstName the supp1FirstName to set
	 */
	public void setSupp1FirstName(String supp1FirstName) {
		this.supp1FirstName = supp1FirstName;
	}
	/**
	 * @return the supp1LastName
	 */
	public String getSupp1LastName() {
		return supp1LastName;
	}
	/**
	 * @param supp1LastName the supp1LastName to set
	 */
	public void setSupp1LastName(String supp1LastName) {
		this.supp1LastName = supp1LastName;
	}
	/**
	 * @return the supp1MiddleInitial
	 */
	public String getSupp1MiddleInitial() {
		return supp1MiddleInitial;
	}
	/**
	 * @param supp1MiddleInitial the supp1MiddleInitial to set
	 */
	public void setSupp1MiddleInitial(String supp1MiddleInitial) {
		this.supp1MiddleInitial = supp1MiddleInitial;
	}
	/**
	 * @return the supp1Relationship
	 */
	public String getSupp1Relationship() {
		return supp1Relationship;
	}
	/**
	 * @param supp1Relationship the supp1Relationship to set
	 */
	public void setSupp1Relationship(String supp1Relationship) {
		this.supp1Relationship = supp1Relationship;
	}
	/**
	 * @return the supp1DateOfBirth
	 */
	public String getSupp1DateOfBirth() {
		return supp1DateOfBirth;
	}
	/**
	 * @param supp1DateOfBirth the supp1DateOfBirth to set
	 */
	public void setSupp1DateOfBirth(String supp1DateOfBirth) {
		this.supp1DateOfBirth = supp1DateOfBirth;
	}
	/**
	 * @return the supp1AddrSameAsPrimary
	 */
	public String getSupp1AddrSameAsPrimary() {
		return supp1AddrSameAsPrimary;
	}
	/**
	 * @param supp1AddrSameAsPrimary the supp1AddrSameAsPrimary to set
	 */
	public void setSupp1AddrSameAsPrimary(String supp1AddrSameAsPrimary) {
		this.supp1AddrSameAsPrimary = supp1AddrSameAsPrimary;
	}
	/**
	 * @return the supp1AddressLine1
	 */
	public String getSupp1AddressLine1() {
		return supp1AddressLine1;
	}
	/**
	 * @param supp1AddressLine1 the supp1AddressLine1 to set
	 */
	public void setSupp1AddressLine1(String supp1AddressLine1) {
		this.supp1AddressLine1 = supp1AddressLine1;
	}
	/**
	 * @return the supp1AddressLine2
	 */
	public String getSupp1AddressLine2() {
		return supp1AddressLine2;
	}
	/**
	 * @param supp1AddressLine2 the supp1AddressLine2 to set
	 */
	public void setSupp1AddressLine2(String supp1AddressLine2) {
		this.supp1AddressLine2 = supp1AddressLine2;
	}
	/**
	 * @return the supp1City
	 */
	public String getSupp1City() {
		return supp1City;
	}
	/**
	 * @param supp1City the supp1City to set
	 */
	public void setSupp1City(String supp1City) {
		this.supp1City = supp1City;
	}
	/**
	 * @return the supp1Province
	 */
	public String getSupp1Province() {
		return supp1Province;
	}
	/**
	 * @param supp1Province the supp1Province to set
	 */
	public void setSupp1Province(String supp1Province) {
		this.supp1Province = supp1Province;
	}
	/**
	 * @return the supp1PostalCode
	 */
	public String getSupp1PostalCode() {
		return supp1PostalCode;
	}
	/**
	 * @param supp1PostalCode the supp1PostalCode to set
	 */
	public void setSupp1PostalCode(String supp1PostalCode) {
		this.supp1PostalCode = supp1PostalCode;
	}
	/**
	 * @return the supp1Country
	 */
	public String getSupp1Country() {
		return supp1Country;
	}
	/**
	 * @param supp1Country the supp1Country to set
	 */
	public void setSupp1Country(String supp1Country) {
		this.supp1Country = supp1Country;
	}
	/**
	 * @return the agreedToTermsFlag
	 */
	public String getAgreedToTermsFlag() {
		return agreedToTermsFlag;
	}
	/**
	 * @param agreedToTermsFlag the agreedToTermsFlag to set
	 */
	public void setAgreedToTermsFlag(String agreedToTermsFlag) {
		this.agreedToTermsFlag = agreedToTermsFlag;
	}
	/**
	 * @return the applicantSignature
	 */
	public byte[] getApplicantSignature() {
		return applicantSignature;
	}
	/**
	 * @param applicantSignature the applicantSignature to set
	 */
	public void setApplicantSignature(byte[] applicantSignature) {
		this.applicantSignature = applicantSignature;
	}
	/**
	 * @return the signatureFlag
	 */
	public String getSignatureFlag() {
		return signatureFlag;
	}
	/**
	 * @param signatureFlag the signatureFlag to set
	 */
	public void setSignatureFlag(String signatureFlag) {
		this.signatureFlag = signatureFlag;
	}
	/**
	 * @return the signatureMatchFlag
	 */
	public String getSignatureMatchFlag() {
		return signatureMatchFlag;
	}
	/**
	 * @param signatureMatchFlag the signatureMatchFlag to set
	 */
	public void setSignatureMatchFlag(String signatureMatchFlag) {
		this.signatureMatchFlag = signatureMatchFlag;
	}
	/**
	 * @return the dateSigned
	 */
	public String getDateSigned() {
		return dateSigned;
	}
	/**
	 * @param dateSigned the dateSigned to set
	 */
	public void setDateSigned(String dateSigned) {
		this.dateSigned = dateSigned;
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
	 * @return the insuranceAgreedFlag_CP
	 */
	public String getInsuranceAgreedFlag_CP() {
		return insuranceAgreedFlag_CP;
	}
	/**
	 * @param insuranceAgreedFlag_CP the insuranceAgreedFlag_CP to set
	 */
	public void setInsuranceAgreedFlag_CP(String insuranceAgreedFlag_CP) {
		this.insuranceAgreedFlag_CP = insuranceAgreedFlag_CP;
	}
	/**
	 * @return the insuranceAgreedFlag_IW
	 */
	public String getInsuranceAgreedFlag_IW() {
		return insuranceAgreedFlag_IW;
	}
	/**
	 * @param insuranceAgreedFlag_IW the insuranceAgreedFlag_IW to set
	 */
	public void setInsuranceAgreedFlag_IW(String insuranceAgreedFlag_IW) {
		this.insuranceAgreedFlag_IW = insuranceAgreedFlag_IW;
	}
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
	 * @return the insuranceSignatureFlag
	 */
	public String getInsuranceSignatureFlag() {
		return insuranceSignatureFlag;
	}
	/**
	 * @param insuranceSignatureFlag the insuranceSignatureFlag to set
	 */
	public void setInsuranceSignatureFlag(String insuranceSignatureFlag) {
		this.insuranceSignatureFlag = insuranceSignatureFlag;
	}
	/**
	 * @return the insuranceSignatureFlag_CP
	 */
	public String getInsuranceSignatureFlag_CP() {
		return insuranceSignatureFlag_CP;
	}
	/**
	 * @param insuranceSignatureFlag_CP the insuranceSignatureFlag_CP to set
	 */
	public void setInsuranceSignatureFlag_CP(String insuranceSignatureFlag_CP) {
		this.insuranceSignatureFlag_CP = insuranceSignatureFlag_CP;
	}
	/**
	 * @return the insuranceSignatureFlag_IW
	 */
	public String getInsuranceSignatureFlag_IW() {
		return insuranceSignatureFlag_IW;
	}
	/**
	 * @param insuranceSignatureFlag_IW the insuranceSignatureFlag_IW to set
	 */
	public void setInsuranceSignatureFlag_IW(String insuranceSignatureFlag_IW) {
		this.insuranceSignatureFlag_IW = insuranceSignatureFlag_IW;
	}
	/**
	 * @return the insuranceDateSigned
	 */
	public String getInsuranceDateSigned() {
		return insuranceDateSigned;
	}
	/**
	 * @param insuranceDateSigned the insuranceDateSigned to set
	 */
	public void setInsuranceDateSigned(String insuranceDateSigned) {
		this.insuranceDateSigned = insuranceDateSigned;
	}
	/**
	 * @return the insuranceSignature
	 */
	public byte[] getInsuranceSignature() {
		return insuranceSignature;
	}
	/**
	 * @param insuranceSignature the insuranceSignature to set
	 */
	public void setInsuranceSignature(byte[] insuranceSignature) {
		this.insuranceSignature = insuranceSignature;
	}
	/**
	 * @return the insuranceSignatureCP
	 */
	public byte[] getInsuranceSignatureCP() {
		return insuranceSignatureCP;
	}
	/**
	 * @param insuranceSignatureCP the insuranceSignatureCP to set
	 */
	public void setInsuranceSignatureCP(byte[] insuranceSignatureCP) {
		this.insuranceSignatureCP = insuranceSignatureCP;
	}
	/**
	 * @return the insuranceSignatureIW
	 */
	public byte[] getInsuranceSignatureIW() {
		return insuranceSignatureIW;
	}
	/**
	 * @param insuranceSignatureIW the insuranceSignatureIW to set
	 */
	public void setInsuranceSignatureIW(byte[] insuranceSignatureIW) {
		this.insuranceSignatureIW = insuranceSignatureIW;
	}
	/**
	 * @return the affiliationCode
	 */
	public String getAffiliationCode() {
		return affiliationCode;
	}
	/**
	 * @param affiliationCode the affiliationCode to set
	 */
	public void setAffiliationCode(String affiliationCode) {
		this.affiliationCode = affiliationCode;
	}
	/**
	 * @return the acquirerCode
	 */
	public String getAcquirerCode() {
		return acquirerCode;
	}
	/**
	 * @param acquirerCode the acquirerCode to set
	 */
	public void setAcquirerCode(String acquirerCode) {
		this.acquirerCode = acquirerCode;
	}
	/**
	 * @return the tuSessionID
	 */
	public String getTuSessionID() {
		return tuSessionID;
	}
	/**
	 * @param tuSessionID the tuSessionID to set
	 */
	public void setTuSessionID(String tuSessionID) {
		this.tuSessionID = tuSessionID;
	}
	/**
	 * @return the tuExamResult
	 */
	public String getTuExamResult() {
		return tuExamResult;
	}
	/**
	 * @param tuExamResult the tuExamResult to set
	 */
	public void setTuExamResult(String tuExamResult) {
		this.tuExamResult = tuExamResult;
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
	 * @return the streetName
	 */
	public String getStreetName() {
		return streetName;
	}
	/**
	 * @param streetName the streetName to set
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
	 * @param streetNumber the streetNumber to set
	 */
	public void setStreetNumber(String streetNumber) {
		this.streetNumber = streetNumber;
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
	 * @return the businessStoreNo
	 */
	public String getBusinessStoreNo() {
		return businessStoreNo;
	}
	/**
	 * @param businessStoreNo the businessStoreNo to set
	 */
	public void setBusinessStoreNo(String businessStoreNo) {
		this.businessStoreNo = businessStoreNo;
	}
	public void setcurrentCountry(String currentCountry) {
		// TODO Auto-generated method stub
		
	}
	/**
	 * @return the supp1TelephoneNumber
	 */
	public String getSupp1TelephoneNumber() {
		return supp1TelephoneNumber;
	}
	/**
	 * @param supp1TelephoneNumber the supp1TelephoneNumber to set
	 */
	public void setSupp1TelephoneNumber(String supp1TelephoneNumber) {
		this.supp1TelephoneNumber = supp1TelephoneNumber;
	}

}
