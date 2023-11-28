package com.ctfs.WICI.Helper;

import java.util.logging.Logger;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.ctfs.WICI.Servlet.Model.WICICreditCardApplicationData;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

public class InitAccountApplicationHelper {

	static Logger log = Logger.getLogger(InitAccountApplicationHelper.class.getName());
	
public WICIResponse queueAccountApplicationHttpRequest(WICICreditCardApplicationData wiciCreditCardApplicationData,
		                                            String endPoint){
		
		HttpClient   httpClient   = HttpClientBuilder.create().build();
		String responseContent = null; 
		 
		 log.info("InitAccountApplicationHelper[queueAccountApplicationRequest]The DSS InitAccountApplication2  EndPoint  ==="+CWE117Fix.encodeCRLF(endPoint));
		 WICIResponse initDSSResponse = null;
		 
		 try {
			   
		    	HttpPost post  = new HttpPost(endPoint);
		    	ObjectMapper  mapper = new ObjectMapper();
		    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
		    	String jsonInput = mapper.writeValueAsString(wiciCreditCardApplicationData);
		    	
		    	log.info("InitAccountApplicationHelper[queueAccountApplicationRequest] The DSSWICICreditCardApplicationDataRequest Input  "  +CWE117Fix.encodeCRLF(jsonInput));
		    	
		    	post.setEntity(new StringEntity(jsonInput));
		    	post.setHeader("Content-type", "application/json");
		    	HttpResponse  response = httpClient.execute(post);
		    	
		        int statusCode = response.getStatusLine().getStatusCode();
		        
		        if (statusCode != 200) 
		        {    
		            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        }
		        log.info("InitAccountApplicationHelper[queueAccountApplicationRequest] The Status code  "  +CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        
		        responseContent = EntityUtils.toString(response.getEntity());
		        
		        initDSSResponse = jsonWrapper.deserialize(responseContent,
		        		WICIResponse.class);
		        
		        if( initDSSResponse != null ){
		        	log.info("InitAccountApplicationHelper[queueAccountApplicationRequest] initDSSResponse  "+CWE117Fix.encodeCRLF(initDSSResponse.toString()));
		        	
		        }
		    	
		} catch(Exception e){
	    	 
		      e.printStackTrace();
		      log.warning("InitAccountApplicationHelper[queueAccountApplicationRequest]::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
		    	
		    }
		    finally
		    {
		    	
		   	httpClient.getConnectionManager().shutdown();
		    }
		    
		return initDSSResponse;
	}
	
public WICIResponse queueAccountApplicationHttpsRequest(WICICreditCardApplicationData wiciCreditCardApplicationData, String endPoint){
	
	CloseableHttpClient httpClient = null;
	
	HttpClientHelper httpsecureClient = new HttpClientHelper();	
    httpClient = httpsecureClient.getHttpSecureClient();
    String responseContent = null;
	log.info("The DSSInit EndPoint  ==="+CWE117Fix.encodeCRLF(endPoint));
	 
	WICIResponse initDSSResponse = null;
	 
	 try {
	    	HttpPost post  = new HttpPost(endPoint);
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	String jsonInput = mapper.writeValueAsString(wiciCreditCardApplicationData);
	    	
	    	log.info("queueAccountApplicationHttpsRequest[] The DSSWICICreditCardApplicationData Input  "  +CWE117Fix.encodeCRLF(jsonInput));
	    	
	    	post.setEntity(new StringEntity(jsonInput));
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	
	        int statusCode = response.getStatusLine().getStatusCode();
	        
	        if (statusCode != 200) 
	        {    
	            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        }
	        log.info("queueAccountApplicationHttpsRequest The Status code  "  +CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        
	        responseContent = EntityUtils.toString(response.getEntity());
	        
	        initDSSResponse = jsonWrapper.deserialize(responseContent,
	        		WICIResponse.class);
	        
	        if( initDSSResponse != null ){
	        	log.info("queueAccountApplicationHttpsRequest[] initDSSResponse "+CWE117Fix.encodeCRLF(initDSSResponse.toString()));
	        	
	        }
	    	
	} catch(Exception e){
    	 
	      e.printStackTrace();
	      log.warning("queueAccountApplicationHttpsRequest[]::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
	    	
	    }
	    finally
	    {
	    	
	   	httpClient.getConnectionManager().shutdown();
	    }
	    
	return initDSSResponse;
}
}
