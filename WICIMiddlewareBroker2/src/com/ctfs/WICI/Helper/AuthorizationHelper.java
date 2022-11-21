package com.ctfs.WICI.Helper;

import java.lang.reflect.Type;
import java.util.logging.Logger;

import com.ctfs.WICI.Enums.HTTPMethodType;
import com.ctfs.WICI.Model.AccountApplicationPostRequest;
import com.ctfs.WICI.Model.AuthfieldValue;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class AuthorizationHelper
{
	static Logger log = Logger.getLogger(WICIServletMediator.class.getName());
	String CONFIG_NAME_AUTHFIELD_CHECK_ENABLED = "AUTHFIELD_CHECK_ENABLED"; 

	public boolean authorizationPassed(WICIServletMediator wiciServletMediator) throws Exception
	{
		return isAuthfieldCheckEnabled() && !authorizedTablet(wiciServletMediator);
	}

	protected boolean isAuthfieldCheckEnabled()
	{
		String sMethod = this.getClass().getName() + "[isAuthfieldCheckEnabled] ";
		log.info(sMethod);

		WICIDBHelper wicidbHelper = new WICIDBHelper();
		return wicidbHelper.isAuthfieldCheckEnabled(CONFIG_NAME_AUTHFIELD_CHECK_ENABLED);
	}

	private boolean authorizedTablet(WICIServletMediator request) throws Exception
	{
		String sMethod = this.getClass().getName() + "[authorizedTablet] ";
		log.info(sMethod);

		AuthfieldValue authfieldValue = getAuthfieldValue(request);
		
		
       if( authfieldValue.getMfgSerial() == null || authfieldValue.getBuildSerial() == null ){
			
			log.info(sMethod + " skip the authorizedTablet Validation ::mfgSerial=" + authfieldValue.getMfgSerial() + ", buildSerial=" + authfieldValue.getBuildSerial());
			
			return true;
			
		}
		

		log.info(sMethod + "::mfgSerial=" + authfieldValue.getMfgSerial() + ", buildSerial=" + authfieldValue.getBuildSerial());

		WICIDBHelper wicidbHelper = new WICIDBHelper();
		return wicidbHelper.isDeviceWhitelisted(authfieldValue.getMfgSerial(), authfieldValue.getBuildSerial());
	}

	public AuthfieldValue getAuthfieldValue(WICIServletMediator request) throws Exception
	{
		String sMethod = this.getClass().getName() + "[getAuthfieldValue] ";
		log.info(sMethod);

		AuthfieldValue authfieldValue = new AuthfieldValue();

		if (request.getHttpMethodType() == HTTPMethodType.GET)
		{
			String mfgSerial = request.getRequestKVPairs().get("authfieldValue[MfgSerial]");
			String buildSerial = request.getRequestKVPairs().get("authfieldValue[BuildSerial]");
			log.info(sMethod + "::mfgSerial = " + mfgSerial);
			log.info(sMethod + "::buildSerial = " + buildSerial);

			authfieldValue.setMfgSerial(mfgSerial);
			authfieldValue.setBuildSerial(buildSerial);
		}
		if (request.getHttpMethodType() == HTTPMethodType.POST)
		{
			log.info(sMethod + "===============In POST");

			AccountApplicationPostRequest postRequest = null;

			Gson gson = new Gson();
			Type compoundType = new TypeToken<AccountApplicationPostRequest>()
			{
			}.getType();

			postRequest = gson.fromJson(request.postRequestBody.toString(), compoundType);

			authfieldValue = postRequest.getAuthfieldValue();

			log.info(sMethod + "::mfgSerial = " + authfieldValue.getMfgSerial());
			log.info(sMethod + "::buildSerial = " + authfieldValue.getBuildSerial());
		}

		return authfieldValue;
	}
}
