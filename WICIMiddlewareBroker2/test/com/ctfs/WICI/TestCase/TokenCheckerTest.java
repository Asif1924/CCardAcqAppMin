package com.ctfs.WICI.TestCase;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;

import org.apache.http.Header;
import org.apache.http.HttpResponse;
import org.junit.Assert;
import org.junit.Test;
import org.mockito.Mockito;

import com.ctfs.WICI.Helper.TokenChecker;

public class TokenCheckerTest
{

	/*
	 * @Test public void
	 * servletrequest_should_return_true_if_ltpa_token_exists(){
	 * HttpServletRequest mockHttpRequest =
	 * Mockito.mock(HttpServletRequest.class); Header[] headers = {null}; Header
	 * ltpaHeader = Mockito.mock(Header.class);
	 *
	 * Mockito.when(ltpaHeader.getName()).thenReturn("Set-Cookie");
	 * Mockito.when(
	 * ltpaHeader.getValue()).thenReturn("ltpatoken2=someTokenValue");
	 * headers[0] = ltpaHeader;
	 *
	 * Mockito.when(mockHttpResponse.getAllHeaders()).thenReturn(headers);
	 *
	 * TokenChecker sut = new TokenChecker(mockHttpResponse);
	 * Assert.assertTrue(sut.ltpaTokenExists()); }
	 */

	// ///////////////////////////////////////////////////////////////////////////////////////////

	@Test
	public void should_return_true_if_ltpa_token_exists()
	{
		HttpResponse mockHttpResponse = Mockito.mock(HttpResponse.class);
		Header[] headers = { null };
		Header ltpaHeader = Mockito.mock(Header.class);

		Mockito.when(ltpaHeader.getName()).thenReturn("Set-Cookie");
		Mockito.when(ltpaHeader.getValue()).thenReturn("ltpatoken2=someTokenValue");
		headers[0] = ltpaHeader;

		Mockito.when(mockHttpResponse.getAllHeaders()).thenReturn(headers);

		TokenChecker sut = new TokenChecker(mockHttpResponse);
		Assert.assertTrue(sut.ltpaTokenExists());
	}

	@Test
	public void should_return_true_if_ltpa_token_exists_and_has_a_value()
	{
		HttpResponse mockHttpResponse = Mockito.mock(HttpResponse.class);
		Header[] headers = { null };
		Header ltpaHeader = Mockito.mock(Header.class);

		Mockito.when(ltpaHeader.getName()).thenReturn("Set-Cookie");
		Mockito.when(ltpaHeader.getValue()).thenReturn("ltpatoken2=someTokenValue");
		headers[0] = ltpaHeader;

		Mockito.when(mockHttpResponse.getAllHeaders()).thenReturn(headers);

		TokenChecker sut = new TokenChecker(mockHttpResponse);
		Assert.assertTrue(sut.ltpaTokenExists());
	}

	@Test
	public void should_return_false_if_ltpa_token_exists_but_has_no_value()
	{
		HttpResponse mockHttpResponse = Mockito.mock(HttpResponse.class);
		Header[] headers = { null };
		Header ltpaHeader = Mockito.mock(Header.class);

		Mockito.when(ltpaHeader.getName()).thenReturn("Set-Cookie");
		Mockito.when(ltpaHeader.getValue()).thenReturn("ltpatoken2=");
		headers[0] = ltpaHeader;

		Mockito.when(mockHttpResponse.getAllHeaders()).thenReturn(headers);

		TokenChecker sut = new TokenChecker(mockHttpResponse);
		Assert.assertTrue(!sut.ltpaTokenExists());
	}

	@Test
	public void should_return_false_if_ltpa_token_doesnt_exists()
	{
		HttpResponse mockHttpResponse = Mockito.mock(HttpResponse.class);
		Header[] headers = { null };
		Header ltpaHeader = Mockito.mock(Header.class);

		Mockito.when(ltpaHeader.getName()).thenReturn("Set-Cookie");
		Mockito.when(ltpaHeader.getValue()).thenReturn("");
		headers[0] = ltpaHeader;

		Mockito.when(mockHttpResponse.getAllHeaders()).thenReturn(headers);

		TokenChecker sut = new TokenChecker(mockHttpResponse);
		Assert.assertTrue(!sut.ltpaTokenExists());
	}

	@Test
	public void should_return_false_if_header_is_null()
	{
		HttpResponse mockHttpResponse = Mockito.mock(HttpResponse.class);
		Header[] headers = { null };

		Header ltpaHeader = Mockito.mock(Header.class);
		Mockito.when(ltpaHeader.getName()).thenReturn(null);
		headers[0] = ltpaHeader;

		Mockito.when(mockHttpResponse.getAllHeaders()).thenReturn(headers);

		TokenChecker sut = new TokenChecker(mockHttpResponse);
		Assert.assertTrue(!sut.ltpaTokenExists());
	}

	@Test
	public void should_return_false_if_httpResponse_is_null()
	{
		HttpResponse mockHttpResponse = null;
		TokenChecker sut = new TokenChecker(mockHttpResponse);
		Assert.assertTrue(!sut.ltpaTokenExists());
	}

	@Test
	public void should_return_false_if_firstHeader_is_null()
	{
		HttpResponse mockHttpResponse = Mockito.mock(HttpResponse.class);
		Header[] headers = { null };

		Mockito.when(mockHttpResponse.getAllHeaders()).thenReturn(headers);

		TokenChecker sut = new TokenChecker(mockHttpResponse);
		Assert.assertTrue(!sut.ltpaTokenExists());
	}

	@Test
	public void should_return_false_if_secondHeader_is_null()
	{
		HttpResponse mockHttpResponse = Mockito.mock(HttpResponse.class);
		Header[] headers = { null, null };

		Header firstHeader = Mockito.mock(Header.class);
		Mockito.when(firstHeader.getName()).thenReturn("Set-Cookie");
		Mockito.when(firstHeader.getValue()).thenReturn("ltpatoken2=");
		headers[0] = firstHeader;
		headers[1] = null;

		Mockito.when(mockHttpResponse.getAllHeaders()).thenReturn(headers);

		TokenChecker sut = new TokenChecker(mockHttpResponse);
		Assert.assertTrue(!sut.ltpaTokenExists());
	}
}
