//package com.epam.brb.core;
//
//import java.net.MalformedURLException;
//import java.net.URL;
//import java.util.List;
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.android.AndroidDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;
//import org.openqa.selenium.firefox.FirefoxProfile;
//import org.openqa.selenium.ie.InternetExplorerDriver;
//import org.openqa.selenium.remote.DesiredCapabilities;
//import org.openqa.selenium.remote.RemoteWebDriver;
//
//public class Driver {
//
//    private Driver() {
//    }
//
//    private static ThreadLocal<WebDriver> driver = new ThreadLocal<>();
//
//    public static WebDriver get() {
//        return driver.get();
//    }
//
//    public  boolean isElementPresent(By locator) {
//        get().manage().timeouts().implicitlyWait(0, TimeUnit.SECONDS);
//        List<WebElement> elements = get().findElements(locator);
//        get().manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
//        return elements.size() > 0 && elements.get(0).isDisplayed();
//    }
//
//    public static void set(WebDriver driverInput) {
//        driver.set(driverInput);
//    }
//
//    public static void init() {
////        Properties properties = new Properties();
////        FileInputStream propFile;
////        try {
////            propFile = new FileInputStream("/project.properties");
////            properties.load(propFile);
////        } catch (IOException e) {
////            e.printStackTrace();
////            Assert.fail(e.getMessage());
////        }
////        @SuppressWarnings("unchecked")
////        Enumeration<String> e = (Enumeration<String>) properties.propertyNames();
////        while (e.hasMoreElements()) {
////            String key = e.nextElement();
////            System.setProperty(key, properties.getProperty(key));
////            Reporter.log(key + " - " + properties.getProperty(key), 2, true);
////        }
//        WebDriver driverInput;
//        switch (PropertyLoader.getProperty("test.browser")) {
//            case "firefox":
//                FirefoxProfile profile = new FirefoxProfile();
//                profile.setPreference("browser.helperApps.alwaysAsk.force", false);
//                profile.setPreference("browser.download.folderList", 2);
//                profile.setPreference("browser.download.dir", "C:\\tmp");
//                profile.setPreference("services.sync.prefs.sync.browser.download.manager.showWhenStarting", false);
//                profile.setPreference("browser.download.useDownloadDir", true);
//                profile.setPreference("browser.helperApps.neverAsk.saveToDisk", "application/zip, application/x-gzip, image/bmp");
//                driverInput = new FirefoxDriver(profile);
//                break;
//            case "iexplore":
//                System.setProperty("webdriver.ie.driver", "lib/IEDriverServer.exe");
//                driverInput = new InternetExplorerDriver();
//                break;
//            case "android":
//                driverInput = new AndroidDriver();
//                break;
//            case "chrome":
//                System.setProperty("webdriver.chrome.driver", "lib/chromedriver.exe");
//                driverInput = new ChromeDriver();
//                break;
//            case "chrome_hub":
//                DesiredCapabilities capability = DesiredCapabilities.chrome();
//                try {
//                    driverInput = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), capability);
//                } catch (MalformedURLException e1) {
//                    e1.printStackTrace();
//                    throw new AssertionError("Unexpected error during remote WebDriver setup");
//                }
//                break;
//            default:
//                throw new AssertionError("Unsupported browser: " + System.getProperty("test.browser"));
//        }
//        driverInput.manage().timeouts().implicitlyWait(
//                Integer.parseInt(PropertyLoader.getProperty("test.timeout")),
//                TimeUnit.SECONDS
//        );
//        
//        Driver.set(driverInput);
//        Driver.get().navigate().to(PropertyLoader.getProperty("test.baseURL"));
//    }
//
//    public static void tearDown() throws Exception{
//        Driver.get().quit();
////        Thread.sleep(3000);
////        OverviewPage.page=null;
//    }
//}