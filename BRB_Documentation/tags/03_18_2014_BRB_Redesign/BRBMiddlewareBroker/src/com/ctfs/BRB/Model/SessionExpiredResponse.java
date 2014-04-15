package com.ctfs.BRB.Model;

import javax.servlet.http.HttpServletResponse;

public class SessionExpiredResponse extends Response
{
	public SessionExpiredResponse(){	
		super(true, "", HttpServletResponse.SC_CONFLICT);
	}
	
	public SessionExpiredResponse(String errorMsg){
		super(true, errorMsg, HttpServletResponse.SC_CONFLICT);
	}	
}