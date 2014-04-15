package com.ctfs.BRB.persistservice;

import javax.xml.transform.TransformerException;

public class PersistTransactionIdException extends TransformerException
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public PersistTransactionIdException(String message)
	{
		super(message);
	}
}
