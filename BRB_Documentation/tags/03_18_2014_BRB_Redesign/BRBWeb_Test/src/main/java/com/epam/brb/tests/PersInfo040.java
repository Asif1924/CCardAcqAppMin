package com.epam.brb.tests;


import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;
public class PersInfo040 extends BaseTest {
	
	
	@Test
	public void persInfo034() throws Exception {
        //List of fields that will not be checked by verifyFieldsAreHighlighted Method
		List<WebElement> exceptionElements = new ArrayList<>();
		exceptionElements.add(PersInfoPageTellUsAboutYourself.get().EmailTextField);
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		PersInfoPageTellUsAboutYourself.get().EmailTextField.sendKeys("asd@asd.com");
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		
		List<WebElement> mandatoryFieldsList = PersInfoPageTellUsAboutYourself.get().mandatoryFieldsListTellUsAboutYourself();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionElements);
		
		
		
	    
	}

}
