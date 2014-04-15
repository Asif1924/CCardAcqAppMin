package com.ctfs.wicimobile.plugins;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import android.app.Activity;
import com.ctfs.wicimobile.util.Settings;
import com.ctfs.wicimobile.util.WICIAppSettingsStorageManager;

public class AppLanguagePlugin extends CordovaPlugin {
    protected static final String EMPTY_STRING = "";
    
    public Activity getCurrentContext() {
        return this.cordova.getActivity();
    }
    
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {   
    
		if (action.equals("getAppLanguage")) {
			try {
				String language = null;
				Settings appSettings = WICIAppSettingsStorageManager.getInstance(getCurrentContext()).getCurrentAppSettings();
				
				language = appSettings.getAppLanguage();
                if (language == null) {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, "Not found"));
                    return true;
                }			
                
                // Call UI callback with search results
                PluginResult result = new PluginResult(PluginResult.Status.OK, language);
                // Send search results to Web UI side
                callbackContext.sendPluginResult(result);                
				
				return true;
			} catch (Exception ex) {
                ex.printStackTrace();
                
                if (callbackContext != null) {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            }
		} else if (action.equals("setAppLanguage")) {
			try {
				String language = args.getString(0);
				
				Settings appSettings = WICIAppSettingsStorageManager.getInstance(getCurrentContext()).getCurrentAppSettings();				
			
				appSettings.setAppLanguage(language);
				
                // Call UI callback with search results
                PluginResult result = new PluginResult(PluginResult.Status.OK, EMPTY_STRING);
                // Send search results to Web UI side
                callbackContext.sendPluginResult(result);				
				
				return true;
			} catch (Exception ex) {
                ex.printStackTrace();
                
                if (callbackContext != null) {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            }			
		}		
		
		return false;
    }
}
