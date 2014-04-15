package com.epam.brb.tests;

import static com.epam.brb.fieldsMethods.FieldsMethods.getSymbolsFromTheField;
import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;
public class PersInfo031 extends BaseTest {
	
	
	@Test
	public void persInfo031() throws Exception {
		OverviewPage.get().goToPersonalInfoPage("YUKON");
		
		PersInfoPageTellUsAboutYourself.get().InitialTextField.sendKeys("!@#$%^&*()1'x");
		Assert.assertEquals(getSymbolsFromTheField(PersInfoPageTellUsAboutYourself.get().InitialTextField), "X");
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(PersInfoPage.get().mandatoryFieldsListPersInfoPage(), null);
	}

}
