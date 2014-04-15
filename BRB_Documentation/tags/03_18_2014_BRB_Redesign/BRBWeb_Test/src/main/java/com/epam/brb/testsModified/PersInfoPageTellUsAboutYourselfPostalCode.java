package com.epam.brb.testsModified;

import static com.epam.brb.fieldsMethods.FieldsMethods.getSymbolsFromTheField;
import static com.epam.brb.fieldsMethods.FieldsMethods.howManySymbolsInTheFieldCheck;
import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfoPageTellUsAboutYourselfPostalCode extends BaseTest{
	@Test
	public void persInfo068() throws Exception {
		WebElement PostalCode1 = PersInfoPageTellUsAboutYourself.get().PostalCode1TextField;
		WebElement PostalCode2 = PersInfoPageTellUsAboutYourself.get().PostalCode2TextField;
		WebElement PostalCodeArea = PersInfoPageTellUsAboutYourself.get().PostalCodeControl;
		
		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(PostalCodeArea);
		
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		PostalCode1.sendKeys("123");
		PostalCode2.sendKeys("123");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, null);
	}

	@Test
	public void persInfo069() throws Exception {
		WebElement PostalCode1 = PersInfoPageTellUsAboutYourself.get().PostalCode1TextField;
		WebElement PostalCode2 = PersInfoPageTellUsAboutYourself.get().PostalCode2TextField;
		WebElement PostalCodeArea = PersInfoPageTellUsAboutYourself.get().PostalCodeControl;
		
		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(PostalCodeArea);
		
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		PostalCode1.sendKeys("asd");
		PostalCode2.sendKeys("asd");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, null);
	}

	@Test
	public void persInfo070() throws Exception {
		WebElement PostalCode1 = PersInfoPageTellUsAboutYourself.get().PostalCode1TextField;
		WebElement PostalCode2 = PersInfoPageTellUsAboutYourself.get().PostalCode2TextField;
		WebElement PostalCodeArea = PersInfoPageTellUsAboutYourself.get().PostalCodeControl;
		
		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(PostalCodeArea);
		
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		PostalCode1.sendKeys("a1a");
		PostalCode2.sendKeys("1a1");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}

	@Test
	public void persInfo071() throws Exception {
		WebElement PostalCode1 = PersInfoPageTellUsAboutYourself.get().PostalCode1TextField;
		WebElement PostalCode2 = PersInfoPageTellUsAboutYourself.get().PostalCode2TextField;
		WebElement PostalCodeArea = PersInfoPageTellUsAboutYourself.get().PostalCodeControl;
		
		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(PostalCodeArea);
		
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		PostalCode1.sendKeys("q1a");
		howManySymbolsInTheFieldCheck(PostalCode1, 3);
		PostalCode2.sendKeys("1a1");
		howManySymbolsInTheFieldCheck(PostalCode2, 3);

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, null);
	}

		
}
