package com.epam.brb.ui_objects;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PersInfoPageEmploymentInfo extends BasePage{
	
//	singletone init
	private static PersInfoPageEmploymentInfo page;
	
	//Employer Type
	@FindBy(id="personalInformation_EmploymentType_TextField")
	public WebElement EmploymentTypeDropdown;
	
	//Employment Subsection
	@FindBy(id="employerInformationArea")
	public WebElement employmentSubsectionArea;
	
	@FindBy(id="personalInformation_Employer_TextField")
	public WebElement employerTextField;
	
	@FindBy(id="personalInformation_EmployerCity_TextField")
	public WebElement employmentCityTextField;
	
	@FindBy(id="personalInformation_JobTitle_TextField")
	public WebElement eploymentJobCategoryDropdown;
	
	@FindBy(id="personalInformation_JobDescription_TextField")
	public WebElement employmentJobTitleTextField;
	
	@FindBy(id="personalInformation_EmployerSince_Month")
	public WebElement employerSinceMonthDropdown;
	
	@FindBy(id="personalInformation_EmployerSince_Year")
	public WebElement EmployerSinceYearTextField;
	
	
//	singletone init
	public static PersInfoPageEmploymentInfo get(){
		if(page == null) {
			page = new PersInfoPageEmploymentInfo();
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
	public void extendEmloyerInformation() {
		EmploymentTypeDropdown.sendKeys("FullTime");
	}
	
	public void fillMandatoryEmploymentInfoSection() {
		EmploymentTypeDropdown.sendKeys("FullTime");
		employerTextField.sendKeys("123asd '-");
		employmentCityTextField.sendKeys("123asd '-");
		eploymentJobCategoryDropdown.sendKeys("DRIVER");
		employmentJobTitleTextField.sendKeys("123asd '-");
		employerSinceMonthDropdown.sendKeys("january");
		EmployerSinceYearTextField.sendKeys("2013");
		
	}
	public List<WebElement> mandatoryFieldsListEmploymentDropdown() {
		List<WebElement> elements = new ArrayList<>();
		elements.add(EmploymentTypeDropdown);
		return elements;  
	}

	public List<WebElement> mandatoryFieldsExtendedListEmploymentInfo() {
		List<WebElement> elements = new ArrayList<>();
		elements.add(EmploymentTypeDropdown);
		elements.add(employerTextField);
		elements.add(employmentCityTextField);
		elements.add(eploymentJobCategoryDropdown);
		elements.add(employmentJobTitleTextField);
		elements.add(EmployerSinceYearTextField);
		elements.add(employerSinceMonthDropdown);
		
		return elements;  
	}
	
	//method to pass Overview page and open employment subsection
	public void goToPersInfoAndOpenEmploymentInfoSubSection(String elementToChoose) {
		WebElement employmentType = PersInfoPageEmploymentInfo
				.get().EmploymentTypeDropdown;
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");
		employmentType.sendKeys(elementToChoose);
		
	}
	
	
//	public void setpersonalInformationFirstNameTextField
	
}
