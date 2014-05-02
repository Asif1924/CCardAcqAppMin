package com.ctfs.wicimobile.util;

import java.util.ArrayList;
import java.util.List;

import android.content.Context;

import com.ctfs.wicimobile.models.WICICardmemberModel;
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
        _replacementStrategies.add(new WICIAccountNumberReplacementStrategy(carmemberModel.getAccountNumber(), context));
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
}