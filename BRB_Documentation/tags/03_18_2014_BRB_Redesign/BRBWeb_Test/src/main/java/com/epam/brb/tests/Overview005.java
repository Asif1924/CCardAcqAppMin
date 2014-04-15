package com.epam.brb.tests;

import static com.epam.brb.fieldsMethods.FieldsMethods.howManySymbolsInTheFieldCheck;

import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
public class Overview005 extends BaseTest {
	
	@Test
	public void overview005() throws Exception {
		OverviewPage.get().overviewPromoCodeTextField.sendKeys("a1~@]123");
		howManySymbolsInTheFieldCheck(OverviewPage.get().overviewPromoCodeTextField, 5);
		OverviewPage.get().goToPersonalInfoPage("ALBERTA");
		OverviewPage.get().areAtNextPageCheck();
	}

}
