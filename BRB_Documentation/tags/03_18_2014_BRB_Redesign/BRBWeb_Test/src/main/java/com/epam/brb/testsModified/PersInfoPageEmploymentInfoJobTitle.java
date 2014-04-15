package com.epam.brb.testsModified;

import static com.epam.brb.fieldsMethods.FieldsMethods.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageEmploymentInfo;
import com.epam.brb.ui_objects.PersInfoPagePreviousAddress;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfoPageEmploymentInfoJobTitle extends BaseTest{
	@Test(dataProvider = "jobTitlesList", dataProviderClass = com.epam.brb.TestData.jobTitlesList.class)
	public void persInfo104(String jobTitleDropdownElement) throws Exception {

		WebElement employmentSubsectionArea = PersInfoPageEmploymentInfo.get().employmentSubsectionArea;
		WebElement employmentTypeDropdown = PersInfoPageEmploymentInfo.get().EmploymentTypeDropdown;
		WebElement employmentJobTitleDropdown = PersInfoPageEmploymentInfo.get().eploymentJobCategoryDropdown;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPagePlusEmploymentInfo();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(employmentTypeDropdown);
		exceptionsList.add(employmentJobTitleDropdown);

		PersInfoPageEmploymentInfo.get()
				.goToPersInfoAndOpenEmploymentInfoSubSection("Full Time");

		isSubsectionShown(employmentSubsectionArea);

		employmentJobTitleDropdown.sendKeys(jobTitleDropdownElement);

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}
	
}
