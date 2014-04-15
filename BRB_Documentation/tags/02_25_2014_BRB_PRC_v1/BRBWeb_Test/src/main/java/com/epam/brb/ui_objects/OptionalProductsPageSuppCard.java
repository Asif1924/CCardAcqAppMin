package com.epam.brb.ui_objects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class OptionalProductsPageSuppCard extends BasePage {

	private static OptionalProductsPageSuppCard page;
	
	@FindBy(id= "additionalInformation_AuthorizeSupplementaryCardmember_CheckBox_Field")
	public WebElement AddInfoAuthSuppCardCheckbox;
	
	@FindBy(id= "additionalInformation_Title_TextField")
	public WebElement AddInfoTitleTextField;
	
	@FindBy(id= "additionalInformation_FirstName_TextField")
	public WebElement AddInfoFirstNameTextField;
	
	@FindBy(id= "additionalInformation_Initial_TextField")
	public WebElement AddInfoInitialTextField;
	
	@FindBy(id= "additionalInformation_LastName_TextField")
	public WebElement AddInfoLastNameTextField;
	
	@FindBy(id= "additionalInformation_DateOfBirth_Month")
	public WebElement AddInfoDOBMonthDropdown;
	
	@FindBy(id= "additionalInformation_DateOfBirth_Day")
	public WebElement AddInfoDOBDayDropdown;
	
	@FindBy(id= "additionalInformation_DateOfBirth_Year")
	public WebElement AddInfoDOBYearTextField;
	
	@FindBy(id= "additionalInformation_PrimaryPhone_1_TextField")
	public WebElement AddInfoPhone1TextField;
	
	@FindBy(id= "additionalInformation_PrimaryPhone_2_TextField")
	public WebElement AddInfoPhone2TextField;
	
	@FindBy(id= "additionalInformation_PrimaryPhone_3_TextField")
	public WebElement AddInfoPhone3TextField;
	
	@FindBy(id= "additionalInformation_Relationship_TextField")
	public WebElement AddInfoRelationshipDropdown;
	
	@FindBy(id= "additionalInformation_SameAddresYes")
	public WebElement AddInfoSameAddressYesRadioBtn;
	
	@FindBy(id= "additionalInformation_SameAddresNo")
	public WebElement AddInfoSameAddressNoRadioBtn;
	
	@FindBy(id= "additionalInformation_StreetNumber_TextField")
	public WebElement AddInfoStreetNumberTextField;
	
	@FindBy(id= "additionalInformation_StreetName_TextField")
	public WebElement AddInfoStreetNameTextField;
	
	@FindBy(id= "additionalInformation_Suite_TextField")
	public WebElement AddInfoAptSuiteTextField;
	
	@FindBy(id= "additionalInformation_City_TextField")
	public WebElement AddInfoCityTextField;
	
	@FindBy(id= "additionalInformation_Province_TextField")
	public WebElement AddInfoProvinceDropdown;
	
	@FindBy(id= "additionalInformation_PostalCode1_TextField")
	public WebElement AddInfopostalCode1TextField;
	
	@FindBy(id= "additionalInformation_PostalCode2_TextField")
	public WebElement AddInfoPostalCode2TextField;
	
	
	
	
	public static OptionalProductsPageSuppCard get(){
		if(page == null) {
			page = new OptionalProductsPageSuppCard();
		}
		return page;
	}
	// method for fixing "sessionID is null" problem
		public static void setPageToNull() {
			if (page != null) {
				page = null;
			}
		}
	
	public void fillSuppCardSection() {
		AddInfoAuthSuppCardCheckbox.click();
		AddInfoTitleTextField.sendKeys("MR");
		AddInfoFirstNameTextField.sendKeys("1111");
		AddInfoInitialTextField.sendKeys("1");
		AddInfoLastNameTextField.sendKeys("1111");
		AddInfoDOBMonthDropdown.sendKeys("March");
		AddInfoDOBDayDropdown.sendKeys("1");
		AddInfoDOBYearTextField.sendKeys("1990");
		AddInfoPhone1TextField.sendKeys("123");
		AddInfoPhone2TextField.sendKeys("123");
		AddInfoPhone3TextField.sendKeys("1234");
		AddInfoRelationshipDropdown.sendKeys("spouse");
		AddInfoSameAddressNoRadioBtn.click();
		AddInfoStreetNumberTextField.sendKeys("111");
		AddInfoStreetNameTextField.sendKeys("11111");
		AddInfoAptSuiteTextField.sendKeys("111");
		AddInfoCityTextField.sendKeys("1111");
		AddInfoProvinceDropdown.sendKeys("ALBERTA");
		AddInfopostalCode1TextField.sendKeys("a1a");
		AddInfoPostalCode2TextField.sendKeys("1a1");
		
//		AddInfoContinueBtn.click();
		
		
	}
	

}
