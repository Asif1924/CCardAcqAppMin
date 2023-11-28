package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;

import com.ctc.ctfs.channel.accountacquisition.ProvinceStateType;

public class PersonalData2_Address implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String streetnumber;
	private String house;
	private String suiteunit;
	private String addressline1;
	private String addressline2;
	private String city;
	private String province;
	private String postalcode;
	private int years;
	private int months;
	private String suiteunit_prev;
	private String addressline1_prev;
	private String addressline2_prev;
	private String city_prev;
	private String province_prev;
	private String postalcode_prev;
	private int housingpayment;
	private String flipPrevWasInCanada;
	
	
	/**
	 * @return the streetnumber
	 */
	public String getStreetnumber() {
		return streetnumber;
	}
	/**
	 * @param streetnumber the streetnumber to set
	 */
	public void setStreetnumber(String streetnumber) {
		this.streetnumber = streetnumber;
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
	 * @return the suiteunit
	 */
	public String getSuiteunit() {
		return suiteunit;
	}
	/**
	 * @param suiteunit the suiteunit to set
	 */
	public void setSuiteunit(String suiteunit) {
		this.suiteunit = suiteunit;
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
	 * @return the years
	 */
	public int getYears() {
		return years;
	}
	/**
	 * @param years the years to set
	 */
	public void setYears(int years) {
		this.years = years;
	}
	/**
	 * @return the months
	 */
	public int getMonths() {
		return months;
	}
	/**
	 * @param months the months to set
	 */
	public void setMonths(int months) {
		this.months = months;
	}
	/**
	 * @return the suiteunit_prev
	 */
	public String getSuiteunit_prev() {
		return suiteunit_prev;
	}
	/**
	 * @param suiteunit_prev the suiteunit_prev to set
	 */
	public void setSuiteunit_prev(String suiteunit_prev) {
		this.suiteunit_prev = suiteunit_prev;
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
	 * @return the housingpayment
	 */
	public int getHousingpayment() {
		return housingpayment;
	}
	/**
	 * @param housingpayment the housingpayment to set
	 */
	public void setHousingpayment(int housingpayment) {
		this.housingpayment = housingpayment;
	}
	/**
	 * @return the flipPrevWasInCanada
	 */
	public String getFlipPrevWasInCanada() {
		return flipPrevWasInCanada;
	}
	/**
	 * @param flipPrevWasInCanada the flipPrevWasInCanada to set
	 */
	public void setFlipPrevWasInCanada(String flipPrevWasInCanada) {
		this.flipPrevWasInCanada = flipPrevWasInCanada;
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
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "PersonalData2_Address [streetnumber=" + streetnumber
				+ ", house=" + house + ", suiteunit=" + suiteunit
				+ ", addressline1=" + addressline1 + ", addressline2="
				+ addressline2 + ", city=" + city + ", province=" + province
				+ ", postalcode=" + postalcode + ", years=" + years
				+ ", months=" + months + ", suiteunit_prev=" + suiteunit_prev
				+ ", addressline1_prev=" + addressline1_prev
				+ ", addressline2_prev=" + addressline2_prev + ", city_prev="
				+ city_prev + ", province_prev=" + province_prev
				+ ", postalcode_prev=" + postalcode_prev + ", housingpayment="
				+ housingpayment + ", flipPrevWasInCanada="
				+ flipPrevWasInCanada + "]";
	}
}
