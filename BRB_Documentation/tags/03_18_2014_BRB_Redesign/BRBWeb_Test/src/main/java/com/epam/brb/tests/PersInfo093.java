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

public class PersInfo093 extends BaseTest {

	@Test
	public void persInfo093() throws Exception {
		WebElement atThisAddressSinceMonth = PersInfoPageTellUsAboutYourself.get().AtThisAddressSinceMonthDropdown;
		WebElement atThisAddressSinceYear = PersInfoPageTellUsAboutYourself.get().AtThisAddressSinceYearTextField;
		WebElement PostalCode1 = PersInfoPagePreviousAddress.get().PrevPostalCode1TextField;
		WebElement PostalCode2 = PersInfoPagePreviousAddress.get().PrevPostalCode2TextField;
		

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPagePlusPrevAddress();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(atThisAddressSinceMonth);
		exceptionsList.add(atThisAddressSinceYear);
		

		PersInfoPagePreviousAddress.get()
				.goToPersInfoAndOpenPrevAddressSubSection();

		PostalCode1.sendKeys("Q1A");
		Assert.assertEquals(getSymbolsFromTheField(PostalCode1), "Q1A",
				"data entered is not as expected");
		PostalCode2.sendKeys("1A1");
		Assert.assertEquals(getSymbolsFromTheField(PostalCode2), "1A1",
				"data entered is not as expected");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}

}
