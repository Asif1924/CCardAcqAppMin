package com.ctfs.BRB.Helper.CryptoUtils;

import java.io.DataInputStream;
import java.io.InputStream;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchProviderException;
import com.ctfs.BRB.Helper.CryptoUtils.Exceptions.CryptographyException;
import com.ctfs.BRB.Resources.ResourceHelper;

public class PKCS8CryptoImpl extends PKCSImpl
{

	private String keystoreName = null;
	private String provider = null;

	public KeyStore loadKeyStore(String type, String provider, String passPhrase, String argKeyStoreFileName) throws CryptographyException
	{
		this.provider = provider;
		this.keystoreName = argKeyStoreFileName;

		try
		{
			InputStream keyStoreStream = ResourceHelper.getInstance().getKeystoreStream();

			DataInputStream keystoreDataStream = new DataInputStream(keyStoreStream);

			KeyStore keyStore = KeyStore.getInstance(type, provider);
			char[] val = null;
			if (passPhrase != null && passPhrase.length() > 0)
				val = passPhrase.toCharArray();
			keyStore.load(keystoreDataStream, val);

			return keyStore;
		}
		catch (KeyStoreException ke)
		{
			ke.printStackTrace();
			throw new CryptographyException(CryptographyException.UNDEFINED_PROBLEM, "The keystore could not be loaded due to a undefined problem. See stack trace for more specific info");
		}
		catch (NoSuchProviderException e)
		{
			System.out.println("No such provider");
			e.printStackTrace();
			throw new CryptographyException(CryptographyException.PROVIDER_PROBLEM, "The cipherProvider requested cannot be located or loaded");
		}
		catch (Throwable t)
		{
			t.printStackTrace();
			throw new CryptographyException(CryptographyException.UNDEFINED_PROBLEM, "The keystore could not be loaded due to a undefined problem. See stack trace for more specific info");
		}
	}

	public String getCipherProvider()
	{
		return this.provider;
	}

	public String getKeystoreName()
	{
		return this.keystoreName;
	}

}
