package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.logging.Logger;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.ServletException;

import com.ctfs.WICI.Concurrent.AccountApplicationRequestThread;
import com.ctfs.WICI.Concurrent.PendAccountApplicationResponseThread;
import com.ctfs.WICI.Helper.CWE117Fix;
import com.ctfs.WICI.Helper.DeviceAdminHelper;
import com.ctfs.WICI.Helper.WICIObjectsHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.PendAccountApplicationRequest;
import com.ibm.websphere.asynchbeans.WorkException;
import com.ibm.websphere.asynchbeans.WorkItem;
import com.ibm.websphere.asynchbeans.WorkManager;

public class ReceiveAccountResponseServlet2 extends WICIServlet {

	private static final long serialVersionUID = 77755L;
	static Logger log = Logger.getLogger(ReceiveAccountResponseServlet2.class.getName());
	com.ibm.websphere.asynchbeans.WorkManager pendAccountApplicationWorkManager;

	public ReceiveAccountResponseServlet2()
	{
		log.info("ReceiveAccountResponseServlet2[ReceiveAccountResponseServlet]");

		try
		{
			InitialContext ctx = new InitialContext();
			pendAccountApplicationWorkManager = (com.ibm.websphere.asynchbeans.WorkManager) ctx.lookup("wm/default");
			log.info("Work Manager " + pendAccountApplicationWorkManager);
		}
		catch (NamingException e)
		{
			e.printStackTrace(System.out);
		}
	}	
	
	@Override
	void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		log.info("ReceiveAccountResponseServlet2[handleRequest]:: Called !");

		try
		{
			String payloadData = EMPTY_STRING;

			StringBuffer postRequestBodyAsString = requestMediator.getPostRequestBody();
			log.info("ReceiveAccountResponseServlet2[handleRequest]:: postRequestBody = " + CWE117Fix.encodeCRLF(postRequestBodyAsString.toString()));

			payloadData = postRequestBodyAsString.toString();
			
			PendAccountApplicationRequest PAAObject = new WICIObjectsHelper().deserializeXMLToPendAccountApplicationRequestObject(payloadData);
			
			updatePendingApplication(PAAObject,requestMediator);
		}
		catch (Exception ex)
		{
			log.warning("ReceiveAccountResponseServlet2[handleRequest] Exception: " + CWE117Fix.encodeCRLF(ex.getMessage()));
		}
		finally
		{
			//requestMediator.processHttpResponse(null);
		}
	}

	private void updatePendingApplication(PendAccountApplicationRequest argPayloadDataAsObject, WICIServletMediator requestMediator)
	{
		log.info("ReceiveAccountResponseServlet2[updatePendingApplication]");
		
		PendAccountApplicationResponseThread concurrentPendAccountApplicationRequest = new PendAccountApplicationResponseThread(argPayloadDataAsObject,requestMediator);

		try
		{
			WorkItem managedAccountApplicationThread = pendAccountApplicationWorkManager.startWork(concurrentPendAccountApplicationRequest);
			ArrayList<WorkItem> managedThreads = new ArrayList<WorkItem>();
			managedThreads.add(managedAccountApplicationThread);
			pendAccountApplicationWorkManager.join(managedThreads, WorkManager.JOIN_AND, 4000);
		}
		catch (WorkException e)
		{
			e.printStackTrace();
		}
		catch (IllegalArgumentException e)
		{
			e.printStackTrace();
		}		
	}

}
