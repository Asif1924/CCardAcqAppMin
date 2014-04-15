package com.epam.brb.tests;

import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
public class Overview004 extends BaseTest {
	@Test
	public void overview004() {
//		OverviewPage.get().open();
		OverviewPage.get().overviewPromoCodeTextField.sendKeys("a1@~'");
		OverviewPage.get().goToPersonalInfoPage("ALBERTA");
		OverviewPage.get().areAtNextPageCheck();		
		
	}

}
