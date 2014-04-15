package com.ctfs.wicimobile.plugins;

import java.lang.reflect.Method;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import android.app.Activity;
import android.os.Build;
import android.util.Log;

public class DeviceInfoPlugin extends CordovaPlugin
{
	private static final String TAG = "DeviceInfoPlugin";
	private static final String NOT_SUPPORTED_ACTION = "Not supported action: ";

	public Activity getCurrentContext()
	{
		return this.cordova.getActivity();
	}

	private String getManufacturerSerialNumber()
	{
		String serial = null;
		try
		{
			Class<?> c = Class.forName("android.os.SystemProperties");
			Method get = c.getMethod("get", String.class, String.class);
			serial = (String) get.invoke(c, "ril.serialnumber", "unknown");
		}
		catch (Exception ignored)
		{			
			serial = "";
		}
		return serial;
	}

	private String getBuildSerialNumber()
	{
		return Build.SERIAL;
	}

	private String getDeviceInfo()
	{
		String deviceInfoString = "{}";
		String mfgSerial = getManufacturerSerialNumber();
		String buildSerial = getBuildSerialNumber();

		deviceInfoString = "{ MfgSerial:\"" + mfgSerial + "\",BuildSerial:\"" + buildSerial + "\"}";

		return deviceInfoString;
	}

	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException
	{

		if (action.equals("getDeviceInfo"))
		{
			try
			{
				String deviceInfo = getDeviceInfo();
				PluginResult result = new PluginResult(PluginResult.Status.OK, deviceInfo);
				callbackContext.sendPluginResult(result);
				return true;
			}
			catch (Exception ex)
			{
				Log.e(TAG, action + " execute exception", ex);

				if (callbackContext != null)
				{
					callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
				}
			}
		}
		else
		{
			Log.e(TAG, action + " action is not supported", null);

			if (callbackContext != null)
			{
				callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, NOT_SUPPORTED_ACTION + action));
			}
		}

		return false;
	}
}
