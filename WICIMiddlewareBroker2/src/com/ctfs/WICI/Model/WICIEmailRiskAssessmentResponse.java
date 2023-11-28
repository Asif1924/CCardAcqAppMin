package com.ctfs.WICI.Model;

public class WICIEmailRiskAssessmentResponse {
	
	private Integer fpsTrustscore;
	private String requestResult;
	private String errorDetail;
	private String tmxProfileID;
	private String statusCode;
	private String description;
	
	public Integer getFpsTrustscore() {
		return fpsTrustscore;
	}
	public void setFpsTrustscore(Integer fpsTrustscore) {
		this.fpsTrustscore = fpsTrustscore;
	}
	public String getTmxProfileID() {
		return tmxProfileID;
	}
	public void setTmxProfileID(String tmxProfileID) {
		this.tmxProfileID = tmxProfileID;
	}
	public String getRequestResult() {
		return requestResult;
	}
	public void setRequestResult(String requestResult) {
		this.requestResult = requestResult;
	}
	public String getErrorDetail() {
		return errorDetail;
	}
	public void setErrorDetail(String errorDetail) {
		this.errorDetail = errorDetail;
	}
	/**
	 * @return the statusCode
	 */
	public String getStatusCode() {
		return statusCode;
	}
	/**
	 * @param statusCode the statusCode to set
	 */
	public void setStatusCode(String statusCode) {
		this.statusCode = statusCode;
	}
	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}
	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "WICIEmailRiskAssessmentResponse [fpsTrustscore="
				+ fpsTrustscore + ", requestResult=" + requestResult
				+ ", errorDetail=" + errorDetail + ", tmxProfileID="
				+ tmxProfileID + ", statusCode=" + statusCode
				+ ", description=" + description + "]";
	}
}
