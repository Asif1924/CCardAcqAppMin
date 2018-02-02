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
    public final static String PrintOutMockupFGLsuffix = "_FGL";
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
            String storeNumber,
            String employeeId) throws ConnectionException, IOException {
        
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
	        	
	        	String accountNumber = "";
	        	// UAT204
	        	if("4111111111111111".equals(cryptedAccountNumber))
	        		accountNumber = cryptedAccountNumber;
	        	else
	        		accountNumber = DecryptAccountNumber (context,cryptedAccountNumber);
	        	
		        String _storeNumber =  "Test".equalsIgnoreCase(storeNumber)? "0" : storeNumber ;
	        	double storeNo = Double.parseDouble(_storeNumber);
	        	boolean isMarksStore = false;
	        	boolean isGasBar = false;
	        	int offset = 0;
	        	// US3692
	        	// Print token for CTR store only, not Marks/Gas store
	        	if(storeNo > 0){
	        		// US4062
	        		// These conditions are all for printing Approved printouts
	        		// Gas Store Specific Logic
	        		// Gas stores are between 1000 to 1999 store numbers
	        		if(storeNo >= 1000 && storeNo <= 1999 ) {
	        			templateFileName = templateFileName;
	        			isGasBar = true;
	        			Log.i(LOG_TAG, " isGasBar :" + isGasBar + "templateFileName : " + templateFileName + " cardType : " + cardType
	        					+ " accountNumber : " + accountNumber);
	        			// US4341
				        if(cardType.equals("OMP") && "4111111111111111".equals(accountNumber) ) {
				        	templateFileName = templateFileName + PrintOutMockupCouponSuffix;
				        	Log.i(LOG_TAG, "templateFileName : " + templateFileName);
				        } else if(cardType.equals("OMP") && (Integer.parseInt(accountNumber.substring(offset, offset + 1).toString().trim()) == 5 && accountNumber.length() == 16) && (maskedPAN == null || maskedPAN.isEmpty())) {			        	
				        	templateFileName = templateFileName + PrintOutMockupCouponSuffix;
				        	Log.i(LOG_TAG, "templateFileName : " + templateFileName);
				        } else if(cardType.equals("OMP") && (Integer.parseInt(accountNumber.substring(offset, offset + 2).toString().trim()) == 73 && accountNumber.length() == 15) && (maskedPAN != null || !maskedPAN.isEmpty())) {			        	
				        	templateFileName = templateFileName + PrintOutMockupTokensuffix + PrintOutMockupCouponSuffix;
				        	Log.i(LOG_TAG, "templateFileName : " + templateFileName);
				        }
	        		} 
	        		// Marks Store Specific Logic
	        		// Marks stores are between 6000 to 6999 store numbers
	        		else if(storeNo >= 6000 && storeNo <= 6999 ) {
			        	templateFileName = templateFileName;
			        	isMarksStore = true;
			        } 
	        		// US4432
	        		// FGL Store Specific Logic
	        		// FGL stores are between 4000 to 5999 store numbers
	        		else if(storeNo >= 4000 && storeNo <= 5999) {
				        // E && !Marks && Demo than tokrn prn			        	
			        	if("4111111111111111".equals(accountNumber) ) {
			        		 templateFileName = templateFileName;
				        } else if( (Integer.parseInt(accountNumber.substring(offset, offset + 1).toString().trim()) == 5 && accountNumber.length() == 16) && (maskedPAN == null || maskedPAN.isEmpty())) {			        	
				        	templateFileName = templateFileName;
				        	Log.i(LOG_TAG, "templateFileName : " + templateFileName);
				        } else if( (Integer.parseInt(accountNumber.substring(offset, offset + 2).toString().trim()) == 73 && accountNumber.length() == 15) && (maskedPAN != null || !maskedPAN.isEmpty())) {			        	
				        	templateFileName = templateFileName + PrintOutMockupTokensuffix;
				        	Log.i(LOG_TAG, "templateFileName : " + templateFileName);
				        }
			        }
	        		// CT(Canadian Tire) Store Specific Logic
	        		// Now for CT store, we added in else condition.
	        		// But CT stores are between 1 to 999 store numbers
	        		else {
				        // E && !Marks && Demo than tokrn prn			        	
			        	if(!isGasBar && !isMarksStore && "4111111111111111".equals(accountNumber) ) {
			        		 templateFileName = templateFileName + PrintOutMockupTokensuffix;
				        } else if(isMarksStore && "4111111111111111".equals(cryptedAccountNumber) ) {
				        	templateFileName = templateFileName;
				        } else if( (Integer.parseInt(accountNumber.substring(offset, offset + 1).toString().trim()) == 5 && accountNumber.length() == 16) && (maskedPAN == null || maskedPAN.isEmpty())) {			        	
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
	                
	                // US4644
	                if(isCardTypeOMCForProvince(cardType,province)){
	                    // cardType += PrintOutMockupQCProvinceSuffix;
	                	templateName += PrintOutMockupProvinceSuffix + PrintOutMockupCouponSuffix;
	                }else{
	                	templateName += PrintOutMockupCouponSuffix;
	                }
	        	}
	        	// US4644
	        	// WICI - Print out an FGL coupon
	        	else if(storeNo >= 4000 && storeNo <= 5999){
	
	        		templateName = "PrintOutMockup_" + cardType + PrintOutMockupFGLsuffix;
	                         
	                // Set suffix for correspondence language
	                templateName += "_{lang}";
	                
	                if (cardType.equalsIgnoreCase("OMC")) {
	                	templateName += PrintOutMockupCouponSuffix;
	                }
	        	} else {
	        		templateName = "PrintOutMockup_" + cardType;
	                
	                // Set suffix for correspondence language
	                templateName += "_{lang}";
	                
	                // US4644
	                if(isCardTypeOMCForProvince(cardType,province)){
	                   // cardType += PrintOutMockupQCProvinceSuffix;
		               templateName += PrintOutMockupProvinceSuffix + PrintOutMockupCouponSuffix;	
	                }else{
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
