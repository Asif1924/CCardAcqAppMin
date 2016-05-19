package com.ctfs.wicimobile.util;

import android.content.Context;
import android.util.Log;

import com.ctfs.wicimobile.util.crypto.WICICryptoHelper;

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
       
        //Log.i("cryptedAccountNumber",cryptedAccountNumber == null ? "" : cryptedAccountNumber);
        String accountNumber = cryptedAccountNumber;
        StringBuilder formattedAccountNumber = new StringBuilder();
        int offset = 0;
        try {          
            
            if (accountNumber == null  || accountNumber.isEmpty()) {
                return EMPTY_STRING;
            }            
            // US3692
            if((Integer.parseInt(accountNumber.substring(offset, offset + 1).toString().trim()) == 5 && accountNumber.length() == 16) || ("4111111111111111".equals(accountNumber)) ) {
	            do {
	                String number = accountNumber.substring(offset, offset + 4);
	                formattedAccountNumber.append(number);
	                formattedAccountNumber.append(" ");
	                offset += 4;
	            } while (offset < accountNumber.length());
	
	            // Remove last " " substring
	            formattedAccountNumber.delete(formattedAccountNumber.length() - 1, formattedAccountNumber.length());
	            Log.i("WICIAccountNumberReplacementStrategy", "processAccountNumber() : " + formattedAccountNumber.toString());
	            return formattedAccountNumber.toString();	            
            } else if(Integer.parseInt(accountNumber.substring(offset, offset + 2).toString().trim()) == 73 && accountNumber.length() == 15) {
            	Log.i("WICIAccountNumberReplacementStrategy", "processAccountNumber() : " + accountNumber.toString());
            	return accountNumber.toString();
            }
        } catch (Exception e) {
            e.printStackTrace();            
        }    
        
        return accountNumber;
    }
    
    private String DecryptAccountNumber (Context context, String cryptedAccountNumber) {
        return WICICryptoHelper.getInstance().decryptRSA(context, cryptedAccountNumber);
    }
}
