package com.brb.brbsimulatorcontroller.exception;

public class InetDataBaseException extends Exception {
	public Throwable nested;
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public InetDataBaseException(String message) {
		super(message);
	}

	public InetDataBaseException(String message, Throwable exception) {
		super(message);
		nested = exception;
	}
}
