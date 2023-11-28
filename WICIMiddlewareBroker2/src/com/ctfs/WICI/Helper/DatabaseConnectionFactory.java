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
		log.info("DatabaseConnectionFactory[getOracleDatabaseConnection] ");

		// Set up DB connection
		javax.naming.Context ctx = new javax.naming.InitialContext();
		DataSource dataSource = (DataSource) ctx.lookup("java:comp/env/jdbc/WICIDataSource");

		return dataSource.getConnection();
	}
	
	public Connection getOracleDatabaseConnectionForHealthCheck() throws SQLException, NamingException
	{
		
		// Set up DB connection
		javax.naming.Context ctx = new javax.naming.InitialContext();
		DataSource dataSource = (DataSource) ctx.lookup("java:comp/env/jdbc/WICIDataSource");

		return dataSource.getConnection();
	}
	
	public Connection getOracleTCTSalesDatabaseConnection() throws SQLException, NamingException
	{
		
		log.info("DatabaseConnectionFactory[getOracleTCTSalesDatabaseConnection] ");

		// Set up DB connection
		javax.naming.Context ctx = new javax.naming.InitialContext();
		DataSource dataSource = (DataSource) ctx.lookup("java:comp/env/jdbc/tctSales");

		return dataSource.getConnection();
	}
	
	public Connection getOracleINetDatabaseConnection() throws SQLException, NamingException
	{
		log.info("DatabaseConnectionFactory[getOracleINetDatabaseConnection] ");
		// Set up DB connection
		javax.naming.Context ctx = new javax.naming.InitialContext();
		DataSource dataSource = (DataSource) ctx.lookup("java:comp/env/jdbc/instcrds");
		
		return dataSource.getConnection();
	}
	
}
