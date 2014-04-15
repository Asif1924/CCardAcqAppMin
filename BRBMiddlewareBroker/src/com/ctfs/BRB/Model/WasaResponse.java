package com.ctfs.BRB.Model;

import com.ctfs.BRB.Interfaces.IResponse;

public class WasaResponse implements IResponse
{
	protected String message;

	public WasaResponse(){		
	}
	
	public WasaResponse(String errorMsg){
		setMessage(errorMsg);
	}
	
	/**
	 * @return the message
	 */
	public String getMessage()
	{
		return message;
	}

	/**
	 * @param message the message to set
	 */
	public void setMessage(String message)
	{
		this.message = message;
	}
}