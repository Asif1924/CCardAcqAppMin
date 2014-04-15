package com.epam.brb.testsModified;

import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfo075 extends BaseTest {

	@Test
	public void persInfo073() throws Exception {
		WebElement atThisAddressSinceMonth = PersInfoPageTellUsAboutYourself.get().AtThisAddressSinceMonthDropdown;
		WebElement atThisAddressSinceYear = PersInfoPageTellUsAboutYourself.get().AtThisAddressSinceYearTextField;

		// getting the %next_month%
		Calendar cal = (Calendar) Calendar.getInstance();
		cal.add(Calendar.MONTH, 1);
		cal.add(Calendar.YEAR, -2);
		String getNextMonth = new SimpleDateFormat("MMMM").format(cal.getTime());
		String getTwoYearsBack = new SimpleDateFormat("YYYY").format(cal.getTime());
		// Prev Address apge is included in this list:
		List<WebElement> mandatoryFieldsList = PersInfoPage.get().mandatoryFieldsListPersInfoPagePlusPrevAddress();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(atThisAddressSinceMonth);
		exceptionsList.add(atThisAddressSinceYear);

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		
		atThisAddressSinceYear.sendKeys(getTwoYearsBack);
		atThisAddressSinceMonth.sendKeys(getNextMonth);
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
		
	}

}
