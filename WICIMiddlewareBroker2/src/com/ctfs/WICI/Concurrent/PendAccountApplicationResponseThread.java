package com.ctfs.WICI.Concurrent;

import java.util.logging.Logger;

import com.ctfs.WICI.AppConstants;
import com.ctfs.WICI.Helper.EmailServiceHelper;
import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.PendAccountApplicationRequest;
import com.ctfs.WICI.Servlet.Model.PendAccountApplicationResponse;
import com.ibm.websphere.asynchbeans.Work;

public class PendAccountApplicationResponseThread implements Work
{
	static Logger log = Logger.getLogger(AccountApplicationRequestThread.class.getName());
	private final PendAccountApplicationRequest pendingAARequestObject;
	private final WICIServletMediator			servletMediator;

	public PendAccountApplicationResponseThread(PendAccountApplicationRequest argPayloadDataAsObject, WICIServletMediator requestMediator)
	{
		this.pendingAARequestObject = argPayloadDataAsObject;
		this.servletMediator = requestMediator;
	}

	@Override
	public void run()
	{
		String sMethod = this.getClass().getName() + "[run] ";
		log.info(sMethod);

		PendAccountApplicationResponse response = null;
		
		try
		{
			response = updatePendingApplication(this.pendingAARequestObject);
			
			
			
		}
		catch (Exception e)
		{	
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();						
		}
		servletMediator.processXMLResponse(response);
	}

	private PendAccountApplicationResponse updatePendingApplication(PendAccountApplicationRequest argPAARequestObject)
	{
		String sMethod = this.getClass().getName() + "[updatePendingApplication] ";
		log.info(sMethod);
		
		//int counter=0;

		PendAccountApplicationResponse updateResponse = null;
		
		try
		{
			WICIDBHelper wicidbHelper = new WICIDBHelper();
			updateResponse = wicidbHelper.updatePendingAccountApplicationData(argPAARequestObject);
			

			if( "APPROVED".equalsIgnoreCase(argPAARequestObject.getAppStatus()) && !wicidbHelper.isEmailSendForApprovedApp(argPAARequestObject.getExternalReferenceId())){
				
				log.info(sMethod + "::send email pend to approveded case  appsatus : \n" + argPAARequestObject.getAppStatus() + "transactionID   ::" +     argPAARequestObject.getExternalReferenceId());
			
				EmailServiceHelper emailServiceHelper = new EmailServiceHelper();
				
				emailServiceHelper.sendEmail(argPAARequestObject.getExternalReferenceId(),argPAARequestObject);
				
			}
			
			
		}
		catch (Exception e)
		{
			updateResponse = new PendAccountApplicationResponse();
			updateResponse.setStatus(AppConstants.PEND_ACCOUNT_APPLICATION_REQUEST_UPDATE_FAILURE);
			log.warning(sMethod + "---Problem udpating the responseData into table=" + e.getMessage());
			e.printStackTrace();
		}
		return updateResponse;
	}

	@Override
	public void release()
	{
		// TODO Auto-generated method stub

	}

}
