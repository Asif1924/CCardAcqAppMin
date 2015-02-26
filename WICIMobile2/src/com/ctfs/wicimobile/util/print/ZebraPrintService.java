package com.ctfs.wicimobile.util.print;

import com.zebra.sdk.comm.Connection;
import com.zebra.sdk.comm.ConnectionException;
import com.zebra.sdk.printer.ZebraPrinter;
import com.zebra.sdk.printer.ZebraPrinterFactory;
import com.zebra.sdk.printer.ZebraPrinterLanguageUnknownException;
import com.zebra.sdk.printer.discovery.DiscoveredPrinter;
import com.zebra.sdk.printer.discovery.DiscoveredPrinterBluetooth;

public class ZebraPrintService implements PrintService {
    private Connection connection;
    private ZebraPrinter printer;

    @Override
    public void connect(String macAddress) throws ConnectionEx {
        DiscoveredPrinter dPrinter = new DiscoveredPrinterBluetooth(macAddress, ""/*???*/);
        connection = dPrinter.getConnection();
        try {
            connection.open();
        } catch (ConnectionException e) {
            String msg = e.getMessage();
            if (msg.equals("Could not connect to device: Bluetooth is off")) {
                msg = "Bluetooth is off";
            } else if (msg.equals("Could not connect to device: read failed, socket might closed or timeout, read ret: -1")) {
                msg = "Can't find printer";
            } else {
                msg = "unexpected connection error";
            }
            throw new ConnectionEx(msg, e);
        }

        try {
            printer = ZebraPrinterFactory.getInstance(connection);
        } catch (ConnectionException e) {
            throw new ConnectionEx("Can't obtain zebra specific API connection", e);
        } catch (ZebraPrinterLanguageUnknownException e) {
            throw new ConnectionEx("Zebra Printer language unknown error", e);
        }
    }

    @Override
    public void print(byte[] data) throws PrintingEx {
        if (connection == null) {
            throw new IllegalStateException("connect to printer before print");
        }

        try {
            connection.write(data);
        } catch (ConnectionException e) {
            throw new PrintingEx(e);
        }
    }

    @Override
    public ZebraPrinter getPrinterAPI() {
        return printer;
    }

    @Override
    public void closeConnection() {
        if (connection != null && connection.isConnected()) {
            try {
                connection.close();
            } catch (ConnectionException e) {
                e.printStackTrace();
            }
        }
    }
}