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
		log.info("[PayloadHelper] ::Called::");
		validateContentType(argContentType);
		log.info("[PayloadHelper]::Content Type = " + CWE117Fix.encodeCRLF(argContentType.toString()));
		contentType = argContentType;
	}

	public void setPayload(StringBuffer argPayload)
	{
		
		log.info("setPayload::Called::");
		log.info("setPayload::Payload Data = " + CWE117Fix.encodeCRLF(argPayload != null ? argPayload.toString() : null));

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
		log.info("getPayload()::Called::");

		return payload.toString();
	}

	public EventType getEventType()
	{
		log.info("[getEventType] ::Called::");

		return EventType.fromValue(eventLogModel.getEventType());
	}

	public String getDeviceFriendlyName()
	{
		log.info("[getDeviceFriendlyName] ::Called::");

		return eventLogModel.getDeviceFriendlyName();
	}

	public String getSerialNumber()
	{
		log.info("[getSerialNumber] ::Called::");

		return eventLogModel.getSerialNumber();
	}

	public Boolean isWICIEvent()
	{
		log.info("isWICIEvent()::Called::");

		validateWICIEvent();

		String deviceFriendlyName = eventLogModel.getDeviceFriendlyName();
		return deviceFriendlyName.toUpperCase().startsWith(wiciEventMark);
	}

	public boolean isEnrolRequired()
	{
		log.info("[isEnrolRequired] ::Called::");

		return getEventType() == EventType.COMPROMISED_STATUS_CHANGED;
	}

	public boolean isDeEnrolRequired()
	{
		log.info("[isDeEnrolRequired] ::Called::");

		return getEventType() == EventType.BREAK_MDM_CONFIRMED || getEventType() == EventType.DEVICE_ENTERPRISE_WIPE_REQUESTED;
	}

	public void setWICIEventMark(String argWICIEventMark)
	{
		log.info("[setWICIEventMark] ::Called::");
		log.info("[setWICIEventMark] ::Argument WICI Event Mark = " + CWE117Fix.encodeCRLF(argWICIEventMark));
		
		validateWICIEventMark(argWICIEventMark);

		this.wiciEventMark = argWICIEventMark.toUpperCase();
		
		log.info("::WICI Event Mark = " + CWE117Fix.encodeCRLF(wiciEventMark));
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
		log.info("[validateContentType] ::Called::");

		if (argRequestContentType == null || argRequestContentType == ContentType.INCORRECT_MIME_TYPE)
		{
			throw new IllegalArgumentException("Invalid 'RequestContentType' argument!");
		}
	}

	private void validatePayLoad(StringBuffer argPayload)
	{
		//String sMethod = "[validatePayLoad] ";
		log.info("[validatePayLoad]::Called::");

		if (argPayload == null || argPayload.length() == 0)
		{
			throw new IllegalArgumentException("Invalid 'Payload' argument!");
		}
	}

	private void validateWICIEvent()
	{
		log.info("[validateWICIEvent] ::Called::");

		if (wiciEventMark == null || wiciEventMark.length() == 0)
		{
			throw new IllegalStateException("Invalid 'wiciEventMark'!");
		}
	}
}