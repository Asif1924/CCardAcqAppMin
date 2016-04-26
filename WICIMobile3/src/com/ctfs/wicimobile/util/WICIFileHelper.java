package com.ctfs.wicimobile.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import android.content.Context;
import android.util.Log;

import com.ctfs.wicimobile.enums.ServerResponseStatus;
import com.ctfs.wicimobile.util.crypto.WICICryptoHelper;
import com.zebra.sdk.comm.Connection;
import com.zebra.sdk.comm.ConnectionException;
import com.zebra.sdk.printer.ZebraPrinter;

public class WICIFileHelper {
    private static final String LOG_TAG = "WICIFileHelper";

    public final static String PrintOutMockupFilePath = "templates/";
    public final static String PrintOutMockupFileExtension = ".prn";    
    public final static String PrintOutMockupPendDecSuffix = "_PENDING_DECLINE";
    public final static String PrintOutMockupProvinceSuffix = "_555";
    public final static String PrintOutMockupCouponSuffix = "_coupon";
    public final static String PrintOutMockupMarkssuffix = "_MARKS";
    public final static String PrintOutMockupTokensuffix = "_TOKEN";
    String templateName, templateFileName;
    
    @SuppressWarnings("null")
	public void processMockupFile(
            ZebraPrinter printer,
            Context context, 
            WICIReplacementHelper replacementHelper, 
            String cardType,
            ServerResponseStatus serverResponseStatus,
            String cryptedAccountNumber,
            String maskedPAN,
            String province,
            String storeNumber) throws ConnectionException, IOException {
        
        // Get printer connection
        Connection  connection = printer.getConnection();
        
        try {
        	// Print Approved, Declined/Pending print goes here.
        	// Approved, Declined/Pending print is same for CT and Marks.
        	// Approved, Declined/Pending print is same for OMC and OMP. 
        	// But in OMC coupon is decoupled. OMP coupon is in Approved, Declined/Pending print.
	        templateFileName = "PrintOutMockup_" + cardType;
	            	
	        // Add suffix for bad server response
	        if (serverResponseStatus != ServerResponseStatus.APPROVED){
	            templateFileName += PrintOutMockupPendDecSuffix;
	        } 
	                
	        // Set suffix for correspondence language
	        templateFileName += "_{lang}";
	        
	        // Coupon Decoupled, so single print file for Approved, Declined/Pending print. No 555 print.	        
	        /*if (cardType.equalsIgnoreCase("OMC") &&
	           ((province.equalsIgnoreCase("QC") ||
	             province.equalsIgnoreCase("PE") ||
	             province.equalsIgnoreCase("NL") ||
	             province.equalsIgnoreCase("NB") ||
	             province.equalsIgnoreCase("NS")))) {
	        	// cardType += PrintOutMockupQCProvinceSuffix;
	             templateFileName += PrintOutMockupProvinceSuffix;
	        }*/	        
	        
	        if(cryptedAccountNumber != null && !cryptedAccountNumber.isEmpty()) {
	        	String accountNumber = DecryptAccountNumber (context,cryptedAccountNumber);
		        
		        String _storeNumber =  "Test".equalsIgnoreCase(storeNumber)? "0" : storeNumber ;
	        	double storeNo = Double.parseDouble(_storeNumber);
	        	// US3692
	        	// Print token for CTR store only, not Marks/Gas store
	        	if(storeNo > 0){
			        if(storeNo >= 6000 && storeNo <= 6999 ) {
			        	templateFileName = templateFileName;
			        } else {
			        	int offset = 0;      	        	        	       	    	        
				        if( (Integer.parseInt(accountNumber.substring(offset, offset + 1).toString().trim()) == 5 && accountNumber.length() == 16) && (maskedPAN == null || maskedPAN.isEmpty())) {			        	
				        	templateFileName = templateFileName;
				        	Log.i(LOG_TAG, "templateFileName : " + templateFileName);
				        } else if( (Integer.parseInt(accountNumber.substring(offset, offset + 2).toString().trim()) == 73 && accountNumber.length() == 15) && (maskedPAN != null || !maskedPAN.isEmpty())) {			        	
				        	templateFileName = templateFileName + PrintOutMockupTokensuffix;
				        	Log.i(LOG_TAG, "templateFileName : " + templateFileName);
				        }
			        }
	        	}
	        }
	              	        	       
	        	       	                
        	InputStream inputStream = readTemplate(context, templateFileName);
            
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
    
    // US3462
    public void processMockupCoupon(
            ZebraPrinter printer,
            Context context, 
            WICIReplacementHelper replacementHelper, 
            String cardType,
            String province,
            String firstName,
            String middleInitial,
            String lastName,
            String storeNumber) throws ConnectionException, IOException {
        
        // Get printer connection
        Connection  connection = printer.getConnection();
                
        try {    
        	
        	String _storeNumber =  "Test".equalsIgnoreCase(storeNumber)? "0" : storeNumber ;
        	double storeNo = Double.parseDouble(_storeNumber);
        	Log.i(getClass().getSimpleName(), "----- storeNo -------" + storeNo);
        	if(storeNo > 0){
        		// US3452 
        		// Check Store Number. If Marks store, print Marks coupon, else print CT coupon
	        	if(storeNo >= 6000 && storeNo <= 6999 ){
	
	        		templateName = "PrintOutMockup_" + cardType + PrintOutMockupMarkssuffix;
	                         
	                // Set suffix for correspondence language
	                templateName += "_{lang}";
	                
	                if (cardType.equalsIgnoreCase("OMC") &&
	                	((province.equalsIgnoreCase("QC") ||
	                	  province.equalsIgnoreCase("PE") ||
	                	  province.equalsIgnoreCase("NL") ||
	                	  province.equalsIgnoreCase("NB") ||
	                	  province.equalsIgnoreCase("NS")))) {
	//                	cardType += PrintOutMockupQCProvinceSuffix;
	                	templateName += PrintOutMockupProvinceSuffix + PrintOutMockupCouponSuffix;
	                }else {
	                	templateName += PrintOutMockupCouponSuffix;
	                }
	        	}else {
	        		templateName = "PrintOutMockup_" + cardType;
	                
	                // Set suffix for correspondence language
	                templateName += "_{lang}";
	                
	                if (cardType.equalsIgnoreCase("OMC") &&
	                	((province.equalsIgnoreCase("QC") ||
	                	  province.equalsIgnoreCase("PE") ||
	                	  province.equalsIgnoreCase("NL") ||
	                	  province.equalsIgnoreCase("NB") ||
	                	  province.equalsIgnoreCase("NS")))) {
	//                	cardType += PrintOutMockupQCProvinceSuffix;
	                	templateName += PrintOutMockupProvinceSuffix + PrintOutMockupCouponSuffix;
	                }else {
	                	templateName += PrintOutMockupCouponSuffix;
	                }                       		
	        	}
        	}        
	        	
	       Log.i(getClass().getSimpleName(), "----- templateName -------" + templateName);
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
    
    private String DecryptAccountNumber (Context context, String cryptedAccountNumber) {
        return WICICryptoHelper.getInstance().decryptRSA(context, cryptedAccountNumber);
    }
}
