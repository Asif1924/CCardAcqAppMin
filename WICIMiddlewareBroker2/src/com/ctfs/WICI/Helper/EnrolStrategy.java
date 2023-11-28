package com.ctfs.WICI.Helper;

import java.util.logging.Logger;

import com.ctfs.WICI.Interfaces.IEnrolStrategy;

public class EnrolStrategy implements IEnrolStrategy
{
	static Logger log = Logger.getLogger(EnrolStrategy.class.getName());	
	private String serialNumber;
	
	public EnrolStrategy(String argSerialNumber)
	{
		serialNumber = argSerialNumber;
	}
	
	@Override
	public void executeOperation() throws Exception
	{
		
		log.info("executeOperation()[executeOperation] ::Called::");
		
		WICIDBHelper wicidbHelper = new WICIDBHelper();
		wicidbHelper.enrolWICIDevice( serialNumber);
	}
}
