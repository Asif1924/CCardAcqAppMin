package com.ctfs.wicimobile.plugins;

import java.util.UUID;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Build;
import android.provider.Settings;
import android.telephony.TelephonyManager;
import android.util.Log;

import com.ctfs.wicimobile.util.DeviceUUIDFactory;
import com.ctfs.wicimobile.util.Utils;


public class AppVersionPlugin extends CordovaPlugin {
	
	private static final String TAG = "AppVersionPlugin";
    private static final String NOT_SUPPORTED_ACTION = "Not supported action: ";
    
    public Activity getCurrentContext() {
        return this.cordova.getActivity();
    }
    
    
    private String getDeviceInfo() {

    	String deviceInfoString = "{}";
    	
        try { 
        	//PackageInfo packageInfo = getCurrentContext().getPackageManager().getPackageInfo(getCurrentContext().getPackageName(), 0); 
            //return packageInfo.versionName;
            
        	final TelephonyManager tm = (TelephonyManager) getCurrentContext().getSystemService(Context.TELEPHONY_SERVICE);

    	    final String tmDevice, tmSerial, androidId;
    	    tmDevice = "" + tm.getDeviceId();
    	    tmSerial = "" + tm.getSimSerialNumber();
    	    androidId = "" + android.provider.Settings.Secure.getString(this.getCurrentContext().getContentResolver(), android.provider.Settings.Secure.ANDROID_ID);

    	    UUID androidID = new UUID(androidId.hashCode(), ((long)tmDevice.hashCode() << 32) | tmSerial.hashCode());
    	    UUID deviceUUID = new DeviceUUIDFactory(this.getCurrentContext()).getDeviceUuid();
    	    
    	    String androidIDString = androidID.toString();
    	    String deviceUUIDString = deviceUUID.toString();            
    	    
    	    String macAddressWLan0 = Utils.getMACAddress("wlan0");
    	    String macAddressEth0 = Utils.getMACAddress("eth0");
    	    /*
    	    Utils.getMACAddress("wlan0");
    	    Utils.getMACAddress("eth0");
    	    Utils.getIPAddress(true); // IPv4
    	    Utils.getIPAddress(false); // IPv6 
    	    */
    	    
    	    String newAndroidId = Settings.Secure.getString(this.getCurrentContext().getContentResolver(),  Settings.Secure.ANDROID_ID);
    	    	
    	    deviceInfoString = "{ New AndroidID: \"" + newAndroidId + "\", AndroidID : \"" + androidIDString + "\", BuildSerial : \"" + Build.SERIAL + "\", MAC_WLan0 : \"" + macAddressWLan0 + "\", MAC_Eth0 : \"" + macAddressEth0 + "\",deviceUUID : \"" + deviceUUIDString + "\", deviceID : \"" + tmDevice + "\", serialNumber : \"" + tmSerial + "\"}";
            
        } catch (Exception ex) { 
            Log.e(TAG, "Package name not found", ex);
        };
        
        return deviceInfoString;
    }
    
    private String getVersion() {
    	
        try { 
        	PackageInfo packageInfo = getCurrentContext().getPackageManager().getPackageInfo(getCurrentContext().getPackageName(), 0); 
            return packageInfo.versionName; 
        } catch (PackageManager.NameNotFoundException ex) { 
            Log.e(TAG, "Package name not found", ex);
        };
        
        return null;
    }
    
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {  
    	
		if (action.equals("getAPKVersion")) {
			try {
				String apkVersion = getVersion();
				
                // Call UI callback with search results
                PluginResult result = new PluginResult(PluginResult.Status.OK, apkVersion);
                // Send search results to Web UI side
                callbackContext.sendPluginResult(result);                
				
				return true;
			} catch (Exception ex) {
				Log.e(TAG, action + " execute exception", ex);
                
                if (callbackContext != null) {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            }
		}else if (action.equals("getDeviceInfo")) {
			try {
				String deviceInfo = getDeviceInfo();
				
                // Call UI callback with search results
                PluginResult result = new PluginResult(PluginResult.Status.OK, deviceInfo);
                // Send search results to Web UI side
                callbackContext.sendPluginResult(result);                
				
				return true;
			} catch (Exception ex) {
				Log.e(TAG, action + " execute exception", ex);
                
                if (callbackContext != null) {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            }
		} 
		else {
			Log.e(TAG, action + " action is not supported", null);
			
            if (callbackContext != null) {
                callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, NOT_SUPPORTED_ACTION + action));
            }			
		}
		
		return false;
    }

}
