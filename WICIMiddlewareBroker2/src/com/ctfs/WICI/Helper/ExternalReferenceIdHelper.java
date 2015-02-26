package com.ctfs.WICI.Helper;

import java.util.StringTokenizer;

public class ExternalReferenceIdHelper
{

	private static final int MAX_TOKENS = 5;

	public String getLastPartOfExternalRefId(String externalRefId)
	{
		String lastPart = "";
		if (isCorrectFormat(externalRefId))
		{
			lastPart = externalRefId.substring(externalRefId.length() - 12);
		}
		return lastPart;
	}

	public boolean isCorrectFormat(String extRefID)
	{
		try
		{
			if (extRefID.equals(""))
				return false;

			StringTokenizer st = new StringTokenizer(extRefID, "-");
			int numTokens = st.countTokens();
			if (numTokens != MAX_TOKENS)
				return false;

			String[] tokens = new String[MAX_TOKENS];
			int[] tokenLengths = new int[MAX_TOKENS];
			int i = 0;
			while (st.hasMoreTokens())
			{
				tokens[i] = st.nextToken();
				tokenLengths[i] = tokens[i].length();
				i++;
			}
			return tokenLengthsAreCorrect(tokenLengths) && tokensAreAlphaNumeric(tokens);
		}
		catch (NullPointerException npe)
		{
			return false;
		}
	}

	private boolean tokensAreAlphaNumeric(String[] tokens)
	{
		for (String item : tokens)
		{
			if (!item.matches("[A-Za-z0-9]+"))
				return false;
		}
		return true;
	}

	private boolean tokenLengthsAreCorrect(int[] tokenLengths)
	{
		return (tokenLengths[0] == 8 && tokenLengths[1] == 4 && tokenLengths[2] == 4 && tokenLengths[3] == 4 && tokenLengths[4] == 12);
	}

}
