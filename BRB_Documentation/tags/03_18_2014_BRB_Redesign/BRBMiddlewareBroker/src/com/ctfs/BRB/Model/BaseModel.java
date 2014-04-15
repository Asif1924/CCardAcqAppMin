package com.ctfs.BRB.Model;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

import com.ctfs.BRB.Helper.ImageUtils;
//import com.sun.org.apache.xml.internal.security.exceptions.Base64DecodingException;
//import com.sun.org.apache.xml.internal.security.utils.Base64;
import org.apache.commons.codec.binary.Base64;

public class BaseModel {
	public String model;
	public List<NameValue> data;
	
	public String get(String fieldName){
		for(NameValue item: data){
			if(item.name.equals(fieldName)){
				return item.value;
			}
		}
		return null;
		//return "";
	}
	
	public int getInt(String fieldName){
		String value = this.get(fieldName);
		if(value == null || value.isEmpty()){
			return 0;
		}
		
		try {
			return Integer.parseInt(value);
		} catch (Exception e) {
			return 0;
		}
	}
	
	public boolean getBoolean(String fieldName){
		String value = this.get(fieldName);
		if(value == null || value.isEmpty()){
			return false;
		}
		
		try {
			return Boolean.parseBoolean(value);
		} catch (Exception e) {
			return false;
		}
	}
	
	public XMLGregorianCalendar getGregorianDate(String fieldName) throws ParseException, DatatypeConfigurationException{
		String argDateAsString = this.get(fieldName);
		
		SimpleDateFormat 		dateFormatter 						= new SimpleDateFormat("yyyy-MM-dd");
		dateFormatter.setLenient(false);
        Date			 		simpleDate							= dateFormatter.parse(argDateAsString);
        GregorianCalendar		gregsCal 							= new GregorianCalendar();
        gregsCal.setTime(simpleDate);
        javax.xml.datatype.XMLGregorianCalendar 	xmlDateAccordingToPopeGregory 		= DatatypeFactory.newInstance().newXMLGregorianCalendar(gregsCal);
		return xmlDateAccordingToPopeGregory;
	}
	public XMLGregorianCalendar getGregorianDate(Date date) throws ParseException, DatatypeConfigurationException{
        Date			 		simpleDate							= date;
        GregorianCalendar		gregsCal 							= new GregorianCalendar();
        gregsCal.setTime(simpleDate);
        javax.xml.datatype.XMLGregorianCalendar 	xmlDateAccordingToPopeGregory 		= DatatypeFactory.newInstance().newXMLGregorianCalendar(gregsCal);
		return xmlDateAccordingToPopeGregory;
	}
	
	public byte[] getPngByteArr(String fieldName) throws IOException{
		String strDataUrl = this.get(fieldName);
		
		strDataUrl = strDataUrl.substring(22);
		
		//byte[] byteArray = Base64.decode(strDataUrl);
		byte[] byteArray = Base64.decodeBase64(strDataUrl);
		
		return byteArray;
	}
	
	public byte[] getBase64EncodedJPGByteArray(String fieldName) throws Exception{
		String strDataUrl = this.get(fieldName);
		
		return new ImageUtils().convertPNGDataURLToJPGByteArray(strDataUrl);
	}
}
