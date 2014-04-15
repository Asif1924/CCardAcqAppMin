package com.ctfs.WICI.Model;

public class UnauthorizedDeviceException extends Exception
{
	private static final long serialVersionUID = 557646492407351452L;

	public UnauthorizedDeviceException(String str){
		super(str);
	}
}
