package com.epam.brb.testsModified;

import static com.epam.brb.fieldsMethods.FieldsMethods.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPagePreviousAddress;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfoPagePrevAddrPostalCode extends BaseTest{

	@Test
	public void persInfo090() throws Exception {
		WebElement atThisAddressSinceMonth = PersInfoPageTellUsAboutYourself.get().AtThisAddressSinceMonthDropdown;
		WebElement atThisAddressSinceYear = PersInfoPageTellUsAboutYourself.get().AtThisAddressSinceYearTextField;
		WebElement prevPostalCode1 = PersInfoPagePreviousAddress.get().PrevPostalCode1TextField;
		WebElement prevPostalCode2 = PersInfoPagePreviousAddress.get().PrevPostalCode2TextField;
		

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPagePlusPrevAddress();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(atThisAddressSinceMonth);
		exceptionsList.add(atThisAddressSinceYear);
		

		PersInfoPagePreviousAddress.get()
				.goToPersInfoAndOpenPrevAddressSubSection();

		prevPostalCode1.sendKeys("123");
		Assert.assertEquals(getSymbolsFromTheField(prevPostalCode1), "123",
				"data entered is not as expected");
		prevPostalCode2.sendKeys("123");
		Assert.assertEquals(getSymbolsFromTheField(prevPostalCode2), "123",
				"data entered is not as expected");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}
	
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
	
	@Test
	public void persInfo092() throws Exception {
		WebElement atThisAddressSinceMonth = PersInfoPageTellUsAboutYourself.get().AtThisAddressSinceMonthDropdown;
		WebElement atThisAddressSinceYear = PersInfoPageTellUsAboutYourself.get().AtThisAddressSinceYearTextField;
		WebElement PostalCode1 = PersInfoPagePreviousAddress.get().PrevPostalCode1TextField;
		WebElement PostalCode2 = PersInfoPagePreviousAddress.get().PrevPostalCode2TextField;
		WebElement prevPostalCodeArea = PersInfoPagePreviousAddress.get().PrevPostalCodeControl;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPagePlusPrevAddress();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(atThisAddressSinceMonth);
		exceptionsList.add(atThisAddressSinceYear);
		exceptionsList.add(prevPostalCodeArea);

		PersInfoPagePreviousAddress.get()
				.goToPersInfoAndOpenPrevAddressSubSection();

		PostalCode1.sendKeys("A1A");
		Assert.assertEquals(getSymbolsFromTheField(PostalCode1), "A1A",
				"data entered is not as expected");
		PostalCode2.sendKeys("1A1");
		Assert.assertEquals(getSymbolsFromTheField(PostalCode2), "1A1",
				"data entered is not as expected");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}
	
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
