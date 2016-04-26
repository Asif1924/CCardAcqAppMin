package com.ctfs.wicimobile.plugins;

import android.content.Context;
import android.content.res.AssetManager;
import android.net.wifi.WifiConfiguration;
import android.net.wifi.WifiManager;
import android.util.Log;

import com.ctfs.wicimobile.frw.AsyncCallback;
import com.ctfs.wicimobile.frw.CordovaMethod;
import com.ctfs.wicimobile.frw.PluginProxy;
import com.ctfs.wicimobile.util.wifi.WifiService;
import com.ctfs.wicimobile.util.wifi.WifiServiceImpl;

import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Properties;

@SuppressWarnings("unused")
public class WifiPlugin extends PluginProxy {
    private static final String LOG_TAG = WifiPlugin.class.getSimpleName();
    private WifiManager wifiManager = null;
    
    private Properties properties;

    private Properties readProperties() throws IOException {
        AssetManager assetManager = cordova.getActivity().getAssets();
        String fullFileName = "wifi_credentials.conf";
        InputStream inputStream = null;
        Properties properties = new Properties();
        try {
            inputStream = assetManager.open(fullFileName);
            properties.load(inputStream);
        } finally {
            if (inputStream != null) {
                inputStream.close();
            }
        }
        return properties;
    }

    private boolean checkProperties() {
        return properties != null
                && properties.getProperty("wifi.ssid") != null
                && properties.getProperty("wifi.password") != null
                && properties.getProperty("wifi.reconnectDelayMillis") != null;
    }

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        this.wifiManager = (WifiManager)cordova.getActivity().getSystemService(Context.WIFI_SERVICE);
        
        try {
            properties = readProperties();
        } catch (IOException e) {
            Log.e(LOG_TAG, "Can't read properties", e);
        }
    }

    @CordovaMethod(async = false)
    public void createWICINetwork(JSONArray args, final CallbackContext context) throws JSONException {
        Log.d(LOG_TAG, "createWICINetwork");

        if (!checkProperties()) {
            Log.w(LOG_TAG, "wifi_credentials.conf not configured properly");
            context.error("wifi credentials not configured properly");
            return;
        }

        WifiService wifiService = new WifiServiceImpl(cordova.getActivity());
        String SSID = properties.getProperty("wifi.ssid");
        String password = properties.getProperty("wifi.password");
        //String reconnectDelayMillis = properties.getProperty("wifi.reconnectDelayMillis");
        
        int reconnectDelayMillis = validateReconnectDelayMillis( properties.getProperty("wifi.reconnectDelayMillis") );

        Log.w(LOG_TAG, "wifi ssid is " + SSID ); 
        Log.w(LOG_TAG, "wifi password is " + password ); 
        Log.w(LOG_TAG, "wifi reconnectDelayMillis is " +  reconnectDelayMillis ); 
        
        wifiService.createWAPNetwork(SSID, password, reconnectDelayMillis , new AsyncCallback<Void, RuntimeException>() {
            @Override
            public void success(Void result) {
                Log.d(LOG_TAG, "createWICINetwork success");
                context.success();
            }

            @Override
            public void fail(RuntimeException error) {
                Log.e(LOG_TAG, "createWICINetwork fail", error);
                context.error(error.getMessage());
            }
        });
    }
    
    private int validateReconnectDelayMillis( String argDelay ){
        if( argDelay.equals("") || argDelay.equals(null) )    	
        	return 5000;
        int delayValue = 0;
        try{
        	delayValue = Integer.valueOf(argDelay);
        	return delayValue;
        }catch(Exception e){
        	return 5000;
        }        
    }
    

}