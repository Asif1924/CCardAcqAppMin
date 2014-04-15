package com.epam.brb.testsModified;

import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfoPageTellUsAboutYourselfPreferredLang extends BaseTest{
	@Test
	public void persInfo045() throws Exception {
		WebElement enRadiobutton = PersInfoPageTellUsAboutYourself.get().PreferedLanguageEnglishRadioBtn;
		WebElement LanguageRadiobuttonArea = PersInfoPageTellUsAboutYourself
				.get().PreferedLanguageArea;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> ExceptionsList = new ArrayList<>();
		ExceptionsList.add(LanguageRadiobuttonArea);

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, null);

		enRadiobutton.click();
		Assert.assertTrue(enRadiobutton.isSelected(),
				"RadioButton is not selected but should be");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();

		verifyFieldsAreHighlighted(mandatoryFieldsList, ExceptionsList);
	}
	
	@Test
	public void persInfo046() throws Exception {
		WebElement enRadiobutton = PersInfoPageTellUsAboutYourself.get().PreferedLanguageEnglishRadioBtn;
		WebElement frRadiobutton = PersInfoPageTellUsAboutYourself.get().PreferedLanguageFrenchRadioBtn;
		WebElement LanguageRadiobuttonArea = PersInfoPageTellUsAboutYourself
				.get().PreferedLanguageArea;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> ExceptionsList = new ArrayList<>();
		ExceptionsList.add(LanguageRadiobuttonArea);

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		enRadiobutton.click();
		Assert.assertTrue(enRadiobutton.isSelected(),
				"RadioButton is not selected but should be");

		frRadiobutton.click();
		Assert.assertTrue(frRadiobutton.isSelected(),
				"RadioButton is not selected but should be");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, ExceptionsList);
	}
	
}
