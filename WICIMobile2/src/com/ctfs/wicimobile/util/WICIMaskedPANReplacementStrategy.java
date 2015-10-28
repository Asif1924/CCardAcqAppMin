package com.ctfs.wicimobile.util;

import android.content.Context;

public class WICIMaskedPANReplacementStrategy implements ReplacementStrategy {
    private static final String EMPTY_STRING = "";
    private static final String SerachPattern = "#[maskedAccountNumber]";
    private String _maskedPAN;    
    
    public WICIMaskedPANReplacementStrategy (String maskedPAN, Context context) {  
        _maskedPAN = processMaskedPAN(maskedPAN, context);
    }
    @Override
    public String applyReplacement(String source) {
        if (source != null && !source.isEmpty()){
            source = source.replace(SerachPattern, _maskedPAN);    
        }
               
        return source; 
    }
    
    private String processMaskedPAN(String maskedPAN, Context context) {
        if (maskedPAN == null || maskedPAN.isEmpty() || context == null) {
            return EMPTY_STRING;
        }   
       
        StringBuilder formattedMaskedPAN = new StringBuilder();
        int offset = 0;
        try {           
            
            if (maskedPAN == null  || maskedPAN.isEmpty()) {
                return EMPTY_STRING;
            }
            
	        do {
	            String number = maskedPAN.substring(offset, offset + 4);
	            formattedMaskedPAN.append(number);
	            formattedMaskedPAN.append(" ");
	            offset += 4;
	        } while (offset < maskedPAN.length());
	
	        // Remove last " " substring
	        formattedMaskedPAN.delete(formattedMaskedPAN.length() - 1, formattedMaskedPAN.length());
	            
	        return formattedMaskedPAN.toString();

        } catch (Exception e) {
            e.printStackTrace();            
        }    
        
        return EMPTY_STRING;
    }
    
}
