package com.epam.brb.testsModified;




import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.ConfirmationPage;
import com.epam.brb.ui_objects.OptionalProductsPageOptInsurance;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPageEmploymentInfo;
import com.epam.brb.ui_objects.PersInfoPageFinancialInformation;
import com.epam.brb.ui_objects.PersInfoPagePreviousAddress;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;
public class PassAllPages extends BaseTest {

	@Test
//	public Actions dragAndDrop(WebElement source,
//            WebElement target);
	
	public  void passAllPages() {
		
		//Overview page 
//		OverviewPage.get().open();
//		OverviewPage.get().startApplicationButton.
		
		
		OverviewPage.get().goToPersonalInfoPage("ALBERTA");
//		//Personal Information page, Tell Us about Yourself section
		PersInfoPageTellUsAboutYourself.get().fillMandatoryTellUsAboutYourselfSection();
				
//		PersInfoPageTellUsAboutYourself.get().TitleDropdown.sendKeys("MR");
////	    dropdownMethod("personalInformation_Title_TextField", "MR");
//		PersInfoPageTellUsAboutYourself.get().FirstNameTextField.sendKeys("1111");
////		inputMethod("personalInformation_FirstName_TextField", "1111");
//		PersInfoPageTellUsAboutYourself.get().LastNameTextField.sendKeys("1111");
////	    inputMethod("personalInformation_LastName_TextField", "1111");
//		PersInfoPageTellUsAboutYourself.get().DateOfBirthMonthDropdown.sendKeys("February");
////	    dropdownMethod("personalData_DateOfBirth_Month", "February");
//		PersInfoPageTellUsAboutYourself.get().DateOfBirthDayDropdown.sendKeys("3");
////	    dropdownMethod("personalData_DateOfBirth_Day", "3");
//		PersInfoPageTellUsAboutYourself.get().DateOfBirthYearTextField.sendKeys("1990");
////	    inputMethod("personalInformation_DateOfBirth_Year", "1990");
//		PersInfoPageTellUsAboutYourself.get().EmailTextField.sendKeys("asd@asd.com");
////		inputMethod("personalInformation_Email_TextField", "asd@123.com");
//		PersInfoPageTellUsAboutYourself.get().LanguageEnglishRadioBtn.click();
////	    clickMethod("personalInformation_LanguageEnglish");
//		PersInfoPageTellUsAboutYourself.get().PrimaryPhone1TextField.sendKeys("111");
////		inputMethod("personalInformation_PrimaryPhone1_TextField", "111");
//		PersInfoPageTellUsAboutYourself.get().PrimaryPhone2TextField.sendKeys("111");
////		inputMethod("personalInformation_PrimaryPhone2_TextField", "111");
//		PersInfoPageTellUsAboutYourself.get().PrimaryPhone3TextField.sendKeys("1111");
////		inputMethod("personalInformation_PrimaryPhone3_TextField", "1111");
//		PersInfoPageTellUsAboutYourself.get().SocialInsurance1TextField.sendKeys("111");
////		inputMethod("personalInformation_SocialInsurance1_TextField", "111111111");
//		PersInfoPageTellUsAboutYourself.get().SocialInsurance2TextField.sendKeys("111");
////	    inputMethod("personalInformation_SocialInsurance2_TextField", "111111111");
//		PersInfoPageTellUsAboutYourself.get().SocialInsurance3TextField.sendKeys("1111");
////		inputMethod("personalInformation_SocialInsurance3_TextField", "111111111");
//		PersInfoPageTellUsAboutYourself.get().StreetNumberTextField.sendKeys("11111");
////	    inputMethod("personalInformation_StreetNumber_TextField", "11111");
//		PersInfoPageTellUsAboutYourself.get().StreetNameTextField.sendKeys("111111");
////	    inputMethod("personalInformation_StreetName_TextField", "1111111111111111");
//		PersInfoPageTellUsAboutYourself.get().CityTextField.sendKeys("111111");
////	    inputMethod("personalInformation_City_TextField", "11111111111");
//		PersInfoPageTellUsAboutYourself.get().ProvinceDropdown.sendKeys("BRITISH COLUMBIA");
////	    dropdownMethod("personalInformation_Province_TextField" , "BRITISH COLUMBIA");
//		PersInfoPageTellUsAboutYourself.get().PostalCode1TextField.sendKeys("a1a");
////	    inputMethod("personalInformation_PostalCode1_TextField", "a1a");
//		PersInfoPageTellUsAboutYourself.get().PostalCode2TextField.sendKeys("1a1");
////	    inputMethod("personalInformation_PostalCode2_TextField", "1a1");
//		PersInfoPageTellUsAboutYourself.get().ResidentialStatusTextField.sendKeys("Own");
////	    dropdownMethod("personalInformation_ResidentialStatus_TextField", "Own");
////		clickMethod("personalInformation_ResidentialStatus_TextField");
//		PersInfoPageTellUsAboutYourself.get().MonthlyHousingPaymentTextField.sendKeys("1111");
////	    inputMethod("personalInformation_MonthlyHousingPayment_TextField", "1111");
//		PersInfoPageTellUsAboutYourself.get().AddressSinceMonthDropdown.sendKeys("November");
////	    dropdownMethod("personalInformation_AddressSince_Month", "November");
//		PersInfoPageTellUsAboutYourself.get().AddressSinceYearTextField.sendKeys("1990");
////	    inputMethod("personalInformation_AddressSince_Year", "1990");
		
		//Personal information page, Previous address
		PersInfoPagePreviousAddress.get().fillMandatoryPreviousAddressSection();
		
//		PersInfoPagePreviousAddress.get().PrevStreetNumberTextField.sendKeys("111");
//		PersInfoPagePreviousAddress.get().PrevStreetNameTextField.sendKeys("111");
//		PersInfoPagePreviousAddress.get().PrevAptSuiteTextField.sendKeys("11111");
//		PersInfoPagePreviousAddress.get().PrevCityTextField.sendKeys("11111");
//		PersInfoPagePreviousAddress.get().PrevProvinceDropdown.sendKeys("ALBERTA");
//		PersInfoPagePreviousAddress.get().PrevpostalCode1TextField.sendKeys("a1a");
//		PersInfoPagePreviousAddress.get().PrevpostalCode2TextField.sendKeys("1a1");
		
		PersInfoPageEmploymentInfo.get().extendEmloyerInformation();
		
//		PersInfoPageEmploymentInfo.get().EmployerTextField.sendKeys("11111");
//		PersInfoPageEmploymentInfo.get().EmployerCityTextField.sendKeys("1111");
//		PersInfoPageEmploymentInfo.get().EployerJobTitleDropdown.sendKeys("DRIVER");
//		PersInfoPageEmploymentInfo.get().JobDescriptionTextField.sendKeys("11111");
//		PersInfoPageEmploymentInfo.get().EmployerSinceMonthDropdown.sendKeys("January");
//		PersInfoPageEmploymentInfo.get().EmployerSinceYearTextField.sendKeys("1990");
		
		PersInfoPageEmploymentInfo.get().fillMandatoryEmploymentInfoSection();
		
//		PersInfoPageEmploymentInfo.get().EmployerTextField.sendKeys("11111");
//		PersInfoPageEmploymentInfo.get().EmployerCityTextField.sendKeys("1111");
//		PersInfoPageEmploymentInfo.get().EployerJobTitleDropdown.sendKeys("DRIVER");
//		PersInfoPageEmploymentInfo.get().JobDescriptionTextField.sendKeys("11111");
//		PersInfoPageEmploymentInfo.get().EmployerSinceMonthDropdown.sendKeys("January");
//		PersInfoPageEmploymentInfo.get().EmployerSinceYearTextField.sendKeys("1990");

		
//		PersInfoPageFinancialInformation.get().fillFinancialInfoSection();
		
//		PersInfoPageFinancialInformation.get().GrossAnnualIncomeTextField.sendKeys("11111");
//		PersInfoPageFinancialInformation.get().ChequingAccountCheckbox.click();
//		PersInfoPageFinancialInformation.get().SavingsAccountCheckbox.click();
//		PersInfoPageFinancialInformation.get().BankLoanCheckbox.click();
//		PersInfoPageFinancialInformation.get().CreditCardCheckbox.click();
//		PersInfoPageFinancialInformation.get().GasCardCheckbox.click();
//		PersInfoPageFinancialInformation.get().StoreCardCheckbox.click();
		
		PersInfoPageFinancialInformation.get().goToOptionalProductsPage();
		
//		fillFinancialInfoSection();
//		PersInfoContinueBtn.click();
		
//		OptionalProductsPageSuppCard.get().fillSuppCardSection();
		
//		AddInfoAuthSuppCardCheckbox.click();
//		AddInfoTitleTextField.sendKeys("MR");
//		AddInfoFirstNameTextField.sendKeys("1111");
//		AddInfoInitialTextField.sendKeys("1");
//		AddInfoLastNameTextField.sendKeys("1111");
//		AddInfoDOBMonthDropdown.sendKeys("January");
//		AddInfoDOBDayDropdown.sendKeys("1");
//		AddInfoDOBYearTextField.sendKeys("1990");
//		AddInfoPhone1TextField.sendKeys("123");
//		AddInfoPhone2TextField.sendKeys("123");
//		AddInfoPhone3TextField.sendKeys("1234");
//		AddInfoRelationshipDropdown.sendKeys("spouse");
//		AddInfoSameAddressNoRadioBtn.click();
//		AddInfoStreetNumberTextField.sendKeys("111");
//		AddInfoStreetNameTextField.sendKeys("11111");
//		AddInfoAptSuiteTextField.sendKeys("111");
//		AddInfoCityTextField.sendKeys("1111");
//		AddInfoProvinceDropdown.sendKeys("ALBERTA");
//		AddInfopostalCode1TextField.sendKeys("a1a");
//		AddInfoPostalCode2TextField.sendKeys("1a1");

		
		
		
//		driver.findElement(By.id("additionalInformation_OptionalInsurance_YesNoTextField")).click();

		

		OptionalProductsPageOptInsurance.get().goToConfirmationPage();
			
//		OptionalProductsPageSuppCard.get().fillSuppCardSection();
//		fillOptionalInsurance();
//		AddInfoContinueBtn.click();
		
		ConfirmationPage.get().goToIdentityVerificationPage();
		
	}

}
