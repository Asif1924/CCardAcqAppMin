package com.ctfs.WICI.Resources;

import java.io.InputStream;
import java.util.logging.Logger;

public class ResourceHelper
{
	static Logger log = Logger.getLogger(ResourceHelper.class.getName());
	private static volatile ResourceHelper instance = null;

	private ResourceHelper()
	{
	}

	public static ResourceHelper getInstance()
	{
		if (instance == null)
		{
			synchronized (ResourceHelper.class)
			{
				if (instance == null)
				{
					instance = new ResourceHelper();
				}
			}
		}
		return instance;
	}
	
	public String getResourcePath(String resourceName)
	{
		String sMethod = "[getResourcePath] ";
		log.info(sMethod +" resourceName: "+resourceName + " called...");

		return ResourceHelper.class.getResource(resourceName).getPath();
	}	
	
	public InputStream loadResourceAsStream(String resourceName)
	{
		String sMethod = "[loadResourceAsStream] ";
		log.info(sMethod + "called...");

		return ResourceHelper.class.getResourceAsStream(resourceName);
	}	
}
