package com.ctfs.WICI.Helper;

import java.io.FileInputStream;
import java.io.InputStream;
import java.security.KeyStore;
import java.util.logging.Logger;

import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.TrustManagerFactory;

import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

import com.ctfs.WICI.Servlet.Model.WICIConfiguration;

public class HttpClientHelper {

	static Logger log = Logger.getLogger(HttpClientHelper.class.getName());

	public CloseableHttpClient getHttpSecureClient() {

		CloseableHttpClient httpsClient = null;
		WICIConfiguration conf = new WICIConfigurationFactory()
				.createDASSEndPointConfiguration();

		log.info("HttpClientHelper the JksPath " + CWE117Fix.encodeCRLF(conf.getJksPath())
				+ " getJksPassword  " + CWE117Fix.encodeCRLF(conf.getJksPassword()) + " jks tls "
				+ CWE117Fix.encodeCRLF(conf.getJksTlsVersion()));
		try {
			String jksFileName = conf.getJksPath();
			String jksPassword = conf.getJksPassword();
			InputStream trustStream = new FileInputStream(jksFileName);
			char[] trustPassword = jksPassword.toCharArray();

			KeyStore trustStore = KeyStore.getInstance(KeyStore
					.getDefaultType());
			trustStore.load(trustStream, trustPassword);

			TrustManagerFactory trustFactory = TrustManagerFactory
					.getInstance(TrustManagerFactory.getDefaultAlgorithm());
			trustFactory.init(trustStore);
			TrustManager[] trustManagers = trustFactory.getTrustManagers();

			// Setup SSL context. DSS services accept only TLSv1.2
			String tlsVersion = conf.getJksTlsVersion();
			log.info("HttpClientHelper TLS version for the connection is -> "
					+ CWE117Fix.encodeCRLF(tlsVersion));
			SSLContext sslContext = SSLContext.getInstance(tlsVersion);
			sslContext.init(null, trustManagers, null);
			SSLContext.setDefault(sslContext);

			httpsClient = HttpClients.custom().setSSLContext(sslContext)
					.setSSLHostnameVerifier(new NoopHostnameVerifier()).build();
		} catch (Exception e) {

			e.printStackTrace();

		}

		return httpsClient;

	}

}
