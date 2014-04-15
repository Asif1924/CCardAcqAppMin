package com.epam.brb.tests;


import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;
public class PersInfo038 extends BaseTest {
	
	
	@Test
	public void persInfo034() throws Exception {
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
