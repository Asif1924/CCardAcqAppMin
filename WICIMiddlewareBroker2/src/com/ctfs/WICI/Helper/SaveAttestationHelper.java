package com.ctfs.WICI.Helper;

import java.util.logging.Logger;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.ctfs.WICI.Model.WICISaveTrainingAttestationRequest;
import com.ctfs.WICI.Model.WICISaveTrainingAttestationResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

public class SaveAttestationHelper {

	static Logger log = Logger.getLogger(SaveAttestationHelper.class.getName());
	
	public  WICISaveTrainingAttestationResponse saveHttpAttestationData(WICISaveTrainingAttestationRequest trainingAttsetationRequest, String endPoint) throws Exception {
		
		// String sMethod = this.getClass().getName() + "SaveAttestationHelper[saveHttpAttestationData] ";
		 log.info("SaveAttestationHelper[saveHttpAttestationData]  method calling from SaveAttestationServlet2  ===");
		 log.info("SaveAttestationHelper[saveHttpAttestationData]  Save Attestation Request  ===    "+ CWE117Fix.encodeCRLF(trainingAttsetationRequest != null ? trainingAttsetationRequest.toString() : null));
		 
		 HttpClient   httpClient   = HttpClientBuilder.create().build();
		 String responseContent = null;
		 
		 //String endPoint = "http://d9cbwpdssa01:8765/wicitab/v1/SaveTrainingAttestation2";
		 log.info("SaveAttestationHelper[saveHttpAttestationData] The DSS EndPoint  ==="+ CWE117Fix.encodeCRLF(endPoint));
		 
		 WICISaveTrainingAttestationResponse dssWiciTrainingAttestationResponse = null;
		 
		 try {
		    	HttpPost post  = new HttpPost(endPoint);
		    	ObjectMapper  mapper = new ObjectMapper();
		    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
		    	String jsonInput = mapper.writeValueAsString(trainingAttsetationRequest);
		    	log.info("SaveAttestationHelper[saveHttpAttestationData]  The DSSWICITrainingAssestationRequest Input  "  +CWE117Fix.encodeCRLF(jsonInput));
		    	
		    	post.setEntity(new StringEntity(jsonInput));
		    	post.setHeader("Content-type", "application/json");
		    	HttpResponse  response = httpClient.execute(post);
		    	
		        int statusCode = response.getStatusLine().getStatusCode();
		        
		        if (statusCode != 200) 
		        {    
		            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        }
		        log.info("SaveAttestationHelper[saveHttpAttestationData] The Status code  "  +CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        
		        responseContent = EntityUtils.toString(response.getEntity());
		        
		        dssWiciTrainingAttestationResponse = jsonWrapper.deserialize(responseContent,
		        		WICISaveTrainingAttestationResponse.class);
		        
		        if( dssWiciTrainingAttestationResponse != null ){
		        	log.info("SaveAttestationHelper[saveHttpAttestationData] dssWiciTrainingAttestationResponse "+CWE117Fix.encodeCRLF(dssWiciTrainingAttestationResponse.toString()));
		        	
		        }
		    	
		} catch(Exception e){
	    	 
		      e.printStackTrace();
		      log.warning("SaveAttestationHelper[saveHttpAttestationData]::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
		    	
		    }
		    finally
		    {
		    	
		   	httpClient.getConnectionManager().shutdown();
		    }
		    
		return dssWiciTrainingAttestationResponse;
		
	}
	
	public  WICISaveTrainingAttestationResponse saveHttpsAttestationData(WICISaveTrainingAttestationRequest trainingAttsetationRequest,
			                                                                 String endPoint) throws Exception {
		
		// String sMethod = this.getClass().getName() + "[saveHttpsAttestationData] ";
		 log.info("SaveAttestationHelper[saveHttpsAttestationData] method calling from SaveAttestationServlet2  ===");
		 log.info("SaveAttestationHelper[saveHttpsAttestationData] DSSWICITrainingAttestationRequest  ===    "+ CWE117Fix.encodeCRLF(trainingAttsetationRequest != null ? trainingAttsetationRequest.toString() : null) );
		 
		 CloseableHttpClient httpClient = null;
		 HttpClientHelper httpsecureClient = new HttpClientHelper();	
	     httpClient = httpsecureClient.getHttpSecureClient();
	     String responseContent = null;
		 log.info("SaveAttestationHelper[saveHttpsAttestationData]The DSS EndPoint  ==="+CWE117Fix.encodeCRLF(endPoint));
		 
		 WICISaveTrainingAttestationResponse dssWiciTrainingAttestationResponse = null;
		 
		 try {
		    	HttpPost post  = new HttpPost(endPoint);
		    	ObjectMapper  mapper = new ObjectMapper();
		    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
		    	String jsonInput = mapper.writeValueAsString(trainingAttsetationRequest);
		    	log.info("SaveAttestationHelper[saveHttpsAttestationData] The DSSWICITrainingAssestationRequest Input  "  +CWE117Fix.encodeCRLF((jsonInput)));
		    	
		    	post.setEntity(new StringEntity(jsonInput));
		    	post.setHeader("Content-type", "application/json");
		    	HttpResponse  response = httpClient.execute(post);
		    	
		        int statusCode = response.getStatusLine().getStatusCode();
		        
		        if (statusCode != 200) 
		        {    
		            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        }
		        log.info("SaveAttestationHelper[saveHttpsAttestationData] The Status code  "  +CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
		        
		        responseContent = EntityUtils.toString(response.getEntity());
		        
		        dssWiciTrainingAttestationResponse = jsonWrapper.deserialize(responseContent,
		        		WICISaveTrainingAttestationResponse.class);
		        
		        if( dssWiciTrainingAttestationResponse != null ){
		        	log.info("SaveAttestationHelper[saveHttpsAttestationData]dssWiciTrainingAttestationResponse "+CWE117Fix.encodeCRLF(dssWiciTrainingAttestationResponse.toString()));
		        	
		        }
		    	
		} catch(Exception e){
	    	 
		      e.printStackTrace();
		      log.warning("SaveAttestationHelper[saveHttpsAttestationData]::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
		    	
		    }
		    finally
		    {
		    	
		   	httpClient.getConnectionManager().shutdown();
		    }
		    
		return dssWiciTrainingAttestationResponse;
		
	}
}
