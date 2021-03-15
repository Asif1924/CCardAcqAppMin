package com.ctfs.WICI.Model;

public class EmailRiskAssessmentResponse {
	
	private Integer fpsTrustscore;
	private String requestResult;
	private String errorDetail;
	private String tmxProfileID;
	
	
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
	@Override
	public String toString() {
		return "EmailRiskAssessmentResponse [fpsTrustscore=" + fpsTrustscore + ", requestResult=" + requestResult
				+ ", errorDetail=" + errorDetail + ", tmxProfileID=" + tmxProfileID + "]";
	}
	
	

}
