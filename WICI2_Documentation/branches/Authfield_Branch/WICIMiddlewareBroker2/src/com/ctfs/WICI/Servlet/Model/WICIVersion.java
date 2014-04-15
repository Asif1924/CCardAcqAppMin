package com.ctfs.WICI.Servlet.Model;

import com.ctfs.WICI.Interfaces.IResponse;

public class WICIVersion implements IResponse
{
	String version;

	public String getVersion()
	{
		return version;
	}

	public void setVersion(String version)
	{
		this.version = version;
	}
}
