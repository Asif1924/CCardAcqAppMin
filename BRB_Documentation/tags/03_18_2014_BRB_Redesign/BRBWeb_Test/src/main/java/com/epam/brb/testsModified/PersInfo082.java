package com.epam.brb.testsModified;

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

public class PersInfo082 extends BaseTest {

	@Test
	public void persInfo079() throws Exception {
		WebElement atThisAddressSinceMonth = PersInfoPageTellUsAboutYourself
				.get().AtThisAddressSinceMonthDropdown;
		WebElement atThisAddressSinceYear = PersInfoPageTellUsAboutYourself
				.get().AtThisAddressSinceYearTextField;
		WebElement PrevAddressStreetName = PersInfoPagePreviousAddress.get().PrevStreetNameTextField;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();
		
		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(atThisAddressSinceMonth);
		exceptionsList.add(atThisAddressSinceYear);

		OverviewPage.get().goToPersonalInfoPage("YUKON");
		PersInfoPagePreviousAddress.get().openPrevAddressSubSection();

		PrevAddressStreetName
				.sendKeys("111111111111111111111111111111111111111111111111111111111111111111111111");

		howManySymbolsInTheFieldCheck(PrevAddressStreetName, 40);

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}
}
