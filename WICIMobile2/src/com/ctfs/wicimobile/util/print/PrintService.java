package com.ctfs.wicimobile.util.print;

public interface PrintService {
    public void connect(String macAddress) throws ConnectionEx;

    public void print(byte[] data) throws PrintingEx;

    public Object getPrinterAPI();

    public void closeConnection();
}