package com.ctfs.WICI.Helper;

import java.util.logging.Logger;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.ctfs.WICI.Servlet.Model.HealthCheckResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ServerAliveHelper {

	static Logger log = Logger.getLogger(ServerAliveHelper.class.getName());
	
	public HealthCheckResponse checkHttpIsServerAlive(String endPoint){
		
		//String sMethod = this.getClass().getName() + "ServerAliveHelper[checkHttpIsServerAlive] ";
		log.info("ServerAliveHelper[checkHttpIsServerAlive]  Method calling from IsServerAlive2 Servlet  ===");
		
		HttpClient   httpClient   = HttpClientBuilder.create().build();
		String responseContent = null;
		
		 //String endPoint = "http://d9cbwpdssa01:8765/wicitab/v1/IsServerAlive2";
		 log.info("ServerAliveHelper[checkHttpIsServerAlive] ::The DSS EndPoint = "+CWE117Fix.encodeCRLF(endPoint));
		 HealthCheckResponse dssHealthCheckResponse = null;
		 try {
			    
		    	HttpPost post  = new HttpPost(endPoint);
		    	ObjectMapper  mapper = new ObjectMapper();
		    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
		    	
		    	HttpResponse  response = httpClient.execute(post);
		    	
		        int statusCode = response.getStatusLine().getStatusCode();
		        
		        if (statusCode != 200) 
		        {    
		            throw new RuntimeException("Failed with HTTP error code : " +  CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        }
		        log.info("ServerAliveHelper[checkHttpIsServerAlive]  The Status code  "  + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        
		        responseContent = EntityUtils.toString(response.getEntity());
		        
		        dssHealthCheckResponse = jsonWrapper.deserialize(responseContent,
		        		HealthCheckResponse.class);
		        
		        if( dssHealthCheckResponse != null ){
		        	log.info("ServerAliveHelper[checkHttpIsServerAlive] DSSHealthCheckResponse "+CWE117Fix.encodeCRLF(dssHealthCheckResponse.toString()));
		        	
		        }
		    	
		} catch(Exception e){
	    	 
		      e.printStackTrace();
		      log.warning("ServerAliveHelper[checkHttpIsServerAlive]::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
		    	
		    }
		    finally
		    {
		    	
		   	httpClient.getConnectionManager().shutdown();
		    }
		    
		return dssHealthCheckResponse;
		
	}
	
	public HealthCheckResponse checkHttpsIsServerAlive(String endPoint){
		
		log.info("ServerAliveHelper[checkHttpsIsServerAlive]  Method calling from IsServerAlive2 Servlet  ===");
		
		CloseableHttpClient httpClient = null;
		HttpClientHelper httpsecureClient = new HttpClientHelper();	
	    httpClient = httpsecureClient.getHttpSecureClient();
	    String responseContent = null;
		log.info("ServerAliveHelper[checkHttpsIsServerAlive]::The DSS EndPoint = "+CWE117Fix.encodeCRLF(endPoint));
		 
		 HealthCheckResponse dssHealthCheckResponse = null;
		 
		 try {
		    	HttpPost post  = new HttpPost(endPoint);
		    	ObjectMapper  mapper = new ObjectMapper();
		    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
		    	
		    	HttpResponse  response = httpClient.execute(post);
		    	
		        int statusCode = response.getStatusLine().getStatusCode();
		        
		        if (statusCode != 200) 
		        {    
		            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        }
		        log.info("ServerAliveHelper[checkHttpsIsServerAlive]  The Status code  "  +CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        
		        responseContent = EntityUtils.toString(response.getEntity());
		        
		        dssHealthCheckResponse = jsonWrapper.deserialize(responseContent,
		        		HealthCheckResponse.class);
		        
		        if( dssHealthCheckResponse != null ){
		        	log.info("ServerAliveHelper[checkHttpsIsServerAlive]  DSSHealthCheckResponse "+CWE117Fix.encodeCRLF(dssHealthCheckResponse.toString()));
		        	
		        }
		    	
		} catch(Exception e){
	    	 
		      e.printStackTrace();
		      log.warning("ServerAliveHelper[checkHttpsIsServerAlive] ::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
		    	
		    }
		    finally
		    {
		    	
		   	httpClient.getConnectionManager().shutdown();
		    }
		    
		return dssHealthCheckResponse;
		
	}
}
