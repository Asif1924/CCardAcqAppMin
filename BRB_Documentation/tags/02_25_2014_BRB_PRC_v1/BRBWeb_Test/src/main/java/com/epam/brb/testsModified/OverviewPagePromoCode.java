package com.epam.brb.testsModified;

import static com.epam.brb.fieldsMethods.FieldsMethods.clickAndHold;
import static com.epam.brb.fieldsMethods.FieldsMethods.doesPageContainAnyErrors;
import static com.epam.brb.fieldsMethods.FieldsMethods.howManySymbolsInTheFieldCheck;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;

public class OverviewPagePromoCode extends BaseTest{

	@Test
	public void overview001() {
		clickAndHold(OverviewPage.get().startApplicationButton);
		// Check if button animation occurs (if it have "active" class)
		Assert.assertTrue(OverviewPage.get().isPressedBtn(),
				"Button is not pressed");
		OverviewPage.get().areAtThisPageCheck();
	}

	@Test
	public void overview002() throws Throwable {
		OverviewPage.get().overviewPromoCodeTextField.sendKeys("a1@");
		OverviewPage.get().goToPersonalInfoPage("ALBERTA");
		// Screen should have an error frame
		Assert.assertTrue(doesPageContainAnyErrors(),
				"screen does NOT have any errorFrames");
	}
	
	@Test
	public void overview003() {
		OverviewPage.get().overviewPromoCodeTextField.sendKeys("a1_'@");
		OverviewPage.get().goToPersonalInfoPage("ALBERTA");
		OverviewPage.get().areAtNextPageCheck();
	}
	
	@Test
	public void overview004() {
		OverviewPage.get().overviewPromoCodeTextField.sendKeys("a1@~'");
		OverviewPage.get().goToPersonalInfoPage("ALBERTA");
		OverviewPage.get().areAtNextPageCheck();		
		
	}
	
	@Test
	public void overview005() throws Exception {
		OverviewPage.get().overviewPromoCodeTextField.sendKeys("a1~@]123");
		howManySymbolsInTheFieldCheck(OverviewPage.get().overviewPromoCodeTextField, 5);
		OverviewPage.get().goToPersonalInfoPage("ALBERTA");
		OverviewPage.get().areAtNextPageCheck();
	}
	
	@Test
	public void overview006() {
		OverviewPage.get().overviewPromoCodeTextField.sendKeys("+!#$%");
		OverviewPage.get().goToPersonalInfoPage("ALBERTA");
		Assert.assertTrue(doesPageContainAnyErrors(), "screen does NOT have any errorFrames");
		OverviewPage.get().areAtThisPageCheck();
	}
	
	@Test
	public void overview007() {
		OverviewPage.get().overviewPromoCodeTextField.sendKeys("+!#$%");
		OverviewPage.get().startApplicationButton.click();
		OverviewPage.get().areAtThisPageCheck();
	}
	

}
