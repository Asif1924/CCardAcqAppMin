package com.ctfs.wicimobile.util;

import java.util.ArrayList;
import java.util.List;
import android.content.Context;
import com.ctfs.wicimobile.enums.PrinterNetworkType;
import com.zebra.sdk.comm.Connection;
import com.zebra.sdk.comm.ConnectionException;
import com.zebra.sdk.printer.ZebraPrinter;
import com.zebra.sdk.printer.ZebraPrinterFactory;
import com.zebra.sdk.printer.ZebraPrinterLanguageUnknownException;
import com.zebra.sdk.printer.discovery.DiscoveredPrinter;
import com.zebra.sdk.printer.discovery.DiscoveredPrinterBluetooth;
import com.zebra.sdk.printer.discovery.DiscoveredPrinterNetwork;

public class PrinterManager {
    private static final int MAX_HISTORY_SIZE = 1;    
    private static PrinterManager instance = null;

    private static List<DiscoveredPrinter> selectedPrinterHistory = new ArrayList<DiscoveredPrinter>();

    public static PrinterManager getInstance() {
        if(instance == null) {
           instance = new PrinterManager();
        }
        return instance;
     }
    
    private PrinterManager () {        
    }
    
    public ZebraPrinter getZebraPrinterWrapper() throws ConnectionException, ZebraPrinterLanguageUnknownException {
        Connection connection = getSelectedPrinterConnection();
        return connection != null ? ZebraPrinterFactory.getInstance(connection) : null;
    }

    public DiscoveredPrinter getSelectedPrinter() {
        if (selectedPrinterHistory.size() > 0) {
            return selectedPrinterHistory.get(0);
        } else {
            return null;
        }
    }

    public String getMacAddress() {
        DiscoveredPrinter latestPrinter = PrinterManager.getInstance().getSelectedPrinter();
        return latestPrinter == null ? null : latestPrinter.address;
    }

    public DiscoveredPrinter[] getPrinterHistory() {
        return selectedPrinterHistory.toArray(new DiscoveredPrinter[selectedPrinterHistory.size()]);
    }

    public void populatePrinterHistory(DiscoveredPrinter[] newHistory) {
        for (int i = newHistory.length; i > 0; i--) {
            setSelectedPrinter(newHistory[i - 1]);
        }
    }

    public void setSelectedPrinter(DiscoveredPrinter printer) {
    	/*
        for (int i = 0; i < selectedPrinterHistory.size(); i++) {
            if (selectedPrinterHistory.get(i).address.equals(printer.address)) {
                selectedPrinterHistory.remove(i);
                break;
            }
        }*/
        selectedPrinterHistory.add(0, printer);
        if (selectedPrinterHistory.size() > MAX_HISTORY_SIZE) {
            selectedPrinterHistory.remove(selectedPrinterHistory.size() - 1);
        }
    }

    public Connection getSelectedPrinterConnection() throws ConnectionException {
        DiscoveredPrinter printer = getSelectedPrinter();

        return setUpPrinterConnection(printer);
    }

    public Boolean disconnectSelectedPrinter() throws ConnectionException, ZebraPrinterLanguageUnknownException {
        Connection connection = getSelectedPrinterConnection();
        return disconnectPrinterConnection(connection);
    }

    public void removeHistoryItemAtIndex(int index) {
        int historySize = selectedPrinterHistory.size();
        if (historySize > 0 && index < historySize) {
            selectedPrinterHistory.remove(index);
        }
    }

    public void storePrinterHistoryInPreferences(Context appContext) {
        try {            
            Settings appSettings = WICIAppSettingsStorageManager.getInstance().getCurrentAppSettings();
            
            DiscoveredPrinter thisPrinter = getSelectedPrinter();
            
            if (thisPrinter ==  null ) return;
            
            if (thisPrinter instanceof DiscoveredPrinterNetwork) {
                DiscoveredPrinterNetwork thisPrinterNetwork = (DiscoveredPrinterNetwork) thisPrinter;
                String addressToStore = thisPrinterNetwork.address + ":" + thisPrinterNetwork.getDiscoveryDataMap().get("PORT_NUMBER");
                
                appSettings.setPrinterMacAddress(addressToStore);
                appSettings.setPrinterName(thisPrinterNetwork.getDiscoveryDataMap().get("DNS_NAME"));
                appSettings.setPrinterType(PrinterNetworkType.Network);
            } else if (thisPrinter instanceof DiscoveredPrinterBluetooth) {
                DiscoveredPrinterBluetooth thisPrinterBluetooth = (DiscoveredPrinterBluetooth) thisPrinter;
                
                appSettings.setPrinterMacAddress(thisPrinterBluetooth.address);
                appSettings.setPrinterName(thisPrinterBluetooth.friendlyName);
                appSettings.setPrinterType(PrinterNetworkType.Bluetooth);
            }            

            WICIAppSettingsStorageManager.getInstance().saveAppSettins();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void populatePrinterHistoryFromPreferences(Context appContext) {
        try {
            Settings appSettings = WICIAppSettingsStorageManager.getInstance().getCurrentAppSettings();
            
            if (appSettings == null) { return; }
            
            List<DiscoveredPrinter> printers = new ArrayList<DiscoveredPrinter>();
            if (appSettings.getPrinterType() == PrinterNetworkType.Network) {
                DiscoveredPrinterNetwork printer = new DiscoveredPrinterNetwork(appSettings.getPrinterMacAddress(), Integer.parseInt(appSettings.getPrinterPort()));
                printer.getDiscoveryDataMap().put("DNS_NAME", appSettings.getPrinterName());
                printers.add(printer);                
            } else if (appSettings.getPrinterType() == PrinterNetworkType.Bluetooth) {
                printers.add(new DiscoveredPrinterBluetooth(appSettings.getPrinterMacAddress(), appSettings.getPrinterName()));
            }
            
            populatePrinterHistory(printers.toArray(new DiscoveredPrinter[] {}));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private Connection setUpPrinterConnection(DiscoveredPrinter printer) throws ConnectionException {
        Connection connection = null;

        if (printer != null) {
            connection = printer.getConnection();
            if (!connection.isConnected()) {
                connection.open();
            }
        }

        return connection;
    }

    public Boolean disconnectPrinterConnection(Connection connection) throws ConnectionException, ZebraPrinterLanguageUnknownException {
        if (connection != null && connection.isConnected()) {
            connection.close();

            return true;
        }

        return false;
    }
}
