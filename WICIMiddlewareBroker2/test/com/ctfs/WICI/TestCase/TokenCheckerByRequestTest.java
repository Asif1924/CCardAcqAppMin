package com.ctfs.WICI.TestCase;

import javax.servlet.http.HttpServletRequest;
import org.junit.Assert;
import org.junit.Test;
import org.mockito.Mockito;
import com.ctfs.WICI.Helper.TokenCheckerByRequest;

public class TokenCheckerByRequestTest
{

	final String sHeaderName = "Cookie"; // "Set-Cookie"

	@Test
	public void should_return_true_if_ltpa_token_exists()
	{
		HttpServletRequest request = Mockito.mock(HttpServletRequest.class);
		String headerValue = "ltpatoken2=someTokenValue";

		Mockito.when(request.getHeader(sHeaderName)).thenReturn(headerValue);

		TokenCheckerByRequest sut = new TokenCheckerByRequest(request);
		Assert.assertTrue(sut.ltpaTokenExists());
	}

	@Test
	public void should_return_true_if_ltpa_token_exists_and_has_a_value()
	{
		HttpServletRequest request = Mockito.mock(HttpServletRequest.class);
		String headerValue = "ltpatoken2=someTokenValue";

		Mockito.when(request.getHeader(sHeaderName)).thenReturn(headerValue);

		TokenCheckerByRequest sut = new TokenCheckerByRequest(request);
		Assert.assertTrue(sut.ltpaTokenExists());
	}

	@Test
	public void should_return_false_if_ltpa_token_exists_but_has_no_value()
	{
		HttpServletRequest request = Mockito.mock(HttpServletRequest.class);
		String headerValue = "ltpatoken2=";

		Mockito.when(request.getHeader(sHeaderName)).thenReturn(headerValue);

		TokenCheckerByRequest sut = new TokenCheckerByRequest(request);
		Assert.assertTrue(!sut.ltpaTokenExists());
	}

	@Test
	public void should_return_false_if_ltpa_token_doesnt_exists()
	{
		HttpServletRequest request = Mockito.mock(HttpServletRequest.class);
		String headerValue = "";

		Mockito.when(request.getHeader(sHeaderName)).thenReturn(headerValue);

		TokenCheckerByRequest sut = new TokenCheckerByRequest(request);
		Assert.assertTrue(!sut.ltpaTokenExists());
	}

	@Test
	public void should_return_false_if_header_is_null()
	{
		HttpServletRequest request = Mockito.mock(HttpServletRequest.class);

		String headerValue = null;

		Mockito.when(request.getHeader(sHeaderName)).thenReturn(headerValue);

		TokenCheckerByRequest sut = new TokenCheckerByRequest(request);
		Assert.assertTrue(!sut.ltpaTokenExists());
	}

	@Test
	public void should_return_false_if_httpResponse_is_null()
	{
		HttpServletRequest request = null;
		TokenCheckerByRequest sut = new TokenCheckerByRequest(request);
		Assert.assertTrue(!sut.ltpaTokenExists());
	}

	/*
	 * @Test public void should_return_false_if_firstHeader_is_null(){
	 * HttpServletRequest request = Mockito.mock(HttpServletRequest.class);
	 * Header[] headers = {null};
	 *
	 * Mockito.when(request.getAllHeaders()).thenReturn(headers);
	 *
	 * TokenCheckerByRequest sut = new TokenCheckerByRequest(request);
	 * Assert.assertTrue(!sut.ltpaTokenExists()); }
	 *
	 * @Test public void should_return_false_if_secondHeader_is_null(){
	 * HttpServletRequest request = Mockito.mock(HttpServletRequest.class);
	 * Header[] headers = {null,null};
	 *
	 * Header firstHeader = Mockito.mock(Header.class);
	 * Mockito.when(firstHeader.getName()).thenReturn("Set-Cookie");
	 * Mockito.when(firstHeader.getValue()).thenReturn("ltpatoken2=");
	 * headers[0] = firstHeader; headers[1] = null;
	 *
	 * Mockito.when(request.getAllHeaders()).thenReturn(headers);
	 *
	 * TokenCheckerByRequest sut = new TokenCheckerByRequest(request);
	 * Assert.assertTrue(!sut.ltpaTokenExists()); }
	 */
}
