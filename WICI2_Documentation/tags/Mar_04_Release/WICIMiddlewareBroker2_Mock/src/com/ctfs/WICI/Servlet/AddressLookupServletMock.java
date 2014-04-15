package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ctfs.WICI.AddressLookupMockHelper;
import com.ctfs.WICI.Model.FileContentsResult;


public class AddressLookupServletMock extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public AddressLookupServletMock() {
        super();
    }

	protected void doGet(HttpServletRequest argTabletRequest, HttpServletResponse argTabletResponse) throws ServletException, IOException {
		handleRequest( argTabletRequest, argTabletResponse);
	}

	protected void doPost(HttpServletRequest argTabletRequest, HttpServletResponse argTabletResponse) throws ServletException, IOException {
		handleRequest( argTabletRequest, argTabletResponse);
	}

	protected void handleRequest(HttpServletRequest argTabletRequest, HttpServletResponse argTabletResponse) throws ServletException, IOException {

		String addressLookupResponse = "{\"standardAddressLine1\":[\"THOMAS ST\"],\"standardAddressLine2\":[\"\"],\"standardCityName\":\"MISSISSAUGA\",\"standardProvince\":\"ON\",\"standardPostalCode\":\"L5M0M2\",\"addressStatus\":\"N\"}";

        PrintWriter writer = argTabletResponse.getWriter();
        writer.append(addressLookupResponse);
        writer.close();
	}
}
