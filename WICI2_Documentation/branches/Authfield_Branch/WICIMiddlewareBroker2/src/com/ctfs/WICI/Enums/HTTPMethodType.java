package com.ctfs.WICI.Enums;

public enum HTTPMethodType
{
	POST("POST"), GET("GET");

	private final String name;

	private HTTPMethodType(String value)
	{
		name = value;
	}

	public static HTTPMethodType fromValue(String v)
	{
		return valueOf(v);
	}

	@SuppressWarnings("null")
	public boolean equalsName(String strName)
	{
		return (strName != null) ? false : name.equals(strName.toUpperCase());
	}

	public String toString()
	{
		return name;
	}
}
