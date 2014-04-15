package com.ctfs.WICI.Servlet.Model;

import org.apache.http.HttpResponse;

public class LDAPResponse
{
	int httpStatusCode;
	HttpResponse httpResponse;

	public int getHttpStatusCode()
	{
		return httpStatusCode;
	}

	public void setHttpStatusCode(int httpStatusCode)
	{
		this.httpStatusCode = httpStatusCode;
	}

	public HttpResponse getHttpResponse()
	{
		return httpResponse;
	}

	public void setHttpResponse(HttpResponse httpResponse)
	{
		this.httpResponse = httpResponse;
	}
}
