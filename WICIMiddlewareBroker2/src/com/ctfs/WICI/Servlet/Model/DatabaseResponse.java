package com.ctfs.WICI.Servlet.Model;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;

public class DatabaseResponse extends WICIResponse {
	public DatabaseResponse(boolean error, String msg, Object data, AccountApplicationRequestType aaRequestType) {
		super(error,msg,data);
		this.AccountApplicationRequestType = aaRequestType;
	}
	public AccountApplicationRequestType getAccountApplicationRequestType() {
		return AccountApplicationRequestType;
	}

	public void setAaRequestType(AccountApplicationRequestType aaRequestType) {
		this.AccountApplicationRequestType = aaRequestType;
	}

	AccountApplicationRequestType		AccountApplicationRequestType;
}
