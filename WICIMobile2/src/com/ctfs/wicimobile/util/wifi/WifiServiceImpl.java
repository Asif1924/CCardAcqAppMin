package com.ctfs.wicimobile.util.wifi;

import java.util.List;

import android.content.Context;
import android.net.wifi.WifiConfiguration;
import android.net.wifi.WifiManager;
import android.os.Handler;
import android.os.SystemClock;
import android.util.Log;

import com.ctfs.wicimobile.frw.AsyncCallback;

public class WifiServiceImpl implements WifiService {
    private static final String LOG_TAG = WifiServiceImpl.class.getSimpleName();

    private final WifiManager wifiManager;

    public WifiServiceImpl(Context context) {
        this.wifiManager = (WifiManager)context.getSystemService(Context.WIFI_SERVICE);
    }

    @Override
    public void createWAPNetwork(String ssid, String password, int reconnectDelayMillis ,AsyncCallback<Void, RuntimeException> callback) {
    	boolean wifiEnabled = wifiManager.isWifiEnabled();
    	
    	//Step 1. Check if WIFI is enabled. If not enabled, enable it.
    	if (!wifiEnabled){
    		Log.i(LOG_TAG, "Enabling wifi...\"" + ssid + "\"" );
    		wifiManager.setWifiEnabled(true);                       
    		SystemClock.sleep(reconnectDelayMillis); //Give the system time to re-enable the WIFI functionality
    	}    	
        
    	
    	//Step 2. Create the profile we want to add if it doesnt exist
        WifiConfiguration wifiProfile = new WifiConfiguration();
        wifiProfile.SSID = "\"" + ssid + "\"";
        wifiProfile.preSharedKey = "\"" + password + "\"";
        
        //Step 3. Check the list of profiles to find the one we want to add, if not found add it
        int networkId = 0;
        if( !wifiProfileFound(wifiProfile) ){
        	networkId = wifiManager.addNetwork(wifiProfile);
        	Log.i(LOG_TAG, "created new network \"" + ssid + "\" configuration id=" + networkId);
        }
        
        //This block may never execute, since it depends on wifi being disabled, which
        //we enable above
        if (networkId == -1) {
            // for example if wi-fi disabled
            callback.fail(new IllegalArgumentException("can't add WPA network"));
            return;
        }

        //Step 4. Reconnect to the wifi profile
        Log.i(LOG_TAG, "attempting to connect network \"" + ssid + "\" ..." );
        attemptReconnectToWIFINetwork(networkId,ssid);
        
        callback.success(null);
    }
    
    private boolean wifiProfileFound(WifiConfiguration argWIFIProfile) {
    	List<WifiConfiguration> wifiSSIDList = wifiManager.getConfiguredNetworks();
    	for( WifiConfiguration thisWIFIConfiguration : wifiSSIDList ) {
    	    if(thisWIFIConfiguration.SSID != null && thisWIFIConfiguration.SSID.equals("\"" + argWIFIProfile.SSID + "\"")) {
    	         //wifiManager.disconnect();
    	         //wifiManager.enableNetwork(thisWIFIConfiguration.networkId, true);
    	         //wifiManager.reconnect();               
    	         Log.i(LOG_TAG, "Network \"" + argWIFIProfile.SSID + "\" found." );
    	         return true;
    	    }           
    	 }
    	return false;
	}

	private void attemptReconnectToWIFINetwork( int argNetworkID, String argSSID ){
    	/* Method 2: Connect using the network ID */
    	wifiManager.disconnect();
    	wifiManager.enableNetwork(argNetworkID, true);
    	wifiManager.reconnect();    	 
    }
}