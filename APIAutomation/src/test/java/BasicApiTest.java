import static org.testng.Assert.assertEquals;

import java.net.UnknownHostException;

import org.testng.annotations.Test;

import com.jayway.restassured.RestAssured;
import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.response.Response;

import utils.ExtentManager;

/**
 * Created by Selay on 19-Jul-19.
 */
public class BasicApiTest extends BaseTest{			
   
   @Test
    public void DeclinedWICIAppTest() {		
		String sMethod = "DeclinedWICIAppTest :: ";
	   
		String initRequestBody = "{\"accountApplicationData\":[{\"model\":\"queueModel\",\"data\":[]},{\"model\":\"loginScreen\",\"data\":[{\"name\":\"employerID\",\"value\":\"E\"},{\"name\":\"retailNetWork\",\"value\":\"CT\"},{\"name\":\"firstName\",\"value\":\"dev\"},{\"name\":\"lastName\",\"value\":\"test\"},{\"name\":\"locationFieldID\",\"value\":\"1\"},{\"name\":\"agentID\",\"value\":\"devtest\"}]},{\"model\":\"chooseProductModel\",\"data\":[{\"name\":\"productCard\",\"value\":\"OMX\"},{\"name\":\"agencyProgram\",\"value\":\"OTHER\"},{\"name\":\"agencyPromoCodeDropDown\",\"value\":\"OTHER\"},{\"name\":\"agencyPromoCode\",\"value\":\"CTR1\"},{\"name\":\"province\",\"value\":\"ON\"}]},{\"model\":\"personalData\",\"data\":[{\"name\":\"placeofissue\",\"value\":\"ON\"},{\"name\":\"idtype\",\"value\":\"BI\"},{\"name\":\"idnumbers\",\"value\":\"SAMPLETEST\"},{\"name\":\"title\",\"value\":\"MR\"},{\"name\":\"firstName\",\"value\":\"SELVA\"},{\"name\":\"lastName\",\"value\":\"KUMAR\"},{\"name\":\"birthDate\",\"value\":\"1989-08-08\"},{\"name\":\"age\",\"value\":29},{\"name\":\"homePhone\",\"value\":\"6786787687\"},{\"name\":\"cellPhone\",\"value\":\"6786787687\"},{\"name\":\"correspondence\",\"value\":\"E\"},{\"name\":\"homePhoneRadioGroup\",\"value\":true}]},{\"model\":\"personalData2_Address\",\"data\":[{\"name\":\"postalcode\",\"value\":\"A1A1A1\"},{\"name\":\"streetnumber\",\"value\":\"1\"},{\"name\":\"addressline1\",\"value\":\"LOWER BATTERY RD\"},{\"name\":\"city\",\"value\":\"ST. JOHN'S\"},{\"name\":\"province\",\"value\":\"NL\"},{\"name\":\"house\",\"value\":\"O\"},{\"name\":\"housingpayment\",\"value\":\"7686\"},{\"name\":\"years\",\"value\":\"8\"},{\"name\":\"flipPrevWasInCanada\",\"value\":\"Y\"}]},{\"model\":\"emailInfoScreen\",\"data\":[]},{\"model\":\"financialData\",\"data\":[{\"name\":\"employmentType\",\"value\":\"F\"},{\"name\":\"jobTitle\",\"value\":\"RETIRED\"},{\"name\":\"jobCategory\",\"value\":\"RT\"},{\"name\":\"employerName\",\"value\":\"RETIRED\"},{\"name\":\"employerCity\",\"value\":\"ST. JOHN'S\"},{\"name\":\"howLongYears\",\"value\":99},{\"name\":\"grossIncome\",\"value\":\"576567\"}]},{\"model\":\"supCardRequestData\",\"data\":[{\"name\":\"cardYesNo\",\"value\":\"N\"},{\"name\":\"sameAddressYesNo\",\"value\":\"Y\"}]},{\"model\":\"signatureModel\",\"data\":[{\"name\":\"userAcceptAgreement\",\"value\":\"Y\"},{\"name\":\"userSingnature\",\"value\":\"data:image/png;base64,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\"},{\"name\":\"signDate\",\"value\":\"2019-07-25\"}]},{\"model\":\"OptionalProductsModel\",\"data\":[]},{\"model\":\"mobilePaymentsScreen\",\"data\":[{\"name\":\"androidPayCheckField\",\"value\":\"N\"},{\"name\":\"applePaycheckField\",\"value\":\"N\"},{\"name\":\"noThanksCheckField\",\"value\":\"Y\"},{\"name\":\"consentGranted\",\"value\":\"N\"}]},{\"model\":\"summaryData\",\"data\":[{\"name\":\"summaryFirstName\",\"value\":\"dev\"},{\"name\":\"summaryLastName\",\"value\":\"test\"}]}],\"authfieldValue\":{\"MfgSerial\":\"SCOOBY\",\"BuildSerial\":\"123213123213\"}}";
		String pollRequestBody = null;
		String appStatus = null;
		String transactionID = null;
		Response initResponse = null;
		Response pollResponse = null;

		try {
			initResponse = RestAssured.given()
					.contentType(ContentType.JSON)
					.body(initRequestBody)
					.post("/InitAccountApplication");
		} catch (Exception e) {
			e.printStackTrace();
		}
		transactionID = initResponse.jsonPath().get("data");
		
		System.out.println(sMethod + "Init Response : " + initResponse.asString());
		System.out.println(sMethod + "Init Response Transaction ID : " + transactionID);
		
		try {
			System.out.println(sMethod + "Initwait");
			Thread.sleep(20000);
		} catch (InterruptedException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		if(transactionID != null) {
			pollRequestBody = "{\"transactionID\":\""
					+ transactionID
					+ "\",\"action\":\"retrieve\",\"authfieldValue\":{\"MfgSerial\":\"SCOOBY\",\"BuildSerial\":\"123213123213\"}}";
			
			System.out.println(sMethod + "Poll RequestBody : " + pollRequestBody);
			
			try {
				pollResponse = RestAssured.given()
						.contentType(ContentType.JSON)
						.body(pollRequestBody)
						.post("/PollAccountApplicationResponse");
			} catch (Exception e) {
				e.printStackTrace();
			}
		}		

		appStatus = pollResponse.jsonPath().get("data.ResponseData.data.appStatus");
		
		System.out.println(sMethod + "Poll Response : " + pollResponse.asString());		
		System.out.println(sMethod + "App Status : " + appStatus);
		
		testUtils.checkStatusIs200(initResponse);
		testUtils.checkStatusIs200(pollResponse);
		assertEquals("DECLINED", appStatus, "DECLINED Status Check Failed!");
	}
   
   @Test
   public void PendingWICIAppTest() {
	    String sMethod = "PendingWICIAppTest :: ";

     	String initRequestBody = "{\"accountApplicationData\":[{\"model\":\"queueModel\",\"data\":[]},{\"model\":\"loginScreen\",\"data\":[{\"name\":\"employerID\",\"value\":\"E\"},{\"name\":\"retailNetWork\",\"value\":\"CT\"},{\"name\":\"firstName\",\"value\":\"dev\"},{\"name\":\"lastName\",\"value\":\"test\"},{\"name\":\"locationFieldID\",\"value\":\"1\"},{\"name\":\"agentID\",\"value\":\"devtest\"}]},{\"model\":\"chooseProductModel\",\"data\":[{\"name\":\"productCard\",\"value\":\"OMX\"},{\"name\":\"agencyProgram\",\"value\":\"OTHER\"},{\"name\":\"agencyPromoCodeDropDown\",\"value\":\"OTHER\"},{\"name\":\"agencyPromoCode\",\"value\":\"CTR1\"},{\"name\":\"province\",\"value\":\"ON\"}]},{\"model\":\"personalData\",\"data\":[{\"name\":\"placeofissue\",\"value\":\"ON\"},{\"name\":\"idtype\",\"value\":\"BI\"},{\"name\":\"idnumbers\",\"value\":\"SAMPLETEST\"},{\"name\":\"title\",\"value\":\"MR\"},{\"name\":\"firstName\",\"value\":\"JOHN\"},{\"name\":\"lastName\",\"value\":\"WISEMAN\"},{\"name\":\"birthDate\",\"value\":\"1989-08-08\"},{\"name\":\"age\",\"value\":29},{\"name\":\"homePhone\",\"value\":\"0786787687\"},{\"name\":\"cellPhone\",\"value\":\"0786787687\"},{\"name\":\"correspondence\",\"value\":\"E\"},{\"name\":\"homePhoneRadioGroup\",\"value\":true}]},{\"model\":\"personalData2_Address\",\"data\":[{\"name\":\"postalcode\",\"value\":\"A1A1A1\"},{\"name\":\"streetnumber\",\"value\":\"1\"},{\"name\":\"addressline1\",\"value\":\"LOWER BATTERY RD\"},{\"name\":\"city\",\"value\":\"ST. JOHN'S\"},{\"name\":\"province\",\"value\":\"NL\"},{\"name\":\"house\",\"value\":\"O\"},{\"name\":\"housingpayment\",\"value\":\"7686\"},{\"name\":\"years\",\"value\":\"8\"},{\"name\":\"flipPrevWasInCanada\",\"value\":\"Y\"}]},{\"model\":\"emailInfoScreen\",\"data\":[]},{\"model\":\"financialData\",\"data\":[{\"name\":\"employmentType\",\"value\":\"F\"},{\"name\":\"jobTitle\",\"value\":\"RETIRED\"},{\"name\":\"jobCategory\",\"value\":\"RT\"},{\"name\":\"employerName\",\"value\":\"RETIRED\"},{\"name\":\"employerCity\",\"value\":\"ST. JOHN'S\"},{\"name\":\"howLongYears\",\"value\":99},{\"name\":\"grossIncome\",\"value\":\"5567\"}]},{\"model\":\"supCardRequestData\",\"data\":[{\"name\":\"cardYesNo\",\"value\":\"N\"},{\"name\":\"sameAddressYesNo\",\"value\":\"Y\"}]},{\"model\":\"signatureModel\",\"data\":[{\"name\":\"userAcceptAgreement\",\"value\":\"Y\"},{\"name\":\"userSingnature\",\"value\":\"data:image/png;base64,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\"},{\"name\":\"signDate\",\"value\":\"2019-07-25\"}]},{\"model\":\"OptionalProductsModel\",\"data\":[]},{\"model\":\"mobilePaymentsScreen\",\"data\":[{\"name\":\"androidPayCheckField\",\"value\":\"N\"},{\"name\":\"applePaycheckField\",\"value\":\"N\"},{\"name\":\"noThanksCheckField\",\"value\":\"Y\"},{\"name\":\"consentGranted\",\"value\":\"N\"}]},{\"model\":\"summaryData\",\"data\":[{\"name\":\"summaryFirstName\",\"value\":\"dev\"},{\"name\":\"summaryLastName\",\"value\":\"test\"}]}],\"authfieldValue\":{\"MfgSerial\":\"SCOOBY\",\"BuildSerial\":\"123213123213\"}}\n";
		String pollRequestBody = null;
		String appStatus = null;
		String transactionID = null;
		Response initResponse = null;
		Response pollResponse = null;

		try {
			initResponse = RestAssured.given()
					.contentType(ContentType.JSON)
					.body(initRequestBody)
					.post("/InitAccountApplication");
		} catch (Exception e) {
			e.printStackTrace();
		}
		transactionID = initResponse.jsonPath().get("data");
		
		System.out.println(sMethod + "Init Response : " + initResponse.asString());
		System.out.println(sMethod + "Init Response Transaction ID : " + transactionID);
		
		try {
			System.out.println(sMethod + "Initwait");
			Thread.sleep(20000);
		} catch (InterruptedException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		if(transactionID != null) {
			pollRequestBody = "{\"transactionID\":\""
					+ transactionID
					+ "\",\"action\":\"retrieve\",\"authfieldValue\":{\"MfgSerial\":\"SCOOBY\",\"BuildSerial\":\"123213123213\"}}";
			
			System.out.println("Poll RequestBody : " + pollRequestBody);
			
			try {
				pollResponse = RestAssured.given()
						.contentType(ContentType.JSON)
						.body(pollRequestBody)
						.post("/PollAccountApplicationResponse");
			} catch (Exception e) {
				e.printStackTrace();
			}
		}		
		
		System.out.println(sMethod + "Poll Response : " + pollResponse.asString());				
		
		appStatus = pollResponse.jsonPath().get("data.ResponseData.data.appStatus");
		System.out.println(sMethod + "App Status : " + appStatus);

		testUtils.checkStatusIs200(initResponse);
		testUtils.checkStatusIs200(pollResponse);
		assertEquals("PENDING", appStatus, "PENDING Status Check Failed!");
	}
   
   @Test
   public void ApprovedWICIAppTest() {
	   String sMethod = "ApprovedWICIAppTest :: ";

		String initRequestBody = "{\"accountApplicationData\":[{\"model\":\"queueModel\",\"data\":[]},{\"model\":\"loginScreen\",\"data\":[{\"name\":\"employerID\",\"value\":\"K\"},{\"name\":\"password\",\"value\":\"BRQBC7\"},{\"name\":\"locationFieldID\",\"value\":\"1\"},{\"name\":\"agentID\",\"value\":\"jesse1\"}]},{\"model\":\"chooseProductModel\",\"data\":[{\"name\":\"productCard\",\"value\":\"OMX\"},{\"name\":\"agencyProgram\",\"value\":\"Intercept\"},{\"name\":\"agencyPromoCodeDropDown\",\"value\":\"BLANK\"},{\"name\":\"province\",\"value\":\"ON\"}]},{\"model\":\"personalData\",\"data\":[{\"name\":\"placeofissue\",\"value\":\"ON\"},{\"name\":\"idtype\",\"value\":\"BI\"},{\"name\":\"idnumbers\",\"value\":\"SAMPLETEST\"},{\"name\":\"title\",\"value\":\"MR\"},{\"name\":\"firstName\",\"value\":\"SELVA\"},{\"name\":\"lastName\",\"value\":\"KUMAR\"},{\"name\":\"birthDate\",\"value\":\"1988-08-08\"},{\"name\":\"age\",\"value\":30},{\"name\":\"homePhone\",\"value\":\"9888888888\"},{\"name\":\"cellPhone\",\"value\":\"9888888888\"},{\"name\":\"correspondence\",\"value\":\"E\"},{\"name\":\"homePhoneRadioGroup\",\"value\":true}]},{\"model\":\"personalData2_Address\",\"data\":[{\"name\":\"postalcode\",\"value\":\"A1A1A1\"},{\"name\":\"streetnumber\",\"value\":\"1\"},{\"name\":\"addressline1\",\"value\":\"LOWER BATTERY RD\"},{\"name\":\"city\",\"value\":\"ST. JOHN'S\"},{\"name\":\"province\",\"value\":\"NL\"},{\"name\":\"house\",\"value\":\"O\"},{\"name\":\"housingpayment\",\"value\":\"6768\"},{\"name\":\"years\",\"value\":\"7\"},{\"name\":\"flipPrevWasInCanada\",\"value\":\"Y\"}]},{\"model\":\"emailInfoScreen\",\"data\":[{\"name\":\"email\",\"value\":\"CRES2ALLOWDIITTESTZZPV052017@CTFS.COM\"},{\"name\":\"receiveEmail\",\"value\":\"Y\"}]},{\"model\":\"financialData\",\"data\":[{\"name\":\"employmentType\",\"value\":\"F\"},{\"name\":\"jobTitle\",\"value\":\"RETIRED\"},{\"name\":\"jobCategory\",\"value\":\"RT\"},{\"name\":\"employerName\",\"value\":\"RETIRED\"},{\"name\":\"employerCity\",\"value\":\"ST. JOHN'S\"},{\"name\":\"howLongYears\",\"value\":99},{\"name\":\"grossIncome\",\"value\":\"888888\"}]},{\"model\":\"supCardRequestData\",\"data\":[{\"name\":\"cardYesNo\",\"value\":\"N\"},{\"name\":\"sameAddressYesNo\",\"value\":\"Y\"}]},{\"model\":\"signatureModel\",\"data\":[{\"name\":\"userAcceptAgreement\",\"value\":\"Y\"},{\"name\":\"userSingnature\",\"value\":\"data:image/png;base64,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\"},{\"name\":\"signDate\",\"value\":\"2019-07-25\"}]},{\"model\":\"OptionalProductsModel\",\"data\":[{\"name\":\"signDate\",\"value\":\"2019-07-25\"},{\"name\":\"insuranceCode\",\"value\":\"N\"},{\"name\":\"insuranceAgreedFlag\",\"value\":\"N\"}]},{\"model\":\"mobilePaymentsScreen\",\"data\":[{\"name\":\"androidPayCheckField\",\"value\":\"N\"},{\"name\":\"applePaycheckField\",\"value\":\"N\"},{\"name\":\"noThanksCheckField\",\"value\":\"Y\"},{\"name\":\"consentGranted\",\"value\":\"N\"}]},{\"model\":\"summaryData\",\"data\":[{\"name\":\"summaryAgentID\",\"value\":\"jesse1\"}]}],\"authfieldValue\":{\"MfgSerial\":\"SCOOBY\",\"BuildSerial\":\"123213123213\"}}";
		String pollRequestBody = null;
		String appStatus = null;
		String transactionID = null;
		Response initResponse = null;
		Response pollResponse = null;

		try {
			initResponse = RestAssured.given()
					.contentType(ContentType.JSON)
					.body(initRequestBody)
					.post("/InitAccountApplication");
		} catch (Exception e) {
			e.printStackTrace();
		}
		transactionID = initResponse.jsonPath().get("data");
		
		System.out.println(sMethod + "Init Response : " + initResponse.asString());
		System.out.println(sMethod + "Init Response Transaction ID : " + transactionID);
		
		try {
			System.out.println(sMethod + "Initwait");
			Thread.sleep(20000);
		} catch (InterruptedException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		if(transactionID != null) {
			pollRequestBody = "{\"transactionID\":\""
					+ transactionID
					+ "\",\"action\":\"retrieve\",\"authfieldValue\":{\"MfgSerial\":\"SCOOBY\",\"BuildSerial\":\"123213123213\"}}";
			
			System.out.println(sMethod + "Poll RequestBody : " + pollRequestBody);
			
			try {
				pollResponse = RestAssured.given()
						.contentType(ContentType.JSON)
						.body(pollRequestBody)
						.post("/PollAccountApplicationResponse");
			} catch (Exception e) {
				e.printStackTrace();
			}
		}		
		
		System.out.println(sMethod + "Poll Response : " + pollResponse.asString());						
		
		appStatus = pollResponse.jsonPath().get("data.ResponseData.data.appStatus");
		System.out.println(sMethod + "App Status : " + appStatus);
		
		/*
		 * try { ExtentManager.getInstance("C://Users//selay//"); } catch
		 * (UnknownHostException e) { // TODO Auto-generated catch block
		 * e.printStackTrace(); }
		 */

		testUtils.checkStatusIs200(initResponse);
		testUtils.checkStatusIs200(pollResponse);
		assertEquals("APPROVED", appStatus, "APPROVED Status Check Failed!");
	}

}




