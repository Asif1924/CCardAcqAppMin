package com.epam.brb.ui_objects;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;

public class PersInfoPage extends BasePage {

	// singletone init
	private static PersInfoPage page;

	// singletone init
	public static PersInfoPage get() {
		if (page == null) {
			page = new PersInfoPage();
		}
		return page;
	}

	// fill all fields on Tell Us About Yourself section with opening
	// "Prevoius address subsection"
	public List<WebElement> mandatoryFieldsListPersInfoPage() {

		List<WebElement> list = new ArrayList<>();
		list.addAll(PersInfoPageTellUsAboutYourself.get()
				.mandatoryFieldsListTellUsAboutYourself());
		list.addAll(PersInfoPageEmploymentInfo.get()
				.mandatoryFieldsListEmploymentDropdown());
		list.addAll(PersInfoPageFinancialInformation.get()
				.mandatoryFieldsListFinancialInfo());
		return list;
	}
	
	public List<WebElement> mandatoryFieldsListPersInfoPagePlusPrevAddress() {
		List<WebElement> list = new ArrayList<>();
		list.addAll(mandatoryFieldsListPersInfoPage());
		list.addAll(PersInfoPagePreviousAddress.get().mandatoryFieldsListPreviousAddress());
		
		return list;
	}
	public List<WebElement> mandatoryFieldsListPersInfoPagePlusEmploymentInfo() {
		List<WebElement> list = new ArrayList<>();
		list.addAll(mandatoryFieldsListPersInfoPage());
		list.addAll(PersInfoPageEmploymentInfo.get().mandatoryFieldsExtendedListEmploymentInfo());
		
		return list;
	}

	// This is to fix "SessionID is null" problem. for @AfterTest.
	public static void setPageToNull() {
		com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself.setPageToNull();
		com.epam.brb.ui_objects.PersInfoPagePreviousAddress.setPageToNull();
		com.epam.brb.ui_objects.PersInfoPageEmploymentInfo.setPageToNull();
		com.epam.brb.ui_objects.PersInfoPageFinancialInformation.setPageToNull();
	}
}
