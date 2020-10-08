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
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import com.ctc.ctfs.channel.webicaddressverification.WebICAddressLookupRequest;
import com.ctc.ctfs.channel.webicaddressverification.WebICAddressLookupResponse;
import com.ctfs.WICI.Model.WICIDSSAddressInput;
import com.ctfs.WICI.Model.WICIDSSAddressResponse;
import com.ctfs.WICI.Servlet.Model.WICIConfiguration;
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

		log.log(Level.FINE, "---AddressLookup Request XML:\n" + addressLookupReturnValue);

		return addressLookupReturnValue;
	}

	public WebICAddressLookupResponse deserializeXMLToWebICAddressLookupResponseObject(String argXMLString)
	{
		String sMethod = this.getClass().getName() + "[deserializeXMLToWebICAddressLookupResponseObject] ";
		log.info(sMethod);

		log.log(Level.FINE, "---argXMLString = " + argXMLString);

		WebICAddressLookupResponse deserializedAddressLookupResponseObject = new WebICAddressLookupResponse();
		XStream xstream = new XStream(new DomDriver());

		xstream.alias("WebICAddressLookupResponse", WebICAddressLookupResponse.class);
		xstream.addImplicitCollection(WebICAddressLookupResponse.class, "standardAddressLine1", "standardAddressLine1", String.class);
		xstream.addImplicitCollection(WebICAddressLookupResponse.class, "standardAddressLine2", "standardAddressLine2", String.class);

		deserializedAddressLookupResponseObject = (WebICAddressLookupResponse) xstream.fromXML(argXMLString);
		return deserializedAddressLookupResponseObject;
	}
	
	
	public  WICIDSSAddressResponse  retriveAddress(String streetNumber, String postalCode) throws Exception{
		 
	     String sMethod = this.getClass().getName() + "[retriveAddress] ";
		log.info(sMethod + " the streetNumber "+streetNumber +  " postalCode  "+postalCode );
	 
		 WICIDSSAddressInput input = new WICIDSSAddressInput();
		 input.setStreetNumber(streetNumber);
		 input.setPostalCode(postalCode);
		 
		 WICIDSSAddressResponse dssAddressResponse = new WICIDSSAddressResponse();
	     WICIConfiguration conf = new WICIConfigurationFactory().createDASSEndPointConfiguration();
	     
	     log.info(sMethod + " the streetNumber "+streetNumber +  " postalCode  "+postalCode );
	   
         
	     log.info(sMethod + " the JksPath "+conf.getJksPath() +  " getJksPassword  "+conf.getJksPassword()  +" jks tls "+ conf.getJksTlsVersion());
		   
	     
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
         log.info(sMethod +"TLS version for the connection is -> "+tlsVersion);
         SSLContext sslContext = SSLContext.getInstance(tlsVersion);
         sslContext.init(null, trustManagers, null);
         SSLContext.setDefault(sslContext);

		 CloseableHttpClient    httpClient = HttpClients.custom().setSSLContext(sslContext)
            .setSSLHostnameVerifier(new NoopHostnameVerifier())
            .build();
				
		
		 
		 try{
			 
			 String responseContent = null;
			 
			 String postUrl = conf.getDssEndPoint();
			 
			 log.info(sMethod + " The DSS endPoint  ==="+ postUrl );
			 
	    	HttpPost     post          = new HttpPost(postUrl);
	    	ObjectMapper  mapper = new ObjectMapper();
	    	JsonWrapper jsonWrapper = new JsonWrapper(mapper);
	    	String jsonInput = mapper.writeValueAsString(input);
	    	post.setEntity(new StringEntity(jsonInput));
	    	post.setHeader("Content-type", "application/json");
	    	HttpResponse  response = httpClient.execute(post);
	    	        
	        int statusCode = response.getStatusLine().getStatusCode();
	        if (statusCode != 200) 
	        {
	            throw new RuntimeException("Failed with HTTP error code : " + statusCode);
	        }
	        responseContent = EntityUtils.toString(response.getEntity());
	        
	        System.out.println(responseContent);
	        dssAddressResponse = jsonWrapper.deserialize(responseContent,
	        		WICIDSSAddressResponse.class);
	        
	        if(dssAddressResponse != null){
	        	
	        	log.info(sMethod + "dssAddressResponse "+dssAddressResponse);
	        	
	        }
	        
	     }catch(Exception e){
	    	
	      log.warning(sMethod + "::Exception::" + e.getMessage());
	    	
	    }
	    finally
	    {
	    	httpClient.close();
	    }
	    return dssAddressResponse;
		 
	 }
	 
}