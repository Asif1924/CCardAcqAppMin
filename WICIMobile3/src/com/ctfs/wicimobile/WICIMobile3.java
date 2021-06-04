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

public class WICIMobile3 extends CordovaActivity
{
	private static final String LOG_TAG = "WICIMobile3";
	
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
        
        NewRelic.withApplicationToken("AA1f24be0bf516669da84d7c0aec7b098f5835ffcb-NRMA")
		.start(this.getApplicationContext());

        NewRelic.setUserId(WICIDeviceInfoHelper.getDeviceSerialNo());
		NewRelic.setAttribute("PrinterMAC",PrinterManager.getInstance().getMacAddress() != null ? PrinterManager.getInstance().getMacAddress() : "NOT_AVAILABLE");
        
        //Orphaned and only relevant for DroidGap inheritance
        // super.loadUrl(Config.getStartUrl());
    }
    
    @Override
    protected void onStop() {
        super.onStop();

        // Save printers history
        PrinterManager.getInstance().storePrinterHistoryInPreferences(this);

        Log.i(LOG_TAG, "WICIMobile3 stopped");
    } 
	 
}
