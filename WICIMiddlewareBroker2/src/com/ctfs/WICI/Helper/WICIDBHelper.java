package com.ctfs.WICI.Helper;

import static com.ctfs.WICI.AppConstants.ACTIVATED;
import static com.ctfs.WICI.AppConstants.AGENT_FOUND_MSG;
import static com.ctfs.WICI.AppConstants.AGENT_NOT_FOUND;
import static com.ctfs.WICI.AppConstants.AGENT_NOT_FOUND_MSG;
import static com.ctfs.WICI.AppConstants.DELETE_AGENT_FOUND;
import static com.ctfs.WICI.AppConstants.SEARCH_AGENT_FOUND;
import static com.ctfs.WICI.AppConstants.SUPER_ADMIN;
import static com.ctfs.WICI.AppConstants.UPDATE_AGENT_FOUND;

import java.io.Reader;
import java.io.StringReader;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.logging.Logger;

import javax.naming.NamingException;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctc.ctfs.channel.webicuserlocation.WebICCheckLocationRequest;
import com.ctfs.WICI.AppConstants;
import com.ctfs.WICI.Model.AccountApplicationSubmissionRequest;
import com.ctfs.WICI.Model.AccountApplicationSubmissionResponse;
import com.ctfs.WICI.Model.DictionaryInfo;
import com.ctfs.WICI.Model.LoginInfo;
import com.ctfs.WICI.Model.PendingApplicationDatabaseUpdateException;
import com.ctfs.WICI.Model.PendingApplicationRetrievalException;
import com.ctfs.WICI.Model.ReceiptCustomerInfo;
import com.ctfs.WICI.Servlet.Model.CreditCardApplicationData;
import com.ctfs.WICI.Servlet.Model.PendAccountApplicationRequest;
import com.ctfs.WICI.Servlet.Model.PendAccountApplicationResponse;
import com.ctfs.WICI.Servlet.Model.WICICheckLocationResponse;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICILoginResponse;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.ctfs.WICI.dblayer.ConfigurationTableEntity;
import com.ctfs.WICI.dblayer.TabListTableEntity;
import com.ctfs.WICI.dblayer.interfaces.IConfigurationTableEntity;
import com.ctfs.WICI.dblayer.interfaces.ITabListTableEntity;
import com.ctfs.WICI.exception.DuplicateAgentIDException;
import com.google.gson.Gson;

public class WICIDBHelper
{
	static Logger log = Logger.getLogger(WICIDBHelper.class.getName());
	static final String EMPTY_STRING = "";
	//public static final String WICICONFIGTBL = "webic_app.WICI_CONFIG";
	public static final String WICICONFIGTBL = "WICI_CONFIG";
	public static final String WICIREQUESTQUEUETBL = "WICI_REQUESTQUEUE";
	public static final String WICI_WHITELIST_TABLE = "WICI_WHITELIST";
	// US4231
	public static final String WICI_BLACKLIST_TABLE = "WICI_BLACKLIST";
	
	public static final String WICI_TAB_LST_TABLE = "WICI_TAB_LST";
	public static final String CTFS_WICI_USER_INFO = "WICI_USER_INFO";
	public static final String CTFS_WICI_USER_ROLES ="WICI_USER_ROLES";

	static final String CONFIG_NAME_APPROVED_APK_VERSION = "APPROVED_APK_VERSION";
// AUTHFIELD_CHECK_ENABLED
	static final String TRANSACTION_TYPE = "ACCOUNTAPPLICATION";
	private SimpleDateFormat dateFormatter = new SimpleDateFormat("dd-MMM-yy");
	
	


	protected Connection connectToDB(boolean enableAutoCommit) throws SQLException, NamingException
	{
		if (mockedConnection != null)
		{
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
	
	protected Connection connectToTCTSalesDB(boolean enableAutoCommit) throws SQLException, NamingException
	{
		if (mockedConnection != null)
		{
			return mockedConnection;
		}
		String sMethod = "[] ";
		log.info(sMethod + "::Called::");

		log.info("Start connectToTCTSalesDB process...");

		// Get connection
		Connection connection = new DatabaseConnectionFactory().getOracleTCTSalesDatabaseConnection();
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

	protected void DisposeBDResources(Connection connection, PreparedStatement preparedStatement, ResultSet resultSet)
	{
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

	public DictionaryInfo getLatestDictionaryInfo() throws SQLException
	{
		String sMethod = "[getLatestDictionaryInfo] ";
		log.info(sMethod + "::Called::");

		DictionaryInfo dictInfo = new DictionaryInfo();

		String sql = "SELECT CONFIG_NAME, CONFIG_VALUE FROM WICI_CONFIG WHERE CONFIG_NAME IN ('OLDER_DICTIONARY_ALLOWABLE', 'DICTIONARY_VERSION', 'DICTIONARY_CMS_URL_EN', 'DICTIONARY_CMS_URL_FR')";
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

	public boolean isDebugMode(String argMfgSerial, String argBuildSerial) throws SQLException
	{
		String sMethod = "[isDebugMode] ";
		log.info(sMethod);

		String sql = "SELECT * FROM " + WICI_WHITELIST_TABLE + " WHERE UPPER(AUTHFIELD_VALUE) IN (?,?) AND AUTHORIZED=1";
		Integer debugMode = 0;
		
		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, argMfgSerial.toUpperCase());
			preparedStatement.setString(2, argBuildSerial.toUpperCase());
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();

			if (resultSet.next())
			{
				log.info(sMethod + ":: Device Manufacturer Serial # " + argMfgSerial + " and Build Serial # " + argBuildSerial);
				
				debugMode = resultSet.getInt("DEBUG_MODE");
				if(debugMode == 1)
					return true;
				else 
					return false;
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
	
	public boolean isDeviceWhitelisted(String argMfgSerial, String argBuildSerial) throws SQLException
	{
		String sMethod = "[isDeviceWhitelisted] ";
		log.info(sMethod);

		String sql = "SELECT * FROM " + WICI_WHITELIST_TABLE + " WHERE UPPER(AUTHFIELD_VALUE) IN (?,?) AND AUTHORIZED=1";

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, argMfgSerial.toUpperCase());
			preparedStatement.setString(2, argBuildSerial.toUpperCase());
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();

			if (resultSet.next())
			{
				log.info(sMethod + ":: Device with Manufacturer Serial # of " + argMfgSerial + " and Build Serial # of " + argBuildSerial + " is whitelisted.");
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

	public boolean isAuthfieldCheckEnabled(String config)
	{
		String sMethod = "[isAuthfieldCheckEnabled] ";
		log.info(sMethod);

		boolean enabled = false;

		String sql = "SELECT CONFIG_NAME, CONFIG_VALUE FROM " + WICICONFIGTBL + " WHERE CONFIG_NAME = ?";

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);

			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, config);
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();

			while (resultSet.next())
			{
				enabled = new Boolean(resultSet.getString("CONFIG_VALUE"));
				System.out.println("Enabled"+enabled);
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
	
	public String getAirwatchDFNSearchPrefix()
	{
		String sMethod = "[getAirwatchDFNSearchPrefix] ";
		log.info(sMethod + "::Called::");

		String configValue = null;
		final String configName = "'AirwatchDeviceFriendlyNameSearchPrefix'";

		String sql = "SELECT CONFIG_VALUE FROM " + WICICONFIGTBL + " WHERE CONFIG_NAME = " + configName;

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();

			while (resultSet.next())
			{
				configValue = resultSet.getString("CONFIG_VALUE");
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

		return configValue;
	}

	public void deEnrolWICIDevice(String argSerialNumber) throws SQLException
	{
		String sMethod = "[deEnrolWICIDevice] ";
		log.info(sMethod + "::Called::");

		validateSerialNumber(argSerialNumber);

		String serialNumberUpper = argSerialNumber.toUpperCase().trim();

		log.info(sMethod + ":: DeEnrolling existing device with serial number of " + serialNumberUpper );

		String sql = "UPDATE " + WICI_WHITELIST_TABLE + " SET AUTHORIZED='0' WHERE UPPER(AUTHFIELD_VALUE)=?";

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;

		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, serialNumberUpper);
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
	}

	public void enrolWICIDevice(String argSerialNumber) throws Exception
	{
		String sMethod = "[enrolWICIDevice] ";
		log.info(sMethod + "::Called::");

		validateSerialNumber(argSerialNumber);

		String serialNumberUpper = argSerialNumber.toUpperCase().trim();

		boolean updating = false;
		String sql = "";

		log.info(sMethod + ":: Enrolling existing device with serial number of " + serialNumberUpper );
		if (deviceWithThisSerialNumberExists(serialNumberUpper)){
			sql = "UPDATE " + WICI_WHITELIST_TABLE + " SET AUTHORIZED='1' WHERE UPPER(AUTHFIELD_VALUE)=?";
			updating = true;
		}
		else{
			sql = "INSERT INTO " + WICI_WHITELIST_TABLE + "(AUTHFIELD_VALUE,AUTHORIZED) VALUES( ? , 1 )" ;
			updating = false;
		}

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;

		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, serialNumberUpper);

			if ( updating )
			{
				preparedStatement.executeUpdate();
			}
			else
			{
				preparedStatement.executeQuery();
			}

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

	public void logonInfo(LoginInfo loginInfo) throws Exception
	{
		String sMethod = "[logonInfo] ";
		log.info(sMethod + "::Called::");

		
		String mfgSerial = loginInfo.getMfgSerial().toUpperCase().trim(); 
				
		boolean updating = false;
		String sql = "";
		
		 
		if (deviceWithThisMfgSerialNumberExists(mfgSerial)){
			sql = "UPDATE " + WICI_TAB_LST_TABLE + " SET EMPLOYERID=?,AGENTID=?,LOCATION=?,APKVERSION=?,BUILDSERIAL=? WHERE UPPER(MFG_SERIALNO)=?";
			updating = true;
		}
		else{
			sql = "INSERT INTO " + WICI_TAB_LST_TABLE + "(EMPLOYERID,AGENTID,LOCATION,APKVERSION,BUILDSERIAL,MFG_SERIALNO) VALUES( ?,?,?,?,?,? )" ;
			updating = false;
		}

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;

		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, loginInfo.getEmployerID());
			preparedStatement.setString(2, loginInfo.getAgentID());
			preparedStatement.setString(3, loginInfo.getUserLocation());
			preparedStatement.setString(4, loginInfo.getApkVersion());
			preparedStatement.setString(5, loginInfo.getBuildSerial());
			preparedStatement.setString(6, mfgSerial);
			
			if ( updating )
			{
				preparedStatement.executeUpdate();
			}
			else
			{
				preparedStatement.executeQuery();
			}

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
	
	public boolean deviceWithThisMfgSerialNumberExists( String argMfgSerialNumber ) throws SQLException
	{
		String sMethod = "[deviceWithThisMfgSerialNumberExists] ";
		log.info(sMethod + "::Called::");

		validateMfgSerialNumber(argMfgSerialNumber);

		boolean deviceExists = false;

		String sql = "SELECT MFG_SERIALNO FROM " + WICI_TAB_LST_TABLE + " WHERE UPPER(MFG_SERIALNO) = ?";

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, argMfgSerialNumber.toUpperCase());
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();

			if (resultSet.next())
			{
				log.info(sMethod + ":: " + argMfgSerialNumber + " exists");
				deviceExists = true;
			}
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
			deviceExists = false;
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, resultSet);
		}

		return deviceExists;
	}
	
	public ITabListTableEntity retrieveLastLoggedinMfgserialNo( Timestamp argLastLoggedinDate ) throws SQLException
	{
		String sMethod = "[retrieveLastLoggedinMfgserialNo] ";
		log.info(sMethod + "::Called::");

		ITabListTableEntity tabListTableEntity = null;
			
		String sql = "SELECT AGENTID, MFG_SERIALNO FROM "+ WICI_TAB_LST_TABLE + " WHERE LOGINDATE = ? ORDER BY LOGINDATE DESC";
		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setTimestamp(1, argLastLoggedinDate);
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();

			tabListTableEntity = new TabListTableEntity();
			
			if (resultSet.next())
			{
				tabListTableEntity.setAgentID(resultSet.getString("AGENTID"));
				tabListTableEntity.setMfgSerialNo(resultSet.getString("MFG_SERIALNO"));
				log.info(sMethod + " ::mfgSerial:: " + resultSet.getString("MFG_SERIALNO")
						+ " ::agentId:: " + resultSet.getString("AGENTID"));
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

		return tabListTableEntity;
	}
	
	@SuppressWarnings("deprecation")
	public boolean checkAgentPreLoggedin(LoginInfo loginInfo) throws SQLException, ParseException {
		
		String sMethod = "[checkAgentPreLoggedin] ";
		log.info(sMethod + "::Called::");

		String newAgentID = loginInfo.getAgentID();
		String newMfgSerial = loginInfo.getMfgSerial().toUpperCase().trim();
		String agentID = "", mfgSerial = "";
		log.info(sMethod + "::newAgentID:: " + newAgentID + " ::newMfgSerial:: " + newMfgSerial);

		Timestamp lastLoggedinTimeStamp = getLoggedinDate(newAgentID);
		log.info(sMethod + "::lastLoggedInDate:: " + lastLoggedinTimeStamp);
		
		ITabListTableEntity tabListTableEntity = retrieveLastLoggedinMfgserialNo(lastLoggedinTimeStamp);
		
		if(validateTabListTableEntity(tabListTableEntity)) {
			agentID = tabListTableEntity.getAgentID();
			mfgSerial = tabListTableEntity.getMfgSerialNo();
			log.info(sMethod + " ::lastLoggedInMfgSerial:: " + mfgSerial + " ::lastLoggedInAgentID:: " + agentID);
		}
		
		long millis =  new java.util.Date().getTime();
		java.sql.Timestamp currentDate = new java.sql.Timestamp(millis);
		log.info(sMethod + "::currentDate:: " + currentDate);
		
		boolean loggedIn = false;
		
		if(agentID.equalsIgnoreCase(newAgentID) && !mfgSerial.equalsIgnoreCase(newMfgSerial)) {
			if(currentDate.getYear() == lastLoggedinTimeStamp.getYear() && currentDate.getMonth() == lastLoggedinTimeStamp.getMonth()
					&& currentDate.getDate() == lastLoggedinTimeStamp.getDate() && currentDate.getHours() == lastLoggedinTimeStamp.getHours()) {
				int minutes = currentDate.getMinutes() - lastLoggedinTimeStamp.getMinutes();
				log.info(sMethod + ":: minutes difference :: " + minutes);
				if(minutes <= 5) {
					loggedIn = true;
				} else {
					loggedIn = false;
				}
			}
		}
		
		return loggedIn;
	}
	
	private boolean validateTabListTableEntity(ITabListTableEntity tabListTableEntity)
	{
		String sMethod = this.getClass().getName() + "[validateTabListTableEntity] ";
		log.info(sMethod);

		return tabListTableEntity != null && validateStringParameter(tabListTableEntity.getAgentID()) && validateStringParameter(tabListTableEntity.getMfgSerialNo());
	}

	private boolean validateStringParameter(String value)
	{
		String sMethod = this.getClass().getName() + "[validateStringParameter] ";
		log.info(sMethod);

		return value != null && !value.isEmpty();
	}
	
	private Timestamp getLoggedinDate( String argAgentID ) throws SQLException
	{
		String sMethod = "[getLoggedinDate] ";
		log.info(sMethod + "::Called::");
		
		String sql = "SELECT MAX(LOGINDATE) FROM " + WICI_TAB_LST_TABLE + " WHERE AGENTID = ? ORDER BY LOGINDATE DESC";
		log.info(sMethod + ":: SQL :: " + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		Timestamp lastLoggedInDate = null;
		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, argAgentID);
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();

			if (resultSet.next())
			{
				lastLoggedInDate = resultSet.getTimestamp("MAX(LOGINDATE)");
				log.info(sMethod + ":: login date :: " + lastLoggedInDate);
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

		return lastLoggedInDate;
	}
	
	// US4231
	public boolean employerIdAgentIDExists( LoginInfo loginInfo ) throws SQLException
	{
		String sMethod = "[employerIdAgentIDExists] ";
		log.info(sMethod + "::Called::");

		String employerId = loginInfo.getEmployerID().toUpperCase().trim();
		String agentID = loginInfo.getAgentID().toUpperCase().trim();

		log.info(sMethod + "::employerId:: " + employerId + " ::agentID:: " + agentID);
		
		validateEmployerIdAgentID(employerId, agentID);

		boolean employerIdAgentIDExists = false;

		String sql = "SELECT * FROM " + WICI_BLACKLIST_TABLE + " WHERE UPPER(EMPLOYERID) = ?" + " AND UPPER(AGENTID) = ?";

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, employerId.toUpperCase());
			preparedStatement.setString(2, agentID.toUpperCase());
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();

			if (resultSet.next())
			{
				log.info(sMethod + ":: " + employerId + " and " + agentID + " exists");
				employerIdAgentIDExists = true;
			}
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
			employerIdAgentIDExists = false;
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, resultSet);
		}

		return employerIdAgentIDExists;
	}
	
	private boolean deviceWithThisSerialNumberExists( String argSerialNumber ) throws SQLException
	{
		String sMethod = "[deviceWithThisSerialNumberExists] ";
		log.info(sMethod + "::Called::");

		validateSerialNumber(argSerialNumber);

		boolean deviceExists = false;

		String sql = "SELECT AUTHFIELD_VALUE FROM " + WICI_WHITELIST_TABLE + " WHERE UPPER(AUTHFIELD_VALUE) = ?";

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, argSerialNumber.toUpperCase());
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();

			if (resultSet.next())
			{
				log.info(sMethod + ":: " + argSerialNumber + " exists");
				deviceExists = true;
			}
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
			deviceExists = false;
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, resultSet);
		}

		return deviceExists;
	}

	public boolean insertUserInfo(int roleId,String userName,
			String activatedflag,String adminId,String passKey,String locale,String agency,String serialNumber) throws Exception 
	{
		log.info("Inserting Usr Info...");	
		String sql = "INSERT INTO " + CTFS_WICI_USER_INFO + 
		"(USERID,ROLEID, USERNAME, ACTIVATED, ADMINID, PASSKEY, LOCALE, AGENCY,SERIALNUMBER,REGDATE)"
				+ "VALUES (WEBIC_OWNER.WICI_USER_INFO_SEQ.nextval,?, ?, ?, ?,?, ?, ?,?,?)";
		boolean insertFlag=true;
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		try
		{
			connection = connectToDB(false);
			if (isAgentIDExists(userName.trim())|| isAgentIDExists(userName.substring(1).trim()) ) {
				throw new DuplicateAgentIDException("Agent ID already Exists");
			}
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setInt(1, roleId);
			preparedStatement.setString(2, userName);
			preparedStatement.setString(3, activatedflag);
			preparedStatement.setString(4, adminId);
			preparedStatement.setString(5, passKey);
			preparedStatement.setString(6, locale);
			preparedStatement.setString(7, agency);
			preparedStatement.setString(8,serialNumber);
			preparedStatement.setDate(9, getCurrentDateTime());
			log.info("roleId"+roleId+"userName"+userName+"activatedflag"+activatedflag+"adminId"+adminId+"passKey"+passKey+"locale"+locale+"agency"+agency+"serialNumber"+serialNumber+"getCurrentDateTime()"+getCurrentDateTime());
			preparedStatement.executeUpdate();
			connection.commit();
		}
		catch (DuplicateAgentIDException ex) {
			DisposeBDResources(connection, preparedStatement, null);
			throw new DuplicateAgentIDException("Agent ID already Exists");
		} catch (Exception ex) {
			DisposeBDResources(connection, preparedStatement, null);
			ex.printStackTrace();
			throw ex;
		} finally {
			DisposeBDResources(connection, preparedStatement, null);
		}
		return insertFlag;
	}
	
	public java.sql.Date getCurrentDateTime()
	{
		java.util.Date today = new java.util.Date();
		return new java.sql.Date(today.getTime());
	}

	private boolean isAgentIDExists(String userName) throws Exception {
		log.info("isAgentIDExists..");
		String sql = "SELECT USERNAME FROM " + CTFS_WICI_USER_INFO
				+ " WHERE UPPER(USERNAME) = ?";
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		boolean agentIdExistsFlag = false;
		try {
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, userName);
			resultSet = preparedStatement.executeQuery();
			while (resultSet.next()) {
				agentIdExistsFlag = true;
			}
		} catch (Exception ex) {
			throw ex;
		} finally {
			DisposeBDResources(connection, preparedStatement, resultSet);
		}
		return agentIdExistsFlag;
	}
	
	public String insertAccountApplicationData(String transactionID, String userID, String requestData, String retrievalToken, String currentTelephone,String consentGranted,String unitNumber,String streetNumber,String streetName,AccountApplicationRequestType accountApplicationRequestType,String employerId, String firstName, String lastName, String retailNetWork, String longitude, String latitude, String sec_firstName, String sec_lastName, String sec_employee_number) throws Exception
	{
		String sMethod = "[insertAccountApplicationData] ";
		log.info(sMethod + "--Called with parameter TRANSACTION_ID=" + transactionID + ", TRANSACTION_STATE=" + AppConstants.QUEUE_REQUEST_SUBMIT +", USER_ID=" + userID + ", REQUEST_DATA=" + requestData + ", RETRIEVAL_TOKEN=" + retrievalToken + ", CURRENT_TELEPHONE=" + currentTelephone+ ",CONSENT_GRANTED="+consentGranted);

		// Create sql statement
		String sql = "INSERT INTO " + WICIREQUESTQUEUETBL + "(TRANSACTION_ID, TRANSACTION_TYPE, TRANSACTION_STATE, USER_ID, PROCESS_DATE, REQUEST_DATA, RETRIEVAL_TOKEN, CURRENT_TELEPHONE, CONSENT_GRANTED,UNIT_NUMBER,STREET_NUMBER," +
				"STREET_NAME,CHANNEL_ID,CLIENT_PROD_CD,AGENCY_CD,PROMO_CD,STORE_ID,EMP_FIRST_NAME,EMP_LAST_NAME,RETAIL_NETWORK,LONGITUDE,LATITUDE,SEC_EMP_FIRST_NAME,SEC_EMP_LAST_NAME,SEC_EMP_NUMBER)"
				+ "VALUES (?, ?, ?, ?,(SELECT SYS_EXTRACT_UTC(SYSTIMESTAMP)UTC_SYS FROM DUAL), ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

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

			preparedStatement.setString(6, retrievalToken);
			preparedStatement.setString(7, currentTelephone);
			preparedStatement.setString(8, consentGranted);
			preparedStatement.setString(9, unitNumber);
			preparedStatement.setString(10, streetNumber);
			preparedStatement.setString(11, streetName);
			preparedStatement.setString(12, accountApplicationRequestType.getChannelIndicator());
			preparedStatement.setString(13, accountApplicationRequestType.getRequestedProductType());
			preparedStatement.setString(14, employerId);
			preparedStatement.setString(15, accountApplicationRequestType.getAgencyPromoCode());
			preparedStatement.setString(16, accountApplicationRequestType.getStoreNumber());
			preparedStatement.setString(17, firstName);
			preparedStatement.setString(18, lastName);
			preparedStatement.setString(19, retailNetWork);
			preparedStatement.setString(20, longitude);
			preparedStatement.setString(21, latitude);
			preparedStatement.setString(22, sec_firstName);
			preparedStatement.setString(23, sec_lastName);
			preparedStatement.setString(24, sec_employee_number);
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

	public boolean isApprovedAppRetrievable( String argTransactionID, String argToken, String argPhone  ){
		String sMethod = "[isApprovedAppRetrievable] ";
		log.info(sMethod + "::Called::");
		Integer retrievalCountForThisApp = null;
		String maxRetrievalsForApprovedApps = getMaxRetrievalsForApprovedApps();
		if( argTransactionID!=null || argTransactionID.equals(""))
			argTransactionID = getTransactionIDForApprovedApp(argToken,argPhone);
		
		retrievalCountForThisApp = getRetrievalCountForApprovedApp(argTransactionID);
		//else
		//	retrievalCountForThisApp = getRetrievalCountForApprovedApp(argToken, argPhone);
		
		int max = new Integer(maxRetrievalsForApprovedApps).intValue();
		
		int count = retrievalCountForThisApp.intValue();

		log.info(sMethod + "::Comparing max(" + max + ") to count (" + count + "):: for transactionID=" + argTransactionID);
		
		return count<=max;		
	}
	
	public String getMaxRetrievalsForApprovedApps()
	{
		String sMethod = "[getMaxRetrievalsForApprovedApps] ";
		log.info(sMethod + "::Called::");

		String maxRetrievalsForApproved = "";
		String sql = "SELECT CONFIG_VALUE FROM " + WICICONFIGTBL + " WHERE CONFIG_NAME = 'MAX_RETRIEVALS_LIMIT'";

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);
			
			preparedStatement = connection.prepareStatement(sql);
			
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();			

			while (resultSet.next())
			{
				maxRetrievalsForApproved = resultSet.getString("CONFIG_VALUE");
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

		log.info(sMethod + "::Max Retrievals for Approved Apps = " + maxRetrievalsForApproved);

		return maxRetrievalsForApproved;
	}
	
	
	public String getTransactionIDForApprovedApp( String argToken, String argPhone )
	{
		String sMethod = "[getTransactionIDForApprovedApp] ";
		log.info(sMethod + "::Called::");

		String transID = "";
		String sql = "SELECT TRANSACTION_ID FROM " + WICIREQUESTQUEUETBL + " WHERE RETRIEVAL_TOKEN = ? AND CURRENT_TELEPHONE = ?";

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);
			
			preparedStatement = connection.prepareStatement(sql);
			
			preparedStatement.setString(1, argToken);
			preparedStatement.setString(2, argPhone);
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();			

			while (resultSet.next())
			{
				transID = resultSet.getString("TRANSACTION_ID");
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

		return transID;
	}
	
	
	public Integer getRetrievalCountForApprovedApp( String argToken, String argPhone )
	{
		String sMethod = "[getRetrievalCountForApprovedApp] ";
		log.info(sMethod + "::Called with argToken = " + argToken);
		log.info(sMethod + "::Called with argPhone = " + argPhone);

		Integer retrievalCount = 0;
		// US3436
		// Update decline print to use max_retrieval configuration
		String sql = "SELECT RETRIEVAL_COUNT FROM " + WICIREQUESTQUEUETBL + " WHERE RETRIEVAL_TOKEN = ? AND CURRENT_TELEPHONE = ? TRANSACTION_STATE='COMPLETE' AND (RESPONSE_DATA LIKE '%APPROVED%' OR RESPONSE_DATA LIKE '%DECLINE%')" ;

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);
			
			preparedStatement = connection.prepareStatement(sql);
			
			preparedStatement.setString(1, argToken);
			preparedStatement.setString(1, argPhone);
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();			

			while (resultSet.next())
			{
				retrievalCount = new Integer(resultSet.getInt("RETRIEVAL_COUNT"));
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

		log.info(sMethod + "::RetrievalCount = " + retrievalCount);
		return retrievalCount;
	}	
	public Integer getRetrievalCountForApprovedApp( String argTransactionID )
	{
		String sMethod = "[getRetrievalCountForApprovedApp] ";
		log.info(sMethod + "::Called with transactionID = " + argTransactionID);

		Integer retrievalCount = 0;
		// US3436
		// Update decline print to use max_retrieval configuration
		String sql = "SELECT RETRIEVAL_COUNT FROM " + WICIREQUESTQUEUETBL + " WHERE TRANSACTION_ID = ? AND TRANSACTION_STATE='COMPLETE' AND (RESPONSE_DATA LIKE '%APPROVED%' OR RESPONSE_DATA LIKE '%DECLINE%')" ;

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);
			
			preparedStatement = connection.prepareStatement(sql);
			
			preparedStatement.setString(1, argTransactionID);
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();			

			while (resultSet.next())
			{
				retrievalCount = new Integer(resultSet.getInt("RETRIEVAL_COUNT"));
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

		log.info(sMethod + "::RetrievalCount = " + retrievalCount);
		return retrievalCount;
	}
	

	public void updateRetrievalCountForApprovedApp(String argTransactionID) throws Exception
	{
		String sMethod = "[updateRetrievalCountForApprovedApp] ";
		log.info(sMethod + "::Called with parameter TRANSACTION_ID=" + argTransactionID);

		// Create sql statement
		//update WICI_REQUESTQUEUE SET RETRIEVAL_COUNT=1 WHERE TRANSACTION_ID='D7BC4391-BA4C-47BA-9AA1-21231B9ED185' AND TRANSACTION_STATE='COMPLETE' AND RESPONSE_DATA LIKE '%APPROVED%'
		// US3436
		// Update decline print to use max_retrieval configuration
		String sql = "UPDATE " + WICIREQUESTQUEUETBL + " SET RETRIEVAL_COUNT = ? WHERE TRANSACTION_ID = ? AND TRANSACTION_STATE='COMPLETE' AND (RESPONSE_DATA LIKE '%APPROVED%' OR RESPONSE_DATA LIKE '%DECLINE%')";

		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;

		try
		{
			Integer currentRetrievalCount = getRetrievalCountForApprovedApp(argTransactionID);
			int newValue = currentRetrievalCount.intValue() + 1;
			
			log.info(sMethod + "::Updating with new value = " + newValue );
			connection = connectToDB(false);

			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setInt(1,newValue);
			preparedStatement.setString(2, argTransactionID);

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

	}	
	
	public String updateAccountApplicationData(String argTransactionID, String argAccountApplicationResponse, String argTransactionState,String appStatus) throws Exception
	{
		String sMethod = "[updateAccountApplicationData] ";
		log.info(sMethod + "::Called with parameter TRANSACTION_ID=" + argTransactionID + ", RESPONSE_DATA=" + argAccountApplicationResponse + ", TRANSACTION_STATE=" + argTransactionState);

		// Create sql statement
		//String sql = "UPDATE " + WICIREQUESTQUEUETBL + " SET RESPONSE_DATA = ?, TRANSACTION_STATE = ?,STATUS =? WHERE TRANSACTION_ID = ?";
		String sql = "UPDATE " + WICIREQUESTQUEUETBL + " SET RESPONSE_DATA = ?, TRANSACTION_STATE = ? WHERE TRANSACTION_ID = ?";
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
			//preparedStatement.setString(3, appStatus);
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

	public PendAccountApplicationResponse updatePendingAccountApplicationData(PendAccountApplicationRequest argPAARequestObject) throws PendingApplicationDatabaseUpdateException
	{
		String sMethod = "[updatePendingAccountApplicationData] ";
		String sql = "UPDATE " + WICIREQUESTQUEUETBL + " SET RESPONSE_DATA = ?, TRANSACTION_STATE = ?, ADM_APP_ID = ?,STATUS = ? WHERE TRANSACTION_ID = ?";
		log.info(sMethod + "::SQL::" + sql);

		WICIResponse convertedRequestToResponse = new WICIObjectsHelper().convertPendAccountApplicationRequestToWICIResponse(argPAARequestObject);
		Gson gson = new Gson();
		
		String responseJSON = gson.toJson(convertedRequestToResponse, WICIResponse.class);		
		String transactionState = ( "PENDING".equalsIgnoreCase(argPAARequestObject.getAppStatus()) ? AppConstants.QUEUE_REQUEST_PENDING : AppConstants.QUEUE_REQUEST_COMPLETE );
		String admAppId = argPAARequestObject.getApplicationId();
		String transactionId = argPAARequestObject.getExternalReferenceId();
		String appStatus=argPAARequestObject.getAppStatus();

		log.info(sMethod + " Attempting to update with the following values: ");		
		log.info(sMethod + " responseJSON= " + responseJSON);
		log.info(sMethod + " transactionState= " + transactionState);
		log.info(sMethod + " admAppId= " + admAppId);
		log.info(sMethod + " transactionId= " + transactionId);
		log.info(sMethod + " appStatus= " + appStatus);
		
		PendAccountApplicationResponse updateResponse = new PendAccountApplicationResponse();
		updateResponse.setStatus(AppConstants.PEND_ACCOUNT_APPLICATION_REQUEST_UPDATE_FAILURE);

		Connection connection = null;
		PreparedStatement preparedStatement = null;

		try
		{
			connection = connectToDB(false);

			preparedStatement = connection.prepareStatement(sql);

			preparedStatement.setString(1, responseJSON);
			preparedStatement.setString(2, transactionState);
			preparedStatement.setString(3, admAppId);
			preparedStatement.setString(4, appStatus);
			preparedStatement.setString(5, transactionId);

			preparedStatement.executeUpdate();
			connection.commit();
			
			updateResponse.setStatus(AppConstants.PEND_ACCOUNT_APPLICATION_REQUEST_UPDATE_SUCCESS);
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::EXCEPTION::" + ex.getMessage());
			throw new PendingApplicationDatabaseUpdateException(ex.getMessage());			
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, null);
		}

		return updateResponse;	
	}
	
	
	public AccountApplicationSubmissionResponse retrievePendingApplicationData( String argRetrievalToken, String argPhoneNumber ) throws PendingApplicationRetrievalException
	{
		String sMethod = "[retrievePendingApplicationData] ";
		argRetrievalToken=argRetrievalToken.toUpperCase();
		log.info(sMethod + "::Called with parameter RETRIEVAL_TOKEN=" + argRetrievalToken + ", CURRENT_TELEPHONE=" + argPhoneNumber);

		AccountApplicationSubmissionResponse submissionResponse = new AccountApplicationSubmissionResponse();
		
		// Create sql statement
		String sql = "SELECT REQUEST_DATA, RETRIEVAL_COUNT, TRANSACTION_STATE, RESPONSE_DATA, RETRIEVAL_TOKEN FROM " + WICIREQUESTQUEUETBL + " WHERE RETRIEVAL_TOKEN = ? AND CURRENT_TELEPHONE = ? AND TRANSACTION_STATE IN (?,?)";
		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		int rowCount = 0;
		
		try
		{
			connection = connectToDB(false);

			preparedStatement = connection.prepareStatement(sql);

			preparedStatement.setString(1, argRetrievalToken);
			preparedStatement.setString(2, argPhoneNumber);
			preparedStatement.setString(3, AppConstants.QUEUE_REQUEST_COMPLETE);
			preparedStatement.setString(4, AppConstants.QUEUE_REQUEST_PENDING);

			// Get only the first row from the table
			preparedStatement.setMaxRows(1);

			// Execute a query
			resultSet = preparedStatement.executeQuery();

			
			// Extract data from result set
			while (resultSet.next())
			{
				rowCount ++;
				// Retrieve accountApplication response
				submissionResponse.setTransactionState(resultSet.getString("TRANSACTION_STATE"));

				String responseDataString = resultSet.getString("RESPONSE_DATA");
				
				Gson gson = new Gson();
				WICIResponse responseData = gson.fromJson(responseDataString, WICIResponse.class);								
				submissionResponse.setResponseData(responseData);
				
				submissionResponse.setRetrievalToken(resultSet.getString("RETRIEVAL_TOKEN"));

				if(responseDataString.contains("APPROVED") || responseDataString.contains("DECLINED")){
				
					String requestDataString = resultSet.getString("REQUEST_DATA");
					ReceiptCustomerInfoHelper activationItemsBuilder = new ReceiptCustomerInfoHelper();
					ReceiptCustomerInfo customerInformationPortionOfReceipt = activationItemsBuilder.getCustomerInformationPortionOfReceipt(requestDataString);				
					CreditCardApplicationData activationItems = activationItemsBuilder.convertToCreditCardApplicationDataForPrintout(customerInformationPortionOfReceipt);
					
					submissionResponse.setActivationItems(activationItems);
				}
			}
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::EXCEPTION::" + ex.getMessage());
			throw new PendingApplicationRetrievalException(ex.getMessage());
		}
		finally
		{
			DisposeBDResources(connection, preparedStatement, resultSet);
		}

		return submissionResponse;		
	}
	
	public AccountApplicationSubmissionResponse retrieveAccountApplicationResponse(String argTransactionID) throws Exception
	{
		String sMethod = "[retrieveAccountApplicationResponse] ";
		log.info(sMethod + "::Called with parameter TRANSACTION_ID=" + argTransactionID + ", TRANSACTION_STATE IN (" + AppConstants.QUEUE_REQUEST_COMPLETE + ", " +AppConstants.QUEUE_REQUEST_PENDING + ")");

		AccountApplicationSubmissionResponse submissionResponse = new AccountApplicationSubmissionResponse();
		
		// Create sql statement
		String sql = "SELECT TRANSACTION_STATE, RESPONSE_DATA, RETRIEVAL_TOKEN, CURRENT_TELEPHONE, CONSENT_GRANTED FROM " + WICIREQUESTQUEUETBL + " WHERE TRANSACTION_ID = ? AND TRANSACTION_TYPE = ? AND TRANSACTION_STATE IN ( ?,? )";
		log.info(sMethod + "::SQL::" + sql);

		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try
		{
			connection = connectToDB(false);

			preparedStatement = connection.prepareStatement(sql);

			preparedStatement.setString(1, argTransactionID);
			preparedStatement.setString(2, TRANSACTION_TYPE);
			preparedStatement.setString(3, AppConstants.QUEUE_REQUEST_COMPLETE);
			preparedStatement.setString(4, AppConstants.QUEUE_REQUEST_PENDING);			//

			// Get only the first row from the table
			preparedStatement.setMaxRows(1);

			// Execute a query
			resultSet = preparedStatement.executeQuery();

			// Extract data from result set
			while (resultSet.next())
			{
				// Retrieve accountApplication response
				//accountApplicationResponse = resultSet.getString("RESPONSE_DATA");
				//retrievalToken = resultSet.getString("RETRIEVAL_TOKEN");
				submissionResponse.setTransactionState(resultSet.getString("TRANSACTION_STATE"));
				
				String responseDataString = resultSet.getString("RESPONSE_DATA");
				
				Gson gson = new Gson();
				WICIResponse responseData = gson.fromJson(responseDataString, WICIResponse.class);								
				submissionResponse.setResponseData(responseData);
				
				submissionResponse.setRetrievalToken(resultSet.getString("RETRIEVAL_TOKEN"));
				submissionResponse.setCurrentTelephone(resultSet.getString("CURRENT_TELEPHONE"));
				submissionResponse.setConsentGranted(resultSet.getString("CONSENT_GRANTED"));
				submissionResponse.setExternalReferencId(argTransactionID);
				
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

		return submissionResponse;
	}

		//Retrieve UserLocation from TCT_SALES_OUTLET Table
	
	public WICICheckLocationResponse retrieveUserLocation(
			WebICCheckLocationRequest locationRequest) throws Exception {
		String sMethod = "[retrieveUserLocation] ";

		String retailNetwork = null;
		if (locationRequest.getRetailNetwork() != null)
			retailNetwork = locationRequest.getRetailNetwork();
		
		log.info(sMethod + ":: retailNetwork :: " + retailNetwork);
		
		WICIConfiguration conf = new WICIConfigurationFactory().readOutletTypeIdConfiguration(retailNetwork);

		String outletTypeId = conf.getOutletTypeId();
		
		// Create sql statement
		String sql = "SELECT * FROM TCT_SALES_OUTLET WHERE CT_SALE_OTLT_NBR = ?";
		String sqlNonPartnerStore;
		String sqlPartnerStore;
		
		/*if(retailNetwork.equals("GAS")) {
			sqlNonPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE BUS_STORE_NUMBER = ? AND OTLT_TYPE_ID IN (1,19)";
			sqlPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE CT_SALE_OTLT_NBR = ? AND OTLT_TYPE_ID IN (1,19)";
		} 
		else if(retailNetwork.equals("CT")) {
			sqlNonPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE BUS_STORE_NUMBER = ? AND OTLT_TYPE_ID IN (4)";
			sqlPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE CT_SALE_OTLT_NBR = ? AND OTLT_TYPE_ID IN (4)";
      	}
		else if(retailNetwork.equals("SPORTS")) {
			sqlNonPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE BUS_STORE_NUMBER = ? AND OTLT_TYPE_ID IN (12,22)";
			sqlPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE CT_SALE_OTLT_NBR = ? AND OTLT_TYPE_ID IN (12,22)";
      	}
		else if(retailNetwork.equals("FGLFRN")) {
			sqlNonPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE BUS_STORE_NUMBER = ? AND OTLT_TYPE_ID IN (3,24,26,27,28)";
			sqlPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE CT_SALE_OTLT_NBR = ? AND OTLT_TYPE_ID IN (3,24,26,27,28)";
      	}
		else if(retailNetwork.equals("PHL")) {
			sqlNonPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE BUS_STORE_NUMBER = ? AND OTLT_TYPE_ID IN (30)";
			sqlPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE CT_SALE_OTLT_NBR = ? AND OTLT_TYPE_ID IN (30)";
      	}
		else if(retailNetwork.equals("NS")) {
			sqlNonPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE BUS_STORE_NUMBER = ? AND OTLT_TYPE_ID IN (31)";
			sqlPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE CT_SALE_OTLT_NBR = ? AND OTLT_TYPE_ID IN (131)";
      	}
		else if(retailNetwork.equals("MARKS")) {
			sqlNonPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE BUS_STORE_NUMBER = ? AND OTLT_TYPE_ID IN (14)";
			sqlPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE CT_SALE_OTLT_NBR = ? AND OTLT_TYPE_ID IN (14)";
      	}
		else if(retailNetwork.equals("MRKFRN")) {
			sqlNonPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE BUS_STORE_NUMBER = ? AND OTLT_TYPE_ID IN (15)";
			sqlPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE CT_SALE_OTLT_NBR = ? AND OTLT_TYPE_ID IN (15)";
      	}
		else if(retailNetwork.equals("OS")) {
			sqlNonPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE BUS_STORE_NUMBER = ? AND OTLT_TYPE_ID IN (8)";
			sqlPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE CT_SALE_OTLT_NBR = ? AND OTLT_TYPE_ID IN (8)";
      	}*/

		sqlNonPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE BUS_STORE_NUMBER = ? AND OTLT_TYPE_ID IN ("+outletTypeId+")";
		sqlPartnerStore = "SELECT * FROM TCT_SALES_OUTLET WHERE CT_SALE_OTLT_NBR = ? AND OTLT_TYPE_ID IN ("+outletTypeId+")";
		WICICheckLocationResponse checkLocationResponse = null;
		log.info(sMethod + "::SQL::" + sql);
		log.info(sMethod + "::SQL::" + outletTypeId);
		int locationId = 0;
		int sale_otlt_nbr = 0;
		
		Connection connection = null;
		ResultSet rs = null;
		PreparedStatement preparedStatement = null;
		String message = "SUCCESSFUL Authentication and authorization for user..";
		try {
			connection = connectToTCTSalesDB(false);

			if (locationRequest.getLocationID() != null)
				locationId = Integer.parseInt(locationRequest.getLocationID());
			
			if(retailNetwork != null && retailNetwork != "PRTNR" ) {
				if( locationId > 0 ) {
					//preparedStatement = connection.prepareStatement(sql);
					preparedStatement = connection.prepareStatement(sqlNonPartnerStore);
					
					preparedStatement.setInt(1, locationId);
					/*String[] outletTypeIds =  outletTypeId.split(",");
					for(int i=2;i<outletTypeIds.length;i++)
					{
						preparedStatement.setString(i, outletTypeIds[i]);
					}
					preparedStatement.setString(2, outletTypeId);*/
					log.info(sMethod + "::SQL::" + sqlNonPartnerStore);
					rs = preparedStatement.executeQuery();
					if (rs.next()) {
						checkLocationResponse = new WICICheckLocationResponse();
						sale_otlt_nbr = rs.getInt("CT_SALE_OTLT_NBR");
						
						checkLocationResponse.setMessage(message);
						checkLocationResponse.setOutletCity(rs.getString("OTLT_ADDR_CITY_NAM"));
						//checkLocationResponse.setOutletName(rs.getString("OUTLET_TYPE_NAM"));
						checkLocationResponse.setOutletNumber(String.valueOf(sale_otlt_nbr));
						checkLocationResponse.setOutletPostal(rs.getString("OTLT_ADDR_PSTL_CD"));
						checkLocationResponse.setOutletProvince(rs.getString("OTLT_ADDR_PROV_CD"));
						checkLocationResponse.setOutletStreet(rs.getString("OTLT_ADDR_STREET"));
						checkLocationResponse.setCTFSStoreNo(rs.getString("CT_SALE_OTLT_NBR"));
						checkLocationResponse.setBusinessStoreNumber(locationRequest.getLocationID());
					} else {
						preparedStatement = connection.prepareStatement(sqlPartnerStore);

						preparedStatement.setInt(1, locationId);
						//preparedStatement.setString(2, outletTypeId);
						log.info(sMethod + "::SQL::" + sqlPartnerStore);
						rs = preparedStatement.executeQuery();
						if (rs.next()) {
							checkLocationResponse = new WICICheckLocationResponse();
							sale_otlt_nbr = rs.getInt("CT_SALE_OTLT_NBR");
							
							checkLocationResponse.setMessage(message);
							checkLocationResponse.setOutletCity(rs.getString("OTLT_ADDR_CITY_NAM"));
							//checkLocationResponse.setOutletName(rs.getString("OUTLET_TYPE_NAM"));
							checkLocationResponse.setOutletNumber(String.valueOf(sale_otlt_nbr));
							checkLocationResponse.setOutletPostal(rs.getString("OTLT_ADDR_PSTL_CD"));
							checkLocationResponse.setOutletProvince(rs.getString("OTLT_ADDR_PROV_CD"));
							checkLocationResponse.setOutletStreet(rs.getString("OTLT_ADDR_STREET"));
							checkLocationResponse.setCTFSStoreNo(rs.getString("CT_SALE_OTLT_NBR"));
							checkLocationResponse.setBusinessStoreNumber(EMPTY_STRING);
						}
					}
				} else{
					 return checkLocationResponse;
				}
			} else {
				preparedStatement = connection.prepareStatement(sql);
				
				preparedStatement.setInt(1, locationId);
				rs = preparedStatement.executeQuery();
				if (rs.next()) {
					checkLocationResponse = new WICICheckLocationResponse();
					sale_otlt_nbr = rs.getInt("CT_SALE_OTLT_NBR");
					
					checkLocationResponse.setMessage(message);
					checkLocationResponse.setOutletCity(rs.getString("OTLT_ADDR_CITY_NAM"));
					//checkLocationResponse.setOutletName(rs.getString("OUTLET_TYPE_NAM"));
					checkLocationResponse.setOutletNumber(String.valueOf(sale_otlt_nbr));
					checkLocationResponse.setOutletPostal(rs.getString("OTLT_ADDR_PSTL_CD"));
					checkLocationResponse.setOutletProvince(rs.getString("OTLT_ADDR_PROV_CD"));
					checkLocationResponse.setOutletStreet(rs.getString("OTLT_ADDR_STREET"));
					checkLocationResponse.setCTFSStoreNo(rs.getString("CT_SALE_OTLT_NBR"));
				}
			}
			
		} catch (Exception ex) {
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
			throw ex;
		} finally {
			DisposeBDResources(connection, preparedStatement, null);
		}
		return checkLocationResponse;
	}
	
	
	public int deleteAccountApplicationData(String argTransactionID) throws Exception
	{
		String sMethod = "[deleteAccountApplicationData] ";
		log.info(sMethod + "::Called with parameter TRANSACTION_ID=" + argTransactionID);

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
	
	public int deleteAgent(String userName,String modifiedAdminId,String serialNumber,String employerID,String rollId) throws Exception
	{
		String sql=null;
		if(rollId!=null && rollId.equalsIgnoreCase(SUPER_ADMIN))		{
		sql = "UPDATE " + CTFS_WICI_USER_INFO +" SET ACTIVATED=? ,MODIFIEDADMINID=?,MODIFIEDDATE=?,SERIALNUMBER=? WHERE UPPER(USERNAME)=? ";	
		}else{
			 sql = "UPDATE " + CTFS_WICI_USER_INFO +" SET ACTIVATED=? ,MODIFIEDADMINID=?,MODIFIEDDATE=?,SERIALNUMBER=? WHERE UPPER(USERNAME)=? AND UPPER(AGENCY) = ?";	
		}
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		int rowsAffected = 0;
		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, "N");
			preparedStatement.setString(2, modifiedAdminId);
			preparedStatement.setDate(3, getCurrentDateTime());
			preparedStatement.setString(4, serialNumber);
			preparedStatement.setString(5, userName.toUpperCase());
			if (!rollId.equalsIgnoreCase(SUPER_ADMIN)) {
				preparedStatement.setString(6, employerID.toUpperCase());
			}
			log.info("modifiedAdminId"+modifiedAdminId+"getCurrentDateTime()"+getCurrentDateTime()+"serialNumber"+serialNumber+"userName"+userName);
			rowsAffected = preparedStatement.executeUpdate();
			connection.commit();
		}
		catch (Exception ex) {
			throw ex;
		} finally {
			DisposeBDResources(connection, preparedStatement, resultSet);
		}
		return rowsAffected;
	}
	public int updateAgent(String userName,String modifiedId,String passKey,String employerID,String rollId) throws Exception
	{
		String sql=null;
		if(rollId!=null && rollId.equalsIgnoreCase(SUPER_ADMIN)){
			sql = "UPDATE " + CTFS_WICI_USER_INFO +" SET PASSKEY=?,MODIFIEDADMINID=?,MODIFIEDDATE=? WHERE USERNAME=?";	
		}else{
			sql = "UPDATE " + CTFS_WICI_USER_INFO +" SET PASSKEY=?,MODIFIEDADMINID=?,MODIFIEDDATE=? WHERE UPPER(USERNAME)=? AND UPPER(AGENCY) = ?";	
		}
		log.info("userName"+userName+"modifiedId"+modifiedId+"passKey"+passKey+"employerID"+employerID);
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		int rowsAffected = 0;
		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1,passKey );
			preparedStatement.setString(2, modifiedId);
			preparedStatement.setDate(3, getCurrentDateTime());
			preparedStatement.setString(4, userName.toUpperCase());
			if(!rollId.equalsIgnoreCase(SUPER_ADMIN)){
				preparedStatement.setString(5, employerID.toUpperCase());
			}
			rowsAffected = preparedStatement.executeUpdate();
			connection.commit();
		}
		catch (Exception ex) {
			throw ex;
		} finally {
			DisposeBDResources(connection, preparedStatement, resultSet);
		}
		return rowsAffected;
	}

	/*
	 * END WiciRequestQueueTable Logic
	 */

	private void validateSerialNumber(String argSerialNumber)
	{
		if (argSerialNumber == null || argSerialNumber.isEmpty())
		{
			throw new IllegalArgumentException("Invalid 'argSerialNumber' argument!");
		}
	}
	
	// US4231
	private void validateEmployerIdAgentID(String argEmployerId, String argAgentID)
	{
		if (argEmployerId == null || argEmployerId.isEmpty() || argAgentID == null || argAgentID.isEmpty())
		{
			throw new IllegalArgumentException("Invalid 'argemployerId and agentID' arguments!");
		}
	}
	
	private void validateMfgSerialNumber(String argMfgSerialNumber)
	{
		if (argMfgSerialNumber == null || argMfgSerialNumber.isEmpty())
		{
			throw new IllegalArgumentException("Invalid 'argMfgSerialNumber' argument!");
		}
	}

	/**
	 * USE IT ONLY FOR UNIT TESTS
	 */
	private Connection mockedConnection;

	public void setConnection(Connection mockedConnection)
	{
		this.mockedConnection = mockedConnection;
	}
	
	
	public String validateUserNamePassKey(String userName,String passKey,String agentID) throws Exception
	{
		String userNamePassKeyExists=null;
		String  sql = "SELECT * FROM " + CTFS_WICI_USER_INFO + " WHERE UPPER(USERNAME) = ?" + " AND PASSKEY = ?"+ " AND UPPER(ACTIVATED) = ?";	
		log.info("::SQL::" + sql);
		log.info("userName" + userName+"passKey"+passKey+"agentID"+agentID);
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			if (isSuperAdmin(agentID)) {
				log.info("isSuperAdmin");
				preparedStatement.setString(1, agentID.toUpperCase());
			} else {
				preparedStatement.setString(1, userName.toUpperCase());
			}
			preparedStatement.setString(2, passKey);
			preparedStatement.setString(3, "Y");
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();
			if (resultSet.next())
			{
				userNamePassKeyExists = resultSet.getString("ROLEID");
			}
		}
		catch (Exception ex) {
			ex.printStackTrace();
			DisposeBDResources(connection, preparedStatement, resultSet);
			throw ex;
		} finally {
			DisposeBDResources(connection, preparedStatement, resultSet);
		}
		return userNamePassKeyExists;
	}
	public boolean isSuperAdmin(String agentID) throws Exception
	{
		String sql = "SELECT * FROM " + CTFS_WICI_USER_INFO + " WHERE UPPER(USERNAME) = ?";
		log.info("::SQL::" + sql);
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		boolean isSuperAdmin=false;
		int roleId=0;
		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			String userNameUpperCase=agentID.toUpperCase();
			preparedStatement.setString(1, userNameUpperCase);
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();
			if (resultSet.next()) {
				log.info("Agent Is SuperAdmin");
				roleId = Integer.parseInt(resultSet.getString("ROLEID"));
			}
			if (roleId == 1001) {
				isSuperAdmin = true;
			}
		}
		catch (Exception ex) {
			DisposeBDResources(connection, preparedStatement, resultSet);
			throw ex;
		} finally {
			DisposeBDResources(connection, preparedStatement, resultSet);
		}
		return isSuperAdmin;
	}
	public boolean isSuperAdminOrAdmin(String userName) throws Exception
	{
		String sql = "SELECT * FROM " + CTFS_WICI_USER_INFO + " WHERE USERNAME = ?";
		log.info("::SQL::" + sql);
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		boolean isSuperAdminOrAdmin=false;
		int roleId=0;
		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			String userNameUpperCase = userName.toUpperCase();
			preparedStatement.setString(1, userNameUpperCase);
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();
			if (resultSet.next()) {
				roleId = Integer.parseInt(resultSet.getString("ROLEID"));
				log.info("SuperAdminOrAdmin RoleId" + roleId);
			}
			if (roleId == 1001 || roleId == 1002) {
				isSuperAdminOrAdmin = true;
			}
		}
		catch (Exception ex) {
			DisposeBDResources(connection, preparedStatement, resultSet);
			throw ex;
		} finally {
			DisposeBDResources(connection, preparedStatement, resultSet);
		}
		return isSuperAdminOrAdmin;
	}
	public int getRoleId(String rolename) throws Exception
	{
		int roleId=0;
		String sql = "SELECT * FROM " + CTFS_WICI_USER_ROLES
				+ " WHERE UPPER(ROLENAME) = ?";
		log.info("::SQL::" + sql);
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		try {
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, rolename.toUpperCase());
			preparedStatement.setMaxRows(1);
			resultSet = preparedStatement.executeQuery();
			if (resultSet.next()) {
				roleId = Integer.parseInt(resultSet.getString("ROLEID"));
			}
		} catch (Exception ex) {
			throw ex;
		} finally {
			DisposeBDResources(connection, preparedStatement, resultSet);
		}
		return roleId;
	}
	private String formatDate(Date date) {
        return date == null ? "" : dateFormatter.format(date);
    }
	public WICILoginResponse searchAgent(String userName,String agency,String userOperation,String agentID,String rollId) throws Exception
	{
		log.info("searchAgent...");
		String sql = "SELECT * FROM " + CTFS_WICI_USER_INFO + " WHERE UPPER(USERNAME) = ?" + " AND UPPER(AGENCY) = ?" + " AND UPPER(ACTIVATED) =?";
		log.info("::SQL::" + sql);
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		WICILoginResponse wiciLoginResponse=new WICILoginResponse();
		if (isSuperAdminOrAdmin(userName)) {
			wiciLoginResponse.setMessage(AGENT_NOT_FOUND_MSG);
			wiciLoginResponse.setStatusCode(AGENT_NOT_FOUND);
			return wiciLoginResponse;
		}
		String userRoleId=getUserRoleId(userName);
		log.info("userRoleId"+userRoleId);
		if (userRoleId != null && userRoleId.equalsIgnoreCase(rollId)) {
			wiciLoginResponse.setMessage(AGENT_NOT_FOUND_MSG);
			wiciLoginResponse.setStatusCode(AGENT_NOT_FOUND);
			return wiciLoginResponse;
		}
		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, userName.toUpperCase());
			preparedStatement.setString(2, agency.toUpperCase());
			preparedStatement.setString(3, "Y");
			resultSet = preparedStatement.executeQuery();
			if(resultSet!=null && resultSet.next())
			{
				log.info("ResultSet IS Not Empty");
				wiciLoginResponse.setEnrollmentDate(formatDate(resultSet.getDate("REGDATE")));
				String agentId=resultSet.getString("USERNAME");
				if (agentId != null) {
					wiciLoginResponse.setAgentId(agentId.substring(1));
					if(userOperation!=null&& userOperation.equalsIgnoreCase("update"))
					{
						wiciLoginResponse.setMessage(AGENT_FOUND_MSG);
						wiciLoginResponse.setStatusCode(UPDATE_AGENT_FOUND);	
					}
					else if(userOperation!=null&& userOperation.equalsIgnoreCase("delete"))
					{
						wiciLoginResponse.setMessage(AGENT_FOUND_MSG);
						wiciLoginResponse.setStatusCode(DELETE_AGENT_FOUND);	
					}
					else if(userOperation!=null&& userOperation.equalsIgnoreCase("search"))
					{
						wiciLoginResponse.setMessage(AGENT_FOUND_MSG);
						wiciLoginResponse.setStatusCode(SEARCH_AGENT_FOUND);	
					}
					
				} else {
					wiciLoginResponse.setMessage(AGENT_NOT_FOUND_MSG);
					wiciLoginResponse.setStatusCode(AGENT_NOT_FOUND);
				}
			}
			else
			{
				wiciLoginResponse.setMessage(AGENT_NOT_FOUND_MSG);
				wiciLoginResponse.setStatusCode(AGENT_NOT_FOUND);
			}
		}
		catch (Exception ex) {
			ex.printStackTrace();
			throw ex;
		} finally {
			DisposeBDResources(connection, preparedStatement, resultSet);
		}
		return wiciLoginResponse;
	}
	
	public WICILoginResponse searchAnyAgent(String userName) throws Exception
	{
		String sql = "SELECT * FROM " + CTFS_WICI_USER_INFO + " WHERE UPPER(USERNAME) = ? AND UPPER(ACTIVATED) =?";
		log.info("::SQL::" + sql);
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		WICILoginResponse wiciLoginResponse=new WICILoginResponse();
		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, userName.toUpperCase());
			preparedStatement.setString(2, ACTIVATED);
			resultSet = preparedStatement.executeQuery();
			if(resultSet!=null && resultSet.next())
			{
				wiciLoginResponse.setEnrollmentDate(formatDate(resultSet.getDate("REGDATE")));
				String agentId=resultSet.getString("USERNAME");
				if (agentId != null) {
					wiciLoginResponse.setAgentId(agentId.substring(1));
					{
						wiciLoginResponse.setMessage(AGENT_FOUND_MSG);
						wiciLoginResponse.setStatusCode(SEARCH_AGENT_FOUND);		
					}
				} else {
					wiciLoginResponse.setMessage(AGENT_NOT_FOUND_MSG);
					wiciLoginResponse.setStatusCode(AGENT_NOT_FOUND);
				}
			}
			else
			{
				wiciLoginResponse.setMessage(AGENT_NOT_FOUND_MSG);
				wiciLoginResponse.setStatusCode(AGENT_NOT_FOUND);
			}
		}
		catch (Exception ex) {
			ex.printStackTrace();
			throw ex;
		} finally {
			DisposeBDResources(connection, preparedStatement, resultSet);
		}
		return wiciLoginResponse;
	}
	
	public String getUserRoleId(String userName) throws Exception
	{
		String sql = "SELECT * FROM " + CTFS_WICI_USER_INFO + " WHERE UPPER(USERNAME) = ?";
		log.info("::SQL::" + sql);
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		String roleId=null;
		try
		{
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, userName.toUpperCase());
			resultSet = preparedStatement.executeQuery();
			if(resultSet!=null && resultSet.next()){
				roleId=resultSet.getString("ROLEID");
			}
		}
		catch (Exception ex) {
			ex.printStackTrace();
			throw ex;
		} finally {
			DisposeBDResources(connection, preparedStatement, resultSet);
		}
		return roleId;
	}

	public AccountApplicationSubmissionRequest retrieveAccountApplicationRequest(
			String argTransactionID) throws Exception {
		String sMethod = "[retrieveAccountApplicationRequest] ";
		log.info(sMethod + "::Called with parameter TRANSACTION_ID="
				+ argTransactionID);
		AccountApplicationSubmissionRequest accountApplicationRequest= new AccountApplicationSubmissionRequest();

		// Create sql statement
		String sql = "SELECT  REQUEST_DATA, CONSENT_GRANTED, ADM_APP_ID, UNIT_NUMBER, STREET_NUMBER, STREET_NAME, TRANSACTION_STATE FROM "
				+ WICIREQUESTQUEUETBL + " WHERE TRANSACTION_ID = ?";
		log.info(sMethod + "::SQL::" + sql);
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;

		try {
			connection = connectToDB(false);
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, argTransactionID);
			
			// Get only the first row from the table
			preparedStatement.setMaxRows(1);

			// Execute a query
			resultSet = preparedStatement.executeQuery();

			// Extract data from result set
			while (resultSet.next()) {
				// Retrieve accountApplication request

				String requestDataString = resultSet.getString("REQUEST_DATA");
				//log.info("the requestDataString .."+requestDataString);
				accountApplicationRequest.setConsentGranted(resultSet.getString("CONSENT_GRANTED"));
				accountApplicationRequest.setAdmAppId(resultSet.getString("ADM_APP_ID"));
				accountApplicationRequest.setUnitNumber(resultSet.getString("UNIT_NUMBER"));
				accountApplicationRequest.setStreetNumber(resultSet.getString("STREET_NUMBER"));
				accountApplicationRequest.setStreetName(resultSet.getString("STREET_NAME"));
				accountApplicationRequest.setTransactionState(resultSet.getString("TRANSACTION_STATE"));
				accountApplicationRequest.setRequestString(requestDataString);

			}
		} catch (Exception ex) {
			 ex.printStackTrace();
			throw ex;
		} finally {
			DisposeBDResources(connection, preparedStatement, resultSet);
		}

		return accountApplicationRequest;
	}
	
	public WICICheckLocationResponse retrieveUserLocationByHusky(
			WebICCheckLocationRequest locationRequest) throws Exception {
		String sMethod = "[retrieveUserLocationByHusky] ";

		// Create sql statement
		String sql = "SELECT * FROM TCT_PARTNER_STORE_LOC WHERE PARTNER_STORE_NUMBER = ?";
		WICICheckLocationResponse checkLocationResponse = null;
		log.info(sMethod + "::SQL::" + sql);
		String locationId = null;
//		String sale_otlt_nbr = null;
		Connection connection = null;
		ResultSet rs = null;
		PreparedStatement preparedStatement = null;
		String message = "SUCCESSFUL Authentication and authorization for user..";
		try {
			connection = connectToTCTSalesDB(false);

			preparedStatement = connection.prepareStatement(sql);

			if (locationRequest.getLocationID() != null)
				//locationId = Integer.parseInt(locationRequest.getLocationID());
			locationId = locationRequest.getLocationID();
				
			preparedStatement.setString(1, locationId);
			rs = preparedStatement.executeQuery();

			if (rs.next()) {
				checkLocationResponse = new WICICheckLocationResponse();

//				sale_otlt_nbr = rs.getString("PARTNER_STORE_NUMBER");

				checkLocationResponse.setMessage(message);
				checkLocationResponse.setOutletCity(rs.getString("OTLT_ADDR_CITY_NAM"));
//				checkLocationResponse.setOutletName(rs.getString("OUTLET_TYPE_NAM"));
				checkLocationResponse.setOutletNumber(rs.getString("PARTNER_STORE_NUMBER"));
				checkLocationResponse.setOutletPostal(rs.getString("OTLT_ADDR_PSTL_CD"));
				checkLocationResponse.setOutletProvince(rs.getString("OTLT_ADDR_PROV_CD"));
				checkLocationResponse.setOutletStreet(rs.getString("OTLT_ADDR_STREET"));
			}
		} catch (Exception ex) {
			log.warning(sMethod + "::Raise EXCEPTION::" + ex.getMessage());
			throw ex;
		} finally {
			DisposeBDResources(connection, preparedStatement, null);
		}
		return checkLocationResponse;
	}
	
}


