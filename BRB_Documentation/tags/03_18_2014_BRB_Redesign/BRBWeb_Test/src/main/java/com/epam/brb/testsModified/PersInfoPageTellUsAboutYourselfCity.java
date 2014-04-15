package com.epam.brb.testsModified;

import static com.epam.brb.fieldsMethods.FieldsMethods.getSymbolsFromTheField;
import static com.epam.brb.fieldsMethods.FieldsMethods.howManySymbolsInTheFieldCheck;
import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfoPageTellUsAboutYourselfCity extends BaseTest{
	@Test
	public void persInfo064() throws Exception {
		WebElement cityField = PersInfoPageTellUsAboutYourself.get().CityTextField;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(cityField);

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		cityField.sendKeys("a1 '-");
		Assert.assertEquals(getSymbolsFromTheField(cityField), "a1 '-");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}
	
	@Test
	public void persInfo065() throws Exception {
		WebElement cityField = PersInfoPageTellUsAboutYourself.get().CityTextField;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(cityField);

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		cityField.sendKeys("!@#$%");
		Assert.assertEquals(getSymbolsFromTheField(cityField), "!@#$%");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, null);
	}
	
	@Test
	public void persInfo066() throws Exception {
		WebElement cityField = PersInfoPageTellUsAboutYourself.get().CityTextField;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(cityField);

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		cityField.sendKeys("111111111111111111111111111111111111111111111111111111111111111111111111");
		howManySymbolsInTheFieldCheck(cityField, 24);

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}

	
		
}
