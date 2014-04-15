package com.ctfs.WICI.Servlet;

import java.sql.Connection;
import java.sql.SQLException;
import javax.naming.NamingException;

import com.ctfs.WICI.Helper.DatabaseConnectionFactory;
import com.ctfs.WICI.Helper.IDatabaseConnectionHelper;

public abstract class DatabaseAccessServlet extends WICIServlet implements IDatabaseConnectionHelper
{
	private static final long serialVersionUID = 3566434571714724885L;

	public Connection getOracleDatabaseConnection() throws SQLException, NamingException
	{
		return new DatabaseConnectionFactory().getOracleDatabaseConnection();
	}
}
