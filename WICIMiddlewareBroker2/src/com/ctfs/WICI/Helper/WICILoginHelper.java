package com.ctfs.WICI.Helper;

import java.util.logging.Logger;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.ctfs.WICI.Servlet.Model.WICIDSSResponse;
import com.ctfs.WICI.Servlet.Model.WICILoginRequest;
import com.fasterxml.jackson.databind.ObjectMapper;

public class WICILoginHelper {

	static Logger log = Logger.getLogger(WICILoginHelper.class.getName());
	
	public  WICIDSSResponse submitWiciLoginHttpClient(WICILoginRequest dssLoginRequest, String endPoint) throws Exception {
		 
		 String sMethod = this.getClass().getName() + "[submitWiciLoginHttpClient] ";
		 
		 log.info("::This method is used to call in Login2 Servlet::");
		 log.info(sMethod + " DSSWICILoginRequest"  +CWE117Fix.encodeCRLF(dssLoginRequest != null ? dssLoginRequest.toString() : null));
		 
		 HttpClient   httpClient   = HttpClientBuilder.create().build();
		 String responseContent = null; 	
		 //String endPoint = "http://d9cbwpdssa01:8765/wicitab/v1/Login2";
		 
		 log.info(sMethod + "::Calling DSS End Point = "+CWE117Fix.encodeCRLF(endPoint));
		 WICIDSSResponse dssLoginResponse = null;
		 
		 try{
			 
	    	HttpPost post  = new HttpPost(endPoint);
	    	
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	String jsonInput = mapper.writeValueAsString(dssLoginRequest);
	    	
	    	log.info(sMethod + " The DSSWICILoginRequest Input  "  +CWE117Fix.encodeCRLF(jsonInput));
	    	
	    	post.setEntity(new StringEntity(jsonInput));
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	
	        int statusCode = response.getStatusLine().getStatusCode();
	        
	        if (statusCode != 200) 
	        {    
	            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        }
	        log.info(sMethod + " The Status code  "  +CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        
	        responseContent = EntityUtils.toString(response.getEntity());
	        
	        dssLoginResponse = jsonWrapper.deserialize(responseContent,
	        		WICIDSSResponse.class);
	        
	        if( dssLoginResponse != null ){
	        	log.info(sMethod + "dssLoginResponse "+ CWE117Fix.encodeCRLF(dssLoginResponse.toString()));
	        	
	        }
	        
	     }catch(Exception e){
	    	 
	      e.printStackTrace();
	      log.warning(sMethod + "::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
	    	
	    }
	    finally
	    {
	    	
	   	httpClient.getConnectionManager().shutdown();
	    }

		 return dssLoginResponse;
	 }
	
	public  WICIDSSResponse submitWiciLoginHttpsClient(WICILoginRequest dssRequest, String endPoint) throws Exception {
		 
		 String sMethod = this.getClass().getName() + "[submitWiciLoginHttpsClient] ";
		 CloseableHttpClient httpClient = null;
		 log.info("::This method is used to call in Login2 Servlet::");
		 log.info(sMethod + " Sending the DSSWICILoginRequest to DSS API"  +CWE117Fix.encodeCRLF(dssRequest != null ?dssRequest.toString() : null));
		 
		 HttpClientHelper httpsecureClient = new HttpClientHelper();	
	     httpClient = httpsecureClient.getHttpSecureClient();
	     String responseContent = null;
		 log.info(sMethod + "::The DSS End Point = "+CWE117Fix.encodeCRLF(endPoint));
		 WICIDSSResponse dssLoginResponse = null;
		 try{
			
	    	HttpPost post  = new HttpPost(endPoint);
	    	
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	String jsonInput = mapper.writeValueAsString(dssRequest);
	    	
	    	log.info(sMethod + " The DSSWICILoginRequest Input  "  +CWE117Fix.encodeCRLF(jsonInput));
	    	
	    	post.setEntity(new StringEntity(jsonInput));
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	
	        int statusCode = response.getStatusLine().getStatusCode();
	        
	        if (statusCode != 200) 
	        {    
	            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        }
	        log.info(sMethod + " The Status code  "  +CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        
	        responseContent = EntityUtils.toString(response.getEntity());
	        
	        dssLoginResponse = jsonWrapper.deserialize(responseContent,
	        		WICIDSSResponse.class);
	        
	        if( dssLoginResponse != null ){
	        	log.info(sMethod + "dssLoginResponse "+dssLoginResponse);
	        }
	     }catch(Exception e){
	      e.printStackTrace();
	      log.warning(sMethod + "::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
	    	
	    }
	    finally
	    {
	    	
	   	httpClient.getConnectionManager().shutdown();
	    }

		 return dssLoginResponse;
	 }
	
	/*public  WICISaveTrainingAttestationResponse saveAttestationDataHttpClient(WICISaveTrainingAttestationRequest trainingAttsetationRequest) throws Exception {
		
		 String sMethod = this.getClass().getName() + "[saveAttestationDataHttpClient] ";
		 log.info(sMethod + " method calling from SaveAttestationServlet2  ===");
		 log.info(sMethod + " Save Attestation Request  ===    "+ trainingAttsetationRequest  );
		 
		 HttpClient   httpClient   = HttpClientBuilder.create().build();
	     
		 String endPoint = "http://d9cbwpdssa01:8765/wicitab/v1/SaveTrainingAttestation2";
		 log.info(sMethod + "The DSS EndPoint  ==="+endPoint);
		 
		 WICISaveTrainingAttestationResponse dssWiciTrainingAttestationResponse = null;
		 
		 try {
			    String responseContent = null;
		    	HttpPost post  = new HttpPost(endPoint);
		    	ObjectMapper  mapper = new ObjectMapper();
		    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
		    	String jsonInput = mapper.writeValueAsString(trainingAttsetationRequest);
		    	log.info(sMethod + " The DSSWICITrainingAssestationRequest Input  "  +jsonInput);
		    	
		    	post.setEntity(new StringEntity(jsonInput));
		    	post.setHeader("Content-type", "application/json");
		    	HttpResponse  response = httpClient.execute(post);
		    	
		        int statusCode = response.getStatusLine().getStatusCode();
		        
		        if (statusCode != 200) 
		        {    
		            throw new RuntimeException("Failed with HTTP error code : " + statusCode);
		        }
		        log.info(sMethod + " The Status code  "  +statusCode);
		        
		        responseContent = EntityUtils.toString(response.getEntity());
		        
		        dssWiciTrainingAttestationResponse = jsonWrapper.deserialize(responseContent,
		        		WICISaveTrainingAttestationResponse.class);
		        
		        if( dssWiciTrainingAttestationResponse != null ){
		        	log.info(sMethod + "dssWiciTrainingAttestationResponse "+dssWiciTrainingAttestationResponse);
		        	
		        }
		    	
		} catch(Exception e){
	    	 
		      e.printStackTrace();
		      log.warning(sMethod + "::Exception::" + e.getMessage());
		    	
		    }
		    finally
		    {
		    	
		   	httpClient.getConnectionManager().shutdown();
		    }
		    
		return dssWiciTrainingAttestationResponse;
		
	}*/
	
	/*public  WICIRetrieveApprovedTrainingContentResponse retrieveApprovedTrainingContentHttpClient() throws Exception {
		 
		 String sMethod = this.getClass().getName() + "[retrieveApprovedTrainingContentHttpClient] ";
		 log.info(sMethod);
		 log.info(sMethod + "Method is calling from RetrieveTrainingContentServlet!");
		 
		 HttpClient   httpClient   = HttpClientBuilder.create().build();
	     
		 String endPoint = "http://d9cbwpdssa01:8765/wicitab/v1/RetrieveTrainingContent2";
		 
		 log.info(sMethod + "The DSS EndPoint  ==="+endPoint);
		 
		 WICIRetrieveApprovedTrainingContentResponse dssWiciTrainingContentResponse = null;
		 
		 try{
			 
			String responseContent = null; 	
	    	HttpPost post  = new HttpPost(endPoint);
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	
	        int statusCode = response.getStatusLine().getStatusCode();
	        if (statusCode != 200) 
	        {    
	            throw new RuntimeException("Failed with HTTP error code : " + statusCode);
	        }
	        log.info(sMethod + " The Status code  "  +statusCode);
	        
	        responseContent = EntityUtils.toString(response.getEntity());
	        
	        dssWiciTrainingContentResponse = jsonWrapper.deserialize(responseContent,
	        		WICIRetrieveApprovedTrainingContentResponse.class);
	        
	        if( dssWiciTrainingContentResponse != null ){
	        	
	        	log.info(sMethod + "dssWiciTrainingContentResponse "+dssWiciTrainingContentResponse);
	        	
	        }
	        
	     }catch(Exception e){
	    	 
	      e.printStackTrace();
	      log.warning(sMethod + "::Exception::" + e.getMessage());
	    	
	    }
	    finally
	    {
	    	
	   	httpClient.getConnectionManager().shutdown();
	    }

		 return dssWiciTrainingContentResponse;
	 }
	
	public WICISaveTrainingAttestationResponse getTrainingAttestationData(String userName){
		
		String sMethod = this.getClass().getName() + "[getTrainingAttestationData] ";
		 log.info(sMethod + " method calling from CheckAttestationServlet  ===");
		log.info(sMethod + " Get TrainingAttestationData   ==="+ userName);
		
		HttpClient   httpClient   = HttpClientBuilder.create().build();
	     
		 String endPoint = "http://d9cbwpdssa01:8765/wicitab/v1/CheckTrainingAttestation2";
		 
		 log.info(sMethod + "The DSS EndPoint  ==="+endPoint);
		 WICISaveTrainingAttestationResponse dssWiciTrainingAttestationResponse = null;
		 
		 try {
			    String responseContent = null;
		    	HttpPost post  = new HttpPost(endPoint);
		    	ObjectMapper  mapper = new ObjectMapper();
		    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
		    	String jsonInput = mapper.writeValueAsString(userName);
		    	
		    	log.info(sMethod + " Passing the UserName as Input  "  +jsonInput);
		    	
		    	post.setEntity(new StringEntity(jsonInput));
		    	post.setHeader("Content-type", "application/json");
		    	HttpResponse  response = httpClient.execute(post);
		    	
		        int statusCode = response.getStatusLine().getStatusCode();
		        
		        if (statusCode != 200) 
		        {    
		            throw new RuntimeException("Failed with HTTP error code : " + statusCode);
		        }
		        log.info(sMethod + " The Status code  "  +statusCode);
		        
		        responseContent = EntityUtils.toString(response.getEntity());
		        
		        dssWiciTrainingAttestationResponse = jsonWrapper.deserialize(responseContent,
		        		WICISaveTrainingAttestationResponse.class);
		        
		        if( dssWiciTrainingAttestationResponse != null ){
		        	log.info(sMethod + "dssWiciTrainingAttestationResponse "+dssWiciTrainingAttestationResponse);
		        	
		        }
		    	
		} catch(Exception e){
	    	 
		      e.printStackTrace();
		      log.warning(sMethod + "::Exception::" + e.getMessage());
		    	
		    }
		    finally
		    {
		    	
		   	httpClient.getConnectionManager().shutdown();
		    }
		    
		return dssWiciTrainingAttestationResponse;
	}*/
}
