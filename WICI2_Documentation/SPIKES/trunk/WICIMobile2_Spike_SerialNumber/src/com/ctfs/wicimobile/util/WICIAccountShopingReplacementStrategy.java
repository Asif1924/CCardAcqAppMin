package com.ctfs.wicimobile.util;

import java.util.Hashtable;

public class WICIAccountShopingReplacementStrategy implements ReplacementStrategy {
    private Hashtable<String, String> _mappingTable;
    private static final String SerachPattern = "#[AccountShopping]";
    private String _cardType;

    public WICIAccountShopingReplacementStrategy (String cardType) {  
        _cardType = cardType;
        
        // Initialize MappingTable
        _mappingTable = new Hashtable<String, String>();
        
        // Add AccountShopping mapping rules
        _mappingTable.put("OMC", "Use your new account number below \n" +
                                "along with the attached BONUS coupon \n" +
                                "to start shopping today.");
        _mappingTable.put("OMP", "For OMP and OMR this line will be: \n" +
                                "Use your new account number below \n" +
                                "to start shopping today.");
        _mappingTable.put("OMR", "For OMP and OMR this line will be: \n" +
                                "Use your new account number below \n" +
                                "to start shopping today.");       
    }  
    
    @Override
    public String applyReplacement(String source) {        
        if (source != null && !source.isEmpty() && _mappingTable.containsKey(_cardType)){
            source = source.replace(SerachPattern, _mappingTable.get(_cardType));    
        }
               
        return source;        
    }
}
