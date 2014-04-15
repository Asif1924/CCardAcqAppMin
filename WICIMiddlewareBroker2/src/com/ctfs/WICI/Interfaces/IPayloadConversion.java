package com.ctfs.WICI.Interfaces;

import com.ctfs.WICI.Model.Eventlog;

public interface IPayloadConversion
{
	public Eventlog convertToModel(String argPayload);
}
