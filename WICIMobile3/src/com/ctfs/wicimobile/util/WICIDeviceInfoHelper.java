package com.ctfs.wicimobile.util;

import java.lang.reflect.Method;

import android.util.Log;

public class WICIDeviceInfoHelper {

	private static final String LOG_TAG = "WICIDeviceInfoHelper";
	private static String serialNo = "";
	
	static{
		try
		{
			Class<?> c = Class.forName("android.os.SystemProperties");
			Method get = c.getMethod("get", String.class, String.class);
			serialNo = (String) get.invoke(c, "ril.serialnumber", "unknown");
			Log.i(LOG_TAG, "Manufacturer Serial#:" + serialNo );
					
		}
		catch (Exception ignored)
		{		
			Log.e(LOG_TAG, "Exception:" + ignored.getMessage() );
		}
	}
	
	public static String getDeviceSerialNo() {
		return serialNo;
	}
	  
	
}
