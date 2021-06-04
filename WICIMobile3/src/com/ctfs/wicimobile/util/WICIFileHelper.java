package com.ctfs.wicimobile.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import com.ctfs.wicimobile.enums.ServerResponseStatus;
import com.ctfs.wicimobile.util.crypto.WICICryptoHelper;
import com.newrelic.agent.android.instrumentation.Trace;
import com.zebra.sdk.comm.Connection;
import com.zebra.sdk.comm.ConnectionException;
import com.zebra.sdk.printer.ZebraPrinter;

import android.content.Context;
import android.util.Log;

public class WICIFileHelper {
    private static final String LOG_TAG = "WICIFileHelper";

    public final static String PrintOutMockupFilePath = "templates/";
    public final static String PrintOutMockupFileExtension = ".prn";    
    public final static String PrintOutMockupPendDecSuffix = "_PENDING_DECLINE";
    public final static String PrintOutMockupCouponSuffix = "_coupon";
    public final static String PrintOutMockupTokensuffix = "_TOKEN";
    public final static String PrintOutMockupCardTypeForOMXandOMZsuffix = "OMX_OMZ";
    // US5240 -  Printout updates
    public final static String PrintOutMockupTopsuffix = "_top";
    public final static String PrintOutMockupBottomsuffix = "_bottom";
    String templateName, templateFileName;
    // DE1724 printout language
    static String preferedLang;
    
    @Trace
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
            String storeNumber,
            String employeeId,
            String correspondenceLanguage,
            boolean isBottomFile,
            String apartmentNumber,
            String streetNumber,
            String streetName,
            String city,
            String adrProvince,
            String postalCode,
            String retailNetwork) throws ConnectionException, IOException {
        
        // Get printer connection
        Connection  connection = printer.getConnection();
        preferedLang = correspondenceLanguage;
        
        
        try {
        	// Print Approved, Declined/Pending print goes here.
        	// Approved, Declined/Pending print is same for CT and Marks.
        	// Approved, Declined/Pending print is same for OMC and OMP. 
        	// But in OMC coupon is decoupled. OMP coupon is in Approved, Declined/Pending print.
	        if (serverResponseStatus != ServerResponseStatus.APPROVED){
	        	if (cardType.equalsIgnoreCase("OMX") || cardType.equalsIgnoreCase("OMZ")) {
	        		templateFileName = "PrintOutMockup_" + PrintOutMockupCardTypeForOMXandOMZsuffix + PrintOutMockupPendDecSuffix;
        		} else {
        			templateFileName = "PrintOutMockup_" + cardType + PrintOutMockupPendDecSuffix;
        		}
	        	// templateFileName = "PrintOutMockup_" + PrintOutMockupCardTypeForOMXandOMZsuffix + PrintOutMockupPendDecSuffix;
	        } else {
	        	// US5240
	        	if(isBottomFile && (cardType.equalsIgnoreCase("OMX") || cardType.equalsIgnoreCase("OMZ"))) {
	        		templateFileName = "PrintOutMockup_" + PrintOutMockupCardTypeForOMXandOMZsuffix;
	        	} else {
	        		templateFileName = "PrintOutMockup_" + cardType;
	        	}
	        }
	                
	        // Set suffix for correspondence language
	        templateFileName += "_{lang}";
	        
	        // Tokenization print logic goes here
	        if(cryptedAccountNumber != null && !cryptedAccountNumber.isEmpty()) {
	        	
	        	String accountNumber = "";
	        	// UAT204
	        	if("4111111111111111".equals(cryptedAccountNumber))
	        		accountNumber = cryptedAccountNumber;
	        	else
	        		accountNumber = DecryptAccountNumber (context,cryptedAccountNumber);
	        	
		        String _storeNumber =  "Test".equalsIgnoreCase(storeNumber)? "0" : storeNumber ;
	        	boolean isGasBar = false;
	        	int offset = 0;
	        	
	        	// Husky Gas Store Specific Logic for printing Approved card
	        	if(_storeNumber.substring(0,1).equalsIgnoreCase("H")) {
        			isGasBar = true;
	        	} else if(Double.parseDouble(_storeNumber) > 0){
	        		double storeNo = Double.parseDouble(_storeNumber);
	        		// Party city Range : 0815 to 0879.
	        		// Gas store Range : 1000 to 2010
	        		if(storeNo >= 1000 && storeNo <= 2010 ) {
	        			isGasBar = true;
	        		} 
	        	}
	        	
	        	if(("PHL".equalsIgnoreCase(retailNetwork) || "NS".equalsIgnoreCase(retailNetwork)) && !isBottomFile && "4111111111111111".equals(accountNumber) ) {
    				// No Token print for ProHockey Life and National Sports
	        		//templateFileName = templateFileName + PrintOutMockupTokensuffix;
		        } else if(!isBottomFile && "4111111111111111".equals(accountNumber) ) {
	        		 templateFileName = templateFileName + PrintOutMockupTokensuffix;
		        } else if(!isBottomFile && (Integer.parseInt(accountNumber.substring(offset, offset + 2).toString().trim()) == 73 && accountNumber.length() == 15) && (maskedPAN != null || !maskedPAN.isEmpty())) {			        	
		        	templateFileName = templateFileName + PrintOutMockupTokensuffix;
		        	Log.i(LOG_TAG, "templateFileName : " + templateFileName);
		        }
	        	
	        	// US5240 -  Printout updates
	        	if(isBottomFile && isGasBar && cardType.equals("OMP")) {
		        	templateFileName = templateFileName + PrintOutMockupCouponSuffix + PrintOutMockupBottomsuffix;
		        	Log.i(LOG_TAG, "templateFileName : " + templateFileName);
		        } else if(isBottomFile) {
		        	templateFileName = templateFileName + PrintOutMockupBottomsuffix;
		        	Log.i(LOG_TAG, "templateFileName : " + templateFileName);
		        } else {
		        	templateFileName = templateFileName + PrintOutMockupTopsuffix;
		        	Log.i(LOG_TAG, "templateFileName : " + templateFileName);
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
    @Trace
    public void processMockupCoupon(
            ZebraPrinter printer,
            Context context, 
            WICIReplacementHelper replacementHelper, 
            String cardType,
            String province,
            String firstName,
            String middleInitial,
            String lastName,
            String storeNumber,
            String correspondenceLanguage) throws ConnectionException, IOException {
        
        // Get printer connection
        Connection  connection = printer.getConnection();
        preferedLang = correspondenceLanguage;
                
        try {    
        	
        	String _storeNumber =  "Test".equalsIgnoreCase(storeNumber)? "0" : storeNumber ;
        	double storeNo = Double.parseDouble(_storeNumber);
        	Log.i(getClass().getSimpleName(), "----- storeNo -------" + storeNo);
        	if(storeNo > 0){
        		
        		if (cardType.equalsIgnoreCase("OMX") || cardType.equalsIgnoreCase("OMZ")) {
        			templateName = "PrintOutMockup_" + PrintOutMockupCardTypeForOMXandOMZsuffix;
        		} else {
        			templateName = "PrintOutMockup_" + cardType;
        		}
        		templateName += "_{lang}" + PrintOutMockupCouponSuffix;
        		
        		// All below coupons are removed and added single coupon for all stores
        		// US3452 
        		// Check Store Number. If Marks store, print Marks coupon, else print CT coupon
	        	/*if(storeNo >= 6000 && storeNo <= 6999 ){
	        		if (cardType.equalsIgnoreCase("OMX") || cardType.equalsIgnoreCase("OMZ")) {
	        			templateName = "PrintOutMockup_" + PrintOutMockupCardTypeForOMXandOMZsuffix + PrintOutMockupMarkssuffix;
	        		} else {
	        			templateName = "PrintOutMockup_" + cardType + PrintOutMockupMarkssuffix;
	        		}
	        		templateName += "_{lang}" + PrintOutMockupCouponSuffix;
	        	}*/
	        	// US4644
	        	// WICI - Print out an FGL coupon
	        	/*else if(storeNo >= 4000 && storeNo <= 5999){
	        		if (cardType.equalsIgnoreCase("OMX") || cardType.equalsIgnoreCase("OMZ")) {
	        			templateName = "PrintOutMockup_" + PrintOutMockupCardTypeForOMXandOMZsuffix + PrintOutMockupFGLsuffix;
	        		} else {
	        			templateName = "PrintOutMockup_" + cardType + PrintOutMockupFGLsuffix;
	        		}
	        		templateName += "_{lang}" + PrintOutMockupCouponSuffix;
	        	}*/
	        	// WICI - Print out an CTP(Gas store) coupon
	        	/*else if(storeNo >= 1000 && storeNo <= 2010){
	        		if (cardType.equalsIgnoreCase("OMX") || cardType.equalsIgnoreCase("OMZ")) {
	        			templateName = "PrintOutMockup_" + PrintOutMockupCardTypeForOMXandOMZsuffix;
	        		} else {
	        			templateName = "PrintOutMockup_" + cardType;
	        		}
	        		templateName += "_{lang}" + PrintOutMockupCouponSuffix;
	        	}*/
	        	// WICI - Print out an CTR(Retail store) coupon
	        	/*else {
	        		if (cardType.equalsIgnoreCase("OMX") || cardType.equalsIgnoreCase("OMZ")) {
	        			templateName = "PrintOutMockup_" + PrintOutMockupCardTypeForOMXandOMZsuffix;
	        		} else {
	        			templateName = "PrintOutMockup_" + cardType;
	        		}
	        		templateName += "_{lang}" + PrintOutMockupCTGonlyCouponSuffix;
	        	}*/
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
    	 Log.d(LOG_TAG, "PreferedLang " + preferedLang);
    	// DE1724 printout language
        if (preferedLang == null || preferedLang.equals("")) {
        	preferedLang = "E";
        }
        Log.d(LOG_TAG, "preferedLang " + preferedLang );
        templateName = templateName.replace("{lang}", preferedLang);
        Log.d(LOG_TAG, "templateName " + templateName);
        String fileName = PrintOutMockupFilePath + templateName + PrintOutMockupFileExtension;
        Log.d(LOG_TAG, "fileName " + fileName);
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
    
    public boolean isCardTypeOMCForProvince(String cardType , String province){
    	if (cardType.equalsIgnoreCase("OMC") &&
            	((province.equalsIgnoreCase("QC") ||
            	  province.equalsIgnoreCase("PE") ||
            	  province.equalsIgnoreCase("NL") ||
            	  province.equalsIgnoreCase("NB") ||
            	  province.equalsIgnoreCase("NS")))) {
    		return true;	
    	} else {
    		return false;
    	}
    }
    
    private String DecryptAccountNumber (Context context, String cryptedAccountNumber) {
        return WICICryptoHelper.getInstance().decryptRSA(context, cryptedAccountNumber);
    }
}
