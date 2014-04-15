package com.ctfs.wicimobile.util;

import com.ctfs.wicimobile.enums.PrinterNetworkType;

public class WICIApplicationSettings implements Settings {
    private String _printerMacAddress;
    private String _printerPort;
    private String _printerName;
    private PrinterNetworkType _printerType;
    
    private String _appLanguage;
    
    public WICIApplicationSettings () {
    	resetSettings();
    }    
    
    public String getPrinterMacAddress() {
        return _printerMacAddress;
    }
    
    public void setPrinterMacAddress(String printerMacAddress) {
        this._printerMacAddress = printerMacAddress;
    }
    
    public String getPrinterPort() {
        return _printerPort;
    }
    
    public void setPrinterPort(String printerPort) {
        this._printerPort = printerPort;
    }
    
    public String getPrinterName() {
        return _printerName;
    }
    
    public void setPrinterName(String printerName) {
        this._printerName = printerName;
    }
    
    public PrinterNetworkType getPrinterType() {
        return _printerType;
    }
    
    public void setPrinterType(PrinterNetworkType printerType) {
        this._printerType = printerType;
    }
    
    public void setAppLanguage(String appLanguage) {
    	this._appLanguage = appLanguage;
    }
    
    public String getAppLanguage() {
    	return _appLanguage;
    }
    
    public boolean isSettingsValid () {        
        return _printerMacAddress != null && 
        		!_printerMacAddress.isEmpty() && 
        		_appLanguage != null && 
        		!_appLanguage.isEmpty();
    }
    
    public void resetSettings () {
    	_printerMacAddress = null;
        _printerPort = null;
        _printerName = null;     
        _printerType = PrinterNetworkType.Bluetooth;
        _appLanguage = null;
    }
}
