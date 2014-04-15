package com.ctfs.BRB.Helper;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

import com.thoughtworks.xstream.converters.ConversionException;
import com.thoughtworks.xstream.converters.Converter;
import com.thoughtworks.xstream.converters.MarshallingContext;
import com.thoughtworks.xstream.converters.UnmarshallingContext;
import com.thoughtworks.xstream.io.HierarchicalStreamReader;
import com.thoughtworks.xstream.io.HierarchicalStreamWriter;

public class DateConverter implements Converter
{

	private SimpleDateFormat formatter = new SimpleDateFormat("MM/dd/yyyy");

	@Override
	public boolean canConvert(Class argClazz)
	{
		return javax.xml.datatype.XMLGregorianCalendar.class.isAssignableFrom(argClazz);
	}

	@Override
	public void marshal(Object argValue, HierarchicalStreamWriter argWriter, MarshallingContext argContext)
	{
		javax.xml.datatype.XMLGregorianCalendar calendar = (javax.xml.datatype.XMLGregorianCalendar) argValue;
		Date date = calendar.toGregorianCalendar().getTime();
		argWriter.setValue(formatter.format(date));
	}

	@Override
	public Object unmarshal(HierarchicalStreamReader argReader, UnmarshallingContext argContext)
	{
		XMLGregorianCalendar calendar;
		try
		{
			calendar = DatatypeFactory.newInstance().newXMLGregorianCalendar();
		}
		catch (DatatypeConfigurationException e1)
		{
			throw new ConversionException(e1.getMessage(), e1);
		}
		try
		{
			calendar.toGregorianCalendar().setTime(formatter.parse(argReader.getValue()));
		}
		catch (ParseException e2)
		{
			throw new ConversionException(e2.getMessage(), e2);
		}
		return calendar;
	}

	public void setFormatter(SimpleDateFormat newFormatter)
	{
		formatter = newFormatter;
	}
}
