package com.epam.brb.tests;

import static com.epam.brb.fieldsMethods.FieldsMethods.getCurrentMonth;
import static com.epam.brb.fieldsMethods.FieldsMethods.getCurrentYear;
import static com.epam.brb.fieldsMethods.FieldsMethods.isSubsectionShown;
import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageEmploymentInfo;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfo109 extends BaseTest {

	@Test
	public void persInfo105() throws Exception {

		WebElement employmentSubsectionArea = PersInfoPageEmploymentInfo.get().employmentSubsectionArea;
		WebElement employmentTypeDropdown = PersInfoPageEmploymentInfo.get().EmploymentTypeDropdown;
		WebElement employmentSinceYear = PersInfoPageEmploymentInfo.get().EmployerSinceYearTextField;
		WebElement employmentSinceMonth = PersInfoPageEmploymentInfo.get().employerSinceMonthDropdown;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPagePlusEmploymentInfo();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(employmentTypeDropdown);
		exceptionsList.add(employmentSinceYear);
		exceptionsList.add(employmentSinceMonth);

		PersInfoPageEmploymentInfo.get()
				.goToPersInfoAndOpenEmploymentInfoSubSection("Full Time");

		isSubsectionShown(employmentSubsectionArea);

		employmentSinceYear.sendKeys(getCurrentYear);
		employmentSinceMonth.sendKeys(getCurrentMonth);

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}
}
