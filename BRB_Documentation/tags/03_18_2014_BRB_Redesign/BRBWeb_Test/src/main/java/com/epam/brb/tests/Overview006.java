package com.epam.brb.tests;

import static com.epam.brb.fieldsMethods.FieldsMethods.doesPageContainAnyErrors;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;

public class Overview006 extends BaseTest {
	@Test
	public void overview006() {
		OverviewPage.get().overviewPromoCodeTextField.sendKeys("+!#$%");
		OverviewPage.get().goToPersonalInfoPage("ALBERTA");
		Assert.assertTrue(doesPageContainAnyErrors(), "screen does NOT have any errorFrames");
		OverviewPage.get().areAtThisPageCheck();
	}

}
