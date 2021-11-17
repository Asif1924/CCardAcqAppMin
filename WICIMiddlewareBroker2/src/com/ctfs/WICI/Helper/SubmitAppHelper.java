package com.ctfs.WICI.Helper;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.logging.Logger;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.fasterxml.jackson.databind.ObjectMapper;

public class SubmitAppHelper {
	
	static Logger log = Logger.getLogger(SubmitAppHelper.class.getName());
			  
	//private static final String jwt_key = "wynGi/9ZhYKV6Fs+hU7H7sf10y604BFDaMFlguVQc4Y=";

	
	public  void SubmitAPPHttpClient(AccountApplicationRequestType dssRequest, String endPoint, String jwtToken) throws Exception {
		 
		 String sMethod = this.getClass().getName() + "[SubmitAPPHttpClient] ";
		 HttpClient   httpClient   = HttpClientBuilder.create().build();
	     
		 try{
			 	
			 log.info(sMethod + " submitApp Request  ===    "+ dssRequest  );
		   String autherization = constructAuthHeader(dssRequest.getTabSerialId(), jwtToken);
		   
		    log.info(sMethod + " jwtToken  ===    "+ jwtToken  );
	    	HttpPost     post  = new HttpPost(endPoint);
	    	
	    	post.addHeader("Authorization", "Bearer "+ autherization);
	    	ObjectMapper  mapper = new ObjectMapper();
	    	String jsonInput = mapper.writeValueAsString(dssRequest);
	    	log.info(sMethod + " The DSSSubmitAPP Input  "  +jsonInput);
	    	
	    	post.setEntity(new StringEntity(jsonInput));
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	        
	        int statusCode = response.getStatusLine().getStatusCode();
	        if (statusCode != 200) 
	        {    
	            throw new RuntimeException("Failed with HTTP error code : " + statusCode);
	        }
	        log.info(sMethod + " The Status code  "  +statusCode);
	     }catch(Exception e){
	    	 
	      e.printStackTrace();
	      log.warning(sMethod + "::Exception::" + e.getMessage());
	    	
	    }
	    finally
	    {
	    	
	   	httpClient.getConnectionManager().shutdown();
	    }

		 
	 }

	
	public  void  submitAPPSecureClient(AccountApplicationRequestType dssInput,String endPoint, String jwtToken) throws Exception{
	   
		
		 String sMethod = this.getClass().getName() + "[submitAPPSecureClient] ";
	     CloseableHttpClient httpClient = null;
	     HttpClientHelper httpsecureClient = new HttpClientHelper();	
	     httpClient = httpsecureClient.getHttpSecureClient();
	     String autherization = constructAuthHeader(dssInput.getTabSerialId(), jwtToken);
	     log.info(sMethod + " Configuration Properties  endPoint ==="+ endPoint  );
	     
		 try{
			 			 
	    	HttpPost     post  = new HttpPost(endPoint);
	    	post.setHeader("Content-type", "application/json");
	    	ObjectMapper  mapper = new ObjectMapper();
	    	String jsonInput = mapper.writeValueAsString(dssInput);
	    	
	    	log.info(sMethod + "submitAPP  Request    " +jsonInput);
	    	
	    	post.addHeader("Authorization", "Bearer "+ autherization);
	    	post.setEntity(new StringEntity(jsonInput));
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	        
	        int statusCode = response.getStatusLine().getStatusCode();
	        if (statusCode != 200) 
	        {    
	            throw new RuntimeException("Failed with HTTP error code : " + statusCode);
	        }
	        
	     }catch(Exception e){
	    	
	      log.warning(sMethod + "::Exception::" + e.getMessage());
	    	
	    }
	    finally
	    {
	   httpClient.close();
	    	
	    }
		 
	 }
	
	private String constructAuthHeader(String tabSerailId, String jwtToken) {
		
		 String sMethod = this.getClass().getName() + "[constructAuthHeader] ";
		
		// The JWT signature algorithm we will be using to sign the token
		final SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
		
		log.info(sMethod + "tabSerailID Request    " +tabSerailId    +"  jwt token  "  +jwtToken);

		
		//set the duration that the jwt is valid
	    long now = System.currentTimeMillis();
       long exp = now + (5 *  60 * 1000);
       
       final Map<String, Object> claims = new HashMap<String, Object>();
       claims.put("jti", UUID.randomUUID().toString()); 
       claims.put("iss", "Canadian Tire Financial Services");
       
       JwtBuilder builder = Jwts.builder()
               .setId(UUID.randomUUID().toString())
               .setClaims(claims)
               .setIssuedAt(new Date(now))
               .setAudience(tabSerailId)
               .setExpiration(new Date(exp))
               .setSubject("WICI-claim")
               .signWith(signatureAlgorithm, jwtToken);
      
       return builder.compact();
       
		}
	
}
