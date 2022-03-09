package com.ctfs.WICI.Servlet.Model;


public class JobDescription {

	/*
	 * This is Job Description Model class
	 * */
	
	private static final long serialVersionUID = 1L;
	
	private String englishDescription;
	
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "JobDescription [englishDescription=" + englishDescription
				+ ", frenchDescription=" + frenchDescription + ", storedValue="
				+ storedValue + "]";
	}

	private String frenchDescription;
	
	private String storedValue;

	public String getEnglishDescription() {
		return englishDescription;
	}

	public void setEnglishDescription(String englishDescription) {
		this.englishDescription = englishDescription;
	}

	public String getFrenchDescription() {
		return frenchDescription;
	}

	public void setFrenchDescription(String frenchDescription) {
		this.frenchDescription = frenchDescription;
	}

	public String getStoredValue() {
		return storedValue;
	}

	public void setStoredValue(String storedValue) {
		this.storedValue = storedValue;
	}
	
}
