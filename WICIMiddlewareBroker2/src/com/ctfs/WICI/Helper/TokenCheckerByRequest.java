package com.ctfs.WICI.Helper;

import java.util.Enumeration;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;

public class TokenCheckerByRequest
{
	static Logger log = Logger.getLogger(TokenCheckerByRequest.class.getName());

	HttpServletRequest request;

	public TokenCheckerByRequest(HttpServletRequest request)
	{
		this.request = request;
	}

	public boolean ltpaTokenExists()
	{
		String sMethod = "[ltpaTokenExists] ";
		log.info(sMethod);

		if (request == null)
			return false;

		printHeaders();

		String sHeaderName = "Cookie"; // "Set-Cookie"
		String sTokenName = "LtpaToken2".toLowerCase();

		String headerValue = request.getHeader(sHeaderName);
		if (headerValue == null)
		{
			return false;
		}

		headerValue = headerValue.toLowerCase();

		if (headerValue.startsWith(sTokenName + "="))
		{
			String ltpaTokenValue = headerValue.substring(sTokenName.length() + 1);
			if (ltpaTokenValue.length() > 0)
				return true;
		}

		return false;

	}

	private void printHeaders()
	{
		//String sMethod = "[printHeaders] ";
		log.info("[printHeaders]" );
		try
		{
			for (Enumeration enumm = request.getHeaderNames(); enumm.hasMoreElements();)
			{
				String headerName = (String) enumm.nextElement();
				String headerValue = request.getHeader(headerName);
				log.info("[printHeaders]Header: Name = " + CWE117Fix.encodeCRLF(headerName) + "  Value = " + CWE117Fix.encodeCRLF(headerValue));
			}
		}
		catch (Exception e)
		{
			// TODO: handle exception
		}
	}
}
