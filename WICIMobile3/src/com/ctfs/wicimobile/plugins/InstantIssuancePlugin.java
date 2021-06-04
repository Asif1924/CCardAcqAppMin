package com.ctfs.wicimobile.plugins;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import com.ctfs.wicimobile.util.crypto.WICICryptoHelper;
import com.newrelic.agent.android.NewRelic;

import android.app.Activity;
import android.content.Context;
import android.util.Log;

public class InstantIssuancePlugin  extends CordovaPlugin
{
	private static final String TAG = "InstantIssuancePlugin";
	private static final String NOT_SUPPORTED_ACTION = "Not supported action: ";

	public Activity getCurrentContext()
	{
		return this.cordova.getActivity();
	}

	private String DecryptAccountNumber(Context context, String encryptedAccountNumber)
	{
		Log.i(TAG, "DecryptAccountNumber" );
		String decryptedAccountNumber = null;
		try
		{
			decryptedAccountNumber = WICICryptoHelper.getInstance().decryptRSA(context, encryptedAccountNumber);
		}
		catch (Exception ignored)
		{		
			Log.e(TAG, "Exception:" + ignored.getMessage() );
			decryptedAccountNumber = "";
		}
		

		return decryptedAccountNumber;
	}

	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException
	{
		NewRelic.startInteraction(action);
		Log.i(TAG,"execute");
		if (action.equals("InstantIssuance"))
		{
			try
			{
				String encryptedAccountNumber = args.getString(0);
				Log.i(TAG, "encryptedAccountNumber : " + encryptedAccountNumber );
				String decryptedAccountNumber = DecryptAccountNumber(getCurrentContext(), encryptedAccountNumber);
				PluginResult result = new PluginResult(PluginResult.Status.OK, decryptedAccountNumber);
				callbackContext.sendPluginResult(result);
				NewRelic.endInteraction(action);
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

		NewRelic.endInteraction(action);
		return false;
	}
}
