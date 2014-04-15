package com.epam.brb.tests;

import static com.epam.brb.fieldsMethods.FieldsMethods.howManySymbolsInTheFieldCheck;
import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPagePreviousAddress;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfo088 extends BaseTest {

	@Test
	public void persInfo088() throws Exception {
		WebElement atThisAddressSinceMonth = PersInfoPageTellUsAboutYourself
				.get().AtThisAddressSinceMonthDropdown;
		WebElement atThisAddressSinceYear = PersInfoPageTellUsAboutYourself
				.get().AtThisAddressSinceYearTextField;
		WebElement PrevCity = PersInfoPagePreviousAddress.get().PrevCityTextField;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPagePlusPrevAddress();
		mandatoryFieldsList.add(PrevCity);

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(atThisAddressSinceMonth);
		exceptionsList.add(atThisAddressSinceYear);
		exceptionsList.add(PrevCity);
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");
		PersInfoPagePreviousAddress.get().openPrevAddressSubSection();

		PrevCity.sendKeys("111111111111111111111111111111111111111111111111111111");
		howManySymbolsInTheFieldCheck(PrevCity, 40);

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}
}
