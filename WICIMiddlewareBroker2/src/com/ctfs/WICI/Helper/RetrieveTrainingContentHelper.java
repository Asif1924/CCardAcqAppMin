package com.ctfs.WICI.Helper;

import java.util.logging.Logger;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.ctfs.WICI.Servlet.Model.WICIRetrieveApprovedTrainingContentResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

public class RetrieveTrainingContentHelper {

	static Logger log = Logger.getLogger(RetrieveTrainingContentHelper.class.getName());
	
	public  WICIRetrieveApprovedTrainingContentResponse retrieveHttpApprovedTrainingContent(String endPoint) throws Exception {
		 
		// String sMethod = this.getClass().getName() + "RetrieveTrainingContentHelper[retrieveHttpApprovedTrainingContent] ";
		 log.info("RetrieveTrainingContentHelper[retrieveHttpApprovedTrainingContent]");
		 
		 log.info("RetrieveTrainingContentHelper[retrieveHttpApprovedTrainingContent] Method calling from RetrieveTrainingContentServlet2  ===");
		 
		 HttpClient   httpClient   = HttpClientBuilder.create().build();
		 String responseContent = null;
		 //String endPoint = "http://d9cbwpdssa01:8765/wicitab/v1/RetrieveTrainingContent2";
		 
		 log.info("RetrieveTrainingContentHelper[retrieveHttpApprovedTrainingContent]The DSS EndPoint  ==="+CWE117Fix.encodeCRLF(endPoint));
		 
		 WICIRetrieveApprovedTrainingContentResponse dssWiciTrainingContentResponse = null;
		 
		 try{
			 
	    	HttpPost post  = new HttpPost(endPoint);
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	
	        int statusCode = response.getStatusLine().getStatusCode();
	        if (statusCode != 200) 
	        {    
	            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        }
	        log.info("RetrieveTrainingContentHelper[retrieveHttpApprovedTrainingContent] The Status code  "  +CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        
	        responseContent = EntityUtils.toString(response.getEntity());
	        
	        dssWiciTrainingContentResponse = jsonWrapper.deserialize(responseContent,
	        		WICIRetrieveApprovedTrainingContentResponse.class);
	        
	        if( dssWiciTrainingContentResponse != null ){
	        	
	        	log.info("RetrieveTrainingContentHelper[retrieveHttpApprovedTrainingContent] dssWiciTrainingContentResponse "+CWE117Fix.encodeCRLF(dssWiciTrainingContentResponse.toString()));
	        	
	        }
	        
	     }catch(Exception e){
	    	 
	      e.printStackTrace();
	      log.warning("RetrieveTrainingContentHelper[retrieveHttpApprovedTrainingContent]::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
	    	
	    }
	    finally
	    {
	    	
	   	httpClient.getConnectionManager().shutdown();
	    }

		 return dssWiciTrainingContentResponse;
	 }
	
	public  WICIRetrieveApprovedTrainingContentResponse retrieveHttpsApprovedTrainingContent(String endPoint) throws Exception {
		 
		// String sMethod = this.getClass().getName() + "RetrieveTrainingContentHelper[retrieveHttpsApprovedTrainingContent] ";
		 CloseableHttpClient httpClient = null;
		 log.info("RetrieveTrainingContentHelper[retrieveHttpsApprovedTrainingContent]  Method calling from RetrieveTrainingContentServlet2  ===");
		 
		 HttpClientHelper httpsecureClient = new HttpClientHelper();	
	     httpClient = httpsecureClient.getHttpSecureClient();
	     String responseContent = null;
		 log.info("RetrieveTrainingContentHelper[retrieveHttpsApprovedTrainingContent] The DSS EndPoint  ==="+CWE117Fix.encodeCRLF(endPoint));
		 
		 WICIRetrieveApprovedTrainingContentResponse dssWiciTrainingContentResponse = null;
		 
		 try{
			 
	    	HttpPost post  = new HttpPost(endPoint);
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	
	        int statusCode = response.getStatusLine().getStatusCode();
	        if (statusCode != 200) 
	        {    
	            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        }
	        log.info("RetrieveTrainingContentHelper[retrieveHttpsApprovedTrainingContent]  The Status code  "  +CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        
	        responseContent = EntityUtils.toString(response.getEntity());
	        
	        dssWiciTrainingContentResponse = jsonWrapper.deserialize(responseContent,
	        		WICIRetrieveApprovedTrainingContentResponse.class);
	        
	        if( dssWiciTrainingContentResponse != null ){
	        	
	        	log.info("RetrieveTrainingContentHelper[retrieveHttpsApprovedTrainingContent]  dssWiciTrainingContentResponse "+CWE117Fix.encodeCRLF(dssWiciTrainingContentResponse.toString()));
	        	
	        }
	        
	     }catch(Exception e){
	    	 
	      e.printStackTrace();
	      log.warning("RetrieveTrainingContentHelper[retrieveHttpsApprovedTrainingContent]  ::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
	    	
	    }
	    finally
	    {
	    	
	   	httpClient.getConnectionManager().shutdown();
	    }

		 return dssWiciTrainingContentResponse;
	 }
	
}
