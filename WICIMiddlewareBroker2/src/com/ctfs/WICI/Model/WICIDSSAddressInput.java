package com.ctfs.WICI.Model;

import java.io.Serializable;

public class WICIDSSAddressInput implements Serializable{
	
/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
private String city;
private String postalCode;
private String addressLine1;
private String addressLine2;
private String province;

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

public String getPostalCode() {
	return postalCode;
}
public void setPostalCode(String postalCode) {
	this.postalCode = postalCode;
}
@Override
public String toString() {
	return "WICIDSSAddressInput [city=" + city
			+ ", postalCode=" + postalCode + ", addressLine1=" + addressLine1
			+ ", addressLine2=" + addressLine2 + ", province=" + province + "]";
}
public String getCity() {
	return city;
}
public void setCity(String city) {
	this.city = city;
}

}
