package com.ctfs.WICI.Model;

public class DictionaryInfo {

	String 	LatestDictionaryVersion;
	String 	DictionaryURLEnglish;
	String 	DictionaryURLFrench;
	Boolean	OlderDictionaryAllowable;

	public String getLatestDictionaryVersion()
	{
		return LatestDictionaryVersion;
	}
	public void setLatestDictionaryVersion(String argLatestDictionaryVersion)
	{
		this.LatestDictionaryVersion = argLatestDictionaryVersion;
	}
	
	public String getDictionaryURLEnglish()
	{
		return DictionaryURLEnglish;
	}
	public void setDictionaryURLEnglish(String argDictionaryURLEnglish)
	{
		this.DictionaryURLEnglish = argDictionaryURLEnglish;
	}

	public String getDictionaryURLFrench()
	{
		return DictionaryURLFrench;
	}
	public void setDictionaryURLFrench(String argDictionaryURLFrench)
	{
		this.DictionaryURLFrench = argDictionaryURLFrench;
	}

	public Boolean getOlderDictionaryAllowable()
	{
		return OlderDictionaryAllowable;
	}
	public void setOlderDictionaryAllowable(Boolean argOlderDictionaryAllowable)
	{
		this.OlderDictionaryAllowable = argOlderDictionaryAllowable;
	}

}
