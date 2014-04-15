package com.epam.brb.tests;

import static com.epam.brb.fieldsMethods.FieldsMethods.isSubsectionNotShown;
import static com.epam.brb.fieldsMethods.FieldsMethods.isSubsectionShown;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.PersInfoPageEmploymentInfo;

public class PersInfo094 extends BaseTest {

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
