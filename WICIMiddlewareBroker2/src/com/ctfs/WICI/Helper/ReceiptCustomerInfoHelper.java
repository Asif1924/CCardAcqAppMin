package com.ctfs.WICI.Helper;

import java.util.List;
import java.util.logging.Logger;

import org.apache.commons.codec.binary.Base64;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctc.ctfs.channel.accountacquisition.ProvinceType;
import com.ctfs.WICI.Model.ReceiptCustomerInfo;
import com.ctfs.WICI.Servlet.Model.BaseModel;
import com.ctfs.WICI.Servlet.Model.CreditCardApplicationData;
import com.ctfs.WICI.Servlet.Model.NameValue;

public class ReceiptCustomerInfoHelper
{
	static Logger log = Logger.getLogger(ReceiptCustomerInfoHelper.class.getName());

	public ReceiptCustomerInfo getCustomerInformationPortionOfReceipt(String argAccountApplicationRequestXML)
	{
		String sMethod = this.getClass().getName() + "[getCustomerInformationPortionOfReceipt] ";
		log.info(sMethod);

		WICIObjectsHelper objectHelper = new WICIObjectsHelper();
		AccountApplicationRequestType aaRequest = (AccountApplicationRequestType) objectHelper.deserializeXMLToAccountApplicationRequestType(argAccountApplicationRequestXML);
		ReceiptCustomerInfo populatedCustomerInformationOfReceipt = new ReceiptCustomerInfo();

		String requestedProductType = validateNotNullString(aaRequest.getRequestedProductType());
		String firstName = validateNotNullString(aaRequest.getFirstName());
		String middleInitial = validateNotNullString(aaRequest.getMiddleInitial());
		String lastName = validateNotNullString(aaRequest.getLastName());
		byte[] applicantSignatureByteArray = aaRequest.getApplicantSignature() ;

		ProvinceType currentProvince = aaRequest.getCurrentProvince();
		String preferredLanguage = aaRequest.getPreferedLanguage();

		String insuranceCode = aaRequest.getInsuranceCode();
		int storeNumber = aaRequest.getStoreNumber();

		populatedCustomerInformationOfReceipt.setRequestedProductType(validateNotNullString(requestedProductType));
		populatedCustomerInformationOfReceipt.setFirstName(validateNotNullString(firstName));
		populatedCustomerInformationOfReceipt.setMiddleInitial(validateNotNullString(middleInitial));
		populatedCustomerInformationOfReceipt.setLastName(validateNotNullString(lastName));

		populatedCustomerInformationOfReceipt.setApplicantSignature( (applicantSignatureByteArray!=null) ? validateNotNullString(new String(Base64.encodeBase64(applicantSignatureByteArray))) : "" );
		populatedCustomerInformationOfReceipt.setProvince( (currentProvince!=null) ? validateNotNullString(currentProvince.toString()) : "" );
		populatedCustomerInformationOfReceipt.setPreferredLanguage(validateNotNullString(preferredLanguage));
		
		populatedCustomerInformationOfReceipt.setInsuranceCode(validateNotNullString(insuranceCode));
		populatedCustomerInformationOfReceipt.setCreditProtector(validateNotNullString(prepareCreditProtectorYesNo(validateNotNullString(insuranceCode), preferredLanguage)));
		populatedCustomerInformationOfReceipt.setIdentityWatch(validateNotNullString(prepareIdentityWatchYesNo(validateNotNullString(insuranceCode), preferredLanguage)));

		populatedCustomerInformationOfReceipt.setStoreNumber( validateNotNullString(""+storeNumber) );
	
		return populatedCustomerInformationOfReceipt;
	}

	private String validateNotNullString( String argValue ){
		return (argValue!=null) ? argValue : "";
	}
	
	private String prepareCreditProtectorYesNo(String insuranceCode, String language)
	{
		String sMethod = this.getClass().getName() + "[prepareCreditProtectorYesNo] ";
		log.info(sMethod);

		String returnValue = "";

		if ("W4".endsWith(insuranceCode) || "CP".equalsIgnoreCase(insuranceCode))
		{
			if ("E".equalsIgnoreCase(language))
			{
				returnValue = "Yes";
			}
			else
			{
				returnValue = "Oui";
			}
		}
		else
		{
			if ("E".equalsIgnoreCase(language))
			{
				returnValue = "No";
			}
			else
			{
				returnValue = "Non";
			}
		}
		return returnValue;
	}

	private String prepareIdentityWatchYesNo(String insuranceCode, String language)
	{
		String sMethod = this.getClass().getName() + "[prepareIdentityWatchYesNo] ";
		log.info(sMethod);
		String returnValue = "";
		if ("W4".equalsIgnoreCase(insuranceCode) || "IL".equalsIgnoreCase(insuranceCode))
		{
			if ("E".equalsIgnoreCase(language))
			{
				returnValue = "Yes";
			}
			else
			{
				returnValue = "Oui";
			}
		}
		else
		{
			if ("E".equalsIgnoreCase(language))
			{
				returnValue = "No";
			}
			else
			{
				returnValue = "Non";
			}
		}
		return returnValue;
	}

	public CreditCardApplicationData convertToCreditCardApplicationDataForPrintout(ReceiptCustomerInfo customerInformationPortionOfReceipt)
	{
		CreditCardApplicationData populatedCCAData = new CreditCardApplicationData();
		
		buildChooseProductModel(customerInformationPortionOfReceipt, populatedCCAData);
		buildPersonalDataModel(customerInformationPortionOfReceipt, populatedCCAData);
		buildSignatureModel(customerInformationPortionOfReceipt, populatedCCAData);
		buildOptionalProductsModel(customerInformationPortionOfReceipt, populatedCCAData);
		buildLoginScreenModel(customerInformationPortionOfReceipt, populatedCCAData);
		return populatedCCAData;
	}
	private void buildLoginScreenModel(ReceiptCustomerInfo customerInformationPortionOfReceipt, CreditCardApplicationData populatedCCAData)
	{
		BaseModel loginScreen = new BaseModel();
		loginScreen.model = "loginScreen";
		
		NameValue nvPair = new NameValue();
		nvPair.name = "locationFieldID";
		nvPair.value = customerInformationPortionOfReceipt.getStoreNumber();
		loginScreen.data.add(nvPair);
		
		populatedCCAData.models.add(loginScreen);
	}
	private void buildOptionalProductsModel(ReceiptCustomerInfo customerInformationPortionOfReceipt, CreditCardApplicationData populatedCCAData)
	{
		BaseModel optionalProductsModel = new BaseModel();
		optionalProductsModel.model = "OptionalProductsModel";
		
		NameValue nvPair = new NameValue();
		nvPair.name = "insuranceCode";
		nvPair.value = customerInformationPortionOfReceipt.getInsuranceCode();
		optionalProductsModel.data.add(nvPair);
		
		populatedCCAData.models.add(optionalProductsModel);
	}
	private void buildSignatureModel(ReceiptCustomerInfo customerInformationPortionOfReceipt, CreditCardApplicationData populatedCCAData)
	{
		BaseModel signatureModel = new BaseModel();
		signatureModel.model = "signatureModel";
		
		NameValue nvPair = new NameValue();
		nvPair.name = "userSingnature";
		nvPair.value = customerInformationPortionOfReceipt.getApplicantSignature();
		signatureModel.data.add(nvPair);
				
		populatedCCAData.models.add(signatureModel);
	}
	private void buildPersonalDataModel(ReceiptCustomerInfo customerInformationPortionOfReceipt, CreditCardApplicationData populatedCCAData)
	{
		BaseModel personalDataModel = new BaseModel();
		personalDataModel.model = "personalData";
		
		NameValue nvPair = new NameValue();
		nvPair.name = "firstName";
		nvPair.value = customerInformationPortionOfReceipt.getFirstName();
		personalDataModel.data.add(nvPair);			
		
		nvPair = new NameValue();
		nvPair.name = "initial";
		nvPair.value = customerInformationPortionOfReceipt.getMiddleInitial();
		personalDataModel.data.add(nvPair);
		
		nvPair = new NameValue();
		nvPair.name = "lastName";
		nvPair.value = customerInformationPortionOfReceipt.getLastName();
		personalDataModel.data.add(nvPair);
					
		nvPair = new NameValue();
		nvPair.name = "correspondence";
		nvPair.value = customerInformationPortionOfReceipt.getPreferredLanguage();
		personalDataModel.data.add(nvPair);
					
		populatedCCAData.models.add(personalDataModel);
	}
	private void buildChooseProductModel(ReceiptCustomerInfo customerInformationPortionOfReceipt, CreditCardApplicationData populatedCCAData)
	{
		BaseModel chooseProductModel = new BaseModel();
		chooseProductModel.model = "chooseProductModel";
		
		NameValue nvPair = new NameValue();
		nvPair.name = "productCard";
		nvPair.value = customerInformationPortionOfReceipt.getRequestedProductType();
		chooseProductModel.data.add(nvPair);
		
		nvPair = new NameValue();
		nvPair.name = "province";
		nvPair.value = customerInformationPortionOfReceipt.getProvince();
		chooseProductModel.data.add(nvPair);
		
		populatedCCAData.models.add(chooseProductModel);
	}
	
}
