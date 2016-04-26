package com.ctfs.wicimobile.util;

import android.content.Context;

public class WICIAppSettingsStorageManager {
    private static WICIAppSettingsStorageManager instance;

    private StorageStrategy _appStorageStrategy;
    private StorageStrategy _appExternalStorageStrategy;
    private Settings _appSettings;

    private WICIAppSettingsStorageManager(Context appContext) {
        _appStorageStrategy = new WICIStorageStrategy(appContext);
        _appExternalStorageStrategy = new WICIExternalStorageStrategy(appContext);
        _appSettings = new WICIApplicationSettings();
    }

    /**
     * Should be called only once - form application activity
     * @param appContext application context
     */
    public static void init(Context appContext) {
        instance = new WICIAppSettingsStorageManager(appContext);
        instance.restoreAppSettins();
    }

    public static WICIAppSettingsStorageManager getInstance() {
        return instance;
    }
    
    public Settings getCurrentAppSettings() {
    	if( _appSettings==null )
    		_appSettings = new WICIApplicationSettings();    	
    	return _appSettings;
    }

    public void saveAppSettins() {
        try {
            _appStorageStrategy.saveData(_appSettings);
            _appExternalStorageStrategy.saveData(_appSettings);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void restoreAppSettins() {
        try {
            _appSettings = _appStorageStrategy.getData();
            
            if (!_appSettings.isSettingsValid()) {
                _appSettings = _appExternalStorageStrategy.getData();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    public void cleanAppSettings () {
    	_appSettings.resetSettings();
    }
}
