package com.ctfs.wicimobile.util;

public class WICIPrintoutAddReplacementStrategy implements ReplacementStrategy {
    private static final String SerachPatternDate = "#[TodayDate]";
    private static final String SerachPatternStore = "#[StoreNumber]";
    
    private String _todayDate;
    private String _storeNumber;
    
    public WICIPrintoutAddReplacementStrategy (String todayDate,String storeNumber) {  
    	_todayDate = todayDate;
    	_storeNumber = storeNumber;
    }
    
    @Override
    public String applyReplacement(String source) {
        if (source != null && !source.isEmpty()){
            source = source.replace(SerachPatternDate,  _todayDate);
            source = source.replace(SerachPatternStore, _storeNumber);
        }      
        return source; 
    } 
}
