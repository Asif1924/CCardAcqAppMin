package com.ctfs.WICI.Model;

import java.io.Serializable;

public class WICIDSSCheckCPEligibilityRequest implements Serializable {

	private static final long serialVersionUID = 1L;
	private String dateOfBirth;
	private String jobCategory;
	private String jobStatus;
	private String province;
	private String productCode;
	private String jobDescription;
	private String correlationID;
	
	/**
	 * @return the dateOfBirth
	 */
	public String getDateOfBirth() {
		return dateOfBirth;
	}

	/**
	 * @param dateOfBirth the dateOfBirth to set
	 */
	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	/**
	 * @return the jobCategory
	 */
	public String getJobCategory() {
		return jobCategory;
	}

	/**
	 * @param jobCategory the jobCategory to set
	 */
	public void setJobCategory(String jobCategory) {
		this.jobCategory = jobCategory;
	}

	/**
	 * @return the jobStatus
	 */
	public String getJobStatus() {
		return jobStatus;
	}

	/**
	 * @param jobStatus the jobStatus to set
	 */
	public void setJobStatus(String jobStatus) {
		this.jobStatus = jobStatus;
	}

	/**
	 * @return the province
	 */
	public String getProvince() {
		return province;
	}

	/**
	 * @param province the province to set
	 */
	public void setProvince(String province) {
		this.province = province;
	}

	/**
	 * @return the productCode
	 */
	public String getProductCode() {
		return productCode;
	}

	/**
	 * @param productCode the productCode to set
	 */
	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

	/**
	 * @return the jobDescription
	 */
	public String getJobDescription() {
		return jobDescription;
	}

	/**
	 * @param jobDescription the jobDescription to set
	 */
	public void setJobDescription(String jobDescription) {
		this.jobDescription = jobDescription;
	}

	/**
	 * @return the correlationID
	 */
	public String getCorrelationID() {
		return correlationID;
	}

	/**
	 * @param correlationID the correlationID to set
	 */
	public void setCorrelationID(String correlationID) {
		this.correlationID = correlationID;
	}

	/**
	 * @return the serialversionuid
	 */
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "WICIDSSCheckCPEligibilityRequest [dateOfBirth="
				+ dateOfBirth + ", jobCategory=" + jobCategory + ", jobStatus="
				+ jobStatus + ", province=" + province + ", productCode=" + productCode
				+ ", jobDescription=" + jobDescription + ", correlationID="
				+ correlationID + "]";
	}

	
}
