package com.epam.brb.testsModified;

import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.OverviewPageNovaScotia;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageEmploymentInfo;
import com.epam.brb.ui_objects.PersInfoPageFinancialInformation;
import com.epam.brb.ui_objects.PersInfoPagePreviousAddress;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

import deletethisTestData.ProvincesList;

public class PersInfoPageTellUsAboutYourselfCommon extends BaseTest{

	@Test
	public void persInfo026() {
		List<WebElement> exceptionElements = new ArrayList<>();
		exceptionElements.add(PersInfoPageTellUsAboutYourself.get().DateOfBirthMonthDropdown);
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(PersInfoPage.get().mandatoryFieldsListPersInfoPage(), null);
	}

	@Test
	public void persInfo027() {
		OverviewPage.get().goToPersonalInfoPage("YUKON");
		
		PersInfoPageTellUsAboutYourself.get().fillMandatoryTellUsAboutYourselfSection();
		
		PersInfoPagePreviousAddress.get().fillMandatoryPreviousAddressSection();

		PersInfoPageEmploymentInfo.get().fillMandatoryEmploymentInfoSection();
		PersInfoPageFinancialInformation.get().GrossAnnualIncomeTextField.sendKeys("123asd '-");
		
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		PersInfoPageTellUsAboutYourself.get().areAtTheNextPageCheck();
	}
}
