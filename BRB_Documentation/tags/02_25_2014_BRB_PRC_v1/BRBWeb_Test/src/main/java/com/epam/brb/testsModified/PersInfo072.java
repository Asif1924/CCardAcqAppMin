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

public class PersInfo072 extends BaseTest {

	@Test(dataProvider="ResidentalStatusesList", dataProviderClass=com.epam.brb.TestData.ResidentalStatusesList.class)
	public void persInfo072(String residentalStatusValue) throws Exception {
		WebElement residentalStatus = PersInfoPageTellUsAboutYourself.get().ResidentialStatusTextField;
		
		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(residentalStatus);
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");
		
		residentalStatus.sendKeys(residentalStatusValue);
		
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}

}
