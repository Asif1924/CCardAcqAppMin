package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.ctfs.WICI.Helper.CWE117Fix;
import com.ctfs.WICI.Helper.HttpClientHelper;
import com.ctfs.WICI.Helper.JsonWrapper;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.EmailRiskAssessmentRequest;
import com.ctfs.WICI.Model.EmailRiskAssessmentResponse;
import com.ctfs.WICI.Model.WICIDSSAddressResponse;
import com.ctfs.WICI.Model.WICIEmailRiskAssessmentResponse;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

public class TMXEmailRiskAssessmentServlet2 extends WICIServlet {
	private static final long serialVersionUID = 1L;
	
	static Logger log = Logger
			.getLogger(TMXEmailRiskAssessmentServlet2.class.getName());

	public TMXEmailRiskAssessmentServlet2() {

	}

	protected void handleRequest(WICIServletMediator requestMediator)
			throws ServletException, IOException {
		log.info("TMXEmailRiskAssessmentServlet2[doPost]");
         invokeTMXRiskAssessment(requestMediator);
	}

	private void invokeTMXRiskAssessment(WICIServletMediator requestMediator) {
		
		log.info("TMXEmailRiskAssessmentServlet2[invokeTMXRiskAssessment]:: Called!");
		WICIResponse tableResponse = new WICIResponse();
		try {
			
			
			String tabSerialNumber = requestMediator.searchElementInsidePostRequestBody("tabSerialNumber") != null ? requestMediator.searchElementInsidePostRequestBody("tabSerialNumber") : EMPTY_STRING;;
			String phoneNumber = requestMediator.searchElementInsidePostRequestBody("phoneNumber") != null ? requestMediator.searchElementInsidePostRequestBody("phoneNumber") : EMPTY_STRING;;
			String phone_Type = requestMediator.searchElementInsidePostRequestBody("phone_Type") != null ? requestMediator.searchElementInsidePostRequestBody("phone_Type") : EMPTY_STRING;;
			String emailAddress = requestMediator.searchElementInsidePostRequestBody("emailAddress") != null ? requestMediator.searchElementInsidePostRequestBody("emailAddress") : EMPTY_STRING;;
			String lastName = requestMediator.searchElementInsidePostRequestBody("lastName") != null ? requestMediator.searchElementInsidePostRequestBody("lastName") : EMPTY_STRING;;
			String province = requestMediator.searchElementInsidePostRequestBody("province") != null ? requestMediator.searchElementInsidePostRequestBody("province") : EMPTY_STRING;;
			String postalCode = requestMediator.searchElementInsidePostRequestBody("postCode") != null ? requestMediator.searchElementInsidePostRequestBody("postCode") : EMPTY_STRING;;
			String loginId = requestMediator.searchElementInsidePostRequestBody("loginId") != null ? requestMediator.searchElementInsidePostRequestBody("loginId") : EMPTY_STRING;;
			String storePostCode = requestMediator.searchElementInsidePostRequestBody("storePostCode") != null ? requestMediator.searchElementInsidePostRequestBody("storePostCode") : EMPTY_STRING;;
			
			
			EmailRiskAssessmentRequest tmxRequest = new EmailRiskAssessmentRequest();
			//EmailRiskAssessmentResponse tmxResponse = new  EmailRiskAssessmentResponse();
			WICIEmailRiskAssessmentResponse tmxResponse = new WICIEmailRiskAssessmentResponse();
			tmxRequest.setTabSerialNumber(tabSerialNumber);
			tmxRequest.setPhoneNumber(phoneNumber);
			tmxRequest.setPhone_Type(phone_Type);
			tmxRequest.setEmailAddress(emailAddress);
			tmxRequest.setLastName(lastName);
			tmxRequest.setProvince(province);
			tmxRequest.setPostCode(postalCode);
			tmxRequest.setLoginId(loginId);
			tmxRequest.setStorePostCode(storePostCode);
			 WICIConfiguration conf = new WICIConfigurationFactory().createReWriteDASSEndPointConfiguration();
			if(conf.getRewriteDssServiceEnv().equalsIgnoreCase("DSSDEV")){
				
				 tmxResponse = tmxProfileHttpClientCall(tmxRequest);
			}
			else{
				
				 tmxResponse = tmxProfileHttpsClientCall(tmxRequest);
			}
			
			if(tmxResponse != null && tmxResponse.getFpsTrustscore() != null && tmxResponse.getTmxProfileID() != null ){
				tableResponse.setData(tmxResponse);
			}
			else{
				tableResponse.setError(true);
				tableResponse.setMsg("Failure");	
				
			}
		} catch (Exception e) {
			e.printStackTrace();
			tableResponse.setError(true);
			tableResponse.setMsg("Failure");
		}
		
		requestMediator.processHttpResponse(tableResponse);
	}

	private WICIEmailRiskAssessmentResponse  tmxProfileHttpsClientCall(EmailRiskAssessmentRequest tmxDSSRequest){
	   
		CloseableHttpClient httpClient= null;
		
		 String  responseContent = null;
		 //EmailRiskAssessmentResponse tmxResponse = new EmailRiskAssessmentResponse();
		 WICIEmailRiskAssessmentResponse tmxResponse = new WICIEmailRiskAssessmentResponse();
		 		 log.info("TMXEmailRiskAssessmentServlet2[tmxProfileHttpsClientCall]");
		 try{
		
			 HttpClientHelper secureClient = new HttpClientHelper();
			 httpClient = secureClient.getHttpSecureClient();
			 WICIConfiguration conf = new WICIConfigurationFactory().createReWriteDASSEndPointConfiguration();
			HttpPost post = new HttpPost(conf.getRewritedssTmxEndPoint());
			ObjectMapper mapper = new ObjectMapper();
			JsonWrapper jsonWrapper = new JsonWrapper(mapper);
			String jsonInput = mapper.writeValueAsString(tmxDSSRequest);
			post.setEntity(new StringEntity(jsonInput));
			post.setHeader("Content-type", "application/json");
			
			log.info("TMXEmailRiskAssessmentServlet2[tmxProfileHttpsClientCall] The DSS TMX endPoint  ===" + CWE117Fix.encodeCRLF(conf.getRewritedssTmxEndPoint()) + "txm request for dss ::: "+CWE117Fix.encodeCRLF(jsonInput));
			
			HttpResponse response = httpClient.execute(post);

			int statusCode = response.getStatusLine().getStatusCode();
			
			log.info("TMXEmailRiskAssessmentServlet2[tmxProfileHttpsClientCall]TXM Profile status code :::: " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
			if (statusCode != 200) {
				throw new RuntimeException("Failed with HTTP error code : "
						+ CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
			}
			responseContent = EntityUtils.toString(response.getEntity());
			tmxResponse = jsonWrapper.deserialize(responseContent,
					WICIEmailRiskAssessmentResponse.class);
		        
			log.info("TMXEmailRiskAssessmentServlet2[tmxProfileHttpsClientCall]TMX Profile Response from DSS:::: " + CWE117Fix.encodeCRLF(tmxResponse.toString()));
		
	} catch (Exception e) {
		e.printStackTrace();
	}
		return tmxResponse;
	}
	
	
	private WICIEmailRiskAssessmentResponse  tmxProfileHttpClientCall(EmailRiskAssessmentRequest tmxDSSRequest){
		 
		 String  responseContent = null;
		 //EmailRiskAssessmentResponse tmxResponse = new EmailRiskAssessmentResponse();
		 WICIEmailRiskAssessmentResponse tmxResponse = new WICIEmailRiskAssessmentResponse();
         HttpClient   httpClient   = HttpClientBuilder.create().build();
	     
		 try{
			 WICIConfiguration conf = new WICIConfigurationFactory().createReWriteDASSEndPointConfiguration();
			 HttpPost post = new HttpPost(conf.getRewritedssTmxEndPoint());
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	String jsonInput = mapper.writeValueAsString(tmxDSSRequest);
	    	
	    	log.info("TMXEmailRiskAssessmentServlet2[TMXHttpclientCall] The DSS TMX endPoint  ===" + CWE117Fix.encodeCRLF(conf.getDssTmxEndPoint()) + "txm request for dss ::: "+CWE117Fix.encodeCRLF(jsonInput));
	    	
	    	
	    	post.setEntity(new StringEntity(jsonInput));
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	        
	        int statusCode = response.getStatusLine().getStatusCode();
	        if (statusCode != 200) 
	        {    
	            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        }
	        responseContent = EntityUtils.toString(response.getEntity());
	        
	        tmxResponse = jsonWrapper.deserialize(responseContent,
	        		WICIEmailRiskAssessmentResponse.class);
	        
	        if( tmxResponse != null ){
	        	log.info("TMXEmailRiskAssessmentServlet2[TMXHttpclientCall] tmxResponse Response "+ CWE117Fix.encodeCRLF(tmxResponse.toString()));
	        	
	        }
	        
	     }catch(Exception e){
	    	
	      log.warning("TMXEmailRiskAssessmentServlet2[TMXHttpclientCall]::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
	    	
	    }
	    finally
	    {
	    	
	   	httpClient.getConnectionManager().shutdown();
	    }
	    return tmxResponse;
		 
	}
	
}