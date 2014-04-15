package com.epam.brb.testsModified;

import static com.epam.brb.fieldsMethods.FieldsMethods.getSymbolsFromTheField;
import static com.epam.brb.fieldsMethods.FieldsMethods.howManySymbolsInTheFieldCheck;
import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.OverviewPageNovaScotia;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageEmploymentInfo;
import com.epam.brb.ui_objects.PersInfoPageFinancialInformation;
import com.epam.brb.ui_objects.PersInfoPagePreviousAddress;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

import deletethisTestData.MonthsList;
import deletethisTestData.ProvincesList;

public class PersInfoPageTellUsAboutYourselfDOB extends BaseTest{
	
	@Test(dataProvider = "monthsList", dataProviderClass = MonthsList.class)
	public void persInfo034(String month) throws Exception {
		List<WebElement> exceptionElementsList = new ArrayList<>();
		exceptionElementsList.add(PersInfoPageTellUsAboutYourself.get().DateOfBirthMonthDropdown);
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		PersInfoPageTellUsAboutYourself.get().DateOfBirthMonthDropdown.sendKeys(month);
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		
		List<WebElement> mandatoryFieldsList = PersInfoPageTellUsAboutYourself.get().mandatoryFieldsListTellUsAboutYourself();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionElementsList);
	}
	
	@Test
	public void persInfo035() throws Exception {
		List<WebElement> exceptionElementsList = new ArrayList<>();
		exceptionElementsList.add(PersInfoPageTellUsAboutYourself.get().DateOfBirthMonthDropdown);
		exceptionElementsList.add(PersInfoPageTellUsAboutYourself.get().DateOfBirthDayDropdown);
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		PersInfoPageTellUsAboutYourself.get().DateOfBirthMonthDropdown.sendKeys("January");
		PersInfoPageTellUsAboutYourself.get().DateOfBirthDayDropdown.sendKeys("1");
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		
		List<WebElement> mandatoryFieldsList = PersInfoPageTellUsAboutYourself.get().mandatoryFieldsListTellUsAboutYourself();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionElementsList);
	}
	
	@Test
	public void persInfo036() throws Exception {
		List<WebElement> exceptionElements = new ArrayList<>();
		exceptionElements.add(PersInfoPageTellUsAboutYourself.get().DateOfBirthMonthDropdown);
		exceptionElements.add(PersInfoPageTellUsAboutYourself.get().DateOfBirthDayDropdown);
		exceptionElements.add(PersInfoPageTellUsAboutYourself.get().DateOfBirthYearTextField);
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		PersInfoPageTellUsAboutYourself.get().DateOfBirthMonthDropdown.sendKeys("January");
		PersInfoPageTellUsAboutYourself.get().DateOfBirthDayDropdown.sendKeys("1");
		PersInfoPageTellUsAboutYourself.get().DateOfBirthYearTextField.sendKeys("1900");
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		
		List<WebElement> mandatoryFieldsList = PersInfoPageTellUsAboutYourself.get().mandatoryFieldsListTellUsAboutYourself();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionElements);
	}
	
	@Test
	public void persInfo037() throws Exception {
		//List of fields that will not be checked by verifyFieldsAreHighlighted Method
		List<WebElement> exceptionElements = new ArrayList<>();
		exceptionElements.add(PersInfoPageTellUsAboutYourself.get().DateOfBirthMonthDropdown);
		exceptionElements.add(PersInfoPageTellUsAboutYourself.get().DateOfBirthDayDropdown);
		
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		PersInfoPageTellUsAboutYourself.get().DateOfBirthMonthDropdown.sendKeys("January");
		PersInfoPageTellUsAboutYourself.get().DateOfBirthDayDropdown.sendKeys("1");
		PersInfoPageTellUsAboutYourself.get().DateOfBirthYearTextField.sendKeys("1889");
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		
		List<WebElement> mandatoryFieldsList = PersInfoPageTellUsAboutYourself.get().mandatoryFieldsListTellUsAboutYourself();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionElements);
	}
	
	@Test
	public void persInfo038() throws Exception {
        //get current day
		String getCurrentMonth = new SimpleDateFormat("MMMM").format(Calendar.getInstance().getTime());
		String getCurrentDay = new SimpleDateFormat("d").format(Calendar.getInstance().getTime());
		//List of fields that will not be checked by verifyFieldsAreHighlighted Method
		List<WebElement> exceptionElements = new ArrayList<>();
		exceptionElements.add(PersInfoPageTellUsAboutYourself.get().DateOfBirthMonthDropdown);
		exceptionElements.add(PersInfoPageTellUsAboutYourself.get().DateOfBirthDayDropdown);
		exceptionElements.add(PersInfoPageTellUsAboutYourself.get().DateOfBirthYearTextField);
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		PersInfoPageTellUsAboutYourself.get().DateOfBirthMonthDropdown.sendKeys(getCurrentMonth);
		PersInfoPageTellUsAboutYourself.get().DateOfBirthDayDropdown.sendKeys(getCurrentDay);
		PersInfoPageTellUsAboutYourself.get().DateOfBirthYearTextField.sendKeys("1900");
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		
		List<WebElement> mandatoryFieldsList = PersInfoPageTellUsAboutYourself.get().mandatoryFieldsListTellUsAboutYourself();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionElements);
	}
}
