package com.ctfs.WICI.Helper;

import java.util.logging.Logger;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.ctfs.WICI.Servlet.Model.WICIAgentInfoRequest;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

public class AgentHelper {

	static Logger log = Logger.getLogger(AgentHelper.class.getName());
	
public WICIResponse handleHttpAgentInfoRequest(WICIAgentInfoRequest wiciAgentInfoRequest, String endPoint){
		
		log.info("AgentHelper[handleHttpAgentInfoRequest] method calling from Agent2 Servlet  ===");
		log.info("AgentHelper[handleHttpAgentInfoRequest] WICIAgentInfoRequest  ==="+CWE117Fix.encodeCRLF(wiciAgentInfoRequest != null ? wiciAgentInfoRequest.toString() : null));
		
		HttpClient   httpClient   = HttpClientBuilder.create().build();
		String responseContent = null;
		
		 //String endPoint = "http://d9cbwpdssa01:8765/wicitab/v1/Agent2";
		 log.info("AgentHelper[handleHttpAgentInfoRequest]::Calling DSS End Point = " +CWE117Fix.encodeCRLF(endPoint != null ? endPoint.toString() : null));
		 
		 WICIResponse dssWiciResponse = null;
		 
		 try {
			    
		    	HttpPost post  = new HttpPost(endPoint);
		    	ObjectMapper  mapper = new ObjectMapper();
		    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
		    	String jsonInput = mapper.writeValueAsString(wiciAgentInfoRequest);
		    	
		    	log.info("AgentHelper[handleHttpAgentInfoRequest] Passing the WICIAgentInfoRequest as Input  " +CWE117Fix.encodeCRLF(jsonInput != null ? jsonInput.toString() : null));
		    	
		    	post.setEntity(new StringEntity(jsonInput));
		    	post.setHeader("Content-type", "application/json");
		    	HttpResponse  response = httpClient.execute(post);
		    	
		        int statusCode = response.getStatusLine().getStatusCode();
		        
		        if (statusCode != 200) 
		        {    
		            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        }
		        log.info("AgentHelper[handleHttpAgentInfoRequest] The Status code  "  +CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        
		        responseContent = EntityUtils.toString(response.getEntity());
		        
		        dssWiciResponse = jsonWrapper.deserialize(responseContent,
		        		WICIResponse.class);
		        
		        if( dssWiciResponse != null ){
		        	log.info("AgentHelper[handleHttpAgentInfoRequest]DSSWICIResponse "+CWE117Fix.encodeCRLF(dssWiciResponse != null ? dssWiciResponse.toString() : null));
		        	
		        }
		    	
		} catch(Exception e){
	    	 
		      e.printStackTrace();
		      log.warning("AgentHelper[handleHttpAgentInfoRequest]::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
		    	
		    }
		    finally
		    {
		    	
		   	httpClient.getConnectionManager().shutdown();
		    }
		    
		return dssWiciResponse;
	}

	public WICIResponse handleHttpsAgentInfoRequest(WICIAgentInfoRequest wiciAgentInfoRequest, String endPoint){
	
	log.info("AgentHelper[handleHttpsAgentInfoRequest] method calling from Agent2 Servlet  ===");
	log.info("AgentHelper[handleHttpsAgentInfoRequest] WICIAgentInfoRequest  ==="+CWE117Fix.encodeCRLF(wiciAgentInfoRequest != null ? wiciAgentInfoRequest.toString() : null));
	
	CloseableHttpClient httpClient = null;
	HttpClientHelper httpsecureClient = new HttpClientHelper();	
    httpClient = httpsecureClient.getHttpSecureClient();
    String responseContent = null;
    log.info("AgentHelper[handleHttpsAgentInfoRequest]::Calling DSS End Point = " +CWE117Fix.encodeCRLF(endPoint != null ? endPoint.toString() : null));
	 
	 WICIResponse dssWiciResponse = null;
	 try {
	    	HttpPost post  = new HttpPost(endPoint);
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	String jsonInput = mapper.writeValueAsString(wiciAgentInfoRequest);
	    	
	    	log.info("AgentHelper[handleHttpsAgentInfoRequest] Passing the WICIAgentInfoRequest as Input  " +CWE117Fix.encodeCRLF(jsonInput != null ? jsonInput.toString() : null));
	    	
	    	post.setEntity(new StringEntity(jsonInput));
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	
	        int statusCode = response.getStatusLine().getStatusCode();
	        
	        if (statusCode != 200) 
	        {    
	            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        }
	        log.info("AgentHelper[handleHttpsAgentInfoRequest] The Status code  "  +CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        
	        responseContent = EntityUtils.toString(response.getEntity());
	        
	        dssWiciResponse = jsonWrapper.deserialize(responseContent,
	        		WICIResponse.class);
	        
	        if( dssWiciResponse != null ){
	        	log.info("AgentHelper[handleHttpsAgentInfoRequest] DSSWICIResponse "+CWE117Fix.encodeCRLF(dssWiciResponse != null ? dssWiciResponse.toString() : null) );
	        	
	        }
	    	
	} catch(Exception e){
    	 
	      e.printStackTrace();
	      log.warning("AgentHelper[handleHttpsAgentInfoRequest]::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
	    	
	    }
	    finally
	    {
	    	
	   	httpClient.getConnectionManager().shutdown();
	    }
	    
	return dssWiciResponse;
}
}
