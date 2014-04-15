package com.ctfs.WICI.Enums;

public enum EventType
{
	//COMPROMISED_STATUS_CHANGED("CompromisedStatusChanged"),
	//BREAK_MDM_CONFIRMED("BreakMDMConfirmed"),
	//DEVICE_ENTERPRISE_WIPE_REQUESTED("DeviceEnterpriseWipeRequested"),

	COMPROMISED_STATUS_CHANGED("COMPROMISEDSTATUSCHANGED"),
	BREAK_MDM_CONFIRMED("BREAKMDMCONFIRMED"),
	DEVICE_ENTERPRISE_WIPE_REQUESTED("DEVICEENTERPRISEWIPEREQUESTED"),

	//INCORRECT_EVENT_TYPE("Incorrect Event type");
	INCORRECT_EVENT_TYPE("INCORRECTEVENTTYPE");
	
	private final String name;

	EventType(String value)
	{
		this.name = value;
	}
	
	public static EventType fromValue(String v)
	{
		for (EventType eventType : EventType.values())
		{
			if (eventType.name.equals(v))
			{
				return eventType;
			}
		}
		
		return INCORRECT_EVENT_TYPE;
	}
	
	public boolean equalsName (String strName){
		return (strName == null) ? false : name.equals(strName);
 	}
	
	public boolean equalsNameInsensitive (String strName){
		return (strName == null) ? false : name.toUpperCase().equals(strName.toUpperCase());
 	}
	
	public String toString() {
		return name;
	}
}
