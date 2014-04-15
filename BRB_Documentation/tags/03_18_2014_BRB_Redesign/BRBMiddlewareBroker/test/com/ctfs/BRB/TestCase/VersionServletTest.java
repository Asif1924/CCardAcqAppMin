package com.ctfs.BRB.TestCase;

import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.ctfs.BRB.Servlet.VersionServlet;

public class VersionServletTest extends BaseTest
{
	@Before
	public void setUp() throws IOException
	{
		mockHttpServletRequest = mock(HttpServletRequest.class);
		mockHttpServletResponse = mock(HttpServletResponse.class);
		writer = new PrintWriter("somefile.txt");
		when(mockHttpServletResponse.getWriter()).thenReturn(writer);
	}

	@After
	public void tearDown()
	{
		writer.flush();
		new File("somefile.txt").delete();
	}

	@Test
	public void will_test_version_servlet_for_it_possibility_to_return_something() throws ServletException, IOException
	{
		VersionServlet servlet = new VersionServlet();
		servlet.setOwnServletVersion("mock_version");
		servlet.doGet(mockHttpServletRequest, mockHttpServletResponse);
		assertTrue(FileUtils.readFileToString(new File("somefile.txt"), "UTF-8").contains("mock_version"));
	}
}
