package com.epam.brb.ui_objects;

import static com.epam.brb.core.Context.driver;
import static com.epam.brb.fieldsMethods.FieldsMethods.dropdownMethod;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
//import java.util.Properties;
import org.openqa.selenium.By;

public class OverviewPage extends BasePage {

	private static OverviewPage page;

	// private static Properties properties;
	// private static String resourceFile = "/project.properties";

	// methods for finding elements on the page
	@FindBy(id = "overview_PromoCode_TextField")
	public WebElement overviewPromoCodeTextField;

	@FindBy(id = "overview_Province_TextField")
	public WebElement overviewProvinceDropdown;

	@FindBy(id = "startApplication_Button")
	public WebElement startApplicationButton;

	@FindBy(xpath = "//section[@style='']")
	public WebElement pageID;

	// always use this method when do something using this class
	public static OverviewPage get() {
		if (page == null) {
			page = new OverviewPage();
		}
		return page;
	}

	// method for fixing "sessionID is null" problem
	public static void setPageToNull() {
		if (page != null) {
			page = null;
		}
	}

	// methods for doing something in the page.

	public void goToPersonalInfoPage(String ProvinceToChoose) {
		dropdownMethod(overviewProvinceDropdown, ProvinceToChoose);
		startApplicationButton.click();
	}

	// public void open() {
	// driver.get(Config.getProperty("start.url"));
	//
	// }

	public boolean isPressedBtn() {
		if (driver
				.findElement(
						By.xpath("//body//*[@id='startApplication_Button'][contains(concat(' ', normalize-space(@class), ' '), 'active')]"))
				.isDisplayed()) {
		}
		return true;
	}

	public void areAtThisPageCheck() {
		Assert.assertEquals(pageID.getAttribute("id"), "OverviewScreen",
				"we are not on the needed page");
	}

	public void areAtNextPageCheck() {
		Assert.assertEquals(pageID.getAttribute("id"),
				"PersonalInformationScreen",
				"we are not on the Next page as expected");
	}

	public void areAtNovaScotiaStaticPageCheck() {
		Assert.assertEquals(pageID.getAttribute("id"), "OverviewScreen",
				"we are not on the Next page as expected");
	}

	public void setProvince(String ProvinceToChoose) {
		dropdownMethod(overviewProvinceDropdown, ProvinceToChoose);

	}

}
