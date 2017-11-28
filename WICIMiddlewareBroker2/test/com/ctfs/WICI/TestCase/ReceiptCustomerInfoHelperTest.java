package com.ctfs.WICI.TestCase;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;

import com.ctfs.WICI.Helper.ReceiptCustomerInfoHelper;
import com.ctfs.WICI.Model.ReceiptCustomerInfo;
import com.ctfs.WICI.Servlet.Model.BaseModel;
import com.ctfs.WICI.Servlet.Model.CreditCardApplicationData;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.ctfs.WICI.Test.Resources.TestFiles;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class ReceiptCustomerInfoHelperTest
{

	@Test
	public void test_that_we_get_ReceiptCustomerInfo_from_XML(){
		ReceiptCustomerInfoHelper systemUnderTest = new ReceiptCustomerInfoHelper();

		TestFiles fileHelper = new TestFiles();
		String accountApplicationRequestXML = fileHelper.getFileContents("AA_Request_Test1.xml");

		ReceiptCustomerInfo customerInformationPortionOfReceipt = systemUnderTest.getCustomerInformationPortionOfReceipt(accountApplicationRequestXML);
		
		Assert.assertEquals("OMC", customerInformationPortionOfReceipt.getRequestedProductType());	
		Assert.assertEquals("DEO", customerInformationPortionOfReceipt.getFirstName());
		
		Assert.assertEquals("", customerInformationPortionOfReceipt.getMiddleInitial());
		Assert.assertEquals("GESINGHAUS", customerInformationPortionOfReceipt.getLastName());
		
		Assert.assertTrue(customerInformationPortionOfReceipt.getApplicantSignature()!=null);
		
		Assert.assertEquals("MB", customerInformationPortionOfReceipt.getProvince());
		Assert.assertEquals("E", customerInformationPortionOfReceipt.getPreferredLanguage());
		
		Assert.assertEquals("N", customerInformationPortionOfReceipt.getInsuranceCode());
		Assert.assertEquals("No", customerInformationPortionOfReceipt.getCreditProtector());
		Assert.assertEquals("No", customerInformationPortionOfReceipt.getIdentityWatch());
		
		Assert.assertEquals("1", customerInformationPortionOfReceipt.getStoreNumber());
	}

	@Test
	public void test_that_we_get_ReceiptCustomerInfo_signature_from_XML(){
		ReceiptCustomerInfoHelper systemUnderTest = new ReceiptCustomerInfoHelper();

		TestFiles fileHelper = new TestFiles();
		String accountApplicationRequestXML = fileHelper.getFileContents("AA_Request_Test1.xml");

		ReceiptCustomerInfo customerInformationPortionOfReceipt = systemUnderTest.getCustomerInformationPortionOfReceipt(accountApplicationRequestXML);
		
		Assert.assertTrue(customerInformationPortionOfReceipt.getApplicantSignature()!=null);
		Assert.assertEquals("/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAsALEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2aioZLZJLiKdmlDw7toWVlU5GDuUHDe2QcdsVNQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABUcwmZAIJERs8l0LDH0BFSUUAVfL1D/AJ+rb/wHb/4ujy9Q/wCfq2/8B2/+Lq1RQBV8vUP+fq2/8B2/+Lo8vUP+fq2/8B2/+Lq1RQBV8vUP+fq2/wDAdv8A4ujy9Q/5+rb/AMB2/wDi6tUUAVfL1D/n6tv/AAHb/wCLo8vUP+fq2/8AAdv/AIurVFAFXy9Q/wCfq2/8B2/+Lo8vUP8An6tv/Adv/i6tUUAVfL1D/n6tv/Adv/i6PL1D/n6tv/Adv/i6tUUAVfL1D/n6tv8AwHb/AOLo8vUP+fq2/wDAdv8A4urVFAFXy9Q/5+rb/wAB2/8Ai6PL1D/n6tv/AAHb/wCLq1RQBV8vUP8An6tv/Adv/i6PL1D/AJ+rb/wHb/4urVFAEUKzqD58kbntsjK4/MmpaKKACiiigD//2Q==",customerInformationPortionOfReceipt.getApplicantSignature());
		
	}
	
	@Test
	public void test_that_we_can_get_ReceiptCustomerInfo_from_XML_converted_to_activationItemsJSON(){
		ReceiptCustomerInfoHelper systemUnderTest = new ReceiptCustomerInfoHelper();

		TestFiles fileHelper = new TestFiles();
		String accountApplicationRequestXML = fileHelper.getFileContents("AA_Request_Test1.xml");

		ReceiptCustomerInfo customerInformationPortionOfReceipt = systemUnderTest.getCustomerInformationPortionOfReceipt(accountApplicationRequestXML);

		CreditCardApplicationData activationItemsJSON = systemUnderTest.convertToCreditCardApplicationDataForPrintout(customerInformationPortionOfReceipt); 
				
		BaseModel chooseProductModel = activationItemsJSON.getModel("chooseProductModel");
		BaseModel personalDataModel = activationItemsJSON.getModel("personalData");
		BaseModel signatureModel = activationItemsJSON.getModel("signatureModel");
		BaseModel optionalProductsModel = activationItemsJSON.getModel("OptionalProductsModel");
		BaseModel loginScreenModel = activationItemsJSON.getModel("loginScreen");
		
		String productCard = chooseProductModel.get("productCard");		
		String firstName = personalDataModel.get("firstName");
		String initial = personalDataModel.get("initial");
		String lastName= personalDataModel.get("lastName");
		String userSingnature = signatureModel.get("userSingnature");
		String province = chooseProductModel.get("province");
		String correspondence = personalDataModel.get("correspondence");
		String insuranceCode = optionalProductsModel.get("insuranceCode");
		String locationFieldID = loginScreenModel.get("locationFieldID");
		
		Assert.assertEquals("OMC", productCard);
		Assert.assertEquals("DEO", firstName);
		Assert.assertEquals("", initial);
		Assert.assertEquals("GESINGHAUS", lastName);
		Assert.assertEquals("/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAsALEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2aioZLZJLiKdmlDw7toWVlU5GDuUHDe2QcdsVNQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABUcwmZAIJERs8l0LDH0BFSUUAVfL1D/AJ+rb/wHb/4ujy9Q/wCfq2/8B2/+Lq1RQBV8vUP+fq2/8B2/+Lo8vUP+fq2/8B2/+Lq1RQBV8vUP+fq2/wDAdv8A4ujy9Q/5+rb/AMB2/wDi6tUUAVfL1D/n6tv/AAHb/wCLo8vUP+fq2/8AAdv/AIurVFAFXy9Q/wCfq2/8B2/+Lo8vUP8An6tv/Adv/i6tUUAVfL1D/n6tv/Adv/i6PL1D/n6tv/Adv/i6tUUAVfL1D/n6tv8AwHb/AOLo8vUP+fq2/wDAdv8A4urVFAFXy9Q/5+rb/wAB2/8Ai6PL1D/n6tv/AAHb/wCLq1RQBV8vUP8An6tv/Adv/i6PL1D/AJ+rb/wHb/4urVFAEUKzqD58kbntsjK4/MmpaKKACiiigD//2Q==", userSingnature);
		Assert.assertEquals("MB", province);
		Assert.assertEquals("E", correspondence);
		Assert.assertEquals("N", insuranceCode);
		Assert.assertEquals("1", locationFieldID);
		
		Gson gson = new GsonBuilder().disableHtmlEscaping().create();
		String activationItems = gson.toJson(activationItemsJSON, CreditCardApplicationData.class);
		
		//{"models":[{"model":"chooseProductModel","data":[{"name":"productCard","value":"OMC"},{"name":"province","value":"MB"}]},{"model":"personalData","data":[{"name":"firstName","value":"DEO"},{"name":"initial","value":""},{"name":"lastName","value":"GESINGHAUS"},{"name":"correspondence","value":"E"}]},{"model":"signatureModel","data":[{"name":"userSingnature","value":"/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAsALEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2aioZLZJLiKdmlDw7toWVlU5GDuUHDe2QcdsVNQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABUcwmZAIJERs8l0LDH0BFSUUAVfL1D/AJ+rb/wHb/4ujy9Q/wCfq2/8B2/+Lq1RQBV8vUP+fq2/8B2/+Lo8vUP+fq2/8B2/+Lq1RQBV8vUP+fq2/wDAdv8A4ujy9Q/5+rb/AMB2/wDi6tUUAVfL1D/n6tv/AAHb/wCLo8vUP+fq2/8AAdv/AIurVFAFXy9Q/wCfq2/8B2/+Lo8vUP8An6tv/Adv/i6tUUAVfL1D/n6tv/Adv/i6PL1D/n6tv/Adv/i6tUUAVfL1D/n6tv8AwHb/AOLo8vUP+fq2/wDAdv8A4urVFAFXy9Q/5+rb/wAB2/8Ai6PL1D/n6tv/AAHb/wCLq1RQBV8vUP8An6tv/Adv/i6PL1D/AJ+rb/wHb/4urVFAEUKzqD58kbntsjK4/MmpaKKACiiigD//2Q=="}]},{"model":"OptionalProductsModel","data":[{"name":"insuranceCode","value":"N"}]},{"model":"loginScreen","data":[{"name":"locationFieldID","value":"1"}]}]}
		Assert.assertEquals("{\"models\":[{\"model\":\"chooseProductModel\",\"data\":[{\"name\":\"productCard\",\"value\":\"OMC\"},{\"name\":\"province\",\"value\":\"MB\"}]},{\"model\":\"personalData\",\"data\":[{\"name\":\"firstName\",\"value\":\"DEO\"},{\"name\":\"initial\",\"value\":\"\"},{\"name\":\"lastName\",\"value\":\"GESINGHAUS\"},{\"name\":\"correspondence\",\"value\":\"E\"}]},{\"model\":\"signatureModel\",\"data\":[{\"name\":\"userSingnature\",\"value\":\"/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAsALEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2aioZLZJLiKdmlDw7toWVlU5GDuUHDe2QcdsVNQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABUcwmZAIJERs8l0LDH0BFSUUAVfL1D/AJ+rb/wHb/4ujy9Q/wCfq2/8B2/+Lq1RQBV8vUP+fq2/8B2/+Lo8vUP+fq2/8B2/+Lq1RQBV8vUP+fq2/wDAdv8A4ujy9Q/5+rb/AMB2/wDi6tUUAVfL1D/n6tv/AAHb/wCLo8vUP+fq2/8AAdv/AIurVFAFXy9Q/wCfq2/8B2/+Lo8vUP8An6tv/Adv/i6tUUAVfL1D/n6tv/Adv/i6PL1D/n6tv/Adv/i6tUUAVfL1D/n6tv8AwHb/AOLo8vUP+fq2/wDAdv8A4urVFAFXy9Q/5+rb/wAB2/8Ai6PL1D/n6tv/AAHb/wCLq1RQBV8vUP8An6tv/Adv/i6PL1D/AJ+rb/wHb/4urVFAEUKzqD58kbntsjK4/MmpaKKACiiigD//2Q==\"}]},{\"model\":\"OptionalProductsModel\",\"data\":[{\"name\":\"insuranceCode\",\"value\":\"N\"}]},{\"model\":\"loginScreen\",\"data\":[{\"name\":\"locationFieldID\",\"value\":\"1\"}]}]}", activationItems);
	}
	
	
}
