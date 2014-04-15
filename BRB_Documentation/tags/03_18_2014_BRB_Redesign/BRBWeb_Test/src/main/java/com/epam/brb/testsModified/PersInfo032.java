package com.epam.brb.testsModified;

import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;
public class PersInfo032 extends BaseTest {
	@Test
	public void persInfo032() {
		OverviewPage.get().goToPersonalInfoPage("YUKON");
		
		PersInfoPageTellUsAboutYourself.get().LastNameTextField.sendKeys("!@#%");
		
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(PersInfoPage.get().mandatoryFieldsListPersInfoPage(), null);
	}

}
