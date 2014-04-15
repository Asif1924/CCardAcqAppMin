package com.epam.brb.tests;

import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;


public class PersInfo026 extends BaseTest {
	@Test
	public void persInfo026() {
		List<WebElement> exceptionElements = new ArrayList<>();
		exceptionElements.add(PersInfoPageTellUsAboutYourself.get().DateOfBirthMonthDropdown);
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");
		
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
//		verifyFieldsAreHighlighted(PersInfoPageTellUsAboutYourself.get().mandatoryFieldsListTellUsAboutYourself(), null);
//		verifyFieldsAreHighlighted(PersInfoPageEmploymentInfo.get().mandatoryFieldsListEmploymentInfo());
//		verifyFieldsAreHighlighted(PersInfoPageFinancialInformation.get().mandatoryFieldsListFinancialInfo());
		verifyFieldsAreHighlighted(PersInfoPage.get().mandatoryFieldsListPersInfoPage(), null);
		
	}

}
