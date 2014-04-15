package com.epam.brb.tests;

import static com.epam.brb.fieldsMethods.FieldsMethods.getSymbolsFromTheField;
import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfo050 extends BaseTest {

	@Test
	public void persInfo050() throws Exception {
		WebElement primaryPhone1 = PersInfoPageTellUsAboutYourself.get().PrimaryPhone1TextField;

		WebElement primaryPhone3 = PersInfoPageTellUsAboutYourself.get().PrimaryPhone3TextField;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		primaryPhone1.sendKeys("123");
		Assert.assertEquals(getSymbolsFromTheField(primaryPhone1), "123");

		primaryPhone3.sendKeys("1234");
		Assert.assertEquals(getSymbolsFromTheField(primaryPhone3), "1234");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, null);
	}

}
