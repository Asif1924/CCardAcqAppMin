package com.ctfs.WICI.Model;

import com.ctfs.WICI.Interfaces.IResponse;

public class WasaResponse implements IResponse
{
	protected String message;

	public WasaResponse(){		
	}
	
	public WasaResponse(String errorMsg){
		setMessage(errorMsg);
	}
	
	public String getMessage()
	{
		return message;
	}

	public void setMessage(String message)
	{
		this.message = message;
	}
}