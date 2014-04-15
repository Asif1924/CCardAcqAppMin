package com.epam.brb.testsModified;

import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfo067 extends BaseTest {

	@Test(dataProvider="ProvincesList", dataProviderClass=com.epam.brb.TestData.ProvincesList.class)
	public void persInfo064(String provinceToEnter) throws Exception {
		WebElement province = PersInfoPageTellUsAboutYourself.get().ProvinceDropdown;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(province);

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		province.sendKeys(provinceToEnter);

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}

}
