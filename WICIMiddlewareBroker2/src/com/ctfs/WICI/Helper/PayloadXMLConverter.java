package com.ctfs.WICI.Helper;

import java.util.logging.Logger;

import com.ctfs.WICI.Interfaces.IPayloadConversion;
import com.ctfs.WICI.Model.Eventlog;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.DomDriver;
import com.thoughtworks.xstream.mapper.MapperWrapper;

public class PayloadXMLConverter implements IPayloadConversion
{
	static Logger log = Logger.getLogger(PayloadXMLConverter.class.getName());

	@Override
	public Eventlog convertToModel(String argPayload)
	{
		log.info("PayloadXMLConverter[convertToModel] ");

		Eventlog deserializedPayload = null;
		XStream xstream = new XStream(new DomDriver()){
	          @Override
	          protected MapperWrapper wrapMapper(MapperWrapper next) {
	            return new MapperWrapper(next) {
	              public boolean shouldSerializeMember(Class definedIn, String fieldName) {
	                if (definedIn == Object.class) {
	                  return false;
	                }
	                return super.shouldSerializeMember(definedIn, fieldName);
	              }
	            };
	          }			
		};

		xstream.alias("Eventlog", Eventlog.class);
		deserializedPayload = (Eventlog) xstream.fromXML(argPayload);

		return deserializedPayload;
	}
}
