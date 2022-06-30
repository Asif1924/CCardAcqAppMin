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
import com.ctfs.WICI.Model.WICIDSSCheckCPEligibilityRequest;
import com.ctfs.WICI.Model.WICIDSSCheckCPEligibilityResponse;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

public class CheckCPEligibilityServlet extends WICIServlet {
	private static final long serialVersionUID = 1L;
	
	static Logger log = Logger.getLogger(CheckCPEligibilityServlet.class.getName());

	public CheckCPEligibilityServlet() { }

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException {
		String sMethod = this.getClass().getName() + "[doPost] ";
		log.info(sMethod);
        checkCPEligibility(requestMediator);
	}

	private void checkCPEligibility(WICIServletMediator requestMediator) {
		String sMethod = this.getClass().getName() + "[checkCPEligibility] ";
		log.info(sMethod);
		WICIResponse tabletResponse = new WICIResponse();
		try {
			String dateOfBirth = requestMediator.searchElementInsidePostRequestBody("dateOfBirth") != null ? requestMediator.searchElementInsidePostRequestBody("dateOfBirth") : EMPTY_STRING;;
			String jobCategory = requestMediator.searchElementInsidePostRequestBody("jobCategory") != null ? requestMediator.searchElementInsidePostRequestBody("jobCategory") : EMPTY_STRING;;
			String jobStatus = requestMediator.searchElementInsidePostRequestBody("jobStatus") != null ? requestMediator.searchElementInsidePostRequestBody("jobStatus") : EMPTY_STRING;;
			String province = requestMediator.searchElementInsidePostRequestBody("province") != null ? requestMediator.searchElementInsidePostRequestBody("province") : EMPTY_STRING;;
			String productCode = requestMediator.searchElementInsidePostRequestBody("productCode") != null ? requestMediator.searchElementInsidePostRequestBody("productCode") : EMPTY_STRING;;
			String jobDescription = requestMediator.searchElementInsidePostRequestBody("jobDescription") != null ? requestMediator.searchElementInsidePostRequestBody("jobDescription") : EMPTY_STRING;;
			String correlationID = requestMediator.searchElementInsidePostRequestBody("correlationID") != null ? requestMediator.searchElementInsidePostRequestBody("correlationID") : EMPTY_STRING;;
			
			WICIDSSCheckCPEligibilityRequest checkCPEligibilityRequest = new WICIDSSCheckCPEligibilityRequest();
			WICIDSSCheckCPEligibilityResponse checkCPEligibilityResponse = new WICIDSSCheckCPEligibilityResponse();
			checkCPEligibilityRequest.setDateOfBirth(dateOfBirth);
			checkCPEligibilityRequest.setProvince(province);
			checkCPEligibilityRequest.setProductCode(productCode);
			//checkCPEligibilityRequest.setJobDescription(jobDescription);
			checkCPEligibilityRequest.setCorrelationID(correlationID);
			
			if(jobStatus.equalsIgnoreCase("RETIRED") || jobStatus.equalsIgnoreCase("HOMEMAKER")) {
				checkCPEligibilityRequest.setJobStatus(jobStatus);
			} else {
				checkCPEligibilityRequest.setJobCategory(jobCategory);
				checkCPEligibilityRequest.setJobStatus(jobStatus);
			}
			
			if(jobStatus.equalsIgnoreCase("RETIRED")) {
				checkCPEligibilityRequest.setJobDescription("RETIRED");
			} else {
				checkCPEligibilityRequest.setJobDescription(jobDescription);
			}
			
			WICIConfiguration conf = new WICIConfigurationFactory().createDASSEndPointConfiguration();
			if(conf.getDssserviceEnv().equalsIgnoreCase("DSSDEV")){
				checkCPEligibilityResponse = checkCPEligibilityHttpClientCall(checkCPEligibilityRequest);
			} else{
				checkCPEligibilityResponse = checkCPEligibilityHttpsClientCall(checkCPEligibilityRequest);
			}
			
			if(checkCPEligibilityResponse != null && checkCPEligibilityResponse.getCpType() != null && checkCPEligibilityResponse.getEnhancementId() != null ){
				tabletResponse.setData(checkCPEligibilityResponse);
			} else{
				tabletResponse.setError(true); 
				tabletResponse.setMsg("Failure");	
			}
		} catch (Exception e) {
			e.printStackTrace();
			tabletResponse.setError(true);
			tabletResponse.setMsg("Failure");
		}
		requestMediator.processHttpResponse(tabletResponse);
	}

	private WICIDSSCheckCPEligibilityResponse checkCPEligibilityHttpsClientCall(WICIDSSCheckCPEligibilityRequest checkCPEligibilityDSSRequest){
		CloseableHttpClient httpClient= null;
		String responseContent = null;
		WICIDSSCheckCPEligibilityResponse checkCPEligibilityResponse = new WICIDSSCheckCPEligibilityResponse();
		String sMethod = this.getClass().getName() + "[checkCPEligibilityHttpsClientCall] ";
		log.info(sMethod);
		try{
			HttpClientHelper secureClient = new HttpClientHelper();
			httpClient = secureClient.getHttpSecureClient();
			WICIConfiguration conf = new WICIConfigurationFactory().createDASSEndPointConfiguration();
			HttpPost post = new HttpPost(conf.getCpEligibilityEndPoint());
			ObjectMapper mapper = new ObjectMapper();
			JsonWrapper jsonWrapper = new JsonWrapper(mapper);
			String jsonInput = mapper.writeValueAsString(checkCPEligibilityDSSRequest);
			post.setEntity(new StringEntity(jsonInput));
			post.setHeader("Content-type", "application/json");
			
			log.info(sMethod + " The DSS CheckCPEligibility endPoint  === " + conf.getCpEligibilityEndPoint() + " CheckCPEligibility request for dss ::: "+jsonInput);
			HttpResponse response = httpClient.execute(post);
			int statusCode = response.getStatusLine().getStatusCode();
			log.info(sMethod + "CheckCPEligibility Profile status code :::: " + statusCode);
			if (statusCode != 200) {
				throw new RuntimeException("Failed with HTTP error code : " + statusCode);
			}
			responseContent = EntityUtils.toString(response.getEntity());
			checkCPEligibilityResponse = jsonWrapper.deserialize(responseContent, WICIDSSCheckCPEligibilityResponse.class);
			log.info(sMethod + "CheckCPEligibility Profile Response from DSS:::: " + checkCPEligibilityResponse);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return checkCPEligibilityResponse;
	}
	
	private WICIDSSCheckCPEligibilityResponse checkCPEligibilityHttpClientCall(WICIDSSCheckCPEligibilityRequest checkCPEligibilityDSSRequest) {
		String sMethod = this.getClass().getName() + "[checkCPEligibilityHttpClientCall] ";
		String  responseContent = null;
		WICIDSSCheckCPEligibilityResponse checkCPEligibilityResponse = new WICIDSSCheckCPEligibilityResponse();
        HttpClient httpClient = HttpClientBuilder.create().build();
	     
		try{
			WICIConfiguration conf = new WICIConfigurationFactory().createDASSEndPointConfiguration();
			HttpPost post = new HttpPost(conf.getCpEligibilityEndPoint());
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	String jsonInput = mapper.writeValueAsString(checkCPEligibilityDSSRequest);
	    	
	    	log.info(sMethod + " The DSS CheckCPEligibility endPoint  === " + conf.getCpEligibilityEndPoint() + " CheckCPEligibility request for dss ::: "+jsonInput);
	    	post.setEntity(new StringEntity(jsonInput));
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse response = httpClient.execute(post);
	    	        
	        int statusCode = response.getStatusLine().getStatusCode();
	        if (statusCode != 200) {    
	            throw new RuntimeException("Failed with HTTP error code : " + statusCode);
	        }
	        responseContent = EntityUtils.toString(response.getEntity());
	        checkCPEligibilityResponse = jsonWrapper.deserialize(responseContent, WICIDSSCheckCPEligibilityResponse.class);
	        if( checkCPEligibilityResponse != null ){
	        	log.info(sMethod + "checkCPEligibilityResponse Response "+ checkCPEligibilityResponse);
	        }
	    } catch(Exception e){
	    	log.warning(sMethod + "::Exception::" + e.getMessage());
	    } finally {
	    	httpClient.getConnectionManager().shutdown();
	    }
		return checkCPEligibilityResponse;
	}
	
}