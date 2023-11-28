package com.ctfs.WICI.TestCase;

import java.util.logging.Logger;

import org.junit.Test;

import com.ctfs.WICI.Helper.PollAccountApplicationResponseHelper;
import com.ctfs.WICI.Servlet.Model.WICIPollAccountApplicationRequest;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class PollAccountApplicationHelperTest {

	static Logger log = Logger.getLogger(PollAccountApplicationResponseHelper.class.getName());
	
	private PollAccountApplicationResponseHelper pollAccountApplicationResponseHelper;
	
    WICIResponse dssWiciResponse = null;
    
	
	@Test
	public void poll_account_appresponse_test() throws Exception
	{
		WICIPollAccountApplicationRequest wiciPollAccountApplicationRequest = new WICIPollAccountApplicationRequest();
		
		wiciPollAccountApplicationRequest.setAction("retrievepend");
		wiciPollAccountApplicationRequest.setPhone("9035327771");
		wiciPollAccountApplicationRequest.setRetrievalToken("D90BE2782521");
		wiciPollAccountApplicationRequest.setTransactionID("E924A9EE-449E-47CE-AD07-D90BE2782521");
		
		System.out.println("wiciPollAccountApplicationRequest:::"+wiciPollAccountApplicationRequest);
		
		pollAccountApplicationResponseHelper = new PollAccountApplicationResponseHelper();
		String endPoint = "";
    	dssWiciResponse = pollAccountApplicationResponseHelper.handleHttpPollAccountApplicationResponse(wiciPollAccountApplicationRequest,endPoint);
    	
    	System.out.println("WiciDssResponse:::"+dssWiciResponse);
	}
	
}
