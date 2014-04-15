package com.epam.brb.tests;

import static com.epam.brb.fieldsMethods.FieldsMethods.getSymbolsFromTheField;
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

public class PersInfo058 extends BaseTest {

	@Test
	public void persInfo058() throws Exception {
		WebElement streetname = PersInfoPageTellUsAboutYourself.get().StreetNameTextField;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(streetname);

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		streetname.sendKeys("asd123 '-");
		Assert.assertEquals(getSymbolsFromTheField(streetname), "ASD123 '-",
				"symbols quantity in the field is not as should be");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}

}
