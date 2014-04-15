package com.ctfs.WICI;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.StringReader;

import org.apache.soap.util.IOUtils;
import com.ctfs.WICI.Model.FileContentsResult;

public class AddressLookupMockHelper {
	private 		static 		final 				String 				ADDRESS_LOOKUP_RESPONSE_FOLDER_LOCATION = "AddressLookupResponses";
	private 		static 		final 				String 				JS_FILE_EXTENSION = ".js";	

	public FileContentsResult getFileContents( String argFileName ) {
		InputStream mockAddressLookupResponseStream = (InputStream) getClass().getResourceAsStream( ADDRESS_LOOKUP_RESPONSE_FOLDER_LOCATION + "/" + argFileName + JS_FILE_EXTENSION);
		FileContentsResult fileContentsResult = new FileContentsResult();
		String mockAddressLookupResponseData = "{}";
		fileContentsResult.setErrorCode("");
		if (mockAddressLookupResponseStream==null)
		{
			fileContentsResult.setErrorCode("E001");
			fileContentsResult.setRawContents(mockAddressLookupResponseData);
			return fileContentsResult;
		}
		try {
			mockAddressLookupResponseData = IOUtils.getStringFromReader(new InputStreamReader(mockAddressLookupResponseStream));
		} catch (IOException e) {
			return fileContentsResult;
		}
		fileContentsResult.setRawContents(mockAddressLookupResponseData);
		return fileContentsResult;
	}

	public boolean fileExists(String argFileName) {
		InputStream mockFile = com.ctfs.WICI.AddressLookupMockHelper.class.getResourceAsStream( ADDRESS_LOOKUP_RESPONSE_FOLDER_LOCATION + "/" + argFileName + JS_FILE_EXTENSION);
		return (mockFile!=null);
	}

}
