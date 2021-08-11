package com.ctfs.wicimobile.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONException;
import org.json.JSONObject;

import com.ctfs.wicimobile.models.WICICardmemberModel;
import com.zebra.sdk.comm.ConnectionException;
import com.zebra.sdk.device.ZebraIllegalArgumentException;
import com.zebra.sdk.graphics.internal.ZebraImageAndroid;
import com.zebra.sdk.printer.FieldDescriptionData;
import com.zebra.sdk.printer.ZebraPrinter;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.util.Base64;
import android.util.Log;

public class WICIStoreRecallPrintHelper {
	
	private static final String LOG_TAG = "WICIStoreRecallPrintHelper";

	public final static String StoreRecallFilePath = "srtemplates/";
	private String _storageDrive = "E:";
	private JSONObject printTemplateConfig = null;
	String _versionControlLabelName = "Form_Ver";
	static String preferedLang;
	    
	Boolean performStoreRecallPrint(String fileName, Context context, ZebraPrinter  printer, 
	    		WICIReplacementHelper replacementHelper, WICICardmemberModel cardmemberModel) {
			String SMethod = "performStoreRecallPrint () :: ";
	    	String correspondenceLanguage = cardmemberModel.getCorrespondenceLanguage();
	    	preferedLang = correspondenceLanguage;
	    	
	    	Log.i(LOG_TAG, SMethod + cardmemberModel.getPerformStoreRecallPrint());
	    	
	    	try {
	            if (preferedLang == null || preferedLang.equals("")) {
	            	preferedLang = "E";
	            }
	            fileName = fileName.replace("{lang}", preferedLang);
	        	Log.i(LOG_TAG, SMethod + " -> fileName : " + fileName);
	    		
		    	//0. Determine the StoreRecall file name
		    	String storeRecallFileName = getStoreRecallFileName(context, fileName);
		    	Log.i(LOG_TAG, SMethod + " -> storeRecallFileName : " + storeRecallFileName);
		    	if(storeRecallFileName.equalsIgnoreCase("NOT_PRINT")) {
		    		return false;
		    	}
		    	int currentVersion = getCurrentVersion(context, fileName);
		    	Log.i(LOG_TAG, SMethod + " -> currentVersion : " + currentVersion);
		    	
		    	//1. Check the version label exists on printer
		    	Boolean latestTemplateIsStored = checkLatestTestFormatExists(printer, storeRecallFileName, currentVersion);
		    	
		    	//2. If it does not exist, send the file to store and create version label
		    	if(!latestTemplateIsStored) {
		    		storeFileOnPrinter(context, printer, storeRecallFileName, currentVersion);
		    	}
		    	
		    	//3. Now send the print command
		    		//3.1 Retrieve variables
		    		//3.2 Populate values from card model (handle signature)
		    		//3.3 Send the print command
		    	List<FieldDescriptionData> fieldDescriptionDataList = retrieveVariablesFromFile(printer, storeRecallFileName, context);
		    	Map<Integer, String> vars  = getVariablestoPrint(context, fieldDescriptionDataList, printer, replacementHelper, cardmemberModel);
		    	printer.printStoredFormat(_storageDrive + storeRecallFileName + ".zpl", vars);
		    	
	    	} catch (Exception e) {
	    		Log.i(LOG_TAG, "performStoreRecallPrint -> In CatchBlock: " + e.getStackTrace());
	    		Log.i(LOG_TAG, "performStoreRecallPrint -> In CatchBlock: " + e.getMessage());
	    		Log.i(LOG_TAG, "performStoreRecallPrint -> In CatchBlock: " + e.getClass());
	    		return false;
	    	}
	    	return true;
	    }
	    
	    private String getStoreRecallFileName(Context context, String oldStyleTemplateName) throws IOException, JSONException {
	    	return getPrintTemplateObject(context).getJSONObject(oldStyleTemplateName).getString("NewTemplateName");
	    }
	    
	    private int getCurrentVersion(Context context, String oldStyleTemplateName) throws IOException, JSONException {
	    	return getPrintTemplateObject(context).getJSONObject(oldStyleTemplateName).getInt("Version");
	    }
	    
	    private JSONObject getPrintTemplateObject(Context context) throws IOException, JSONException {
	    	String SMethod = "getPrintTemplateObject() ";
	    	Log.i(LOG_TAG, SMethod);
	    	if(printTemplateConfig == null) {    		    		
				InputStream inputStream = context.getAssets().open("PrintTemplateDetails.json");
				BufferedReader streamReader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8")); 
				StringBuilder responseStrBuilder = new StringBuilder();
				
				String inputStr;
				while ((inputStr = streamReader.readLine()) != null)
				  responseStrBuilder.append(inputStr);
				 
				printTemplateConfig = new JSONObject(responseStrBuilder.toString());
	    	}
			return printTemplateConfig;
	    }
	    
	    private boolean checkLatestTestFormatExists(ZebraPrinter printer, String parentPRNName, int currentPRNVersion) 
	    		throws ConnectionException, UnsupportedEncodingException {
	    	String SMethod = "checkLatestTestFormatExists() :: ";
	    	Log.i(LOG_TAG, SMethod + " -> parentPRNName : " + parentPRNName + " -> currentPRNVersion " + currentPRNVersion);
	    	
	        List<FieldDescriptionData> retrievedVariables = retrieveVariablesFromStoredFormat(printer, _storageDrive + "V" + parentPRNName + ".zpl");

	        for (FieldDescriptionData variable : retrievedVariables){
	            int storedVariableVersion = Integer.parseInt(variable.fieldName);
	            Log.i(LOG_TAG, SMethod + " -> currentPRNVersion : " + currentPRNVersion + " -> storedVariableVersion " + storedVariableVersion);
	            if(storedVariableVersion == currentPRNVersion){
	                return true;
	            }
				/*
				 * else if (currentPRNVersion > storedVariableVersion + 10){
				 * deleteStoredFormats(printer.getConnection()); return false; }
				 */
	        }

	        return false;
	    }
	    
	    private List<FieldDescriptionData> retrieveVariablesFromStoredFormat(ZebraPrinter printer, String formatName) throws ConnectionException, UnsupportedEncodingException {
	    	String SMethod = "retrieveVariablesFromStoredFormat() :: ";
	    	Log.i(LOG_TAG, SMethod + " -> formatName : " + formatName);
	    	
	    	byte[] formatContents = printer.retrieveFormatFromPrinter(formatName);

	        FieldDescriptionData[] variables = printer.getVariableFields(new String(formatContents, "utf8"));

	        List<FieldDescriptionData> variableList = new ArrayList<FieldDescriptionData>();
	        for (int i = 0; i < variables.length; i++) {
	            variableList.add(variables[i]);
	        }
	        return variableList;
	    }
	    
	    private void sendVersionControlLabel(Context context, String parentPRNName, int prnVersion, ZebraPrinter printer)
	    		throws IOException, ConnectionException {
	    	String SMethod = "sendVersionControlLabel() :: ";
	    	Log.i(LOG_TAG, SMethod);
	    	
	    	String tempVersionCopyName = "TEMP_VERCOPY.prn";
	        OutputStreamWriter writer = new OutputStreamWriter(context.openFileOutput(tempVersionCopyName, Context.MODE_PRIVATE));

	        InputStream inputStream = context.getAssets().open(StoreRecallFilePath + _versionControlLabelName + ".prn");

	        if ( inputStream != null ) {
	            InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
	            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
	            String receiveString = "";
	            StringBuilder stringBuilder = new StringBuilder();

	            while ( (receiveString = bufferedReader.readLine()) != null ) {
	                stringBuilder.append("\n").append(receiveString
	                                                    .replace("#[Version]", String.valueOf(prnVersion))
	                                                    .replace("#[FileName]", "V" + parentPRNName)
	                                                );
	            }

	            inputStream.close();
	            writer.write(stringBuilder.toString());
	        } else  {
	            throw new IOException("inputStream is null");
	        }

	        writer.flush();
	        writer.close();
	        
	        File filepath = context.getFileStreamPath(tempVersionCopyName);
	        printer.sendFileContents(filepath.getAbsolutePath());
	    }
	    
		/*
		 * private void deleteStoredFormats(Connection connection) throws
		 * ConnectionException { String SMethod = "deleteStoredFormats() :: ";
		 * Log.i(LOG_TAG, SMethod);
		 * 
		 * try { connection.open(); // Delete File ZebraPrinterLinkOs linkOsPrinter =
		 * ZebraPrinterFactoryHelper.getLinkOsPrinter(connection, PrinterLanguage.ZPL);
		 * if (linkOsPrinter != null) { linkOsPrinter.deleteFile(_storageDrive + "*.*");
		 * } } finally { connection.close(); } }
		 */
	    
	    private List<FieldDescriptionData> retrieveVariablesFromFile(ZebraPrinter printer, String prnName, Context context) 
				throws IOException {
	    	String SMethod = "retrieveVariablesFromFile() :: ";
	    	Log.i(LOG_TAG, SMethod);
	    	
	    	InputStream inputStream = context.getAssets().open(StoreRecallFilePath + prnName + ".prn");
	    	
	    	if ( inputStream != null ) {
	            InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
	            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
	            String receiveString = "";
	            StringBuilder stringBuilder = new StringBuilder();

	            while ( (receiveString = bufferedReader.readLine()) != null ) {
	                stringBuilder.append("\n").append(receiveString);
	            }
	            
	            receiveString = stringBuilder.toString();
	            inputStream.close();
	            bufferedReader.close();
	            
	            FieldDescriptionData[] variables = printer.getVariableFields(receiveString);

	            List<FieldDescriptionData> variableList = new ArrayList<FieldDescriptionData>();
	            for (int i = 0; i < variables.length; i++) {
	                variableList.add(variables[i]);
	            }
	            return variableList;
	    	}

	    	return null;
	    }

	    private void storeFileOnPrinter(Context context, ZebraPrinter printer, String prnName, int prnVersion) 
	    		throws ConnectionException, IOException/*, ZebraPrinterLanguageUnknownException*/{
	    	String SMethod = "storeFileOnPrinter() :: ";
	    	Log.i(LOG_TAG, SMethod);
	    	
	        sendFileWithSignatureCommand(context, printer, prnName);
	        sendVersionControlLabel(context, prnName, prnVersion, printer);
	    }
	    
	    private void sendFileWithSignatureCommand(Context context, ZebraPrinter printer, String fileName) 
	    		throws IOException, ConnectionException {
	    	String SMethod = "sendFileWithSignatureCommand() :: ";
	    	Log.i(LOG_TAG, SMethod);
	    	
	        createPRNWithSignature(context, fileName ,"TEMP_COPY.PRN");
	        File filepath = context.getFileStreamPath("TEMP_COPY.PRN");
	        printer.sendFileContents(filepath.getAbsolutePath());
	    }

	    private void createPRNWithSignature(Context context, String fromFile, String toFile) throws IOException {
	    	String SMethod = "createPRNWithSignature() :: ";
	    	Log.i(LOG_TAG, SMethod);
	    	
	        boolean foundSignatureCommand = false;
	        OutputStreamWriter writer = new OutputStreamWriter(context.openFileOutput(toFile, Context.MODE_PRIVATE));

	        InputStream inputStream = context.getAssets().open(StoreRecallFilePath + fromFile + ".prn");

	        if ( inputStream != null ) {
	            InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
	            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
	            String receiveString = "";
	            StringBuilder stringBuilder = new StringBuilder();

	            while ( (receiveString = bufferedReader.readLine()) != null ) {

	                if(receiveString.contains("SIGNATURE.GRF")){
	                    foundSignatureCommand = true;
	                }
	                else if(receiveString.contains("Signature") && !foundSignatureCommand){
	                    //Get the Y-Coordinate
	                    // ^FT154,1376^A0N,28,28^FH\^CI28^FN8"Signature"^FS^CI27
	                    int commaPosition = receiveString.indexOf(",");
	                    int carrotPositionPostComma = receiveString.indexOf("^", commaPosition);
	                    String ycoordinateforsignature=receiveString.substring(commaPosition+1,carrotPositionPostComma);
	                    stringBuilder.append("\n").append("^FO11," + ycoordinateforsignature + "^XGE:SIGNATURE.GRF,1,1^FS");
	                    foundSignatureCommand = true;
	                }

	                stringBuilder.append("\n").append(receiveString);
	            }

	            inputStream.close();
	            writer.write(stringBuilder.toString());
	        } else  {
	            throw new IOException("inputStream is null");
	        }

	        writer.flush();
	        writer.close();
	    }

	    private Map<Integer, String> getVariablestoPrint(Context context, List<FieldDescriptionData> fieldDescriptionDataList, 
	    					ZebraPrinter printer, WICIReplacementHelper replacementHelper, WICICardmemberModel cardmemberModel) 
	    							throws ConnectionException, ZebraIllegalArgumentException {
	    	String SMethod = "getVariablestoPrint() :: ";
	    	Log.i(LOG_TAG, SMethod);
	    	
	    	Map<Integer, String> preparedVariables = new HashMap<Integer, String>();
	    	
	    	for (FieldDescriptionData fieldDescriptionData : fieldDescriptionDataList){

	               if(fieldDescriptionData.fieldName.contains("Signature")) {
	                    sendSignatureImageToPrinter(printer, cardmemberModel);
	                    preparedVariables.put(fieldDescriptionData.fieldNumber, "");
	               } else {
	                    preparedVariables.put(fieldDescriptionData.fieldNumber, replacementHelper.applyReplacement("#[" + fieldDescriptionData.fieldName + "]"));
	               }
	        }
	        return preparedVariables;
	    }
	    
	    private void sendSignatureImageToPrinter(ZebraPrinter printer, WICICardmemberModel cardmemberModel) 
	    		throws ConnectionException, ZebraIllegalArgumentException {
	    	String SMethod = "sendSignatureImageToPrinter() :: ";
	    	Log.i(LOG_TAG, SMethod);
	    	
	        String imageString = cardmemberModel.getSignture();

	        if (imageString == null || imageString.isEmpty()) {
	            throw new NullPointerException("pngSource could not be null or empty");
	        }

	        // Remove signature service data
	        String imageContent = imageString.replace("data:image/png;base64,", "");

	        // Apply Base64 decoding
	        byte[] imageAsBytes = Base64.decode(imageContent, Base64.DEFAULT);

	        // Convert png to bitmap
	        Bitmap image = BitmapFactory.decodeByteArray(imageAsBytes, 0, imageAsBytes.length);

	        // Set image background to white
	        Bitmap bitmapWithBackground = Bitmap.createBitmap(image.getWidth(), image.getHeight(), image.getConfig());
	        Canvas canvas = new Canvas(bitmapWithBackground);
	        canvas.drawColor(Color.WHITE);
	        canvas.drawBitmap(image, 0, 0, null);

	        printer.storeImage(_storageDrive + "SIGNATURE.GRF", new ZebraImageAndroid(bitmapWithBackground), 550, 200);
	     
	    }
	
}
