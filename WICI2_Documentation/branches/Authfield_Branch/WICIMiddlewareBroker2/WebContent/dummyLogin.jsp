<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page	language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<html>
<head>
	<title>Login</title>
	<meta http-equiv="Pragma" content="no-cache">
	<style>
		b{color: red;}
	</style>
</head>
<br>
<h2 align="center">WICI WebApp Client Login</h2>
<table width=100%>
<tr>
<td align="center">
<%
	if(request.getCookies()!=null)
	{
		Cookie cookies[] = request.getCookies();
		int cookieLength = cookies.length;
		
		for (int i = 0; i < cookieLength; i++) 
		{
			Cookie c = cookies[i];
			c.setSecure(true);
			
			if (c.getName().equals("loginError")) 
			{
				out.println("<script language=\"JavaScript\">");
				out.println("alert(\"Invalid Username/Password\")");
				out.println("</script>");
			}
		}
		cookies = null;
	}
%>
</td>
</tr>
</table>
<br>

<body onload="document.forms[0].j_username.focus()">
	
	<form name="LoginForm" action="j_security_check" method="POST" onsubmit="return validateCredentials()">
		<table width="100%" align="center">
		<tr>
			<td width="50%" align="right">Username : </td>
			<td width="50%" align="left"><input type="text" name="j_username" size="20" onblur="this.value=fullTrim(this.value)"></td>
		</tr>
		<tr>
			<td width="50%" align="right">Password : </td>
			<td width="50%" align="left"><input type="password" name="j_password" autocomplete="off" size="20"></td>
		</tr>
		<tr>
			<td width="50%"></td>
			<td width="50%" align="left"><input type="submit" value="Login"></td>
		</tr>
		</table>
	
	</form>
	
	<script type="text/javascript" language="JavaScript"/>
	function fullTrim(transId)
	{
		return transId.split(' ').join('');
	}
	function validateCredentials()
	{
		username = document.forms[0].j_username.value;
		password = document.forms[0].j_password.value;
		
		if (!(username.match(/^[a-zA-Z0-9_.]+$/)))
		{
			alert ("Invalid Username/Password");
			document.forms[0].j_username.value = "";
			document.forms[0].j_password.value = "";
			document.forms[0].j_username.focus();
			return false;
		}
		
		if ((username == "") || (password == ""))
		{
			alert ("Invalid Username/Password");
			
			if (document.forms[0].j_username.value == "")
				document.forms[0].j_username.focus();
			else
				document.forms[0].j_password.focus();
				
			return false;
		}
	}
	</script>
	
</body>

</html>
	