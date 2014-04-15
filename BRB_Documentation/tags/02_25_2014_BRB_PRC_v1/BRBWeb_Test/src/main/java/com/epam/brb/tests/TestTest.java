package com.epam.brb.tests;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;
public class TestTest extends BaseTest{
	
	@Test
	public void testTest() throws Exception {
		
		Calendar cal = (Calendar) Calendar.getInstance();
		
		
		cal.add(Calendar.MONTH, 1);
		String getNextMonth = new SimpleDateFormat("MMMM").format(cal.getTime());
		
		
		
		System.out.println(getNextMonth);
		String getNextMonth2 = new SimpleDateFormat("MMMM").format(Calendar.getInstance().getTime());
		System.out.println(getNextMonth2);
//		System.out.println(Calendar.getInstance().get(Calendar.MONTH));
		
		
		OverviewPage.get().goToPersonalInfoPage("ALBERTA");
		PersInfoPageTellUsAboutYourself.get().CityTextField.sendKeys("asd");
//		Thread.sleep(3000);
		
//		String idOfelement= PersInfoPageTellUsAboutYourself.get().CityTextField.getAttribute("id");
		
		
		
		
//		System.out.println(input);
//		System.out.println(PersInfoPageTellUsAboutYourself.get().CityTextField);
		

//		PersInfoPageTellUsAboutYourself.get().CityTextField.sendKeys("asd");

	}

}
