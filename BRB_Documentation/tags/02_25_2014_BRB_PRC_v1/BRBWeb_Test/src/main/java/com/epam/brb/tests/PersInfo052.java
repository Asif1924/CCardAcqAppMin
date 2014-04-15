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

public class PersInfo052 extends BaseTest {

	@Test
	public void persInfo049() throws Exception {
		WebElement socialInsurance1 = PersInfoPageTellUsAboutYourself.get().SocialInsurance1TextField;
		WebElement socialInsurance2 = PersInfoPageTellUsAboutYourself.get().SocialInsurance2TextField;
		WebElement socialInsurance3 = PersInfoPageTellUsAboutYourself.get().SocialInsurance3TextField;
		WebElement SocialInsuranceArea = PersInfoPageTellUsAboutYourself.get().SocialInsuranceArea;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> ExceptionsList = new ArrayList<>();
		ExceptionsList.add(SocialInsuranceArea);

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		socialInsurance1.sendKeys("123456");
		Assert.assertEquals(getSymbolsFromTheField(socialInsurance1), "123");

		socialInsurance2.sendKeys("123456");
		Assert.assertEquals(getSymbolsFromTheField(socialInsurance2), "123");

		socialInsurance3.sendKeys("123456");
		Assert.assertEquals(getSymbolsFromTheField(socialInsurance3), "123");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, ExceptionsList);
	}

}
