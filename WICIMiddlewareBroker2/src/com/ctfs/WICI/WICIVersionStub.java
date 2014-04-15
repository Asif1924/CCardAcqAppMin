package com.ctfs.WICI;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.util.logging.Logger;

public class WICIVersionStub
{

	public final String value;
	static Logger log = Logger.getLogger(WICIVersionStub.class.getName());

	public WICIVersionStub()
	{
		String sMethod = "[WICIVersionStub]";
		log.info(sMethod);

		value = getVersionFromProperties();
	}

	private String getVersionFromProperties()
	{
		String sMethod = "[getVersionFromProperties]";
		log.info(sMethod);

		Properties properties = new Properties();

		try
		{
			InputStream versionFile = WICIVersionStub.class.getResourceAsStream("version.properties");
			if (versionFile != null)
			{
				properties.load(versionFile);
			}
		}
		catch (IOException e)
		{
			log.info(sMethod + "---Exception" + e.getMessage());
			e.printStackTrace();
		}

		return properties.getProperty("version", "{\"version\":\"0.0.0.dev\"}");
	}
}