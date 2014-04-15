package com.epam.brb.tests;

import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfo054 extends BaseTest {

	@Test
	public void persInfo049() throws Exception {
		WebElement socialInsurance1 = PersInfoPageTellUsAboutYourself.get().SocialInsurance1TextField;
		WebElement socialInsurance2 = PersInfoPageTellUsAboutYourself.get().SocialInsurance2TextField;
		WebElement socialInsurance3 = PersInfoPageTellUsAboutYourself.get().SocialInsurance3TextField;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		socialInsurance1.sendKeys("!@#$%^&*()_+=:asd");
		// Assert.assertEquals(getSymbolsFromTheField(socialInsurance1), "");

		socialInsurance2.sendKeys("!@#$%^&*()_+=:asd");
		// Assert.assertEquals(getSymbolsFromTheField(socialInsurance2), "");

		socialInsurance3.sendKeys("!@#$%^&*()_+=:asd");
		// Assert.assertEquals(getSymbolsFromTheField(socialInsurance3), "");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, null);
	}

}
