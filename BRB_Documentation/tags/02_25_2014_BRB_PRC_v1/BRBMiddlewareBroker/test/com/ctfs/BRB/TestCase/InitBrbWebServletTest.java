package com.ctfs.BRB.TestCase;

import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.NamingException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.junit.After;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import com.ctfs.BRB.Helper.BRBDBHelper;
import com.ctfs.BRB.Model.BRBCustomerTransactionAdapter;
import com.ctfs.BRB.Servlet.InitBRBWebServlet;


public class InitBrbWebServletTest extends BaseTest
{

	private final static String value = "expected_value";

	@Before
	public void setUp() throws IOException, SQLException, NamingException
	{
		mockHttpServletRequest = mock(HttpServletRequest.class);
		mockHttpServletResponse = mock(HttpServletResponse.class);

		writer = new PrintWriter(OUTPUT_TXT);
		when(mockHttpServletResponse.getWriter()).thenReturn(writer);
	}

	@After
	public void tearDown()
	{
		writer.flush();
		new File(OUTPUT_TXT).delete();
	}

	@Ignore @Test
	public void test_for_BRBCustomerTransactionTable_method_isTableValid_check_for_not_valid_table() throws SQLException, NamingException, ServletException, IOException
	{
		InitBRBWebServlet servlet = new InitBRBWebServlet();
		BRBDBHelper brbDBHelper = mock(BRBDBHelper.class);		
		BRBCustomerTransactionAdapter transTable = mock(BRBCustomerTransactionAdapter.class);
		//when(brbDBHelper.getDataFromCustomerTransactionTbl(value)).thenReturn(transTable);
		//when(transTable.isTableValid()).thenReturn(Boolean.FALSE);
		servlet.setDbHelper(brbDBHelper);
		when(mockHttpServletRequest.getParameter("transactionId")).thenReturn(value);
		// Invalid Transaction ID!
		servlet.doGet(mockHttpServletRequest, mockHttpServletResponse);
		assertTrue(FileUtils.readFileToString(new File(OUTPUT_TXT), "UTF-8").contains("Invalid Transaction ID!"));
	}
}
