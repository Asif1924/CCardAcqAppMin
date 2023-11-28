package com.ctfs.WICI.Helper;

import java.util.regex.Pattern;
import org.owasp.encoder.Encode;

/*
 * This class is implemented for CWE-117, Either use a safe logging mechanism or 
 * implement the removal of  carriage returns,line feeds, 
 * HTML encoding for add user input that is entered into log entries.
 * 
 * */
public class CWE117Fix {
	private static final Pattern STRIP_CRLF_PATTERN = Pattern.compile("[\r\n]");
	
	public static String encodeCRLF(String message) {
		 
    	   // ensure there's something to log
		 if (message== null) {
		      return null;

		    }
		 // ensure no CRLF injection into logs for forging records
    	   String cleanMessage = STRIP_CRLF_PATTERN.matcher(message).replaceAll(" ");
			    return Encode.forHtml(cleanMessage);
			    //return Encode.forHtmlContent(cleanMessage);
    	}

}
