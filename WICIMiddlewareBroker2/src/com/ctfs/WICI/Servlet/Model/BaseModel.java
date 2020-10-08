package com.ctfs.WICI.Servlet.Model;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

import com.ctfs.WICI.Helper.ImageUtils;
import org.apache.commons.codec.binary.Base64;

public class BaseModel
{
	public String model;
	public List<NameValue> data;

	public BaseModel(){
		data = new ArrayList<NameValue>();
	}
	
	public String get(String argFieldName)
	{
		for (NameValue item : data)
		{
			if (item.name.equals(argFieldName))
			{
				return item.value;
			}
		}
		return null;
	}

	public int getInt(String argFieldName)
	{
		String value = this.get(argFieldName);
		if (value == null)
		{
			return 0;
		}

		try
		{
			return Integer.parseInt(value);
		}
		catch (Exception e)
		{
			return 0;
		}
	}

	public XMLGregorianCalendar getGregorianDate(String argFieldName) throws ParseException, DatatypeConfigurationException
	{
		String argDateAsString = this.get(argFieldName);

		SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");
		Date simpleDate = dateFormatter.parse(argDateAsString);
		GregorianCalendar gregsCal = new GregorianCalendar();
		gregsCal.setTime(simpleDate);
		javax.xml.datatype.XMLGregorianCalendar xmlDateAccordingToPopeGregory = DatatypeFactory.newInstance().newXMLGregorianCalendar(gregsCal);
		return xmlDateAccordingToPopeGregory;
	}

	public byte[] getPNGByteArray(String argFieldName) throws IOException
	{
		String strDataUrl = this.get(argFieldName);

		strDataUrl = strDataUrl.substring(22);

		byte[] byteArray = Base64.decodeBase64(strDataUrl);

		return byteArray;
	}

	public byte[] getBase64EncodedJPGByteArray(String argFieldName) throws Exception
	{
		String strDataUrl = this.get(argFieldName);

		return new ImageUtils().convertPNGDataURLToJPGByteArray(strDataUrl);
	}
	
	
}
