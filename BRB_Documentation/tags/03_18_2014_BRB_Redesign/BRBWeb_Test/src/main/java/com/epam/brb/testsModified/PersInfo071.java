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
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfo071 extends BaseTest {

	@Test
	public void persInfo064() throws Exception {
		WebElement PostalCode1 = PersInfoPageTellUsAboutYourself.get().PostalCode1TextField;
		WebElement PostalCode2 = PersInfoPageTellUsAboutYourself.get().PostalCode2TextField;
		WebElement PostacCodeArea = PersInfoPageTellUsAboutYourself.get().PostalCodeControl;
		
		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(PostacCodeArea);
		
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		PostalCode1.sendKeys("q1a");
		howManySymbolsInTheFieldCheck(PostalCode1, 3);
		PostalCode2.sendKeys("1a1");
		howManySymbolsInTheFieldCheck(PostalCode2, 3);

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, null);
	}

}
