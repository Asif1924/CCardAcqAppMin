package com.ctfs.WICI.Helper;

import java.security.InvalidKeyException;
import java.security.Key;
import java.security.KeyStore;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.PrivateKey;
import java.security.Provider;
import java.security.PublicKey;
import java.security.Security;
import java.security.cert.Certificate;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.logging.Logger;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

import com.ctc.ctfs.crypto.CryptographyException;
import com.ctc.ctfs.crypto.PKCS11CryptoImpl;
import com.ctc.ctfs.crypto.PKCS8CryptoImpl;
import com.ctc.ctfs.crypto.PKCSImpl;

public class WebICCryptoUtilitySingleton 
{
	public final static String PACKAGE_NAME = "com.ctc.ctfs.crypto";
	public final static String CLASS_NAME = "WebICCryptoUtilitySingleton";
	
	protected static KeyStore keyStore = null;
	protected static String keystoreType = null;
	protected static String keystoreName = null;
	protected static String passPhrase = null;
	protected static String cipherTransformation = "null";
	protected static String cipherProvider = "null";
	protected static PKCSImpl pkcsImpl = null;
	protected static String externalLibraryFileandSlot = null;
	protected static String decryptKeyStoreType=null;
	protected static String decryptKeyStorePassPhrase=null;
	protected static String deCipherProvider=null;
	protected static String decryptkeyStoreFile=null;
	
	protected HashMap certificateList = null;
	protected HashMap privateKeyList = null; 
	
	protected static WebICCryptoUtilitySingleton instance = null;
	static Logger log = Logger.getLogger(WebICCryptoUtilitySingleton.class.getName());
		
	protected WebICCryptoUtilitySingleton() throws CryptographyException
	{
		final String METHOD_NAME = "WebICCryptoUtilitySingleton";
		try
		{
			log.info("WebICCryptoUtilitySingleton()");
			//populate the list of certificates and private keys available within the security world 
			certificateList = new HashMap();
			privateKeyList = new HashMap();
			log.info("WebICCryptoUtilitySingleton() keyStore"+keyStore);
			for (Enumeration list = keyStore.aliases(); list.hasMoreElements();) 
			{
				log.info("WebICCryptoUtilitySingleton() keyStore for"+keyStore);
				String alias = (String) list.nextElement();
				Certificate c = null;
				if (keyStore.isKeyEntry(alias))
				{
					log.info("WebICCryptoUtilitySingleton() keyStore for isKeyEntry"+alias);
					Key k = keyStore.getKey(alias, passPhrase.toCharArray());
					
					if (k instanceof PrivateKey) 
					{
						log.info("WebICCryptoUtilitySingleton() keyStore for PrivateKey"+alias);
						c = keyStore.getCertificate(alias); 
						if (c == null)
							throw new CryptographyException(CryptographyException.CERTIFICATE_PROBLEM,alias + "certificate missing from keystore");
						//LogHelper.debug(PACKAGE_NAME,CLASS_NAME,METHOD_NAME,"Loading private key:" + alias);
						privateKeyList.put(alias,(PrivateKey)k);
					}
					certificateList.put(alias,(Certificate)c);
				}
				else if(keyStore.isCertificateEntry(alias))
				{
					log.info("WebICCryptoUtilitySingleton() keyStore for isCertificateEntry"+alias);
					c = keyStore.getCertificate(alias);
					if (c == null)
						throw new CryptographyException(CryptographyException.CERTIFICATE_PROBLEM,alias + "certificate missing from keystore");
					//LogHelper.debug(PACKAGE_NAME,CLASS_NAME,METHOD_NAME,"Loading signer cert:" + alias);
					certificateList.put(alias,(Certificate)c);
				}
			}
		}
		catch(Throwable t)
		{
			throw new CryptographyException(CryptographyException.UNDEFINED_PROBLEM,t.getMessage());
		}
	}
	
	public static WebICCryptoUtilitySingleton getInstance() throws CryptographyException
	{
		if (instance == null)
		{
			log.info("WebICCryptoUtilitySingleton getInstance");
			synchronized(WebICCryptoUtilitySingleton.class)
			{
				if (instance == null)
				{
	
					if (keystoreType.equalsIgnoreCase("JKS"))
					{
						log.info("WebICCryptoUtilitySingleton JKS");
						pkcsImpl = new PKCS8CryptoImpl();
					}
					else if (getKeystoreType().equalsIgnoreCase("PKCS11IMPLKS"))
					{
						log.info("WebICCryptoUtilitySingleton PKCS11IMPLKS");
						pkcsImpl = new PKCS11CryptoImpl();
					}
					else if (getKeystoreType().equalsIgnoreCase("ncipher.sworld"))
					{
						log.info("WebICCryptoUtilitySingleton ncipher.sworld");
						pkcsImpl = new PKCS11CryptoImpl();
					}
					else
						throw new CryptographyException(CryptographyException.KEYSTORE_PROBLEM,"Unknown keystore type detected");
					log.info("WebICCryptoUtilitySingleton keystoreType"+keystoreType);
					log.info("WebICCryptoUtilitySingleton cipherProvider"+cipherProvider);
					log.info("WebICCryptoUtilitySingleton passPhrase"+passPhrase);
					log.info("WebICCryptoUtilitySingleton keystoreName"+keystoreName);
					log.info("WebICCryptoUtilitySingleton externalLibraryFileandSlot"+externalLibraryFileandSlot);
					
					keyStore = pkcsImpl.loadKeyStore(keystoreType, cipherProvider, passPhrase, keystoreName,externalLibraryFileandSlot);
					instance = new WebICCryptoUtilitySingleton();
				}
			}
		}
		return instance;
	}
	
	public static WebICCryptoUtilitySingleton getDecryptedInstance() throws CryptographyException
	{
		
		if (instance == null)
		{
			synchronized(WebICCryptoUtilitySingleton.class)
			{
				if (instance == null)
				{
	
					if (keystoreType.equalsIgnoreCase("BKS"))
					{
						pkcsImpl = new PKCS8CryptoImpl();
					}
					else
						throw new CryptographyException(CryptographyException.KEYSTORE_PROBLEM,"Unknown keystore type detected");
					
					keyStore = pkcsImpl.loadKeyStore(decryptKeyStoreType, deCipherProvider, decryptKeyStorePassPhrase, decryptkeyStoreFile,externalLibraryFileandSlot);
					instance = new WebICCryptoUtilitySingleton();
				}
			}
		}
		return instance;
	}
	
	public synchronized String decrypt(String keyName, byte[] cipherText) throws CryptographyException
	{	
		final String METHOD_NAME = "decrypt";
		byte[] retVal = null;
		if (keyName == null)
			throw new CryptographyException(CryptographyException.KEYNAME_PROBLEM,"Decrypt action cannot be invoked without providing a private key alias");
	
		PrivateKey pKey = null;
		
		
		Iterator it = privateKeyList.entrySet().iterator();
	    while (it.hasNext()) {
	        Map.Entry pair = (Map.Entry)it.next();
	        //LogHelper.debug(PACKAGE_NAME, CLASS_NAME, METHOD_NAME, pair.getKey() + " = " + pair.getValue());
	    }
		
		
	    //LogHelper.debug(PACKAGE_NAME, CLASS_NAME, METHOD_NAME,"keyName :"+keyName);
		
		if ((pKey = (PrivateKey)privateKeyList.get(keyName))== null)
			throw new CryptographyException(CryptographyException.KEYNAME_PROBLEM,"Decrypt action cannot be invoked because private keyname not found in keystore");
			
		Cipher cipher = null;
		try
		{
			cipher = Cipher.getInstance(getCipherTransformation(), pkcsImpl.getCipherProvider());	
	    
			cipher.init(Cipher.DECRYPT_MODE, pKey);
			retVal = cipher.doFinal(cipherText);
		}
		catch(NoSuchAlgorithmException e)
		{
			throw new CryptographyException(CryptographyException.ALGORITHM_PROBLEM,"The requested provider does not support the type of cipher algorithm requested");						
		}
		catch(NoSuchPaddingException e)
		{
			throw new CryptographyException(CryptographyException.ALGORITHM_PROBLEM,"The requested provider does not support the type of cipher padding requested");			
		}
		catch(NoSuchProviderException e)
		{
			throw new CryptographyException(CryptographyException.PROVIDER_PROBLEM,"The requested provider could not loaded");
		}
		catch(InvalidKeyException e)
		{
			throw new CryptographyException(CryptographyException.KEY_PROBLEM,"The key provided is invalid");
		}
		catch(BadPaddingException e)
		{
			throw new CryptographyException(CryptographyException.ALGORITHM_PROBLEM,"The data encrypted data does not match the block padding specified");
		}
		catch(IllegalBlockSizeException e)
		{
			throw new CryptographyException(CryptographyException.ALGORITHM_PROBLEM,"The length of the data encrypted is incorrect");			
		}
		
		return new String(retVal);
	}
	
	public synchronized byte[] encrypt(String keyName, String messageText) throws CryptographyException
	{
		byte[] retVal = null;
		if (keyName == null)
			throw new CryptographyException(CryptographyException.KEYNAME_PROBLEM,"Encrypt acction cannot be invoked without providing a public key name");
		
		
		Certificate cert = null;
		if ((cert = (Certificate)certificateList.get(keyName))== null)
			throw new CryptographyException(CryptographyException.KEYNAME_PROBLEM,"Encrypt action cannot be invoked because keyname not found in keystore");
		
		Cipher cipher = null;
		try
		{
			cipher = Cipher.getInstance(getCipherTransformation(), pkcsImpl.getCipherProvider());
			cipher.init(Cipher.ENCRYPT_MODE, cert.getPublicKey());			
			retVal = cipher.doFinal(messageText.getBytes());
		}
		catch(NoSuchAlgorithmException e)
		{
			throw new CryptographyException(CryptographyException.ALGORITHM_PROBLEM,"The requested provider does not support the algoritm requested");
		}
		catch(InvalidKeyException e)
		{
			throw new CryptographyException(CryptographyException.KEY_PROBLEM,"The key provided is invalid");
		}
		catch(NoSuchProviderException e)
		{
			throw new CryptographyException(CryptographyException.PROVIDER_PROBLEM,"The requested provider could not loaded");
		}
		catch(NoSuchPaddingException e)
		{
			throw new CryptographyException(CryptographyException.ALGORITHM_PROBLEM,"The requested provider does not support the type of cipher padding requested");			
		}
		catch(Throwable t)
		{
			throw new CryptographyException(CryptographyException.UNDEFINED_PROBLEM,t.getMessage());			
		}
		return retVal;
	}
	
	protected PrivateKey getPrivateKey(String keyName) throws CryptographyException
	{	
		if (keyName == null)
			throw new CryptographyException(CryptographyException.KEYNAME_PROBLEM,"This action cannot be invoked without providing a key name");
		
		PrivateKey pKey = null;
		if ((pKey = (PrivateKey)privateKeyList.get(keyName))== null)
			throw new CryptographyException(CryptographyException.KEYNAME_PROBLEM,"A key with the requested name does not exist within the keystore");
			
		if (pKey instanceof PrivateKey)
			return (PrivateKey)pKey;
		else
			return null;
	}

	protected PublicKey getPublicKey(String keyName) throws CryptographyException
	{	
		if (keyName == null)
			throw new CryptographyException(CryptographyException.KEYNAME_PROBLEM,"This action cannot be invoked without providing a key name");
		
		Certificate cert = null;
		if ((cert = (Certificate)certificateList.get(keyName))== null)
			throw new CryptographyException(CryptographyException.KEYNAME_PROBLEM,"A key with the requested name does not exist within the keystore");
			
		if (cert.getPublicKey() instanceof PublicKey)
			return cert.getPublicKey();
		else
			return null;
	}

		
	public String encodeAsText(byte[] bytes) throws CryptographyException
	{
		try
		{
			BASE64Encoder encoder = new BASE64Encoder();
			return encoder.encode(bytes);
		}
		catch(Exception e)
		{
			throw new CryptographyException(CryptographyException.UNDEFINED_PROBLEM,e.getMessage());
		}
	}
	
	public byte[] decodeText(String  text) throws CryptographyException
	{
		try
		{
			BASE64Decoder decoder = new BASE64Decoder();
			return decoder.decodeBuffer(text);
		}
		catch(Exception e)
		{
			throw new CryptographyException(CryptographyException.UNDEFINED_PROBLEM,e.getMessage());
		}
	}
	
	public void showProviders()
	{
		final String METHOD_NAME = "showProviders";
	
		Provider aprovider[] = Security.getProviders();	        
		//LogHelper.debug(PACKAGE_NAME,CLASS_NAME,METHOD_NAME,"The installed providers in order of preference: ");
	    for(int i = 0; i < aprovider.length; i++)
	    {
	    	Provider provider = aprovider[i];
	    	//LogHelper.debug(PACKAGE_NAME,CLASS_NAME,METHOD_NAME,(i + 1) + " - " + provider);
	    }
    }	
	
	public static String getKeystoreName() {
		return keystoreName;
	}

	public static void setKeystoreName(String keystoreName) {
		WebICCryptoUtilitySingleton.keystoreName = keystoreName;
	}
	
	public static String getPassPhrase() {
		return passPhrase;
	}

	public static void setPassPhrase(String passPhrase) {
		WebICCryptoUtilitySingleton.passPhrase = passPhrase;
	}

	public static String getKeystoreType() {
		return keystoreType;
	}

	public static void setKeystoreType(String keystoreType) {
		WebICCryptoUtilitySingleton.keystoreType = keystoreType;
	}

	public String getCipherTransformation()
	{
		return cipherTransformation;
	}
	
	public static void setCipherTransformation(String transform)
	{
		WebICCryptoUtilitySingleton.cipherTransformation = transform;
	}
	public String getCipherProvider()
	{
		return WebICCryptoUtilitySingleton.cipherProvider;
	}
	public static void setCipherProvider(String provider)
	{
		WebICCryptoUtilitySingleton.cipherProvider = provider;
	}
//	@deprecated//	
	public static String getExternalLibraryFileandSlot() {
		return externalLibraryFileandSlot;
	}
	
//	@deprecated//	
	public static void setExternalLibraryFileandSlot(
			String externalLibraryFileandSlot) {
		WebICCryptoUtilitySingleton.externalLibraryFileandSlot = externalLibraryFileandSlot;
	}
}

