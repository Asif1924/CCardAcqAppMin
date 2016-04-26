package com.ctfs.wicimobile.plugins;

import android.app.Activity;
import android.os.AsyncTask;
import android.util.Log;
import com.ctfs.wicimobile.frw.CordovaMethod;
import com.ctfs.wicimobile.frw.PluginProxy;
import com.ctfs.wicimobile.util.PrinterManager;
import com.ctfs.wicimobile.util.WICIFileHelper;
import com.ctfs.wicimobile.util.print.ConnectionEx;
import com.ctfs.wicimobile.util.print.PrintService;
import com.ctfs.wicimobile.util.print.PrintingEx;
import com.ctfs.wicimobile.util.print.ZebraPrintService;
import org.apache.commons.io.IOUtils;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

public class TokenPrinterPlugin extends PluginProxy {
    private static final String LOG_TAG = "TokenPrinterPlugin";

    private String readTemplate(String templateName) throws IOException {
        Activity activity = cordova.getActivity();
        InputStream is = WICIFileHelper.readTemplate(activity, templateName);
        try {
            return IOUtils.toString(is);
        } finally {
            is.close();
        }
    }

    @SuppressWarnings("unused")
    @CordovaMethod
    public void printToken(JSONArray args, final CallbackContext context) {
        // 1. get token
        String token;
        try {
            token = args.getString(0);
        } catch (JSONException e) {
            context.error("JSONException while getting token: " + e.getMessage());
            return;
        }

        // 2. read template and merge with data (token)
        String data;
        try {
            data = readTemplate("PrintOutMockup_REF_NUMBER_{lang}");
        } catch (FileNotFoundException e) {
            context.error("can't find template REF_NUMBER");
            return;
        } catch (IOException e) {
            Log.e(LOG_TAG, "unexpected IOException while reading template file REF_NUMBER", e);
            context.error("unexpected error while reading template REF_NUMBER: " + e.getMessage());
            return;
        }

        // 3. replace placeholder by real token
        data = data.replace("#[ReferenceNumber]", token);

        // 4. get mac address (need to connect to printer)
        final String macAddress = PrinterManager.getInstance().getMacAddress();
        if (macAddress == null) {
            context.error("printer mac address not configured yet");
            return;
        }

        // 4. connect and print in async task
        AsyncTask<String, Void, Void> task = new AsyncTask<String, Void, Void>() {
            @Override
            protected Void doInBackground(String... args) {
                // 4. get print service
                PrintService printService = new ZebraPrintService();
                try {
                    printService.connect(macAddress);
                } catch (ConnectionEx e) {
                    Log.e(LOG_TAG, "Printer connection error", e);
                    context.error("Can't connect to the printer: " + e.getMessage());
                    return null;
                }

                String data = args[0];
                try {
                    printService.print(data.getBytes());
                    context.success();
                    Log.d(LOG_TAG, "printToken success");
                } catch (PrintingEx e) {
                    Log.e(LOG_TAG, "Printing exception", e);
                    context.error("Error while printing: " + e.getMessage());
                } finally {
                    printService.closeConnection();
                }
                return null;
            }
        };
        task.execute(data);

        PluginResult result = new PluginResult(PluginResult.Status.NO_RESULT);
        result.setKeepCallback(true);
        context.sendPluginResult(result);
    }
}