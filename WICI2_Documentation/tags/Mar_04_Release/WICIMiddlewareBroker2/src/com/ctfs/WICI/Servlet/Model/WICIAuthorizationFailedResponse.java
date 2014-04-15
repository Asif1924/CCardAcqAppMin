package com.ctfs.WICI.Servlet.Model;

public class WICIAuthorizationFailedResponse
{
	public boolean error;
	public String msg;
	public boolean isAuthorizationFailed;

	public WICIAuthorizationFailedResponse()
	{
		this.error = false;
		this.msg = "";
		this.isAuthorizationFailed = true;
	}

	public WICIAuthorizationFailedResponse(boolean error, String msg, boolean isAuthorizationFailed)
	{
		this.error = error;
		this.msg = msg;
		this.isAuthorizationFailed = isAuthorizationFailed;
	}
}
