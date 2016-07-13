package com.ctfs.wicimobile.util;

import java.util.ArrayList;
import java.util.List;

import android.content.Context;
import android.util.Log;

import com.ctfs.wicimobile.models.WICICardmemberModel;
import com.ctfs.wicimobile.util.crypto.WICICryptoHelper;
import com.zebra.sdk.printer.ZebraPrinter;


public class WICIReplacementHelper {
    List<ReplacementStrategy> _replacementStrategies;
    
    public WICIReplacementHelper (WICICardmemberModel carmemberModel, Context context, ZebraPrinter printer) {
        if (carmemberModel == null){
            throw new IllegalArgumentException("carmemberModel could not be null");
        }        
        
        _replacementStrategies = new ArrayList<ReplacementStrategy>();
        
        _replacementStrategies.add(new WICICardReplacementStrategy(carmemberModel.getCardType()));
        _replacementStrategies.add(new WICICardTermsReplacementStrategy(carmemberModel.getCardType()));
        _replacementStrategies.add(new WICIAccountShopingReplacementStrategy(carmemberModel.getCardType()));
                
        String _storeNumber =  "Test".equalsIgnoreCase(carmemberModel.getStoreNumber())? "0" : carmemberModel.getStoreNumber() ;
    	double storeNo = Double.parseDouble(_storeNumber);
    	boolean isMarksStore = false;
    	// US4062
    	boolean isGasBar = false;
    	if(storeNo > 0){
    		if(storeNo >= 1000 && storeNo <= 1999 ) {
    			isGasBar = true;
	        } else if(storeNo >= 6000 && storeNo <= 6999 ) {
	        	isMarksStore = true;
	        }
    	}
        // US3692
        String cryptedAccountNumber = carmemberModel.getAccountNumber();
        String maskedPAN = carmemberModel.getMaskedPAN();
        String accountNumber = "";
        int offset = 0;
        if (cryptedAccountNumber != null && !cryptedAccountNumber.isEmpty()) {
        	// UAT204
        	if("4111111111111111".equals(cryptedAccountNumber))
        		accountNumber = cryptedAccountNumber;
        	else
        		accountNumber = DecryptAccountNumber (context,cryptedAccountNumber);
        	
	        if((Integer.parseInt(accountNumber.substring(offset, offset + 1).toString().trim()) == 5 && accountNumber.length() == 16 && (maskedPAN == null || maskedPAN.isEmpty()))) {
	        	Log.i(" WICIReplacementHelper ", " 5 : 16 ");
	        	_replacementStrategies.add(new WICIAccountNumberReplacementStrategy(accountNumber, context));
	        } else if((Integer.parseInt(accountNumber.substring(offset, offset + 2).toString().trim()) == 73 && accountNumber.length() == 15 && (maskedPAN != null || !maskedPAN.isEmpty()))) {
	        	Log.i(" WICIReplacementHelper ", " 73 : 15 ");
	        	_replacementStrategies.add(new WICIAccountNumberReplacementStrategy(accountNumber, context));
	        	_replacementStrategies.add(new WICIMaskedPANReplacementStrategy(carmemberModel.getMaskedPAN(), context));
	        } else if(!isGasBar && !isMarksStore && "4111111111111111".equals(cryptedAccountNumber) ) {
	         	_replacementStrategies.add(new WICIAccountNumberReplacementStrategy("731111111111111", context));
	        	_replacementStrategies.add(new WICIMaskedPANReplacementStrategy("411111XXXXXX1111", context));
	        } else if(isMarksStore  && "4111111111111111".equals(cryptedAccountNumber) ) {
	        	_replacementStrategies.add(new WICIAccountNumberReplacementStrategy(accountNumber, context));
	        }
	        // US4062
	        else if(isGasBar  && "4111111111111111".equals(cryptedAccountNumber) ) {
	        	_replacementStrategies.add(new WICIAccountNumberReplacementStrategy(accountNumber, context));
	        }
	        
        }
     
        Log.i(" accountNumber ", accountNumber);     
                
        _replacementStrategies.add(new WICIExpiryDateReplacementStrategy(carmemberModel.getExpiryDate()));
        _replacementStrategies.add(new WICICreditLimitReplacementStrategy(carmemberModel.getCorrespondenceLanguage(), carmemberModel.getCreditLimit()));
        _replacementStrategies.add(new WICISimpleTextReplacementStrategy(carmemberModel.getCorrespondenceLanguage(), carmemberModel.getFirstName(), carmemberModel.getMiddleInitial(), 
                carmemberModel.getLastName(), carmemberModel.getApr(), carmemberModel.getCashAPR(), carmemberModel.getCreditProtectorYesNo(), carmemberModel.getIdentityWatchYesNo()));        
        _replacementStrategies.add(new WICISignatureReplacementStrategy(carmemberModel.getSignture(), printer)); 
        _replacementStrategies.add(new WICIPrintoutAddReplacementStrategy(carmemberModel.getTodayDate(),carmemberModel.getStoreNumber())); 
            
    } 
    	
    
    public String applyReplacement(String source) {
        // Go through all replacementStrategies and apply replacement logic
        if (source != null && !source.isEmpty()) {
            for (ReplacementStrategy replacementStrategy : _replacementStrategies){
                source = replacementStrategy.applyReplacement(source);
            }    
        }                
        
        return source;
    }
    
    private String DecryptAccountNumber (Context context, String cryptedAccountNumber) {
        return WICICryptoHelper.getInstance().decryptRSA(context, cryptedAccountNumber);
    }
}