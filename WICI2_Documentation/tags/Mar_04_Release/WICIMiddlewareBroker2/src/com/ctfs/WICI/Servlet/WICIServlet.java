package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.Enumeration;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.channel.ctfs.ctc.webicgateway.AccountAcquisitionPortalProxy;
import com.ctfs.WICI.Configuration.EnvironmentConfiguration;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIPortalProxyFactory;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.IllegalAppVersionException;
import com.ctfs.WICI.Model.UnauthorizedDeviceException;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public abstract class WICIServlet extends HttpServlet implements EnvironmentConfiguration {

	private 				static 			final 		long 			serialVersionUID 		= 3551571714724114885L;
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

	private void baseHandleRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String sMethod = this.getClass().getName() + "[baseHandleRequest] ";
		
		
		log.info(sMethod);

		WICIServletMediator servletMediator = null;
		WICIResponse appResponse = new WICIResponse();
		try
		{
			servletMediator = new WICIServletMediator(request, response);

			servletMediator.IntializeMediator();

			if ( this instanceof VersionServlet || servletMediator.deviceAuthorizationPassed())
				handleRequest(servletMediator);
		}
		catch (UnauthorizedDeviceException ex)
		{
			log.info(sMethod + " Exception: " + ex.getMessage());
			String errorMessage = "Device not authorized";

			// Prepare request response
			//appResponse.setError(false);
			//appResponse.setMsg(errorMessage);
			//appResponse.setData(null);
			//servletMediator.processHttpResponse(appResponse);
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::ERROR::" + ex.getMessage());

			// Throw servlet exception and redirect to error.jsp page
			throw new ServletException(ex.getMessage());
		}
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