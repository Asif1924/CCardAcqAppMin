package com.ctfs.WICI.Helper;

import org.apache.http.Header;
import org.apache.http.HttpResponse;

public class TokenChecker
{
	HttpResponse theHttpResponse;

	public TokenChecker(HttpResponse argResponse)
	{
		theHttpResponse = argResponse;
	}

	public boolean ltpaTokenExists()
	{
		Header[] responseHeaders = null;
		String ltpaTokenValue = "";

		if (theHttpResponse == null)
			return false;

		responseHeaders = theHttpResponse.getAllHeaders();
		for (int i = 0; responseHeaders != null && i < responseHeaders.length; i++)
		{
			Header header = responseHeaders[i];

			if (header == null)
				return false;

			String headerName = header.getName();
			if (headerName == null)
				return false;
			String headerValue = header.getValue();

			if (headerName.equalsIgnoreCase("Set-Cookie") && headerValue.toLowerCase().startsWith("ltpatoken2="))
			{
				ltpaTokenValue = headerValue.substring("ltpatoken2=".length());
				if (ltpaTokenValue.length() > 0)
					return true;
			}

		}
		return false;
	}

}
