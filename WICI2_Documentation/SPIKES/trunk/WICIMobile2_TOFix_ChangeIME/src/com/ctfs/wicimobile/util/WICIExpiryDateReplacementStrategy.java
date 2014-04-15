package com.ctfs.wicimobile.util;

public class WICIExpiryDateReplacementStrategy implements ReplacementStrategy {
    private static final String SerachPattern = "#[ExpiryDate]";
    private String _expiryDate;
    private static final String EMPTY_STRING = "";
    
    public WICIExpiryDateReplacementStrategy (String expiryDate) {  
        _expiryDate = processExpiryDate(expiryDate);
    }
    
    @Override
    public String applyReplacement(String source) {
        if (source != null && !source.isEmpty()){
            source = source.replace(SerachPattern, _expiryDate);    
        }
               
        return source; 
    }
    
    private String processExpiryDate(String expiryDate) {        
        if (expiryDate == null || expiryDate.isEmpty()){
            return EMPTY_STRING;
        }
        
        StringBuilder formattedExpiryDate = new StringBuilder();
        int offset = expiryDate.length();
        try {
            do {
                String number = expiryDate.substring(offset - 2, offset);
                formattedExpiryDate.append(number);
                formattedExpiryDate.append("/");
                offset -= 2;
            } while (offset > 0 );

            // Remove last "/" substring
            formattedExpiryDate.delete(formattedExpiryDate.length() - 1, formattedExpiryDate.length());

            return formattedExpiryDate.toString();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return expiryDate;
    }
}
