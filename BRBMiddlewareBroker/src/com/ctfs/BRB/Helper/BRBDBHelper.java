package com.ctfs.BRB.Helper;

import java.math.BigDecimal;
import java.sql.Clob;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.logging.Logger;

import javax.naming.NamingException;
import javax.sql.DataSource;

import com.ctfs.BRB.Model.DictionaryInfo;
import com.ctfs.BRB.dblayer.ApplicationTransactionTableEntity;
import com.ctfs.BRB.dblayer.CustomerTransactionTableEntity;
import com.ctfs.BRB.dblayer.interfaces.IAppTransactionTableEntity;
import com.ctfs.BRB.dblayer.interfaces.ICustomerTransactionTableEntity;
import com.ctfs.BRB.dblayer.interfaces.IStateTrackerTableEntity;
import com.ctfs.BRB.exceptions.SQLInjectionAttackException;

public class BRBDBHelper
{
	static Logger log = Logger.getLogger(BRBDBHelper.class.getName());

	static final String EMPTY_STRING = "";

	public static final String CUSTOMERTRANSACTION_TABLENAME = "webic_app.CUSTOMERTRANSACTION";
	public static final String APPLICATIONTRANSACTION_TABLENAME = "webic_app.APPLICATIONTRANSACTION";
	public static final String STATETRACKER_TABLENAME = "webic_app.BRB_STATE_TRACKER";

	/**
	 * USE IT ONLY FOR UNIT TESTS
	 */
	private Connection mockedConnection;

	protected Connection connectToDB(boolean enableAutoCommit) throws SQLException, NamingException
	{
		if (mockedConnection != null)
		{
			return mockedConnection;
		}
		String sMethod = "[connectToDB] ";
		log.info(sMethod + "::Called::");

		log.info("Start connectToDB process...");
		javax.naming.Context ctx = new javax.naming.InitialContext();
		DataSource dataSource = (DataSource) ctx.lookup("java:comp/env/jdbc/WebICDataSource");

		Connection connection = dataSource.getConnection();
		connection.setAutoCommit(enableAutoCommit);

		return connection;
	}

	protected void closeDBConnection(Connection connection)
	{
		String sMethod = "[closeDBConnection] ";
		log.info(sMethod + "::Called::");

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

	protected void DisposeBDResources(Connection connection, PreparedStatement preparedStatement, ResultSet resultSet)
	{
		// Keep resource dispose order
		closeResultSet(resultSet);
		closePreparedStatement(preparedStatement);
		closeDBConnection(connection);
	}

	public String insertIntoCustomerTransactionTable(ICustomerTransactionTableEntity customerTransactionTblEntity) throws SQLException
	{
		String sMethod = "[insertIntoCustomerTransactionTable] ";
		log.info(sMethod + "::Called::");

		String transactionId = "";
		
		if(customerTransactionTblEntity != null && customerTransactionTblEntity.getTransactionId() != null && customerTransactionTblEntity.getTransactionId().toLowerCase().contains("moa") ) {
			transactionId = customerTransactionTblEntity.getTransactionId();
		}
		
		else
		{
			// Create transaction id
			transactionId = initializeTransactionIdByTimeStamp(customerTransactionTblEntity);
		}
		
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		try
		{
			connection = connectToDB(false);

			String insertStatement = "INSERT INTO "
					+ CUSTOMERTRANSACTION_TABLENAME
					+ " (TRANSACTIONID, PROFILEID, EMAIL, FIRSTNAME, LASTNAME, ADDRESSLINE1, ADDRESSLINE2, CITY, PROVINCE, POSTALCODE, PHONENUMBER, LOYALTYNUMBER, LOYALTYPROGRAM, TRANSACTIONDATE, REQUESTINGSYSTEM)"
					+ " VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

			preparedStatement = connection.prepareStatement(insertStatement);

			// Mapping the entity on query
			preparedStatement.setString(1, transactionId);
			preparedStatement.setString(2, customerTransactionTblEntity.getEcommCustomerId());
			preparedStatement.setString(3, customerTransactionTblEntity.getEmail());
			preparedStatement.setString(4, customerTransactionTblEntity.getFirstName());
			preparedStatement.setString(5, customerTransactionTblEntity.getLastName());
			preparedStatement.setString(6, customerTransactionTblEntity.getAddressLine1());
			preparedStatement.setString(7, customerTransactionTblEntity.getAddressLine2());
			preparedStatement.setString(8, customerTransactionTblEntity.getCity());
			preparedStatement.setString(9, customerTransactionTblEntity.getProvince());
			preparedStatement.setString(10, customerTransactionTblEntity.getPostalCode());
			preparedStatement.setString(11, customerTransactionTblEntity.getPhone());
			preparedStatement.setString(12, customerTransactionTblEntity.getLoyaltyNumber());
			preparedStatement.setString(13, customerTransactionTblEntity.getLoyaltyProgram());
			preparedStatement.setTimestamp(14, customerTransactionTblEntity.getTransactionDate());
			preparedStatement.setString(15, customerTransactionTblEntity.getRequestingSystem());

			preparedStatement.executeUpdate();
			connection.commit();
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, null);
		}

		return transactionId;
	}

	public ICustomerTransactionTableEntity getFromCustomerTransactionTable(String transactionId) throws SQLException
	{
		String sMethod = "[getFromCustomerTransactionTable] ";
		log.info(sMethod + "::Called::");

		ICustomerTransactionTableEntity brbEcomSeedTable = new CustomerTransactionTableEntity();

		validateTransactionId(transactionId);
		String sql = "SELECT TRANSACTIONID, PROFILEID, EMAIL, FIRSTNAME, LASTNAME, ADDRESSLINE1, ADDRESSLINE2, CITY, PROVINCE, POSTALCODE, PHONENUMBER, LOYALTYNUMBER, LOYALTYPROGRAM, REQUESTINGSYSTEM, TRANSACTIONDATE "
				+ "FROM " + CUSTOMERTRANSACTION_TABLENAME + " WHERE TRANSACTIONID = ?";

		log.info(sMethod + "::SQL::" + sql);
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);

			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, transactionId);

			// Get only the first row from the table
			preparedStatement.setMaxRows(1);

			// Execute a query
			resultSet = preparedStatement.executeQuery();

			// Extract data from result set
			while (resultSet.next())
			{
				// Retrieve session info
				brbEcomSeedTable.setTransactionId(resultSet.getString("TRANSACTIONID"));

				// Retrieve customer data
				brbEcomSeedTable.setEcommCustomerId(resultSet.getString("PROFILEID"));
				brbEcomSeedTable.setEmail(resultSet.getString("EMAIL"));
				brbEcomSeedTable.setFirstName(resultSet.getString("FIRSTNAME"));
				brbEcomSeedTable.setLastName(resultSet.getString("LASTNAME"));
				brbEcomSeedTable.setAddressLine1(resultSet.getString("ADDRESSLINE1"));
				brbEcomSeedTable.setAddressLine2(resultSet.getString("ADDRESSLINE2"));
				brbEcomSeedTable.setCity(resultSet.getString("CITY"));
				brbEcomSeedTable.setProvince(resultSet.getString("PROVINCE"));
				brbEcomSeedTable.setPostalCode(resultSet.getString("POSTALCODE"));
				brbEcomSeedTable.setPhone(resultSet.getString("PHONENUMBER"));
				brbEcomSeedTable.setLoyaltyNumber(resultSet.getString("LOYALTYNUMBER"));
				brbEcomSeedTable.setLoyaltyProgram(resultSet.getString("LOYALTYPROGRAM"));
				brbEcomSeedTable.setRequestingSystem(resultSet.getString("REQUESTINGSYSTEM"));
				brbEcomSeedTable.setTransactionDate(resultSet.getTimestamp("TRANSACTIONDATE"));
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

		return brbEcomSeedTable;
	}

	/**
	 * @param transactionId
	 *            - string parameter according to which data will be deleted
	 * @return number of rows deleted
	 * @throws SQLInjectionAttackException
	 */
	public void deleteFromCustomerTransactionTable(String transactionId) throws SQLException, NamingException, SQLInjectionAttackException
	{
		String sMethod = "[deleteFromCustomerTransactionTable] ";
		log.info(sMethod + "::Called::");
		int rowDeleted = 0;
		// Create sql statement
		validateTransactionId(transactionId);
		String sql = "DELETE FROM " + CUSTOMERTRANSACTION_TABLENAME + " WHERE TRANSACTIONID = ?";

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, transactionId);
			rowDeleted = preparedStatement.executeUpdate();
			if (rowDeleted == 0)
			{// it`s mean that nothing was deleted
				throw new SQLInjectionAttackException(String.format("SQL Injection Attack occurred. Preventing the following attack vector: %s", transactionId));
			}
			connection.commit();
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, null);
		}
	}

	public String insertIntoApplicationTransactionTable(IAppTransactionTableEntity appTransactionTableEntity) throws Exception
	{
		String sMethod = "[insertIntoApplicationTransactionTable] ";
		log.info(sMethod + "::Called::");

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		try
		{
			connection = connectToDB(false);

			String insertStatement = "INSERT INTO " + APPLICATIONTRANSACTION_TABLENAME
					+ " (TRANSACTIONID, SESSIONID, EXAMINTERACTIONID, ACCOUNTAPPLICATIONDATA, SCOREIDENTITYEXAMRESPONSE, TOKENIZATIONREFERENCENUMBER )" + " VALUES (?, ?, ?, ?, ?, ?)";

			preparedStatement = connection.prepareStatement(insertStatement);

			// Mapping the entity on query
			preparedStatement.setString(1, appTransactionTableEntity.getTransactionId());
			preparedStatement.setString(2, appTransactionTableEntity.getSessionId());
			preparedStatement.setString(3, appTransactionTableEntity.getExamInteractionId());

			// Insert CLOB data via CharacterStream
			/*
			 * String requestData =
			 * appTransactionTableEntity.getAccountAppData(); Reader clobReader
			 * = new
			 * StringReader(appTransactionTableEntity.getAccountAppData());
			 * insertData.setCharacterStream(4, clobReader,
			 * requestData.length()); //clobReader.close();
			 */

			// Insert CLOB data as Object according IMB documentations
			preparedStatement.setObject(4, appTransactionTableEntity.getAccountAppData());
			preparedStatement.setObject(5, appTransactionTableEntity.getScoreIdentityExamResponse());
			preparedStatement.setString(6, appTransactionTableEntity.getReferenceNumber());
			
			preparedStatement.executeUpdate();
			connection.commit();
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, null);
		}

		return appTransactionTableEntity.getTransactionId();
	}

	public String mergeIntoApplicationTransactionTable(IAppTransactionTableEntity appTransactionTableEntity) throws Exception
	{
		String sMethod = "[mergeIntoApplicationTransactionTable] ";
		log.info(sMethod + "::Called::");

		String transactionId = null;

		try
		{
			// Get transaction ID
			transactionId = appTransactionTableEntity.getTransactionId();
		
				// Check if table contains needed record
				IAppTransactionTableEntity appTransactionTblEntity = getFromApplicationTransactionTable(transactionId);

				if (isRecordExistInApplicationTransaction(appTransactionTblEntity))
				{
					log.info(sMethod + "....Update");
					// Update table record
					updateApplicationTransactionTable(appTransactionTableEntity);
				}
				else
				{
					log.info(sMethod + "....Insert");
					// Insert new record into table
					insertIntoApplicationTransactionTable(appTransactionTableEntity);
				}
			
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
		}

		return transactionId;
	}

	public String updateApplicationTransactionTable(IAppTransactionTableEntity appTransactionTableEntity) throws Exception
	{
		String sMethod = "[updateApplicationTransactionTable] ";
		log.info(sMethod + "::Called::");

		String transactionId = appTransactionTableEntity.getTransactionId();

		validateTransactionId(transactionId);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		try
		{
			connection = connectToDB(false);

			// Define base template
			String baseTemplate = " UPDATE " + APPLICATIONTRANSACTION_TABLENAME + " SET ";

			Map<Integer, Object> dictionary = new HashMap<Integer, Object>();
			StringBuffer mergeStatementBuffer = new StringBuffer(baseTemplate);
			int index = 1;

			if (isStringValid(appTransactionTableEntity.getSessionId()))
			{
				mergeStatementBuffer.append(" SESSIONID = ?,");
				dictionary.put(index, appTransactionTableEntity.getSessionId());
				index++;
			}

			if (isStringValid(appTransactionTableEntity.getExamInteractionId()))
			{
				mergeStatementBuffer.append(" EXAMINTERACTIONID = ?,");
				dictionary.put(index, appTransactionTableEntity.getExamInteractionId());
				index++;
			}

			if (isStringValid(appTransactionTableEntity.getAccountAppData()))
			{
				mergeStatementBuffer.append(" ACCOUNTAPPLICATIONDATA = ?,");
				dictionary.put(index, appTransactionTableEntity.getAccountAppData());
				index++;
			}

			if (isStringValid(appTransactionTableEntity.getScoreIdentityExamResponse()))
			{
				mergeStatementBuffer.append(" SCOREIDENTITYEXAMRESPONSE = ?,");
				dictionary.put(index, appTransactionTableEntity.getScoreIdentityExamResponse());
				index++;
			}

			if (isStringValid(appTransactionTableEntity.getReferenceNumber()))
			{
				mergeStatementBuffer.append(" TOKENIZATIONREFERENCENUMBER = ? ");
				dictionary.put(index, appTransactionTableEntity.getReferenceNumber());
			}

			int lastIndex = mergeStatementBuffer.lastIndexOf(",");
			if (lastIndex >= mergeStatementBuffer.length() - 1)
			{
				mergeStatementBuffer.deleteCharAt(lastIndex);
			}

			// Get PrepareStatement
			preparedStatement = connection.prepareStatement(mergeStatementBuffer.toString());

			// Mapping the entity on query
			for (Map.Entry<Integer, Object> entry : dictionary.entrySet())
			{
				preparedStatement.setObject(entry.getKey(), entry.getValue());
			}

			preparedStatement.executeUpdate();
			connection.commit();
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, null);
		}

		return appTransactionTableEntity.getTransactionId();
	}

	public IAppTransactionTableEntity getFromApplicationTransactionTable(String transactionId) throws SQLException
	{
		String sMethod = "[getFromApplicationTransactionTable] ";
		log.info(sMethod + "::Called::");

		validateTransactionId(transactionId);

		IAppTransactionTableEntity appTransactionTableEntity = null;

		// Create sql statement
		validateTransactionId(transactionId);
		String sql = "SELECT TRANSACTIONID, SESSIONID, EXAMINTERACTIONID, ACCOUNTAPPLICATIONDATA, TOKENIZATIONREFERENCENUMBER, SCOREIDENTITYEXAMRESPONSE " + "FROM " + APPLICATIONTRANSACTION_TABLENAME
				+ " WHERE TRANSACTIONID = ?";

		log.info(sMethod + "::SQL::" + sql);
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);

			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, transactionId);

			// Get only the first row from the table
			preparedStatement.setMaxRows(1);

			// Execute a query
			resultSet = preparedStatement.executeQuery();

			appTransactionTableEntity = new ApplicationTransactionTableEntity();

			// Extract data from result set
			while (resultSet.next())
			{
				// Retrieve session info
				appTransactionTableEntity.setTransactionId(resultSet.getString("TRANSACTIONID"));

				// Retrieve application transaction data
				appTransactionTableEntity.setSessionId(resultSet.getString("SESSIONID"));
				appTransactionTableEntity.setExamInteractionId(resultSet.getString("EXAMINTERACTIONID"));
				appTransactionTableEntity.setReferenceNumber(resultSet.getString("TOKENIZATIONREFERENCENUMBER"));

				// Save CLOB as string
				Clob accountAppDataClob = resultSet.getClob("ACCOUNTAPPLICATIONDATA");
				appTransactionTableEntity.setAccountAppData(accountAppDataClob.getSubString(1, (int) accountAppDataClob.length()));
				
				// Save CLOB as string
				Clob scoreExamDataClob = resultSet.getClob("SCOREIDENTITYEXAMRESPONSE");
				appTransactionTableEntity.setScoreIdentityExamResponse(scoreExamDataClob.getSubString(1, (int) scoreExamDataClob.length()));
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

		return appTransactionTableEntity;
	}

	public void insertEmptyRecordIntoStateTrackerTable(IStateTrackerTableEntity stateTrackerTableEntity)
	{
		String sMethod = "[insertEmptyRecordIntoStateTrackerTable] ";
		log.info(sMethod + "::Called::");

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		try
		{
			connection = connectToDB(false);

			Timestamp timestamp = new java.sql.Timestamp(new Date().getTime());
			String sql = "INSERT INTO " + STATETRACKER_TABLENAME + " ( AppId,  StartDateTime) VALUES (?,?)";
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, stateTrackerTableEntity.getAppId());
			preparedStatement.setTimestamp(2, timestamp);
			preparedStatement.executeUpdate();
			log.info(preparedStatement.toString());
			connection.commit();
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, null);
		}
	}

	public String initializeTransactionIdByTimeStamp(ICustomerTransactionTableEntity customerTransactionTblEntity)
	{
		String sMethod = "[initializeTransactionIdByTimeStamp] ";
		log.info(sMethod + "::Called::");

		validateEcomSeedTable(customerTransactionTblEntity);

		// Define Transaction ID variable
		String transactionId = null;

		// Initialize transaction id
		Timestamp timestamp = new Timestamp(new Date().getTime());
		transactionId = String.format("%s%s", UUID.randomUUID().toString().replaceAll("-", EMPTY_STRING), timestamp.getTime());
		customerTransactionTblEntity.setTransactionId(transactionId);

		return transactionId;
	}

	public void updateStateTrackerTable(IStateTrackerTableEntity stateTrackerTableEntity)
	{
		String sMethod = "[updateStateTrackerTable] ";
		log.info(sMethod + "::Called::");

		Holder holder = buildUpdateSqlQueryForStateTracker(stateTrackerTableEntity);
		// buildUpdateSqlQuery(stateTrackerTableEntity);
		PreparedStatement preparedStatement = null;
		String sql = holder.getSqlValue();
		List<Pair> list = holder.getList();
		Connection connection = null;

		try
		{
			connection = connectToDB(false);

			preparedStatement = connection.prepareStatement(sql);
			for (int i = 0; i < list.size(); i++)
			{
				Pair pair = list.get(i);
				if (IStateTrackerTableEntity.ABANDONSCREENID_COLUMN_NAME.equalsIgnoreCase(pair.key))
				{
					preparedStatement.setBigDecimal(i + 1, (BigDecimal) pair.value);
				}
				else if (IStateTrackerTableEntity.APPSTATEID_COLUMN_NAME.equalsIgnoreCase(pair.key))
				{
					preparedStatement.setBigDecimal(i + 1, (BigDecimal) pair.value);
				}
				else if (IStateTrackerTableEntity.ENDDATETIME_COLUMN_NAME.equalsIgnoreCase(pair.key))
				{
					preparedStatement.setTimestamp(i + 1, (Timestamp) pair.value);
				}
				else if (IStateTrackerTableEntity.STARTDATETIME_COLUMN_NAME.equalsIgnoreCase(pair.key))
				{
					preparedStatement.setTimestamp(i + 1, (Timestamp) pair.value);
				}
				else if (IStateTrackerTableEntity.APPID_COLUMN_NAME.equalsIgnoreCase(pair.key))
				{
					preparedStatement.setString(i + 1, (String) pair.value);
				}
			}
			preparedStatement.executeUpdate();
			log.info(preparedStatement.toString());
			connection.commit();
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, null);
		}
	}

	// US4281
	public DictionaryInfo getLatestDictionaryInfo() throws SQLException
	{
		String sMethod = "[getLatestDictionaryInfo] ";
		log.info(sMethod + "::Called::");

		DictionaryInfo dictInfo = new DictionaryInfo();

		String sql = "SELECT CONFIG_NAME, CONFIG_VALUE FROM BRB_CONFIG WHERE CONFIG_NAME IN ('OLDER_DICTIONARY_ALLOWABLE', 'DICTIONARY_VERSION', 'DICTIONARY_CMS_URL_EN', 'DICTIONARY_CMS_URL_FR')";
		String configValue = null;
		String configName = null;
		
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setMaxRows(4);
			resultSet = preparedStatement.executeQuery();

			while (resultSet.next())
			{
				configName = resultSet.getString("CONFIG_NAME");
				configValue = resultSet.getString("CONFIG_VALUE");
				
				log.info(sMethod + "::Called:: configName = " + configName + ", configValue = " + configValue);				
				
				if( configName.equals("OLDER_DICTIONARY_ALLOWABLE")) dictInfo.setOlderDictionaryAllowable(new Boolean(configValue));
				if( configName.equals("DICTIONARY_VERSION")) dictInfo.setLatestDictionaryVersion(configValue);
				if( configName.equals("DICTIONARY_CMS_URL_EN")) dictInfo.setDictionaryURLEnglish(configValue);
				if( configName.equals("DICTIONARY_CMS_URL_FR")) dictInfo.setDictionaryURLFrench(configValue);				
			}
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
			return dictInfo;
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, resultSet);
		}

		return dictInfo;
	}
	
	public Holder buildUpdateSqlQueryForStateTracker(IStateTrackerTableEntity stateTrackerTableEntity)
	{
		String sMethod = "[buildUpdateSqlQuery] ";
		log.info(sMethod + "::Called::");

		Holder dataHolder = new Holder();
		String endSufix = " =?";
		String separator = ", ";
		boolean lastIndexFlag = false;
		String updateSql = " UPDATE " + STATETRACKER_TABLENAME + " SET ";
		StringBuilder sqlBuilder = new StringBuilder(updateSql);
		BigDecimal abandonScreenId = stateTrackerTableEntity.getAbandonScreenId();
		if (isValidValue(abandonScreenId))
		{
			sqlBuilder.append(IStateTrackerTableEntity.ABANDONSCREENID_COLUMN_NAME + endSufix);
			dataHolder.getList().add(new Pair(IStateTrackerTableEntity.ABANDONSCREENID_COLUMN_NAME, abandonScreenId));
			lastIndexFlag = true;
		}
		BigDecimal appStateId = stateTrackerTableEntity.getAppStateId();
		if (isValidValue(appStateId))
		{
			if (lastIndexFlag)
			{
				sqlBuilder.append(separator);
			}
			sqlBuilder.append(IStateTrackerTableEntity.APPSTATEID_COLUMN_NAME + endSufix);
			dataHolder.getList().add(new Pair(IStateTrackerTableEntity.APPSTATEID_COLUMN_NAME, appStateId));
			lastIndexFlag = true;
		}
		Timestamp endDateTime = stateTrackerTableEntity.getEndDateTime();
		if (isValidValue(endDateTime))
		{
			if (lastIndexFlag)
			{
				sqlBuilder.append(separator);
			}
			sqlBuilder.append(IStateTrackerTableEntity.ENDDATETIME_COLUMN_NAME + endSufix);
			dataHolder.getList().add(new Pair(IStateTrackerTableEntity.ENDDATETIME_COLUMN_NAME, endDateTime));
			lastIndexFlag = true;
		}
		Timestamp startDateTime = stateTrackerTableEntity.getStartDateTime();
		if (isValidValue(startDateTime))
		{
			if (lastIndexFlag)
			{
				sqlBuilder.append(separator);
			}
			sqlBuilder.append(IStateTrackerTableEntity.STARTDATETIME_COLUMN_NAME + endSufix);
			dataHolder.getList().add(new Pair(IStateTrackerTableEntity.STARTDATETIME_COLUMN_NAME, startDateTime));
			lastIndexFlag = true;
		}
		String appId = stateTrackerTableEntity.getAppId();
		if (!isValidValue(appId) || appId.isEmpty())
			throw new IllegalArgumentException(IStateTrackerTableEntity.APPID_COLUMN_NAME + " is primary key, should exist.");
		sqlBuilder.append(" WHERE " + IStateTrackerTableEntity.APPID_COLUMN_NAME + endSufix);
		dataHolder.getList().add(new Pair(IStateTrackerTableEntity.APPID_COLUMN_NAME, appId));
		dataHolder.setSqlValue(sqlBuilder.toString());

		return dataHolder;
	}

	private boolean isValidValue(Object reference)
	{
		return reference != null;
	}

	public static class Holder
	{
		private String sqlValue;
		private final List<Pair> list = new LinkedList<BRBDBHelper.Pair>();

		public String getSqlValue()
		{
			return sqlValue;
		}

		public void setSqlValue(String sqlValue)
		{
			this.sqlValue = sqlValue;
		}

		public List<Pair> getList()
		{
			return list;
		}
	}

	private static class Pair
	{
		private final String key;
		private final Object value;

		public Pair(String key, Object value)
		{
			this.key = key;
			this.value = value;
		}
	}

	private boolean isStringValid(String data)
	{
		return data != null && !data.isEmpty();
	}

	private void validateEcomSeedTable(ICustomerTransactionTableEntity customerTransactionTblEntity)
	{
		if (customerTransactionTblEntity == null || customerTransactionTblEntity.getEcommCustomerId() == null || customerTransactionTblEntity.getEcommCustomerId() == null
				|| customerTransactionTblEntity.getEcommCustomerId().isEmpty())
		{
			throw new IllegalArgumentException("Invalid 'CustomerTransactionTableEntity' model!");
		}
	}

	private void validateApplicationTransaction(IAppTransactionTableEntity appTransactionTableEntity)
	{
		if (isRecordExistInApplicationTransaction(appTransactionTableEntity))
		{
			throw new IllegalArgumentException("Invalid 'AppTransactionTableEntity' model!");
		}
	}

	private boolean isRecordExistInApplicationTransaction(IAppTransactionTableEntity appTransactionTableEntity)
	{
		if (appTransactionTableEntity == null || appTransactionTableEntity.getTransactionId() == null || appTransactionTableEntity.getTransactionId().isEmpty())
		{
			return false;
		}

		return true;
	}

	private void validateTransactionId(String transactionId)
	{
		if (transactionId == null || transactionId.isEmpty())
		{
			throw new IllegalArgumentException("Invalid 'TransactionID' parameter!");
		}
	}

	public void setConnection(Connection mockedConnection)
	{
		this.mockedConnection = mockedConnection;
	}
}
