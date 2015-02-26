package com.ctfs.WICI.Helper;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeConstants;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

import com.thoughtworks.xstream.converters.Converter;
import com.thoughtworks.xstream.converters.MarshallingContext;
import com.thoughtworks.xstream.converters.UnmarshallingContext;
import com.thoughtworks.xstream.io.HierarchicalStreamReader;
import com.thoughtworks.xstream.io.HierarchicalStreamWriter;

public class XMLGregorianCalendarConverter implements Converter
{

	@Override
	public boolean canConvert(Class argClass)
	{
		// TODO Auto-generated method stub
		return argClass.equals(XMLGregorianCalendar.class);
	}

	@Override
	public void marshal(Object value, HierarchicalStreamWriter writer, MarshallingContext context)
	{
		XMLGregorianCalendar someDate = (XMLGregorianCalendar) value;
        writer.setValue( "" + someDate.getYear() + "-" + someDate.getMonth() + "-" + someDate.getDay());
        writer.endNode();	
	}

	@Override
	public Object unmarshal(HierarchicalStreamReader reader, UnmarshallingContext context)
	{
        GregorianCalendar gCalendar = new GregorianCalendar();
        gCalendar.clear();
        Calendar parsedCalendar = Calendar.getInstance();
        SimpleDateFormat sdf = new SimpleDateFormat( "yyyy-MM-dd" );
        Date rawDate = null;
		try
		{
			rawDate = sdf.parse( reader.getValue() );
		}
		catch (ParseException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        parsedCalendar.setTime( rawDate );

        int year = Integer.parseInt((String) reader.getValue().subSequence(0, 4));
        int month = Integer.parseInt((String) reader.getValue().subSequence(6, 7));
        int day = Integer.parseInt((String) reader.getValue().subSequence(9, 10));        
        
        gCalendar.set( parsedCalendar.get(Calendar.YEAR), parsedCalendar.get(Calendar.MONTH), parsedCalendar.get(Calendar.DATE));        
        
        XMLGregorianCalendar xmlCalendar = null;
        
        try {
            xmlCalendar = DatatypeFactory.newInstance().newXMLGregorianCalendar(gCalendar);
        } catch (DatatypeConfigurationException ex) {
            ex.printStackTrace();
        }

        //reader.moveDown();
        //xmlCalendar.setYear(year);
        //xmlCalendar.setMonth(month);
        //xmlCalendar.setDay(day);   
        
        xmlCalendar.setTimezone( DatatypeConstants.FIELD_UNDEFINED );
        //xmlCalendar.setTimezone( null );
        xmlCalendar.setFractionalSecond( null );
        //reader.moveUp();
        return xmlCalendar;
	}

}
