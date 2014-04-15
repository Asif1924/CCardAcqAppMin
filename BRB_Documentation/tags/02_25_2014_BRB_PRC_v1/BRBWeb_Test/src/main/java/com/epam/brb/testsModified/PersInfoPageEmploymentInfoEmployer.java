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

public class PersInfoPageEmploymentInfoEmployer extends BaseTest{

	@Test
	public void persInfo098() throws Exception {
		
		WebElement employmentSubsectionArea = PersInfoPageEmploymentInfo.get().employmentSubsectionArea;
		WebElement employmentTypeDropdown = PersInfoPageEmploymentInfo.get().EmploymentTypeDropdown;
		WebElement employer = PersInfoPageEmploymentInfo.get().employerTextField;
		
		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPagePlusEmploymentInfo();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(employmentTypeDropdown);
		exceptionsList.add(employer);
		
		
		PersInfoPageEmploymentInfo.get()
				.goToPersInfoAndOpenEmploymentInfoSubSection("Full Time");

		isSubsectionShown(employmentSubsectionArea);
		
		employer.sendKeys("A1 '-");
		Assert.assertEquals(getSymbolsFromTheField(employer), "A1 '-", "The field with ID " + employer.getAttribute("id") + " is not filled like should be...");
		
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}
	
	@Test
	public void persInfo099() throws Exception {
		
		WebElement employmentSubsectionArea = PersInfoPageEmploymentInfo.get().employmentSubsectionArea;
		WebElement employmentTypeDropdown = PersInfoPageEmploymentInfo.get().EmploymentTypeDropdown;
		WebElement employer = PersInfoPageEmploymentInfo.get().employerTextField;
		
		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPagePlusEmploymentInfo();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(employmentTypeDropdown);
//		exceptionsList.add(employer);
		
		
		PersInfoPageEmploymentInfo.get()
				.goToPersInfoAndOpenEmploymentInfoSubSection("Full Time");

		isSubsectionShown(employmentSubsectionArea);
		
		employer.sendKeys("!@#$%");
		Assert.assertEquals(getSymbolsFromTheField(employer), "!@#$%", "The field with ID " + employer.getAttribute("id") + " is not filled like should be...");
		
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}
	
	@Test
	public void persInfo100() throws Exception {
		
		WebElement employmentSubsectionArea = PersInfoPageEmploymentInfo.get().employmentSubsectionArea;
		WebElement employmentTypeDropdown = PersInfoPageEmploymentInfo.get().EmploymentTypeDropdown;
		WebElement employer = PersInfoPageEmploymentInfo.get().employerTextField;
		
		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPagePlusEmploymentInfo();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(employmentTypeDropdown);
		exceptionsList.add(employer);
		
		
		PersInfoPageEmploymentInfo.get()
				.goToPersInfoAndOpenEmploymentInfoSubSection("Full Time");

		isSubsectionShown(employmentSubsectionArea);
		
		employer.sendKeys("11111111111111111111111111111111111111111111111111");
		howManySymbolsInTheFieldCheck(employer, 36);
//		Assert.assertEquals(getSymbolsFromTheField(employer), "!@#$%", "The field with ID " + employer.getAttribute("id") + " is not filled like should be...");
		
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}
}
