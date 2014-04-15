package com.epam.brb.core;

import static com.epam.brb.core.Context.driver;

import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import com.epam.brb.ui_objects.ConfirmationPage;
import com.epam.brb.ui_objects.OptionalProductsPageOptInsurance;
import com.epam.brb.ui_objects.OptionalProductsPageSuppCard;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPage;

public abstract class BaseTest {
	
	protected ThreadLocal<RemoteWebDriver> threadDriver = null;
	
	@BeforeMethod()
	public void initChrome() throws Exception {
		switch (PropertyLoader.getProperty("test.browser")) {

		case "hub_firefox":
			threadDriver = new ThreadLocal<RemoteWebDriver>();
	        DesiredCapabilities dc = new DesiredCapabilities();
	        FirefoxProfile fp = new FirefoxProfile();
	        dc.setCapability(FirefoxDriver.PROFILE, fp);
	        dc.setBrowserName(DesiredCapabilities.firefox().getBrowserName());
	        threadDriver.set(new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), dc));
	        break;
	        
		case "hub_chrome":
//			threadDriver = new ThreadLocal<RemoteWebDriver>();
////			TODO We need do do this correctly!!!
//	        DesiredCapabilities chromeDesiredCapabilities = new DesiredCapabilities();
//	        FirefoxProfile chromeProfile = new FirefoxProfile();
//	        chromeDesiredCapabilities.setCapability(FirefoxDriver.PROFILE, chromeProfile);
//	        chromeDesiredCapabilities.setBrowserName(DesiredCapabilities.chrome().getBrowserName());
////	        threadDriver.set(new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), chromeProfile));
	        
			break;
			
		case "hub_ie":
	        
		case "firefox":
			driver = new FirefoxDriver();
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			driver.get(PropertyLoader.getProperty("start.url"));
			break;
			
		case "chrome":
			System.setProperty("webdriver.chrome.driver", "lib/chromedriver.exe");
			driver = new ChromeDriver();
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			driver.get(PropertyLoader.getProperty("start.url"));
			break;
		case "ie":
			System.setProperty("webdriver.chrome.driver", "lib/IEdriverServer.exe");
			driver = new ChromeDriver();
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			driver.get(PropertyLoader.getProperty("start.url"));
			break;
		}
	}		
	
//	@BeforeClass
//	public void initFireFox() {
//
//	//			System.setProperty("webdriver.chrome.driver", "D:\\PROJECTS\\CTCO-FSMB\\BRBWeb_test(Old)\\Selenium_lib\\chromedriver.exe");
//			driver = new FirefoxDriver();
//		
//			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
//			driver.get(Config.getProperty("start.url"));
//	}	
	
	
//	@BeforeClass
//	public void initIE() {
//		System.setProperty("webdriver.ie.driver", "lib/IEDriverServer.exe");
//		driver = new InternetExplorerDriver();
//		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
//		driver.get(Config.getProperty("start.url"));
//	}	
	
//	@BeforeClass
//	public void initRemote() throws MalformedURLException {
//        DesiredCapabilities capability = DesiredCapabilities.internetExplorer();
//
//        driver = new RemoteWebDriver(new URL("http://192.168.4.52:4444/wd/hub"), capability);
//	}
	
	@AfterMethod
	public void cleanup() {
		driver.quit();
		//this string to fix "SessionID is null" problem 
		OverviewPage.setPageToNull();
		PersInfoPage.setPageToNull();
		OptionalProductsPageOptInsurance.setPageToNull();
		OptionalProductsPageSuppCard.setPageToNull();
		ConfirmationPage.setPageToNull();
		
	}

	
	
}
