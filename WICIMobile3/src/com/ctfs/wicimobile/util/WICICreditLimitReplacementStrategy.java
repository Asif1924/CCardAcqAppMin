package com.ctfs.wicimobile.util;

public class WICICreditLimitReplacementStrategy implements ReplacementStrategy {
    private static final String EMPTY_STRING = "";
    private static final String SerachPattern = "#[CreditLimit]";
    private String _correspondenceLanguage;
    private String _creditLimit;
    
    public WICICreditLimitReplacementStrategy (String correspondenceLanguage, String creditLimit) {  
    	_correspondenceLanguage = correspondenceLanguage;
        _creditLimit = processCreditLimit(creditLimit);
    }
    
    @Override
    public String applyReplacement(String source) {
        if (source != null && !source.isEmpty()){
            source = source.replace(SerachPattern, _creditLimit);    
        }
               
        return source; 
    }
    
    private String applyThousandsSeparator(String value) {
    	String resValue = "";
    	String separator = "";
    	
    	if (_correspondenceLanguage.equalsIgnoreCase("E")) {
    		separator = ",";
    	} else if (_correspondenceLanguage.equalsIgnoreCase("F")) {
    		separator = " ";
    	}
    	
    	while ((value.length() % 3) != 0) {
			value = " " + value;
		}
    	
    	if (value.length() > 3) {
    		int tripletCount = (value.length() / 3) + 1;
    		int commaPos = 0;
    		while (commaPos < tripletCount - 1) {
    			if (resValue != "") {
    				resValue += separator;
    			}
    			resValue += value.substring(commaPos * 3, (commaPos * 3) + 3);
    			commaPos++;
			}
    	} else {
    		resValue = value;
    	}
    	
    	return resValue.trim();
    }
    
    private String processCreditLimit(String creditLimit) {
        if (creditLimit == null || creditLimit.isEmpty()) {
            return EMPTY_STRING;
        }   
        
        StringBuilder formattedCreditLimit = new StringBuilder();
        
        if (_correspondenceLanguage.equalsIgnoreCase("E")) {
	        formattedCreditLimit.append("$");
	        formattedCreditLimit.append(applyThousandsSeparator(creditLimit));
	        formattedCreditLimit.append(".00");
        } else if (_correspondenceLanguage.equalsIgnoreCase("F")) {
        	formattedCreditLimit.append(creditLimit);
        	formattedCreditLimit.append(",00");
        	formattedCreditLimit.append("$");
        }

        return formattedCreditLimit.toString();
    }
}
