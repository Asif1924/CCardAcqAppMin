package com.ctfs.BRB.Helper.CryptoUtils;

import java.security.InvalidKeyException;
import java.security.Key;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.SignatureException;
import java.security.UnrecoverableKeyException;
import java.security.cert.Certificate;
import java.security.cert.CertificateException;
import java.util.logging.Logger;

import javax.crypto.Cipher;

import org.apache.commons.codec.binary.Base64;

import com.ctfs.BRB.Helper.ApplicationSettingsManager;
import com.ctfs.BRB.Helper.CryptoUtils.Exceptions.CryptographyException;

public class PANCryptoUtil
{

				static 	Logger 			log 						= Logger.getLogger(PANCryptoUtil.class.getName());

	protected static 	String 			keystoreType 				= "JKS";
	protected static 	KeyStore 		keyStore 					= null;
	protected static 	String 			keystoreFilename 			= "keystore.jks";

	protected static 	String 			keyAliasName			 	= "wiciprivate";
	protected static 	String 			certAliasName 				= "newpubcer";
	protected static 	String 			passPhrase 					= "wiciepam";

	protected static 	String 			cipherProvider 				= "IBMJCE";
	protected static 	String 			cipherTransformation		= "RSA/ECB/PKCS1Padding";

	public PANCryptoUtil()
	{
		String sMethod = "[PANCryptoUtil] ";
		log.info(sMethod + "instantiated...");

		PKCSImpl pkcsImpl = new PKCS8CryptoImpl();
		try
		{
			keyStore = pkcsImpl.loadKeyStore(keystoreType, cipherProvider, passPhrase, keystoreFilename);
		}
		catch (CryptographyException e)
		{
			e.printStackTrace();
		}
	}

	public KeyStore getKeyStore()
	{
		return keyStore;
	}

	public Object getKeyByName(String argKeyOrCertName)
	{
		Object returnObject = null;
		try
		{
			if (keyStore.isKeyEntry(argKeyOrCertName))
				returnObject = (Key) keyStore.getKey(argKeyOrCertName, passPhrase.toCharArray());
			if (keyStore.isCertificateEntry(argKeyOrCertName))
				returnObject = (Certificate) keyStore.getCertificate(argKeyOrCertName);
		}
		catch (UnrecoverableKeyException e)
		{
			e.printStackTrace();
		}
		catch (KeyStoreException e)
		{
			e.printStackTrace();
		}
		catch (NoSuchAlgorithmException e)
		{
			e.printStackTrace();
		}
		return returnObject;
	}

	public byte[] encrypt(String argStringToEncrypt)
	{
		byte[] encryptedValue = null;

		Cipher cipher = null;
		Certificate cert = null;

		try
		{
			cert = keyStore.getCertificate(certAliasName);
			cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding", "IBMJCE");
			cipher.init(Cipher.ENCRYPT_MODE, cert.getPublicKey());
			encryptedValue = cipher.doFinal(argStringToEncrypt.getBytes());
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}

		return encryptedValue;
	}

	public String decrypt(byte[] bytesToDecrypt)
	{
		String sMethod = "[decrypt] ";
		log.info(sMethod + "attempting to decrypt: " + new String(bytesToDecrypt));

		byte[] decryptedValue = null;
		Cipher cipher = null;
		PrivateKey privKey = null;

		if (Base64.isBase64(bytesToDecrypt))
			bytesToDecrypt = Base64.decodeBase64(bytesToDecrypt);

		try
		{
			privKey = (PrivateKey) getKeyByName(keyAliasName);
			cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding", "IBMJCE");

			cipher.init(Cipher.DECRYPT_MODE, privKey);
			decryptedValue = cipher.doFinal(bytesToDecrypt);
		}
		catch (Exception e)
		{
			log.info(sMethod + "Exception while decrypting");
			e.printStackTrace();
		}

		return new String(decryptedValue);
	}

	public String getKeyFormatByName(String argKeyOrCertAlias)
	{
		String returnFormat = "";
		Object something = getKeyByName(argKeyOrCertAlias);

		if (something instanceof Key)
			returnFormat = ((Key) something).getFormat();

		return returnFormat;
	}

	public boolean certificateIsVerified(PublicKey argPublicKey)
	{
		Object something = getKeyByName(certAliasName);
		boolean returnValue = false;
		if (something instanceof Certificate)
		{
			try
			{
				((Certificate) something).verify(argPublicKey);
				returnValue = true;
			}
			catch (InvalidKeyException e)
			{
				e.printStackTrace();
			}
			catch (CertificateException e)
			{
				e.printStackTrace();
			}
			catch (NoSuchAlgorithmException e)
			{
				e.printStackTrace();
			}
			catch (NoSuchProviderException e)
			{
				e.printStackTrace();
			}
			catch (SignatureException e)
			{
				e.printStackTrace();
			}
		}

		return returnValue;
	}

}
