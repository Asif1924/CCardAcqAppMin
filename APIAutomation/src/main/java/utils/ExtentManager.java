package utils;

import java.io.File;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.sql.Date;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;

public class ExtentManager {

    private static ExtentReports extent;
    public static String screenshotFolderPath;
    //private static Logger log = Logger.getLogger(ExtentManager.class);

    public static ExtentReports getInstance(String reportPath) throws UnknownHostException {
       String sMethod = "getInstance() :: ";
       
       System.out.println(sMethod);
       if (extent == null) {
              // generate report folder
              String fileName="Report.html";
              Date d = new Date(0);
              String folderName=d.toString().replace(":", "_");
              folderName=getComputerName()+"//"+folderName;

              // directory of the report folder
              new File(reportPath+folderName+"//screenshots").mkdirs();
              reportPath=reportPath+folderName+"//";
              screenshotFolderPath=reportPath+"screenshots//";
              //log.info(reportPath+fileName);
              System.out.println(sMethod + reportPath + fileName);
              createInstance(reportPath+fileName);
       }
        return extent;
    }

    public static String getComputerName() throws UnknownHostException {
              String computername = InetAddress.getLocalHost().getHostName();
              return computername.toUpperCase();
       }

    public static ExtentReports createInstance(String fileName) {
    	String sMethod = "createInstance() :: ";
    	
    	System.out.println(sMethod + fileName);
        ExtentHtmlReporter htmlReporter = new ExtentHtmlReporter(fileName);
       // htmlReporter.config().setTestViewChartLocation(ChartLocation.BOTTOM);
        //htmlReporter.config().setChartVisibilityOnOpen(true);
        //htmlReporter.config().enableTimeline(true);
        htmlReporter.config().setTheme(Theme.DARK);
        htmlReporter.config().setDocumentTitle("Reports");
        htmlReporter.config().setEncoding("utf-8");
        htmlReporter.config().setReportName("Reports - Automation Testing");

        extent = new ExtentReports();
        extent.attachReporter(htmlReporter);

        return extent;
    }
}