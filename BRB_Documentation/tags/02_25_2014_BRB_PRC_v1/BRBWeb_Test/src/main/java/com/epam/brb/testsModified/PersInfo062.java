package com.epam.brb.testsModified;

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

public class PersInfo062 extends BaseTest {

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

}
