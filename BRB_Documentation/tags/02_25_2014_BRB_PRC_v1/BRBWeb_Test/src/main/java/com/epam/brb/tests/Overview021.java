package com.epam.brb.tests;

import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;

public class Overview021 extends BaseTest{
	@Test
	public void overview021() {
		OverviewPage.get().overviewPromoCodeTextField.sendKeys("ASD12");
		 OverviewPage.get().setProvince("ALBERTA");
		 OverviewPage.get().goToPersonalInfoPage("NUNAVUT");
		 OverviewPage.get().areAtNextPageCheck();
		 
	}

}
