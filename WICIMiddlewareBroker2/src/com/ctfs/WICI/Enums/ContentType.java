package com.ctfs.WICI.Enums;

public enum ContentType
{
	PLAIN_TEXT("text/plain"),
	XML("text/xml"),
	APPLICATION_X_WWW_FORM_URLENCODED ("application/x-www-form-urlencoded"),
	HTML("text/html"),
	JSON("application/json"),
	INCORRECT_MIME_TYPE("Incorrect MIME type");

	private final String name;

	ContentType(String value)
	{
		this.name = value;
	}

	public static ContentType fromValue(String argContentTypeFromRequest)
	{
		for (ContentType contentType : ContentType.values())
		{
			//if (contentType.name.equals(contentTypeFromRequest))
			if ( argContentTypeFromRequest.toUpperCase().contains( contentType.name.toUpperCase() ))
			{
				return contentType;
			}
		}

		return INCORRECT_MIME_TYPE;
	}

	public boolean equalsName (String strName){
		return (strName == null) ? false : name.equals(strName);
 	}

	public boolean equalsNameInsensitive (String strName){
		return (strName == null) ? false : name.toUpperCase().equals(strName.toUpperCase());
 	}

	public String toString() {
		return name;
	}
}