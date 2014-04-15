package com.epam.brb.testsModified;

import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

import deletethisTestData.MonthsList;
public class PersInfo034 extends BaseTest {
	
	
	@Test(dataProvider = "monthsList", dataProviderClass = MonthsList.class)
	public void persInfo034(String month) throws Exception {
		List<WebElement> exceptionElementsList = new ArrayList<>();
		exceptionElementsList.add(PersInfoPageTellUsAboutYourself.get().DateOfBirthMonthDropdown);
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		PersInfoPageTellUsAboutYourself.get().DateOfBirthMonthDropdown.sendKeys(month);
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		
		List<WebElement> mandatoryFieldsList = PersInfoPageTellUsAboutYourself.get().mandatoryFieldsListTellUsAboutYourself();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionElementsList);
	}

}
