package com.ctfs.BRB.Helper;
  
public class ConfigurationException extends Exception {
	
	public ConfigurationException(String value)
	{
		super(value);
	}
	public ConfigurationException(String value, Exception e)
	{
		super(value, e);
	}

}
