package com.ctfs.wicimobile.util;

import com.ctfs.wicimobile.enums.PrinterNetworkType;
import android.content.Context;
import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;
import android.preference.PreferenceManager;

public class WICIStorageStrategy implements StorageStrategy {
    private static final String PRINTER_ADDRESS_KEY = "PrinterAddress";
    private static final String PRINTER_NAME_KEY = "PrinterName";
    private static final String PRINTER_TYPE_KEY = "PrinterType";
    
    private static final String APP_LANGUAGE_KEY = "AppLanguage";
    
    private Context _currentContext;
    
    public WICIStorageStrategy (Context appContext) {
        setCurrentContext(appContext);
    }
    
    @Override
    public boolean saveData(Settings accessData) {
        try {            
            Editor editor = PreferenceManager.getDefaultSharedPreferences(_currentContext).edit();
        
            editor.putString(PRINTER_ADDRESS_KEY, accessData.getPrinterMacAddress());
            editor.putString(PRINTER_NAME_KEY, accessData.getPrinterName());
            editor.putString(PRINTER_TYPE_KEY, accessData.getPrinterType().name());
            
            editor.putString(APP_LANGUAGE_KEY, accessData.getAppLanguage());
        
            editor.commit();
            
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return false;
    }

    @Override
    public Settings getData() {
        Settings appSettings = new WICIApplicationSettings();
        try {  
            SharedPreferences preferences = PreferenceManager.getDefaultSharedPreferences(_currentContext);
            
            if (preferences.getString(PRINTER_TYPE_KEY, PrinterNetworkType.Bluetooth.name()).equals(PrinterNetworkType.Network.name())) {
                String[] addressAndPort = preferences.getString(PRINTER_ADDRESS_KEY, "").split(":");                
                appSettings.setPrinterMacAddress(addressAndPort[0]);
                appSettings.setPrinterPort(addressAndPort[1]);
                appSettings.setPrinterName(preferences.getString(PRINTER_NAME_KEY, ""));
                appSettings.setPrinterType(PrinterNetworkType.valueOf(preferences.getString(PRINTER_TYPE_KEY, PrinterNetworkType.Bluetooth.name())));
            } else if (preferences.getString(PRINTER_TYPE_KEY, PrinterNetworkType.Network.name()).equals(PrinterNetworkType.Bluetooth.name())) {
                appSettings.setPrinterMacAddress(preferences.getString(PRINTER_ADDRESS_KEY, ""));
                appSettings.setPrinterName(preferences.getString(PRINTER_NAME_KEY, ""));
                appSettings.setPrinterType(PrinterNetworkType.valueOf(preferences.getString(PRINTER_TYPE_KEY, PrinterNetworkType.Bluetooth.name())));
            }        
            
            appSettings.setAppLanguage(preferences.getString(APP_LANGUAGE_KEY, ""));
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return appSettings;
    }

    public Context getCurrentContext() {
        return _currentContext;
    }

    public void setCurrentContext(Context appContext) {
        this._currentContext = appContext;
    }
}
