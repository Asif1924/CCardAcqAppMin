package com.epam.brb.tests;

import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;

public class Overview007 extends BaseTest {
	@Test
	public void overview007() {
		OverviewPage.get().overviewPromoCodeTextField.sendKeys("+!#$%");
		OverviewPage.get().startApplicationButton.click();
		OverviewPage.get().areAtThisPageCheck();
		
	}

}
