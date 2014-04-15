package com.ctfs.BRB;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.util.logging.Logger;

public class VersionStub {

	public final String value;
	static Logger log = Logger.getLogger(VersionStub.class.getName());   
	
	public VersionStub() {
		String sMethod = "[VersionStub]";
		log.info(sMethod);
		
		value = getVersionFromProperties();
	}

	public String getVersionFromProperties() {
		String sMethod = "[getVersionFromProperties]";
		log.info(sMethod);

		Properties properties = new Properties();

		try {
			InputStream versionFile = VersionStub.class.getResourceAsStream("version.properties");
			if (versionFile != null) {
				properties.load(versionFile);
			}
		}
		catch (IOException e) {
			log.info(sMethod + "---Exception" + e.getMessage());
			e.printStackTrace();
		}

		return properties.getProperty("version", "{\"version\":\"0.0.0.dev\"}");
	}
}