package com.epam.brb.ui_objects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class OptionalProductsPageOptInsurance {

	public static OptionalProductsPageOptInsurance page; 
	
	
//	@FindBy(id="additionalInformation_OptionalInsurance_YesNoTextField")
	@FindBy(xpath="//")
	public WebElement AddInfoOptInsuranceCheckbox;
	
	@FindBy(id="additionalInformation_optionalInsurance_CP_Agreement")
	public WebElement AddInfoOptInsuranceCPAgreementCheckbox;
	
	@FindBy(id="additionalInformation_OptionalInsurance_IW_CheckField")
	public WebElement AddInfoOptInsuranceIWCheckbox;
	
	@FindBy(id="additionalInformation_optionalInsurance_IW_Agreement")
	public WebElement AddInfoOptInsuranceIWAgreementCheckbox;
	
	@FindBy(id="additionalInformation_ContinueButton")
	public WebElement AddInfoContinueBtn;
	
	public static OptionalProductsPageOptInsurance get(){
		if(page == null) {
			page = new OptionalProductsPageOptInsurance();
		}
		return page;
	}
	// method for fixing "sessionID is null" problem
		public static void setPageToNull() {
			if (page != null) {
				page = null;
			}
		}
	

	
	public void fillOptionalInsurance() {
		AddInfoOptInsuranceCheckbox.click();
//		AddInfoOptInsuranceCheckbox.click();
		AddInfoOptInsuranceCPAgreementCheckbox.click();
		AddInfoOptInsuranceIWCheckbox.click();
		AddInfoOptInsuranceIWAgreementCheckbox.click();
		
		
	}
	
	public void goToConfirmationPage() {
		
//		OptionalProductsPageSuppCard.get().fillSuppCardSection();
//		fillOptionalInsurance();
		
		AddInfoOptInsuranceCheckbox.click();
		AddInfoOptInsuranceCPAgreementCheckbox.click();
		AddInfoOptInsuranceIWCheckbox.click();
		AddInfoOptInsuranceIWAgreementCheckbox.click();
		AddInfoContinueBtn.click();
		
	}
}
