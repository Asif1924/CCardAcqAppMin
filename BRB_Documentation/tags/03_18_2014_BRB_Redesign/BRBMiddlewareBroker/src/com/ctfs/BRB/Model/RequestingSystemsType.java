package com.ctfs.BRB.Model;

public enum RequestingSystemsType
{
	CTRONLINE ("CTRONLINE"),
	BRBSIM ("BRBSIM"),
	CTCECOMM ("CTCECOMM"),	
	CTRONLINEUAT2 ("CTRONLINEUAT2");
	
	private final String name;
	
	private RequestingSystemsType(String value){
		name = value;
	}
	
	public boolean equalsName (String strName){
		return (strName != null) ? false : name.equals(strName);
 	}
	
	public boolean equalsNameInsensitive (String strName){
		return (strName != null) ? false : name.toUpperCase().equals(strName.toUpperCase());
 	}
	
	public String toString() {
		return name;
	}
}
