package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.channel.ctfs.ctc.webicgateway.AccountAcquisitionPortalProxy;
import com.ctfs.WICI.Configuration.EnvironmentConfiguration;
import com.ctfs.WICI.Helper.TokenCheckerByRequest;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIPortalProxyFactory;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.WasaResponse;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICILoginFailedResponse;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.google.gson.Gson;

public abstract class WICIServlet extends HttpServlet implements EnvironmentConfiguration {

	private 			static 			final 		long 			serialVersionUID 		= 3551571714724114885L;
	protected				static 						Logger			log						= Logger.getLogger(WICIServlet.class.getName());

	public WICIServlet() {
	}

	abstract void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException;

	final protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String sMethod = this.getClass().getName() + "[doGet] ";
		log.info(sMethod);

		baseHandleRequest(request, response);
	}

	final protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String sMethod = this.getClass().getName() + "[doPost] ";
		log.info(sMethod);
		baseHandleRequest(request, response);
	}

	private boolean checkLTPAToken(HttpServletRequest request) throws ServletException, IOException {
		String sMethod = this.getClass().getName() + "[checkLTPAToken] ";
		log.info(sMethod);

		TokenCheckerByRequest tokenChecker = new TokenCheckerByRequest(request);
		return tokenChecker.ltpaTokenExists();
	}

	protected boolean isCheckLTPATokenRequired(){
		return false;
	}

	private void baseHandleRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String sMethod = this.getClass().getName() + "[baseHandleRequest] ";
		log.info(sMethod);
		//logInputParameters(request,response);
		
		WICIServletMediator servletMediator = null;

		if(isCheckLTPATokenRequired() && !checkLTPAToken(request)){
			sendLoginFailedResponse(response);
			return;
		}		
		
		try
		{
			// Just create instance
			servletMediator = new WICIServletMediator(request, response);
			
			// Initialize mediator
			servletMediator.IntializeMediator();
			
			handleRequest(servletMediator);
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::ERROR::" + ex.getMessage());
			
			// Throw servlet exception and redirect to error.jsp page 
			throw new ServletException(ex.getMessage());
		}
	}

	private void sendLoginFailedResponse(HttpServletResponse response) throws IOException{
		String sMethod = this.getClass().getName() + "[sendLoginFailedResponse] ";
		log.info(sMethod);

		PrintWriter 					writer 						= response.getWriter();
		WICILoginFailedResponse 		loginFailedResponse 		= new WICILoginFailedResponse(false, "checkLTPAToken failed!", true);
        WICIResponse 					wiciResponse 				= new WICIResponse(false, "Access issue detected. Application will be redirected to the login page.", loginFailedResponse);
        Gson 							gson 						= new Gson();
        String 							wiciResponseJson 			= gson.toJson(wiciResponse, WICIResponse.class);

        writer.append(wiciResponseJson);
        writer.flush();
        writer.close();
	}


	protected void logInputParameters(HttpServletRequest deviceRequest, HttpServletResponse deviceResponse) throws ServletException, IOException{
		String sMethod = this.getClass().getName() + "[logInputParameters] ";
		log.info(sMethod);

		logRequestHeaders(deviceRequest);
		logRequestParameters(deviceRequest);
	}

	private void logRequestParameters(HttpServletRequest deviceRequest){
		String sMethod = this.getClass().getName() + "[logRequestParameters] ";
		log.info(sMethod);

		StringBuffer 			requestParametersString 		= new StringBuffer();
		Enumeration 			requestParameters 				= deviceRequest.getParameterNames();

		while (requestParameters.hasMoreElements())
		{
			String paraName = (String) requestParameters.nextElement();
			String paramValue = deviceRequest.getParameter(paraName);
			requestParametersString.append(paraName + "=" + paramValue + ";");
		}

		log.info(sMethod + "---Request Parameters: " + requestParametersString.toString());
	}

	private void logRequestHeaders(HttpServletRequest deviceRequest){
		String sMethod = this.getClass().getName() + "[logRequestHeaders] ";
		log.info(sMethod);

		StringBuffer 			requestHeadersString 			= new StringBuffer();
		Enumeration 			requestHeaders 					= deviceRequest.getHeaderNames();

		while (requestHeaders.hasMoreElements())
		{
			String headerName = (String) requestHeaders.nextElement();
			String headerValue = deviceRequest.getHeader(headerName);
			requestHeadersString.append(headerName + "=" + headerValue + ";");
		}

		log.info(sMethod + "---Headers: " + requestHeadersString.toString());
	}

	public WICIConfiguration getWebServicesEndpoint(){
		String sMethod = this.getClass().getName() + "[getWebServicesEndpoint] ";
		log.info(sMethod + "---getting web services endpoint");

		return new WICIConfigurationFactory().createWebServicesConfiguration();
	}

	public AccountAcquisitionPortalProxy getWICIWebServicesProxy(){
		String sMethod = this.getClass().getName() + "[getWICIWebServicesProxy] ";
		log.info(sMethod + "---getting web services portal proxy");

		return new WICIPortalProxyFactory().createWICIWebServicesPortalProxy();
	}

}