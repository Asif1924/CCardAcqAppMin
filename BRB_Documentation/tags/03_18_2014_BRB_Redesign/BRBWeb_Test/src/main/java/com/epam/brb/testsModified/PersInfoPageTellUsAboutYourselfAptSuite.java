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

public class PersInfoPageTellUsAboutYourselfAptSuite extends BaseTest{
	@Test
	public void persInfo061() throws Exception {
		WebElement aptSuite = PersInfoPageTellUsAboutYourself.get().AptSuiteTextField;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(aptSuite);

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		aptSuite.sendKeys("a1 '-");
		Assert.assertEquals(getSymbolsFromTheField(aptSuite), "a1 '-");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}
	
	@Test
	public void persInfo062() throws Exception {
		WebElement aptSuite = PersInfoPageTellUsAboutYourself.get().AptSuiteTextField;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		aptSuite.sendKeys("!@#$%");
		Assert.assertEquals(getSymbolsFromTheField(aptSuite), "!@#$%");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, null);
	}

	@Test
	public void persInfo063() throws Exception {
		WebElement aptSuite = PersInfoPageTellUsAboutYourself.get().AptSuiteTextField;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(aptSuite);

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		aptSuite.sendKeys("1111111111111");
		Assert.assertEquals(getSymbolsFromTheField(aptSuite), "11111");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}

	
		
}
