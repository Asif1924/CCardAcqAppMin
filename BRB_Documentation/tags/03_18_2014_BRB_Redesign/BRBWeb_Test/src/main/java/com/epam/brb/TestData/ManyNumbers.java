package com.epam.brb.TestData;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.annotations.DataProvider;

import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class ManyNumbers {
	
	@DataProvider(name = "manyNumbers", parallel = false)
	public static Iterator<Object[]> monthsList() {
		List<Object[]> data = new ArrayList<Object[]>();
		data.add(new Object[] { (PersInfoPageTellUsAboutYourself.get().FirstNameTextField) , 40 });
//		data.add(new Object[] { "February" });
//		data.add(new Object[] { "March" });
//		data.add(new Object[] { "June" });
//		data.add(new Object[] { "July" });
//		data.add(new Object[] { "August" });
//		data.add(new Object[] { "September" });
//		data.add(new Object[] { "October" });
//		data.add(new Object[] { "November" });
//		data.add(new Object[] { "December" });

		return data.iterator();
	}

}
