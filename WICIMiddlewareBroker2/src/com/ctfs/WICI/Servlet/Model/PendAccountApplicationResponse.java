package com.ctfs.WICI.Servlet.Model;

import com.ctfs.WICI.Interfaces.IResponse;

public class PendAccountApplicationResponse implements IResponse
{
	public String getStatus()
	{
		return Status;
	}
	public void setStatus(String status)
	{
		Status = status;
	}
	public String getMessage()
	{
		return Message;
	}
	public void setMessage(String message)
	{
		Message = message;
	}
	String Status;
	String Message;
}
