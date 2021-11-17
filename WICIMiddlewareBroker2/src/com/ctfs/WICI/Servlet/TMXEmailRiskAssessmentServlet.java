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

import com.ctfs.WICI.Helper.HttpClientHelper;
import com.ctfs.WICI.Helper.JsonWrapper;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.EmailRiskAssessmentRequest;
import com.ctfs.WICI.Model.EmailRiskAssessmentResponse;
import com.ctfs.WICI.Model.WICIDSSAddressResponse;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

public class TMXEmailRiskAssessmentServlet extends WICIServlet {
	private static final long serialVersionUID = 1L;
	
	static Logger log = Logger
			.getLogger(TMXEmailRiskAssessmentServlet.class.getName());

	public TMXEmailRiskAssessmentServlet() {

	}

	protected void handleRequest(WICIServletMediator requestMediator)
			throws ServletException, IOException {
		String sMethod = this.getClass().getName() + "[doPost] ";
		log.info(sMethod);
         invokeTMXRiskAssessment(requestMediator);
	}

	private void invokeTMXRiskAssessment(WICIServletMediator requestMediator) {
		
		String sMethod = this.getClass().getName() + "[invokeTMXRiskAssessment] ";
		log.info(sMethod);
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
			EmailRiskAssessmentResponse tmxResponse = new  EmailRiskAssessmentResponse();
			tmxRequest.setTabSerialNumber(tabSerialNumber);
			tmxRequest.setPhoneNumber(phoneNumber);
			tmxRequest.setPhone_Type(phone_Type);
			tmxRequest.setEmailAddress(emailAddress);
			tmxRequest.setLastName(lastName);
			tmxRequest.setProvince(province);
			tmxRequest.setPostCode(postalCode);
			tmxRequest.setLoginId(loginId);
			tmxRequest.setStorePostCode(storePostCode);
			 WICIConfiguration conf = new WICIConfigurationFactory().createDASSEndPointConfiguration();
			if(conf.getDssserviceEnv().equalsIgnoreCase("DSSDEV")){
				
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

	private EmailRiskAssessmentResponse  tmxProfileHttpsClientCall(EmailRiskAssessmentRequest tmxDSSRequest){
	   
		CloseableHttpClient httpClient= null;
		
		 String  responseContent = null;
		 EmailRiskAssessmentResponse tmxResponse = new EmailRiskAssessmentResponse();
		 String sMethod = this.getClass().getName() + "[TMXHttpsclientCall] ";
		 log.info(sMethod);
		 try{
		
			 HttpClientHelper secureClient = new HttpClientHelper();
			 httpClient = secureClient.getHttpSecureClient();
			 WICIConfiguration conf = new WICIConfigurationFactory().createDASSEndPointConfiguration();
			HttpPost post = new HttpPost(conf.getDssTmxEndPoint());
			ObjectMapper mapper = new ObjectMapper();
			JsonWrapper jsonWrapper = new JsonWrapper(mapper);
			String jsonInput = mapper.writeValueAsString(tmxDSSRequest);
			post.setEntity(new StringEntity(jsonInput));
			post.setHeader("Content-type", "application/json");
			
			log.info(sMethod + " The DSS TMX endPoint  ===" + conf.getDssTmxEndPoint() + "txm request for dss ::: "+jsonInput);
			
			HttpResponse response = httpClient.execute(post);

			int statusCode = response.getStatusLine().getStatusCode();
			
			log.info(sMethod + "TXM Profile status code :::: " + statusCode);
			if (statusCode != 200) {
				throw new RuntimeException("Failed with HTTP error code : "
						+ statusCode);
			}
			responseContent = EntityUtils.toString(response.getEntity());
			tmxResponse = jsonWrapper.deserialize(responseContent,
					EmailRiskAssessmentResponse.class);
		        
			log.info(sMethod + "TMX Profile Response from DSS:::: " + tmxResponse);
		
	} catch (Exception e) {
		e.printStackTrace();
	}
		return tmxResponse;
	}
	
	
	private EmailRiskAssessmentResponse  tmxProfileHttpClientCall(EmailRiskAssessmentRequest tmxDSSRequest){
		 String sMethod = this.getClass().getName() + "[TMXHttpclientCall] ";
		 String  responseContent = null;
		 EmailRiskAssessmentResponse tmxResponse = new EmailRiskAssessmentResponse();
         HttpClient   httpClient   = HttpClientBuilder.create().build();
	     
		 try{
			 WICIConfiguration conf = new WICIConfigurationFactory().createDASSEndPointConfiguration();
			 HttpPost post = new HttpPost(conf.getDssTmxEndPoint());
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	String jsonInput = mapper.writeValueAsString(tmxDSSRequest);
	    	
	    	log.info(sMethod + " The DSS TMX endPoint  ===" + conf.getDssTmxEndPoint() + "txm request for dss ::: "+jsonInput);
	    	
	    	
	    	post.setEntity(new StringEntity(jsonInput));
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	        
	        int statusCode = response.getStatusLine().getStatusCode();
	        if (statusCode != 200) 
	        {    
	            throw new RuntimeException("Failed with HTTP error code : " + statusCode);
	        }
	        responseContent = EntityUtils.toString(response.getEntity());
	        
	        tmxResponse = jsonWrapper.deserialize(responseContent,
	        		EmailRiskAssessmentResponse.class);
	        
	        if( tmxResponse != null ){
	        	log.info(sMethod + "tmxResponse Response "+ tmxResponse);
	        	
	        }
	        
	     }catch(Exception e){
	    	
	      log.warning(sMethod + "::Exception::" + e.getMessage());
	    	
	    }
	    finally
	    {
	    	
	   	httpClient.getConnectionManager().shutdown();
	    }
	    return tmxResponse;
		 
	}
	
}