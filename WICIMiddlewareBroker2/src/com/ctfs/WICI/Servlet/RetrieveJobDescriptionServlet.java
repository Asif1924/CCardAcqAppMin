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

import com.ctfs.WICI.Helper.HttpClientHelper;
import com.ctfs.WICI.Helper.JsonWrapper;
import com.ctfs.WICI.Helper.WICIConfigurationFactory;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Servlet.Model.JobDescriptionOutput;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

public class RetrieveJobDescriptionServlet extends WICIServlet {
	private static final long serialVersionUID = 1L;
	
	static Logger log = Logger
			.getLogger(RetrieveJobDescriptionServlet.class.getName());

	public RetrieveJobDescriptionServlet() {

	}

	protected void handleRequest(WICIServletMediator requestMediator)
			throws ServletException, IOException {
		String sMethod = this.getClass().getName() + "[doPost] ";
		log.info(sMethod);
        retriveJobDescriptionFromDSS(requestMediator);
	}

	private void retriveJobDescriptionFromDSS(WICIServletMediator requestMediator) {
		String sMethod = this.getClass().getName() + "[retriveJobDescriptionFromDSS] ";
		log.info(sMethod);
		
		WICIResponse tableResponse = new WICIResponse();
		JobDescriptionOutput dssjobDescriptionResponse = new JobDescriptionOutput();
		try {
			WICIConfiguration conf = new WICIConfigurationFactory().createDASSEndPointConfiguration();
			if(conf.getDssserviceEnv().equalsIgnoreCase("DSSDEV")){
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
		log.info(sMethod + " the formated response to wici  "+tableResponse);
		requestMediator.processHttpResponse(tableResponse);
	}

	
	private JobDescriptionOutput retriveJobDescriptionHttpsClientCall(){
		 CloseableHttpClient httpClient= null;
		 String  responseContent = null;
		 JobDescriptionOutput jobDescriptionResponse = new JobDescriptionOutput();
		 String sMethod = this.getClass().getName() + "[retriveJobDescriptionHttpsClientCall] ";
		 log.info(sMethod);
		 try{
			HttpClientHelper secureClient = new HttpClientHelper();
			httpClient = secureClient.getHttpSecureClient();
			WICIConfiguration conf = new WICIConfigurationFactory().createDASSEndPointConfiguration();
			HttpPost post = new HttpPost(conf.getJobDescEndPoint());
			ObjectMapper mapper = new ObjectMapper();
			JsonWrapper jsonWrapper = new JsonWrapper(mapper);
			post.setHeader("Content-type", "application/json");
			HttpResponse response = httpClient.execute(post);

			int statusCode = response.getStatusLine().getStatusCode();
			
			log.info(sMethod + "retriveJobDescription status code :::: " + statusCode);
			if (statusCode != 200) {
				throw new RuntimeException("Failed with HTTP error code : "
						+ statusCode);
			}
			responseContent = EntityUtils.toString(response.getEntity());
			jobDescriptionResponse = jsonWrapper.deserialize(responseContent,
					JobDescriptionOutput.class);
		        
			log.info(sMethod + "jobDescriptionResponse  from DSS:::: " + jobDescriptionResponse);
		
	} catch (Exception e) {
		e.printStackTrace();
	}
		return jobDescriptionResponse;
	}
	
	
	public  JobDescriptionOutput  retriveJobDescriptionHttpClientCall(){
		 String sMethod = this.getClass().getName()+  "[retriveJobDescriptionHttpClientCall] ";
		 String  responseContent = null;
		 JobDescriptionOutput jobDescriptionResponse = new JobDescriptionOutput();
         HttpClient   httpClient   = HttpClientBuilder.create().build();
		 try{
			 WICIConfiguration conf = new WICIConfigurationFactory().createDASSEndPointConfiguration();
			 HttpPost post = new HttpPost(conf.getJobDescEndPoint());
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	        
	        int statusCode = response.getStatusLine().getStatusCode();
	        log.info(sMethod + "retriveJobDescription status code :::: " + statusCode);
	        if (statusCode != 200) {    
	            throw new RuntimeException("Failed with HTTP error code : " + statusCode);
	        }
	        responseContent = EntityUtils.toString(response.getEntity());
	        
	        jobDescriptionResponse = jsonWrapper.deserialize(responseContent, JobDescriptionOutput.class);
	        
	        if( jobDescriptionResponse != null ){
	        	log.info(sMethod + "jobDescriptionResponse Response "+ jobDescriptionResponse.getJobDescriptionList());
	        }
	        
	     } catch(Exception e){
	    	e.printStackTrace();
	    	log.warning(sMethod + "::Exception::" + e.getMessage());
	    } finally {
	    	httpClient.getConnectionManager().shutdown();
	    }
	    return jobDescriptionResponse;
	}

}