package com.ctfs.WICI.Model;


public class ReceiptCustomerInfo
{
	public String getRequestedProductType()
	{
		return requestedProductType;
	}
	public void setRequestedProductType(String requestedProductType)
	{
		this.requestedProductType = requestedProductType;
	}
	public String getFirstName()
	{
		return firstName;
	}
	public void setFirstName(String firstName)
	{
		this.firstName = firstName;
	}
	public String getMiddleInitial()
	{
		return middleInitial;
	}
	public void setMiddleInitial(String middleInitial)
	{
		this.middleInitial = middleInitial;
	}
	public String getLastName()
	{
		return lastName;
	}
	public void setLastName(String lastName)
	{
		this.lastName = lastName;
	}
	public String getApplicantSignature()
	{
		return applicantSignature;
	}
	public void setApplicantSignature(String applicantSignature)
	{
		this.applicantSignature = applicantSignature;
	}
	public String getProvince()
	{
		return province;
	}
	public void setProvince(String province)
	{
		this.province = province;
	}
	public String getPreferredLanguage()
	{
		return preferredLanguage;
	}
	public void setPreferredLanguage(String preferredLanguage)
	{
		this.preferredLanguage = preferredLanguage;
	}
	public String getInsuranceCode()
	{
		return insuranceCode;
	}
	public void setInsuranceCode(String insuranceCode)
	{
		this.insuranceCode = insuranceCode;
	}
	public String getCreditProtector()
	{
		return creditProtector;
	}
	public void setCreditProtector(String creditProtector)
	{
		this.creditProtector = creditProtector;
	}
	public String getIdentityWatch()
	{
		return identityWatch;
	}
	public void setIdentityWatch(String identityWatch)
	{
		this.identityWatch = identityWatch;
	}
	public String getStoreNumber()
	{
		return storeNumber;
	}
	public void setStoreNumber(String storeNumber)
	{
		this.storeNumber = storeNumber;
	}
	public String getAddressStreetName() {
		return addressStreetName;
	}
	public void setAddressStreetName(String addressStreetName) {
		this.addressStreetName = addressStreetName;
	}
	public String getAddressStreetNumber() {
		return addressStreetNumber;
	}
	public void setAddressStreetNumber(String addressStreetNumber) {
		this.addressStreetNumber = addressStreetNumber;
	}
	public String getAddressSuiteUnitNumber() {
		return addressSuiteUnitNumber;
	}
	public void setAddressSuiteUnitNumber(String addressSuiteUnitNumber) {
		this.addressSuiteUnitNumber = addressSuiteUnitNumber;
	}
	public String getAddressCity() {
		return addressCity;
	}
	public void setAddressCity(String addressCity) {
		this.addressCity = addressCity;
	}
	public String getAddressProvince() {
		return addressProvince;
	}
	public void setAddressProvince(String addressProvince) {
		this.addressProvince = addressProvince;
	}
	public String getAddressPostalCode() {
		return addressPostalCode;
	}
	public void setAddressPostalCode(String addressPostalCode) {
		this.addressPostalCode = addressPostalCode;
	}
	public String getInsurance_CPType_Offered() {
		return insurance_CPType_Offered;
	}
	public void setInsurance_CPType_Offered(String insurance_CPType_Offered) {
		this.insurance_CPType_Offered = insurance_CPType_Offered;
	}
	public String getInsurance_CPType_Selected() {
		return insurance_CPType_Selected;
	}
	public void setInsurance_CPType_Selected(String insurance_CPType_Selected) {
		this.insurance_CPType_Selected = insurance_CPType_Selected;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	String requestedProductType;
	String firstName;
	String middleInitial;
	String lastName;
	String applicantSignature;
	
	String email;

	String province;
	String preferredLanguage;
	
	String insuranceCode;
	String insurance_CPType_Offered;
	String insurance_CPType_Selected;
	String creditProtector;
	String identityWatch;
	String storeNumber;
	
	// US5240
	String addressStreetName;
	String addressStreetNumber;
	String addressSuiteUnitNumber;
	String addressCity;
	String addressProvince;
	String addressPostalCode;
	
}
