package com.ctfs.wicimobile.plugins;

import java.util.*;

import com.ctfs.wicimobile.frw.CordovaMethod;
import com.ctfs.wicimobile.frw.PluginProxy;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.os.Parcelable;

import org.apache.cordova.CallbackContext;

import mobi.pdf417.Pdf417MobiSettings;
import mobi.pdf417.Pdf417MobiScanData;
import mobi.pdf417.activity.Pdf417ScanActivity;
import net.photopay.barcode.BarcodeDetailedData;
import net.photopay.base.BaseBarcodeActivity;
import net.photopay.hardware.camera.CameraType;

public class Pdf417Scanner extends PluginProxy {
    private static final String LOG_TAG = "Pdf417Scanner";

    private static final int REQUEST_CODE = 1337;

    private CallbackContext callbackContext;

    @CordovaMethod(async = true)
    @SuppressWarnings("unused")
    public void scan(JSONArray args, CallbackContext callbackContext) {
        this.callbackContext = callbackContext;

        JSONArray typesArg = args.optJSONArray(0);
        Set<String> types = new HashSet<String>();
        for (int i = 0; i < typesArg.length(); ++i) {
            types.add(typesArg.optString(i));
        }

        // Default values
        JSONObject options = args.optJSONObject(1);
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

        String license = args.optString(2);

        scan(types, beep, noDialog, removeOverlay, uncertain, quietZone, highRes, frontFace, license);
    }

    /**
     * @param types types of barcodes supported (pass as array of desired barcode strings):
     *
     *	"PDF417"
     *	"QR Code"
     *	"Code 128"
     *	"Code 39"
     *	"EAN 13"
     *	"EAN 8"
     *	"ITF"
     *	"UPCA"
     *	"UPCE"
     *
     * @param beep determine whether to play the beep sound upon barcode recognition (default is true)
     * @param noDialog determine if dialog is presented after successful scan (default is false)
     * @param removeOverlay if license permits this, remove Pdf417.mobi logo overlay on scan activity (default is false)
     * @param uncertain set this to true to scan even barcode not compliant with standards, For example, malformed PDF417 barcodes which were incorrectly encoded. Use only if necessary because it slows down the recognition process
     * @param quietZone set this to true to scan barcodes which don't have quiet zone (white area) around it. Use only if necessary because it drastically slows down the recognition process.
     * @param highRes set to true if you want to always use highest possible camera resolution (enabled by default for all devices that support at least 720p camera preview frame size)
     * @param frontFace set to true to use front facing camera. Note that front facing cameras do not have auto focus support, so it will not be possible to scan denser and smaller codes.
     * @param license license key to enable all features (not required)
     */
    public void scan(Set<String> types, Boolean beep, Boolean noDialog, Boolean removeOverlay, Boolean uncertain, Boolean quietZone, Boolean highRes, Boolean frontFace, String license) {
        Context context = this.cordova.getActivity().getApplicationContext();

        Intent intent = new Intent(context, Pdf417ScanActivity.class);

        Pdf417MobiSettings settings = new Pdf417MobiSettings();

        settings.setPdf417Enabled(types.contains("PDF417"));
        settings.setQrCodeEnabled(types.contains("QR Code"));
        settings.setCode128Enabled(types.contains("Code 128"));
        settings.setCode39Enabled(types.contains("Code 39"));
        settings.setEan13Enabled(types.contains("EAN 13"));
        settings.setEan8Enabled(types.contains("EAN 8"));
        settings.setItfEnabled(types.contains("ITF"));
        settings.setUpcaEnabled(types.contains("UPCA"));
        settings.setUpceEnabled(types.contains("UPCE"));

        // set this to true to prevent showing dialog after successful scan
        settings.setDontShowDialog(noDialog);
        // if license permits this, remove Pdf417.mobi logo overlay on scan
        // activity
        // if license forbids this, this option has no effect
        settings.setRemoveOverlayEnabled(removeOverlay);

        // Set this to true to scan barcodes which don't have quiet zone (white area) around it
        // Use only if necessary because it drastically slows down the recognition process
        settings.setNullQuietZoneAllowed(quietZone);

        // Set this to true to scan even barcode not compliant with standards
        // For example, malformed PDF417 barcodes which were incorrectly encoded
        // Use only if necessary because it slows down the recognition process
        settings.setUncertainScanning(uncertain);

        // If you want sound to be played after the scanning process ends,
        // put here the resource ID of your sound file. (optional)
		if (beep) {
            int beepId = context.getResources().getIdentifier("beep_pdf417", "raw", context.getPackageName());
			intent.putExtra(Pdf417ScanActivity.EXTRAS_BEEP_RESOURCE, beepId);
		}

        // set EXTRAS_ALWAYS_USE_HIGH_RES to true if you want to always use highest
        // possible camera resolution (enabled by default for all devices that support
        // at least 720p camera preview frame size)
        if (highRes) {
            intent.putExtra(Pdf417ScanActivity.EXTRAS_ALWAYS_USE_HIGH_RES, true);
        }

        // set EXTRAS_CAMERA_TYPE to use front facing camera
        // Note that front facing cameras do not have autofocus support, so it will not
        // be possible to scan denser and smaller codes.
        if (frontFace) {
            intent.putExtra(Pdf417ScanActivity.EXTRAS_CAMERA_TYPE, (Parcelable) CameraType.CAMERA_FRONTFACE);
        }

        // set the license key (for commercial versions only) - obtain your key at
        // http://pdf417.mobi
        if (license != null) {
            intent.putExtra(Pdf417ScanActivity.EXTRAS_LICENSE_KEY, license);
        }

        // put settings as intent extra
        intent.putExtra(BaseBarcodeActivity.EXTRAS_SETTINGS, settings);

        this.cordova.startActivityForResult(this, intent, REQUEST_CODE);
    }

    /**
     * Called when the scanner intent completes.
     *
     * @param requestCode The request code originally supplied to
     *                    startActivityForResult(), allowing you to identify who this
     *                    result came from.
     * @param resultCode  The integer result code returned by the child activity through
     *                    its setResult().
     * @param data        An Intent, which can return result data to the caller (various
     *                    data can be attached to Intent "extras").
     */
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        Log.d(LOG_TAG, "onActivityResult(requestCode: " + requestCode + ", resultCode: " + resultCode + ", data: " + data);
        if (requestCode != REQUEST_CODE) return;

        if (resultCode == BaseBarcodeActivity.RESULT_OK) {
            // read scan results
            ArrayList<Pdf417MobiScanData> scanDataList = data.getParcelableArrayListExtra(BaseBarcodeActivity.EXTRAS_RESULT_LIST);
            JSONObject result;
            try {
                result = convert(scanDataList.get(0));
            } catch (JSONException e) {
                throw new RuntimeException("This should never happen", e);
            }
            this.callbackContext.success(result);
        } else if (resultCode == BaseBarcodeActivity.RESULT_CANCELED) {
            JSONObject obj = new JSONObject(Collections.singletonMap("cancelled", true));
            this.callbackContext.success(obj);
        } else {
            this.callbackContext.error("Unexpected error");
        }
    }

    private static JSONObject convert(Pdf417MobiScanData scanData) throws JSONException {
        JSONObject obj = new JSONObject();
        // read scanned barcode type (PDF417 or QR code)
        String barcodeType = scanData.getBarcodeType();

        // read the data contained in barcode
        String barcodeData = scanData.getBarcodeData();

        // read raw barcode data
        BarcodeDetailedData rawData = scanData.getBarcodeRawData();

        obj.put("type", barcodeType);
        obj.put("data", barcodeData);
        obj.put("raw", byteArrayToHex(rawData.getAllData()));
        obj.put("cancelled", false);
        return obj;
    }

    private static String byteArrayToHex(byte[] data) {
        StringBuilder sb = new StringBuilder();
        for (byte b : data) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
    }
}