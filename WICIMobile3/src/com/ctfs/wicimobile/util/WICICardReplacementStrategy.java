package com.ctfs.wicimobile.util;

import java.util.Hashtable;

public class WICICardReplacementStrategy implements ReplacementStrategy {
    private Hashtable<String, String> _mappingTable;
    private static final String SerachPattern = "#[CardType]";
    private String _cardType;
    
    public WICICardReplacementStrategy (String cardType) {   
        _cardType = cardType;
        
        // Initialize MappingTable
        _mappingTable = new Hashtable<String, String>();
        
        //_mappingTable.put("OMC", "Options� MasterCard�"); 
        _mappingTable.put("OMP", "Gas Advantage� MasterCard�");
        _mappingTable.put("OMR", "Cash Advantage� MasterCard�");
        _mappingTable.put("OMX", "Triangle� Mastercard�");
        _mappingTable.put("OMZ", "Triangle� World Elite Mastercard�");
    }  

    @Override
    public String applyReplacement(String source) {        
        if (source != null && !source.isEmpty() && _mappingTable.containsKey(_cardType)){
            source = source.replace(SerachPattern, _mappingTable.get(_cardType));    
        }
               
        return source;        
    }
}
