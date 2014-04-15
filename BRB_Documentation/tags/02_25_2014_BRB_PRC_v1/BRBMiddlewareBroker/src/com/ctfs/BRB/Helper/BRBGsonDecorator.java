package com.ctfs.BRB.Helper;

import javax.xml.datatype.XMLGregorianCalendar;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class BRBGsonDecorator
{
	public Gson getWrappedGson () {
		 GsonBuilder gsonBuilder = new GsonBuilder();
		 gsonBuilder.registerTypeAdapter(XMLGregorianCalendar.class, new XMLGregorianCalendarConverter.Serializer());
		 gsonBuilder.registerTypeAdapter(XMLGregorianCalendar.class, new XMLGregorianCalendarConverter.Deserializer());
		 
		 return gsonBuilder.create();
	}
}