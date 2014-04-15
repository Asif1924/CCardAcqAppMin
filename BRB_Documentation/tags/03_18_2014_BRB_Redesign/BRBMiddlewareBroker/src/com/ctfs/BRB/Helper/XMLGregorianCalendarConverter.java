package com.ctfs.BRB.Helper;

import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonPrimitive;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;

public class XMLGregorianCalendarConverter
{
	public static class Serializer implements JsonSerializer
	{
		public Serializer()
		{
			super();
		}

		@Override
		public JsonElement serialize(Object t,  java.lang.reflect.Type type, JsonSerializationContext jsonSerializationContext)
		{
			XMLGregorianCalendar xgcal = (XMLGregorianCalendar) t;
			return new JsonPrimitive(xgcal.toXMLFormat());
		}
	}

	public static class Deserializer implements JsonDeserializer
	{
		@Override
		public Object deserialize(JsonElement jsonElement, java.lang.reflect.Type type, JsonDeserializationContext jsonDeserializationContext)
		{
			try
			{
				JsonObject obj = jsonElement.getAsJsonObject();
				XMLGregorianCalendar xmlGregCalendar = DatatypeFactory.newInstance().newXMLGregorianCalendar(obj.get("year").getAsInt(), obj.get("month").getAsInt(), obj.get("day").getAsInt(),
						obj.get("hour").getAsInt(), obj.get("minute").getAsInt(), obj.get("second").getAsInt(), 0, obj.get("timezone").getAsInt());
				return xmlGregCalendar;
			}
			catch (Exception e)
			{
				return null;
			}
		}
	}
}
