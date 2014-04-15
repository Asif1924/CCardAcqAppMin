package com.ctfs.WICI.Model;

public class Eventlog
{
	protected String EventId;
	protected String EventType;
	protected String DeviceId;
	protected String DeviceFriendlyName;
	protected String EnrollmentEmailAddress;
	protected String EnrollmentUserName;
	protected String EventTime;
	protected String EnrollmentStatus;
	protected String CompromisedStatus;
	protected String CompromisedTimeStamp;
	protected String ComplianceStatus;
	protected String PhoneNumber;
	protected String Udid;
	protected String SerialNumber;
	protected String MACAddress;

	public String getEventId()
	{
		return EventId;
	}

	public void setEventId(String eventId)
	{
		this.EventId = eventId;
	}

	public String getEventType()
	{
		return (EventType!=null) ? EventType.trim().toUpperCase().replace(" ", "") : "";
	}

	public void setEventType(String eventType)
	{
		this.EventType = eventType;
	}

	public String getDeviceId()
	{
		return DeviceId;
	}

	public void setDeviceId(String deviceId)
	{
		this.DeviceId = deviceId;
	}

	public String getDeviceFriendlyName()
	{
		return DeviceFriendlyName;
	}

	public void setDeviceFriendlyName(String deviceFriendlyName)
	{
		this.DeviceFriendlyName = deviceFriendlyName;
	}

	public String getEnrollmentEmailAddress()
	{
		return EnrollmentEmailAddress;
	}

	public void setEnrollmentEmailAddress(String enrollmentEmailAddress)
	{
		this.EnrollmentEmailAddress = enrollmentEmailAddress;
	}

	public String getEnrollmentUserName()
	{
		return EnrollmentUserName;
	}

	public void setEnrollmentUserName(String enrollmentUserName)
	{
		EnrollmentUserName = enrollmentUserName;
	}

	public String getEventTime()
	{
		return EventTime;
	}

	public void setEventTime(String eventTime)
	{
		this.EventTime = eventTime;
	}

	public String getEnrollmentStatus()
	{
		return EnrollmentStatus;
	}

	public void setEnrollmentStatus(String enrollmentStatus)
	{
		this.EnrollmentStatus = enrollmentStatus;
	}

	public String getCompromisedStatus()
	{
		return CompromisedStatus;
	}

	public void setCompromisedStatus(String compromisedStatus)
	{
		this.CompromisedStatus = compromisedStatus;
	}

	public String getCompromisedTimeStamp()
	{
		return CompromisedTimeStamp;
	}

	public void setCompromisedTimeStamp(String compromisedTimeStamp)
	{
		this.CompromisedTimeStamp = compromisedTimeStamp;
	}

	public String getComplianceStatus()
	{
		return ComplianceStatus;
	}

	public void setComplianceStatus(String complianceStatus)
	{
		this.ComplianceStatus = complianceStatus;
	}

	public String getPhoneNumber()
	{
		return PhoneNumber;
	}

	public void setPhoneNumber(String phoneNumber)
	{
		this.PhoneNumber = phoneNumber;
	}

	public String getUdid()
	{
		return Udid;
	}

	public void setUdid(String udid)
	{
		this.Udid = udid;
	}

	public String getSerialNumber()
	{
		return SerialNumber;
	}

	public void setSerialNumber(String serialNumber)
	{
		this.SerialNumber = serialNumber;
	}

	public String getMACAddress()
	{
		return MACAddress;
	}

	public void setMACAddress(String mACAddress)
	{
		MACAddress = mACAddress;
	}

}
