package com.ctfs.WICI.Helper;

import java.util.logging.Logger;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.ctfs.WICI.Model.WICICheckTrainingAttestationRequest;
import com.ctfs.WICI.Model.WICICheckTrainingAttestationResponse;
import com.ctfs.WICI.Model.WICISaveTrainingAttestationRequest;
import com.fasterxml.jackson.databind.ObjectMapper;

public class CheckAttestationHelper {

	static Logger log = Logger.getLogger(CheckAttestationHelper.class.getName());
	
   public WICICheckTrainingAttestationResponse checkHttpAttestationData(WICISaveTrainingAttestationRequest wiciTrainingAttestationRequest,
		                                                                String endPoint){
		
		log.info("CheckAttestationHelper[checkHttpAttestationData] Method calling from CheckAttestationServlet2  ===");
		log.info("CheckAttestationHelper[checkHttpAttestationData]  DSSWICITrainingAttestationRequest   ==="+ CWE117Fix.encodeCRLF(wiciTrainingAttestationRequest != null ? wiciTrainingAttestationRequest.toString() : null) );
		
		WICICheckTrainingAttestationRequest wiciCheckTrainingRequest = new WICICheckTrainingAttestationRequest();
		
		wiciCheckTrainingRequest.setStoreLocationNumber(wiciTrainingAttestationRequest.getStoreLocationNumber());
		wiciCheckTrainingRequest.setFirstName(wiciTrainingAttestationRequest.getFirstName());
		wiciCheckTrainingRequest.setLastName(wiciTrainingAttestationRequest.getLastName());
		wiciCheckTrainingRequest.setRetailNetwork(wiciTrainingAttestationRequest.getRetailNetwork());
		
		 HttpClient   httpClient   = HttpClientBuilder.create().build();
		 String responseContent = null;
		 //String endPoint = "http://d9cbwpdssa01:8765/wicitab/v1/CheckTrainingAttestation2";
		 
		 log.info("CheckAttestationHelper[checkHttpAttestationData]The DSS EndPoint  ==="+CWE117Fix.encodeCRLF(endPoint != null ? endPoint : null));
		 WICICheckTrainingAttestationResponse dssCheckTrainingResponse = null;
		 
		 try {
			   
		    	HttpPost post  = new HttpPost(endPoint);
		    	ObjectMapper  mapper = new ObjectMapper();
		    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
		    	String jsonInput = mapper.writeValueAsString(wiciCheckTrainingRequest);
		    	
		    	log.info("CheckAttestationHelper[checkHttpAttestationData] The DSSWICITrainingAttestationRequest Input  = " +CWE117Fix.encodeCRLF(jsonInput != null ? jsonInput.toString() : null));
		    	
		    	post.setEntity(new StringEntity(jsonInput));
		    	post.setHeader("Content-type", "application/json");
		    	HttpResponse  response = httpClient.execute(post);
		    	
		        int statusCode = response.getStatusLine().getStatusCode();
		        
		        if (statusCode != 200) 
		        {    
		            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        }
		        log.info("CheckAttestationHelper[checkHttpAttestationData] The Status code  "  +CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        
		        responseContent = EntityUtils.toString(response.getEntity());
		        
		        dssCheckTrainingResponse = jsonWrapper.deserialize(responseContent,
		        		WICICheckTrainingAttestationResponse.class);
		        
		        if( dssCheckTrainingResponse != null ){
		        	log.info("CheckAttestationHelper[checkHttpAttestationData]dssWiciTrainingAttestationResponse "+CWE117Fix.encodeCRLF(dssCheckTrainingResponse.toString()));
		        	
		        }
		    	
		} catch(Exception e){
	    	 
		      e.printStackTrace();
		      log.warning("CheckAttestationHelper[checkHttpAttestationData]::Exception::" + e.getMessage());
		    	
		    }
		    finally
		    {
		    	
		   	httpClient.getConnectionManager().shutdown();
		    }
		    
		return dssCheckTrainingResponse;
	}
   
   public WICICheckTrainingAttestationResponse checkHttpsAttestationData(WICISaveTrainingAttestationRequest wiciTrainingAttestationRequest,
		   																String endPoint){
		
		log.info("CheckAttestationHelper[checkHttpsAttestationData]  Method calling from CheckAttestationServlet2  ===");
		
		WICICheckTrainingAttestationRequest wiciCheckTrainingRequest = new WICICheckTrainingAttestationRequest();
		
		wiciCheckTrainingRequest.setStoreLocationNumber(wiciTrainingAttestationRequest.getStoreLocationNumber());
		wiciCheckTrainingRequest.setFirstName(wiciTrainingAttestationRequest.getFirstName());
		wiciCheckTrainingRequest.setLastName(wiciTrainingAttestationRequest.getLastName());
		wiciCheckTrainingRequest.setRetailNetwork(wiciTrainingAttestationRequest.getRetailNetwork());
		
		CloseableHttpClient httpClient = null;
		HttpClientHelper httpsecureClient = new HttpClientHelper();	
	    httpClient = httpsecureClient.getHttpSecureClient();
	    String responseContent = null;
		log.info("CheckAttestationHelper[checkHttpsAttestationData]The DSS EndPoint  ==="+endPoint);
		
		WICICheckTrainingAttestationResponse dssCheckTrainingAttestionResponse = null;
		 try {
		    	HttpPost post  = new HttpPost(endPoint);
		    	ObjectMapper  mapper = new ObjectMapper();
		    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
		    	String jsonInput = mapper.writeValueAsString(wiciCheckTrainingRequest);
		    	
		    	log.info("CheckAttestationHelper[checkHttpsAttestationData] The DSSWICITrainingAttestationRequest Input  = "  +CWE117Fix.encodeCRLF(jsonInput != null ? jsonInput.toString() : null));
		    	
		    	post.setEntity(new StringEntity(jsonInput));
		    	post.setHeader("Content-type", "application/json");
		    	HttpResponse  response = httpClient.execute(post);
		    	
		        int statusCode = response.getStatusLine().getStatusCode();
		        
		        if (statusCode != 200) 
		        {    
		            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        }
		        log.info("CheckAttestationHelper[checkHttpsAttestationData] The Status code  "  + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        
		        responseContent = EntityUtils.toString(response.getEntity());
		        
		        dssCheckTrainingAttestionResponse = jsonWrapper.deserialize(responseContent,
		        		WICICheckTrainingAttestationResponse.class);
		        
		        if( dssCheckTrainingAttestionResponse != null ){
		        	log.info("CheckAttestationHelper[checkHttpsAttestationData]dssWiciTrainingAttestationResponse "+CWE117Fix.encodeCRLF(dssCheckTrainingAttestionResponse.toString()));
		        	
		        }
		    	
		} catch(Exception e){
	    	 
		      e.printStackTrace();
		      log.warning("CheckAttestationHelper[checkHttpsAttestationData]::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
		    	
		    }
		    finally
		    {
		    	
		   	httpClient.getConnectionManager().shutdown();
		    }
		    
		return dssCheckTrainingAttestionResponse;
	}
}
