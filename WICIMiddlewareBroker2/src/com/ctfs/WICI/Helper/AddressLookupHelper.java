package com.ctfs.WICI.Helper;

import java.io.FileInputStream;
import java.io.InputStream;
import java.security.KeyStore;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;


import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.TrustManagerFactory;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;


import com.ctc.ctfs.channel.webicaddressverification.WebICAddressLookupRequest;
import com.ctc.ctfs.channel.webicaddressverification.WebICAddressLookupResponse;
import com.ctfs.WICI.Model.WICIDSSAddressInput;
import com.ctfs.WICI.Model.WICIDSSAddressResponse;
import com.ctfs.WICI.Model.WICIDSSInstantIssuanceRequest;
import com.ctfs.WICI.Model.WICIDSSInstantIssuanceResponse;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
import com.ctfs.WICI.Servlet.Model.WICIResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.DomDriver;


public class AddressLookupHelper
{
	static Logger log = Logger.getLogger(AddressLookupHelper.class.getName());

	public String addressLookupSerialize(Object obj) throws Exception
	{
		String sMethod = this.getClass().getName() + "[addressLookupSerialize] ";
		log.info(sMethod);

		String addressLookupReturnValue = "";
		com.thoughtworks.xstream.XStream addressLookupParser = new com.thoughtworks.xstream.XStream();
		Map addressLookupList = new HashMap();

		addressLookupList.put("WebICAddressLookupRequest", WebICAddressLookupRequest.class);

		Iterator addressLookupPairs = addressLookupList.entrySet().iterator();

		while (addressLookupPairs.hasNext())
		{
			Map.Entry entry = (Map.Entry) addressLookupPairs.next();
			addressLookupParser.alias((String) entry.getKey(), (Class) entry.getValue());
		}
		addressLookupReturnValue = addressLookupParser.toXML(obj);

		log.log(Level.FINE, "---AddressLookup Request XML:\n" + CWE117Fix.encodeCRLF(addressLookupReturnValue));

		return addressLookupReturnValue;
	}

	public WebICAddressLookupResponse deserializeXMLToWebICAddressLookupResponseObject(String argXMLString)
	{
		
		log.log(Level.FINE, "---argXMLString = " + CWE117Fix.encodeCRLF(argXMLString != null ? argXMLString : null ));

		WebICAddressLookupResponse deserializedAddressLookupResponseObject = new WebICAddressLookupResponse();
		XStream xstream = new XStream(new DomDriver());

		xstream.alias("WebICAddressLookupResponse", WebICAddressLookupResponse.class);
		xstream.addImplicitCollection(WebICAddressLookupResponse.class, "standardAddressLine1", "standardAddressLine1", String.class);
		xstream.addImplicitCollection(WebICAddressLookupResponse.class, "standardAddressLine2", "standardAddressLine2", String.class);

		deserializedAddressLookupResponseObject = (WebICAddressLookupResponse) xstream.fromXML(argXMLString);
		return deserializedAddressLookupResponseObject;
	}
	
	
	public  WICIDSSAddressResponse  retriveAddress(WICIDSSAddressInput dssInput) throws Exception{
		 
		 WICIDSSAddressResponse dssAddressResponse = new WICIDSSAddressResponse();
	    WICIConfiguration conf = new WICIConfigurationFactory().createDASSEndPointConfiguration();
	     
	    log.info("[retriveAddress] the dss inputRequest    :::" + CWE117Fix.encodeCRLF(dssInput != null ? dssInput.toString() : null )); 
	    log.info("[retriveAddress]  the JksPath "+CWE117Fix.encodeCRLF(conf.getJksPath() != null ? conf.getJksPath(): null ) +  " getJksPassword  "+ CWE117Fix.encodeCRLF(conf.getJksPassword() != null ? conf.getJksPassword() : null)  +" jks tls "+ CWE117Fix.encodeCRLF(conf.getJksTlsVersion() != null ? conf.getJksTlsVersion() : null));
		   
	     
         String jksFileName = conf.getJksPath();
         String jksPassword = conf.getJksPassword();
         InputStream trustStream = new FileInputStream(jksFileName);
         char[] trustPassword = jksPassword.toCharArray();
         
         KeyStore trustStore = KeyStore.getInstance(KeyStore.getDefaultType());
         trustStore.load(trustStream, trustPassword);
         
         TrustManagerFactory trustFactory = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());
         trustFactory.init(trustStore);
         TrustManager[] trustManagers = trustFactory.getTrustManagers();
         
         //Setup SSL context. DSS services accept only TLSv1.2
         String tlsVersion = conf.getJksTlsVersion();
         log.info("TLS version for the connection is -> "+CWE117Fix.encodeCRLF(tlsVersion != null ? tlsVersion: null));
         SSLContext sslContext = SSLContext.getInstance(tlsVersion);
         sslContext.init(null, trustManagers, null);
         SSLContext.setDefault(sslContext);

		 CloseableHttpClient    httpClient = HttpClients.custom().setSSLContext(sslContext)
            .setSSLHostnameVerifier(new NoopHostnameVerifier())
            .build();
				
		
		 try{
			 
		     String responseContent = null;
			 
			 String postUrl = conf.getDssEndPoint();
			 
			 			 
			 log.info(" The DSS endPoint  ==="+ CWE117Fix.encodeCRLF(postUrl != null ? postUrl : null));
			 
	    	HttpPost     post  = new HttpPost(postUrl);
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	String jsonInput = mapper.writeValueAsString(dssInput);
	    	
	    	post.setEntity(new StringEntity(jsonInput));
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	        
	        int statusCode = response.getStatusLine().getStatusCode();
	        if (statusCode != 200) 
	        {    
	            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        }
	        responseContent = EntityUtils.toString(response.getEntity());
	        
	        dssAddressResponse = jsonWrapper.deserialize(responseContent,
	        		WICIDSSAddressResponse.class);
	        
	        if( dssAddressResponse != null ){
	        	log.info("dssAddressResponse "+ CWE117Fix.encodeCRLF(dssAddressResponse != null ? dssAddressResponse.toString() : null));
	        	
	        }
	        
	     }catch(Exception e){
	    	
	      log.warning("::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
	    	
	    }
	    finally
	    {
	    httpClient.close();
	    }
	    return dssAddressResponse;
		 
	 }
	
	
	public  WICIDSSAddressResponse  retriveAddressHttpClient(WICIDSSAddressInput dssInput, String endPoint) throws Exception{
		 
		 WICIDSSAddressResponse dssAddressResp = new WICIDSSAddressResponse();
	     String responseContent = null;
	     
	     HttpClient   httpClient   = HttpClientBuilder.create().build();
	     
		 try{
			 
	    	HttpPost     post  = new HttpPost(endPoint);
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	String jsonInput = mapper.writeValueAsString(dssInput);
	    	
	    	log.info(" [retriveAddressHttpClient]  The DSS Address Input  "  + CWE117Fix.encodeCRLF(jsonInput != null ?  jsonInput : null));
	    	
	    	
	    	post.setEntity(new StringEntity(jsonInput));
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	        
	        int statusCode = response.getStatusLine().getStatusCode();
	        if (statusCode != 200) 
	        {    
	            throw new RuntimeException("Failed with HTTP error code : " + CWE117Fix.encodeCRLF(String.valueOf(statusCode)));
	        }
	        responseContent = EntityUtils.toString(response.getEntity());
	        
	        dssAddressResp = jsonWrapper.deserialize(responseContent,
	        		WICIDSSAddressResponse.class);
	        
	        if( dssAddressResp != null ){
	        	log.info("dssAddressResponse "+ CWE117Fix.encodeCRLF(dssAddressResp != null ? dssAddressResp.toString() : null));
	        	
	        }
	        
	     }catch(Exception e){
	    	
	      log.warning("[retriveAddressHttpClient] ::Exception::" + CWE117Fix.encodeCRLF(e.getMessage()));
	    	
	    }
	    finally
	    {
	    	
	   	httpClient.getConnectionManager().shutdown();
	    }
	    return dssAddressResp;
		 

		 
	 } 

 	
}