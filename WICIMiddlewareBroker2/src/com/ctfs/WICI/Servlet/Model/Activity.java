package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;
import java.util.Map;

public class Activity implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Subscriber subscriber;
	
	private String  event;
	
	private String formSubmID;
	
	public String getFormSubmID() {
		return formSubmID;
	}

	public void setFormSubmID(String formSubmID) {
		this.formSubmID = formSubmID;
	}

	private String pgToken;
	
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

	

	public String getPgToken() {
		return pgToken;
	}

	public void setPgToken(String pgToken) {
		this.pgToken = pgToken;
	}

	@Override
	public String toString() {
		return "Activity [subscriber=" + subscriber + ", event=" + event + ", properties=" + properties + "]";
	}

	
}
