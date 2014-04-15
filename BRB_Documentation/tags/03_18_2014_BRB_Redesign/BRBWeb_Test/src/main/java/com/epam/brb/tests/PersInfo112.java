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

public class PersInfo112 extends BaseTest {

	@Test(dataProvider="manyNumbers", dataProviderClass=com.epam.brb.TestData.ManyNumbers.class)
	public void persInfo111(WebElement webelement, int howManySymbolsShouldBeInTheField) throws Exception {
		
		List<WebElement> mandatoryFieldsList = PersInfoPage.get().mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(webelement);

		OverviewPage.get().goToPersonalInfoPage("ALBERTA");
		webelement.sendKeys("11111111111111111111111111111111111111111111111111");
		howManySymbolsInTheFieldCheck(webelement, howManySymbolsShouldBeInTheField);
		
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, null);
	}
}
