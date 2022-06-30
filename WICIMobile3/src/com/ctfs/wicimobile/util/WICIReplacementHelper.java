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
    
    public WICIReplacementHelper (WICICardmemberModel cardmemberModel, Context context, ZebraPrinter printer) {
        if (cardmemberModel == null){
            throw new IllegalArgumentException("cardmemberModel could not be null");
        }        
        
        _replacementStrategies = new ArrayList<ReplacementStrategy>();
        _replacementStrategies.add(new WICICardReplacementStrategy(cardmemberModel.getCardType()));
        _replacementStrategies.add(new WICICardTermsReplacementStrategy(cardmemberModel.getCardType()));
        _replacementStrategies.add(new WICIAccountShopingReplacementStrategy(cardmemberModel.getCardType()));
                
        // US3692
        String cryptedAccountNumber = cardmemberModel.getAccountNumber();
        String maskedPAN = cardmemberModel.getMaskedPAN();
        String accountNumber = "";
        int offset = 0;
        String retailNetwork = cardmemberModel.getRetailNetwork();

        if (cryptedAccountNumber != null && !cryptedAccountNumber.isEmpty()) {
        	// UAT204
        	if("4111111111111111".equals(cryptedAccountNumber))
        		accountNumber = cryptedAccountNumber;
        	else
        		accountNumber = DecryptAccountNumber(context,cryptedAccountNumber);
        	
	        if((Integer.parseInt(accountNumber.substring(offset, offset + 1).toString().trim()) == 5 && accountNumber.length() == 16 && (maskedPAN == null || maskedPAN.isEmpty()))) {
	        	Log.i(" WICIReplacementHelper ", " 5 : 16 ");
	        	_replacementStrategies.add(new WICIAccountNumberReplacementStrategy(accountNumber, context));
	        } else if((Integer.parseInt(accountNumber.substring(offset, offset + 2).toString().trim()) == 73 && accountNumber.length() == 15 && (maskedPAN != null || !maskedPAN.isEmpty()))) {
	        	Log.i(" WICIReplacementHelper ", " 73 : 15 ");
	        	_replacementStrategies.add(new WICIAccountNumberReplacementStrategy(accountNumber, context));
	        	_replacementStrategies.add(new WICIMaskedPANReplacementStrategy(cardmemberModel.getMaskedPAN(), context));
	        } else if(("NS".equalsIgnoreCase(retailNetwork)) && "4111111111111111".equals(cryptedAccountNumber) ) {
	        	Log.i(" WICIReplacementHelper ", " NS ");
	        	_replacementStrategies.add(new WICIAccountNumberReplacementStrategy("4111111111111111", context));
	        } else if("4111111111111111".equals(cryptedAccountNumber) ) {
	        	_replacementStrategies.add(new WICIAccountNumberReplacementStrategy("731111111111111", context));
	        	_replacementStrategies.add(new WICIMaskedPANReplacementStrategy("411111XXXXXX1111", context));
	        }
        }
        Log.i(" accountNumber ", accountNumber);     
                
        _replacementStrategies.add(new WICIExpiryDateReplacementStrategy(cardmemberModel.getExpiryDate()));
        _replacementStrategies.add(new WICITodayPlus30DaysReplacementStrategy(cardmemberModel.getExpiryDate())); // VZE-478 Only used for Marks and Sports store coupon prints.
        _replacementStrategies.add(new WICICreditLimitReplacementStrategy(cardmemberModel.getCorrespondenceLanguage(), cardmemberModel.getCreditLimit()));
        if(cardmemberModel.getPerformStoreRecallPrint()) {
        	_replacementStrategies.add(new WICISimpleTextReplacementStrategy(cardmemberModel.getCorrespondenceLanguage(), cardmemberModel.getFirstName(), cardmemberModel.getMiddleInitial(), 
                    cardmemberModel.getLastName(), cardmemberModel.getApr()+'%', cardmemberModel.getCashAPR()+'%', cardmemberModel.getCreditProtectorYesNo(), cardmemberModel.getCompleteLifeDisability(),
                    cardmemberModel.getCPProductTrademarkMD(),cardmemberModel.getCPProductTrademarkCPCMC(),cardmemberModel.getCPProductTrademarkCPLMC(),cardmemberModel.getAdrsuiteunit(), cardmemberModel.getAdrstreetnumber(), cardmemberModel.getAdraddressline1(), cardmemberModel.getAdrcity(),
                    cardmemberModel.getAdrprovince(), cardmemberModel.getAdrpostalcode()));
        } else {
        	_replacementStrategies.add(new WICISimpleTextReplacementStrategy(cardmemberModel.getCorrespondenceLanguage(), cardmemberModel.getFirstName(), cardmemberModel.getMiddleInitial(), 
                    cardmemberModel.getLastName(), cardmemberModel.getApr(), cardmemberModel.getCashAPR(), cardmemberModel.getCreditProtectorYesNo(), cardmemberModel.getCompleteLifeDisability(),
                    cardmemberModel.getCPProductTrademarkMD(),cardmemberModel.getCPProductTrademarkCPCMC(),cardmemberModel.getCPProductTrademarkCPLMC(),cardmemberModel.getAdrsuiteunit(), cardmemberModel.getAdrstreetnumber(), cardmemberModel.getAdraddressline1(), cardmemberModel.getAdrcity(),
                    cardmemberModel.getAdrprovince(), cardmemberModel.getAdrpostalcode()));
        }
        _replacementStrategies.add(new WICISignatureReplacementStrategy(cardmemberModel.getSignature(), printer)); 
        _replacementStrategies.add(new WICIPrintoutAddReplacementStrategy(cardmemberModel.getTodayDate(),cardmemberModel.getStoreNumber())); 
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