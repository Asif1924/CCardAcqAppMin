package com.epam.brb.testsModified;

import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.OverviewPageNovaScotia;

import deletethisTestData.ProvincesList;

public class OverviewPageNSStaticPage extends BaseTest{

	@Test
	public void overview022() {
		OverviewPage.get().overviewPromoCodeTextField.sendKeys("ASD12");
		OverviewPage.get().setProvince("NOVA SCOTIA");
		OverviewPage.get().startApplicationButton.click();
		OverviewPage.get().areAtNovaScotiaStaticPageCheck();
		
		OverviewPageNovaScotia.get().goToPersonalInfoPage();
		OverviewPageNovaScotia.get().areAtNextPageCheck();
	}

}
