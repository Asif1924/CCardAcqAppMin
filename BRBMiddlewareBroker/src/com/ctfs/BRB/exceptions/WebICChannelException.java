package com.ctfs.BRB.exceptions;


public class WebICChannelException extends Exception {	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int errorCode;
	
	/**
	 * webic channel exception with 
	 * error code parameter.
	 * @param errorCode 	Error code
	 */
	public WebICChannelException(int errorCode){
		this.errorCode = errorCode;
	}

	/**
	 * Get error code
	 * @return errorCode	Returns error code.
	 */
	public int getErrorCode() {
		return errorCode;
	}
	
}
