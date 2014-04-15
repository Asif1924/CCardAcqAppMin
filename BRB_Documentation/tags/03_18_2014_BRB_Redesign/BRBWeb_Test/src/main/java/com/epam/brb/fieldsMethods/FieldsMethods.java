package com.epam.brb.fieldsMethods;

import static com.epam.brb.core.Context.driver;

import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.DataFlavor;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;

public class FieldsMethods extends BaseTest {
	static Calendar cal = (Calendar) Calendar.getInstance();
	
	
	public static void inputMethod(String idToFind, String valueToEnter) {
		if (driver.findElement(By.id(idToFind)).equals(null)) {
			driver.findElement(By.id(idToFind)).sendKeys(valueToEnter);
		} else {
			driver.findElement(By.id(idToFind)).clear();
			driver.findElement(By.id(idToFind)).sendKeys(valueToEnter);
		}
	}

	public static void dropdownMethod(WebElement idToFind, String whatToChoose) {
		new Select(idToFind).selectByVisibleText(whatToChoose);
		idToFind.click();
	}

	public static void clickMethod(String idToFind) {
		driver.findElement(By.id(idToFind)).click();
	}

	public static void clickAndHold(WebElement WebElement) {
		Actions holdAction = new Actions(driver);
		holdAction.clickAndHold(WebElement).perform();
	}

	public static void releaseHold(WebElement WebElement) {
		Actions releaseAction = new Actions(driver);
		releaseAction.release(WebElement).perform();
	}

	public static void clickedButtonCheck(WebElement ElementToClickOn,
			String whatToCheck) {
		clickAndHold(ElementToClickOn);
		Assert.assertFalse(OverviewPage.get().isPressedBtn(),
				"button is not pressed");
		releaseHold(ElementToClickOn);
	}

	public static boolean doesPageContainAnyErrors() {
		if (driver
				.findElement(
						By.xpath("//body//*[contains(concat(' ', normalize-space(@class), ' '), 'errorField')]"))
				.isDisplayed()) {

		}
		return true;
	}

	public static void doesFieldContainsError(WebElement webelement) {
		webelement.getAttribute("class").split(" ");
	}

	 
	// Returns true/false
	public static void howManySymbolsInTheFieldCheck(WebElement webelement,int NumberOfSymbolsShouldBe) throws Exception {
		 //new realization of method checking how many symbols eneterd in the field
		 String stringEntered =  ((JavascriptExecutor)driver).executeScript("return document.getElementById('" +webelement.getAttribute("id") +  "').value").toString();
		 Assert.assertEquals(stringEntered.length(), NumberOfSymbolsShouldBe);
		
		 
		 // old realization of method checking how many symbols eneterd in the field
		// webelement.click();
		// webelement.sendKeys(Keys.chord(Keys.CONTROL, "a"));
		// webelement.sendKeys(Keys.chord(Keys.CONTROL, "c"));
		// Toolkit toolkit = Toolkit.getDefaultToolkit();
		// Clipboard clipboard = toolkit.getSystemClipboard();
		// String result = (String) clipboard.getData(DataFlavor.stringFlavor);
		// int NumberOfSymbolsWeHave = result.length();
		// Assert.assertEquals(NumberOfSymbolsWeHave, NumberOfSymbolsShouldBe,
		// "number of elements in the field is not as should be element:"
		//				+ webelement.getAttribute("id"));
	}

	public static String getSymbolsFromTheField(WebElement webelement)
			throws Exception {
		//new realization of get data from field method
		String stringEntered =  ((JavascriptExecutor)driver).executeScript("return document.getElementById('" +webelement.getAttribute("id") +  "').value").toString();
		
		//old realization of get data from field method 
//		webelement.click();
//		webelement.sendKeys(Keys.chord(Keys.CONTROL, "a"));
//		webelement.sendKeys(Keys.chord(Keys.CONTROL, "c"));
//		Toolkit toolkit = Toolkit.getDefaultToolkit();
//		Clipboard clipboard = toolkit.getSystemClipboard();
//		String result = (String) clipboard.getData(DataFlavor.stringFlavor);
//		return result;
		
		
		return stringEntered;
	}

	// Verify, that fields passed to this method are highlighted
	public static void verifyFieldsAreHighlighted(
			List<WebElement> listOfElementsOnThePage,
			List<WebElement> exceptionsList) {

		for (WebElement webelement : listOfElementsOnThePage) {
//			System.out.println(webelement.getAttribute("id"));
			if (exceptionsList == null || !exceptionsList.contains(webelement)) {
				Assert.assertTrue(
						webelement.getAttribute("class").contains("errorField"),
						"the element with ID " + webelement.getAttribute("id")
								+ " is not highlighted...");
			}
		}
		if (exceptionsList != null) {
			for (WebElement webelement : exceptionsList) {
				Assert.assertTrue(
						!webelement.getAttribute("class")
								.contains("errorField"), "the element "
								+ webelement.getAttribute("id")
								+ " is highlighted, but should not be...");
			}
		}
	}

	public static void isSubsectionShown(WebElement element) {
		Assert.assertEquals(element.getAttribute("style"), "display: table-row-group;",
				"element with ID " + element.getAttribute("id")
						+ " is not shown, but should be...");

	}

	public static void isSubsectionNotShown(WebElement element) {
		Assert.assertEquals(element.getAttribute("style"),
				"display: none;",
				"element with ID " + element.getAttribute("id")
						+ " is shown, but should not be...");
	}
	//getting different month values
	public static String getCurrentMonth = new SimpleDateFormat("MMMM").format(Calendar.getInstance().getTime());
	public static String getCurrentYear = new SimpleDateFormat("YYYY").format(Calendar.getInstance().getTime());
	public static String getCurrentDay = new SimpleDateFormat("d").format(Calendar.getInstance().getTime());
	public static String getNextMonth = getNextMonth();
	public static String getTwoYearsBack = getTwoYearsBack();
	public static String getPrevMonth = getPrevMonth();
	
	
	protected static String getNextMonth() {
		cal.add(Calendar.MONTH, 1);
		String NextMonth = new SimpleDateFormat("MMMM").format(cal.getTime());
		return NextMonth;
	}
	protected static String getTwoYearsBack() {
		cal.add(Calendar.YEAR, -1);
		String PrevYear = new SimpleDateFormat("YYYY").format(cal.getTime());
		return PrevYear;
	}
	protected static String getPrevMonth() {
		cal.add(Calendar.MONTH, -1);
		String PrevMonth = new SimpleDateFormat("MMMM").format(cal.getTime());
		return PrevMonth;
	}
	
	
}
