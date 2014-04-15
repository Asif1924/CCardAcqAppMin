package com.ctfs.WICI.TestCase;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.junit.Assert;
import org.junit.Test;
import org.mockito.Mockito;
import com.ctfs.WICI.Servlet.VersionServlet;

public class VersionServletTest
{

	@Test
	public void should_return_something()
	{
		HttpServletRequest mockHttpServletRequest = Mockito.mock(HttpServletRequest.class);
		HttpServletResponse mockHttpServletResponse = Mockito.mock(HttpServletResponse.class);
		/*
		 * Mockito.when(mockHttpServletResponse.getWriter()).thenReturn(true);
		 *
		 * VersionServlet sut = new VersionServlet(); try {
		 * sut.service(mockHttpServletRequest, mockHttpServletResponse);
		 * Assert.assertNull(mockHttpServletResponse); } catch (ServletException
		 * e) { e.printStackTrace(); } catch (IOException e) {
		 * e.printStackTrace(); }
		 */
	}
}
