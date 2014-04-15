package com.ctfs.BRB.TestCase.InputData;

public class ECommRequestData
{

	private final String BRBCardDataModelsJson = "{\"firstName\":\"BREDITU\","

	+ "\"lastName\":\"PERIWINKLE\","

	+ "\"phoneNumber\":\"1111111111\","

	+ "\"city\":\"DARTMOUTH\","
	
	+ "\"ecommCustomerId\":\"asdf\","
	
	+ "\"province\":\"NS\","

	+ "\"postalCode\":\"B2W4J4\","

	+ "\"email\":\"QW@QW.QW\","

	+ "\"addressLine1\":\"1, LEACOCK COURT\","

	+ "\"addressLine2\":\"123\","

	+ "\"transactionId\":\"13cd82d600ff495d9097e5b8632852751385549702770\","

	+ "\"correspondence\":\"E\","

	+ "\"maskedPan\":\"544612xxxxxx9619\","

	+ "\"expiryDate\":\"1711\","

	+ "\"apr\":\"19.99\","

	+ "\"creditLimit\":\"3000\","

	+ "\"optionalInsurance_CP\":false,"

	+ "\"optionalInsurance_IW\":false,"

	+ "\"optionalInsurance_PA\":false,"

	+ "\"optionalInsurance_NA\":true,"

	+ "\"shouldUpdateCTProfile\":true,"

	+ "\"TrackingScreenID\":11}";

	public String getBRBCardDataJson()
	{
		return BRBCardDataModelsJson;
	}

}
