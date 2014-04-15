package com.ctfs.wicimobile.util;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.util.Base64;

public class WICIBitmapUtility {

    public Bitmap convertPngToBitmap (String pngSource){
        if (pngSource == null || pngSource.isEmpty()) {
          throw new NullPointerException("pngSource could not be null or empty");  
        }         
        
        // Remove signature service data
        String imageContent = pngSource.replace("data:image/png;base64,", "");

        // Apply Base64 decoding
        byte[] imageAsBytes = Base64.decode(imageContent, Base64.DEFAULT);

        // Convert png to bitmap
        Bitmap image = BitmapFactory.decodeByteArray(imageAsBytes, 0, imageAsBytes.length);

        // Set image background to white
        Bitmap bitmapWithBackground = Bitmap.createBitmap(image.getWidth(), image.getHeight(), image.getConfig());
        Canvas canvas = new Canvas(bitmapWithBackground);
        canvas.drawColor(Color.WHITE);
        canvas.drawBitmap(image, 0, 0, null);

        return bitmapWithBackground;
    }
}
