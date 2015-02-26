package com.ctfs.WICI.Test.Resources;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import org.junit.Ignore;

@Ignore
public class TestFiles {

	public String getFileContents(InputStream inputStr) {
		
        BufferedReader reader = new BufferedReader( new InputStreamReader(inputStr) );
        StringBuilder out = new StringBuilder();
        String line;
        String fileContents= "";
        try {
			while ((line = reader.readLine()) != null) {
			    out.append(line);
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
        try {
			reader.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        fileContents = out.toString();   
		return fileContents;
	}

	public String getFileContents(String argFileName)
	{
		InputStream inputStr = com.ctfs.WICI.Test.Resources.TestFiles.class.getResourceAsStream(argFileName);
		return this.getFileContents(inputStr);
	}
	
}
