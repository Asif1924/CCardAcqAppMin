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
		log.info("AuthorizationHelper[isAuthfieldCheckEnabled] ");
		WICIDBHelper wicidbHelper = new WICIDBHelper();
		return wicidbHelper.isAuthfieldCheckEnabled(CONFIG_NAME_AUTHFIELD_CHECK_ENABLED);
	}

	private boolean authorizedTablet(WICIServletMediator request) throws Exception
	{
		log.info("AuthorizationHelper[authorizedTablet]");

		AuthfieldValue authfieldValue = getAuthfieldValue(request);
		
		
       if( authfieldValue.getMfgSerial() == null || authfieldValue.getBuildSerial() == null ){
			
			log.info("AuthorizationHelper[authorizedTablet] skip the authorizedTablet Validation ::mfgSerial=" + CWE117Fix.encodeCRLF(authfieldValue.getMfgSerial() != null ? authfieldValue.getMfgSerial() : null) + ", buildSerial=" + CWE117Fix.encodeCRLF(authfieldValue.getBuildSerial() != null ? authfieldValue.getBuildSerial() : null));
			return true;
		}
		

		log.info("AuthorizationHelper[authorizedTablet]::mfgSerial=" + CWE117Fix.encodeCRLF(authfieldValue.getMfgSerial() != null ? authfieldValue.getMfgSerial() : null) + ", buildSerial=" + CWE117Fix.encodeCRLF(authfieldValue.getBuildSerial() != null ? authfieldValue.getBuildSerial() : null));

		WICIDBHelper wicidbHelper = new WICIDBHelper();
		return wicidbHelper.isDeviceWhitelisted(authfieldValue.getMfgSerial(), authfieldValue.getBuildSerial());
	}

	public AuthfieldValue getAuthfieldValue(WICIServletMediator request) throws Exception
	{
		log.info("AuthorizationHelper[getAuthfieldValue]");
		AuthfieldValue authfieldValue = new AuthfieldValue();

		if (request.getHttpMethodType() == HTTPMethodType.GET)
		{
			String mfgSerial = request.getRequestKVPairs().get("authfieldValue[MfgSerial]");
			String buildSerial = request.getRequestKVPairs().get("authfieldValue[BuildSerial]");
			log.info("getAuthfieldValue() ::mfgSerial = " + CWE117Fix.encodeCRLF(mfgSerial != null ? mfgSerial : null ));
			log.info("getAuthfieldValue() ::buildSerial = " + CWE117Fix.encodeCRLF(buildSerial != null ? buildSerial : null));

			authfieldValue.setMfgSerial(mfgSerial);
			authfieldValue.setBuildSerial(buildSerial);
		}
		if (request.getHttpMethodType() == HTTPMethodType.POST)
		{
			log.info(CWE117Fix.encodeCRLF("===============In POST"));

			AccountApplicationPostRequest postRequest = null;

			Gson gson = new Gson();
			Type compoundType = new TypeToken<AccountApplicationPostRequest>()
			{
			}.getType();

			postRequest = gson.fromJson(request.postRequestBody.toString(), compoundType);

			authfieldValue = postRequest.getAuthfieldValue();

			log.info("getAuthfieldValue()::mfgSerial = " + CWE117Fix.encodeCRLF(authfieldValue.getMfgSerial() != null ? authfieldValue.getMfgSerial() : null ));
			log.info("getAuthfieldValue()::buildSerial = " + CWE117Fix.encodeCRLF(authfieldValue.getBuildSerial() != null ? authfieldValue.getBuildSerial() : null));
		}

		return authfieldValue;
	}
}
