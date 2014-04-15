package com.epam.brb.tests;

import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
public class Overview003 extends BaseTest {
	
	@Test
	public void overview003() {
		
//		OverviewPage.get().open();
		OverviewPage.get().overviewPromoCodeTextField.sendKeys("a1_'@");
		OverviewPage.get().goToPersonalInfoPage("ALBERTA");
		
		//TODO!!
		OverviewPage.get().areAtNextPageCheck();
	}

}
