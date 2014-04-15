package com.epam.brb.ui_objects;

import static com.epam.brb.core.Context.driver;

import org.openqa.selenium.support.PageFactory;

public abstract class BasePage {
	// initiating PageFactory
	protected BasePage() {
		PageFactory.initElements(driver, this);
	}

}
