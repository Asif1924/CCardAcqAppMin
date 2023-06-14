package com.ctfs.WICI;

/**
 * AppConstants class contains the constants that WICI apps needs
 */

public class AppConstants
{

	public final static String MIDDLEWARE_TRANSACTION_ID = "WICIMiddlewareTransactionId";
	public final static String QUEUE_REQUEST_SUBMIT = "SUBMIT";
	public final static String QUEUE_REQUEST_PENDING = "PENDING";
	public final static String QUEUE_REQUEST_COMPLETE = "COMPLETE";

	public final static String	APP_STATUS_PENDING = "PENDING";
	
	public final static String PURGE_REQUEST_SUCCESS = "PURGE_SUCCESS";
	public final static String PURGE_REQUEST_FAILED = "PURGE_FAILED";
	public final static String PURGE_REQUEST_DBFAILED = "PURGE_FAILED_ERROR_CLOSING_DB_CONNECTION";
	
	public final static String RETRIEVE_ACCOUNTAPPLICATION_REQUEST_SUCCESS = "RETRIEVE_SUCCESS";
	public final static String RETRIEVE_ACCOUNTAPPLICATION_REQUEST_FAILED = "RETRIEVE_FAILED";

	public final static String PEND_RETRIEVE_ACCOUNTAPPLICATION_REQUEST_SUCCESS = "PEND_RETRIEVE_SUCCESS";
	public final static String PEND_RETRIEVE_ACCOUNTAPPLICATION_REQUEST_FAILED = "PEND_RETRIEVE_FAILED";

	public final static String PEND_ACCOUNT_APPLICATION_REQUEST_UPDATE_SUCCESS = "SUCCESS";
	public final static String PEND_ACCOUNT_APPLICATION_REQUEST_UPDATE_FAILURE = "FAILURE";
	public final static String USER="User";
	public final static String CREATE="create";
	public final static String ACTIVATED="Y";
	public final static String UPDATE="update";
	public final static String CONFIRM_UPDATE="confirmUpdate";
	public final static String DELETE="delete";
	public final static String CONFIRM_DELETE="confirmDelete";
	public final static String SEARCH="search";
	public final static String ADMIN="1002"; 
	public final static String SUPER_ADMIN="1001"; 
	public final static String AGENT_ID_CREATED="3000";
	public final static String AGENT_ID_CREATED_MSG="Agent ID Created Successfully";
	public final static String UPDATED_AGENT="3005";
	public final static String UPDATED_AGENT_MSG="Agent Id Successfully Updated";
	public final static String UPDATE_AGENT_FAILED="3006";
	public final static String UPDATE_AGENT_FAILED_MSG="Agent Id Not Updated Successfully";
	public final static String UPDATE_AGT_DENIED_MSG="Updating for Agent Id Perimission Denied";
	public final static String DELETED_AGENT="3007";
	public final static String DELETED_AGENT_MSG="Agent ID Deleted Successfully";
	public final static String DEL_AGENT_FAILED="3008";
	public final static String DEL_AGENT_FAILED_MSG="Agent ID Not Deleted Successfully";
	public final static String DEL_AGT_PER_DENIED_MSG="Deleting for Agent Id Perimission Denied";
	public final static String UPDATE_AGENT_FOUND="3001";
	public final static String DELETE_AGENT_FOUND="3002";
	public final static String SEARCH_AGENT_FOUND="3003";
	public final static String AGENT_FOUND_MSG="Agent Found";
	public final static String AGENT_NOT_FOUND="3004";
	public final static String AGENT_NOT_FOUND_MSG="Agent Not Found";
	public final static String DUPLICATE_AGENT="4000";
	public final static String DUPLICATE_AGENT_MSG="Agent ID already Exists";
	public final static String SERVICE_FAILURE="4000";
	public final static String SERVICE_FAILURE_MSG="General Exception";
	public final static String LOGIN_FAILED="Login Failed";
	public final static String LOGIN_FAILED_CD="5000";
	
	
	
}

