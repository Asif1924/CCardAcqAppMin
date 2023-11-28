package com.ctfs.WICI.Helper;

import java.util.logging.Logger;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.ctfs.WICI.Servlet.Model.WICIPollAccountApplicationRequest;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

public class PollAccountApplicationResponseHelper {
	
	static Logger log = Logger.getLogger(PollAccountApplicationResponseHelper.class.getName());
	
	public WICIResponse handleHttpPollAccountApplicationResponse(WICIPollAccountApplicationRequest pollAccountRequest, 
			                                                     String endPoint){
		
		log.info("PollAccountApplicationResponseHelper[handleHttpPollAccountApplicationResponse]  method calling from PollAccountApplicationResponseServlet2  ===");
		
		log.info("PollAccountApplicationResponseHelper[handleHttpPollAccountApplicationResponse]  DSSWICIPollAccountApplicationRequest  ==="+CWE117Fix.encodeCRLF(pollAccountRequest != null? pollAccountRequest.toString(): null));
		
		HttpClient   httpClient   = HttpClientBuilder.create().build();
		String responseContent = null; 
		 //String endPoint = "http://localhost:8765/wicitab/v1/PollAccountApplicationResponse2";
		 
		 log.info("PollAccountApplicationResponseHelper[handleHttpPollAccountApplicationResponse] The DSS EndPoint  ==="+CWE117Fix.encodeCRLF(endPoint));
		 WICIResponse dssWiciResponse = null;
		 
		 try {
			   
		    	HttpPost post  = new HttpPost(endPoint);
		    	ObjectMapper  mapper = new ObjectMapper();
		    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
		    	String jsonInput = mapper.writeValueAsString(pollAccountRequest);
		    	
		    	log.info(" Passing the WICIPollAccountApplicationRequest as Input  "  +CWE117Fix.encodeCRLF(jsonInput));
		    	
		    	post.setEntity(new StringEntity(jsonInput));
		    	post.setHeader("Content-type", "application/json");
		    	HttpResponse  response = httpClient.execute(post);
		    	
		        int statusCode = response.getStatusLine().getStatusCode();
		        
		        if (statusCode != 200) 
		        {    
		            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        }
		        log.info("PollAccountApplicationResponseHelper[handleHttpPollAccountApplicationResponse]  The Status code  "  +CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        
		        responseContent = EntityUtils.toString(response.getEntity());
		        
		        dssWiciResponse = jsonWrapper.deserialize(responseContent,
		        		WICIResponse.class);
		        
		        if( dssWiciResponse != null ){
		        	log.info("PollAccountApplicationResponseHelper[handleHttpPollAccountApplicationResponse]  DSSWICIResponse "+CWE117Fix.encodeCRLF(dssWiciResponse.toString()));
		        	
		        }
		    	
		} catch(Exception e){
	    	 
		      e.printStackTrace();
		      log.warning("PollAccountApplicationResponseHelper[handleHttpPollAccountApplicationResponse] ::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
		    	
		    }
		    finally
		    {
		    	
		   	httpClient.getConnectionManager().shutdown();
		    }
		    
		return dssWiciResponse;
		
	}

	public WICIResponse handleHttpsPollAccountApplicationResponse(WICIPollAccountApplicationRequest pollAccountRequest, String endPoint){
		
		log.info("PollAccountApplicationResponseHelper[handleHttpsPollAccountApplicationResponse] method calling from PollAccountApplicationResponseServlet2  ===");
		log.info("PollAccountApplicationResponseHelper[handleHttpsPollAccountApplicationResponse] DSSWICIPollAccountApplicationRequest  ==="+CWE117Fix.encodeCRLF(pollAccountRequest != null ?pollAccountRequest.toString() : null));
		
		CloseableHttpClient httpClient = null;
		
		HttpClientHelper httpsecureClient = new HttpClientHelper();	
	    httpClient = httpsecureClient.getHttpSecureClient();
	    String responseContent = null;
		log.info("PollAccountApplicationResponseHelper[handleHttpsPollAccountApplicationResponse]The DSS EndPoint  ==="+CWE117Fix.encodeCRLF(endPoint));
		
		 WICIResponse dssWiciResponse = null;
		 
		 try {
		    	HttpPost post  = new HttpPost(endPoint);
		    	ObjectMapper  mapper = new ObjectMapper();
		    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
		    	String jsonInput = mapper.writeValueAsString(pollAccountRequest);
		    	
		    	log.info("PollAccountApplicationResponseHelper[handleHttpsPollAccountApplicationResponse] The WICIPollAccountApplicationRequest Input = "  +CWE117Fix.encodeCRLF(jsonInput));
		    	
		    	post.setEntity(new StringEntity(jsonInput));
		    	post.setHeader("Content-type", "application/json");
		    	HttpResponse  response = httpClient.execute(post);
		    	
		        int statusCode = response.getStatusLine().getStatusCode();
		        
		        if (statusCode != 200) 
		        {    
		            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        }
		        log.info("PollAccountApplicationResponseHelper[handleHttpsPollAccountApplicationResponse] The Status code  "  +CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        
		        responseContent = EntityUtils.toString(response.getEntity());
		        
		        dssWiciResponse = jsonWrapper.deserialize(responseContent,
		        		WICIResponse.class);
		        
		        if( dssWiciResponse != null ){
		        	log.info("PollAccountApplicationResponseHelper[handleHttpsPollAccountApplicationResponse]DSSWICIResponse "+CWE117Fix.encodeCRLF(dssWiciResponse.toString()));
		        	
		        }
		    	
		} catch(Exception e){
	    	 
		      e.printStackTrace();
		      log.warning("PollAccountApplicationResponseHelper[handleHttpsPollAccountApplicationResponse] ::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
		    	
		    }
		    finally
		    {
		    	
		   	httpClient.getConnectionManager().shutdown();
		    }
		    
		return dssWiciResponse;
		
	}
}
