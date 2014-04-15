package com.ctfs.wicimobile.util;

import com.ctfs.wicimobile.enums.PrinterNetworkType;

public interface Settings {
    public String getPrinterMacAddress();    
    public void setPrinterMacAddress(String printerMacAddress);   
    
    public String getPrinterPort();    
    public void setPrinterPort(String printerPort);   
    
    public String getPrinterName();    
    public void setPrinterName(String printerName);
    
    public PrinterNetworkType getPrinterType();    
    public void setPrinterType(PrinterNetworkType printerType);
    
    public String getAppLanguage();    
    public void setAppLanguage(String appLanguage);
    
    
    public boolean isSettingsValid();
    
    public void resetSettings();
}
