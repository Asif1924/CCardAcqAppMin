package com.ctfs.WICI.TestCase;

import org.junit.Before;
import org.junit.Test;
import org.junit.Assert;
import com.ctfs.WICI.Helper.WICIDBHelper;


public class WICIDBHelperTest
{
	private WICIDBHelper systemUnderTest;
	
	@Before
	public void setUp()
	{
		systemUnderTest = new WICIDBHelper();
	}

	
	@Test
	public void test_instantiation_works()
	{
		Assert.assertTrue(systemUnderTest!=null);
	}
/*
	@Before
	public void setUp()
	{
		helper = new BRBDBHelper();
	}

	@Test
	public void test_for_right_sql_query()
	{
		StateTrackerTableEntity entity = new StateTrackerTableEntity();
		entity.setAbandonScreenId(new BigDecimal("55"));
		entity.setAppId("1111");
		entity.setEndDateTime(new Timestamp(Calendar.getInstance().getTimeInMillis()));
		Holder holder = helper.buildUpdateSqlQueryForStateTracker(entity);
		String sqlValue = holder.getSqlValue();
		assertEquals(" UPDATE webic_app.BRB_STATE_TRACKER SET ABANDONSCREENID =?, ENDDATETIME =? WHERE APPID =?", sqlValue);

	}

	@Test
	public void test_for_right_sql_with_multiple_parametrs()
	{
		StateTrackerTableEntity entity = new StateTrackerTableEntity();
		entity.setAbandonScreenId(new BigDecimal("55"));
		entity.setAppId("1111");
		entity.setEndDateTime(new Timestamp(Calendar.getInstance().getTimeInMillis()));
		entity.setStartDateTime(new Timestamp(Calendar.getInstance().getTimeInMillis()));
		Holder holder = helper.buildUpdateSqlQueryForStateTracker(entity);
		String sqlValue = holder.getSqlValue();
		assertEquals(" UPDATE webic_app.BRB_STATE_TRACKER SET ABANDONSCREENID =?, ENDDATETIME =?, STARTDATETIME =? WHERE APPID =?", sqlValue);
	}

	@Test(expected = IllegalArgumentException.class)
	public void test_for_right_exception_when_transactionId_is_not_seted()
	{
		StateTrackerTableEntity entity = new StateTrackerTableEntity();
		entity.setStartDateTime(new Timestamp(Calendar.getInstance().getTimeInMillis()));
		Holder holder = helper.buildUpdateSqlQueryForStateTracker(entity);
		String sqlValue = holder.getSqlValue();
		assertEquals(" UPDATE webic_app.BRB_STATE_TRACKER SET ABANDONSCREENID =?, ENDDATETIME =?, STARTDATETIME =? WHERE APPID =?", sqlValue);
	}

	@Test
	public void test_for_right_query_for_one_parametr()
	{
		StateTrackerTableEntity entity = new StateTrackerTableEntity();
		entity.setAppId("1111");
		entity.setStartDateTime(new Timestamp(Calendar.getInstance().getTimeInMillis()));
		Holder holder = helper.buildUpdateSqlQueryForStateTracker(entity);
		String sqlValue = holder.getSqlValue();
		assertEquals(" UPDATE webic_app.BRB_STATE_TRACKER SET STARTDATETIME =? WHERE APPID =?", sqlValue);
	}

	@Test
	public void test_for_right_sequence_of_values_in_statement() throws SQLException
	{
		PreparedStatement preparedStatementMock = mock(PreparedStatement.class);
		Connection mockedConnection = mock(Connection.class);
		helper.setConnection(mockedConnection);
		StateTrackerTableEntity entity = new StateTrackerTableEntity();
		String appid = "1111";
		entity.setAppId(appid);
		Timestamp startdatetime = new Timestamp(Calendar.getInstance().getTimeInMillis());
		entity.setStartDateTime(startdatetime);
		Holder sqlQuery = helper.buildUpdateSqlQueryForStateTracker(entity);
		when(mockedConnection.prepareStatement(sqlQuery.getSqlValue())).thenReturn(preparedStatementMock);
		helper.updateStateTrackerTable(entity);
		verify(preparedStatementMock).setTimestamp(1, startdatetime);
		verify(preparedStatementMock).setString(2, appid);
	}
	@Test
	public void test_for_right_sequence_of_multiple_values_in_statement_for_update_query() throws SQLException
	{
		PreparedStatement preparedStatementMock = mock(PreparedStatement.class);
		Connection mockedConnection = mock(Connection.class);
		helper.setConnection(mockedConnection);
		StateTrackerTableEntity entity = new StateTrackerTableEntity();
		String appid = "1111";
		entity.setAppId(appid);
		BigDecimal abandonscreenid = new BigDecimal("11");
		entity.setAbandonScreenId(abandonscreenid);
		BigDecimal appstateid = new BigDecimal("23");
		entity.setAppStateId(appstateid);
		Timestamp startdatetime = new Timestamp(Calendar.getInstance().getTimeInMillis());
		entity.setEndDateTime(startdatetime);
		entity.setStartDateTime(startdatetime);
		Holder sqlQuery = helper.buildUpdateSqlQueryForStateTracker(entity);
		when(mockedConnection.prepareStatement(sqlQuery.getSqlValue())).thenReturn(preparedStatementMock);
		helper.updateStateTrackerTable(entity);
		verify(preparedStatementMock).setBigDecimal(1, abandonscreenid);
		verify(preparedStatementMock).setBigDecimal(2, appstateid);
		verify(preparedStatementMock).setTimestamp(3, startdatetime);
		verify(preparedStatementMock).setTimestamp(4, startdatetime);
		verify(preparedStatementMock).setString(5, appid);
	}
	
	@Test
	public void test_for_insertDataIntoCustomerTransactionTbl()throws SQLException{
		PreparedStatement preparedStatementMock = mock(PreparedStatement.class);
		Connection mockedConnection = mock(Connection.class);
		helper.setConnection(mockedConnection);
		CustomerTransactionTableEntity entity = new CustomerTransactionTableEntity();
		entity.setTransactionId("11dafdasdf1");
		entity.setEcommCustomerId("EcommCustomerId");
		entity.setEmail("Email");
		entity.setFirstName("FirstName");
		entity.setLastName("LastName");
		entity.setAddressLine1("AddressLine1");
		entity.setAddressLine2("AddressLine2");
		entity.setCity("City");
		entity.setProvince("Province");
		entity.setPostalCode("PostalCode");
		entity.setPhone("Phone");
		entity.setLoyaltyNumber("LoyaltyNumber");
		entity.setLoyaltyProgram("LoyaltyProgram");
		entity.setTransactionDate(new Timestamp(Calendar.getInstance().getTimeInMillis()));
		entity.setRequestingSystem("asdf");
		String insertStatement = "INSERT INTO "
				+ BRBDBHelper.CUSTOMERTRANSACTION_TABLENAME
				+ " (TRANSACTIONID, PROFILEID, EMAIL, FIRSTNAME, LASTNAME, ADDRESSLINE1, ADDRESSLINE2, CITY, PROVINCE, POSTALCODE, PHONENUMBER, LOYALTYNUMBER, LOYALTYPROGRAM, TRANSACTIONDATE, REQUESTINGSYSTEM)"
				+ " VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		when(mockedConnection.prepareStatement(insertStatement)).thenReturn(preparedStatementMock);
		helper.insertIntoCustomerTransactionTable(entity);
		verify(preparedStatementMock).setString(1, entity.getTransactionId());
		verify(preparedStatementMock).setString(2, entity.getEcommCustomerId());
		verify(preparedStatementMock).setString(3, entity.getEmail());
		verify(preparedStatementMock).setString(4, entity.getFirstName());
		verify(preparedStatementMock).setString(5, entity.getLastName());
		verify(preparedStatementMock).setString(6, entity.getAddressLine1());
		verify(preparedStatementMock).setString(7, entity.getAddressLine2());
		verify(preparedStatementMock).setString(8, entity.getCity());
		verify(preparedStatementMock).setString(9, entity.getProvince());
		verify(preparedStatementMock).setString(10, entity.getPostalCode());
		verify(preparedStatementMock).setString(11, entity.getPhone());
		verify(preparedStatementMock).setString(12, entity.getLoyaltyNumber());
		verify(preparedStatementMock).setString(13, entity.getLoyaltyProgram());
		verify(preparedStatementMock).setTimestamp(14, entity.getTransactionDate());
		verify(preparedStatementMock).setString(15, "asdf");
	}
	
	@Test
	public void test_for_getDataFromCustomerTransactionTbl()throws SQLException{
		PreparedStatement preparedStatementMock = mock(PreparedStatement.class);
		Connection mockedConnection = mock(Connection.class);
		helper.setConnection(mockedConnection);
		ResultSet resultSet = mock(ResultSet.class);
		when(resultSet.next()).thenReturn(true).thenReturn(false);
		when(preparedStatementMock.executeQuery()).thenReturn(resultSet);
		
		when(resultSet.getString("PROFILEID")).thenReturn("EcommCustomerId");
		when(resultSet.getString("EMAIL")).thenReturn("Email");
		when(resultSet.getString("FIRSTNAME")).thenReturn("FirstName");
		when(resultSet.getString("LASTNAME")).thenReturn("LastName");
		when(resultSet.getString("ADDRESSLINE1")).thenReturn("AddressLine1");
		when(resultSet.getString("ADDRESSLINE2")).thenReturn("AddressLine2");
		when(resultSet.getString("CITY")).thenReturn("City");
		when(resultSet.getString("PROVINCE")).thenReturn("Province");
		when(resultSet.getString("POSTALCODE")).thenReturn("PostalCode");
		when(resultSet.getString("PHONENUMBER")).thenReturn("Phone");
		when(resultSet.getString("LOYALTYNUMBER")).thenReturn("LoyaltyNumber");
		when(resultSet.getString("LOYALTYPROGRAM")).thenReturn("LoyaltyProgram");
		when(resultSet.getString("REQUESTINGSYSTEM")).thenReturn("RequestingSystem");
		
		CustomerTransactionTableEntity entity = new CustomerTransactionTableEntity();
		entity.setEcommCustomerId("EcommCustomerId");
		entity.setEmail("Email");
		entity.setFirstName("FirstName");
		entity.setLastName("LastName");
		entity.setAddressLine1("AddressLine1");
		entity.setAddressLine2("AddressLine2");
		entity.setCity("City");
		entity.setProvince("Province");
		entity.setPostalCode("PostalCode");
		entity.setPhone("Phone");
		entity.setLoyaltyNumber("LoyaltyNumber");
		entity.setLoyaltyProgram("LoyaltyProgram");
		entity.setRequestingSystem("RequestingSystem");
		
		String sql = "SELECT TRANSACTIONID, PROFILEID, EMAIL, FIRSTNAME, LASTNAME, ADDRESSLINE1, ADDRESSLINE2, CITY, PROVINCE, POSTALCODE, PHONENUMBER, LOYALTYNUMBER, LOYALTYPROGRAM, REQUESTINGSYSTEM "
				+ "FROM " + BRBDBHelper.CUSTOMERTRANSACTION_TABLENAME + " WHERE TRANSACTIONID = ?";
		
		when(mockedConnection.prepareStatement(sql)).thenReturn(preparedStatementMock);
		
		CustomerTransactionTableEntity returnedEntity = (CustomerTransactionTableEntity) helper.getFromCustomerTransactionTable("1111");
		assertEquals(returnedEntity, entity);
	}
	
	
	@Test( expected = SQLInjectionAttackException.class)
	public void test_for_deleteDataFromCustomerTransactionTbl()throws SQLException, NamingException, SQLInjectionAttackException{
		PreparedStatement preparedStatementMock = mock(PreparedStatement.class);
		Connection mockedConnection = mock(Connection.class);
		helper.setConnection(mockedConnection);
		
		String sql = "DELETE FROM " + BRBDBHelper.CUSTOMERTRANSACTION_TABLENAME + " WHERE TRANSACTIONID = ?";
		
		when(mockedConnection.prepareStatement(sql)).thenReturn(preparedStatementMock);
		
		helper.deleteFromCustomerTransactionTable("1111");
		verify(preparedStatementMock).setString(1, "1111");
	}
*/
	
}
