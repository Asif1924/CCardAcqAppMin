package com.ctfs.wicimobile.util;

import android.os.Environment;

public class ExternalStorageHelper {
    private static ExternalStorageHelper instance = null;
    
    private ExternalStorageHelper () {        
    }    
    
    public static ExternalStorageHelper getInstance() {
        if(instance == null) {
           instance = new ExternalStorageHelper();
        }
        return instance;
    }
    
    /* Checks if external storage is available for read and write */
    public boolean isExternalStorageWritable() {
        String state = Environment.getExternalStorageState();
        if (Environment.MEDIA_MOUNTED.equals(state)) {
            return true;
        }
        
        return false;
    }

    /* Checks if external storage is available to at least read */
    public boolean isExternalStorageReadable() {
        String state = Environment.getExternalStorageState();
        if (Environment.MEDIA_MOUNTED.equals(state) ||
            Environment.MEDIA_MOUNTED_READ_ONLY.equals(state)) {            
            return true;
        }
        
        return false;
    }
}
