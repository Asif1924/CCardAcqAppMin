package com.epam.brb.ui_objects;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import static com.epam.brb.fieldsMethods.FieldsMethods.*;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PersInfoPagePreviousAddress extends BasePage{
	
//	singletone init
	private static PersInfoPagePreviousAddress page;
	
	//PrevAddress Street Number
	@FindBy(id="personalInformation_PrevStreetNumber_TextField")
	public WebElement PrevStreetNumberTextField;
	
	@FindBy(id="personalInformation_PrevStreetName_TextField")
	public WebElement PrevStreetNameTextField;
	
	@FindBy(id="personalInformation_PrevSuite_TextField")
	public WebElement PrevAptSuiteTextField;
	
	@FindBy(id="personalInformation_PrevCity_TextField")
	public WebElement PrevCityTextField;
	
	@FindBy(id="personalInformation_PrevProvince_TextField")
	public WebElement PrevProvinceDropdown;
	
	//postal code
	//all field
	@FindBy(id="personalInformation_PostalCodePrev_Control")
	public WebElement PrevPostalCodeControl;
	
	@FindBy(id="personalInformation_PrevPostalCode1_TextField")
	public WebElement PrevPostalCode1TextField;
	
	@FindBy(id="personalInformation_PrevPostalCode2_TextField")
	public WebElement PrevPostalCode2TextField;
	
	//	singletone init
	public static PersInfoPagePreviousAddress get(){
		if(page == null) {
			page = new PersInfoPagePreviousAddress();
		}
		return page;
	}
	
	// This is to fix "SessionID is null" problem. for @AfterTest.
			public static void setPageToNull() {
				if(page != null) {
					page = null;
				}
		}
	
	//yes, save me time using my CT...
//	public void setAdditionalInformationAuthorizeSupplementaryCardmemberTextField() {
//		if (additionalInformationAuthorizeSupplementaryCardmemberTextField.isSelected()){
//		}
//		else {additionalInformationAuthorizeSupplementaryCardmemberTextField.click();
//		}
//	}
//	
//	public void unsetAdditionalInformationAuthorizeSupplementaryCardmemberTextField() {
//		if (additionalInformationAuthorizeSupplementaryCardmemberTextField.isSelected()) {
//			additionalInformationAuthorizeSupplementaryCardmemberTextField.click();			
//		}
//	}
//	
//	// Title
//	public void setPersonalInformationTitleTextField(String ItemToChoose) {
//		new Select(personalInformationTitleTextField).selectByVisibleText(ItemToChoose);
//		personalInformationTitleTextField.click();
//		
//	}
	
	//fill all fields on Tell Us About Yourself section with opening "Prevoius address subsection" 
	public void fillMandatoryPreviousAddressSection() {
		
		PrevStreetNumberTextField.sendKeys("1d '-");
		PrevStreetNameTextField.sendKeys("123asd");
		PrevCityTextField.sendKeys("123asd");
		PrevProvinceDropdown.sendKeys("ALBERTA");
		PrevPostalCode1TextField.sendKeys("a1a");
		PrevPostalCode2TextField.sendKeys("1a1");
		
	}
	
	public List<WebElement> mandatoryFieldsListPreviousAddress() {
		List<WebElement> elements = new ArrayList<>();
		elements.add(PrevStreetNumberTextField);
		elements.add(PrevStreetNameTextField);
		elements.add(PrevCityTextField);
		elements.add(PrevProvinceDropdown);
		elements.add(PrevPostalCodeControl);
		
		return elements;  
	}
	 
	public void goToPersInfoAndOpenPrevAddressSubSection() {
		WebElement atThisAddressSinceMonth = PersInfoPageTellUsAboutYourself
				.get().AtThisAddressSinceMonthDropdown;
		WebElement atThisAddressSinceYear = PersInfoPageTellUsAboutYourself
				.get().AtThisAddressSinceYearTextField;
		
		Calendar cal = (Calendar) Calendar.getInstance();
		cal.add(Calendar.MONTH, 1);
		cal.add(Calendar.YEAR, -2);
		String getNextMonth = new SimpleDateFormat("MMMM")
				.format(cal.getTime());
		String getTwoYearsBack = new SimpleDateFormat("YYYY").format(cal
				.getTime());
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");
		atThisAddressSinceYear.sendKeys(getTwoYearsBack);
		atThisAddressSinceMonth.sendKeys(getNextMonth);
		
	}
	
	public void openPrevAddressSubSection() {
		WebElement atThisAddressSinceMonth = PersInfoPageTellUsAboutYourself.get().AtThisAddressSinceMonthDropdown;
		WebElement atThisAddressSinceYear = PersInfoPageTellUsAboutYourself.get().AtThisAddressSinceYearTextField;
		
		atThisAddressSinceYear.sendKeys(getTwoYearsBack);
		atThisAddressSinceMonth.sendKeys(getNextMonth);
	}
	
	
//	public void setpersonalInformationFirstNameTextField
	
}
