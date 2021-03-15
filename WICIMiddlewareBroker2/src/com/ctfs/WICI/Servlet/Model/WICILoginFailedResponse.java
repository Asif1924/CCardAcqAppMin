package com.ctfs.WICI.Servlet.Model;

public class WICILoginFailedResponse
{
	public boolean error;
	public String msg;
	public boolean isFailedLogin;

	public WICILoginFailedResponse()
	{
		this.error = false;
		this.msg = "";
		this.isFailedLogin = true;
	}

	public WICILoginFailedResponse(boolean error, String msg, boolean isFailedLogin)
	{
		this.error = error;
		this.msg = msg;
		this.isFailedLogin = isFailedLogin;
	}
}