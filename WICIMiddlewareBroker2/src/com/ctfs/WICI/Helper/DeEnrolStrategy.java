package com.ctfs.WICI.Helper;

import java.util.logging.Logger;

import com.ctfs.WICI.Interfaces.IEnrolStrategy;

public class DeEnrolStrategy implements IEnrolStrategy
{
	static Logger log = Logger.getLogger(DeEnrolStrategy.class.getName());
	private String serialNumber;
	
	public DeEnrolStrategy(String argSerialNumber)
	{
		serialNumber = argSerialNumber;
	}
	
	@Override
	public void executeOperation() throws Exception
	{
		String sMethod = "[executeOperation] ";
		log.info(sMethod + "::Called::");
		
		WICIDBHelper wicidbHelper = new WICIDBHelper();
		wicidbHelper.deEnrolWICIDevice( serialNumber);
	}
}