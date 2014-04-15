package com.ctfs.wicimobile.util;

import com.ctfs.wicimobile.util.crypto.WICICryptoHelper;

import android.content.Context;

public class WICIAccountNumberReplacementStrategy implements ReplacementStrategy {
    private static final String EMPTY_STRING = "";
    private static final String SerachPattern = "#[AccountNumber]";
    private String _accountNumber;    
    
    public WICIAccountNumberReplacementStrategy (String accountNumber, Context context) {  
        _accountNumber = processAccountNumber(accountNumber, context);
    }
    @Override
    public String applyReplacement(String source) {
        if (source != null && !source.isEmpty()){
            source = source.replace(SerachPattern, _accountNumber);    
        }
               
        return source; 
    }
    
    private String processAccountNumber(String cryptedAccountNumber, Context context) {
        if (cryptedAccountNumber == null || cryptedAccountNumber.isEmpty() || context == null){
            return EMPTY_STRING;
        }        
        
        String accountNumber = EMPTY_STRING;
        StringBuilder formattedAccountNumber = new StringBuilder();
        int offset = 0;
        try {
            
            accountNumber = DecryptAccountNumber (context,cryptedAccountNumber);
            
            if (accountNumber == null  || accountNumber.isEmpty()) {
                return EMPTY_STRING;
            }
            
            do {
                String number = accountNumber.substring(offset, offset + 4);
                formattedAccountNumber.append(number);
                formattedAccountNumber.append(" ");
                offset += 4;
            } while (offset < accountNumber.length());

            // Remove last " " substring
            formattedAccountNumber.delete(formattedAccountNumber.length() - 1, formattedAccountNumber.length());
            
            return formattedAccountNumber.toString();
        } catch (Exception e) {
            e.printStackTrace();            
        }    
        
        return accountNumber;
    }
    
    private String DecryptAccountNumber (Context context, String cryptedAccountNumber) {
        return WICICryptoHelper.getInstance().decryptRSA(context, cryptedAccountNumber);
    }
}
