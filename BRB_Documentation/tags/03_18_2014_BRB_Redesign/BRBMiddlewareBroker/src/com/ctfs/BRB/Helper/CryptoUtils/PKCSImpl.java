package com.ctfs.BRB.Helper.CryptoUtils;

import java.security.KeyStore;
import java.security.Provider;
import java.security.Security;

import com.ctfs.BRB.Helper.CryptoUtils.Exceptions.CryptographyException;

public abstract class PKCSImpl
{
	public abstract KeyStore loadKeyStore(String type, String provider, String passPhrase, String argKeyStoreFileName) throws CryptographyException;

	public abstract String getCipherProvider();

	public abstract String getKeystoreName();

	public void showProviders()
	{
		Provider aprovider[] = Security.getProviders();

		System.out.println("The installed providers in order of preference: ");
		for (int i = 0; i < aprovider.length; i++)
		{
			Provider provider = aprovider[i];
			System.out.println((i + 1) + " - " + provider);
		}
	}
}
