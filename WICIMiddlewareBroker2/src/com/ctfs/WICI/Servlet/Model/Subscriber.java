package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;

public class Subscriber implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String id;
	
	private String uid;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	@Override
	public String toString() {
		return "Subscriber [id=" + id + ", uid=" + uid + "]";
	}
	

}
