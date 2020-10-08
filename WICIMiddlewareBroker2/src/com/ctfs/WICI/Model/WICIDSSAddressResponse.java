package com.ctfs.WICI.Model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class WICIDSSAddressResponse implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Set<String> standardAddressLine1 = new HashSet<String>();
	private List<String> standardAddressLine2 = new ArrayList<String>();

	@Override
	public String toString() {
		return "WICIAddressResponse [standardAddressLine1="
				+ standardAddressLine1 + ", standardCityName="
				+ standardCityName + ", standardProvince=" + standardProvince
				+ ", standardPostalCode=" + standardPostalCode + "]";
	}

	private String standardCityName;
	private String standardProvince;
	private String standardPostalCode;
	private String addressStatus;

	public List<String> getStandardAddressLine2() {
		return standardAddressLine2;
	}

	public void setStandardAddressLine2(List<String> standardAddressLine2) {
		this.standardAddressLine2 = standardAddressLine2;
	}

	public String getAddressStatus() {
		return addressStatus;
	}

	public void setAddressStatus(String addressStatus) {
		this.addressStatus = addressStatus;
	}

	public Set<String> getStandardAddressLine1() {
		return standardAddressLine1;
	}

	public void setStandardAddressLine1(Set<String> standardAddressLine1) {
		this.standardAddressLine1 = standardAddressLine1;
	}

	public String getStandardCityName() {
		return standardCityName;
	}

	public void setStandardCityName(String standardCityName) {
		this.standardCityName = standardCityName;
	}

	public String getStandardProvince() {
		return standardProvince;
	}

	public void setStandardProvince(String standardProvince) {
		this.standardProvince = standardProvince;
	}

	public String getStandardPostalCode() {
		return standardPostalCode;
	}

	public void setStandardPostalCode(String standardPostalCode) {
		this.standardPostalCode = standardPostalCode;
	}

}
