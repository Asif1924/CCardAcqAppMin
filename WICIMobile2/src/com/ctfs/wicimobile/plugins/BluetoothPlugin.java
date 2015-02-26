package com.ctfs.wicimobile.plugins;

import android.util.Log;
import com.ctfs.wicimobile.frw.AsyncCallback;
import com.ctfs.wicimobile.frw.CordovaMethod;
import com.ctfs.wicimobile.frw.PluginProxy;
import com.ctfs.wicimobile.util.bluetooth.BluetoothService;
import com.ctfs.wicimobile.util.bluetooth.BluetoothServiceImpl;
import org.apache.cordova.api.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;

@SuppressWarnings("unused")
public class BluetoothPlugin extends PluginProxy {
    private static final String LOG_TAG = BluetoothPlugin.class.getSimpleName();

    @CordovaMethod(async = true)
    public void toggle(JSONArray args, final CallbackContext context) throws JSONException {
        BluetoothService btService = new BluetoothServiceImpl(cordova.getActivity());
        btService.toggleBluetooth(new AsyncCallback() {
            @Override
            public void success(Object data) {
                Log.d(LOG_TAG, "toggle success");
                context.success();
            }

            @Override
            public void fail(Throwable error) {
                Log.e(LOG_TAG, "toggle fail", error);
                context.error(error.getMessage());
            }
        });
    }
}