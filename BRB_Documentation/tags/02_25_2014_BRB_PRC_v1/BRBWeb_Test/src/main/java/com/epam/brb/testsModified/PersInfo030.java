package com.epam.brb.testsModified;

import static com.epam.brb.fieldsMethods.FieldsMethods.howManySymbolsInTheFieldCheck;

import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;
public class PersInfo030 extends BaseTest {
	@Test
	public void persInfo030() throws Exception {
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		PersInfoPageTellUsAboutYourself.get().FirstNameTextField
				.sendKeys("111111111111111111111111111111111111111111111111111111111111111111111111111111111111");
		howManySymbolsInTheFieldCheck(
				PersInfoPageTellUsAboutYourself.get().FirstNameTextField, 40);
	}

}
