/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.ctfs.wicimobile;

import org.apache.cordova.CordovaActivity;

import com.ctfs.wicimobile.plugins.AppLanguagePlugin;
import com.ctfs.wicimobile.util.PrinterManager;
import com.ctfs.wicimobile.util.WICIAppSettingsStorageManager;
import com.ctfs.wicimobile.util.WICIDeviceInfoHelper;
import com.newrelic.agent.android.NewRelic;

import android.os.Bundle;
import android.util.Log;
import android.Manifest;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.util.Log;

public class WICIMobile3 extends CordovaActivity
{
	private static final String LOG_TAG = "WICIMobile3";
	private static final int APP_PERMISSION_REQUEST_CODE = 1;
	AlertDialog alertDialog;
	
	@Override
    public void onCreate(Bundle savedInstanceState) {
    	Log.i(LOG_TAG, "onCreate");
        super.onCreate(savedInstanceState);
        // Set by <content src="index.html" /> in config.xml
        
        //setContentView(R.layout.main);

        WICIAppSettingsStorageManager.init(this);
        String lang = WICIAppSettingsStorageManager.getInstance().getCurrentAppSettings().getAppLanguage();
        if ("F".equals(lang)) {
            AppLanguagePlugin.changeSystemLang(this, lang);
        }

        // Restore printers history
        PrinterManager.getInstance().populatePrinterHistoryFromPreferences(this);

        super.onCreate(savedInstanceState);
        // Set by <content src="index.html" /> in config.xml
        loadUrl(launchUrl);
        
        NewRelic.withApplicationToken("${NewRelic.WICI_App_Token}")
		.start(this.getApplicationContext());

        NewRelic.setUserId(WICIDeviceInfoHelper.getInstace(this).getDeviceSerialNo());
		NewRelic.setAttribute("PrinterMAC",PrinterManager.getInstance().getMacAddress() != null ? PrinterManager.getInstance().getMacAddress() : "NOT_AVAILABLE");
        
        //Orphaned and only relevant for DroidGap inheritance
        // super.loadUrl(Config.getStartUrl());
		// VZE-444
		if (!(checkSelfPermission(Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED && 
				checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED && 
				checkSelfPermission(Manifest.permission.ACCESS_COARSE_LOCATION) == PackageManager.PERMISSION_GRANTED && 
				checkSelfPermission(Manifest.permission.READ_CONTACTS) == PackageManager.PERMISSION_GRANTED && 
				checkSelfPermission(Manifest.permission.WRITE_CONTACTS) == PackageManager.PERMISSION_GRANTED && 
				checkSelfPermission(Manifest.permission.RECEIVE_SMS) == PackageManager.PERMISSION_GRANTED && 
				checkSelfPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE) == PackageManager.PERMISSION_GRANTED && 
				checkSelfPermission(Manifest.permission.READ_EXTERNAL_STORAGE) == PackageManager.PERMISSION_GRANTED && 
				checkSelfPermission(Manifest.permission.ACCESS_LOCATION_EXTRA_COMMANDS) == PackageManager.PERMISSION_GRANTED && 
				checkSelfPermission(Manifest.permission.RECORD_AUDIO) == PackageManager.PERMISSION_GRANTED && 
				checkSelfPermission(Manifest.permission.READ_PHONE_STATE) == PackageManager.PERMISSION_GRANTED))
		{           
		// Ask for all runtime permissions.           
		requestPermissions(new String[]{ 
				Manifest.permission.CAMERA,
				Manifest.permission.ACCESS_FINE_LOCATION, 
				Manifest.permission.ACCESS_COARSE_LOCATION,
				Manifest.permission.READ_CONTACTS,
				Manifest.permission.WRITE_CONTACTS,
				Manifest.permission.RECEIVE_SMS, 
				Manifest.permission.WRITE_EXTERNAL_STORAGE,
				Manifest.permission.READ_EXTERNAL_STORAGE, 
				Manifest.permission.ACCESS_LOCATION_EXTRA_COMMANDS,
				Manifest.permission.RECORD_AUDIO, 
				Manifest.permission.READ_PHONE_STATE
				},APP_PERMISSION_REQUEST_CODE); 
		}
    }
    
    @Override
    protected void onStop() {
        super.onStop();

        // Save printers history
        PrinterManager.getInstance().storePrinterHistoryInPreferences(this);

        Log.i(LOG_TAG, "WICIMobile3 stopped");
    } 
    
    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions,int[] grantResults) {
	    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
	    switch (requestCode) {
	    case APP_PERMISSION_REQUEST_CODE:
	       // If request is cancelled, the result arrays are empty.
		    if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED){ 
		    	//TODO - Check all permissions and show error pop-up if not everything is granted. }
		    }
		    else
		    { 
		    	//TODO - We should never be here as AirWatch should grant the permissions automatically. In case if we are, need to show error pop-up. 
		    	alertDialog =	new AlertDialog.Builder(this)
		        .setTitle(R.string.runtime_permission_error_title)
		        .setMessage(R.string.runtime_permission_error_message1)

		        // Specifying a listener allows you to take an action before dismissing the dialog.
		        // The dialog is automatically dismissed when a dialog button is clicked.
		        .setPositiveButton(R.string.runtime_permission_error_ok_button, new DialogInterface.OnClickListener() {
		            public void onClick(DialogInterface dialog, int which) { 
		            	alertDialog.dismiss();
		            	// VZE-606
		            	ExitActivity.exitApplication(WICIMobile3.this);
		            }
		         }).show();
		    	alertDialog.setCancelable(false);
		    	alertDialog.setCanceledOnTouchOutside(false);
		    }
	    }
	    return;
	    }
    
	 
}
