package com.ctfs.WICI.Model;

import java.io.Serializable;
import java.util.Date;


public class TrainingAttestationResponse implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private byte[]  signature;
	private Date attestationDate;
	private String storeLocationNumber;
	private String firstName;
	private String lastName;
	private String retailNetwork;
	
	public byte[] getSignature() {
		return signature;
	}
	public void setSignature(byte[] signature) {
		this.signature = signature;
	}
	public Date getAttestationDate() {
		return attestationDate;
	}
	public void setAttestationDate(Date attestationDate) {
		this.attestationDate = attestationDate;
	}
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
	public String getRetailNetwork() {
		return retailNetwork;
	}
	public void setRetailNetwork(String retailNetwork) {
		this.retailNetwork = retailNetwork;
	}

}
