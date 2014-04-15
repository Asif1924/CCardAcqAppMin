package com.ctfs.BRB.Helper;

import java.util.UUID;

public class GUIDGenerator
{

	public UUID getGUID()
	{
		return java.util.UUID.randomUUID();
	}

	public String getGUIDAsString()
	{
		return getGUID().toString().toUpperCase();
	}

}
