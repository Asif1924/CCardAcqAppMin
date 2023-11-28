package com.ctfs.WICI.Model;

import java.io.Serializable;

public class WICICheckTrainingAttestationRequest implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String storeLocationNumber;

	private String firstName;

	private String lastName;

	private String userName;
	
	private String retailNetwork;

	public String getStoreLocationNumber() {
		return storeLocationNumber;
	}

	public void setStoreLocationNumber(String storeLocationNumber) {
		this.storeLocationNumber = storeLocationNumber;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getRetailNetwork() {
		return retailNetwork;
	}

	public void setRetailNetwork(String retailNetwork) {
		this.retailNetwork = retailNetwork;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "WICICheckTrainingAttestationRequest [storeLocationNumber="
				+ storeLocationNumber + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", userName=" + userName
				+ ", retailNetwork=" + retailNetwork + "]";
	}

	
}
