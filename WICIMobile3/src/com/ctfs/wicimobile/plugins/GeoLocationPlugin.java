package com.ctfs.wicimobile.plugins;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import com.ctfs.wicimobile.util.GeoLocationHelper;

import android.app.Activity;
import android.location.LocationManager;
import android.util.Log;

public class GeoLocationPlugin extends CordovaPlugin {

	private static final String TAG = "GeoLocationPlugin";
	private static final String NOT_SUPPORTED_ACTION = "Not supported action: ";
	LocationManager locationManager;
	private GeoLocationHelper gpsTracker;

	public Activity getCurrentContext() {
		return this.cordova.getActivity();
	}
	
	public String getLocation(){
		final String sMethod = "getLocation :: ";
    	Log.d(TAG, getCurrentContext() + sMethod);
    	
        gpsTracker = new GeoLocationHelper(getCurrentContext());
        if(gpsTracker.canGetLocation()){
            double latitude = gpsTracker.getLatitude();
            double longitude = gpsTracker.getLongitude();
            Log.e(TAG, getCurrentContext() + sMethod + String.valueOf(latitude) + " :: " + String.valueOf(longitude));            
            Log.e(TAG, getCurrentContext() + sMethod + "Your Location: " + latitude + " " + longitude);
			
            String coordinates = "{}";
			coordinates = "{ latitude : \"" + latitude + "\", longitude : \"" + longitude + "\" }";
			return coordinates;          		
        } else {        	
            gpsTracker.showSettingsAlert();
            return null;
        }		
    }

	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		Log.e(TAG, " execute() :: " + action);
		
		if (action.equals("getGeoLocation")) {			    			
			try {
				String coordinates = getLocation();
				Log.e(TAG, " execute() :: coordinates :: " + coordinates);

				// Call UI callback with search results
				PluginResult result = new PluginResult(PluginResult.Status.OK, coordinates);
				// Send search results to Web UI side
				callbackContext.sendPluginResult(result);
				return true;
			} catch (Exception ex) {
				Log.e(TAG, action + " execute exception", ex);
				if (callbackContext != null) {
					callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
				}
			}
		} else {
			Log.e(TAG, action + " action is not supported", null);
			if (callbackContext != null) {
				callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, NOT_SUPPORTED_ACTION + action));
			}
		}
		return false;
	}
}
