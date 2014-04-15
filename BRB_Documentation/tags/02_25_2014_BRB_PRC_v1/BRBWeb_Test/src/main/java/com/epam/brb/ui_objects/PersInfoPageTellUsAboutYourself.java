package com.epam.brb.ui_objects;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

public class PersInfoPageTellUsAboutYourself extends BasePage {

	// singletone init
	private static PersInfoPageTellUsAboutYourself page;

	// Yes, save me time by using the information from My CT profile.
	@FindBy(id = "additionalInformation_AuthorizeSupplementaryCardmemberTextField")
	public WebElement YesSaveMeTimeCheckbox;

	// Title
	@FindBy(id = "personalInformation_Title_TextField")
	public WebElement TitleDropdown;

	// Name
	// First Name
	@FindBy(id = "personalInformation_FirstName_TextField")
	public WebElement FirstNameTextField;

	// Initial
	@FindBy(id = "personalInformation_Initial_TextField")
	public WebElement InitialTextField;

	// Last Name
	@FindBy(id = "personalInformation_LastName_TextField")
	public WebElement LastNameTextField;

	// Date of Birth
	// Month
	@FindBy(id = "personalData_DateOfBirth_Month")
	public WebElement DateOfBirthMonthDropdown;

	// Day
	@FindBy(id = "personalData_DateOfBirth_Day")
	public WebElement DateOfBirthDayDropdown;

	// Year
	@FindBy(id = "personalInformation_DateOfBirth_Year")
	public WebElement DateOfBirthYearTextField;

	// Email Address
	@FindBy(id = "personalInformation_Email_TextField")
	public WebElement EmailTextField;

	// I would like to receive e-mail communications on offers...
	@FindBy(id = "personalInformation_ReceiveEmail_TextField")
	public WebElement IWouldlikeToReceiveEmailCheckbox;

	// Preferred Language

	// all field
	@FindBy(id = "personalInformation_PreferredLanguage_Area")
	public WebElement PreferedLanguageArea;
	// English
	@FindBy(id = "personalInformation_LanguageEnglish")
	public WebElement PreferedLanguageEnglishRadioBtn;
	// French
	@FindBy(id = "personalInformation_LanguageFrench")
	public WebElement PreferedLanguageFrenchRadioBtn;

	// Primary Phone
	// all field
	@FindBy(id = "personalInformation_PrimaryPhone_Control")
	public WebElement PrimaryPhoneControl;

	// First field
	@FindBy(id = "personalInformation_PrimaryPhone1_TextField")
	public WebElement PrimaryPhone1TextField;

	// Second field
	@FindBy(id = "personalInformation_PrimaryPhone2_TextField")
	public WebElement PrimaryPhone2TextField;

	// Third field
	@FindBy(id = "personalInformation_PrimaryPhone3_TextField")
	public WebElement PrimaryPhone3TextField;

	// Social Insurance #
	@FindBy(id = "personalInformation_SocialInsurance")
	public WebElement SocialInsuranceArea;
	
	// First field
	@FindBy(id = "personalInformation_SocialInsurance1_TextField")
	public WebElement SocialInsurance1TextField;

	// Second field
	@FindBy(id = "personalInformation_SocialInsurance2_TextField")
	public WebElement SocialInsurance2TextField;

	// Third field
	@FindBy(id = "personalInformation_SocialInsurance3_TextField")
	public WebElement SocialInsurance3TextField;

	// Address
	// Street number
	@FindBy(id = "personalInformation_StreetNumber_TextField")
	public WebElement StreetNumberTextField;

	// Street name
	@FindBy(id = "personalInformation_StreetName_TextField")
	public WebElement StreetNameTextField;

	// Apt./Suite #
	@FindBy(id = "personalInformation_Suite_TextField")
	public WebElement AptSuiteTextField;

	// City
	@FindBy(id = "personalInformation_City_TextField")
	public WebElement CityTextField;

	// Province
	@FindBy(id = "personalInformation_Province_TextField")
	public WebElement ProvinceDropdown;

	// Postal Code
	// all field
	@FindBy(id = "personalInformation_PostalCode_Control")
	public WebElement PostalCodeControl;
	// First field
	@FindBy(id = "personalInformation_PostalCode1_TextField")
	public WebElement PostalCode1TextField;

	// Second field
	@FindBy(id = "personalInformation_PostalCode2_TextField")
	public WebElement PostalCode2TextField;

	// Housing Information
	// Residential Status
	@FindBy(id = "personalInformation_ResidentialStatus_TextField")
	public WebElement ResidentialStatusTextField;

	// Monthly Housing Payment
	@FindBy(id = "personalInformation_MonthlyHousingPayment_TextField")
	public WebElement MonthlyHousingPaymentTextField;

	// At This Address Since
	// Month
	@FindBy(id = "personalInformation_AddressSince_Month")
	public WebElement AtThisAddressSinceMonthDropdown;

	// Year
	@FindBy(id = "personalInformation_AddressSince_Year")
	public WebElement AtThisAddressSinceYearTextField;

	// Continuebutton
	@FindBy(id = "personalInformation_ContinueButton")
	public WebElement continueButton;

	// PageID
	@FindBy(xpath = "//section[@style='']")
	public WebElement pageID;

	// singletone init
	public static PersInfoPageTellUsAboutYourself get() {

		if (page == null) {
			page = new PersInfoPageTellUsAboutYourself();
		}
		return page;
	}

	// This is to fix "SessionID is null" problem. for @AfterTest.
	public static void setPageToNull() {
		if (page != null) {
			page = null;
		}
	}

	// fill all fields on Tell Us About Yourself section with opening
	// "Previous address subsection"
	public void fillMandatoryTellUsAboutYourselfSection() {
		TitleDropdown.sendKeys("MR");
		TitleDropdown.sendKeys("MR");
		FirstNameTextField.sendKeys("asd123");
		InitialTextField.sendKeys("1");
		LastNameTextField.sendKeys("asd123");
		DateOfBirthMonthDropdown.sendKeys("January");
		DateOfBirthDayDropdown.sendKeys("1");
		DateOfBirthYearTextField.sendKeys("1900");
		EmailTextField.sendKeys("asdf123_-@asd.com");
		PreferedLanguageEnglishRadioBtn.click();
		PrimaryPhone1TextField.sendKeys("123");
		PrimaryPhone2TextField.sendKeys("456");
		PrimaryPhone3TextField.sendKeys("7890");
		StreetNumberTextField.sendKeys("1d '-");
		StreetNameTextField.sendKeys("123asd '-");
		CityTextField.sendKeys("123asd '-");
		ProvinceDropdown.sendKeys("ALBERTA");
		PostalCode1TextField.sendKeys("a1a");
		PostalCode2TextField.sendKeys("1a1");
		ResidentialStatusTextField.sendKeys("own");
		MonthlyHousingPaymentTextField.sendKeys("123");
		AtThisAddressSinceYearTextField.sendKeys("2013");
		AtThisAddressSinceMonthDropdown.sendKeys("January");

	}

	public List<WebElement> mandatoryFieldsListTellUsAboutYourself() {
		List<WebElement> elements = new ArrayList<>();

		elements.add(FirstNameTextField);
		elements.add(LastNameTextField);
		elements.add(DateOfBirthMonthDropdown);
		elements.add(DateOfBirthDayDropdown);
		elements.add(DateOfBirthYearTextField);
		elements.add(EmailTextField);
		elements.add(PreferedLanguageArea);
		elements.add(PrimaryPhoneControl);
		elements.add(StreetNumberTextField);
		elements.add(StreetNameTextField);
		elements.add(CityTextField);
		elements.add(ProvinceDropdown);
		elements.add(PostalCodeControl);
		elements.add(ResidentialStatusTextField);
		elements.add(MonthlyHousingPaymentTextField);
		elements.add(AtThisAddressSinceMonthDropdown);
		elements.add(AtThisAddressSinceYearTextField);
		return elements;
	}

	public void areAtTheNextPageCheck() {
		Assert.assertEquals(pageID.getAttribute("id"),
				"AdditionalInformationScreen",
				"we are not on the Next page as expected");
	}

	public void areAtThisPageCheck() {
		Assert.assertEquals(pageID.getAttribute("id"),
				"PersonalInformationScreen",
				"we are not on the Next page as expected");
	}

}
