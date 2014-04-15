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

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Locale;

import org.apache.cordova.Config;
import org.apache.cordova.DroidGap;

import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.util.Log;

import com.ctfs.wicimobile.util.PrinterManager;

public class WICIMobile2 extends DroidGap
{
	@Override
	public void onCreate(Bundle savedInstanceState)
	{
		super.onCreate(savedInstanceState);
		// Set by <content src="index.html" /> in config.xml

		// Restore printers history
		PrinterManager.getInstance().populatePrinterHistoryFromPreferences(this);

		changeSystemLanguage("fr_CA");

		//setDefaultLocale(getBaseContext(), Locale.CANADA_FRENCH);

		// change_language_setting(getBaseContext());

		super.loadUrl(Config.getStartUrl());
		// super.loadUrl("file:///android_asset/www/production/index.html");
	}

	@Override
	protected void onStop()
	{
		super.onStop();

		// Save printers history
		PrinterManager.getInstance().storePrinterHistoryInPreferences(this);
	}

	public void change_language_setting(Context con)
	{
		try
		{
			/** here add language code */
			// Locale locale = new Locale("ar");
			// Locale.CANADA_FRENCH
			Locale locale = new Locale("fr_CA");

			Class amnClass = Class.forName("android.app.ActivityManagerNative");
			Object amn = null;
			Configuration config = null;

			// amn = ActivityManagerNative.getDefault();
			Method methodGetDefault = amnClass.getMethod("getDefault");
			methodGetDefault.setAccessible(true);
			amn = methodGetDefault.invoke(amnClass);

			// config = amn.getConfiguration();
			Method methodGetConfiguration = amnClass.getMethod("getConfiguration");
			methodGetConfiguration.setAccessible(true);
			config = (Configuration) methodGetConfiguration.invoke(amn);

			// config.userSetLocale = true;
			Class configClass = config.getClass();
			Field f = configClass.getField("userSetLocale");
			f.setBoolean(config, true);

			// set the locale to the new value
			config.locale = locale;

			// amn.updateConfiguration(config);
			Method methodUpdateConfiguration = amnClass.getMethod("updateConfiguration", Configuration.class);
			methodUpdateConfiguration.setAccessible(true);
			methodUpdateConfiguration.invoke(amn, config);

		}
		catch (Exception e)
		{
			// TODO: handle exception
			Log.d("error lang change-->", "" + e.getMessage().toString());
		}
	}

	@Override
	public void onConfigurationChanged(Configuration newConfig)
	{
		super.onConfigurationChanged(newConfig);
		Locale.setDefault(newConfig.locale);
		getBaseContext().getResources().updateConfiguration(newConfig, getBaseContext().getResources().getDisplayMetrics());
	}

	@Override
	public void onResume()
	{
		super.onResume();
		// I explicitely force my app to display in Finnish
		Configuration newConfig = new Configuration();
		newConfig.locale = new Locale("fr_CA");
		onConfigurationChanged(newConfig);
	}

	/*
	public void changeIMELanguage()
	{
		String lang = Settings.getLanguage();
		Resources res = activity.getResources();
		DisplayMetrics dm = res.getDisplayMetrics();
		Configuration config = res.getConfiguration();

		String loca = "";
		if (lang.equals(activity.getString(R.string.pref_misc_locale_lang_en_value)))
		{
			loca = "en";
		}
		else if (lang.equals(activity.getString(R.string.pref_misc_locale_lang_cs_value)))
		{
			loca = "cs";
		}

		Locale locale = new Locale(loca);
		Locale.setDefault(locale);

		config.locale = locale;
		res.updateConfiguration(config, dm);
	}
	*/
	
	public void changeSystemLanguage(String lang)
	{
		Resources res = this.getContext().getResources();
		// Change locale settings in the app.
		DisplayMetrics dm = res.getDisplayMetrics();
		android.content.res.Configuration conf = res.getConfiguration();
		conf.locale = new Locale(lang);
		res.updateConfiguration(conf, dm);
	}

	public void setDefaultLocale(Context context, Locale locale)
	{
		Locale.setDefault(locale);
		Configuration appConfig = new Configuration();
		appConfig.locale = locale;
		context.getResources().updateConfiguration(appConfig, context.getResources().getDisplayMetrics());
		System.out.println("trad" + locale.getLanguage());
	}

	public void setLocale(String lang)
	{
		Locale myLocale = new Locale(lang);
		Resources res = getResources();
		DisplayMetrics dm = res.getDisplayMetrics();
		Configuration conf = res.getConfiguration();
		conf.locale = myLocale;
		res.updateConfiguration(conf, dm);
		Intent refresh = new Intent(this, WICIMobile2.class);
		startActivity(refresh);
	}

}