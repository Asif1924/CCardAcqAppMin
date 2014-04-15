package com.ctfs.WICI.Helper;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletRequest;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.protocol.HTTP;
import com.ctfs.WICI.Servlet.Model.LDAPResponse;

public class LDAPAuthenticationHelper
{

	static Logger log = Logger.getLogger(LDAPAuthenticationHelper.class.getName());

	LDAPResponse ldapResponse = null;

	@SuppressWarnings("deprecation")
	public LDAPResponse authenticateToLDAP(HttpServletRequest argTabletRequest)
	{
		String sMethod = "[authenticateToLDAP]";
		log.info(sMethod);

		String userID = ((argTabletRequest.getParameter("userID") != null) ? argTabletRequest.getParameter("userID") : "");
		String password = ((argTabletRequest.getParameter("password") != null) ? argTabletRequest.getParameter("password") : "");

		HttpClient inlinedHttpClient = new DefaultHttpClient();
		HttpResponse httpResponse = null;
		ldapResponse = new LDAPResponse();

		String ldapAuthenticationURL = argTabletRequest.getScheme() + "://" + argTabletRequest.getServerName() + ":" + argTabletRequest.getServerPort() + argTabletRequest.getContextPath()
				+ "/j_security_check";
		// String ldapAuthenticationURL = "http" + "://" +
		// argTabletRequest.getServerName() + ":" +
		// argTabletRequest.getServerPort() + argTabletRequest.getContextPath()
		// + "/j_security_check";
		// String ldapAuthenticationURL = argTabletRequest.getServerName() + ":"
		// + argTabletRequest.getServerPort() +
		// argTabletRequest.getContextPath() + "/j_security_check";
		log.info("--ldapAuthURL=" + ldapAuthenticationURL);

		HttpPost httpPOSTRequestToLDAPURL = new HttpPost(ldapAuthenticationURL);
		List<NameValuePair> loginCredentials = new ArrayList<NameValuePair>();

		loginCredentials.add(new BasicNameValuePair("j_username", userID));
		loginCredentials.add(new BasicNameValuePair("j_password", password));

		try
		{
			httpPOSTRequestToLDAPURL.setEntity(new UrlEncodedFormEntity(loginCredentials, HTTP.UTF_8));
		}
		catch (UnsupportedEncodingException e)
		{
			ldapResponse.setHttpStatusCode(-1); // Couldn't encode the post
												// request
			e.printStackTrace();
		}

		// send HTTP post to j_security_check servlet to perform authentication.
		// LoginFilter will check authentication results and also check that
		// user is authorized with proper role.
		// HttpResponse httpResponse = null;
		try
		{
			httpResponse = inlinedHttpClient.execute(httpPOSTRequestToLDAPURL);
			log.info(sMethod + " httpResponse=" + httpResponse);
			ldapResponse.setHttpResponse(httpResponse);
		}
		catch (Exception e)
		{

			ldapResponse.setHttpStatusCode(2); // Couldn't hit LDAP
			e.printStackTrace();
		}

		if (httpResponse == null || httpResponse.getStatusLine() == null)
		{
			ldapResponse.setHttpStatusCode(2);
			return ldapResponse;
		}

		ldapResponse.setHttpStatusCode(httpResponse.getStatusLine().getStatusCode());
		return ldapResponse;
	}
}
