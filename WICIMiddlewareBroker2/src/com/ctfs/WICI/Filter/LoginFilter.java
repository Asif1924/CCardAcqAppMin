package com.ctfs.WICI.Filter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.logging.Logger;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import com.ctfs.WICI.Helper.CTFSLoginWrapper;
import com.ctfs.WICI.Helper.CWE117Fix;
import com.ctfs.WICI.Helper.RolesExaminer;
import com.ibm.websphere.security.auth.WSSubject;

public class LoginFilter implements Filter
{
	static Logger log = Logger.getLogger(LoginFilter.class.getName());

	public LoginFilter()
	{
	}

	public void destroy()
	{
	}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException
	{
		log.info("LoginFilter[doFilter]");

		HttpServletRequest httpRequest = (HttpServletRequest) request;
		if (httpRequest.getSession(false) != null)
		{
			httpRequest.getSession(false).invalidate();
		}

		CTFSLoginWrapper responseWrapper = new CTFSLoginWrapper((HttpServletResponse) response);
		chain.doFilter(httpRequest, responseWrapper);
		Throwable potentialException = WSSubject.getRootLoginException();
		ArrayList<String> definedRoles = new ArrayList<String>();
		String definedRolesJSON = "";

		if (potentialException != null)
		{
			// Authentication failed. Return appropriate response code or
			// cookie.
			// status code = 403
			responseWrapper.setStatus(HttpServletResponse.SC_FORBIDDEN);
			// Cookie = login error with message indicating root cause
			Cookie theCookie = new Cookie("loginError", potentialException.getMessage());
			theCookie.setMaxAge(-1);
			theCookie.setSecure(true);
			responseWrapper.addCookie(theCookie);
		}
		else
		{
			// login success - have to check here if user is in FMR role
			// the role "FMR" is defined in web.xml and mapped to LDAP group in
			// WAS container
			// boolean isFMR = httpRequest.isUserInRole("FMR");
			boolean isUserInADefinedRole = isUserInADefinedRole(httpRequest);
			RolesExaminer rolesExaminer = new RolesExaminer(httpRequest);
			definedRoles = rolesExaminer.getRoles();
			RolesExaminer rolesExaminer2 = new RolesExaminer(httpRequest);
			definedRolesJSON = rolesExaminer2.getRolesJSON();

			log.info("LoginFilter[doFilter] isUserInADefinedRole=" + CWE117Fix.encodeCRLF(String.valueOf(isUserInADefinedRole)));
			log.info("LoginFilter[doFilter] definedRoles=" + definedRoles);
			log.info("LoginFilter[doFilter] definedRolesJSON=" + definedRolesJSON);

			// if (isUserInADefinedRole) {
			if (!definedRoles.isEmpty())
			{
				// Authentication successful, and user is in appropriate role
				// status code = 200
				responseWrapper.setStatus(HttpServletResponse.SC_OK);

				Cookie rolesCookie = new Cookie("Roles", definedRolesJSON);
				rolesCookie.setMaxAge(-1);
				rolesCookie.setSecure(true);
				responseWrapper.addCookie(rolesCookie);

				// cookie to indicate user is in appropriate role, may or may
				// not be needed
				Cookie fmrCookie = new Cookie("isFMR", "true");
				fmrCookie.setMaxAge(-1);
				fmrCookie.setSecure(true);
				responseWrapper.addCookie(fmrCookie);

				// put username in session - this may not be required..?
				HttpSession ses = ((HttpServletRequest) httpRequest).getSession();
				ses.setAttribute("Username", httpRequest.getParameter("j_username"));
			}
			else
			{
				// Authentication successful, but user does not have appropriate
				// role
				// status code = 403
				responseWrapper.setStatus(HttpServletResponse.SC_FORBIDDEN);

				// cookie to indicate reason of login failure
				Cookie loginErrorCookie = new Cookie("loginError", "User authenticated but does not have appropriate role based access");
				loginErrorCookie.setMaxAge(-1);
				loginErrorCookie.setSecure(true);
				responseWrapper.addCookie(loginErrorCookie);
			}
		}
		// Do not send redirect so that invoking servlet will get appropriate
		// status code:
		// either 200 for OK or 403 for failure
		// myRes.sendMyRedirect();
	}

	private boolean isUserInADefinedRole(HttpServletRequest argHttpRequest)
	{
		return argHttpRequest.isUserInRole("FMR") || argHttpRequest.isUserInRole("WICI-ADMIN") || argHttpRequest.isUserInRole("WICI-DEMO");
	}

	public void init(FilterConfig fConfig) throws ServletException
	{
	}

}
