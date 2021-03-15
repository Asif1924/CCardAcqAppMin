package com.ctfs.WICI.Model;

public class IllegalAppVersionException extends Exception
{	
	private static final long serialVersionUID = 5576467992407351452L;	

	public IllegalAppVersionException(String str){
		super(str);
	}
}
