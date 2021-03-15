package com.ctfs.WICI.Model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


public class WICIDSSAddressResponse implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String city;
	private String postalCode;
	private String addressLine1;
	private String addressLine2;
	private String province;
	private boolean addressValidation;
	private boolean addressNotfound;
	private boolean servicefailure;
	
	public String getPostalCode() {
		return postalCode;
	}
	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}
	public String getAddressLine1() {
		return addressLine1;
	}
	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}
	public String getAddressLine2() {
		return addressLine2;
	}
	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public boolean isAddressValidation() {
		return addressValidation;
	}
	public void setAddressValidation(boolean addressValidation) {
		this.addressValidation = addressValidation;
	}

	public boolean isServicefailure() {
		return servicefailure;
	}
	public void setServicefailure(boolean servicefailure) {
		this.servicefailure = servicefailure;
	}
	public boolean isAddressNotfound() {
		return addressNotfound;
	}
	public void setAddressNotfound(boolean addressNotfound) {
		this.addressNotfound = addressNotfound;
	}
	@Override
	public String toString() {
		return "WICIDSSAddressResponse [city=" + city + ", postalCode="
				+ postalCode + ", addressLine1=" + addressLine1
				+ ", addressLine2=" + addressLine2 + ", province=" + province
				+ ", addressValidation=" + addressValidation
				+ ", addressNotfound=" + addressNotfound + ", servicefailure="
				+ servicefailure + "]";
	}
	

}
