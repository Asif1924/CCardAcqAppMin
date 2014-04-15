package com.epam.brb.tests;

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

public class ManyNumbersTest extends BaseTest {

	@Test(dataProvider="manyNumbers", dataProviderClass=com.epam.brb.TestData.ManyNumbers.class)
	public void persInfo111(WebElement webElement, int numbersToCheck ) throws Exception {

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(webElement);

		OverviewPage.get().goToPersonalInfoPage("ALBERTA");
		
		webElement.sendKeys("111111111111111111111111111111111111111111111111111111111111");
		howManySymbolsInTheFieldCheck(webElement, numbersToCheck);
		
		
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, null);
	}
}
