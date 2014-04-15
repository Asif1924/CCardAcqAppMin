package com.ctfs.BRB.Helper;

public enum ScoreIdentityExamDecisions
{
	Failed ("FAILED"),
	Failed4ThQuestion ("FAILED 4TH QUESTION"),
	Passed4ThQuestion ("PASSED 4TH QUESTION"),
	Passed ("PASSED");
	
	private final String name;
	
	private ScoreIdentityExamDecisions(String value){
		name = value;
	}
	
	public boolean equalsName (String strName){
		return strName == null ? false : name.equals(strName);
 	}
	
	public boolean equalsNameIgnoreCase (String strName){
		return strName == null ? false : name.equalsIgnoreCase(strName);
 	}
	
	public String toString() {
		return name;
	}
}