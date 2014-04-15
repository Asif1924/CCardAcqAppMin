package com.ctfs.BRB.Model;

public class SQLInjectionAttackException extends Exception
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public SQLInjectionAttackException(String str){
		super(str);
	}
}
