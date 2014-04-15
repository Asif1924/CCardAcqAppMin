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
import com.epam.brb.ui_objects.PersInfoPageFinancialInformation;
import com.epam.brb.ui_objects.PersInfoPagePreviousAddress;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfoPageFinancialInfoMyBankingProducts extends BaseTest{
	@Test
	public void persInfo111() throws Exception {
		WebElement chequingAccountCheckbox = PersInfoPageFinancialInformation.get().ChequingAccountCheckbox;
		WebElement savingsAccountCheckbox = PersInfoPageFinancialInformation.get().SavingsAccountCheckbox;
		WebElement bankLoanCheckbox = PersInfoPageFinancialInformation.get().BankLoanCheckbox;
		WebElement creditCardCheckbox = PersInfoPageFinancialInformation.get().CreditCardCheckbox;
		WebElement gasCardCheckbox = PersInfoPageFinancialInformation.get().GasCardCheckbox;
		WebElement storeCardCheckbox = PersInfoPageFinancialInformation.get().StoreCardCheckbox;
		
		OverviewPage.get().goToPersonalInfoPage("ALBERTA");
		 
		List<WebElement> mandatoryFieldsList = PersInfoPage.get().mandatoryFieldsListPersInfoPage();

		chequingAccountCheckbox.click();
		Assert.assertTrue(chequingAccountCheckbox.isSelected(), chequingAccountCheckbox.getAttribute("id")+ " should be selected, but not");
		savingsAccountCheckbox.click();
		Assert.assertTrue(chequingAccountCheckbox.isSelected(), chequingAccountCheckbox.getAttribute("id")+ " should be selected, but not");
		bankLoanCheckbox.click();
		Assert.assertTrue(bankLoanCheckbox.isSelected(), bankLoanCheckbox.getAttribute("id")+ " should be selected, but not");
		creditCardCheckbox.click();
		Assert.assertTrue(creditCardCheckbox.isSelected(), creditCardCheckbox.getAttribute("id")+ " should be selected, but not");
		gasCardCheckbox.click();
		Assert.assertTrue(gasCardCheckbox.isSelected(), gasCardCheckbox.getAttribute("id")+ " should be selected, but not");
		storeCardCheckbox.click();
		Assert.assertTrue(storeCardCheckbox.isSelected(), storeCardCheckbox.getAttribute("id")+ " should be selected, but not");
		
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, null);
	}
}
