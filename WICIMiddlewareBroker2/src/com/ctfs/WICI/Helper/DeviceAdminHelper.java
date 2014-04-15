package com.ctfs.WICI.Helper;

import java.util.logging.Logger;

import com.ctfs.WICI.Enums.ContentType;
import com.ctfs.WICI.Interfaces.IEnrolStrategy;

public class DeviceAdminHelper
{
	static Logger log = Logger.getLogger(DeviceAdminHelper.class.getName());

	PayloadHelper payloadHelper;
	IEnrolStrategy enrolStrategy;

	public DeviceAdminHelper(String argPayloadData, ContentType argRequestContentType)
	{
		String sMethod = "[DeviceAdminHelper] ";
		log.info(sMethod + "::Called::");

		payloadHelper = new PayloadHelper(argRequestContentType);
		payloadHelper.setPayload(new StringBuffer(argPayloadData));
	}

	public void processPayload() throws Exception
	{
		String sMethod = "[processPayload] ";
		log.info(sMethod + "::Called::");

		WICIDBHelper wicidbHelper = new WICIDBHelper();
		String airwatchDFNSearchPrefix = wicidbHelper.getAirwatchDFNSearchPrefix();
		payloadHelper.setWICIEventMark(airwatchDFNSearchPrefix);

		validatePayloadHelper();

		if (!payloadHelper.isWICIEvent())
		{
			log.info(sMethod + "::No 'WICIEvent' has been detected!");
			return;
		}

		if (payloadHelper.isEnrolRequired())
		{
			enrolStrategy = new EnrolStrategy(payloadHelper.getSerialNumber());
		}
		else if (payloadHelper.isDeEnrolRequired())
		{
			enrolStrategy = new DeEnrolStrategy(payloadHelper.getSerialNumber());
		}
		else
		{
			throw new IllegalArgumentException("No correct 'Airwatch' type has been detected");
		}

		enrolStrategy.executeOperation();
	}

	private void validatePayloadHelper()
	{
		String sMethod = "[validatePayloadHelper] ";
		log.info(sMethod + "::Called::");

		if (payloadHelper == null)
		{
			throw new IllegalArgumentException("Invalid 'PayloadHelper' argument!");
		}
	}
}
