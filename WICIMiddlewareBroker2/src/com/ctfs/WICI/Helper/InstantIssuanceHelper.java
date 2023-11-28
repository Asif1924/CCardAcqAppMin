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

	
	public  WICIDSSInstantIssuanceResponse  instantIssuanceHttpClient(WICIDSSInstantIssuanceRequest dssInput, String endPoint, String jwtToken) throws Exception{
		 
	     WICIDSSInstantIssuanceResponse dssInstantIssuanceResponse = new WICIDSSInstantIssuanceResponse();
	     String responseContent = null;
	     
	     // point to dev 
	     HttpClient   httpClient   = HttpClientBuilder.create().build();
	     
		 try{
			 			 
			 String autherization = constructAuthHeader(dssInput.getTabSerialID(),jwtToken);
			
			log.info("[instantIssuanceHttpClient] The BROKER TOKEN   ===  "+ CWE117Fix.encodeCRLF(autherization));
			
			
			// point to dev
			// String       postUrl   = "http://d9cbwpdssa01:8765/wici/v1/wiciInstantIssuance/";
			
			 
	    	HttpPost     post  = new HttpPost(endPoint);
	    	post.addHeader("Authorization", "Bearer "+ autherization);
	    	
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	String jsonInput = mapper.writeValueAsString(dssInput);
	    	
	    	log.info("[instantIssuanceHttpClient] The DSS InstantIssuance Input  "  +CWE117Fix.encodeCRLF(jsonInput));
	    	
	    	
	    	post.setEntity(new StringEntity(jsonInput));
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	        
	        int statusCode = response.getStatusLine().getStatusCode();
	        if (statusCode != 200) 
	        {    
	            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        }
	        responseContent = EntityUtils.toString(response.getEntity());
	        
	        dssInstantIssuanceResponse = jsonWrapper.deserialize(responseContent,
	        		WICIDSSInstantIssuanceResponse.class);
	        
	        if( dssInstantIssuanceResponse != null ){
	        	log.info("[instantIssuanceHttpClient]dssInstantIssuanceResponse "+ CWE117Fix.encodeCRLF(dssInstantIssuanceResponse.toString()));
	        	
	        }
	        
	     }catch(Exception e){
	    	
	      log.warning("[instantIssuanceHttpClient]::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
	    	
	    }
	    finally
	    {
	    	
	   	httpClient.getConnectionManager().shutdown();
	    }
	    return dssInstantIssuanceResponse;
		 

		 
	 }

	
	public  WICIDSSInstantIssuanceResponse  instantIssuanceSecureClient(WICIDSSInstantIssuanceRequest dssInput, String endPoint, String jwtToken) throws Exception{
		 
	     CloseableHttpClient httpClient = null;
	     WICIDSSInstantIssuanceResponse instantIssuanceResponse = new WICIDSSInstantIssuanceResponse();
	     HttpClientHelper httpsecureClient = new HttpClientHelper();	
	     httpClient = httpsecureClient.getHttpSecureClient();
	     String responseContent = null;
	     
	     log.info("[instantIssuanceSecureClient] Configuration Properties  endPoint ==="+ CWE117Fix.encodeCRLF(endPoint)  +  " JWT token "+ CWE117Fix.encodeCRLF(jwtToken));
	     
		 try{
			 			 
			 String autherization = constructAuthHeader(dssInput.getTabSerialID(), jwtToken);
			
			log.info("instantIssuanceSecureClient The BROKER TOKEN   ===  "+  CWE117Fix.encodeCRLF(autherization ));
			
	    	HttpPost     post  = new HttpPost(endPoint);
	    	post.addHeader("Authorization", "Bearer "+  CWE117Fix.encodeCRLF(autherization));
	    	
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	String jsonInput = mapper.writeValueAsString(dssInput);
	    	
	    	log.info("instantIssuanceSecureClient InstantIsuance Request    " + CWE117Fix.encodeCRLF(jsonInput));
	    	
	    	
	    	post.setEntity(new StringEntity(jsonInput));
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	        
	        int statusCode = response.getStatusLine().getStatusCode();
	        if (statusCode != 200) 
	        {    
	            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        }
	        responseContent = EntityUtils.toString(response.getEntity());
	        
	        instantIssuanceResponse = jsonWrapper.deserialize(responseContent,
	        		WICIDSSInstantIssuanceResponse.class);
	        
	        if( instantIssuanceResponse != null ){
	        	log.info("instantIssuanceSecureClient dssInstantIsuuance Response "+CWE117Fix.encodeCRLF(instantIssuanceResponse.toString()));
	        	
	        }
	        
	     }catch(Exception e){
	    	
	      log.warning("instantIssuanceSecureClient ::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
	    	
	    }
	    finally
	    {
	   httpClient.close();
	    	
	    }
	    return instantIssuanceResponse;
		 
	 }
	
	
	
	

	
	private String constructAuthHeader(String tabSerailId, String jwtToken) {
		
		
		// The JWT signature algorithm we will be using to sign the token
		final SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
		
		log.info("[constructAuthHeader]  tabSerailID Request    " +CWE117Fix.encodeCRLF(tabSerailId)    +"  jwt token  "  +CWE117Fix.encodeCRLF(jwtToken));

		
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
		
		 
		 log.info("[validateEnstreamRequest] EnstreamRequest ::;"+CWE117Fix.encodeCRLF(instantIssuanceRequest != null ? instantIssuanceRequest.toString(): null));
		 
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
