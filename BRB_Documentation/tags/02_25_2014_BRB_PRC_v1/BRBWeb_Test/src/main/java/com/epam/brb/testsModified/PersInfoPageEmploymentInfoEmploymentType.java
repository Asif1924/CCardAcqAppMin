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

public class PersInfoPageEmploymentInfoEmploymentType extends BaseTest{

	@Test(dataProvider = "EmploymentTypes", dataProviderClass = com.epam.brb.TestData.EmploymentTypesList.class)
	public void persInfo094(String employmentType) throws Exception {

		WebElement employmentSubsectionArea = PersInfoPageEmploymentInfo.get().employmentSubsectionArea;

		PersInfoPageEmploymentInfo.get()
				.goToPersInfoAndOpenEmploymentInfoSubSection(employmentType);

		if (employmentType != "Retired") {
			isSubsectionShown(employmentSubsectionArea);
		} else if (employmentType != "Retired") {
			isSubsectionNotShown(employmentSubsectionArea);
		} else {
			System.out.println("dataprovider provided wrong data...");
		}

	}
}
