package com.epam.brb.tests;

import static com.epam.brb.fieldsMethods.FieldsMethods.clickAndHold;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;

public class Overview001 extends BaseTest{
	
	@Test
	
	public void overview001()  {
//		OverviewPage.get().open();
		clickAndHold(OverviewPage.get().startApplicationButton);
		//Check if button animation occurs (if it have "active" class)
		Assert.assertTrue(OverviewPage.get().isPressedBtn(), "Button is not pressed");
		
		// TODO stillAtThisPage method in OVerviewPage.
		
		
		
//		
		
		
		
	}

}
