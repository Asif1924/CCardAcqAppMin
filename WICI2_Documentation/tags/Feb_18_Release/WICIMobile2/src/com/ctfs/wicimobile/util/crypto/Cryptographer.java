package com.ctfs.wicimobile.util.crypto;

import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.security.InvalidKeyException;
import java.security.Key;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.cert.Certificate;
import java.util.Enumeration;
import java.util.HashMap;

import javax.crypto.Cipher;
import javax.crypto.NoSuchPaddingException;

import android.content.Context;
import android.content.res.AssetManager;


public class Cryptographer 
{
	private final String CLASS_NAME = this.getClass().getName();
	private final String PACKAGE_NAME = this.getClass().getPackage().getName();
	
	private String keyStoreType = null;
	private String keyStoreFile = null;
	private String keyStorePassPhrase = null;
	private String keyStorePrivateAlias = null;
	private String certificateAlias = null;
	private String cipherProvider = null;
	private String cipherTransform = null;
	
	private KeyStore keyStore = null;
	protected HashMap certificateList = null;
	protected HashMap privateKeyList = null;
	
	protected Context userContext;
	
	public Cryptographer(Context context)
	{
		final String METHOD_NAME = "Cryptographer";
		
		userContext = context;

		keyStoreType = "BKS";
        keyStoreFile = "cer/keystore.bks";  //"C:\\workspaces\\WICI\\keystore.jks";
		keyStorePassPhrase = "wiciepam";
		keyStorePrivateAlias = "wiciprivate";
		certificateAlias = "newpubcer";
		cipherProvider = "SunJCE";
		cipherTransform = "RSA/ECB/PKCS1Padding";
	}
	
	public KeyStore getKeystore()
	{
		return keyStore;
	}
	
	public void loadCertificateList() throws CryptographyException
	{
		final String METHOD_NAME = "loadCertificateList";

		if(keyStore == null)
		{
			loadKeyStore();
		}
		//initialize the certificateList HashMap
		certificateList = new HashMap();
		loadKeyList(certificateList, CryptographerConstants.certificate_label);
	}
	
	public void loadPrivateKeyList() throws CryptographyException
	{
		final String METHOD_NAME = "loadCertificateList";

		if(keyStore == null)
		{
			loadKeyStore();
		}
		//initialize the certificateList HashMap
		privateKeyList = new HashMap();
		loadKeyList(privateKeyList, CryptographerConstants.privateKey_label);
	}
	
	private void loadKeyList(HashMap listToLoad, String typeOfKey) throws CryptographyException
	{
		final String METHOD_NAME = "loadKeyList";
		
		try
		{
			if(typeOfKey.equals(CryptographerConstants.certificate_label))
			{
				Enumeration list = keyStore.aliases();
				while(list.hasMoreElements()) 
				{
					String alias = (String) list.nextElement();
					Certificate c = null;
					if(keyStore.isCertificateEntry(alias))
					{
						c = keyStore.getCertificate(alias);
						if (c == null)
							throw new CryptographyException(CryptographyException.CERTIFICATE_PROBLEM,alias + " certificate missing from keystore");
						System.out.println(PACKAGE_NAME+CLASS_NAME+METHOD_NAME+" Loading signer cert:" + alias);
						certificateList.put(alias,(Certificate)c);
					}
				}
			}
			else if(typeOfKey.equals(CryptographerConstants.privateKey_label))
			{
				Enumeration list = keyStore.aliases();
				while(list.hasMoreElements()) 
				{
					String alias = (String) list.nextElement();
					Key k = null;
					Certificate c = null;
					if (keyStore.isKeyEntry(alias))
					{
						k = keyStore.getKey(alias, keyStorePassPhrase.toCharArray());
						
						if (k instanceof PrivateKey) 
						{ 
							System.out.println(PACKAGE_NAME+CLASS_NAME+METHOD_NAME+" Loading private key:" + alias);
							privateKeyList.put(alias,(PrivateKey)k);
						}
					}
				}
			}
				
				/*if (keyStore.isKeyEntry(alias))
				{
					Key k = keyStore.getKey(alias, keyStorePassPhrase.toCharArray());
					
					if (k instanceof PrivateKey) 
					{
						c = keyStore.getCertificate(alias); 
						if (c == null)
							throw new CryptographyException(CryptographyException.CERTIFICATE_PROBLEM,alias + "certificate missing from keystore");
						System.out.println(PACKAGE_NAME+CLASS_NAME+METHOD_NAME+"Loading private key:" + alias);
						privateKeyList.put(alias,(PrivateKey)k);
					}
					certificateList.put(alias,(Certificate)c);
				}*/
		}
		catch(Throwable t)
		{
			throw new CryptographyException(CryptographyException.UNDEFINED_PROBLEM,t.getMessage());
		}
	}
	
	public Certificate retrieveCertificate(String certificateToRetrieve)
	{
		Certificate result = null;
		
		result = (Certificate) certificateList.get(certificateToRetrieve);
		
		return result;
	}
	
	public PrivateKey retrievePrivateKey(String privateKeyToRetrieve)
	{
		PrivateKey result = null;
		
		result = (PrivateKey) privateKeyList.get(privateKeyToRetrieve);
		
		return result;
	}
	

	public void loadKeyStore() throws CryptographyException
	{
		keyStore = loadKeyStore(this.keyStoreType,this.cipherProvider, this.keyStorePassPhrase, this.keyStoreFile);
	}
	
	public KeyStore loadKeyStore(String type, String provider, String passPhrase, String keyStoreName) throws CryptographyException
	{
		final String METHOD_NAME = "loadKeyStore";
		
		try
		{
		 // Get AssetManager instance
	        AssetManager assetManager = userContext.getAssets();
	        InputStream fileStream = assetManager.open(keyStoreFile);
	        
	        DataInputStream dis = new DataInputStream(fileStream);		    
			
			KeyStore keyStore = KeyStore.getInstance(type);
			char[] val = null;
			if (passPhrase != null && passPhrase.length()>0)
				val = passPhrase.toCharArray();
			keyStore.load(dis, val);
			
			return keyStore;
		}
		/*catch(KeyStoreException ke)
		{
			ke.printStackTrace();
			throw new CryptographyException(CryptographyException.UNDEFINED_PROBLEM, "The keystore could not be loaded due to a undefined problem. See stack trace for more specific info");	
		}*/
		catch(Throwable t)
		{
			t.printStackTrace();
			throw new CryptographyException(CryptographyException.UNDEFINED_PROBLEM, "The keystore could not be loaded due to a undefined problem. See stack trace for more specific info");
		}
	}
	
	public byte[] encrypt(String messageText) throws CryptographyException
	{
		return encrypt(messageText,""); 
	}
	
	public byte[] encrypt(String messageText, String keyToEncryptWith) throws CryptographyException
	{
		final String METHOD_NAME = "encrypt";
		
		byte[] result = null;
		if (keyStore == null)
			loadKeyStore();		
		
		Certificate cert = null;
		if ((cert = (Certificate)certificateList.get(keyToEncryptWith))== null)
			throw new CryptographyException(CryptographyException.KEYNAME_PROBLEM,"Encrypt action cannot be invoked because keyname not found in keystore");
		
		Cipher cipher = null;
		try
		{
			cipher = Cipher.getInstance(cipherTransform);
			cipher.init(Cipher.ENCRYPT_MODE, cert.getPublicKey());
			result = cipher.doFinal(messageText.getBytes());
		}
		catch(NoSuchAlgorithmException e)
		{
			throw new CryptographyException(CryptographyException.ALGORITHM_PROBLEM,"The requested provider does not support the algoritm requested");
		}
		catch(InvalidKeyException e)
		{
			throw new CryptographyException(CryptographyException.KEY_PROBLEM,"The key provided is invalid");
		}
		catch(NoSuchPaddingException e)
		{
			throw new CryptographyException(CryptographyException.ALGORITHM_PROBLEM,"The requested provider does not support the type of cipher padding requested");			
		}
		catch(Throwable t)
		{
			throw new CryptographyException(CryptographyException.UNDEFINED_PROBLEM,t.getMessage());			
		}
		return result;
	}
	
	public String decrypt(byte[] messageToDecrypt, String keyToDecryptWith) throws CryptographyException
	{
		final String METHOD_NAME = "decrypt";
		
		byte[] result = null;
		if (keyStore == null)
			loadKeyStore();		
		
		PrivateKey privateKey = null;
		if ((privateKey = retrievePrivateKey(keyToDecryptWith)) == null)
			throw new CryptographyException(CryptographyException.KEYNAME_PROBLEM,"Encrypt action cannot be invoked because keyname not found in keystore");
		
		Cipher cipher = null;
		try
		{
			cipher = Cipher.getInstance(cipherTransform);
			cipher.init(Cipher.DECRYPT_MODE, privateKey);
			result = cipher.doFinal(messageToDecrypt);
		}
		catch(NoSuchAlgorithmException e)
		{
			throw new CryptographyException(CryptographyException.ALGORITHM_PROBLEM,"The requested provider does not support the algoritm requested");
		}
		catch(InvalidKeyException e)
		{
			throw new CryptographyException(CryptographyException.KEY_PROBLEM,"The key provided is invalid");
		}
		catch(NoSuchPaddingException e)
		{
			throw new CryptographyException(CryptographyException.ALGORITHM_PROBLEM,"The requested provider does not support the type of cipher padding requested");			
		}
		catch(Throwable t)
		{
			throw new CryptographyException(CryptographyException.UNDEFINED_PROBLEM,t.getMessage());			
		}
		return new String(result);
	}
	

	public String getKeyStoreType() 
	{
		return keyStoreType;
	}

	public void setKeyStoreType(String keyStoreType) 
	{
		this.keyStoreType = keyStoreType;
	}

	public String getKeyStoreFile() 
	{
		return keyStoreFile;
	}

	public void setKeyStoreFile(String keyStoreFile) 
	{
		this.keyStoreFile = keyStoreFile;
	}

	public String getKeyStorePassPhrase() 
	{
		return keyStorePassPhrase;
	}

	public void setKeyStorePassPhrase(String keyStorePassPhrase) 
	{
		this.keyStorePassPhrase = keyStorePassPhrase;
	}

	public String getKeyStorePrivateAlias() 
	{
		return keyStorePrivateAlias;
	}

	public void setKeyStorePrivateAlias(String keyStorePrivateAlias) 
	{
		this.keyStorePrivateAlias = keyStorePrivateAlias;
	}

	public String getCertificateAlias() 
	{
		return certificateAlias;
	}

	public void setCertificateAlias(String certificateAlias) 
	{
		this.certificateAlias = certificateAlias;
	}

	public String getCipherProvider() 
	{
		return cipherProvider;
	}

	public void setCipherProvider(String cipherProvider) 
	{
		this.cipherProvider = cipherProvider;
	}

	public String getCipherTransform() 
	{
		return cipherTransform;
	}

	public void setCipherTransform(String cipherTransform) 
	{
		this.cipherTransform = cipherTransform;
	}
	
	public HashMap getCertificateList() {
		return certificateList;
	}

	public HashMap getPrivateKeyList() {
		return privateKeyList;
	}
}
