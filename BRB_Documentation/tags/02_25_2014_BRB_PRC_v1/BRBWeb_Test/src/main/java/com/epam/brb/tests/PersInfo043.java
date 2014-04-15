package com.epam.brb.tests;


import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;
public class PersInfo043 extends BaseTest {
	
	
	@Test
	public void persInfo034() throws Exception {
        WebElement checkbox = PersInfoPageTellUsAboutYourself.get().IWouldlikeToReceiveEmailCheckbox;
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		checkbox.click();
		Assert.assertTrue(checkbox.isSelected(), "CheckBox is not selected but should be");
		checkbox.click();
		Assert.assertTrue(!checkbox.isSelected(), "CheckBox is selected but should not be");
		checkbox.click();
		Assert.assertTrue(checkbox.isSelected(), "CheckBox is not selected but should be");
		
		
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		
		List<WebElement> mandatoryFieldsList = PersInfoPageTellUsAboutYourself.get().mandatoryFieldsListTellUsAboutYourself();
		verifyFieldsAreHighlighted(mandatoryFieldsList, null);
		
	}

}