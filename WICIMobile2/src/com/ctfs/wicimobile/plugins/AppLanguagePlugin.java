package com.ctfs.wicimobile.plugins;

import android.app.Activity;
import android.content.res.Resources;
import android.util.Log;
import com.ctfs.wicimobile.frw.CordovaMethod;
import com.ctfs.wicimobile.frw.PluginProxy;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;

import com.ctfs.wicimobile.util.Settings;
import com.ctfs.wicimobile.util.WICIAppSettingsStorageManager;

import java.util.Locale;

public class AppLanguagePlugin extends PluginProxy {
    private static final String LOG_TAG = "AppLanguagePlugin";

    private Settings appSettings;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        appSettings = WICIAppSettingsStorageManager.getInstance().getCurrentAppSettings();
    }

    @CordovaMethod
    @SuppressWarnings("unused")
    public void getAppLanguage(JSONArray args, CallbackContext callbackContext) throws JSONException {
        String language = appSettings.getAppLanguage();
        Log.d(LOG_TAG, "getAppLanguage()==" + language);
        if (language == null) {
            callbackContext.error("Not found");
        } else {
            callbackContext.success(language);
        }
    }

    @CordovaMethod
    @SuppressWarnings("unused")
    public void setAppLanguage(JSONArray args, CallbackContext callbackContext) throws JSONException {
        String language = args.getString(0);
        changeSystemLang(cordova.getActivity(), language);
        appSettings.setAppLanguage(language);
        WICIAppSettingsStorageManager.getInstance().saveAppSettins();
        callbackContext.success();
    }

    /**
     * Need to change button names in barcode scanner
     * @param lang new language
     */
    public static void changeSystemLang(Activity activity, String lang) {
        String systemLang = "F".equalsIgnoreCase(lang) ? "fr" : "en";
        Log.i(LOG_TAG, "change lang: " + systemLang);

        Resources res = activity.getResources();
        // Change locale settings in the app.
        android.content.res.Configuration conf = res.getConfiguration();
        conf.locale = new Locale(systemLang);
        res.updateConfiguration(conf, res.getDisplayMetrics());
    }
}