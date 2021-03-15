package com.ctfs.WICI.Model;

import java.io.Serializable;

public class WICIAbbrevatedCityResponse implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String abbrevaitedCityName;
	private String abrivatedCityLookup;
	
	public String getAbbrevaitedCityName() {
		return abbrevaitedCityName;
	}
	public void setAbbrevaitedCityName(String abbrevaitedCityName) {
		this.abbrevaitedCityName = abbrevaitedCityName;
	}
	public String getAbrivatedCityLookup() {
		return abrivatedCityLookup;
	}
	public void setAbrivatedCityLookup(String abrivatedCityLookup) {
		this.abrivatedCityLookup = abrivatedCityLookup;
	}
	@Override
	public String toString() {
		return "WICIAbbrevatedCityResponse [abbrevaitedCityName="
				+ abbrevaitedCityName + ", abrivatedCityLookup="
				+ abrivatedCityLookup + "]";
	}
	
	
	
	
	

}
