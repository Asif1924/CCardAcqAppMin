package com.ctfs.WICI.Model;

public class FileContentsResult {
	String		rawContents	=	null;
	String		errorCode	=	null;

	public String getRawContents() {
		return rawContents;
	}
	public void setRawContents(String rawContents) {
		this.rawContents = rawContents;
	}
	public String getErrorCode() {
		return errorCode;
	}
	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}
}
