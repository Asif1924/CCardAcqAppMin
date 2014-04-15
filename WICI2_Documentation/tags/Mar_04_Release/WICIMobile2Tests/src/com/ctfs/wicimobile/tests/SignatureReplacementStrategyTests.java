package com.ctfs.wicimobile.tests;

import static org.junit.Assert.*;
import org.junit.Test;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import com.ctfs.wicimobile.util.WICIBitmapUtility;

public class SignatureReplacementStrategyTests {
    protected static final String Base64SignatureHeader = "data:image/png;base64,";
    protected static final String Base64SignatureContent = "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";

    /*@Test
    public void testGetSignatureAsBitmapWithHeader() {
        try {
            WICIBitmapUtility bitmapUtility = new WICIBitmapUtility();

            Bitmap bitmap = bitmapUtility.convertPngToBitmap(Base64SignatureContent + Base64SignatureContent);
            
            assertNotNull("bitmap is NULL!", bitmap);
            assertTrue("bitmap height equals 0", bitmap.getHeight() > 0);
            assertTrue("bitmap width equals 0", bitmap.getWidth() > 0);
        } catch (Exception ex) {
            fail(ex.getMessage());
        }
    }*/
    
   /* @Test
    public void testGetSignatureAsBitmap() {
        try {
            WICIBitmapUtility bitmapUtility = new WICIBitmapUtility();

            Bitmap bitmap = bitmapUtility.convertPngToBitmap(Base64SignatureContent);

            assertNotNull("bitmap is NULL!", bitmap);
            assertTrue("bitmap height equals 0", bitmap.getHeight() > 0);
            assertTrue("bitmap width equals 0", bitmap.getWidth() > 0);
        } catch (Exception ex) {
            fail(ex.getMessage());
        }
    }*/
    
   /* @Test
    public void testGetSignatureAsBitmapNullInputFailure() {
        try {
            WICIBitmapUtility bitmapUtility = new WICIBitmapUtility();

            Bitmap bitmap = bitmapUtility.convertPngToBitmap(null);

            assertNull("bitmap is not NULL!", bitmap);
            assertTrue("bitmap height is not equal 0", bitmap.getHeight() == 0);
            assertTrue("bitmap width is not equal 0", bitmap.getWidth() == 0);
        } catch (NullPointerException ex) {
            // Correct flow, skip this exception
        } catch (Exception ex) {
            fail(ex.getMessage());
        }
    }*/
    
   /* @Test
    public void testGetSignatureAsBitmapEmptyInputFailure() {
        try {
            WICIBitmapUtility bitmapUtility = new WICIBitmapUtility();

            Bitmap bitmap = bitmapUtility.convertPngToBitmap("");

            assertNull("bitmap is not NULL!", bitmap);
            assertTrue("bitmap height is not equal 0", bitmap.getHeight() == 0);
            assertTrue("bitmap width is not equal 0", bitmap.getWidth() == 0);
        } catch (NullPointerException ex) {
            // Correct flow, skip this exception
        } catch (Exception ex) {
            fail(ex.getMessage());
        }
    }*/
}
