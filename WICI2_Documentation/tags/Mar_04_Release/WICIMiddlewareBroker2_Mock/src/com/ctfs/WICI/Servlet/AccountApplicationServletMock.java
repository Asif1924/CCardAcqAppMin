package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ctfs.WICI.Model.WICIResponse;
import com.google.gson.Gson;

public class AccountApplicationServletMock extends HttpServlet {
	private 		static 		final 		long 			serialVersionUID 		= 4L;
	static 									Logger 			log 					= Logger.getLogger(AccountApplicationServletMock.class.getName());

    public AccountApplicationServletMock() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		handleRequest(request,response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		handleRequest(request,response);
	}

	protected void handleRequest(HttpServletRequest argTabletRequest, HttpServletResponse argTabletResponse) throws ServletException, IOException {
		String sMethod = this.getClass().getName() + "[handleRequest] ";
		log.info(sMethod);

		String 					responseJSON 							= "{\"error\":true,\"msg\":\"com.channel.ctfs.ctc.www.MessageFault\"}";
		WICIResponse 			databaseResponse 						= new WICIResponse(false,"SUBMIT","some_trans_id_01");
		PrintWriter 			writer 									= argTabletResponse.getWriter();

		writer.append(new Gson().toJson(databaseResponse).toString());
		//writer.append(responseJSON);
		writer.close();
	}

	private String formatOutputForTablet(WICIResponse argResponse) {
		String sMethod = this.getClass().getName() + "[formatOutputForTablet] ";
		log.info(sMethod);

		return new Gson().toJson(argResponse, WICIResponse.class);
	}

}
