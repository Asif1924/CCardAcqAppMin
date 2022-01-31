package com.ctfs.wicimobile.util;

public class WICITodayPlus30DaysReplacementStrategy implements ReplacementStrategy {
    private static final String SerachPattern = "#[TodayPlus30Days]";
    private String _todayPlus30Days;
    private static final String EMPTY_STRING = "";
    
    public WICITodayPlus30DaysReplacementStrategy (String expiryDate) {  
        _todayPlus30Days = processTodayPlus30Days(expiryDate);
    }
    
    @Override
    public String applyReplacement(String source) {
        if (source != null && !source.isEmpty()){
            source = source.replace(SerachPattern, _todayPlus30Days);    
        }
               
        return source; 
    }
    
    private String processTodayPlus30Days(String todayPlus30Days) {        
        if (todayPlus30Days == null || todayPlus30Days.isEmpty()){
            return EMPTY_STRING;
        }
        
        return todayPlus30Days;
    }
}
