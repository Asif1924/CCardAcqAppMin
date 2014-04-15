package com.ctfs.wicimobile.util;

import java.util.Hashtable;

public class WICICardTermsReplacementStrategy implements ReplacementStrategy {
    private Hashtable<String, String> _mappingTable;
    private static final String SerachPattern = "#[CardTerms]";
    private String _cardType;

    public WICICardTermsReplacementStrategy (String cardType) {  
        _cardType = cardType;
        
        // Initialize MappingTable
        _mappingTable = new Hashtable<String, String>();
        
        // Add CardTerms mapping rules 
        _mappingTable.put("OMC", "1 In the form of Canadian Tire �Money� On The Card� \n" +
                                 "awards. Terms and conditions apply. Details available \n" +
                                 "in-store or online at ctfs.com/ctm. \n" +
                                 "The Canadian Tire Options� MasterCard� is issued \n" +
                                 "by Canadian Tire Bank pursuant to a licence by \n" +
                                 "MasterCard International.");
        _mappingTable.put("OMP", "The Gas Advantage� MasterCard� is issued by \n" +
                                 "Canadian Tire Bank pursuant to a licence by \n" +
                                 "MasterCard International.");
        _mappingTable.put("OMR", "The Cash Advantage� MasterCard� is issued by \n" +
                                 "Canadian Tire Bank pursuant to a licence by \n" +
                                 "MasterCard International.");       
    }  
    
    @Override
    public String applyReplacement(String source) {        
        if (source != null && !source.isEmpty() && _mappingTable.containsKey(_cardType)){
            source = source.replace(SerachPattern, _mappingTable.get(_cardType));    
        }
               
        return source;        
    }
}
