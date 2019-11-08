package com.brb.brbsimulatorcontroller.model;

import java.io.Serializable;

public class GenericAdjudicationInput implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String jsessionId;
	private String host;
	private String userAgent;
	
	public String getJsessionId() {
		return jsessionId;
	}
	public void setJsessionId(String jsessionId) {
		this.jsessionId = jsessionId;
	}
	public String getHost() {
		return host;
	}
	public void setHost(String host) {
		this.host = host;
	}
	public String getUserAgent() {
		return userAgent;
	}
	public void setUserAgent(String userAgent) {
		this.userAgent = userAgent;
	}
	@Override
	public String toString() {
		return "GenericDashInput [jsessionId=" + jsessionId + ", host=" + host + ", userAgent=" + userAgent + "]";
	}
	}
