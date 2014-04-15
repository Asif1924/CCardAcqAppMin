package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

public class PollAccountApplicationResponseServletMock extends HttpServlet {
	private 		static 		final 		long 			serialVersionUID 		= 5L;
	static 									Logger 			log 					= Logger.getLogger(PollAccountApplicationResponseServletMock.class.getName());

    public PollAccountApplicationResponseServletMock() {
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

		PrintWriter 			writer 									= argTabletResponse.getWriter();
		//writer.append(new Gson().toJson(servletVersion).toString());
		writer.append(responseJSON);
		writer.close();
	}

}
