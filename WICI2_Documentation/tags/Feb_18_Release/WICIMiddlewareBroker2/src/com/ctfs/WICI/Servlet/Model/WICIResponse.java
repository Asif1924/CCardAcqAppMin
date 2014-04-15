package com.ctfs.WICI.Servlet.Model;

import com.ctfs.WICI.Interfaces.IResponse;

public class WICIResponse implements IResponse
{
	protected boolean error;
	protected String msg;
	protected Object data;
	
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
	
	/**
	 * @return the error
	 */
	public boolean isError()
	{
		return error;
	}
	/**
	 * @param error the error to set
	 */
	public void setError(boolean error)
	{
		this.error = error;
	}
	/**
	 * @return the msg
	 */
	public String getMsg()
	{
		return msg;
	}
	/**
	 * @param msg the msg to set
	 */
	public void setMsg(String msg)
	{
		this.msg = msg;
	}
	/**
	 * @return the data
	 */
	public Object getData()
	{
		return data;
	}
	/**
	 * @param data the data to set
	 */
	public void setData(Object data)
	{
		this.data = data;
	}	
}