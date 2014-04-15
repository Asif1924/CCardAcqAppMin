package com.epam.brb.tests;

import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;

public class Overview015 extends BaseTest {
	
	@Test
	public void overview009() {
		OverviewPage.get().overviewPromoCodeTextField.sendKeys("asd12");
		OverviewPage.get().goToPersonalInfoPage("NUNAVUT");
		OverviewPage.get().areAtNextPageCheck();
		
	}
	

}
