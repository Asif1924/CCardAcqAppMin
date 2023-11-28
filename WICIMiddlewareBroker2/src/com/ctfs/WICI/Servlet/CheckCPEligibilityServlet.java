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
		log.info("CheckCPEligibilityServlet[checkCPEligibility]");
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
			
			if(jobStatus.equalsIgnoreCase("RETIRED")) 
			{
				checkCPEligibilityRequest.setJobDescription("RETIRED");
			} 
			else 
			{
				if (jobDescription != null && !"".equals(jobDescription) && jobDescription.length()>19)
				{
					checkCPEligibilityRequest.setJobDescription(jobDescription.substring(0,19));
				}
				else
				{
					checkCPEligibilityRequest.setJobDescription(jobDescription);
				}
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
			
			log.info("[checkCPEligibilityHttpsClientCall]CheckCPEligibility The DSS CheckCPEligibility endPoint  === " + CWE117Fix.encodeCRLF(conf.getCpEligibilityEndPoint()) + " CheckCPEligibility request for dss ::: "+CWE117Fix.encodeCRLF(jsonInput));
			HttpResponse response = httpClient.execute(post);
			int statusCode = response.getStatusLine().getStatusCode();
			log.info("[checkCPEligibilityHttpsClientCall]CheckCPEligibility Profile status code :::: " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
			if (statusCode != 200) {
				throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
			}
			responseContent = EntityUtils.toString(response.getEntity());
			checkCPEligibilityResponse = jsonWrapper.deserialize(responseContent, WICIDSSCheckCPEligibilityResponse.class);
			log.info("[checkCPEligibilityHttpsClientCall] CheckCPEligibility Profile Response from DSS:::: " + CWE117Fix.encodeCRLF(checkCPEligibilityResponse != null ?checkCPEligibilityResponse.toString(): null));
		} catch (Exception e) {
			e.printStackTrace();
		}
		return checkCPEligibilityResponse;
	}
	
	private WICIDSSCheckCPEligibilityResponse checkCPEligibilityHttpClientCall(WICIDSSCheckCPEligibilityRequest checkCPEligibilityDSSRequest) {
		//String sMethod = this.getClass().getName() + "[checkCPEligibilityHttpClientCall] ";
		String  responseContent = null;
		WICIDSSCheckCPEligibilityResponse checkCPEligibilityResponse = new WICIDSSCheckCPEligibilityResponse();
        HttpClient httpClient = HttpClientBuilder.create().build();
	     
		try{
			WICIConfiguration conf = new WICIConfigurationFactory().createDASSEndPointConfiguration();
			HttpPost post = new HttpPost(conf.getCpEligibilityEndPoint());
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	String jsonInput = mapper.writeValueAsString(checkCPEligibilityDSSRequest);
	    	
	    	log.info("[checkCPEligibilityHttpClientCall] The DSS CheckCPEligibility endPoint  === " + CWE117Fix.encodeCRLF(conf.getCpEligibilityEndPoint()) + " CheckCPEligibility request for dss ::: "+CWE117Fix.encodeCRLF(jsonInput));
	    	post.setEntity(new StringEntity(jsonInput));
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse response = httpClient.execute(post);
	    	        
	        int statusCode = response.getStatusLine().getStatusCode();
	        if (statusCode != 200) {    
	            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        }
	        responseContent = EntityUtils.toString(response.getEntity());
	        checkCPEligibilityResponse = jsonWrapper.deserialize(responseContent, WICIDSSCheckCPEligibilityResponse.class);
	        if( checkCPEligibilityResponse != null ){
	        	log.info("[checkCPEligibilityHttpClientCall]checkCPEligibilityResponse Response "+ CWE117Fix.encodeCRLF(checkCPEligibilityResponse.toString()));
	        }
	    } catch(Exception e){
	    	log.warning("[checkCPEligibilityHttpClientCall]::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
	    } finally {
	    	httpClient.getConnectionManager().shutdown();
	    }
		return checkCPEligibilityResponse;
	}
	
}