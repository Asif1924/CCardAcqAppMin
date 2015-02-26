package com.ctfs.WICI.Servlet.Model;

import com.ctfs.WICI.Model.DictionaryInfo;

public class WICILoginResponse
{
	String statusCode;
	String LTPAToken;
	String message;
	String roles;
	WICICheckLocationResponse checkLocation;
	DictionaryInfo dictionaryInfo;	
	
	public DictionaryInfo getDictionaryInfo() {
		return dictionaryInfo;
	}

	public void setDictionaryInfo(DictionaryInfo dictionaryInfo) {
		this.dictionaryInfo = dictionaryInfo;
	}

	public String getRoles()
	{
		return roles;
	}

	public void setRoles(String roles)
	{
		this.roles = roles;
	}

	public String getMessage()
	{
		return message;
	}

	public void setMessage(String message)
	{
		this.message = message;
	}

	public WICICheckLocationResponse getCheckLocation()
	{
		return checkLocation;
	}

	public void setCheckLocation(WICICheckLocationResponse checkLocation)
	{
		this.checkLocation = checkLocation;
	}

	public String getStatusCode()
	{
		return statusCode;
	}

	public void setStatusCode(String statusCode)
	{
		this.statusCode = statusCode;
	}

	public String getLTPAToken()
	{
		return LTPAToken;
	}

	public void setLTPAToken(String lTPAToken)
	{
		LTPAToken = lTPAToken;
	}

}
