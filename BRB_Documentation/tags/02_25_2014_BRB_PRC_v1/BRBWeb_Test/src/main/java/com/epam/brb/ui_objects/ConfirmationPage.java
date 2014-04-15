package com.epam.brb.ui_objects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ConfirmationPage {

	public static ConfirmationPage page;
	
	
	@FindBy(id="confirmation_AboutYourself_EditButton")
	public WebElement ConfirmAboutYourselfEditBtn;
	
	@FindBy(id="confirmation_EmploymentInformation_EditButton")
	public WebElement ConfirmEmploymentInfoEditBtn;
	
	@FindBy(id="confirmation_FinancialInformation_EditButton")
	public WebElement ConfirmFinancialInfoEditBtn;
	
	@FindBy(id="confirmation_GetSuplementaryCard_EditButton")
	public WebElement ConfirmGetSupplCardEditBtn;
	
	@FindBy(id="confirmation_Insurance_EditButton")
	public WebElement ConfirmInsuranceEditBtn;
	
	@FindBy(id="confirmation_Application_Authorization_CheckBox_Field")
	public WebElement ConfirmAppAuthorizationCheckbox;
	
	@FindBy(id="confirmation_Electronic_Regulations_CheckBox_Field")
	public WebElement ConfirmElectronicRegulationsCheckbox;
	
	@FindBy(id="confirmation_continueButton")
	public WebElement ConfirmContinueBtn;
	
	public static ConfirmationPage get() {
		if (page == null) {
			page = new ConfirmationPage();
			
		}
		return page;
	}
	
	public void goToIdentityVerificationPage() {
		ConfirmAppAuthorizationCheckbox.click();
		ConfirmElectronicRegulationsCheckbox.click();
		ConfirmContinueBtn.click();
	}



//method for fixing "sessionID is null" problem
	public static void setPageToNull() {
		if (page != null) {
			page = null;
		}
	}
	
}