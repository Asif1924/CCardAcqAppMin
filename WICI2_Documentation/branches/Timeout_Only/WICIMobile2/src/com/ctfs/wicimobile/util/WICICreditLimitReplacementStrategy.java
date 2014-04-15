package com.ctfs.wicimobile.util;

public class WICICreditLimitReplacementStrategy implements ReplacementStrategy {
    private static final String EMPTY_STRING = "";
    private static final String SerachPattern = "#[CreditLimit]";
    private String _creditLimit;
    
    public WICICreditLimitReplacementStrategy (String creditLimit) {  
        _creditLimit = processCreditLimit(creditLimit);
    }
    
    @Override
    public String applyReplacement(String source) {
        if (source != null && !source.isEmpty()){
            source = source.replace(SerachPattern, _creditLimit);    
        }
               
        return source; 
    }
    
    private String processCreditLimit(String creditLimit) {
        if (creditLimit == null || creditLimit.isEmpty()){
            return EMPTY_STRING;
        }   
        
        StringBuilder formattedCreditLimit = new StringBuilder();
        formattedCreditLimit.append("$");
        formattedCreditLimit.append(creditLimit);
        formattedCreditLimit.append(".00");

        return formattedCreditLimit.toString();
    }
}
