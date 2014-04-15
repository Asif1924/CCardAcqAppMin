package com.epam.brb.testsModified;

import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPageEmploymentInfo;
import com.epam.brb.ui_objects.PersInfoPageFinancialInformation;
import com.epam.brb.ui_objects.PersInfoPagePreviousAddress;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;
public class PersInfo027 extends BaseTest {
	@Test
	public void persInfo027() {
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		PersInfoPageTellUsAboutYourself.get()
				.fillMandatoryTellUsAboutYourselfSection();

		PersInfoPagePreviousAddress.get().fillMandatoryPreviousAddressSection();

		PersInfoPageEmploymentInfo.get().fillMandatoryEmploymentInfoSection();
		PersInfoPageFinancialInformation.get().GrossAnnualIncomeTextField
				.sendKeys("123asd '-");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		PersInfoPageTellUsAboutYourself.get().areAtTheNextPageCheck();
	}

}
