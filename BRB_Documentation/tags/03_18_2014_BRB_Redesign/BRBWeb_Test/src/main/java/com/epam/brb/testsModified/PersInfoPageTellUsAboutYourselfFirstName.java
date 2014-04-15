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
import com.epam.brb.ui_objects.OverviewPageNovaScotia;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageEmploymentInfo;
import com.epam.brb.ui_objects.PersInfoPageFinancialInformation;
import com.epam.brb.ui_objects.PersInfoPagePreviousAddress;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

import deletethisTestData.ProvincesList;

public class PersInfoPageTellUsAboutYourselfFirstName extends BaseTest{
//	First Name field
	@Test
	public void persInfo029() {
		OverviewPage.get().goToPersonalInfoPage("YUKON");
		
		PersInfoPageTellUsAboutYourself.get().FirstNameTextField.sendKeys("!@#%");
		
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(PersInfoPage.get().mandatoryFieldsListPersInfoPage(), null);
	}
	
	@Test
	public void persInfo030() throws Exception {
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		PersInfoPageTellUsAboutYourself.get().FirstNameTextField
				.sendKeys("111111111111111111111111111111111111111111111111111111111111111111111111111111111111");
		howManySymbolsInTheFieldCheck(
				PersInfoPageTellUsAboutYourself.get().FirstNameTextField, 40);
	}
	
//	Initial Field
	@Test
	public void persInfo031() throws Exception {
		OverviewPage.get().goToPersonalInfoPage("YUKON");
		
		PersInfoPageTellUsAboutYourself.get().InitialTextField.sendKeys("!@#$%^&*()1'x");
		Assert.assertEquals(getSymbolsFromTheField(PersInfoPageTellUsAboutYourself.get().InitialTextField), "x");
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(PersInfoPage.get().mandatoryFieldsListPersInfoPage(), null);
	}
	
//	Last Name Field
	@Test
	public void persInfo032() {
		OverviewPage.get().goToPersonalInfoPage("YUKON");
		
		PersInfoPageTellUsAboutYourself.get().LastNameTextField.sendKeys("!@#%");
		
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(PersInfoPage.get().mandatoryFieldsListPersInfoPage(), null);
	}
	
	@Test
	public void persInfo033() throws Exception {
		OverviewPage.get().goToPersonalInfoPage("YUKON");
		
		PersInfoPageTellUsAboutYourself.get().LastNameTextField.sendKeys("11111111111111111111111111111111111111111111111111");
		howManySymbolsInTheFieldCheck(PersInfoPageTellUsAboutYourself.get().LastNameTextField, 40);
	}
	
}
