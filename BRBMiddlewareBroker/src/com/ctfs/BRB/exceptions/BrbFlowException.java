/**
 * 
 */
package com.ctfs.BRB.exceptions;

/**
 * @author Pavlo_Dudchenok
 *
 */
public class BrbFlowException extends Exception
{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	public BrbFlowException()
	{
	}

	/**
	 * @param message
	 */
	public BrbFlowException(String message)
	{
		super(message);
	}

	/**
	 * @param cause
	 */
	public BrbFlowException(Throwable cause)
	{
		super(cause);
	}

	/**
	 * @param message
	 * @param cause
	 */
	public BrbFlowException(String message, Throwable cause)
	{
		super(message, cause);
	}

}
