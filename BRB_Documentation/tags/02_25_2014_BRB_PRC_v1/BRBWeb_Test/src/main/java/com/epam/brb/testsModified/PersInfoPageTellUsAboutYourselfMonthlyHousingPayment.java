package com.epam.brb.testsModified;

import static com.epam.brb.fieldsMethods.FieldsMethods.getSymbolsFromTheField;
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

public class PersInfoPageTellUsAboutYourselfMonthlyHousingPayment extends BaseTest{
	
	@Test
	public void persInfo073() throws Exception {
		WebElement monthlyHousingPayment = PersInfoPageTellUsAboutYourself.get().MonthlyHousingPaymentTextField;
		
		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(monthlyHousingPayment);
		
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		monthlyHousingPayment.sendKeys("!@#$%^&*asd45678907");
		Assert.assertEquals(getSymbolsFromTheField(monthlyHousingPayment), "4,567", "symbols in the field are not as should be"); 
		
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}	
}
