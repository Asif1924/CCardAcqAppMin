package com.epam.brb.tests;

import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPagePreviousAddress;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfo089 extends BaseTest {

	@Test(dataProvider = "ProvincesList", dataProviderClass = com.epam.brb.TestData.ProvincesList.class)
	public void persInfo089(String province) throws Exception {
		WebElement atThisAddressSinceMonth = PersInfoPageTellUsAboutYourself
				.get().AtThisAddressSinceMonthDropdown;
		WebElement atThisAddressSinceYear = PersInfoPageTellUsAboutYourself
				.get().AtThisAddressSinceYearTextField;
		WebElement PrevProvince = PersInfoPagePreviousAddress.get().PrevProvinceDropdown;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPagePlusPrevAddress();
		

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(atThisAddressSinceMonth);
		exceptionsList.add(atThisAddressSinceYear);
		exceptionsList.add(PrevProvince);

		PersInfoPagePreviousAddress.get()
				.goToPersInfoAndOpenPrevAddressSubSection();

		PrevProvince.sendKeys(province);

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}
}