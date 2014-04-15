package com.epam.brb.testsModified;

import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfo049 extends BaseTest {

	@Test
	public void persInfo049() throws Exception {
		WebElement primaryPhone1 = PersInfoPageTellUsAboutYourself.get().PrimaryPhone1TextField;
		WebElement primaryPhone2 = PersInfoPageTellUsAboutYourself.get().PrimaryPhone2TextField;
		WebElement primaryPhone3 = PersInfoPageTellUsAboutYourself.get().PrimaryPhone3TextField;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		primaryPhone1.sendKeys("!@#$%^&*()_+=:asd");

		// Assert.assertEquals(getSymbolsFromTheField(primaryPhone1), "");
		primaryPhone2.sendKeys("!@#$%^&*()_+=:asd");

		// Assert.assertEquals(getSymbolsFromTheField(primaryPhone2), "");
		primaryPhone3.sendKeys("!@#$%^&*()_+=:asd");

		// Assert.assertEquals(getSymbolsFromTheField(primaryPhone3), "");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, null);
	}

}
