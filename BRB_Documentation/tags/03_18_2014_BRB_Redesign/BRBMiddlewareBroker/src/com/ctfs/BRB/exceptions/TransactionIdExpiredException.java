package com.ctfs.BRB.exceptions;

public class TransactionIdExpiredException extends Exception
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 4953588676825419091L;

	public TransactionIdExpiredException(String str){
		super(str);
	}
}
