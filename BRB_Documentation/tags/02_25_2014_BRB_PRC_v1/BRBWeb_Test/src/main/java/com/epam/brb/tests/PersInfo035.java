package com.epam.brb.tests;

import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;
public class PersInfo035 extends BaseTest {
	
	
	@Test
	public void persInfo034() throws Exception {
		List<WebElement> exceptionElementsList = new ArrayList<>();
		exceptionElementsList.add(PersInfoPageTellUsAboutYourself.get().DateOfBirthMonthDropdown);
		exceptionElementsList.add(PersInfoPageTellUsAboutYourself.get().DateOfBirthDayDropdown);
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		PersInfoPageTellUsAboutYourself.get().DateOfBirthMonthDropdown.sendKeys("January");
		PersInfoPageTellUsAboutYourself.get().DateOfBirthDayDropdown.sendKeys("1");
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		
		List<WebElement> mandatoryFieldsList = PersInfoPageTellUsAboutYourself.get().mandatoryFieldsListTellUsAboutYourself();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionElementsList);
	}

}
