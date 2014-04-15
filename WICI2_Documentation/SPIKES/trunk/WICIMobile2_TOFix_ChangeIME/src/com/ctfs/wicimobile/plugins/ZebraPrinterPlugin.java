package com.ctfs.wicimobile.plugins;

import java.io.IOException;
import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import android.app.Activity;
import android.os.AsyncTask;
import android.util.Log;
import com.ctfs.wicimobile.models.WICICardmemberModel;
import com.ctfs.wicimobile.util.PrinterManager;
import com.ctfs.wicimobile.util.WICIFileHelper;
import com.ctfs.wicimobile.util.WICIReplacementHelper;
import com.zebra.sdk.comm.ConnectionException;
import com.zebra.sdk.printer.ZebraPrinter;
import com.zebra.sdk.printer.ZebraPrinterLanguageUnknownException;
import com.zebra.sdk.printer.discovery.DiscoveredPrinter;
import com.zebra.sdk.printer.discovery.DiscoveredPrinterBluetooth;

public class ZebraPrinterPlugin extends CordovaPlugin {
    protected static final String EMPTY_STRING = "";

    public Activity getCurrentContext() {
        return this.cordova.getActivity();
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Log.i(getClass().getSimpleName(), "ZebraPrinterPlugin.printText");

        if (action.equals("getStoredPrintMacAddress")) {
            try {
                DiscoveredPrinter latestPrinter = PrinterManager.getInstance().getSelectedPrinter();
                if (latestPrinter == null) {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, "Not found"));
                    return true;
                }

                // Call UI callback with search results
                PluginResult result = new PluginResult(PluginResult.Status.OK, latestPrinter.address);
                // Send search results to Web UI side
                callbackContext.sendPluginResult(result);

                return true;
            } catch (Exception ex) {
                ex.printStackTrace();
                
                if (callbackContext != null) {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            }
        } else if (action.equals("storePrintMacAddress")) {
            try {
                String printerMACAddress = args.getString(0);
                DiscoveredPrinter printer = new DiscoveredPrinterBluetooth(printerMACAddress, EMPTY_STRING);
                PrinterManager.getInstance().setSelectedPrinter(printer);

                // Call UI callback with search results
                PluginResult result = new PluginResult(PluginResult.Status.OK, EMPTY_STRING);
                // Send search results to Web UI side
                callbackContext.sendPluginResult(result);

                return true;
            } catch (Exception ex) {
                ex.printStackTrace();
                
                if (callbackContext != null) {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            }
        } else if (action.equals("testPrint")) {
            try {
                printRequestedFile(true, args, callbackContext);

                return true;
            } catch (Exception ex) {
                ex.printStackTrace();
                
                if (callbackContext != null) {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            }
        } else if (action.equals("printOutMockup")) {
            try {
                printRequestedFile(false, args, callbackContext);

                return true;
            } catch (Exception ex) {
                ex.printStackTrace();
                
                if (callbackContext != null) {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            }
        }

        return false;
    }

    private void printRequestedFile(Boolean isPrintTestFile, JSONArray args, CallbackContext callbackContext) throws JSONException {
        String macAddress;
        WICICardmemberModel carmemberModel = null;
        
        PluginResult pluginResult = new PluginResult(PluginResult.Status.NO_RESULT);
        pluginResult.setKeepCallback(true);
        callbackContext.sendPluginResult(pluginResult);

        macAddress = args.getString(0);

        if (!isPrintTestFile) {
            carmemberModel = new WICICardmemberModel();
            carmemberModel.initializeModel(args, 1);
        }

        this.printFile(macAddress, carmemberModel, callbackContext);
    }

    private void printFile(String argMACAddress, WICICardmemberModel carmemberModel, CallbackContext callbackContext) {
        Log.i(getClass().getSimpleName(), "ZebraPrinterPlugin.printFile to " + argMACAddress);
        try {
            new ZebraPrintTask(argMACAddress, carmemberModel, callbackContext).execute(null, null, null);
        } catch (Exception ex) {
            ex.printStackTrace();
            if (callbackContext != null) {
                callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
            }
        }
    }

    private class ZebraPrintTask extends AsyncTask<Void, Void, Void> {
        private CallbackContext _callbackContext;
        private WICICardmemberModel _carmemberModel;

        public ZebraPrintTask(String printerMACAddress, WICICardmemberModel carmemberModel, CallbackContext callbackContext) {
            _callbackContext = callbackContext;
            _carmemberModel = carmemberModel;
            try {
                DiscoveredPrinter printer = new DiscoveredPrinterBluetooth(printerMACAddress, EMPTY_STRING);
                PrinterManager.getInstance().setSelectedPrinter(printer);
            } catch (Exception ex) {
                ex.printStackTrace();

                if (_callbackContext != null) {
                    _callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            }
        }

        protected Void doInBackground(Void... args) {
            Log.i(getClass().getSimpleName(), "ZebraPrintTask printing ");
            try {
                ZebraPrinter printer = PrinterManager.getInstance().getZebraPrinterWrapper();

                if (printer != null) {
                    sendZPLFile(printer, _carmemberModel);
                } else {
                    disconnect();
                }
            } catch (ConnectionException ex) {
                ex.printStackTrace();
                disconnect();
                if (_callbackContext != null) {
                    _callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            } catch (ZebraPrinterLanguageUnknownException ex) {             
                ex.printStackTrace();
                disconnect();

                if (_callbackContext != null) {
                    _callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            } catch (Exception ex) {
                ex.printStackTrace();

                if (_callbackContext != null) {
                    _callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            }

            return null;
        }

        protected void onProgressUpdate(Void... progress) {
            // setProgressPercent(progress[0]);
        }

        protected void onPostExecute(Void result) {
            // showDialog("Downloaded " + result + " bytes");
        }

        public void disconnect() {
            try {
                Log.i(getClass().getSimpleName(), "Disconnecting");

                PrinterManager.getInstance().disconnectSelectedPrinter();

            } catch (ConnectionException ex) {
                Log.i(getClass().getSimpleName(), "COMM Error! Disconnected");
                ex.printStackTrace();

                if (_callbackContext != null) {
                    _callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            } catch (ZebraPrinterLanguageUnknownException ex) {
                Log.i(getClass().getSimpleName(), "ZebraPrinterLanguageUnknownException! Disconnected");
                ex.printStackTrace();

                if (_callbackContext != null) {
                    _callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            } catch (Exception ex) {
                ex.printStackTrace();

                if (_callbackContext != null) {
                    _callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            }
        }

        private void sendZPLFile(ZebraPrinter printer, WICICardmemberModel carmemberModel) {
            try {
                // Initialize data
                WICIFileHelper fileHelper = new WICIFileHelper();
                
                if (carmemberModel != null) {                
                    WICIReplacementHelper replacementHelper = new WICIReplacementHelper(carmemberModel, getCurrentContext(), printer);
                    
                    // Process file
                    fileHelper.processMockupFile(printer, getCurrentContext(), replacementHelper, carmemberModel.getCardType(), carmemberModel.getResponseStatus(), carmemberModel.getProvince());
                }
                else {
                    // Print test file
                    fileHelper.printTestFile(printer, getCurrentContext());
                }                               

                // Call UI callback with search results
                PluginResult result = new PluginResult(PluginResult.Status.OK, "Success");
                result.setKeepCallback(false);

                // Send search results to Web UI side
                _callbackContext.sendPluginResult(result);
            } catch (ConnectionException ex) {
                ex.printStackTrace();

                if (_callbackContext != null) {
                    _callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            } catch (IOException ex) {
                ex.printStackTrace();

                if (_callbackContext != null) {
                    _callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            } catch (Exception ex) {
                ex.printStackTrace();

                if (_callbackContext != null) {
                    _callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ex.getMessage()));
                }
            }
        }
    }
}
