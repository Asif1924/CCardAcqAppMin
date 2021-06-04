package com.ctfs.WICI.Helper;

import java.util.Map;
import java.util.logging.Logger;

import com.ctc.ctfs.crypto.CryptographyException;

public class WebICCryptoUtil {
	static Logger log = Logger.getLogger(EmailServiceHelper.class.getName());
	private static WebICCryptoUtil _instance = null;
	
	private static String keyStoreType;
	private static String keyStoreFile;
	private static String keyStorePassPhrase;
	private static String keyStorePrivateAlias;
	private static String cipherProvider;
	private static String cipherTransform;
	private static String secretPhrase;
	private static String externalLibraryFileAndSlot;
	private static String WEBIC_CRYPT_SECTION_NAME = "WebICKeyStore";
	private static String WEBIC_CRYPT_KEYSTORE_TYPE = "KeyStoreType";	
	private static String WEBIC_CRYPT_KEYSTORE_FILE = "KeyStoreFile";
	private static String WEBIC_CRYPT_KEYSTORE_PASSPHRASE = "KeyStorePassPhrase";	
	private static String WEBIC_CRYPT_KEYSTORE_PRIVATEALIAS = "KeyStorePrivateAlias";	
	
	private static String WEBIC_CRYPT_KEYSTORE_CIPHERPROVIDER = "CipherProvider";	
	private static String WEBIC_CRYPT_KEYSTORE_CIPHERTRANSFORM = "CipherTransform";	
	private static String WEBIC_CRYPT_KEYSTORE_SECRETPHRASE = "SecretPhrase";	
	private static String WEBIC_CRYPT_KEYSTORE_EXTERNALLIB = "ExternalLibraryFileAndSlot";
	
	private static String WEBIC_DECRYPT_SECTION_NAME = "WebICDecryptKeyStore";
	private static String WEBIC_DECRYPT_KEYSTORE_TYPE = "DecryptKeyStoreType";	
	private static String WEBIC_DECRYPT_KEYSTORE_FILE = "DecryptKeyStoreFile";
	private static String WEBIC_DECRYPT_KEYSTORE_PASSPHRASE = "DecryptKeyStorePassPhrase";	
	private static String WEBIC_DECRYPT_KEYSTORE_PRIVATEALIAS = "DecryptKeyStorePrivateAlias";
	
	private static String WEBIC_DECRYPT_KEYSTORE_CIPHERPROVIDER = "DecryptCipherProvider";	
	private static String WEBIC_DECRYPT_KEYSTORE_CIPHERTRANSFORM = "DeCipherTransform";	
	
	private static String decryptKeyStoreType;
	private static String decryptkeyStoreFile;	
	private static String decryptKeyStorePassPhrase;
	private static String decryptKeyStorePrivateAlias;
	private static String deCipherProvider;
	private static String deCipherTransform;
	
	public WebICCryptoUtil()
	{
		
	}
	
	public static synchronized WebICCryptoUtil getInstance()
	{
		String METHOD_NAME = "getInstance";
		
		if(_instance == null)
		{
			try 
			{
				ApplicationConfiguration.readApplicationConfiguration();
				Map enviroinmentMap = ApplicationConfiguration.getCategoryKeys(WEBIC_CRYPT_SECTION_NAME);
				log.info("Back end pointed to "+ enviroinmentMap.get(WEBIC_CRYPT_KEYSTORE_TYPE));
					
					
				keyStoreType = enviroinmentMap.get(WEBIC_CRYPT_KEYSTORE_TYPE).toString();// getEndpointFromConfigurationFile();
				keyStoreFile = enviroinmentMap.get(WEBIC_CRYPT_KEYSTORE_FILE).toString();
				keyStorePassPhrase = enviroinmentMap.get(WEBIC_CRYPT_KEYSTORE_PASSPHRASE).toString();
				keyStorePrivateAlias = enviroinmentMap.get(WEBIC_CRYPT_KEYSTORE_PRIVATEALIAS).toString();
				
				cipherProvider = enviroinmentMap.get(WEBIC_CRYPT_KEYSTORE_CIPHERPROVIDER).toString();
				cipherTransform = enviroinmentMap.get(WEBIC_CRYPT_KEYSTORE_CIPHERTRANSFORM).toString();
				secretPhrase = enviroinmentMap.get(WEBIC_CRYPT_KEYSTORE_SECRETPHRASE).toString();
				externalLibraryFileAndSlot = enviroinmentMap.get(WEBIC_CRYPT_KEYSTORE_EXTERNALLIB).toString();
				decryptKeyStorePrivateAlias = enviroinmentMap.get(WEBIC_DECRYPT_KEYSTORE_PRIVATEALIAS).toString();
				
				
				/*keyStoreType = ApplicationConfiguration.getCategoryKeyValue(WEBIC_CRYPT_SECTION_NAME, WEBIC_CRYPT_KEYSTORE_TYPE);
				keyStoreFile = ApplicationConfiguration.getCategoryKeyValue(WEBIC_CRYPT_SECTION_NAME, WEBIC_CRYPT_KEYSTORE_FILE);
				keyStorePassPhrase = ApplicationConfiguration.getCategoryKeyValue(WEBIC_CRYPT_SECTION_NAME, WEBIC_CRYPT_KEYSTORE_PASSPHRASE);
				keyStorePrivateAlias = ApplicationConfiguration.getCategoryKeyValue(WEBIC_CRYPT_SECTION_NAME, WEBIC_CRYPT_KEYSTORE_PRIVATEALIAS);
				
				cipherProvider = ApplicationConfiguration.getCategoryKeyValue(WEBIC_CRYPT_SECTION_NAME, WEBIC_CRYPT_KEYSTORE_CIPHERPROVIDER);
				cipherTransform = ApplicationConfiguration.getCategoryKeyValue(WEBIC_CRYPT_SECTION_NAME, WEBIC_CRYPT_KEYSTORE_CIPHERTRANSFORM);
				secretPhrase = ApplicationConfiguration.getCategoryKeyValue(WEBIC_CRYPT_SECTION_NAME, WEBIC_CRYPT_KEYSTORE_SECRETPHRASE);
				externalLibraryFileAndSlot = ApplicationConfiguration.getCategoryKeyValue(WEBIC_CRYPT_SECTION_NAME, WEBIC_CRYPT_KEYSTORE_EXTERNALLIB);
				decryptKeyStorePrivateAlias = ApplicationConfiguration.getCategoryKeyValue(WEBIC_CRYPT_SECTION_NAME, WEBIC_DECRYPT_KEYSTORE_PRIVATEALIAS);*/
				
				/*decryptkeyStoreFile = ConfigurationHelper.getConfigurationValue(WEBIC_DECRYPT_SECTION_NAME, WEBIC_DECRYPT_KEYSTORE_FILE);
				decryptKeyStoreType = ConfigurationHelper.getConfigurationValue(WEBIC_DECRYPT_SECTION_NAME, WEBIC_DECRYPT_KEYSTORE_TYPE);
				decryptKeyStorePassPhrase = ConfigurationHelper.getConfigurationValue(WEBIC_DECRYPT_SECTION_NAME, WEBIC_DECRYPT_KEYSTORE_PASSPHRASE);
				decryptKeyStorePrivateAlias = ConfigurationHelper.getConfigurationValue(WEBIC_DECRYPT_SECTION_NAME, WEBIC_DECRYPT_KEYSTORE_PRIVATEALIAS);
				
				deCipherProvider = ConfigurationHelper.getConfigurationValue(WEBIC_DECRYPT_SECTION_NAME, WEBIC_DECRYPT_KEYSTORE_CIPHERPROVIDER);
				deCipherTransform = ConfigurationHelper.getConfigurationValue(WEBIC_DECRYPT_SECTION_NAME, WEBIC_DECRYPT_KEYSTORE_CIPHERTRANSFORM);*/
				
				log.info("keyStoreType :" +keyStoreType);
				log.info("keyStorePassPhrase :"+keyStorePassPhrase);
				log.info("keyStoreType :"+keyStoreType);
				log.info("keyStorePrivateAlias :"+keyStorePrivateAlias);
				log.info("cipherProvider :"+cipherProvider);
				log.info("cipherTransform :"+cipherTransform);
				log.info("secretPhrase :"+secretPhrase);
				log.info("externalLibraryFileAndSlot :"+externalLibraryFileAndSlot);
			} 
			catch (Exception e) 
			{
				log.info(e.getMessage());
			}
			_instance = new WebICCryptoUtil();
		}
		return _instance;
	}

	public String decodePAN(String pan) throws CryptographyException
	{
		String deCodePAN = null;
		try 
		{
			ApplicationConfiguration.readApplicationConfiguration();
			Map enviroinmentMap = ApplicationConfiguration.getCategoryKeys(WEBIC_CRYPT_SECTION_NAME);
			log.info("Back end pointed to "+ enviroinmentMap.get(WEBIC_CRYPT_KEYSTORE_TYPE));
				
				
			keyStoreType = enviroinmentMap.get(WEBIC_CRYPT_KEYSTORE_TYPE).toString();// getEndpointFromConfigurationFile();
			keyStoreFile = enviroinmentMap.get(WEBIC_CRYPT_KEYSTORE_FILE).toString();
			keyStorePassPhrase = enviroinmentMap.get(WEBIC_CRYPT_KEYSTORE_PASSPHRASE).toString();
			keyStorePrivateAlias = enviroinmentMap.get(WEBIC_CRYPT_KEYSTORE_PRIVATEALIAS).toString();
			
			cipherProvider = enviroinmentMap.get(WEBIC_CRYPT_KEYSTORE_CIPHERPROVIDER).toString();
			cipherTransform = enviroinmentMap.get(WEBIC_CRYPT_KEYSTORE_CIPHERTRANSFORM).toString();
			secretPhrase = enviroinmentMap.get(WEBIC_CRYPT_KEYSTORE_SECRETPHRASE).toString();
			externalLibraryFileAndSlot = enviroinmentMap.get(WEBIC_CRYPT_KEYSTORE_EXTERNALLIB).toString();
			decryptKeyStorePrivateAlias = enviroinmentMap.get(WEBIC_DECRYPT_KEYSTORE_PRIVATEALIAS).toString();
			
			log.info("keyStoreType :" +keyStoreType);
			log.info("keyStorePassPhrase :"+keyStorePassPhrase);
			log.info("keyStoreType :"+keyStoreType);
			log.info("keyStorePrivateAlias :"+keyStorePrivateAlias);
			log.info("cipherProvider :"+cipherProvider);
			log.info("cipherTransform :"+cipherTransform);
			log.info("secretPhrase :"+secretPhrase);
			log.info("externalLibraryFileAndSlot :"+externalLibraryFileAndSlot);
			
			WebICCryptoUtilitySingleton.setKeystoreType(keyStoreType);
			WebICCryptoUtilitySingleton.setKeystoreName(keyStoreFile);
			WebICCryptoUtilitySingleton.setPassPhrase(keyStorePassPhrase);
			WebICCryptoUtilitySingleton.setCipherProvider(cipherProvider);
			WebICCryptoUtilitySingleton.setCipherTransformation(cipherTransform);
			WebICCryptoUtilitySingleton.setExternalLibraryFileandSlot(externalLibraryFileAndSlot);

			WebICCryptoUtilitySingleton cipher = WebICCryptoUtilitySingleton.getInstance();
			
			byte[] dec = cipher.decodeText(pan);
			deCodePAN =  cipher.decrypt(decryptKeyStorePrivateAlias, dec);
			
			return deCodePAN;
	
		} 
		catch (CryptographyException e) 
		{
			e.printStackTrace();
			log.info("Decryption Error "+e.getMessage());
			log.info("Decryption Error Stack "+e.toString());
			log.info("Decryption Error Stack "+e.getLocalizedMessage());
			throw e;
			//log.warning(sMethod+ "error while constructing the dss email request");
			//LogHelper.error(PACKAGE_NAME, CLASS_NAME, "", e
					//.getMessage());
		}
		
		
		//return null;
		
	}
	
	/**
	 * This method returns the decrypted PAN.  
	 * @param pan
	 * @return
	 *//*
	public String decodePAN(String pan)
	{
		String decodePAN = null;
		try 
		{
			System.out.println("decryptKeyStoreType :"+decryptKeyStoreType);
			System.out.println("decryptkeyStoreFile :"+decryptkeyStoreFile);
			System.out.println("decryptKeyStorePassPhrase :"+decryptKeyStorePassPhrase);
			System.out.println("deCipherProvider :"+deCipherProvider);
			System.out.println("deCipherTransform :"+deCipherTransform);
			System.out.println("decryptKeyStorePrivateAlias :"+decryptKeyStorePrivateAlias);
			
			WebICCryptoUtilitySingleton.setKeystoreType(keyStoreType);
			WebICCryptoUtilitySingleton.setKeystoreName(decryptkeyStoreFile);
			WebICCryptoUtilitySingleton.setPassPhrase(keyStorePassPhrase);
			WebICCryptoUtilitySingleton.setCipherProvider(cipherProvider);
			WebICCryptoUtilitySingleton.setCipherTransformation(cipherTransform);
			WebICCryptoUtilitySingleton.setExternalLibraryFileandSlot(externalLibraryFileAndSlot);
			
			WebICCryptoUtilitySingleton.setKeystoreType(decryptKeyStoreType);
			WebICCryptoUtilitySingleton.setKeystoreName(decryptkeyStoreFile);
			WebICCryptoUtilitySingleton.setPassPhrase(decryptKeyStorePassPhrase);
			WebICCryptoUtilitySingleton.setCipherProvider(deCipherProvider);
			WebICCryptoUtilitySingleton.setCipherTransformation(deCipherTransform);
			WebICCryptoUtilitySingleton.setExternalLibraryFileandSlot(externalLibraryFileAndSlot);

			WebICCryptoUtilitySingleton cipher = WebICCryptoUtilitySingleton.getDecryptedInstance();
			
			System.out.println("cipher :"+cipher);
			
			byte[] dec = cipher.decodeText(pan);
			
			decodePAN =  cipher.decrypt(decryptKeyStorePrivateAlias, dec);
			
			
			return decodePAN;
	
		} 
		catch (CryptographyException e) 
		{
			e.printStackTrace();
			// TODO Auto-generated catch block
			LogHelper.error(PACKAGE_NAME, CLASS_NAME, "", e
					.getMessage());
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		
		return null;
		
	}*/
	
	
	/**
	 * @param args
	 */
	public static void main(String[] args) throws Exception  
	{
		/*Log.setLogPropertiesFile("C:/Workspaces/InStoreWorkspace/InStoreCommandInterface/Logging.properties");
		
		try {
			ApplicationConfiguration.initialize("C:/Workspaces/InStoreWorkspace/InStoreCommandInterface/InStoreControllerConfiguration.xml");
		} catch (ConfigurationException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		//Log.readLoggingProperties();		
		ApplicationConfiguration.readApplicationConfiguration();		
		Properties settings = System.getProperties();
		Iterator i = settings.entrySet().iterator();
		while(i.hasNext())
		{
			Map.Entry e = (Map.Entry)i.next();

			System.out.println("Key:" + e.getKey() + " Value:" + e.getValue());
		
		}*/
		//EngageCryptoUtil.getInstance().encodePAN("4111111111111111");
		
				//encrypt("23633");
		
	}

}
