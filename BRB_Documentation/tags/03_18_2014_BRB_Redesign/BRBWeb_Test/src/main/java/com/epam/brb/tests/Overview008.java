package com.epam.brb.tests;

import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;

import deletethisTestData.ProvincesList;

public class Overview008 extends BaseTest {
	
	@Test(dataProvider="ProvincesList", dataProviderClass=ProvincesList.class)
	public void overview008(String province) {
		OverviewPage.get().overviewPromoCodeTextField.sendKeys("asd12");
		OverviewPage.get().goToPersonalInfoPage(province);

//		NovaScotia shows another page after OverviewPage
//		(...but id for this NovaScotia Page is 'Overview...')		
		if (province == "NOVA SCOTIA") {

			OverviewPage.get().areAtNovaScotiaStaticPageCheck();
		}
		else
		OverviewPage.get().areAtNextPageCheck();
		
	}
	

}
