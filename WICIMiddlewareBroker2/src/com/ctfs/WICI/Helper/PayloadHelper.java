package com.ctfs.WICI.Helper;

import java.util.logging.Logger;

import com.ctfs.WICI.Enums.ContentType;
import com.ctfs.WICI.Enums.EventType;
import com.ctfs.WICI.Interfaces.IPayloadConversion;
import com.ctfs.WICI.Model.Eventlog;

public class PayloadHelper
{
	static Logger log = Logger.getLogger(PayloadHelper.class.getName());

	private ContentType contentType;
	private StringBuffer payload;
	private Eventlog eventLogModel;
	private String wiciEventMark;

	public PayloadHelper(ContentType argContentType)
	{
		String sMethod = "[PayloadHelper] ";
		log.info(sMethod + "::Called::");
		validateContentType(argContentType);
		log.info(sMethod + "::Content Type = " + argContentType.toString());
		contentType = argContentType;
	}

	public void setPayload(StringBuffer argPayload)
	{
		String sMethod = "[setPayload] ";
		log.info(sMethod + "::Called::");
		log.info(sMethod + "::Payload Data = " + argPayload);

		validatePayLoad(argPayload);

		payload = argPayload;
		IPayloadConversion converter;
		if (contentType == ContentType.XML || contentType == ContentType.APPLICATION_X_WWW_FORM_URLENCODED)
		{
			converter = new PayloadXMLConverter();
		}
		else
		{
			converter = new PayloadJSONConverter();
		}
		eventLogModel = converter.convertToModel(argPayload.toString());
	}

	public String getPayload()
	{
		String sMethod = "[getPayload] ";
		log.info(sMethod + "::Called::");

		return payload.toString();
	}

	public EventType getEventType()
	{
		String sMethod = "[getEventType] ";
		log.info(sMethod + "::Called::");

		return EventType.fromValue(eventLogModel.getEventType());
	}

	public String getDeviceFriendlyName()
	{
		String sMethod = "[getDeviceFriendlyName] ";
		log.info(sMethod + "::Called::");

		return eventLogModel.getDeviceFriendlyName();
	}

	public String getSerialNumber()
	{
		String sMethod = "[getSerialNumber] ";
		log.info(sMethod + "::Called::");

		return eventLogModel.getSerialNumber();
	}

	public Boolean isWICIEvent()
	{
		String sMethod = "[isWICIEvent] ";
		log.info(sMethod + "::Called::");

		validateWICIEvent();

		String deviceFriendlyName = eventLogModel.getDeviceFriendlyName();
		return deviceFriendlyName.toUpperCase().startsWith(wiciEventMark);
	}

	public boolean isEnrolRequired()
	{
		String sMethod = "[isEnrolRequired] ";
		log.info(sMethod + "::Called::");

		return getEventType() == EventType.COMPROMISED_STATUS_CHANGED;
	}

	public boolean isDeEnrolRequired()
	{
		String sMethod = "[isDeEnrolRequired] ";
		log.info(sMethod + "::Called::");

		return getEventType() == EventType.BREAK_MDM_CONFIRMED || getEventType() == EventType.DEVICE_ENTERPRISE_WIPE_REQUESTED;
	}

	public void setWICIEventMark(String argWICIEventMark)
	{
		String sMethod = "[setWICIEventMark] ";
		log.info(sMethod + "::Called::");
		log.info(sMethod + "::Argument WICI Event Mark = " + argWICIEventMark);
		
		validateWICIEventMark(argWICIEventMark);

		this.wiciEventMark = argWICIEventMark.toUpperCase();
		
		log.info(sMethod + "::WICI Event Mark = " + wiciEventMark);
	}

	private void validateWICIEventMark(String argWICIEventMark)
	{
		if (argWICIEventMark == null || argWICIEventMark.isEmpty())
		{
			throw new IllegalArgumentException("Invalid 'argWICIEventMark' argument!");
		}
	}
	
	private void validateContentType(ContentType argRequestContentType)
	{
		String sMethod = "[validateContentType] ";
		log.info(sMethod + "::Called::");

		if (argRequestContentType == null || argRequestContentType == ContentType.INCORRECT_MIME_TYPE)
		{
			throw new IllegalArgumentException("Invalid 'RequestContentType' argument!");
		}
	}

	private void validatePayLoad(StringBuffer argPayload)
	{
		String sMethod = "[validatePayLoad] ";
		log.info(sMethod + "::Called::");

		if (argPayload == null || argPayload.length() == 0)
		{
			throw new IllegalArgumentException("Invalid 'Payload' argument!");
		}
	}

	private void validateWICIEvent()
	{
		String sMethod = "[validateWICIEvent] ";
		log.info(sMethod + "::Called::");

		if (wiciEventMark == null || wiciEventMark.length() == 0)
		{
			throw new IllegalStateException("Invalid 'wiciEventMark'!");
		}
	}
}