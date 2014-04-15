package com.epam.brb.tests;

import static com.epam.brb.fieldsMethods.FieldsMethods.getSymbolsFromTheField;
import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPagePreviousAddress;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfo091 extends BaseTest {

	@Test
	public void persInfo091() throws Exception {
		WebElement atThisAddressSinceMonth = PersInfoPageTellUsAboutYourself.get().AtThisAddressSinceMonthDropdown;
		WebElement atThisAddressSinceYear = PersInfoPageTellUsAboutYourself.get().AtThisAddressSinceYearTextField;
		WebElement prevPostalCode1 = PersInfoPagePreviousAddress.get().PrevPostalCode1TextField;
		WebElement prevPostalCode2 = PersInfoPagePreviousAddress.get().PrevPostalCode2TextField;
		WebElement prevPostalCodeArea = PersInfoPagePreviousAddress.get().PrevPostalCodeControl;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPagePlusPrevAddress();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(atThisAddressSinceMonth);
		exceptionsList.add(atThisAddressSinceYear);
//		exceptionsList.add(prevPostalCodeArea);

		PersInfoPagePreviousAddress.get()
				.goToPersInfoAndOpenPrevAddressSubSection();

		prevPostalCode1.sendKeys("ASD");
		Assert.assertEquals(getSymbolsFromTheField(prevPostalCode1), "ASD",
				"data entered is not as expected");
		prevPostalCode2.sendKeys("ASD");
		Assert.assertEquals(getSymbolsFromTheField(prevPostalCode2), "ASD",
				"data entered is not as expected");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}

}
