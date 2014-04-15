package com.epam.brb.tests;

import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;
public class PersInfo029 extends BaseTest {
	@Test
	public void persInfo029() {
		OverviewPage.get().goToPersonalInfoPage("YUKON");
		
		PersInfoPageTellUsAboutYourself.get().FirstNameTextField.sendKeys("!@#%");
		
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
//		verifyFieldsAreHighlighted(PersInfoPageTellUsAboutYourself.get().mandatoryFieldsListTellUsAboutYourself(null));
//		verifyFieldsAreHighlighted(PersInfoPageEmploymentInfo.get().mandatoryFieldsListEmploymentInfo());
//		verifyFieldsAreHighlighted(PersInfoPageFinancialInformation.get().mandatoryFieldsListFinancialInfo());
		verifyFieldsAreHighlighted(PersInfoPage.get().mandatoryFieldsListPersInfoPage(), null);
	}

}
