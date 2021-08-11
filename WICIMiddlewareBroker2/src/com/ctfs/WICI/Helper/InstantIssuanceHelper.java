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
import org.apache.http.util.EntityUtils;

import com.ctfs.WICI.Model.WICIDSSInstantIssuanceRequest;
import com.ctfs.WICI.Model.WICIDSSInstantIssuanceResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

public class InstantIssuanceHelper {
	static Logger log = Logger.getLogger(InstantIssuanceHelper.class.getName());
			  
	//private static final String jwt_key = "wynGi/9ZhYKV6Fs+hU7H7sf10y604BFDaMFlguVQc4Y=";

	
	public  WICIDSSInstantIssuanceResponse  instantIssuanceHttpClient(WICIDSSInstantIssuanceRequest dssInput,String endPoint, String jwtToken) throws Exception{
		 
		 String sMethod = this.getClass().getName() + "[instantIssuanceHttpClient] ";
	     WICIDSSInstantIssuanceResponse dssInstantIssuanceResponse = new WICIDSSInstantIssuanceResponse();
	     String responseContent = null;
	     
	     // point to dev 
	     HttpClient   httpClient   = HttpClientBuilder.create().build();
	     
		 try{
			 			 
			 String autherization = constructAuthHeader(dssInput.getTabSerialID(),jwtToken);
			
			log.info(sMethod + " The BROKER TOKEN   ===  "+ autherization );
			
			
			// point to dev
			// String       postUrl   = "http://d9cbwpdssa01:8765/wici/v1/wiciInstantIssuance/";
			
			 
	    	HttpPost     post  = new HttpPost(endPoint);
	    	post.addHeader("Authorization", "Bearer "+ autherization);
	    	
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	String jsonInput = mapper.writeValueAsString(dssInput);
	    	
	    	log.info(sMethod + " The DSS InstantIssuance Input  "  +jsonInput);
	    	
	    	
	    	post.setEntity(new StringEntity(jsonInput));
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	        
	        int statusCode = response.getStatusLine().getStatusCode();
	        if (statusCode != 200) 
	        {    
	            throw new RuntimeException("Failed with HTTP error code : " + statusCode);
	        }
	        responseContent = EntityUtils.toString(response.getEntity());
	        
	        dssInstantIssuanceResponse = jsonWrapper.deserialize(responseContent,
	        		WICIDSSInstantIssuanceResponse.class);
	        
	        if( dssInstantIssuanceResponse != null ){
	        	log.info(sMethod + "dssInstantIssuanceResponse "+ dssInstantIssuanceResponse);
	        	
	        }
	        
	     }catch(Exception e){
	    	
	      log.warning(sMethod + "::Exception::" + e.getMessage());
	    	
	    }
	    finally
	    {
	    	
	   	httpClient.getConnectionManager().shutdown();
	    }
	    return dssInstantIssuanceResponse;
		 

		 
	 }

	
	public  WICIDSSInstantIssuanceResponse  instantIssuanceSecureClient(WICIDSSInstantIssuanceRequest dssInput,String endPoint, String jwtToken) throws Exception{
		 
	     String sMethod = this.getClass().getName() + "[instantIssuanceSecureClient] ";
	     CloseableHttpClient httpClient = null;
	     WICIDSSInstantIssuanceResponse instantIssuanceResponse = new WICIDSSInstantIssuanceResponse();
	     HttpClientHelper httpsecureClient = new HttpClientHelper();	
	     httpClient = httpsecureClient.getHttpSecureClient();
	     String responseContent = null;
	     
	     log.info(sMethod + " Configuration Properties  endPoint ==="+ endPoint  +  " JWT token "+ jwtToken);
	     
		 try{
			 			 
			 String autherization = constructAuthHeader(dssInput.getTabSerialID(), jwtToken);
			
			log.info(sMethod + " The BROKER TOKEN   ===  "+ autherization );
			
	    	HttpPost     post  = new HttpPost(endPoint);
	    	post.addHeader("Authorization", "Bearer "+ autherization);
	    	
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	String jsonInput = mapper.writeValueAsString(dssInput);
	    	
	    	log.info(sMethod + "InstantIsuance Request    " +jsonInput);
	    	
	    	
	    	post.setEntity(new StringEntity(jsonInput));
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	        
	        int statusCode = response.getStatusLine().getStatusCode();
	        if (statusCode != 200) 
	        {    
	            throw new RuntimeException("Failed with HTTP error code : " + statusCode);
	        }
	        responseContent = EntityUtils.toString(response.getEntity());
	        
	        instantIssuanceResponse = jsonWrapper.deserialize(responseContent,
	        		WICIDSSInstantIssuanceResponse.class);
	        
	        if( instantIssuanceResponse != null ){
	        	log.info(sMethod + "dssInstantIsuuance Response "+instantIssuanceResponse);
	        	
	        }
	        
	     }catch(Exception e){
	    	
	      log.warning(sMethod + "::Exception::" + e.getMessage());
	    	
	    }
	    finally
	    {
	   httpClient.close();
	    	
	    }
	    return instantIssuanceResponse;
		 
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

	
	public void validateEnstreamRequest(WICIDSSInstantIssuanceRequest instantIssuanceRequest) {
		 String sMethod = this.getClass().getName() + "[validateEnstreamRequest] ";
		 
		 log.info(sMethod + " EnstreamRequest ::;"+instantIssuanceRequest);
		 
		 if (instantIssuanceRequest.getExternalReferenceId() == null || instantIssuanceRequest.getExternalReferenceId().isEmpty())
			{
				throw new IllegalArgumentException("Invalid 'ExternalReferenceId' argument!");
			}
		 
		 if (instantIssuanceRequest.getAdmAppId() == null || instantIssuanceRequest.getAdmAppId().isEmpty())
			{
				throw new IllegalArgumentException("Invalid 'admAppId' argument!");
			}
		 if (instantIssuanceRequest.getPan() == null || instantIssuanceRequest.getPan().isEmpty())
			{
				throw new IllegalArgumentException("Invalid 'Pan' argument!");
			}
		 if (instantIssuanceRequest.getFirstName() == null || instantIssuanceRequest.getFirstName().isEmpty())
			{
				throw new IllegalArgumentException("Invalid 'firstName' argument!");
			}
		 if (instantIssuanceRequest.getLastName() == null || instantIssuanceRequest.getLastName().isEmpty())
			{
				throw new IllegalArgumentException("Invalid 'lastName' argument!");
			}
		 if (instantIssuanceRequest.getAddressline1() == null || instantIssuanceRequest.getAddressline1().isEmpty())
			{
				throw new IllegalArgumentException("Invalid 'addressline1' argument!");
			}
		 if (instantIssuanceRequest.getCurrentCity() == null || instantIssuanceRequest.getCurrentCity().isEmpty())
			{
				throw new IllegalArgumentException("Invalid 'currentCity' argument!");
			}
		 if (instantIssuanceRequest.getCurrentProvince() == null || instantIssuanceRequest.getCurrentProvince().isEmpty())
			{
				throw new IllegalArgumentException("Invalid 'currentProvince' argument!");
			}
		 if (instantIssuanceRequest.getCurrentPostalCode() == null || instantIssuanceRequest.getCurrentPostalCode().isEmpty())
			{
				throw new IllegalArgumentException("Invalid 'currentPostalCode' argument!");
			}
		 if (instantIssuanceRequest.getCurrentCountry() == null || instantIssuanceRequest.getCurrentCountry().isEmpty())
			{
				throw new IllegalArgumentException("Invalid 'currentCountry' argument!");
			}
		 if (instantIssuanceRequest.getPreferedLanguage() == null || instantIssuanceRequest.getPreferedLanguage().isEmpty())
			{
				throw new IllegalArgumentException("Invalid 'preferedLanguage' argument!");
			}
		 if (instantIssuanceRequest.getEnstreamConsent() == null || instantIssuanceRequest.getEnstreamConsent().isEmpty())
			{
				throw new IllegalArgumentException("Invalid 'enstreamConsent' argument!");
			}
		 
		 if (instantIssuanceRequest.getMsisdn() == null || instantIssuanceRequest.getMsisdn().isEmpty())
			{
				throw new IllegalArgumentException("Invalid 'msisdn' argument!");
			}
		 
		 if (instantIssuanceRequest.getDeviceType() == null || instantIssuanceRequest.getDeviceType().isEmpty())
			{
				throw new IllegalArgumentException("Invalid 'deviceType' argument!");
			}
		 if (instantIssuanceRequest.getTransactionState() == null || instantIssuanceRequest.getTransactionState().isEmpty())
			{
				throw new IllegalArgumentException("Invalid 'transactionState' argument!");
			} 
		 if (instantIssuanceRequest.getTabSerialID() == null || instantIssuanceRequest.getTabSerialID().isEmpty())
			{
				throw new IllegalArgumentException("Invalid 'TabSerialID' argument!");
			}
		 
		
	}
	
	
	

}