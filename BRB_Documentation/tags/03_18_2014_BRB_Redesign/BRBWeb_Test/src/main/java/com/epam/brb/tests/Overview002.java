package com.epam.brb.tests;

import static com.epam.brb.fieldsMethods.FieldsMethods.doesPageContainAnyErrors;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;


public class Overview002 extends BaseTest{
	
	@Test
	public void overview002() throws Throwable  {
//		OverviewPage.get().open();
		OverviewPage.get().overviewPromoCodeTextField.sendKeys("a1@");
		OverviewPage.get().goToPersonalInfoPage("ALBERTA");
		
		//Screen should have an error frame
		Assert.assertTrue(doesPageContainAnyErrors(), "screen does NOT have any errorFrames");
		 
		
		
		
		
		//*[contains(concat(" ", normalize-space(@class), " "), "errorField")]
//		if (OverviewPage.get().doesContainAnyErrors()){
////		if (driver.findElement(By.xpath("//body//*[@class='errorField']")).isDisplayed()) {
//			throw new NullPointerException("Error found - all works"); 
////			driver.findElement(By.xpath("//body//*[@class='errorField']")).sendKeys("asd");
//		}
//		return;
	}

}
