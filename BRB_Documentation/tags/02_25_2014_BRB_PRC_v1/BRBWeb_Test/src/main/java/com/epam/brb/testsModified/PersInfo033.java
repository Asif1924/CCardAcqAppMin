package com.epam.brb.testsModified;

import static com.epam.brb.fieldsMethods.FieldsMethods.howManySymbolsInTheFieldCheck;

import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;
public class PersInfo033 extends BaseTest {
	@Test
	public void persInfo033() throws Exception {
		OverviewPage.get().goToPersonalInfoPage("YUKON");
		
		PersInfoPageTellUsAboutYourself.get().LastNameTextField.sendKeys("11111111111111111111111111111111111111111111111111");
		howManySymbolsInTheFieldCheck(PersInfoPageTellUsAboutYourself.get().LastNameTextField, 40);
	}

}
