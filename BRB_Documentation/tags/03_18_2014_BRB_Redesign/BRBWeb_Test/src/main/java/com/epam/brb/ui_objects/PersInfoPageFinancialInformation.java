package com.epam.brb.ui_objects;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PersInfoPageFinancialInformation extends BasePage{
	
//	singletone init
	private static PersInfoPageFinancialInformation page;
	
	//PrevAddress Street Number
	@FindBy(id="personalInformation_GrossAnnualIncome_TextField")
	public WebElement GrossAnnualIncomeTextField;
	
	@FindBy(id="personalInformation_ChequingAccount_TextField")
	public WebElement ChequingAccountCheckbox;
	
	@FindBy(id="personalInformation_SavingsAccount_TextField")
	public WebElement SavingsAccountCheckbox;
	
	@FindBy(id="personalInformation_BankLoanTextField")
	public WebElement BankLoanCheckbox;
	
	@FindBy(id="personalInformation_CreditCard_TextField")
	public WebElement CreditCardCheckbox;
	
	@FindBy(id="personalInformation_GasCard_TextField")
	public WebElement GasCardCheckbox;
	
	@FindBy(id="personalInformation_StoreCard_TextField")
	public WebElement StoreCardCheckbox;
	
	@FindBy(id="personalInformation_ContinueButton")
	public WebElement PersInfoContinueBtn;
	
//	singletone init
	public static PersInfoPageFinancialInformation get(){
		if(page == null) {
			page = new PersInfoPageFinancialInformation();
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
	
	//fill all fields on Tell Us About Yourself section with opening "Prevoius address subsection" 
	
	
	public void fillFinancialInfoSection() {
		PersInfoPageFinancialInformation.get().GrossAnnualIncomeTextField.sendKeys("123asd '-");
		PersInfoPageFinancialInformation.get().ChequingAccountCheckbox.click();
		PersInfoPageFinancialInformation.get().SavingsAccountCheckbox.click();
		PersInfoPageFinancialInformation.get().BankLoanCheckbox.click();
		PersInfoPageFinancialInformation.get().CreditCardCheckbox.click();
		PersInfoPageFinancialInformation.get().GasCardCheckbox.click();
		PersInfoPageFinancialInformation.get().StoreCardCheckbox.click();
		
	}

	public void goToOptionalProductsPage() {
		fillFinancialInfoSection();
		PersInfoContinueBtn.click();
	}
	
	
	
	public List<WebElement> mandatoryFieldsListFinancialInfo() {
		List<WebElement> elements = new ArrayList<>();
		elements.add(GrossAnnualIncomeTextField);
		
		return elements;  
	}
	
	
//	public void setpersonalInformationFirstNameTextField
	
}
