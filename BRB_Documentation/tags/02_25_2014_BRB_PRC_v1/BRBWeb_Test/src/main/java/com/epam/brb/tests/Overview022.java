package com.epam.brb.tests;

import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.OverviewPageNovaScotia;

public class Overview022 extends BaseTest{
	
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
