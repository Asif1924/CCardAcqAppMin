package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.ServletException;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctfs.WICI.AppConstants;
import com.ctfs.WICI.Concurrent.AccountApplicationRequestThread;
import com.ctfs.WICI.Helper.AuthorizationHelper;
import com.ctfs.WICI.Helper.CWE117Fix;
import com.ctfs.WICI.Helper.InitAccountApplicationHelper;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.AuthfieldValue;
import com.ctfs.WICI.Model.WICIAuthfieldValue;
import com.ctfs.WICI.Servlet.Model.CreditCardApplicationData;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICICreditCardApplicationData;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ibm.websphere.asynchbeans.WorkException;
import com.ibm.websphere.asynchbeans.WorkItem;
import com.ibm.websphere.asynchbeans.WorkManager;

public class InitAccountApplicationServlet2 extends WICIServlet
{	
	private static final long serialVersionUID = 4L;	

	com.ibm.websphere.asynchbeans.WorkManager accountApplicationWorkManager;

	public InitAccountApplicationServlet2()
	{
		log.info("InitAccountApplicationServlet2[InitAccountApplicationServlet]");

		try {
			InitialContext ctx = new InitialContext();
			accountApplicationWorkManager = (com.ibm.websphere.asynchbeans.WorkManager) ctx.lookup("wm/default");
			log.info("Work Manager " + accountApplicationWorkManager);
		} catch (NamingException e) {
			e.printStackTrace(System.out);
		}
	}

	
	@Override
	void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		log.info("InitAccountApplicationServlet2[handleRequest]");

		try {
			queueAccountApplicationRequest(requestMediator);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	
	private void queueAccountApplicationRequest(WICIServletMediator requestMediator) throws Exception {
		
		log.info("InitAccountApplicationServlet2[queueAccountApplicationRequest]");
		log.info("InitAccountApplicationServlet2[queueAccountApplicationRequest] requestMediator : " + CWE117Fix.encodeCRLF(requestMediator != null ?requestMediator.toString() : null));
		
		WICIAuthfieldValue wiciAuthfieldValue = new WICIAuthfieldValue();
		AuthorizationHelper authorizationHelper = new AuthorizationHelper();
		AuthfieldValue values;
		try {
			values = authorizationHelper.getAuthfieldValue(requestMediator);
			log.info("InitAccountApplicationServlet2[queueAccountApplicationRequest]::AuthID(mfgSerial) =" + CWE117Fix.encodeCRLF(values.getMfgSerial()) + ", ::AuthID(buildSerial) ==" + CWE117Fix.encodeCRLF(values.getBuildSerial()) + ")");
			
			String mfgSerial = values.getMfgSerial()!= null ? values.getMfgSerial() : EMPTY_STRING;
			String buildSerial = values.getBuildSerial()!= null ? values.getBuildSerial(): EMPTY_STRING;
			
			log.info("InitAccountApplicationServlet2[queueAccountApplicationRequest]::After getting value from UI mfgSerial = " + CWE117Fix.encodeCRLF(mfgSerial));
			log.info("InitAccountApplicationServlet2[queueAccountApplicationRequest]::After getting value from UI buildSerial = " + CWE117Fix.encodeCRLF(buildSerial));
			
			wiciAuthfieldValue.setMfgSerial(mfgSerial);
			wiciAuthfieldValue.setBuildSerial(buildSerial);
			
			WICICreditCardApplicationData wiciCreditCardApplicationData = new WICICreditCardApplicationData();
			CreditCardApplicationData incomingCreditCardApplicationData = new CreditCardApplicationData(requestMediator);
			WICIResponse initDSSResponse = null;
		
			WICIConfiguration conf = new WICIConfigurationFactory().createReWriteDASSEndPointConfiguration();
			InitAccountApplicationHelper initAccountApplicationHelper = new InitAccountApplicationHelper();
	    	
			wiciCreditCardApplicationData.setWiciAuthfieldValue(wiciAuthfieldValue);
			wiciCreditCardApplicationData.setModels(incomingCreditCardApplicationData.getModels());
			wiciCreditCardApplicationData.setRequestBodyStr(incomingCreditCardApplicationData.getRequestBodyString());
			
			if( conf != null && conf.getRewriteInitAccountAppEndPoint() != null && conf.getRewriteDssServiceEnv() != null) {
				
				log.info("InitAccountApplicationServlet2[queueAccountApplicationRequest]InitAccountApplication Point to   " +CWE117Fix.encodeCRLF(conf.getRewriteDssServiceEnv())  + " Endpoint "+CWE117Fix.encodeCRLF(conf.getRewriteInitAccountAppEndPoint()));
		
				if(conf.getRewriteDssServiceEnv().equalsIgnoreCase("DSSDEV")){
				
					initDSSResponse = initAccountApplicationHelper.queueAccountApplicationHttpRequest(wiciCreditCardApplicationData, conf.getRewriteInitAccountAppEndPoint());
				
				}else{
					initDSSResponse = initAccountApplicationHelper.queueAccountApplicationHttpsRequest(wiciCreditCardApplicationData, conf.getRewriteInitAccountAppEndPoint());
					
				}
				
				if (initDSSResponse != null && !initDSSResponse.isError()) {
					
					ObjectMapper objectMapper = new ObjectMapper();
					AccountApplicationRequestType	accountApplicationRequest = objectMapper.readValue(initDSSResponse.getData().toString(), AccountApplicationRequestType.class);
					log.info("InitApp veriosn 2 Response ExternalRefrenceId "+CWE117Fix.encodeCRLF(accountApplicationRequest.getExternalReferenceId()));
					
					WICIResponse databaseResponse = new WICIResponse(false, AppConstants.QUEUE_REQUEST_SUBMIT, accountApplicationRequest.getExternalReferenceId());
					
					// Update response
					requestMediator.processHttpResponse(databaseResponse);

					AccountApplicationRequestThread concurrentAccountApplicationRequest = new AccountApplicationRequestThread(accountApplicationRequest.getExternalReferenceId(), incomingCreditCardApplicationData, accountApplicationRequest);

					try {
						WorkItem managedAccountApplicationThread = accountApplicationWorkManager.startWork(concurrentAccountApplicationRequest);
						ArrayList<WorkItem> managedThreads = new ArrayList<WorkItem>();
						managedThreads.add(managedAccountApplicationThread);
						accountApplicationWorkManager.join(managedThreads, WorkManager.JOIN_AND, 4000);
					} catch (WorkException e) {
						e.printStackTrace();
					} catch (IllegalArgumentException e) {
						e.printStackTrace();
					}
				} else {	
					// Update response
					requestMediator.processHttpResponse(initDSSResponse);
				}
				
			}else {
				log.warning("InitAccountApplicationServlet2[queueAccountApplicationRequest] eror while loading configuration: "  );
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
     }
	
}
	