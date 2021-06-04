package com.ctfs.wicimobile.util;

import android.graphics.Bitmap;
import com.zebra.sdk.comm.ConnectionException;
import com.zebra.sdk.graphics.internal.ZebraImageAndroid;
import com.zebra.sdk.printer.ZebraPrinter;

public class WICISignatureReplacementStrategy implements ReplacementStrategy {
    protected static final String EMPTY_STRING = "";
    protected static final int SignatureWith = 450;
    protected static final int SignatureHeight = 130;
    protected static final int SignatureXOffset = 25;
    protected static final int SignatureYOffset = 20;

    private static final String SerachPattern = "#[Signature]";
    private String _signature;
    private ZebraPrinter _printer;

    public WICISignatureReplacementStrategy(String signature, ZebraPrinter printer) {
        _signature = signature;
        _printer = printer;
    }

    @Override
    public String applyReplacement(String source) {
        if (source != null && !source.isEmpty() && _signature != null && !_signature.isEmpty() && source.contains(SerachPattern)) {
            try {
                Bitmap img = getSignatureAsBitmap(_signature);
                SignatureCoordinates signatureCoordinates = getSignatureCoordinates(source);

                // Print image as part of the formatted document (last parameter
                // is true)
                _printer.printImage(
                        new ZebraImageAndroid(img), 
                        SignatureYOffset, 
                        signatureCoordinates.getY() + SignatureYOffset, SignatureWith,
                        SignatureHeight,
                        true);
                
                return EMPTY_STRING;
            } catch (ConnectionException e) {                
                e.printStackTrace();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return source;
    }

    protected SignatureCoordinates getSignatureCoordinates(String source) {
        SignatureCoordinates coordinates = new SignatureCoordinates();

        // Leave only data with coordinates
        String subString1 = source.replace("^FT", "");
        //String subString2 = subString1.replace("^A0N,28,28^FH\\^FD#[Signature]^FS", "");
        String subString2 = subString1.substring(0, subString1.indexOf("^"));
        String[] signatureCoordinates = subString2.split(",");
        coordinates.setX(Integer.parseInt(signatureCoordinates[0]));
        coordinates.setY(Integer.parseInt(signatureCoordinates[1]));

        return coordinates;
    }

    protected Bitmap getSignatureAsBitmap(String signature) {        
        WICIBitmapUtility bitmapUtility = new WICIBitmapUtility();
        return bitmapUtility.convertPngToBitmap(signature);
    }   

    // Internal class
    protected class SignatureCoordinates {
        private int _x;
        private int _y;

        public SignatureCoordinates() {
            _x = 0;
            _y = 0;
        }

        public int getX() {
            return _x;
        }

        public void setX(int x) {
            _x = x;
        }

        public int getY() {
            return _y;
        }

        public void setY(int y) {
            _y = y;
        }
    }
}
