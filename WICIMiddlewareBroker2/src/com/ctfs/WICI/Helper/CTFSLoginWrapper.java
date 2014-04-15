package com.ctfs.WICI.Helper;

import java.io.IOException;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;

public class CTFSLoginWrapper extends HttpServletResponseWrapper
{
	String originalRedirect;

	public CTFSLoginWrapper(HttpServletResponse response)
	{
		super(response);
	}

	public void sendRedirect(String location) throws IOException
	{
		originalRedirect = location;
	}

	public void sendMyRedirect() throws IOException
	{
		super.sendRedirect(originalRedirect);
	}
}
