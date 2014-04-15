package com.ctfs.BRB.Model;

import com.ctfs.BRB.Interfaces.IResponse;

public class Version implements IResponse {
	String	version;

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}
}
