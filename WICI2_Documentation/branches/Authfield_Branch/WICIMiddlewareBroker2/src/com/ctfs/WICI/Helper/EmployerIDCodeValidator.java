package com.ctfs.WICI.Helper;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class EmployerIDCodeValidator {
	/*
	 0       |Internal      
	 --------+-------------- 
	 K       |Kognitive      
	 --------+-------------- 
	 B       |RFU            
	 --------+-------------- 
	 H       |RFU            
	 --------+-------------- 
	 A       |RFU            
	 --------+-------------- 
	 C       |Credico        
	 --------+-------------- 
	 E       |Endo / Test    
	 --------+-------------- 
	 J       |JWR            
	 --------+-------------- 
	 F       |Mosaic         
	 */
	private static final Map<String,String>	employerIDCodes;
    static {
        Map<String, String> theStaticCodes = new HashMap<String,String>();
        theStaticCodes.put("0", "Internal");
        theStaticCodes.put("K", "Kognitive");
        theStaticCodes.put("B", "RFU");
        theStaticCodes.put("H", "RFU");
        theStaticCodes.put("A", "RFU");
        theStaticCodes.put("C", "Credico");
        theStaticCodes.put("E", "Endo / Test");
        theStaticCodes.put("J", "JWR");
        theStaticCodes.put("F", "Mosaic");
        employerIDCodes = Collections.unmodifiableMap(theStaticCodes);
    }
	
	public boolean validateCode(String argEmployerIDCode) {
		return employerIDCodes.containsKey(argEmployerIDCode.toUpperCase());
	}
	
}
