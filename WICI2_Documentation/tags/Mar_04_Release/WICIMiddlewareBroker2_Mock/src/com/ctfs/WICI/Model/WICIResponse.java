package com.ctfs.WICI.Model;

public class WICIResponse {
	public boolean error;
	public String msg;
	public Object data;

	public WICIResponse() {
		this.error = false;
		this.msg = "";
		this.data = null;
	}
	public WICIResponse(boolean error, String msg, Object data) {
		this.error = error;
		this.msg = msg;
		this.data = data;
	}
}