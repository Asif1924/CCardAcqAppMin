package com.ctfs.WICI.Helper;

import java.io.Reader;
import java.io.StringReader;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Logger;

import javax.naming.NamingException;

import com.ctfs.WICI.AppConstants;
import com.ctfs.WICI.Servlet.Model.BaseModel;
import com.ctfs.WICI.Servlet.Model.CreditCardApplicationData;
import com.ctfs.WICI.dblayer.ConfigurationTableEntity;
import com.ctfs.WICI.dblayer.interfaces.IConfigurationTableEntity;

public class WICIDBHelper
{
	static Logger log = Logger.getLogger(WICIDBHelper.class.getName());
	static final String EMPTY_STRING = "";
	public static final String WICICONFIGTBL = "webic_app.WICI_CONFIG";
	public static final String WICIREQUESTQUEUETBL = "WICI_REQUESTQUEUE";
	public static final String WICI_WHITELIST_TABLE = "WICI_WHITELIST";

	static final String CONFIG_NAME_APPROVED_APK_VERSION = "APPROVED_APK_VERSION";
	static final String CONFIG_NAME_AUTHFIELD_CHECK_ENABLED = "AUTHFIELD_CHECK_ENABLED"; //AUTHFIELD_CHECK_ENABLED
	static final String TRANSACTION_TYPE = "ACCOUNTAPPLICATION";

	protected Connection connectToDB(boolean enableAutoCommit) throws SQLException, NamingException
	{
		if(mockedConnection != null){
			return mockedConnection;
		}
		String sMethod = "[connectToDB] ";
		log.info(sMethod + "::Called::");

		log.info("Start connectToDB process...");

		// Get connection
		Connection connection = new DatabaseConnectionFactory().getOracleDatabaseConnection();
		connection.setAutoCommit(enableAutoCommit);

		return connection;
	}

	protected void closeDBConnection(Connection connection)
	{
		String sMethod = "[closeDBConnection] ";
		log.info(sMethod + "::Called::");

		// Close DB connection
		try
		{
			if (connection != null)
			{
				connection.setAutoCommit(true);
				connection.close();
			}
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
		}
	}

	protected void closePreparedStatement(PreparedStatement preparedStatement)
	{
		String sMethod = "[closePreparedStatement] ";
		log.info(sMethod + "::Called::");

		// Close prepared statement
		try
		{
			if (preparedStatement != null)
			{
				preparedStatement.close();
			}
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
		}
	}

	protected void closeResultSet(ResultSet resultSet)
	{
		String sMethod = "[closeResultSet] ";
		log.info(sMethod + "::Called::");

		// Close result set
		try
		{
			if (resultSet != null)
			{
				resultSet.close();
			}
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
		}
	}

	protected void DisposeBDResources (Connection connection, PreparedStatement preparedStatement, ResultSet resultSet) {
		// Keep resource dispose order
		closeResultSet(resultSet);
		closePreparedStatement(preparedStatement);
		closeDBConnection(connection);
	}

	/*
	 * START WiciConfigurationTable Logic
	 */

	public IConfigurationTableEntity getApprovedAPKVersion(String apkVersion) throws SQLException
	{
		String sMethod = "[getApprovedAPKVersion] ";
		log.info(sMethod + "::Called with parameter apkVersion:" + apkVersion);

		IConfigurationTableEntity configurationTableEntity = null;

		// Create sql statement
		String sql = "SELECT CONFIG_NAME, CONFIG_VALUE FROM " + WICICONFIGTBL + " WHERE CONFIG_VALUE = ? AND CONFIG_NAME = ?";

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);

			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, apkVersion);
			preparedStatement.setString(2, CONFIG_NAME_APPROVED_APK_VERSION);

			// Get only the first row from the table
			preparedStatement.setMaxRows(1);

			// Execute a query
			resultSet = preparedStatement.executeQuery();

			configurationTableEntity = new ConfigurationTableEntity();

			// Extract data from result set
			while (resultSet.next())
			{
				// Retrieve valid apk version info
				configurationTableEntity.setConfigName(resultSet.getString("CONFIG_NAME"));
				configurationTableEntity.setConfigValue(resultSet.getString("CONFIG_VALUE"));
			}
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, resultSet);
		}

		return configurationTableEntity;
	}

	/*
	 * END WiciConfigurationTable Logic
	 */


	public boolean isDeviceWhitelisted( String argMfgSerial, String argBuildSerial ) throws SQLException
	{
		String sMethod = "[isDeviceWhitelisted] ";
		log.info(sMethod);

		String sql = "SELECT * FROM " + WICI_WHITELIST_TABLE + " WHERE AUTHFIELD_VALUE IN (?,?) AND AUTHORIZED=1";

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, argMfgSerial);
			preparedStatement.setString(2, argBuildSerial);
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();

			if( resultSet.next())
			{
				log.info(sMethod + ":: Device with Manufacturer Serial # of " + argMfgSerial +  " and Build Serial # of " + argBuildSerial + " is whitelisted.");
				return true;
			}
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
			return false;
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, resultSet);
		}

		return false;
	}

	public boolean isAuthfieldCheckEnabled()
	{
		String sMethod = "[getAuthfieldCheck] ";
		log.info(sMethod);

		boolean enabled= false;

		String sql = "SELECT CONFIG_NAME, CONFIG_VALUE FROM " + WICICONFIGTBL + " WHERE CONFIG_NAME = ?";

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);

			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, CONFIG_NAME_AUTHFIELD_CHECK_ENABLED);
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();

			while (resultSet.next())
			{
				enabled = new Boolean(resultSet.getString("CONFIG_VALUE"));
			}
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
			enabled = false;
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, resultSet);
		}

		return enabled;
	}

	/*
	 * START WiciRequestQueueTable Logic
	 */

	public String insertAccountApplicationData (String transactionID, String userID, String requestData) throws Exception{
		String sMethod = "[insertAccountApplicationData] ";
		log.info(sMethod +
				"::Called with parameter transactionID:" + transactionID +
				"::userID::" + userID +
				"::requestData::" + requestData);

		// Create sql statement
		String sql = "INSERT INTO " + WICIREQUESTQUEUETBL + "(TRANSACTION_ID, TRANSACTION_TYPE, TRANSACTION_STATE, USER_ID, PROCESS_DATE, REQUEST_DATA)" + "VALUES (?, ?, ?, ?,(SELECT SYS_EXTRACT_UTC(SYSTIMESTAMP)UTC_SYS FROM DUAL), ?)";

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;

		try
		{
			connection = connectToDB(false);

			preparedStatement = connection.prepareStatement(sql);

			preparedStatement.setString(1, transactionID);
			preparedStatement.setString(2, TRANSACTION_TYPE);
			preparedStatement.setString(3, AppConstants.QUEUE_REQUEST_SUBMIT);
			preparedStatement.setString(4, userID);

			Reader clobReader = new StringReader(requestData);
			preparedStatement.setCharacterStream(5, clobReader, requestData.length());

			preparedStatement.executeUpdate();
			connection.commit();
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
			throw ex;
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, null);
		}

		return transactionID;
	}

	public String updateAccountApplicationData (String argTransactionID, String argAccountApplicationResponse, String argTransactionState) throws Exception{
		String sMethod = "[updateAccountApplicationData] ";
		log.info(sMethod +
				"::Called with parameter argTransactionID:" + argTransactionID +
				"::argAccountApplicationResponse::" + argAccountApplicationResponse +
				"::argTransactionState::" + argTransactionState);

		// Create sql statement
		String sql = "UPDATE " + WICIREQUESTQUEUETBL +
		" SET RESPONSE_DATA = ?, TRANSACTION_STATE = ? WHERE TRANSACTION_ID = ?";

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;

		try
		{
			connection = connectToDB(false);

			preparedStatement = connection.prepareStatement(sql);

			Reader clobReader = new StringReader(argAccountApplicationResponse);
			preparedStatement.setCharacterStream(1, clobReader, argAccountApplicationResponse.length());

			preparedStatement.setString(2, argTransactionState);
			preparedStatement.setString(3, argTransactionID);

			preparedStatement.executeUpdate();
			connection.commit();
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
			throw ex;
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, null);
		}

		return argTransactionID;
	}

	public String getAccountApplicationData (String argTransactionID) throws Exception{
		String sMethod = "[getAccountApplicationData] ";
		log.info(sMethod + "::Called with parameter argTransactionID:" + argTransactionID);

		// Create sql statement
		String sql = "SELECT RESPONSE_DATA FROM " + WICIREQUESTQUEUETBL +
				" WHERE TRANSACTION_ID = ? AND TRANSACTION_TYPE = ? AND TRANSACTION_STATE = ?";
		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		String accountApplicationResponse = "";

		try
		{
			connection = connectToDB(false);

			preparedStatement = connection.prepareStatement(sql);

			preparedStatement.setString(1, argTransactionID);
			preparedStatement.setString(2, TRANSACTION_TYPE);
			preparedStatement.setString(3, AppConstants.QUEUE_REQUEST_COMPLETE);

			// Get only the first row from the table
			preparedStatement.setMaxRows(1);

			// Execute a query
			resultSet = preparedStatement.executeQuery();

			// Extract data from result set
			while (resultSet.next())
			{
				// Retrieve accountApplication response
				accountApplicationResponse = resultSet.getString("RESPONSE_DATA");
			}
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
			throw ex;
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, resultSet);
		}

		return accountApplicationResponse;
	}

	public int deleteAccountApplicationData (String argTransactionID) throws Exception{
		String sMethod = "[deleteAccountApplicationData] ";
		log.info(sMethod + "::Called with parameter argTransactionID:" + argTransactionID);

		// Create sql statement
		String sql = "DELETE FROM " + WICIREQUESTQUEUETBL + " WHERE TRANSACTION_ID=?";
		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		int rowsAffected = 0;

		try
		{
			connection = connectToDB(false);

			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, argTransactionID);

			// Execute a query
			rowsAffected = preparedStatement.executeUpdate();
			connection.commit();
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
			throw ex;
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, resultSet);
		}

		return rowsAffected;
	}

	/*
	 * END WiciRequestQueueTable Logic
	 */

	/**
	 *  USE IT ONLY FOR UNIT TEST`S
	 */
	private Connection mockedConnection;

	public void setConnection(Connection mockedConnection)
	{
		this.mockedConnection = mockedConnection;
	}
}