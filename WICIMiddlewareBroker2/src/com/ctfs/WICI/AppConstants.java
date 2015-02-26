package com.ctfs.WICI;

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
}
