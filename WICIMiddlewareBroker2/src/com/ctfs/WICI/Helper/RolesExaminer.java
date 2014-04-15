package com.ctfs.WICI.Helper;

import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import com.google.gson.Gson;

public class RolesExaminer
{
	HttpServletRequest httpServletRequest;

	public RolesExaminer(HttpServletRequest argHttpServletRequest)
	{
		httpServletRequest = argHttpServletRequest;
	}

	public boolean isUserFMR()
	{
		if (httpServletRequest != null)
		{
			return httpServletRequest.isUserInRole("FMR");
		}
		return false;
	}

	public boolean isUserAnAdmin()
	{
		if (httpServletRequest != null)
		{
			return httpServletRequest.isUserInRole("WICI-ADMIN");
		}
		return false;
	}

	public boolean isUserADemoUser()
	{
		if (httpServletRequest != null)
		{
			return httpServletRequest.isUserInRole("WICI-DEMO");
		}
		return false;
	}

	public ArrayList<String> getRoles()
	{
		ArrayList<String> examinedRoles = new ArrayList<String>();
		if (isUserFMR())
			examinedRoles.add("FMR");
		if (isUserAnAdmin())
			examinedRoles.add("WICI-ADMIN");
		if (isUserADemoUser())
			examinedRoles.add("WICI-DEMO");
		return examinedRoles;
	}

	public String getRolesJSON()
	{
		Gson gson = new Gson();
		ArrayList<String> roles = getRoles();
		String rolesJSON = gson.toJson(roles, ArrayList.class);
		return rolesJSON;
	}
}
