package com.ctfs.wicimobile.util.wifi;

import com.ctfs.wicimobile.frw.AsyncCallback;

public interface WifiService {
    public void createWAPNetwork(String ssid, String password, int reconnectDelayMillis, AsyncCallback<Void, RuntimeException> callback);
}