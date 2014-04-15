package com.ctfs.wicimobile.util;

public interface StorageStrategy {
    boolean saveData (Settings accessData);
    Settings getData ();    
}
