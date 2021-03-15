package com.ctfs.wicimobile.plugins;

import java.io.IOException;
import java.io.StringReader;
import java.nio.charset.StandardCharsets;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;
import org.xmlpull.v1.XmlPullParserFactory;

import com.cognex.dataman.sdk.CameraMode;
import com.cognex.dataman.sdk.ConnectionState;
import com.cognex.dataman.sdk.PreviewOption;
import com.cognex.dataman.sdk.exceptions.CameraPermissionException;
import com.cognex.mobile.barcode.sdk.ReadResult;
import com.cognex.mobile.barcode.sdk.ReadResults;
import com.cognex.mobile.barcode.sdk.ReaderDevice;
import com.ctfs.wicimobile.frw.CordovaMethod;
import com.ctfs.wicimobile.frw.PluginProxy;
import com.manateeworks.MWOverlay;

import android.Manifest;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.support.v4.app.ActivityCompat;
import android.util.Base64;
import android.util.Log;


public class BarcodeScanner extends PluginProxy 
	implements ReaderDevice.OnConnectionCompletedListener, ReaderDevice.ReaderDeviceListener {

	private CallbackContext callbackContext;
    private ReaderDevice readerDevice;
    private JSONArray arguments;
    private String defaultLicense="7y4Lwtdk1eUCyf9N6wOlkuKzHor0CcKHQPqhXU3E1T8=";
    private static final int CAMERA_PERMISSION_REQUEST_CODE = 234;
    
    @CordovaMethod(async = true)
    @SuppressWarnings("unused")
	public void scan(JSONArray args, CallbackContext callbackContext) {
    	this.callbackContext = callbackContext;
    	this.arguments = args;
    	
        scan();
	}
    
    private void scan() {
    	
    	MWOverlay.targetRectLineColor=Color.RED;
        MWOverlay.targetRectLineWidth = 2;

        MWOverlay.viewportLineColor=Color.RED;
        
    	if(readerDevice == null || readerDevice.getConnectionState() != ConnectionState.Connected){
        	
        	String license = this.arguments.optString(2);
            if(license.isEmpty()) {
            	license=defaultLicense;
            }
        	
            readerDevice = ReaderDevice.getPhoneCameraDevice(cordova.getActivity(), CameraMode.NO_AIMER,
                             PreviewOption.ALWAYS_SHOW | PreviewOption.SHOW_CLOSE_BUTTON
                            | PreviewOption.NO_ILLUMINATION_BUTTON | PreviewOption.NO_ZOOM_BUTTON
                            | PreviewOption.HARDWARE_TRIGGER,null, license);

            readerDevice.setReaderDeviceListener(BarcodeScanner.this);
            readerDevice.connect(BarcodeScanner.this);
        }
        else{
            if (readerDevice.getConnectionState() == ConnectionState.Connected) {
                startScan(readerDevice);
            }else{
                readerDevice.connect(BarcodeScanner.this);
            }
        }
    }
	
    private void startScan(ReaderDevice readerDevice){

    	MWOverlay.viewportLineColor=Color.RED;
    	
    	//TODO - Need to look at disabling all barcodes by default.
    	JSONArray typesArg = this.arguments.optJSONArray(0);
        for (int i = 0; i < typesArg.length(); ++i) {
            
            try {
            	ReaderDevice.Symbology symbology = Enum.valueOf(ReaderDevice.Symbology.class, typesArg.optString(i));
            	setSymbology(readerDevice,symbology,true);
            } catch (Exception e) { //IllegalArgumentException
            	returnError("Unable to enable symbology - "+typesArg.optString(i));
            }
        }
        /* TODO - Need to see if these settings can be used/customized.
        // Default values
        JSONObject options = this.arguments.optJSONObject(1);
        if (options == null) {
            options = new JSONObject();
        }
        Boolean beep = options.optBoolean("beep", true);
        Boolean noDialog = options.optBoolean("noDialog", false);
        Boolean removeOverlay = options.optBoolean("removeOverlay", false);
        Boolean uncertain = options.optBoolean("uncertain", false);
        Boolean quietZone = options.optBoolean("quietZone", false);
        Boolean highRes = options.optBoolean("highRes", false);
        Boolean frontFace = options.optBoolean("frontFace", false);
    	*/
        readerDevice.getDataManSystem().sendCommand("SET DECODER.TARGET-DECODING ON");
        readerDevice.getDataManSystem().sendCommand("SET DECODER.CENTERING-WINDOW 50 50 30 75");

        readerDevice.startScanning();

    }

    private void setSymbology(ReaderDevice readerDevice, ReaderDevice.Symbology symbology, boolean enable){
        readerDevice.setSymbologyEnabled(
                    symbology,
                    enable,
                    new ReaderDevice.OnSymbologyListener() {
                        @Override
                        public void onSymbologyEnabled(ReaderDevice readerDevice, ReaderDevice.Symbology symbology, Boolean aBoolean, Throwable throwable) {
                            if (throwable != null) {
                            	returnError("Error while changing symbology - "+symbology, throwable);
                            } 
                        }
                    }
            );
    }
    
    private void returnError(String errorText) {
    	this.callbackContext.error(errorText);
    }
    
    private void returnError(String errorText, Throwable throwable ) {
    	returnError(errorText + " Serialized exception: " + throwable.toString());
    }
    
	@Override
	public void onAvailabilityChanged(ReaderDevice readerDevice) {
		//Not much to do here.
	}
	
	@Override
	public void onConnectionStateChanged(ReaderDevice readerDevice) {
        if (readerDevice.getConnectionState() == ConnectionState.Connected) {
            startScan(readerDevice);            
        }else{
        	//Setup goes through CONNECTING state before getting to CONNECTED state.
            //We don't really need to deal with this, unless testing proves otherwise.
        }

	}

	@Override
    public void onReadResultReceived(ReaderDevice readerDevice, ReadResults readResults) {
          
     if (readResults.getSubResults() != null && readResults.getSubResults().size() > 0) {
         for (ReadResult subResult : readResults.getSubResults()) {
         //TODO - We shouldn't be here. Need to see what to do.
         }
     } else if (readResults.getCount() > 0 && readResults.getResultAt(0).isGoodRead()) {

          JSONObject result;
         try {
             result = successResponse(readResults.getResultAt(0));
         } catch (Exception e) {
             throw new RuntimeException("This should never happen", e);
         }
         this.callbackContext.success(result);
          
     }else if (readResults.getCount() > 0 && !readResults.getResultAt(0).isGoodRead()){
          returnError("Unable to read barcode.");
     }
    }
	
	private static JSONObject successResponse(ReadResult readResult) throws JSONException, XmlPullParserException, IOException {
        JSONObject obj = new JSONObject();

        String barcodeType = readResult.getSymbology().toString();

        // read the data contained in barcode
        //String barcodeData = readResult.getReadString();
        String barcodeData = "";
        //Decode using ISO_8859_1 to cover Accented French Characters. 
        XmlPullParserFactory factory = XmlPullParserFactory.newInstance();
        factory.setNamespaceAware(true);
        XmlPullParser xpp = factory.newPullParser();
        String tag = "";
        // the raw bytes will be stored in this variable
        byte[] bytes;
        xpp.setInput(new StringReader(readResult.getXml()));
        int eventType = xpp.getEventType();
        
        while (eventType != XmlPullParser.END_DOCUMENT) {
            if (eventType == XmlPullParser.START_TAG) {
                tag = xpp.getName();
            }
            else if (eventType == XmlPullParser.TEXT && tag.equals("full_string")) {
                String base64String = xpp.getText();
                
                // Get the bytes from the base64 string here
                bytes = Base64.decode(base64String, Base64.DEFAULT);
                
                barcodeData = new String(bytes, StandardCharsets.ISO_8859_1);
                    Log.d("BarcodeScanner_ISO", "outputString from base64 bytes: "+ barcodeData);
                    
                break;
            }
            else if (eventType == XmlPullParser.END_TAG && tag.equals("full_string")) {
                tag = "";
                break;
            }
            eventType = xpp.next();
        }

        obj.put("type", barcodeType);
        obj.put("data", barcodeData);
        obj.put("cancelled", false);
        return obj;
    }

	@Override
	public void onConnectionCompleted(ReaderDevice readerDevice, Throwable throwable) {
        if (throwable != null) {
            if (throwable instanceof CameraPermissionException){
                cordova.requestPermission(BarcodeScanner.this, CAMERA_PERMISSION_REQUEST_CODE, Manifest.permission.CAMERA);
            }else {
            	returnError("Error connecting to camera.", throwable);
            }
        }
	}

    // Camera Permission
    public void onRequestPermissionResult(int requestCode, String[] permissions,
                                          int[] grantResults) throws JSONException {

        if (requestCode == CAMERA_PERMISSION_REQUEST_CODE) {
            if (grantResults.length > 0 && grantResults[0] != PackageManager.PERMISSION_GRANTED) {
                try {
                    if (shouldShowRequestPermissionRationale(cordova.getActivity(), Manifest.permission.CAMERA)) {
                        new AlertDialog.Builder(cordova.getActivity())
                                .setMessage(
                                        "You need to allow access to the Camera")
                                .setPositiveButton("OK",
                                        new DialogInterface.OnClickListener() {
                                            @Override
                                            public void onClick(
                                                    DialogInterface dialogInterface,
                                                    int i) {
                                                cordova.requestPermission(BarcodeScanner.this, CAMERA_PERMISSION_REQUEST_CODE, Manifest.permission.CAMERA);
                                            }
                                        })
                                .setNegativeButton("Cancel",
                                        new DialogInterface.OnClickListener() {
                                            @Override
                                            public void onClick(
                                                    DialogInterface dialogInterface,
                                                    int i) {
                                                readerDevice.disconnect();
                                            }
                                        }).setCancelable(false).create().show();
                    } else {
                        new AlertDialog.Builder(cordova.getActivity())
                                .setMessage(
                                        "Please enable camera permission to use this app")
                                .setNegativeButton("Cancel",
                                        new DialogInterface.OnClickListener() {
                                            @Override
                                            public void onClick(
                                                    DialogInterface dialogInterface,
                                                    int i) {
                                                readerDevice.disconnect();
                                            }
                                        }).setCancelable(false).create().show();
                    }
                } catch (Exception e) {
                    new AlertDialog.Builder(cordova.getActivity())
                            .setMessage(
                                    "Please enable camera permission to use this app")
                            .setNegativeButton("Cancel",
                                    new DialogInterface.OnClickListener() {
                                        @Override
                                        public void onClick(
                                                DialogInterface dialogInterface,
                                                int i) {
                                            readerDevice.disconnect();
                                        }
                                    }).setCancelable(false).create().show();
                }
            } else {
                scan();
            }
        } 
    }

    private boolean shouldShowRequestPermissionRationale(Activity activity, String permission) throws Exception {
        boolean shouldShow;
        try {
            java.lang.reflect.Method method = ActivityCompat.class.getMethod("shouldShowRequestPermissionRationale", Activity.class, java.lang.String.class);
            Boolean bool = (Boolean) method.invoke(null, activity, permission);
            shouldShow = bool.booleanValue();
        } catch (NoSuchMethodException e) {
            throw new Exception("shouldShowRequestPermissionRationale() method not found in ActivityCompat class. Check you have Android Support Library v23+ installed");
        }
        return shouldShow;
    }

}
