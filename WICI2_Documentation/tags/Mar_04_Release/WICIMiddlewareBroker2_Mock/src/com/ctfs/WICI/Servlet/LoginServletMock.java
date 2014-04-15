package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ctfs.WICI.Model.FileContentsResult;

public class LoginServletMock extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public LoginServletMock() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		handleRequest(request,response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		handleRequest(request,response);
	}

	protected void handleRequest(HttpServletRequest argTabletRequest, HttpServletResponse argTabletResponse) throws ServletException, IOException {

		String agentID  = "";
		String password = "";
		String userLocation = "";

		if(argTabletRequest.getParameter("agentID")!=null)
			agentID = argTabletRequest.getParameter("agentID");
		if(argTabletRequest.getParameter("password")!=null)
			password = argTabletRequest.getParameter("password");
		if(argTabletRequest.getParameter("userLocation")!=null)
			userLocation = argTabletRequest.getParameter("userLocation");

		//LoginResponse
		//{"error":false,"msg":"SUCCESSFUL Authentication and authorization for user 01234","data":{"statusCode":"200","LTPAToken":"FakeToken","message":"SUCCESSFUL Authentication and authorization for user 01234","roles":"[\"FMR\"]","checkLocation":{"message":"SUCCESS","outletName":"ASSOCIATE STORE     ","outletNumber":"22","outletStreet":"801 Centre St.                ","outletCity":"Espanola                 ","outletProvince":"ON","outletPostal":"P5E1N2"}}}

		String loginResponse = "{\"error\":false,\"msg\":\"SUCCESSFUL Authentication and authorization for user 01234\",\"data\":{\"statusCode\":\"200\",\"LTPAToken\":\"FakeToken\",\"message\":\"SUCCESSFUL Authentication and authorization for user 01234\",\"roles\":[\"FMR\"],\"checkLocation\":{\"message\":\"SUCCESS\",\"outletName\":\"ASSOCIATE STORE     \",\"outletNumber\":\"22\",\"outletStreet\":\"801 Centre St.                \",\"outletCity\":\"Espanola                 \",\"outletProvince\":\"ON\",\"outletPostal\":\"P5E1N2\"}}}";

        PrintWriter writer = argTabletResponse.getWriter();
        writer.append(loginResponse);
        writer.close();
	}
}
