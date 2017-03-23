package com.ctfs.BRB.Model;

import com.ctfs.BRB.Interfaces.IResponse;

// US4281
public class DictionaryInfoResponse implements IResponse {
	protected boolean error;
	protected String msg;
	protected Object data;
	DictionaryInfo dictionaryInfo;	
	
	public DictionaryInfoResponse() {
		this.error = false;
		this.msg = "";
		this.data = null;
		this.dictionaryInfo = null;
	}
	
	public DictionaryInfo getDictionaryInfo() {
		return dictionaryInfo;
	}

	public void setDictionaryInfo(DictionaryInfo dictionaryInfo) {
		this.dictionaryInfo = dictionaryInfo;
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