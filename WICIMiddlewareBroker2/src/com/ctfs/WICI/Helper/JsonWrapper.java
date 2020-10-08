package com.ctfs.WICI.Helper;
import java.io.IOException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonWrapper {

	private ObjectMapper mapper;

	public JsonWrapper(ObjectMapper mapper) {
		super();
		this.mapper = mapper;
	}

	public <T> String serialize(T object) {
		try {
			return mapper.writeValueAsString(object);
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}
	}

	public <T> T deserialize(String str, Class<T> valueType) {
		try {
			return mapper.readValue(str, valueType);
		} catch (JsonParseException e) {
			throw new RuntimeException(e);
		} catch (JsonMappingException e) {
			throw new RuntimeException(e);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
}
