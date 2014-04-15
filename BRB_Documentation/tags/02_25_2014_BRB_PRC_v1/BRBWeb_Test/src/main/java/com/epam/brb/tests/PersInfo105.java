package com.epam.brb.tests;

import static com.epam.brb.fieldsMethods.FieldsMethods.getSymbolsFromTheField;
import static com.epam.brb.fieldsMethods.FieldsMethods.isSubsectionShown;
import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageEmploymentInfo;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfo105 extends BaseTest {

	@Test
	public void persInfo105() throws Exception {

		WebElement employmentSubsectionArea = PersInfoPageEmploymentInfo.get().employmentSubsectionArea;
		WebElement employmentTypeDropdown = PersInfoPageEmploymentInfo.get().EmploymentTypeDropdown;
		WebElement employmentJobTitle = PersInfoPageEmploymentInfo.get().employmentJobTitleTextField;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPagePlusEmploymentInfo();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(employmentTypeDropdown);
		exceptionsList.add(employmentJobTitle);

		PersInfoPageEmploymentInfo.get()
				.goToPersInfoAndOpenEmploymentInfoSubSection("Full Time");

		isSubsectionShown(employmentSubsectionArea);

		employmentJobTitle.sendKeys("a1 '-{}()@");
		Assert.assertEquals(getSymbolsFromTheField(employmentJobTitle), "A1 '-{}()@", "The field with ID " + employmentJobTitle.getAttribute("id") + " is not filled like should be...");
		
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}
}
