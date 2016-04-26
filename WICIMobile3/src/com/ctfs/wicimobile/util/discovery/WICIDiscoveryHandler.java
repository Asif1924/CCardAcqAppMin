package com.ctfs.wicimobile.util.discovery;

import java.util.ArrayList;
import java.util.Map;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import android.app.Activity;
import com.zebra.sdk.printer.discovery.DiscoveredPrinter;
import com.zebra.sdk.printer.discovery.DiscoveredPrinterBluetooth;
import com.zebra.sdk.printer.discovery.DiscoveryHandler;

public class WICIDiscoveryHandler implements DiscoveryHandler {
    private ArrayList<DiscoveredPrinter> _printersCollection;
    private ArrayList<Map<String, String>> _printerSettings;
    private Activity _currentContext;
    private CallbackContext _callbackContext;
    private static final String WICIDeviceFilter = "XXXX";

    public WICIDiscoveryHandler(Activity context, CallbackContext callbackContext) {
        _currentContext = context;
        _callbackContext = callbackContext;
        _printersCollection = new ArrayList<DiscoveredPrinter>();
        _printerSettings = new ArrayList<Map<String, String>>();
    }

    @Override
    public void discoveryError(String msg) {
        if (getCallbackContext() != null) {
            getCallbackContext().sendPluginResult(new PluginResult(PluginResult.Status.ERROR, msg));
        }
    }

    @Override
    public void discoveryFinished() {
        /*
         * _currentContext.runOnUiThread(new Runnable() { public void run() {
         */
        if (getCallbackContext() != null) {
            JSONArray devicesInfo = new JSONArray();
            for (int i = 0; i < _printersCollection.size(); i++) {
                // Create buffer
                JSONObject printerInfo = new JSONObject();

                // Get discovered printers list
                DiscoveredPrinterBluetooth printer = (DiscoveredPrinterBluetooth) _printersCollection.get(i);

                try {
                    // Save printer info into buffer
                    printerInfo.put("macAddress", printer.address);
                    printerInfo.put("friendlyName", printer.friendlyName);
                    devicesInfo.put(printerInfo);
                } catch (JSONException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
            }

            // Call UI callback with search results
            PluginResult result = new PluginResult(PluginResult.Status.OK, devicesInfo);
            result.setKeepCallback(false);

            // Send search results to Web UI side
            getCallbackContext().sendPluginResult(result);
        }
        /*
         * } });
         */
    }

    @Override
    public void foundPrinter(final DiscoveredPrinter printer) {        
        addPrinterItem((DiscoveredPrinter) printer);        
    }

    private void addPrinterItem(DiscoveredPrinter p) {
        if (p == null || !(p instanceof DiscoveredPrinterBluetooth)) {
            return;
        }
        
        // Get printer
        DiscoveredPrinterBluetooth printer = (DiscoveredPrinterBluetooth) p;

        // Apply WICI printers filter
        if (printer.friendlyName.startsWith(WICIDeviceFilter)) {
            _printersCollection.add(p);
            _printerSettings.add(p.getDiscoveryDataMap());
        }
    }

    /**
     * @return the CallbackContext
     */
    public CallbackContext getCallbackContext() {
        return _callbackContext;
    }

    /**
     * @param CallbackContext
     *            the CallbackContext to set
     */
    public void setCallbackContext(CallbackContext callbackContext) {
        _callbackContext = callbackContext;
    }

    public Activity getContext() {
        return _currentContext;
    }
}
