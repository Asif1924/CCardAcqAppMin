package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.ctfs.WICI.Helper.CWE117Fix;
import com.ctfs.WICI.Helper.HttpClientHelper;
import com.ctfs.WICI.Helper.JsonWrapper;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.JobDescriptionOutput;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

public class RetrieveJobDescriptionServlet2 extends WICIServlet {
	private static final long serialVersionUID = 1L;
	
	static Logger log = Logger
			.getLogger(RetrieveJobDescriptionServlet2.class.getName());

	public RetrieveJobDescriptionServlet2() {

	}

	protected void handleRequest(WICIServletMediator requestMediator)
			throws ServletException, IOException {
		log.info("RetrieveJobDescriptionServlet2[handleRequest]");
        retriveJobDescriptionFromDSS(requestMediator);
	}

	private void retriveJobDescriptionFromDSS(WICIServletMediator requestMediator) {
		
		log.info("RetrieveJobDescriptionServlet2[retriveJobDescriptionFromDSS]:: Called !");
		
		WICIResponse tableResponse = new WICIResponse();
		JobDescriptionOutput dssjobDescriptionResponse = new JobDescriptionOutput();
		try {
			WICIConfiguration conf = new WICIConfigurationFactory().createReWriteDASSEndPointConfiguration();
			if(conf.getRewriteDssServiceEnv().equalsIgnoreCase("DSSDEV")){
				dssjobDescriptionResponse = retriveJobDescriptionHttpClientCall();
			} else{
				dssjobDescriptionResponse = retriveJobDescriptionHttpsClientCall();
			}
			
			if(dssjobDescriptionResponse != null && dssjobDescriptionResponse.getJobDescriptionList() != null && dssjobDescriptionResponse.getJobCategoryList() != null){
				tableResponse.setData(dssjobDescriptionResponse);
			} else {
				tableResponse.setError(true);
				tableResponse.setMsg("Failure");	
			}
		} catch (Exception e) {
			e.printStackTrace();
			tableResponse.setError(true);
			tableResponse.setMsg("Failure");
		}
		log.info("RetrieveJobDescriptionServlet2[retriveJobDescriptionFromDSS] the formated response to wici "+CWE117Fix.encodeCRLF(tableResponse.toString()));
		requestMediator.processHttpResponse(tableResponse);
	}

	
	private JobDescriptionOutput retriveJobDescriptionHttpsClientCall(){
		 CloseableHttpClient httpClient= null;
		 String  responseContent = null;
		 JobDescriptionOutput jobDescriptionResponse = new JobDescriptionOutput();
		 log.info("RetrieveJobDescriptionServlet2[retriveJobDescriptionHttpsClientCall}");
		 try{
			HttpClientHelper secureClient = new HttpClientHelper();
			httpClient = secureClient.getHttpSecureClient();
			WICIConfiguration conf = new WICIConfigurationFactory().createReWriteDASSEndPointConfiguration();
			HttpPost post = new HttpPost(conf.getReWrtieDSSJobDescEndPoint());
			ObjectMapper mapper = new ObjectMapper();
			JsonWrapper jsonWrapper = new JsonWrapper(mapper);
			post.setHeader("Content-type", "application/json");
			HttpResponse response = httpClient.execute(post);

			int statusCode = response.getStatusLine().getStatusCode();
			
			log.info("RetrieveJobDescriptionServlet2[retriveJobDescriptionHttpsClientCall}retriveJobDescription status code :::: " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
			if (statusCode != 200) {
				throw new RuntimeException("Failed with HTTP error code : "
						+ CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
			}
			responseContent = EntityUtils.toString(response.getEntity());
			jobDescriptionResponse = jsonWrapper.deserialize(responseContent,
					JobDescriptionOutput.class);
		        
			log.info("RetrieveJobDescriptionServlet2[retriveJobDescriptionHttpsClientCall}jobDescriptionResponse  from DSS:::: " + CWE117Fix.encodeCRLF(jobDescriptionResponse.toString()));
		
	} catch (Exception e) {
		e.printStackTrace();
	}
		return jobDescriptionResponse;
	}
	
	
	public  JobDescriptionOutput  retriveJobDescriptionHttpClientCall(){
		 
		 String  responseContent = null;
		 JobDescriptionOutput jobDescriptionResponse = new JobDescriptionOutput();
         HttpClient   httpClient   = HttpClientBuilder.create().build();
		 try{
			 WICIConfiguration conf = new WICIConfigurationFactory().createReWriteDASSEndPointConfiguration();
			 HttpPost post = new HttpPost(conf.getReWrtieDSSJobDescEndPoint());
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	        
	        int statusCode = response.getStatusLine().getStatusCode();
	        log.info("RetrieveJobDescriptionServlet2[retriveJobDescriptionHttpClientCall] retriveJobDescription status code :::: " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        if (statusCode != 200) {    
	            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        }
	        responseContent = EntityUtils.toString(response.getEntity());
	        
	        jobDescriptionResponse = jsonWrapper.deserialize(responseContent, JobDescriptionOutput.class);
	        
	        if( jobDescriptionResponse != null ){
	        	log.info("RetrieveJobDescriptionServlet2[retriveJobDescriptionHttpClientCall] jobDescriptionResponse Response "+ CWE117Fix.encodeCRLF(jobDescriptionResponse.getJobDescriptionList() != null ?jobDescriptionResponse.getJobDescriptionList().toString() : null));
	        }
	        
	     } catch(Exception e){
	    	e.printStackTrace();
	    	log.warning("RetrieveJobDescriptionServlet2[retriveJobDescriptionHttpClientCall]::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
	    } finally {
	    	httpClient.getConnectionManager().shutdown();
	    }
	    return jobDescriptionResponse;
	}

}