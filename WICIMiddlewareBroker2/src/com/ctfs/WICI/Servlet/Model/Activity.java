package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;
import java.util.Map;

public class Activity implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Subscriber subscriber;
	
	private String  event;
	
	private Map<String, Object> properties;

	public Subscriber getSubscriber() {
		return subscriber;
	}

	public void setSubscriber(Subscriber subscriber) {
		this.subscriber = subscriber;
	}

	public String getEvent() {
		return event;
	}

	public void setEvent(String event) {
		this.event = event;
	}

	public Map<String, Object> getProperties() {
		return properties;
	}

	public void setProperties(Map<String, Object> properties) {
		this.properties = properties;
	}

	@Override
	public String toString() {
		return "Activity [subscriber=" + subscriber + ", event=" + event + ", properties=" + properties + "]";
	}

	
}
