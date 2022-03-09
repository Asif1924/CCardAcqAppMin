package com.ctfs.wicimobile.util;

import java.lang.reflect.Method;

import android.app.Activity;
import android.util.Log;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;

import org.w3c.dom.Document;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import com.airwatch.sdk.AirWatchSDKException;
import com.airwatch.sdk.SDKManager;

import java.io.IOException;
import java.io.StringReader;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class WICIDeviceInfoHelper {

	private static final String LOG_TAG = "WICIDeviceInfoHelper";
	private String serialNo = "UNKNOWN";
	private static volatile WICIDeviceInfoHelper instance= null;
	
	public static WICIDeviceInfoHelper getInstace(Activity activity){
		/*
		 * if(instance == null){ instance = new WICIDeviceInfoHelper (activity); }
		 * return instance;
		 */
	    if (instance == null)
		{
			// To make thread safe
			synchronized (WICIDeviceInfoHelper.class)
			{
				// check again as multiple threads
				// can reach above step
				if (instance==null)
					instance = new WICIDeviceInfoHelper(activity);
			}
		}
		return instance;
   }
	private WICIDeviceInfoHelper(final Activity activity) {
		new Thread(new Runnable() {
		    public void run() {
		    	Log.i(LOG_TAG, "WICIDeviceInfoHelper - 1");
		    	
		    	if(android.os.Build.VERSION.SDK_INT < 29) {
		    		try {
			        	Class<?> c = Class.forName("android.os.SystemProperties");
						Method get = c.getMethod("get", String.class, String.class);
						serialNo = (String) get.invoke(c, "ril.serialnumber", "unknown");
						Log.i(LOG_TAG, "Manufacturer Serial#:" + serialNo );
			    	}catch (NoSuchMethodException e) {
						Log.e(LOG_TAG, "Error: ", e);
						e.printStackTrace();
					} catch (IllegalAccessException e) {
						Log.e(LOG_TAG, "Error: ", e);
						e.printStackTrace();
					} catch (IllegalArgumentException e) {
						Log.e(LOG_TAG, "Error: ", e);
						e.printStackTrace();
					} catch (InvocationTargetException e) {
						Log.e(LOG_TAG, "Error: ", e);
						e.printStackTrace();
					} catch (ClassNotFoundException e) {
						Log.e(LOG_TAG, "Error: ", e);
						e.printStackTrace();
					} 
		    	}
		    	
		    	Log.i(LOG_TAG, "WICIDeviceInfoHelper - 2:" + serialNo);
		    	//TODO - Check for correct blank value 00000000000
				if(serialNo.equalsIgnoreCase("UNKNOWN") || serialNo.equalsIgnoreCase("00000000000")) {
			    	try {
			    	
				    	SDKManager awSDKManager = SDKManager.init(activity);
				    	String customSettings = awSDKManager.getCustomSettings(); 
				    	
				    	DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
				        DocumentBuilder builder = factory.newDocumentBuilder();
				        InputSource is = new InputSource(new StringReader(customSettings));
				        Document customSettingXML = builder.parse(is);
				        			        
				        XPathFactory xPathfactory = XPathFactory.newInstance();
				        XPath xpath = xPathfactory.newXPath();
				        XPathExpression expr = xpath.compile("/custom/item[@key='uniqueIdentifier']/@value");
				        serialNo = (String) expr.evaluate(customSettingXML, XPathConstants.STRING);
				        
						Log.i(LOG_TAG, "Retrieved Custom Settings: " + customSettings);
			        } catch (AirWatchSDKException e) {
			            Log.e(LOG_TAG, "Error: ", e);
			        } catch (ParserConfigurationException e) {
			        	Log.e(LOG_TAG, "Error: ", e);
					} catch (SAXException e) {
						Log.e(LOG_TAG, "Error: ", e);
					} catch (IOException e) {
						Log.e(LOG_TAG, "Error: ", e);
					} catch (XPathExpressionException e) {
						Log.e(LOG_TAG, "Error: ", e);
					}
				}
				
				Log.i(LOG_TAG, "WICIDeviceInfoHelper - 3" + serialNo);
				//if(serialNo.equalsIgnoreCase("UNKNOWN") || serialNo.equalsIgnoreCase("00000000000")) {
					//serialNo = "R52R70ETM9W";
				//}
					
		        //TODO - Need to throw error to user if unable to retrieve settings, suggesting the user to reapply the customer settings profile.
		    }
		}).start();
	}
	
	/*
	//This is current, this does not work in new Android 11 environment. 
	static{
		try
		{
			
			Class<?> c = Class.forName("android.os.SystemProperties");
			Method get = c.getMethod("get", String.class, String.class);
			serialNo = (String) get.invoke(c, "ril.serialnumber", "unknown");
			Log.i(LOG_TAG, "Manufacturer Serial#:" + serialNo );
			
		}
		catch (Exception ignored)
		{		
			Log.e(LOG_TAG, "Exception:" + ignored.getMessage() );
		}
		
	}
	
	public static String getDeviceSerialNo() {
		return serialNo;
	}
	*/
	
	public String getDeviceSerialNo() {
		return serialNo;
	}
	  
	
}
