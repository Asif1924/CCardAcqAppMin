package com.ctfs.BRB.TestCase;

import java.lang.reflect.Type;
import java.util.Collection;
import java.util.List;

import org.junit.Ignore;
import org.junit.Assert;
import org.junit.Test;

import com.ctfs.BRB.Model.BaseModel;
import com.ctfs.BRB.Model.CreditCardApplicationData;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonSyntaxException;
import com.google.gson.reflect.TypeToken;

public class CreditCardApplicationDataHelperTest
{

	/*
	 *
	 * [{"model":"loginScreen","data":[{"name":"agentID","value":"epamfmr"},{"name"
	 * :"locationFieldID","value":"1234"}]},
	 * {"model":"chooseProductModel","data"
	 * :[{"name":"productCard","value":"OMP"}
	 * ,{"name":"agencyPromoCode","value":"p1"
	 * },{"name":"province","value":"ON"}]},
	 * {"model":"personalData","data":[{"name"
	 * :"placeofissue","value":"ON"},{"name"
	 * :"idtype","value":"PA"},{"name":"idnumbers"
	 * ,"value":"A34234213123213213"},
	 * {"name":"title","value":"MR"},{"name":"firstName"
	 * ,"value":"ASIF"},{"name":
	 * "initial","value":"M"},{"name":"lastName","value"
	 * :"ALLI"},{"name":"birthDate"
	 * ,"value":"1955-05-05"},{"name":"email","value"
	 * :"asifalli@rogers.com"},{"name"
	 * :"homePhone","value":"1231231231"},{"name":
	 * "cellPhone","value":"1231232132"
	 * },{"name":"correspondence","value":"E"}]},
	 * {"model":"personalData2_Address"
	 * ,"data":[{"name":"postalcode","value":"L9B0C2"
	 * },{"name":"streetnumber","value"
	 * :"12"},{"name":"addressline1","value":"MICHELANGELO LANE"
	 * },{"name":"addressline2"
	 * ,"value":""},{"name":"suiteunit","value":""},{"name"
	 * :"city","value":"HAMILTON"
	 * },{"name":"province","value":"ON"},{"name":"house"
	 * ,"value":"R"},{"name":"housingpayment"
	 * ,"value":"1232"},{"name":"years","value"
	 * :"4"},{"name":"months","value":""}
	 * ,{"name":"postalcode_prev","value":""},{
	 * "name":"streetnumber_prev","value"
	 * :""},{"name":"addressline1_prev","value"
	 * :""},{"name":"addressline2_prev","value"
	 * :""},{"name":"city_prev","value":""
	 * },{"name":"suiteunit_prev","value":""},
	 * {"name":"province_prev","value":null}]},
	 * {"model":"financialData","data":[
	 * {"name":"cardVISAMCAMEX","value":"N"},{"name"
	 * :"cardBankLoan","value":"N"},
	 * {"name":"cardStoreCard","value":"N"},{"name":
	 * "cardChequingAcct","value":"N"
	 * },{"name":"cardGasCard","value":"N"},{"name"
	 * :"cardSavingsAcct","value":"N"
	 * },{"name":"employmentType","value":"R"},{"name"
	 * :"jobTitle","value":""},{"name"
	 * :"jobCategory","value":null},{"name":"employerName"
	 * ,"value":""},{"name":"employerCity"
	 * ,"value":""},{"name":"employerProvince"
	 * ,"value":null},{"name":"employerPhone"
	 * ,"value":""},{"name":"howLongYears",
	 * "value":""},{"name":"howLongMonthes","value"
	 * :""},{"name":"grossIncome","value":"1,00"},{"name":"sin","value":""}]},
	 * {"model"
	 * :"supCardRequestData","data":[{"name":"cardYesNo","value":"N"},{"name"
	 * :"cardRequestFor"
	 * ,"value":null},{"name":"firstName","value":""},{"name":"lastName"
	 * ,"value":
	 * ""},{"name":"initial","value":""},{"name":"birthDate","value":""}
	 * ,{"name":
	 * "phone","value":""},{"name":"sameAddressYesNo","value":"Y"},{"name"
	 * :"postalCode"
	 * ,"value":""},{"name":"streetNumber","value":""},{"name":"addressLine1"
	 * ,"value"
	 * :""},{"name":"addressLine2","value":""},{"name":"suiteUnit","value"
	 * :""},{"name":"city","value":""},{"name":"province","value":null}]},
	 * {"model"
	 * :"signatureModel","data":[{"name":"userAcceptAgreement","value":"Y"
	 * },{"name":"userSingnature","value":""}]}]
	 */

	@Test @Ignore
	public void test_that_CreditCardApplicationData_can_unmarshal_requestBodyString_with_loginScreen_to_BaseModel_representation_of_loginScreen()
	{
		String requestDataString = "";
		requestDataString += "[{\"model\":\"loginScreen\",\"data\":[{\"name\":\"agentID\",\"value\":\"epamfmr\"},{\"name\":\"locationFieldID\",\"value\":\"1234\"}]},";
		requestDataString += "{\"model\":\"chooseProductModel\",\"data\":[{\"name\":\"productCard\",\"value\":\"OMP\"},{\"name\":\"agencyPromoCode\",\"value\":\"p1\"},{\"name\":\"province\",\"value\":\"ON\"}]},";
		requestDataString += "{\"model\":\"personalData\",\"data\":[{\"name\":\"placeofissue\",\"value\":\"ON\"},{\"name\":\"idtype\",\"value\":\"PA\"},{\"name\":\"idnumbers\",\"value\":\"A34234213123213213\"},{\"name\":\"title\",\"value\":\"MR\"},{\"name\":\"firstName\",\"value\":\"ASIF\"},{\"name\":\"initial\",\"value\":\"M\"},{\"name\":\"lastName\",\"value\":\"ALLI\"},{\"name\":\"birthDate\",\"value\":\"1955-05-05\"},{\"name\":\"email\",\"value\":\"asifalli@rogers.com\"},{\"name\":\"homePhone\",\"value\":\"1231231231\"},{\"name\":\"cellPhone\",\"value\":\"1231232132\"},{\"name\":\"correspondence\",\"value\":\"E\"}]},";
		requestDataString += "{\"model\":\"personalData2_Address\",\"data\":[{\"name\":\"postalcode\",\"value\":\"L9B0C2\"},{\"name\":\"streetnumber\",\"value\":\"12\"},{\"name\":\"addressline1\",\"value\":\"MICHELANGELO LANE\"},{\"name\":\"addressline2\",\"value\":\"\"},{\"name\":\"suiteunit\",\"value\":\"\"},{\"name\":\"city\",\"value\":\"HAMILTON\"},{\"name\":\"province\",\"value\":\"ON\"},{\"name\":\"house\",\"value\":\"R\"},{\"name\":\"housingpayment\",\"value\":\"1232\"},{\"name\":\"years\",\"value\":\"4\"},{\"name\":\"months\",\"value\":\"\"},{\"name\":\"postalcode_prev\",\"value\":\"\"},{\"name\":\"streetnumber_prev\",\"value\":\"\"},{\"name\":\"addressline1_prev\",\"value\":\"\"},{\"name\":\"addressline2_prev\",\"value\":\"\"},{\"name\":\"city_prev\",\"value\":\"\"},{\"name\":\"suiteunit_prev\",\"value\":\"\"},{\"name\":\"province_prev\",\"value\":null}]},";
		requestDataString += "{\"model\":\"financialData\",\"data\":[{\"name\":\"cardVISAMCAMEX\",\"value\":\"N\"},{\"name\":\"cardBankLoan\",\"value\":\"N\"},{\"name\":\"cardStoreCard\",\"value\":\"N\"},{\"name\":\"cardChequingAcct\",\"value\":\"N\"},{\"name\":\"cardGasCard\",\"value\":\"N\"},{\"name\":\"cardSavingsAcct\",\"value\":\"N\"},{\"name\":\"employmentType\",\"value\":\"R\"},{\"name\":\"jobTitle\",\"value\":\"\"},{\"name\":\"jobCategory\",\"value\":null},{\"name\":\"employerName\",\"value\":\"\"},{\"name\":\"employerCity\",\"value\":\"\"},{\"name\":\"employerProvince\",\"value\":null},{\"name\":\"employerPhone\",\"value\":\"\"},{\"name\":\"howLongYears\",\"value\":\"\"},{\"name\":\"howLongMonthes\",\"value\":\"\"},{\"name\":\"grossIncome\",\"value\":\"1,00\"},{\"name\":\"sin\",\"value\":\"\"}]},";
		requestDataString += "{\"model\":\"supCardRequestData\",\"data\":[{\"name\":\"cardYesNo\",\"value\":\"N\"},{\"name\":\"cardRequestFor\",\"value\":null},{\"name\":\"firstName\",\"value\":\"\"},{\"name\":\"lastName\",\"value\":\"\"},{\"name\":\"initial\",\"value\":\"\"},{\"name\":\"birthDate\",\"value\":\"\"},{\"name\":\"phone\",\"value\":\"\"},{\"name\":\"sameAddressYesNo\",\"value\":\"Y\"},{\"name\":\"postalCode\",\"value\":\"\"},{\"name\":\"streetNumber\",\"value\":\"\"},{\"name\":\"addressLine1\",\"value\":\"\"},{\"name\":\"addressLine2\",\"value\":\"\"},{\"name\":\"suiteUnit\",\"value\":\"\"},{\"name\":\"city\",\"value\":\"\"},{\"name\":\"province\",\"value\":null}]},";
		requestDataString += "{\"model\":\"signatureModel\",\"data\":[{\"name\":\"userAcceptAgreement\",\"value\":\"Y\"},{\"name\":\"userSingnature\",\"value\":\"\"}]}]";

		StringBuffer requestDataStringBuffer = new StringBuffer(requestDataString);
		BaseModel loginModel = new BaseModel();
		//CreditCardApplicationData sut = new CreditCardApplicationData(requestDataStringBuffer);

		//loginModel = sut.getModel("loginScreen");

		Assert.assertEquals(loginModel.model, "loginScreen");
		Assert.assertEquals(loginModel.get("agentID"), "epamfmr");
		Assert.assertEquals(loginModel.get("locationFieldID"), "1234");

	}
	
	@Test @Ignore
	public void test_that_CreditCardApplicationData_can_deserialize_list_of_models_into_string()
	{
		StringBuffer		accountApplicationDataOnly = new StringBuffer();
		accountApplicationDataOnly.append("[{\"model\":\"overview\",\"data\":[{\"name\":\"provinces\",\"value\":\"NS\"}]},{\"model\":\"personalInformation\",\"data\":[{\"name\":\"title\",\"value\":\"MR\"},{\"name\":\"loyaltyMembershipNumber\",\"value\":\"6365742222222222\"},{\"name\":\"firstName\",\"value\":\"BREDITU\"},{\"name\":\"lastName\",\"value\":\"PERIWINKLE\"},{\"name\":\"birthDate\",\"value\":\"1970-4-17\"},{\"name\":\"email\",\"value\":\"ASIFALLI@ROGERS.COM\"},{\"name\":\"receiveEmail\",\"value\":\"Y\"},{\"name\":\"correspondence\",\"value\":\"E\"},{\"name\":\"primaryPhone\",\"value\":\"4039674216\"},{\"name\":\"streetnumber\",\"value\":\"1\"},{\"name\":\"addressline1\",\"value\":\"LEACOCK COURT\"},{\"name\":\"city\",\"value\":\"DARTMOUTH\"},{\"name\":\"province\",\"value\":\"NS\"},{\"name\":\"postalcode\",\"value\":\"B2W4J4\"},{\"name\":\"house\",\"value\":\"O\"},{\"name\":\"housingpayment\",\"value\":\"213\"},{\"name\":\"sinceYears\",\"value\":\"2009\"},{\"name\":\"sinceMonths\",\"value\":\"4\"},{\"name\":\"isPrevAddressExist\",\"value\":false},{\"name\":\"employmentType\",\"value\":\"F\"},{\"name\":\"employerName\",\"value\":\"CTFS\"},{\"name\":\"employerCity\",\"value\":\"OAKVILLE\"},{\"name\":\"jobTitle\",\"value\":\"MA\"},{\"name\":\"jobDescription\",\"value\":\"MANAGER\"},{\"name\":\"howLongYears\",\"value\":\"2009\"},{\"name\":\"howLongMonthes\",\"value\":\"11\"},{\"name\":\"grossIncome\",\"value\":\"123213\"},{\"name\":\"cardVISAMCAMEX\",\"value\":\"N\"},{\"name\":\"cardBankLoan\",\"value\":\"N\"},{\"name\":\"cardStoreCard\",\"value\":\"N\"},{\"name\":\"cardChequingAcct\",\"value\":\"N\"},{\"name\":\"cardGasCard\",\"value\":\"N\"},{\"name\":\"cardSavingsAcct\",\"value\":\"N\"},{\"name\":\"isAnyBankingProducts\",\"value\":false}]},{\"model\":\"additionalInformation\",\"data\":[{\"name\":\"suplementaryYesNo\",\"value\":false},{\"name\":\"sameAddressArea\",\"value\":\"Y\"},{\"name\":\"optionalInsurance_CP\",\"value\":false},{\"name\":\"optionalInsurance_IW\",\"value\":false},{\"name\":\"optionalInsurance_PA\",\"value\":false}]},{\"model\":\"confirmation\",\"data\":[{\"name\":\"applicationAuthorizationYesNo\",\"value\":true},{\"name\":\"updateCTProfileYesNo\",\"value\":true}]}]");
		
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		
		JsonElement jelem = gson.fromJson(accountApplicationDataOnly.toString(),JsonElement.class);
		List<BaseModel> models = null;
		try
		{
			String json = accountApplicationDataOnly.toString();
			Type collectionType = new TypeToken<Collection<BaseModel>>(){}.getType();
			models = gson.fromJson(json, collectionType);

		}
		catch (JsonSyntaxException e)
		{
			e.printStackTrace();
		}
		
		CreditCardApplicationData ccData = new CreditCardApplicationData(models,null,null);
		
		Assert.assertEquals("NS", ccData.getModel("overview").get("provinces"));
	}	
	/*
	@Test
	public void test_that_CreditCardApplicationData_can_unmarshal_requestBodyString_with_chooseProductModel_to_BaseModel_representation_of_chooseProductModel()
	{
		String requestDataString = "";
		requestDataString += "[{\"model\":\"loginScreen\",\"data\":[{\"name\":\"agentID\",\"value\":\"epamfmr\"},{\"name\":\"locationFieldID\",\"value\":\"1234\"}]},";
		requestDataString += "{\"model\":\"chooseProductModel\",\"data\":[{\"name\":\"productCard\",\"value\":\"OMP\"},{\"name\":\"agencyPromoCode\",\"value\":\"p1\"},{\"name\":\"province\",\"value\":\"ON\"}]},";
		requestDataString += "{\"model\":\"personalData\",\"data\":[{\"name\":\"placeofissue\",\"value\":\"ON\"},{\"name\":\"idtype\",\"value\":\"PA\"},{\"name\":\"idnumbers\",\"value\":\"A34234213123213213\"},{\"name\":\"title\",\"value\":\"MR\"},{\"name\":\"firstName\",\"value\":\"ASIF\"},{\"name\":\"initial\",\"value\":\"M\"},{\"name\":\"lastName\",\"value\":\"ALLI\"},{\"name\":\"birthDate\",\"value\":\"1955-05-05\"},{\"name\":\"email\",\"value\":\"asifalli@rogers.com\"},{\"name\":\"homePhone\",\"value\":\"1231231231\"},{\"name\":\"cellPhone\",\"value\":\"1231232132\"},{\"name\":\"correspondence\",\"value\":\"E\"}]},";
		requestDataString += "{\"model\":\"personalData2_Address\",\"data\":[{\"name\":\"postalcode\",\"value\":\"L9B0C2\"},{\"name\":\"streetnumber\",\"value\":\"12\"},{\"name\":\"addressline1\",\"value\":\"MICHELANGELO LANE\"},{\"name\":\"addressline2\",\"value\":\"\"},{\"name\":\"suiteunit\",\"value\":\"\"},{\"name\":\"city\",\"value\":\"HAMILTON\"},{\"name\":\"province\",\"value\":\"ON\"},{\"name\":\"house\",\"value\":\"R\"},{\"name\":\"housingpayment\",\"value\":\"1232\"},{\"name\":\"years\",\"value\":\"4\"},{\"name\":\"months\",\"value\":\"\"},{\"name\":\"postalcode_prev\",\"value\":\"\"},{\"name\":\"streetnumber_prev\",\"value\":\"\"},{\"name\":\"addressline1_prev\",\"value\":\"\"},{\"name\":\"addressline2_prev\",\"value\":\"\"},{\"name\":\"city_prev\",\"value\":\"\"},{\"name\":\"suiteunit_prev\",\"value\":\"\"},{\"name\":\"province_prev\",\"value\":null}]},";
		requestDataString += "{\"model\":\"financialData\",\"data\":[{\"name\":\"cardVISAMCAMEX\",\"value\":\"N\"},{\"name\":\"cardBankLoan\",\"value\":\"N\"},{\"name\":\"cardStoreCard\",\"value\":\"N\"},{\"name\":\"cardChequingAcct\",\"value\":\"N\"},{\"name\":\"cardGasCard\",\"value\":\"N\"},{\"name\":\"cardSavingsAcct\",\"value\":\"N\"},{\"name\":\"employmentType\",\"value\":\"R\"},{\"name\":\"jobTitle\",\"value\":\"\"},{\"name\":\"jobCategory\",\"value\":null},{\"name\":\"employerName\",\"value\":\"\"},{\"name\":\"employerCity\",\"value\":\"\"},{\"name\":\"employerProvince\",\"value\":null},{\"name\":\"employerPhone\",\"value\":\"\"},{\"name\":\"howLongYears\",\"value\":\"\"},{\"name\":\"howLongMonthes\",\"value\":\"\"},{\"name\":\"grossIncome\",\"value\":\"1,00\"},{\"name\":\"sin\",\"value\":\"\"}]},";
		requestDataString += "{\"model\":\"supCardRequestData\",\"data\":[{\"name\":\"cardYesNo\",\"value\":\"N\"},{\"name\":\"cardRequestFor\",\"value\":null},{\"name\":\"firstName\",\"value\":\"\"},{\"name\":\"lastName\",\"value\":\"\"},{\"name\":\"initial\",\"value\":\"\"},{\"name\":\"birthDate\",\"value\":\"\"},{\"name\":\"phone\",\"value\":\"\"},{\"name\":\"sameAddressYesNo\",\"value\":\"Y\"},{\"name\":\"postalCode\",\"value\":\"\"},{\"name\":\"streetNumber\",\"value\":\"\"},{\"name\":\"addressLine1\",\"value\":\"\"},{\"name\":\"addressLine2\",\"value\":\"\"},{\"name\":\"suiteUnit\",\"value\":\"\"},{\"name\":\"city\",\"value\":\"\"},{\"name\":\"province\",\"value\":null}]},";
		requestDataString += "{\"model\":\"signatureModel\",\"data\":[{\"name\":\"userAcceptAgreement\",\"value\":\"Y\"},{\"name\":\"userSingnature\",\"value\":\"\"}]}]";

		StringBuffer requestDataStringBuffer = new StringBuffer(requestDataString);
		BaseModel chooseProductModel = new BaseModel();
		CreditCardApplicationData sut = new CreditCardApplicationData(requestDataStringBuffer);

		chooseProductModel = sut.getModel("chooseProductModel");

		Assert.assertEquals(chooseProductModel.model, "chooseProductModel");
		Assert.assertEquals(chooseProductModel.get("productCard"), "OMP");
		Assert.assertEquals(chooseProductModel.get("agencyPromoCode"), "p1");
		Assert.assertEquals(chooseProductModel.get("province"), "ON");
	}

	@Test
	public void test_that_CreditCardApplicationData_can_unmarshal_requestBodyString_with_personalData_to_BaseModel_representation_of_personalData()
	{
		String requestDataString = "";
		requestDataString += "[{\"model\":\"loginScreen\",\"data\":[{\"name\":\"agentID\",\"value\":\"epamfmr\"},{\"name\":\"locationFieldID\",\"value\":\"1234\"}]},";
		requestDataString += "{\"model\":\"chooseProductModel\",\"data\":[{\"name\":\"productCard\",\"value\":\"OMP\"},{\"name\":\"agencyPromoCode\",\"value\":\"p1\"},{\"name\":\"province\",\"value\":\"ON\"}]},";
		requestDataString += "{\"model\":\"personalData\",\"data\":[{\"name\":\"placeofissue\",\"value\":\"ON\"},{\"name\":\"idtype\",\"value\":\"PA\"},{\"name\":\"idnumbers\",\"value\":\"A34234213123213213\"},{\"name\":\"title\",\"value\":\"MR\"},{\"name\":\"firstName\",\"value\":\"ASIF\"},{\"name\":\"initial\",\"value\":\"M\"},{\"name\":\"lastName\",\"value\":\"ALLI\"},{\"name\":\"birthDate\",\"value\":\"1955-05-05\"},{\"name\":\"email\",\"value\":\"asifalli@rogers.com\"},{\"name\":\"homePhone\",\"value\":\"1231231231\"},{\"name\":\"cellPhone\",\"value\":\"1231232132\"},{\"name\":\"correspondence\",\"value\":\"E\"}]},";
		requestDataString += "{\"model\":\"personalData2_Address\",\"data\":[{\"name\":\"postalcode\",\"value\":\"L9B0C2\"},{\"name\":\"streetnumber\",\"value\":\"12\"},{\"name\":\"addressline1\",\"value\":\"MICHELANGELO LANE\"},{\"name\":\"addressline2\",\"value\":\"\"},{\"name\":\"suiteunit\",\"value\":\"\"},{\"name\":\"city\",\"value\":\"HAMILTON\"},{\"name\":\"province\",\"value\":\"ON\"},{\"name\":\"house\",\"value\":\"R\"},{\"name\":\"housingpayment\",\"value\":\"1232\"},{\"name\":\"years\",\"value\":\"4\"},{\"name\":\"months\",\"value\":\"\"},{\"name\":\"postalcode_prev\",\"value\":\"\"},{\"name\":\"streetnumber_prev\",\"value\":\"\"},{\"name\":\"addressline1_prev\",\"value\":\"\"},{\"name\":\"addressline2_prev\",\"value\":\"\"},{\"name\":\"city_prev\",\"value\":\"\"},{\"name\":\"suiteunit_prev\",\"value\":\"\"},{\"name\":\"province_prev\",\"value\":null}]},";
		requestDataString += "{\"model\":\"financialData\",\"data\":[{\"name\":\"cardVISAMCAMEX\",\"value\":\"N\"},{\"name\":\"cardBankLoan\",\"value\":\"N\"},{\"name\":\"cardStoreCard\",\"value\":\"N\"},{\"name\":\"cardChequingAcct\",\"value\":\"N\"},{\"name\":\"cardGasCard\",\"value\":\"N\"},{\"name\":\"cardSavingsAcct\",\"value\":\"N\"},{\"name\":\"employmentType\",\"value\":\"R\"},{\"name\":\"jobTitle\",\"value\":\"\"},{\"name\":\"jobCategory\",\"value\":null},{\"name\":\"employerName\",\"value\":\"\"},{\"name\":\"employerCity\",\"value\":\"\"},{\"name\":\"employerProvince\",\"value\":null},{\"name\":\"employerPhone\",\"value\":\"\"},{\"name\":\"howLongYears\",\"value\":\"\"},{\"name\":\"howLongMonthes\",\"value\":\"\"},{\"name\":\"grossIncome\",\"value\":\"1,00\"},{\"name\":\"sin\",\"value\":\"\"}]},";
		requestDataString += "{\"model\":\"supCardRequestData\",\"data\":[{\"name\":\"cardYesNo\",\"value\":\"N\"},{\"name\":\"cardRequestFor\",\"value\":null},{\"name\":\"firstName\",\"value\":\"\"},{\"name\":\"lastName\",\"value\":\"\"},{\"name\":\"initial\",\"value\":\"\"},{\"name\":\"birthDate\",\"value\":\"\"},{\"name\":\"phone\",\"value\":\"\"},{\"name\":\"sameAddressYesNo\",\"value\":\"Y\"},{\"name\":\"postalCode\",\"value\":\"\"},{\"name\":\"streetNumber\",\"value\":\"\"},{\"name\":\"addressLine1\",\"value\":\"\"},{\"name\":\"addressLine2\",\"value\":\"\"},{\"name\":\"suiteUnit\",\"value\":\"\"},{\"name\":\"city\",\"value\":\"\"},{\"name\":\"province\",\"value\":null}]},";
		requestDataString += "{\"model\":\"signatureModel\",\"data\":[{\"name\":\"userAcceptAgreement\",\"value\":\"Y\"},{\"name\":\"userSingnature\",\"value\":\"\"}]}]";

		StringBuffer requestDataStringBuffer = new StringBuffer(requestDataString);
		BaseModel personalData = new BaseModel();
		CreditCardApplicationData sut = new CreditCardApplicationData(requestDataStringBuffer);

		personalData = sut.getModel("personalData");

		Assert.assertEquals(personalData.model, "personalData");
		Assert.assertEquals(personalData.get("placeofissue"), "ON");
		Assert.assertEquals(personalData.get("idtype"), "PA");
		Assert.assertEquals(personalData.get("idnumbers"), "A34234213123213213");
		Assert.assertEquals(personalData.get("title"), "MR");
		Assert.assertEquals(personalData.get("firstName"), "ASIF");
		Assert.assertEquals(personalData.get("initial"), "M");
		Assert.assertEquals(personalData.get("lastName"), "ALLI");
		Assert.assertEquals(personalData.get("birthDate"), "1955-05-05");
		Assert.assertEquals(personalData.get("email"), "asifalli@rogers.com");
		Assert.assertEquals(personalData.get("homePhone"), "1231231231");
		Assert.assertEquals(personalData.get("cellPhone"), "1231232132");
		Assert.assertEquals(personalData.get("correspondence"), "E");
	}

	@Test
	public void test_that_CreditCardApplicationData_can_unmarshal_requestBodyString_with_personalData2_to_BaseModel_representation_of_personalData2()
	{
		String requestDataString = "";
		requestDataString += "[{\"model\":\"loginScreen\",\"data\":[{\"name\":\"agentID\",\"value\":\"epamfmr\"},{\"name\":\"locationFieldID\",\"value\":\"1234\"}]},";
		requestDataString += "{\"model\":\"chooseProductModel\",\"data\":[{\"name\":\"productCard\",\"value\":\"OMP\"},{\"name\":\"agencyPromoCode\",\"value\":\"p1\"},{\"name\":\"province\",\"value\":\"ON\"}]},";
		requestDataString += "{\"model\":\"personalData\",\"data\":[{\"name\":\"placeofissue\",\"value\":\"ON\"},{\"name\":\"idtype\",\"value\":\"PA\"},{\"name\":\"idnumbers\",\"value\":\"A34234213123213213\"},{\"name\":\"title\",\"value\":\"MR\"},{\"name\":\"firstName\",\"value\":\"ASIF\"},{\"name\":\"initial\",\"value\":\"M\"},{\"name\":\"lastName\",\"value\":\"ALLI\"},{\"name\":\"birthDate\",\"value\":\"1955-05-05\"},{\"name\":\"email\",\"value\":\"asifalli@rogers.com\"},{\"name\":\"homePhone\",\"value\":\"1231231231\"},{\"name\":\"cellPhone\",\"value\":\"1231232132\"},{\"name\":\"correspondence\",\"value\":\"E\"}]},";
		requestDataString += "{\"model\":\"personalData2_Address\",\"data\":[{\"name\":\"postalcode\",\"value\":\"L9B0C2\"},{\"name\":\"streetnumber\",\"value\":\"12\"},{\"name\":\"addressline1\",\"value\":\"MICHELANGELO LANE\"},{\"name\":\"addressline2\",\"value\":\"\"},{\"name\":\"suiteunit\",\"value\":\"\"},{\"name\":\"city\",\"value\":\"HAMILTON\"},{\"name\":\"province\",\"value\":\"ON\"},{\"name\":\"house\",\"value\":\"R\"},{\"name\":\"housingpayment\",\"value\":\"1232\"},{\"name\":\"years\",\"value\":\"4\"},{\"name\":\"months\",\"value\":\"\"},{\"name\":\"postalcode_prev\",\"value\":\"\"},{\"name\":\"streetnumber_prev\",\"value\":\"\"},{\"name\":\"addressline1_prev\",\"value\":\"\"},{\"name\":\"addressline2_prev\",\"value\":\"\"},{\"name\":\"city_prev\",\"value\":\"\"},{\"name\":\"suiteunit_prev\",\"value\":\"\"},{\"name\":\"province_prev\",\"value\":null}]},";
		requestDataString += "{\"model\":\"financialData\",\"data\":[{\"name\":\"cardVISAMCAMEX\",\"value\":\"N\"},{\"name\":\"cardBankLoan\",\"value\":\"N\"},{\"name\":\"cardStoreCard\",\"value\":\"N\"},{\"name\":\"cardChequingAcct\",\"value\":\"N\"},{\"name\":\"cardGasCard\",\"value\":\"N\"},{\"name\":\"cardSavingsAcct\",\"value\":\"N\"},{\"name\":\"employmentType\",\"value\":\"R\"},{\"name\":\"jobTitle\",\"value\":\"\"},{\"name\":\"jobCategory\",\"value\":null},{\"name\":\"employerName\",\"value\":\"\"},{\"name\":\"employerCity\",\"value\":\"\"},{\"name\":\"employerProvince\",\"value\":null},{\"name\":\"employerPhone\",\"value\":\"\"},{\"name\":\"howLongYears\",\"value\":\"\"},{\"name\":\"howLongMonthes\",\"value\":\"\"},{\"name\":\"grossIncome\",\"value\":\"1,00\"},{\"name\":\"sin\",\"value\":\"\"}]},";
		requestDataString += "{\"model\":\"supCardRequestData\",\"data\":[{\"name\":\"cardYesNo\",\"value\":\"N\"},{\"name\":\"cardRequestFor\",\"value\":null},{\"name\":\"firstName\",\"value\":\"\"},{\"name\":\"lastName\",\"value\":\"\"},{\"name\":\"initial\",\"value\":\"\"},{\"name\":\"birthDate\",\"value\":\"\"},{\"name\":\"phone\",\"value\":\"\"},{\"name\":\"sameAddressYesNo\",\"value\":\"Y\"},{\"name\":\"postalCode\",\"value\":\"\"},{\"name\":\"streetNumber\",\"value\":\"\"},{\"name\":\"addressLine1\",\"value\":\"\"},{\"name\":\"addressLine2\",\"value\":\"\"},{\"name\":\"suiteUnit\",\"value\":\"\"},{\"name\":\"city\",\"value\":\"\"},{\"name\":\"province\",\"value\":null}]},";
		requestDataString += "{\"model\":\"signatureModel\",\"data\":[{\"name\":\"userAcceptAgreement\",\"value\":\"Y\"},{\"name\":\"userSingnature\",\"value\":\"\"}]}]";

		StringBuffer requestDataStringBuffer = new StringBuffer(requestDataString);
		BaseModel personalData2_Address = new BaseModel();
		CreditCardApplicationData sut = new CreditCardApplicationData(requestDataStringBuffer);

		personalData2_Address = sut.getModel("personalData2_Address");

		Assert.assertEquals(personalData2_Address.model, "personalData2_Address");
		Assert.assertEquals(personalData2_Address.get("postalcode"), "L9B0C2");
		Assert.assertEquals(personalData2_Address.get("streetnumber"), "12");
		Assert.assertEquals(personalData2_Address.get("addressline1"), "MICHELANGELO LANE");
		Assert.assertEquals(personalData2_Address.get("addressline2"), "");
		Assert.assertEquals(personalData2_Address.get("suiteunit"), "");
		Assert.assertEquals(personalData2_Address.get("city"), "HAMILTON");
		Assert.assertEquals(personalData2_Address.get("province"), "ON");
		Assert.assertEquals(personalData2_Address.get("house"), "R");
		Assert.assertEquals(personalData2_Address.get("housingpayment"), "1232");
		Assert.assertEquals(personalData2_Address.get("years"), "4");
		Assert.assertEquals(personalData2_Address.get("months"), "");
		Assert.assertEquals(personalData2_Address.get("postalcode_prev"), "");
		Assert.assertEquals(personalData2_Address.get("streetnumber_prev"), "");
		Assert.assertEquals(personalData2_Address.get("addressline1_prev"), "");
		Assert.assertEquals(personalData2_Address.get("addressline2_prev"), "");
		Assert.assertEquals(personalData2_Address.get("city_prev"), "");
		Assert.assertEquals(personalData2_Address.get("suiteunit_prev"), "");
		Assert.assertEquals(personalData2_Address.get("province_prev"), null);
	}

	@Test
	public void test_that_CreditCardApplicationData_can_unmarshal_requestBodyString_with_financialData_to_BaseModel_representation_of_financialData()
	{
		String requestDataString = "";
		requestDataString += "[{\"model\":\"loginScreen\",\"data\":[{\"name\":\"agentID\",\"value\":\"epamfmr\"},{\"name\":\"locationFieldID\",\"value\":\"1234\"}]},";
		requestDataString += "{\"model\":\"chooseProductModel\",\"data\":[{\"name\":\"productCard\",\"value\":\"OMP\"},{\"name\":\"agencyPromoCode\",\"value\":\"p1\"},{\"name\":\"province\",\"value\":\"ON\"}]},";
		requestDataString += "{\"model\":\"personalData\",\"data\":[{\"name\":\"placeofissue\",\"value\":\"ON\"},{\"name\":\"idtype\",\"value\":\"PA\"},{\"name\":\"idnumbers\",\"value\":\"A34234213123213213\"},{\"name\":\"title\",\"value\":\"MR\"},{\"name\":\"firstName\",\"value\":\"ASIF\"},{\"name\":\"initial\",\"value\":\"M\"},{\"name\":\"lastName\",\"value\":\"ALLI\"},{\"name\":\"birthDate\",\"value\":\"1955-05-05\"},{\"name\":\"email\",\"value\":\"asifalli@rogers.com\"},{\"name\":\"homePhone\",\"value\":\"1231231231\"},{\"name\":\"cellPhone\",\"value\":\"1231232132\"},{\"name\":\"correspondence\",\"value\":\"E\"}]},";
		requestDataString += "{\"model\":\"personalData2_Address\",\"data\":[{\"name\":\"postalcode\",\"value\":\"L9B0C2\"},{\"name\":\"streetnumber\",\"value\":\"12\"},{\"name\":\"addressline1\",\"value\":\"MICHELANGELO LANE\"},{\"name\":\"addressline2\",\"value\":\"\"},{\"name\":\"suiteunit\",\"value\":\"\"},{\"name\":\"city\",\"value\":\"HAMILTON\"},{\"name\":\"province\",\"value\":\"ON\"},{\"name\":\"house\",\"value\":\"R\"},{\"name\":\"housingpayment\",\"value\":\"1232\"},{\"name\":\"years\",\"value\":\"4\"},{\"name\":\"months\",\"value\":\"\"},{\"name\":\"postalcode_prev\",\"value\":\"\"},{\"name\":\"streetnumber_prev\",\"value\":\"\"},{\"name\":\"addressline1_prev\",\"value\":\"\"},{\"name\":\"addressline2_prev\",\"value\":\"\"},{\"name\":\"city_prev\",\"value\":\"\"},{\"name\":\"suiteunit_prev\",\"value\":\"\"},{\"name\":\"province_prev\",\"value\":null}]},";
		requestDataString += "{\"model\":\"financialData\",\"data\":[{\"name\":\"cardVISAMCAMEX\",\"value\":\"N\"},{\"name\":\"cardBankLoan\",\"value\":\"N\"},{\"name\":\"N\",\"value\":\"N\"},{\"name\":\"cardChequingAcct\",\"value\":\"N\"},{\"name\":\"cardGasCard\",\"value\":\"N\"},{\"name\":\"cardSavingsAcct\",\"value\":\"N\"},{\"name\":\"employmentType\",\"value\":\"R\"},{\"name\":\"jobTitle\",\"value\":\"\"},{\"name\":\"jobCategory\",\"value\":null},{\"name\":\"employerName\",\"value\":\"\"},{\"name\":\"employerCity\",\"value\":\"\"},{\"name\":\"employerProvince\",\"value\":null},{\"name\":\"employerPhone\",\"value\":\"\"},{\"name\":\"howLongYears\",\"value\":\"\"},{\"name\":\"howLongMonthes\",\"value\":\"\"},{\"name\":\"grossIncome\",\"value\":\"1,00\"},{\"name\":\"sin\",\"value\":\"\"}]},";
		requestDataString += "{\"model\":\"supCardRequestData\",\"data\":[{\"name\":\"cardYesNo\",\"value\":\"N\"},{\"name\":\"cardRequestFor\",\"value\":null},{\"name\":\"firstName\",\"value\":\"\"},{\"name\":\"lastName\",\"value\":\"\"},{\"name\":\"initial\",\"value\":\"\"},{\"name\":\"birthDate\",\"value\":\"\"},{\"name\":\"phone\",\"value\":\"\"},{\"name\":\"sameAddressYesNo\",\"value\":\"Y\"},{\"name\":\"postalCode\",\"value\":\"\"},{\"name\":\"streetNumber\",\"value\":\"\"},{\"name\":\"addressLine1\",\"value\":\"\"},{\"name\":\"addressLine2\",\"value\":\"\"},{\"name\":\"suiteUnit\",\"value\":\"\"},{\"name\":\"city\",\"value\":\"\"},{\"name\":\"province\",\"value\":null}]},";
		requestDataString += "{\"model\":\"signatureModel\",\"data\":[{\"name\":\"userAcceptAgreement\",\"value\":\"Y\"},{\"name\":\"userSingnature\",\"value\":\"\"}]}]";

		StringBuffer requestDataStringBuffer = new StringBuffer(requestDataString);
		BaseModel financialData = new BaseModel();
		CreditCardApplicationData sut = new CreditCardApplicationData(requestDataStringBuffer);

		financialData = sut.getModel("financialData");

		Assert.assertEquals(financialData.model, "financialData");
		Assert.assertEquals(financialData.get("cardVISAMCAMEX"), "N");
		Assert.assertEquals(financialData.get("cardBankLoan"), "N");
		Assert.assertEquals(financialData.get("cardChequingAcct"), "N");
		Assert.assertEquals(financialData.get("cardGasCard"), "N");
		Assert.assertEquals(financialData.get("cardSavingsAcct"), "N");
		Assert.assertEquals(financialData.get("employmentType"), "R");
		Assert.assertEquals(financialData.get("jobTitle"), "");
		// Assert.assertEquals(financialData.get("jobCategory"), "");
		// //Problematic fields
		Assert.assertEquals(financialData.get("employerName"), "");
		Assert.assertEquals(financialData.get("employerCity"), "");
		// Assert.assertEquals(financialData.get("employerProvince"), "");
		// //Problematic fields
		Assert.assertEquals(financialData.get("employerPhone"), "");
		Assert.assertEquals(financialData.get("howLongYears"), "");
		Assert.assertEquals(financialData.get("howLongMonthes"), "");
		Assert.assertEquals(financialData.get("grossIncome"), "1,00");
		Assert.assertEquals(financialData.get("sin"), "");
	}*/

	/*
	 * @Test public void
	 * test_that_CreditCardApplicationData_can_unmarshal_HTTPServletRequest_with_chooseProductModel_to_BaseModel_representation_of_chooseProductModel
	 * (){ HttpServletRequest mockRequest = mock(HttpServletRequest.class);
	 *
	 * }
	 */
}
