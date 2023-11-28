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

public class ReceiptCustomerInfoHelper {
	static Logger log = Logger.getLogger(ReceiptCustomerInfoHelper.class.getName());

	public ReceiptCustomerInfo getCustomerInformationPortionOfReceipt(String argAccountApplicationRequestXML) {
		log.info("ReceiptCustomerInfoHelper[getCustomerInformationPortionOfReceipt]");
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
		String insurance_CPType_Offered = aaRequest.getInsurance_CPType_Offered();
		String insurance_CPType_Selected = aaRequest.getInsurance_CPType_Selected();
		String storeNumber = aaRequest.getStoreNumber();
		String email = aaRequest.getCurrentEmailAddress();
		
		// US5240
		// CurrentAddressLine1 contains Street Number, Street Name and Suite/Apt unit formatted
		String addressLine1 = aaRequest.getCurrentAddressLine1();
		String city = aaRequest.getCurrentCity();
		String postalCode = aaRequest.getCurrentPostalCode();

		populatedCustomerInformationOfReceipt.setRequestedProductType(validateNotNullString(requestedProductType));
		populatedCustomerInformationOfReceipt.setFirstName(validateNotNullString(firstName));
		populatedCustomerInformationOfReceipt.setMiddleInitial(validateNotNullString(middleInitial));
		populatedCustomerInformationOfReceipt.setLastName(validateNotNullString(lastName));
		
		populatedCustomerInformationOfReceipt.setEmail(email);

		populatedCustomerInformationOfReceipt.setApplicantSignature( (applicantSignatureByteArray!=null) ? validateNotNullString(new String(Base64.encodeBase64(applicantSignatureByteArray))) : "" );
		populatedCustomerInformationOfReceipt.setProvince( (currentProvince!=null) ? validateNotNullString(currentProvince.toString()) : "" );
		populatedCustomerInformationOfReceipt.setPreferredLanguage(validateNotNullString(preferredLanguage));
		
		populatedCustomerInformationOfReceipt.setInsuranceCode(validateNotNullString(insuranceCode));
		populatedCustomerInformationOfReceipt.setInsurance_CPType_Offered(insurance_CPType_Offered);
		populatedCustomerInformationOfReceipt.setInsurance_CPType_Selected(insurance_CPType_Selected);
		populatedCustomerInformationOfReceipt.setCreditProtector(validateNotNullString(prepareCreditProtectorYesNo(validateNotNullString(insuranceCode), preferredLanguage)));
		populatedCustomerInformationOfReceipt.setIdentityWatch(validateNotNullString(prepareIdentityWatchYesNo(validateNotNullString(insuranceCode), preferredLanguage)));

		populatedCustomerInformationOfReceipt.setStoreNumber( validateNotNullString(""+storeNumber) );
	
		populatedCustomerInformationOfReceipt.setAddressStreetNumber(seperateStreetNumber(addressLine1));
		populatedCustomerInformationOfReceipt.setAddressStreetName(seperateStreetName(addressLine1));
		populatedCustomerInformationOfReceipt.setAddressSuiteUnitNumber(seperateSuiteUnit(addressLine1));
		
		populatedCustomerInformationOfReceipt.setAddressCity(validateNotNullString(city));
		populatedCustomerInformationOfReceipt.setAddressProvince( (currentProvince!=null) ? validateNotNullString(currentProvince.toString()) : "" );
		populatedCustomerInformationOfReceipt.setAddressPostalCode(validateNotNullString(postalCode));

		return populatedCustomerInformationOfReceipt;
	}
	
	private String seperateStreetNumber(String addressLine1) {
		return addressLine1.substring(addressLine1.indexOf('-')+1,addressLine1.indexOf(' '));
	}

	private String seperateSuiteUnit(String addressLine1) {
		return addressLine1.substring(0,addressLine1.indexOf('-'));
	}

	private String seperateStreetName(String addressLine1) {
		return addressLine1.substring(addressLine1.indexOf(' ')+1);
	}

	private String validateNotNullString( String argValue ) {
		return (argValue!=null) ? argValue : "";
	}
	
	private String prepareCreditProtectorYesNo(String insuranceCode, String language) {
		log.info("ReceiptCustomerInfoHelper[prepareCreditProtectorYesNo]");

		String returnValue = "";
		if ("W4".endsWith(insuranceCode) || "CP".equalsIgnoreCase(insuranceCode)) {
			if ("E".equalsIgnoreCase(language)) {
				returnValue = "Yes";
			}
			else {
				returnValue = "Oui";
			}
		} else {
			if ("E".equalsIgnoreCase(language)) {
				returnValue = "No";
			} else {
				returnValue = "Non";
			}
		}
		return returnValue;
	}

	private String prepareIdentityWatchYesNo(String insuranceCode, String language) {
		log.info("[prepareIdentityWatchYesNo]");
		String returnValue = "";
		if ("W4".equalsIgnoreCase(insuranceCode) || "IL".equalsIgnoreCase(insuranceCode)) {
			if ("E".equalsIgnoreCase(language)) {
				returnValue = "Yes";
			} else {
				returnValue = "Oui";
			}
		} else {
			if ("E".equalsIgnoreCase(language)) {
				returnValue = "No";
			} else {
				returnValue = "Non";
			}
		}
		return returnValue;
	}

	public CreditCardApplicationData convertToCreditCardApplicationDataForPrintout(ReceiptCustomerInfo customerInformationPortionOfReceipt) {
		CreditCardApplicationData populatedCCAData = new CreditCardApplicationData();
		
		buildChooseProductModel(customerInformationPortionOfReceipt, populatedCCAData);
		buildContactInfoModel(customerInformationPortionOfReceipt, populatedCCAData);
		buildPersonalDataModel(customerInformationPortionOfReceipt, populatedCCAData);
		// US5240
		buildPersonalAddressDataModel(customerInformationPortionOfReceipt, populatedCCAData);
		buildSignatureModel(customerInformationPortionOfReceipt, populatedCCAData);
		buildOptionalProductsModel(customerInformationPortionOfReceipt, populatedCCAData);
		buildLoginScreenModel(customerInformationPortionOfReceipt, populatedCCAData);
		buildFinancialDataModel(customerInformationPortionOfReceipt, populatedCCAData);
		return populatedCCAData;
	}
	
	private void buildContactInfoModel(ReceiptCustomerInfo customerInformationPortionOfReceipt, CreditCardApplicationData populatedCCAData) {
		BaseModel contactInfoModel = new BaseModel();
		contactInfoModel.model = "contactInfoScreen";
		
		NameValue nvPair = new NameValue();
		nvPair.name = "email";
		nvPair.value = customerInformationPortionOfReceipt.getEmail() != null ? customerInformationPortionOfReceipt.getEmail() : "";
		contactInfoModel.data.add(nvPair);
		
		populatedCCAData.models.add(contactInfoModel);
	}
	
	private void buildFinancialDataModel(ReceiptCustomerInfo customerInformationPortionOfReceipt, CreditCardApplicationData populatedCCAData) {
		BaseModel financialDataModel = new BaseModel();
		financialDataModel.model = "financialData";
		
		NameValue nvPair = new NameValue();
		nvPair.name = "insurance_CPType_Offered";
		nvPair.value = customerInformationPortionOfReceipt.getInsurance_CPType_Offered() != null ? customerInformationPortionOfReceipt.getInsurance_CPType_Offered() : "";
		financialDataModel.data.add(nvPair);
		
		nvPair = new NameValue();
		nvPair.name = "insurance_CPType_Selected";
		nvPair.value = customerInformationPortionOfReceipt.getInsurance_CPType_Selected() != null ? customerInformationPortionOfReceipt.getInsurance_CPType_Selected() : "";
		financialDataModel.data.add(nvPair);
		
		populatedCCAData.models.add(financialDataModel);
	}
	
	private void buildPersonalAddressDataModel(ReceiptCustomerInfo customerInformationPortionOfReceipt, CreditCardApplicationData populatedCCAData) {
		BaseModel personalDataAddressModel = new BaseModel();
		personalDataAddressModel.model = "personalData2_Address";
		
		NameValue nvPair = new NameValue();
		nvPair.name = "suiteunit";
		nvPair.value = customerInformationPortionOfReceipt.getAddressSuiteUnitNumber();
		personalDataAddressModel.data.add(nvPair);
		
		nvPair = new NameValue();
		nvPair.name = "streetnumber";
		nvPair.value = customerInformationPortionOfReceipt.getAddressStreetNumber();
		personalDataAddressModel.data.add(nvPair);
		
		nvPair = new NameValue();
		nvPair.name = "addressline1";
		nvPair.value = customerInformationPortionOfReceipt.getAddressStreetName();
		personalDataAddressModel.data.add(nvPair);
		
		nvPair = new NameValue();
		nvPair.name = "city";
		nvPair.value = customerInformationPortionOfReceipt.getAddressCity();
		personalDataAddressModel.data.add(nvPair);
		
		nvPair = new NameValue();
		nvPair.name = "province";
		nvPair.value = customerInformationPortionOfReceipt.getAddressProvince();
		personalDataAddressModel.data.add(nvPair);
		
		nvPair = new NameValue();
		nvPair.name = "postalcode";
		nvPair.value = customerInformationPortionOfReceipt.getAddressPostalCode();
		personalDataAddressModel.data.add(nvPair);
		
		populatedCCAData.models.add(personalDataAddressModel);
	}

	private void buildLoginScreenModel(ReceiptCustomerInfo customerInformationPortionOfReceipt, CreditCardApplicationData populatedCCAData) {
		BaseModel loginScreen = new BaseModel();
		loginScreen.model = "loginScreen";
		
		NameValue nvPair = new NameValue();
		nvPair.name = "locationFieldID";
		nvPair.value = customerInformationPortionOfReceipt.getStoreNumber();
		loginScreen.data.add(nvPair);
		
		populatedCCAData.models.add(loginScreen);
	}
	private void buildOptionalProductsModel(ReceiptCustomerInfo customerInformationPortionOfReceipt, CreditCardApplicationData populatedCCAData) {
		BaseModel optionalProductsModel = new BaseModel();
		optionalProductsModel.model = "OptionalProductsModel";
		
		NameValue nvPair = new NameValue();
		nvPair.name = "insuranceCode";
		nvPair.value = customerInformationPortionOfReceipt.getInsuranceCode() != null ? customerInformationPortionOfReceipt.getInsuranceCode() : "";
		optionalProductsModel.data.add(nvPair);
		
		populatedCCAData.models.add(optionalProductsModel);
	}
	private void buildSignatureModel(ReceiptCustomerInfo customerInformationPortionOfReceipt, CreditCardApplicationData populatedCCAData) {
		BaseModel signatureModel = new BaseModel();
		signatureModel.model = "signatureModel";
		
		NameValue nvPair = new NameValue();
		nvPair.name = "userSignature";
		nvPair.value = customerInformationPortionOfReceipt.getApplicantSignature();
		signatureModel.data.add(nvPair);
				
		populatedCCAData.models.add(signatureModel);
	}
	private void buildPersonalDataModel(ReceiptCustomerInfo customerInformationPortionOfReceipt, CreditCardApplicationData populatedCCAData) {
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
	private void buildChooseProductModel(ReceiptCustomerInfo customerInformationPortionOfReceipt, CreditCardApplicationData populatedCCAData) {
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
