package com.ctfs.wicimobile.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import android.util.Log;
import com.ctfs.wicimobile.enums.ServerResponseStatus;
import com.zebra.sdk.comm.Connection;
import com.zebra.sdk.comm.ConnectionException;
import com.zebra.sdk.printer.ZebraPrinter;
import android.content.Context;

public class WICIFileHelper {
    private static final String LOG_TAG = "WICIFileHelper";

    public final static String PrintOutMockupFilePath = "templates/";
    public final static String PrintOutMockupFileExtension = ".prn";    
    public final static String PrintOutMockupPendDecSuffix = "_PENDING_DECLINE";
    public final static String PrintOutMockupProvinceSuffix = "_555";

    public void processMockupFile(
            ZebraPrinter printer,
            Context context, 
            WICIReplacementHelper replacementHelper, 
            String cardType,
            ServerResponseStatus serverResponseStatus,
            String province) throws ConnectionException, IOException {
        
        // Get printer connection
        Connection  connection = printer.getConnection();
        
        try {
        	String templateName = "PrintOutMockup_" + cardType;
        	
            // Add suffix for bad server response
            if (serverResponseStatus != ServerResponseStatus.APPROVED){
                templateName += PrintOutMockupPendDecSuffix;
            } 
//            if (_cardType.equalsIgnoreCase("OMC") && province.equalsIgnoreCase("QC")) {
//                // If province QUEBEC use OMC mockup without a coupon            	
//            	cardType += PrintOutMockupQCProvinceSuffix;
//            }
            
            // Set suffix for correspondence language
            templateName += "_{lang}";
            
            if (cardType.equalsIgnoreCase("OMC") &&
            	((province.equalsIgnoreCase("QC") ||
            	  province.equalsIgnoreCase("PE") ||
            	  province.equalsIgnoreCase("NL") ||
            	  province.equalsIgnoreCase("NB") ||
            	  province.equalsIgnoreCase("NS")))) {
//            	cardType += PrintOutMockupQCProvinceSuffix;
            	templateName += PrintOutMockupProvinceSuffix;
            }
            
            InputStream inputStream = readTemplate(context, templateName);
            
            if ( inputStream != null ) {
                // Get input file stream
                InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
                BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
                String line;                                
                
                // Open connection                
                if (!connection.isConnected()) {
                    connection.open();
                }
                
                // Read file per line
                while ((line = bufferedReader.readLine()) != null ) {
                    String replacedLine = replacementHelper.applyReplacement(line);
                    if ("".equals(replacedLine)) continue;
                    
                    // Send result to the printer
                    connection.write(replacedLine.getBytes());
                }

                // Close input file stream
                inputStream.close();
            }
        }
        finally{
            if (connection.isConnected()) {
                connection.close();
            }
        }
    }

    public static InputStream readTemplate(Context context, String templateName) throws IOException {
        String lang = WICIAppSettingsStorageManager.getInstance().getCurrentAppSettings().getAppLanguage();
        Log.d(LOG_TAG, "readTemplate \"" + templateName + "\", lang: " + lang);
        if (lang == null || lang.equals("")) {
            lang = "E";
        }
        templateName = templateName.replace("{lang}", lang);
        String fileName = PrintOutMockupFilePath + templateName + PrintOutMockupFileExtension;
        return context.getAssets().open(fileName);
    }
    
    public void printTestFile(ZebraPrinter printer, Context context) throws ConnectionException, IOException {
        // Get printer connection
        Connection  connection = printer.getConnection();
        
        try {
            String templateName = "TestPrintTemplate";
            InputStream inputStream = readTemplate(context, templateName);
            
            if ( inputStream != null ) {
                // Get input file stream
                InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
                BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
                String line;                                
                
                // Open connection                
                if (!connection.isConnected()) {
                    connection.open();
                }
                
                // Read file per line
                while ((line = bufferedReader.readLine()) != null ) {
                    // Send result to the printer
                    connection.write(line.getBytes());
                }

                // Close input file stream
                inputStream.close();
            }
        }
        finally{
            if (connection.isConnected()) {
                connection.close();
            }
        }        
    }
}
