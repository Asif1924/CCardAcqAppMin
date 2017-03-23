package com.ctfs.BRB.Helper;

import java.sql.SQLException;
import java.util.logging.Logger;

import com.ctfs.BRB.Model.DictionaryInfo;
import com.ctfs.BRB.Model.InvalidDictionaryInformationException;

// US4281
public class DictionaryInfoValidator
{
	static Logger log = Logger.getLogger(DictionaryInfoValidator.class.getName());

	private final String LOG_ENTRY_PREFIX = "DictionaryInfoValidator:";

	public DictionaryInfo validateDictionaryInformation() throws SQLException, InvalidDictionaryInformationException
	{
		String sMethod = this.getClass().getName() + "[validateDictionaryInformation] ";
		log.info(sMethod);

		BRBDBHelper brbdbHelper = new BRBDBHelper();
		DictionaryInfo dictInfo = brbdbHelper.getLatestDictionaryInfo();

		if (!validatedDictionaryInfo(dictInfo))
		{
			throw new InvalidDictionaryInformationException(String.format("\n%s\nNull Values exist in latest DictionaryInfo", LOG_ENTRY_PREFIX));
		}
		return dictInfo;
	}

	private boolean validatedDictionaryInfo(DictionaryInfo argDictionaryInfo)
	{
		String sMethod = this.getClass().getName() + "[validatedDictionaryInfo] ";
		log.info(sMethod);

		return (argDictionaryInfo != null  
		&& argDictionaryInfo.getOlderDictionaryAllowable() !=null
		&& validatedStringParameter(argDictionaryInfo.getLatestDictionaryVersion())		
		&& validatedStringParameter(argDictionaryInfo.getDictionaryURLEnglish())
		&& validatedStringParameter(argDictionaryInfo.getDictionaryURLFrench()));
	}

	private boolean validatedStringParameter(String value)
	{
		String sMethod = this.getClass().getName() + "[validatedStringParameter] ";
		log.info(sMethod);

		return value != null && !value.isEmpty();
	}
}
