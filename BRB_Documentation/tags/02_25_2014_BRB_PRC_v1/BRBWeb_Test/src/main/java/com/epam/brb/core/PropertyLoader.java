package com.epam.brb.core;

import java.io.InputStream;
import java.util.Properties;

import org.testng.Reporter;

public class PropertyLoader {
	private static Properties properties; 
	private static String resourceFile = "/project.properties";
	
	
	private static void loadProperties(){
		properties = new Properties();
		InputStream in = PropertyLoader.class.getResourceAsStream(resourceFile);
		
		try {
			properties.load(in);
			in.close();
		} catch (Exception e) {
			Reporter.log("Unable to read resource file", true);
			Reporter.log(e.getMessage(), true);
		}

	}
	
	public static String getProperty(String propertyName) {
		if(properties == null) {
			loadProperties();
		}
		return properties.getProperty(propertyName);
	}

}
