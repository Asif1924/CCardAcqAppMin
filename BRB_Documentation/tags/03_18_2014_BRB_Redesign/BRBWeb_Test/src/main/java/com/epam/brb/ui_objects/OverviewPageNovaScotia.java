package com.epam.brb.ui_objects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

public class OverviewPageNovaScotia extends BasePage {

	private static OverviewPageNovaScotia page;
	
	@FindBy(xpath="//section[@style='']")
	public WebElement pageID;
	
	@FindBy(id="overviewNS_ContinueButtonLink")
	public WebElement continueNovaScotiaButton;
	
	
	
	public static  OverviewPageNovaScotia get() {
		if(page == null) {
			page = new OverviewPageNovaScotia();
		}
		return page;
	}
	
	public void areAtNextPageCheck() {
		Assert.assertEquals(pageID.getAttribute("id"), "PersonalInformationScreen", "we are not on the Next page as expected");
	}
	
	public void goToPersonalInfoPage() {
		continueNovaScotiaButton.click();
	}

	
	
}
