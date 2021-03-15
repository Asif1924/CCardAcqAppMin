package com.ctfs.WICI.Helper;

import java.util.Random;
 

public class UniqueIDGenerator
{
	public long getUniqueID()
	{
		Random randomno = new Random();
		return randomno.nextLong();
	}
	
}
