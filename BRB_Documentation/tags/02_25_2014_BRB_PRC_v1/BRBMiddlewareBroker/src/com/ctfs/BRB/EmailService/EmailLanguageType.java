package com.ctfs.BRB.EmailService;

public enum EmailLanguageType
{
	English ("BRB_English"),
	French ("BRB_French");
	
	private final String name;
	
	private EmailLanguageType(String value){
		name = value;
	}
	
	public boolean equalsName (String strName){
		return strName == null ? false : name.equals(strName);
 	}
	
	public String toString() {
		return name;
	}
}
