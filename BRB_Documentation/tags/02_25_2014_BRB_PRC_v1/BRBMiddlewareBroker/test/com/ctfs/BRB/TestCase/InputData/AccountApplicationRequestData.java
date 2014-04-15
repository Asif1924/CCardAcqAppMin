package com.ctfs.BRB.TestCase.InputData;

public class AccountApplicationRequestData
{
	private final StringBuffer BRBCardDataModelsJson = new StringBuffer(
			"[{\"model\": \"overview\", \"data\": [" +
				"{\"name\": \"promoCode\", \"value\": \"\"}, " +
				"{\"name\": \"provinces\", \"value\": \"NS\"}]},\n" +
            "{\"model\": \"personalInformation\", \"data\": [" +
            	"{\"name\": \"title\", \"value\": null}, " +
            	"{\"name\": \"loyaltyMembershipNumber\", \"value\": \"6365747982347023\"}, " +
            	"{\"name\": \"firstName\", \"value\": \"BREDITU\"}, " +
            	"{\"name\": \"initial\", \"value\": \"A\"}, " +
            	"{\"name\": \"lastName\", \"value\": \"PERIWINKLE\"}, " +
            	"{\"name\": \"birthDate\", \"value\": \"1970-12-01\"}, " +
            	"{\"name\": \"email\", \"value\": \"qw@qw.qw\"}, " +
            	"{\"name\": \"receiveEmail\", \"value\": \"N\"}, " +
            	"{\"name\": \"correspondence\", \"value\": \"E\"}, " +
            	"{\"name\": \"primaryPhone\", \"value\": \"1111111111\"}, " +
            	"{\"name\": \"sin\", \"value\": \"111111111\"}, " +
            	"{\"name\": \"streetnumber\", \"value\": \"1\"}, " +
            	"{\"name\": \"addressline1\", \"value\": \"LEACOCK COURT, 123 BROOKLYN\"}, " +
            	"{\"name\": \"suiteunit\", \"value\": \"234\"}, " +
            	"{\"name\": \"city\", \"value\": \"DARTMOUTH\"}, " +
            	"{\"name\": \"province\", \"value\": \"NS\"}, " +
            	"{\"name\": \"postalcode\", \"value\": \"B2W4J4\"}, " +
            	"{\"name\": \"house\", \"value\": \"O\"}, " +
            	"{\"name\": \"housingpayment\", \"value\": \"0\"}, " +
            	"{\"name\": \"sinceYears\", \"value\": \"2013\"}, " +
            	"{\"name\": \"sinceMonths\", \"value\": \"3\"}, " +
            	"{\"name\": \"isPrevAddressExist\", \"value\": true}, " +
            	"{\"name\": \"streetnumber_prev\", \"value\": \"3\"}, " +
            	"{\"name\": \"addressline1_prev\", \"value\": \"LEACOCK COURT SUP\"}, " +
            	"{\"name\": \"suiteunit_prev\", \"value\": \"45\"}, " +
            	"{\"name\": \"city_prev\", \"value\": \"DARTMOUTH\"}, " +
            	"{\"name\": \"province_prev\", \"value\": \"NS\"}, " +
            	"{\"name\": \"postalcode_prev\", \"value\": \"B2W4J4\"}, " +
            	"{\"name\": \"employmentType\", \"value\": \"F\"}, " +
            	"{\"name\": \"employerName\", \"value\": \"YEPTEL\"}, " +
            	"{\"name\": \"employerCity\", \"value\": \"DARTMOUTH\"}, " +
            	"{\"name\": \"jobTitle\", \"value\": \"MA\"}, " +
            	"{\"name\": \"jobDescription\", \"value\": \"MANAGER\"}, " +
            	"{\"name\": \"howLongYears\", \"value\": \"1999\"}, " +
            	"{\"name\": \"howLongMonthes\", \"value\": \"4\"}, " +
            	"{\"name\": \"grossIncome\", \"value\": \"11111\"}, " +
            	"{\"name\": \"cardVISAMCAMEX\", \"value\": \"Y\"}, " +
            	"{\"name\": \"cardBankLoan\", \"value\": \"N\"}, " +
            	"{\"name\": \"cardStoreCard\", \"value\": \"Y\"}, " +
            	"{\"name\": \"cardChequingAcct\", \"value\": \"Y\"}, " +
            	"{\"name\": \"cardGasCard\", \"value\": \"Y\"}, " +
            	"{\"name\": \"cardSavingsAcct\", \"value\": \"Y\"}, " +
            	"{\"name\": \"isAnyBankingProducts\", \"value\": true}]}, \n" +
            "{\"model\": \"additionalInformation\", \"data\": [" +
                "{\"name\": \"suplementaryYesNo\", \"value\": true}, " +
                "{\"name\": \"title\", \"value\": null}, " +
                "{\"name\": \"firstName\", \"value\": \"BREDITU\"}, " +
                "{\"name\": \"initial\", \"value\": \"S\"}, " +
                "{\"name\": \"lastName\", \"value\": \"PERIWINKLE\"}, " +
                "{\"name\": \"birthDate\", \"value\": \"1980-10-2\"}, " +
                "{\"name\": \"primaryPhone\", \"value\": \"1234567890\"}, " +
                "{\"name\": \"relationship\", \"value\": \"SPOU\"}, " +
                "{\"name\": \"sameAddressArea\", \"value\": \"N\"}, " +
                "{\"name\": \"streetNumber\", \"value\": \"12\"}, " +
                "{\"name\": \"streetName\", \"value\": \"LEACOCK COURT\"}, " +
                "{\"name\": \"suiteUnit\", \"value\": \"23\"}, " +
                "{\"name\": \"city\", \"value\": \"DARTMOUTH\"}, " +
                "{\"name\": \"province\", \"value\": \"NS\"}, " +
                "{\"name\": \"postalCode\", \"value\": \"B2W4J4\"}, " +
                "{\"name\": \"optionalInsurance_CP\", \"value\": false}, " +
                "{\"name\": \"optionalInsurance_IW\", \"value\": true}, " +
                "{\"name\": \"optionalInsurance_PA\", \"value\": false}]}, \n" +
            "{\"model\": \"confirmation\", \"data\": [" +
            	"{\"name\": \"applicationAuthorizationYesNo\", \"value\": true}, " +
            	"{\"name\": \"updateCTProfileYesNo\", \"value\": true}]}, \n" +
            "{\"model\": \"identityVerification\", \"data\": " +
            	"[{\"name\": \"tuExamResult\", \"value\": \"Y\"}, " +
            	"{\"name\": \"transactionId\", \"value\": \"as1382603275903\"}, " +
            	"{\"name\": \"maskedPan\", \"value\": null}, " +
            	"{\"name\": \"expiryDate\", \"value\": null}]}" +
            	"]"
            );

	public StringBuffer getBRBCardDataModelsJson()
	{
		return BRBCardDataModelsJson;
	}
}
