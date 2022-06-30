package com.ctfs.wicimobile.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import com.ctfs.wicimobile.enums.ServerResponseStatus;
import com.ctfs.wicimobile.models.WICICardmemberModel;
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
    public final static String StoreRecallFilePath = "srtemplates/";
    public final static String PrintOutMockupFileExtension = ".prn";    
    public final static String PrintOutMockupPendDecSuffix = "_PENDING_DECLINE";
    public final static String PrintOutMockupCouponSuffix = "_coupon";
    public final static String PrintOutMockupTokensuffix = "_TOKEN";
    public final static String PrintOutMockupMarksSuffix = "MARKS";
    public final static String PrintOutMockupSportsSuffix = "SPORTS";
    public final static String PrintOutMockupCardTypeForOMXandOMZsuffix = "OMX_OMZ";
    // US5240 -  Printout updates
    public final static String PrintOutMockupTopsuffix = "_top";
    public final static String PrintOutMockupBottomsuffix = "_bottom";
    String templateName, templateFileName;
    // DE1724 printout language
    static String preferedLang;
    WICIStoreRecallPrintHelper storeRecallPrint = new WICIStoreRecallPrintHelper();
    WICIStoreRecallCouponPrintHelper storeRecallCouponPrint = new WICIStoreRecallCouponPrintHelper();
    
    @Trace
    @SuppressWarnings("null")
	public void processMockupFile(
            ZebraPrinter printer,
            Context context, 
            WICIReplacementHelper replacementHelper, boolean isBottomFile, 
            WICICardmemberModel cardmemberModel) throws ConnectionException, IOException {
        
    	String cardType = cardmemberModel.getCardType();
        ServerResponseStatus serverResponseStatus = cardmemberModel.getResponseStatus();
        String cryptedAccountNumber = cardmemberModel.getAccountNumber();
        String maskedPAN = cardmemberModel.getMaskedPAN();
        String storeNumber = cardmemberModel.getStoreNumber();
        String correspondenceLanguage = cardmemberModel.getCorrespondenceLanguage();  
        String retailNetwork = cardmemberModel.getRetailNetwork();
        Boolean performStoreRecallPrint = cardmemberModel.getPerformStoreRecallPrint();
        Boolean isEmailEntered = cardmemberModel.getIsEmailEntered();
        
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
	        
	        // Token print logic goes here
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
	        	
	        	if("NS".equalsIgnoreCase(retailNetwork) && !isBottomFile && "4111111111111111".equals(accountNumber) ) {
    				// No Token print for National Sports
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
		        } else if(isEmailEntered) {
		        	templateFileName = templateFileName;
		        	Log.i(LOG_TAG, "templateFileName : " + templateFileName);
		        } else {
		        	templateFileName = templateFileName + PrintOutMockupTopsuffix;
		        	Log.i(LOG_TAG, "templateFileName : " + templateFileName);
		        }
	        	
	        }
	             
	        Log.i(getClass().getSimpleName(), " performStoreRecallPrint :: " + performStoreRecallPrint);
            Boolean storeRecallPrintDone = false;
        	if(performStoreRecallPrint) {
        		storeRecallPrintDone = storeRecallPrint.performStoreRecallPrint(templateFileName, context, printer, replacementHelper, cardmemberModel); 
        	}
        	
        	Log.i(LOG_TAG, "storeRecallPrintDone : " + storeRecallPrintDone);
        	if(!storeRecallPrintDone) {
        		sendFileToPrint(templateFileName, context, connection, replacementHelper);
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
            WICIReplacementHelper replacementHelper, WICICardmemberModel cardmemberModel) throws ConnectionException, IOException {
        
        String correspondenceLanguage = cardmemberModel.getCorrespondenceLanguage();
        Boolean performStoreRecallPrint = cardmemberModel.getPerformStoreRecallPrint();
        String retailNetwork = cardmemberModel.getRetailNetwork();
        
        // Get printer connection
        Connection  connection = printer.getConnection();
        preferedLang = correspondenceLanguage;
                
        try {    
        	if(retailNetwork.equalsIgnoreCase("MARKS")){
        		templateName = "PrintOutMockup_" + PrintOutMockupMarksSuffix +  "_{lang}" + PrintOutMockupCouponSuffix;
        	} else if(retailNetwork.equalsIgnoreCase("SPORTS")) {
        		templateName = "PrintOutMockup_" + PrintOutMockupSportsSuffix + "_{lang}" + PrintOutMockupCouponSuffix;
        	}
	        	
	        Log.i(getClass().getSimpleName(), "----- templateName -------" + templateName);
	        Log.i(getClass().getSimpleName(), " performStoreRecallPrint :: " + performStoreRecallPrint);
	        
	       	Boolean storeRecallPrintDone = false;
	       	if(performStoreRecallPrint) {
	       		storeRecallPrintDone = storeRecallPrint.performStoreRecallPrint(templateName, context, printer, replacementHelper, cardmemberModel); 
	       	}
	       	
	       	Log.i(LOG_TAG, "storeRecallPrintDone : " + storeRecallPrintDone);
	       	if(!storeRecallPrintDone) {
	       		sendFileToPrint(templateName, context, connection, replacementHelper);
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
    
    private String DecryptAccountNumber (Context context, String cryptedAccountNumber) {
        return WICICryptoHelper.getInstance().decryptRSA(context, cryptedAccountNumber);
    }
    
    private void sendFileToPrint(String fileName, Context context, Connection  connection, 
    		WICIReplacementHelper replacementHelper) throws IOException, ConnectionException {
    	
    	Log.i(getClass().getSimpleName(), "----- templateName -------" + fileName);
    	InputStream inputStream = readTemplate(context, fileName);
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
            	if(replacementHelper == null) {
            		connection.write(line.getBytes());
            	} else {
            		String replacedLine = replacementHelper.applyReplacement(line);
                    if ("".equals(replacedLine)) continue;
                    
                    connection.write(replacedLine.getBytes());
            	}
            }
            // Close input file stream
            inputStream.close();
        }
    }

}
