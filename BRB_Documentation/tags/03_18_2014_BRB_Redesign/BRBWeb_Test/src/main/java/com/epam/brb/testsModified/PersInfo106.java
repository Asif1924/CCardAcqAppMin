package com.epam.brb.testsModified;

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

public class PersInfo106 extends BaseTest {

	@Test
	public void persInfo106() throws Exception {

		WebElement employmentSubsectionArea = PersInfoPageEmploymentInfo.get().employmentSubsectionArea;
		WebElement employmentTypeDropdown = PersInfoPageEmploymentInfo.get().EmploymentTypeDropdown;
		WebElement employmentJobDescription = PersInfoPageEmploymentInfo.get().employmentJobTitleTextField;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPagePlusEmploymentInfo();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(employmentTypeDropdown);
//		exceptionsList.add(employmentJobDescription);

		PersInfoPageEmploymentInfo.get()
				.goToPersInfoAndOpenEmploymentInfoSubSection("Full Time");

		isSubsectionShown(employmentSubsectionArea);

		employmentJobDescription.sendKeys("!@#$%");
		Assert.assertEquals(getSymbolsFromTheField(employmentJobDescription), "!@#$%", "The field with ID " + employmentJobDescription.getAttribute("id") + " is not filled like should be...");
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}
}
