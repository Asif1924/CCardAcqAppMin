package com.ctfs.BRB.Resources;

import java.io.InputStream;
import java.util.logging.Logger;

import com.ctfs.BRB.Helper.ApplicationSettingsManager;

public class ResourceHelper
{
	static Logger log = Logger.getLogger(ResourceHelper.class.getName());
	private static volatile ResourceHelper instance = null;
	private static final String ValidationAccountApplication = "Validation_AccountApplication.xsd";
	private static final String ValidationWebICIdentityExamination = "Validation_WebICIdentityExamination.xsd";
	private static final String BRBPersistServiceXsd = "Validation_brbPersistEcommNotifyData.xsd";

	private ResourceHelper()
	{
	}

	public static ResourceHelper getInstance()
	{
		if (instance == null)
		{
			synchronized (ResourceHelper.class)
			{
				if (instance == null)
				{
					instance = new ResourceHelper();
				}
			}
		}
		return instance;
	}

	public InputStream getKeystoreStream()
	{
		String sMethod = "[getKeystoreStream] ";
		log.info(sMethod + "called...");

		String decryptionKeyStorefileName = ApplicationSettingsManager.getInstance().getDecryptionKeyStoreFileName();

		return ResourceHelper.class.getResourceAsStream(decryptionKeyStorefileName);
	}

	public String getKeystorePath()
	{
		String sMethod = "[getKeystorePath] ";
		log.info(sMethod + "called...");

		String decryptionKeyStorefileName = ApplicationSettingsManager.getInstance().getDecryptionKeyStoreFileName();

		return ResourceHelper.class.getResource(decryptionKeyStorefileName).getPath();
	}

	public String getValidationAccountApplicationPath()
	{
		String sMethod = "[getValidationAccountApplicationPath] ";
		log.info(sMethod + "called...");

		return ResourceHelper.class.getResource(ValidationAccountApplication).getPath();
	}

	public String getValidationWebICIdentityExaminationPath()
	{
		String sMethod = "[getValidationWebICIdentityExaminationPath] ";
		log.info(sMethod + "called...");

		return ResourceHelper.class.getResource(ValidationWebICIdentityExamination).getPath();
	}

	public String getPersistServicePath()
	{
		String sMethod = "[getPersistServiceXsd] ";
		log.info(sMethod + "called...");

		return ResourceHelper.class.getResource(BRBPersistServiceXsd).getPath();
	}

	public String getResourcePath(String resourceName)
	{
		String sMethod = "[getResourcePath] ";
		log.info(sMethod + " resourceName: " + resourceName + " called...");

		return ResourceHelper.class.getResource(resourceName).getPath();
	}

	public InputStream loadResourceAsStream(String resourceName)
	{
		String sMethod = "[loadResourceAsStream] ";
		log.info(sMethod + "called...");

		return ResourceHelper.class.getResourceAsStream(resourceName);
	}
}
