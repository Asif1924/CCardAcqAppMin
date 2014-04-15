package com.ctfs.BRB.Servlet;

import java.io.IOException;
import java.util.Enumeration;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.channel.ctfs.ctc.webicgateway.AccountAcquisitionPortalProxy;
import com.ctfs.BRB.Configuration.EnvironmentConfiguration;
import com.ctfs.BRB.Helper.BRBServletMediator;
import com.ctfs.BRB.Helper.BRBTransactionIdValidator;
import com.ctfs.BRB.Helper.Factory.AccountApplicationConfigurationFactory;
import com.ctfs.BRB.Helper.Factory.AccountApplicationProxyBuilder;
import com.ctfs.BRB.Interfaces.IConfiguration;
import com.ctfs.BRB.Model.SessionExpiredResponse;
import com.ctfs.BRB.exceptions.TransactionIdExpiredException;

public abstract class BaseServlet extends HttpServlet implements EnvironmentConfiguration
{

	private static final long serialVersionUID = 3551571714724114885L;
	static Logger log = Logger.getLogger(BaseServlet.class.getName());

	public BaseServlet()
	{
	}

	abstract void handleRequest(BRBServletMediator requestMediator) throws ServletException, IOException;

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		String sMethod = "[doGet]";
		log.info(sMethod);

		baseHandleRequest(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		String sMethod = "[doPost]";
		log.info(sMethod);

		baseHandleRequest(request, response);
	}

	protected boolean isCheckLTPATokenRequired()
	{
		return false;
	}

	private void baseHandleRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException
	{
		String sMethod = "[baseHandleRequest]";
		log.info(sMethod);

		BRBServletMediator servletMediator = null;

		try
		{
			// Just create instance
			servletMediator = new BRBServletMediator(request, response);

			// Initialize mediator
			servletMediator.IntializeMediator();			

			// Validate BRB Transaction ID for expiry
			ValidateBRBTransactionID(servletMediator);

			// Process request
			handleRequest(servletMediator);
		}
		catch (TransactionIdExpiredException ex)
		{
			log.warning(sMethod + "::ERROR::" + ex.getMessage());

			if (servletMediator != null)
			{
				servletMediator.processHttpResponse(new SessionExpiredResponse(ex.getMessage()));
			}
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::ERROR::" + ex.getMessage());

			// Throw servlet exception and redirect to error.jsp page
			throw new ServletException(ex.getMessage());
		}
	}
	
	protected void ValidateBRBTransactionID (BRBServletMediator servletMediator) throws TransactionIdExpiredException {
		// Get the transID to prepare for vetting the server timeout against
		// the transaction date
		String transactionId = servletMediator.getBrbTransactionId();
		
		// Validate BRB Transaction ID for expiry
		new BRBTransactionIdValidator().validateBrbTransactionIDForExpiry(transactionId);
	}

	protected void logInputParameters(HttpServletRequest deviceRequest, HttpServletResponse deviceResponse) throws ServletException, IOException
	{
		String sMethod = "[logInputParameters]";
		log.info(sMethod);
		logRequestHeaders(deviceRequest);
		logRequestParameters(deviceRequest);
	}

	private void logRequestParameters(HttpServletRequest deviceRequest)
	{
		String sMethod = "[logRequestParameters]";
		log.info(sMethod);

		StringBuffer requestParametersString = new StringBuffer();
		Enumeration requestParameters = deviceRequest.getParameterNames();
		while (requestParameters.hasMoreElements())
		{
			String paraName = (String) requestParameters.nextElement();
			String paramValue = deviceRequest.getParameter(paraName);
			requestParametersString.append(paraName + "=" + paramValue + ";");
		}
		log.info(sMethod + "---Request Parameters: " + requestParametersString.toString());
	}

	private void logRequestHeaders(HttpServletRequest deviceRequest)
	{
		String sMethod = "[logRequestHeaders]";
		log.info(sMethod);

		StringBuffer requestHeadersString = new StringBuffer();
		Enumeration requestHeaders = deviceRequest.getHeaderNames();
		while (requestHeaders.hasMoreElements())
		{
			String headerName = (String) requestHeaders.nextElement();
			String headerValue = deviceRequest.getHeader(headerName);
			requestHeadersString.append(headerName + "=" + headerValue + ";");
		}
		log.info(sMethod + "---Headers: " + requestHeadersString.toString());
	}

	public IConfiguration getWebServicesEndpoint() throws Exception
	{
		String sMethod = "[getWebServicesEndpoint]";
		log.info(sMethod + "---getting web services endpoint");

		return new AccountApplicationConfigurationFactory().createWebServicesEndpoint();
	}

	public AccountAcquisitionPortalProxy getWebServicesProxy() throws Exception
	{
		String sMethod = "[getWICIWebServicesProxy]";
		log.info(sMethod + "---getting web services portal proxy");

		return (AccountAcquisitionPortalProxy) new AccountApplicationProxyBuilder().createWebServicesPortalProxy();
	}

	protected void validateTransactionId(String transactionId)
	{
		if (transactionId == null || transactionId.isEmpty())
		{
			throw new IllegalArgumentException("Invalid Transaction ID!");
		}
	}
}