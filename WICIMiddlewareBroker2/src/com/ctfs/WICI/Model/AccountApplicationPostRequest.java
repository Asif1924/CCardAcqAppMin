package com.ctfs.WICI.Model;

import java.util.List;
import com.ctfs.WICI.Servlet.Model.BaseModel;

public class AccountApplicationPostRequest
{
	private List<BaseModel>		accountApplicationData;
	private AuthfieldValue		authfieldValue;
	public List<BaseModel> getAccountApplicationData()
	{
		return accountApplicationData;
	}
	public void setAccountApplicationData(List<BaseModel> accountApplicationData)
	{
		this.accountApplicationData = accountApplicationData;
	}
	public AuthfieldValue getAuthfieldValue()
	{
		return authfieldValue;
	}
	public void setAuthfieldValue(AuthfieldValue authfieldValue)
	{
		this.authfieldValue = authfieldValue;
	}
	

}
