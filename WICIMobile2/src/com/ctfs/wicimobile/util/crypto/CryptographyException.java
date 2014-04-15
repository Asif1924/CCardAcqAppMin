package com.ctfs.wicimobile.util.crypto;

public class CryptographyException extends Exception 
{
	static final long serialVersionUID = -5178834881710562896L;
	
	public static final int CODE_0 = 0;
	public static final int KEYSTORE_PROBLEM = 1;
	public static final int PROVIDER_PROBLEM = 2;
	public static final int CERTIFICATE_PROBLEM = 3;
	public static final int KEYNAME_PROBLEM = 4;
	public static final int FUNCTION_NOT_IMPLEMENTED = 5;
	public static final int ALGORITHM_PROBLEM = 6;
	public static final int KEY_PROBLEM = 7;
	public static final int UNDEFINED_PROBLEM = 99;
	
	private int errorCode = CODE_0;
	
	public int getErrorCode() {
		return errorCode;
	}
	
	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}
	
	public CryptographyException(int code, String message)
	{
		super(message);
		setErrorCode(code);
	}
	public CryptographyException()
	{
		super();
	}
}
