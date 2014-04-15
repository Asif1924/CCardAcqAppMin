package com.ctfs.wicimobile.plugins;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import android.app.Activity;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.util.Log;

public class AppVersionPlugin extends CordovaPlugin
{

	private static final String TAG = "AppVersionPlugin";
	private static final String NOT_SUPPORTED_ACTION = "Not supported action: ";

	public Activity getCurrentContext()
	{
		return this.cordova.getActivity();
	}

	private String getVersion()
	{

		try
		{
			PackageInfo packageInfo = getCurrentContext().getPackageManager().getPackageInfo(getCurrentContext().getPackageName(), 0);
			return packageInfo.versionName;
		}
		catch (PackageManager.NameNotFoundException ex)
		{
			Log.e(TAG, "Package name not found", ex);
		}

		return null;
	}

	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException
	{

		if (action.equals("getAPKVersion"))
		{
			try
			{
				String apkVersion = getVersion();

				// Call UI callback with search results
				PluginResult result = new PluginResult(PluginResult.Status.OK, apkVersion);
				// Send search results to Web UI side
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
