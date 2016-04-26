package com.ctfs.wicimobile.plugins;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import com.ctfs.wicimobile.util.discovery.WICIDiscoveryHandler;
import com.zebra.sdk.printer.discovery.BluetoothDiscoverer;
import android.app.Activity;
import android.os.AsyncTask;
import android.util.Log;

public class ZebraPrinterDiscoveryPlugin extends CordovaPlugin {
    public Activity getCurrentContext() {
        return this.cordova.getActivity();
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Log.i(getClass().getSimpleName(), "ZebraPrinterDiscoveryPlugin.DiscoveryPrinters");
        try {
            if (action.equals("discoveryPrinters")) {
                PluginResult pluginResult = new PluginResult(PluginResult.Status.NO_RESULT);
                pluginResult.setKeepCallback(true);

                callbackContext.sendPluginResult(pluginResult);
                
                discoverBluetoothPrinters(callbackContext);

                return true;
            }

        } catch (Exception ex) {
            if (callbackContext != null){
                callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
            }
        }

        return false;
    }
    
    private void discoverBluetoothPrinters(CallbackContext callbackContext) {
        Log.i(getClass().getSimpleName(), "discoverBluetoothPrinters started ...");
        try {
            WICIDiscoveryHandler discoveryHandler = new WICIDiscoveryHandler(getCurrentContext(), callbackContext);
            new ZebraPrinterDiscoveryTask(discoveryHandler).execute(null, null, null);
        }catch (Exception ex) {
            ex.printStackTrace();
            
            if (callbackContext != null) {
                callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
            }
        } 
    }
    
    private class ZebraPrinterDiscoveryTask extends AsyncTask<Object, Void, Void> {
        private WICIDiscoveryHandler _discoveryHandler;
        
        public ZebraPrinterDiscoveryTask(WICIDiscoveryHandler discoveryHandler) {
            _discoveryHandler = discoveryHandler;
        }
        
        protected Void doInBackground(Object... object) {
            Log.i(getClass().getSimpleName(), "ZebraPrinterDiscoveryTask started...");
            
            try {
                BluetoothDiscoverer.findPrinters(getCurrentContext(), _discoveryHandler);
            } catch (Exception ex) {
                // TODO Auto-generated catch block
                ex.printStackTrace();
                if (getCallbackContext() != null) {
                    getCallbackContext().sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            }

            return null;
        }
        
        protected CallbackContext getCallbackContext(){
            if (_discoveryHandler != null) {
                return _discoveryHandler.getCallbackContext();                        
            }
            
            return null;
        }

        protected void onProgressUpdate(Void... progress) {            
        }

        protected void onPostExecute(Void result) {
        }
    }   
}
