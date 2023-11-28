package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;

public class SupCardRequestData implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String cardYesNo;
	private String firstName;
	private String lastName;
	private String initial;
	private String cardRequestFor;
	private String birthDate;
	private String sameAddressYesNo;
	private String phone;
	private String suiteUnit;
	private String addressLine1;
	private String addressLine2;
	private String city;
	private String province;
	private String postalCode;
	
	/**
	 * @return the cardYesNo
	 */
	public String getCardYesNo() {
		return cardYesNo;
	}
	/**
	 * @param cardYesNo the cardYesNo to set
	 */
	public void setCardYesNo(String cardYesNo) {
		this.cardYesNo = cardYesNo;
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
	 * @return the cardRequestFor
	 */
	public String getCardRequestFor() {
		return cardRequestFor;
	}
	/**
	 * @param cardRequestFor the cardRequestFor to set
	 */
	public void setCardRequestFor(String cardRequestFor) {
		this.cardRequestFor = cardRequestFor;
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
	 * @return the sameAddressYesNo
	 */
	public String getSameAddressYesNo() {
		return sameAddressYesNo;
	}
	/**
	 * @param sameAddressYesNo the sameAddressYesNo to set
	 */
	public void setSameAddressYesNo(String sameAddressYesNo) {
		this.sameAddressYesNo = sameAddressYesNo;
	}
	/**
	 * @return the phone
	 */
	public String getPhone() {
		return phone;
	}
	/**
	 * @param phone the phone to set
	 */
	public void setPhone(String phone) {
		this.phone = phone;
	}
	/**
	 * @return the suiteUnit
	 */
	public String getSuiteUnit() {
		return suiteUnit;
	}
	/**
	 * @param suiteUnit the suiteUnit to set
	 */
	public void setSuiteUnit(String suiteUnit) {
		this.suiteUnit = suiteUnit;
	}
	/**
	 * @return the addressLine1
	 */
	public String getAddressLine1() {
		return addressLine1;
	}
	/**
	 * @param addressLine1 the addressLine1 to set
	 */
	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}
	/**
	 * @return the addressLine2
	 */
	public String getAddressLine2() {
		return addressLine2;
	}
	/**
	 * @param addressLine2 the addressLine2 to set
	 */
	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
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
	 * @return the postalCode
	 */
	public String getPostalCode() {
		return postalCode;
	}
	/**
	 * @param postalCode the postalCode to set
	 */
	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}
	@Override
	public String toString() {
		return "SuplementaryCardRequestData [cardYesNo=" + cardYesNo
				+ ", firstName=" + firstName + ", lastName=" + lastName
				+ ", initial=" + initial + ", cardRequestFor=" + cardRequestFor
				+ ", birthDate=" + birthDate + ", sameAddressYesNo="
				+ sameAddressYesNo + ", phone=" + phone + ", suiteUnit="
				+ suiteUnit + ", addressLine1=" + addressLine1
				+ ", addressLine2=" + addressLine2 + ", city=" + city
				+ ", province=" + province + ", postalCode=" + postalCode + "]";
	}
	
}
