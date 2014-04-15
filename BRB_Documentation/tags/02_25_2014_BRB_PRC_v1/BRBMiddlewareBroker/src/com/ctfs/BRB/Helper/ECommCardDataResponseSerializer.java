package com.ctfs.BRB.Helper;

import java.lang.reflect.Type;
import java.util.logging.Logger;

import com.ctfs.BRB.Model.Response;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;

public class ECommCardDataResponseSerializer implements JsonSerializer<Response>
{
	static Logger log = Logger.getLogger(ECommCardDataResponseSerializer.class.getName());
	
	@Override
	public JsonElement serialize(final Response response, final Type typeOfSrc, final JsonSerializationContext context)
	{
		String sMethod = "[JsonElement.serialize]";
		log.info(sMethod + "::Called!");
		
		final JsonObject json = new JsonObject();
		json.addProperty("msg", response.getMsg());
		json.addProperty("error", response.isError());
		JsonObject dataElement = new JsonObject();
		if (response.getData() != null)
		{
			if (response.getData() instanceof com.ctc.ctfs.eCommUpdateCardData.CardResponseType)
			{
				com.ctc.ctfs.eCommUpdateCardData.CardResponseType cardResponse = (com.ctc.ctfs.eCommUpdateCardData.CardResponseType) response.getData();
				dataElement.addProperty("statusCode", cardResponse.getStatusCode());
				dataElement.addProperty("passFail", cardResponse.getPassFail().name());
				dataElement.addProperty("errorMessage", cardResponse.getErrorMessage().getValue());
			}
			else if (response.getData() instanceof com.cantire.persistservice.CardResponseType)
			{
				com.cantire.persistservice.CardResponseType cardResponse = (com.cantire.persistservice.CardResponseType) response.getData();
				dataElement.addProperty("statusCode", cardResponse.getStatusCode());
				dataElement.addProperty("passFail", cardResponse.getPassFail().name());
				dataElement.addProperty("errorMessage", cardResponse.getErrorMessage());
			}
			
		}
		json.add("data", dataElement);

		return json;
	}

}