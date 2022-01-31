package com.ctfs.WICI.Servlet.Model;

public class HealthCheckResponse {
	protected Object status;

	public HealthCheckResponse() {
	}
	
	public HealthCheckResponse(Object status) {
		this.status = status;
	}

	public Object getData() {
		return status;
	}

	public void setData(Object status) {
		this.status = status;
	}

}