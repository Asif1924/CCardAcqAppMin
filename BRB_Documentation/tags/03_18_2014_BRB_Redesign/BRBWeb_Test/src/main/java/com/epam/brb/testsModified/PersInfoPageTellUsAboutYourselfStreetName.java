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

public class PersInfoPageTellUsAboutYourselfStreetName extends BaseTest{
	@Test
	public void persInfo058() throws Exception {
		WebElement streetname = PersInfoPageTellUsAboutYourself.get().StreetNameTextField;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(streetname);

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		streetname.sendKeys("asd123 '-");
		Assert.assertEquals(getSymbolsFromTheField(streetname), "asd123 '-",
				"symbols quantity in the field is not as should be");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}
	
	@Test
	public void persInfo059() throws Exception {
		WebElement streetname = PersInfoPageTellUsAboutYourself.get().StreetNameTextField;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		streetname.sendKeys("!@#$%");
		Assert.assertEquals(getSymbolsFromTheField(streetname), "!@#$%",
				"data in the field is not as should be");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, null);
	}

	@Test
	public void persInfo060() throws Exception {
		WebElement streetname = PersInfoPageTellUsAboutYourself.get().StreetNameTextField;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(streetname);

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		streetname
				.sendKeys("111111111111111111111111111111111111111111111111111111111111111111111111");
		howManySymbolsInTheFieldCheck(streetname, 40);

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}
		
}
