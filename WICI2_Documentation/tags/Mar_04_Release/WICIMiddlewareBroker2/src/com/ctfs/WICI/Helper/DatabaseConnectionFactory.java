package com.ctfs.WICI.Helper;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.logging.Logger;
import javax.naming.NamingException;
import javax.sql.DataSource;

public class DatabaseConnectionFactory
{
	static Logger log = Logger.getLogger(DatabaseConnectionFactory.class.getName());

	public Connection getOracleDatabaseConnection() throws SQLException, NamingException
	{
		String sMethod = this.getClass().getName() + "[getOracleDatabaseConnection] ";
		log.info(sMethod);

		// Set up DB connection
		javax.naming.Context ctx = new javax.naming.InitialContext();
		DataSource dataSource = (DataSource) ctx.lookup("java:comp/env/jdbc/WebICDataSource");

		return dataSource.getConnection();
	}
}
