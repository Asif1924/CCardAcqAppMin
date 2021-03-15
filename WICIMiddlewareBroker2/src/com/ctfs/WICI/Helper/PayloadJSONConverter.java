package com.ctfs.WICI.Helper;

import java.util.logging.Logger;

import com.ctfs.WICI.Interfaces.IPayloadConversion;
import com.ctfs.WICI.Model.Eventlog;
import com.google.gson.Gson;

public class PayloadJSONConverter implements IPayloadConversion
{
	static Logger log = Logger.getLogger(PayloadJSONConverter.class.getName());

	@Override
	public Eventlog convertToModel(String argPayload)
	{
		String sMethod = this.getClass().getName() + "[convertToModel] ";
		log.info(sMethod);

		//Eventlog deserializedPayload = null;
		Eventlog deserializedPayload = new Eventlog();
		Gson gson = new Gson();

		deserializedPayload = (Eventlog) gson.fromJson(argPayload, Eventlog.class);

		return deserializedPayload;
	}
}
