package com.epam.brb.testsModified;

import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;

import deletethisTestData.ProvincesList;

public class OverviewPageProvince extends BaseTest{

	@Test(dataProvider = "ProvincesList", dataProviderClass = ProvincesList.class)
	public void overview008(String province) {
		OverviewPage.get().overviewPromoCodeTextField.sendKeys("asd12");
		OverviewPage.get().goToPersonalInfoPage(province);
		// NovaScotia shows another page after OverviewPage
		// (...but id for this NovaScotia Page is 'Overview...')
		if (province == "NOVA SCOTIA") {
			OverviewPage.get().areAtNovaScotiaStaticPageCheck();
		} else
			OverviewPage.get().areAtNextPageCheck();
	}
	
	@Test
	public void overview021() {
		OverviewPage.get().overviewPromoCodeTextField.sendKeys("ASD12");
		OverviewPage.get().setProvince("ALBERTA");
		OverviewPage.get().goToPersonalInfoPage("NUNAVUT");
		OverviewPage.get().areAtNextPageCheck();
	}

}
