package com.ctfs.wicimobile.util;

import android.content.Context;

public class WICIAppSettingsStorageManager {
    private static WICIAppSettingsStorageManager instance = null;
    private StorageStrategy _appStorageStrategy;
    private StorageStrategy _appExternalStorageStrategy;
    private Settings _appSettings;

    private WICIAppSettingsStorageManager(Context appContext) {
        _appStorageStrategy = new WICIStorageStrategy(appContext);
        _appExternalStorageStrategy = new WICIExternalStorageStrategy(appContext);
        _appSettings = new WICIApplicationSettings();
    }

    public static WICIAppSettingsStorageManager getInstance(Context appContext) {
        if (instance == null) {
            instance = new WICIAppSettingsStorageManager(appContext);
        }
        return instance;
    }
    
    public Settings getCurrentAppSettings() {
    	if( _appSettings==null )
    		_appSettings = new WICIApplicationSettings();
    	return _appSettings;
    }

    public void saveAppSettins(Settings appSettings) {
        try {
        	_appSettings = appSettings;        	
            _appStorageStrategy.saveData(appSettings);
            _appExternalStorageStrategy.saveData(appSettings);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Settings restoreAppSettins() {        
        try {
            _appSettings = _appStorageStrategy.getData();
            
            if (!_appSettings.isSettingsValid()) {
                _appSettings = _appExternalStorageStrategy.getData();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return _appSettings;
    }
    
    public void cleanAppSettings () {
    	_appSettings.resetSettings();
    }
}
