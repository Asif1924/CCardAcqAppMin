package com.ctfs.BRB.Helper;

import java.util.logging.Logger;

public class BRBPostalCodeAdapter
{
	static final String EMPTY_STRING = "";
	static final String BLANK_STRING = " ";
	static final String HYPHEN_STRING = "-";
	
	static Logger log = Logger.getLogger(BRBPostalCodeAdapter.class.getName());
	
	public String adapt(String postalCode) {
		String sMethod = "[adapt] ";
		log.info(sMethod);
		
		String adaptedPostalCode = "";
		validatePostalCode(postalCode);
		//adaptedPostalCode = postalCode.replace(BLANK_STRING, EMPTY_STRING).replace(HYPHEN_STRING, EMPTY_STRING);
		adaptedPostalCode = postalCode.replaceAll("[^A-Za-z0-9]", "");
		return adaptedPostalCode;
	}
	
	public String adaptBack(String postalCode) {
		String sMethod = "[adaptBack] ";
		log.info(sMethod);
		
		validatePostalCode(postalCode);
		StringBuilder adaptedPostalCode = new StringBuilder(postalCode).insert(postalCode.length()/2, BLANK_STRING);
				
		return adaptedPostalCode.toString();
	}
	
	private void validatePostalCode (String postalCode) {
		String sMethod = "[validatePostalCode] ";
		log.info(sMethod);
		
		if (postalCode == null || postalCode.isEmpty()){
			throw new IllegalArgumentException("Invalid 'postalCode' parameter!");
		}
	}
}
