package com.ctfs.WICI.Helper;

import java.util.Map;
import java.util.logging.Logger;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import org.apache.commons.codec.binary.Base64;
import com.ctc.ctfs.channel.accountacquisition.CountryType;
import com.ctc.ctfs.channel.accountacquisition.ProvinceStateType;
import com.ctc.ctfs.channel.accountacquisition.ProvinceType;
import com.ctfs.WICI.Model.AccountApplicationContactInfo;
import com.ctfs.WICI.Servlet.Model.BaseModel;
import com.ctfs.WICI.Servlet.Model.CreditCardApplicationData;
import com.google.gson.Gson;

public class AccountApplicationRequestTypeConverter
{
	private static final String MODEL_OPTIONAL_PRODUCTS_MODEL = "OptionalProductsModel";
	private static final String MODEL_SIGNATURE_MODEL = "signatureModel";
	private static final String MODEL_SUP_CARD_REQUEST_DATA = "supCardRequestData";
	private static final String MODEL_FINANCIAL_DATA = "financialData";
	private static final String MODEL_PERSONAL_DATA2_ADDRESS = "personalData2_Address";
	private static final String MODEL_PERSONAL_DATA = "personalData";
	private static final String MODEL_CHOOSE_PRODUCT = "chooseProductModel";
	private static final String MODEL_LOGIN_SCREEN = "loginScreen";
	// US4637
	private static final String MODEL_CONTACTINFO_SCREEN = "contactInfoScreen";
	private static final String MODEL_MOBILEPAYMENTS_SCREEN = "mobilePaymentsScreen";
	private static final String HYPHEN_SYMBOL = "-";
	private static final String EMPTY_STRING = "";
	
	private static final String ASC_DEFAULT="9977"; // US5244 - Bill 134 - New ASCs
	private static final String ASC_FMR="9990";
	private static final String ASC_STORE_STAFF_QC="9993";
	private static final String ASC_STORE_STAFF_ROC="9992";
	private static final String TOGGLE_SECTION="CTFS_LOYALTY_TOGGLE_FLAG";
	private static final String TOGGLE_KEY="ECTM_COMPONENTS_TOGGLE_FLAG";
	
	

	static Logger log = Logger.getLogger(AccountApplicationRequestTypeConverter.class.getName());

	public AccountApplicationRequestType createAccountApplicationRequestFromCreditCardApplicationData(CreditCardApplicationData argCreditCardApplicationData,String tabSerialNum,boolean authFlag)
    {

                    String sMethod = "[createAccountApplicationRequestFromCreditCardApplicationData()]";
                    log.info(sMethod);

                    //com.ctc.ctfs.channel.accountacquisition.ObjectFactory objectFactory = new com.ctc.ctfs.channel.accountacquisition.ObjectFactory();
                    AccountApplicationRequestType populatedAccountApplicationRequest = new AccountApplicationRequestType();

                    //GUIDGenerator guidGenerator = new GUIDGenerator();
                    //populatedAccountApplicationRequest.setExternalReferenceId(guidGenerator.getGUIDAsString());
                    String applicationReferenceID = (argCreditCardApplicationData.getModel(MODEL_CONTACTINFO_SCREEN)).get("applicationReferenceID") != null ? (argCreditCardApplicationData.getModel(MODEL_CONTACTINFO_SCREEN)).get("applicationReferenceID") : null;
                    populatedAccountApplicationRequest.setExternalReferenceId(applicationReferenceID);
                    populatedAccountApplicationRequest.setTabSerialId(tabSerialNum);
                    
                    String retailNetwork = (argCreditCardApplicationData.getModel(MODEL_LOGIN_SCREEN)).get("retailNetWork") != null ? (argCreditCardApplicationData.getModel(MODEL_LOGIN_SCREEN)).get("retailNetWork") : null;
                    String program = (argCreditCardApplicationData.getModel(MODEL_CHOOSE_PRODUCT)).get("agencyProgram") != null ? (argCreditCardApplicationData.getModel(MODEL_CHOOSE_PRODUCT)).get("agencyProgram") : null;
                    String storeNumber = (argCreditCardApplicationData.getModel(MODEL_LOGIN_SCREEN)).get("locationFieldID") != null ? (argCreditCardApplicationData.getModel(MODEL_LOGIN_SCREEN)).get("locationFieldID") : "0";
                    populatedAccountApplicationRequest.setUserBanner(retailNetwork);
                    if(retailNetwork != null) {
                    	if(retailNetwork.equals("GAS") && !("E".equalsIgnoreCase((argCreditCardApplicationData.getModel(MODEL_LOGIN_SCREEN)).get("employerID")))) {
                    		 populatedAccountApplicationRequest.setChannelIndicator("GB");
                    	} 
                    	else if((retailNetwork.equals("GAS") || retailNetwork.equals("CT")) && ("E".equalsIgnoreCase((argCreditCardApplicationData.getModel(MODEL_LOGIN_SCREEN)).get("employerID")))) {
                    		 populatedAccountApplicationRequest.setChannelIndicator("DP");
                    	}
                    	else if(retailNetwork.equals("CT")) {
	                   		 populatedAccountApplicationRequest.setChannelIndicator("IP");
	                   	}
                    	else if(retailNetwork.equals("SPORTS")) {
	                   		 populatedAccountApplicationRequest.setChannelIndicator("FG");
	                   	}
                    	else if(retailNetwork.equals("FGLFRN")) {
	                   		 populatedAccountApplicationRequest.setChannelIndicator("SE");
	                   	}
                    	else if(retailNetwork.equals("PHL")) {
	                   		 populatedAccountApplicationRequest.setChannelIndicator("HL");
	                   	}
                    	else if(retailNetwork.equals("NS")) {
	                   		 populatedAccountApplicationRequest.setChannelIndicator("NS");
	                   	}
                    	else if(retailNetwork.equals("MARKS")) {
	                   		 populatedAccountApplicationRequest.setChannelIndicator("IC");
	                   	}
                    	else if(retailNetwork.equals("MRKFRN")) {
	                   		 populatedAccountApplicationRequest.setChannelIndicator("MF");
	                   	}
                    	else if(retailNetwork.equals("OS") && program.equalsIgnoreCase("Campus")) {
	                   		 populatedAccountApplicationRequest.setChannelIndicator("SC");
	                   	}
                    	else if(retailNetwork.equals("OS")) {
	                   		 populatedAccountApplicationRequest.setChannelIndicator("OS");
	                   	}
                    	else if(retailNetwork.equals("PRTNR") && (storeNumber != null && storeNumber.substring(0,1).equals("H"))) {
	                   		 populatedAccountApplicationRequest.setChannelIndicator("HB");
	                   	}
                    	else if(retailNetwork.equals("PC")) {
	                   		 populatedAccountApplicationRequest.setChannelIndicator("PC");
	                   	}
                    	else {
	                   		 populatedAccountApplicationRequest.setChannelIndicator("UK");
	                   	}
                    }
                    
                    //log.info("cIndicator:" + populatedAccountApplicationRequest.getChannelIndicator());
    
                    populatedAccountApplicationRequest.setCurrentCountry("CA");
                    BaseModel model;
                    model = argCreditCardApplicationData.getModel(MODEL_PERSONAL_DATA2_ADDRESS);
                    if (model != null)
                    {
                    				// US3623
                                    if("Y".equalsIgnoreCase(model.get("flipPrevWasInCanada")))
                                    {
                                    	populatedAccountApplicationRequest.setPreviousCountry(CountryType.CA);
                                    }
                                    else
                                    {
                                        populatedAccountApplicationRequest.setPreviousCountry(CountryType.OT);
                                    }
                       
                    }
                    
                    //populatedAccountApplicationRequest.setSupp1Country(CountryType.CA);
                    BaseModel model_supp;
                    try
                    {
                                    model_supp = argCreditCardApplicationData.getModel(MODEL_SUP_CARD_REQUEST_DATA);
                                    if (model_supp != null && model_supp.get("cardYesNo").equals("Y"))
                                    {
                                                    populatedAccountApplicationRequest.setSupp1Country(CountryType.CA.value());
                                    }
                    }
                    catch (Exception e)
                    {
                                    log.warning(sMethod + " Exception: " + e.getMessage());
                                    e.printStackTrace();
                    }
                   // populatedAccountApplicationRequest.setEmployerCountry(CountryType.CA.value());

                    // From AccountApplication.xsd v1.14 this filed have been removed
                    // populatedAccountApplicationRequest.setRoadsideOnRequestFlag("N");

                    populateLoginModel(argCreditCardApplicationData, populatedAccountApplicationRequest,authFlag);
                    populateChooseProductModel(argCreditCardApplicationData, populatedAccountApplicationRequest);
                    populatePersonalDataModel(argCreditCardApplicationData, populatedAccountApplicationRequest);
                    populatePersonalData2Model(argCreditCardApplicationData, populatedAccountApplicationRequest);
                    populateFinancialDataModel(argCreditCardApplicationData, populatedAccountApplicationRequest);
                    populateSuplementaryDataModel(argCreditCardApplicationData, populatedAccountApplicationRequest);
                    populateSignatureModel(argCreditCardApplicationData, populatedAccountApplicationRequest);
                    populateOptionalProductsModel(argCreditCardApplicationData, populatedAccountApplicationRequest);
                    // US4637
                    populateEmailInfoModel(argCreditCardApplicationData, populatedAccountApplicationRequest);
                    populateMobilePaymentsModel(argCreditCardApplicationData, populatedAccountApplicationRequest);

                    try
                    {
                                    Gson gson = new Gson();
                                    String result = gson.toJson(populatedAccountApplicationRequest);
                                    log.info(sMethod + " accountApplicationRequest populated with data: " + result);
                    }
                    catch (Exception e)
                    {
                    }

                    return populatedAccountApplicationRequest;
    }
	
	public AccountApplicationContactInfo createAccountApplicationContactInfo(CreditCardApplicationData argCreditCardApplicationData) {
		
		String sMethod = "[createAccountApplicationContactInfo()]";
        log.info(sMethod);
        
        com.ctc.ctfs.channel.accountacquisition.ObjectFactory objectFactory = new com.ctc.ctfs.channel.accountacquisition.ObjectFactory();
        AccountApplicationContactInfo populatedAccountApplicationContactInfo = objectFactory.createAccountApplicationContactInfo();
        
        populateEmailInfoModel(argCreditCardApplicationData, populatedAccountApplicationContactInfo);
		return populatedAccountApplicationContactInfo;
	}

    private void populateOptionalProductsModel(CreditCardApplicationData argCreditCardData, AccountApplicationRequestType argAccAppRequest) {
    	String sMethod = "[OptionalProductsModel()]";
        log.info(sMethod);
        
        ImageUtils imageUtil = new ImageUtils();
        BaseModel model;
        try {
        	model = argCreditCardData.getModel(MODEL_OPTIONAL_PRODUCTS_MODEL);
            if (model == null) {
            	return;
            }
            argAccAppRequest.setInsuranceCode(model.get("insuranceCode"));

            if (("Y").equalsIgnoreCase(model.get("optionalProducts_CPC_AcceptBox")) || 
    		   ("Y").equalsIgnoreCase(model.get("optionalProducts_CPLD_AcceptBox"))) {
            	argAccAppRequest.setInsuranceAgreedFlag("Y");
            	argAccAppRequest.setInsuranceSignatureFlag("Y");
            	argAccAppRequest.setInsuranceDateSigned(model.get("signDate"));
            } else {
            	argAccAppRequest.setInsuranceAgreedFlag("N");
            	argAccAppRequest.setInsuranceSignatureFlag("N");
            }
                                    
            if (("Y").equalsIgnoreCase(model.get("optionalProducts_CPC_AcceptBox"))) {
            	// (AA): This decoding is necessary before setting the value
            	// because
            	// apparently, the XSD takes care of BASE64 Encoding
            	// argAccAppRequest.setInsuranceSignature(model.getBase64EncodedJPGByteArray("userSignature"));
            	byte[] decodedBase64Image = Base64.decodeBase64(model.getBase64EncodedJPGByteArray("userSignature_CPC"));
            	argAccAppRequest.setInsuranceSignatureCP(decodedBase64Image);
            }
            if (("Y").equalsIgnoreCase(model.get("optionalProducts_CPLD_AcceptBox"))) {
            	// (AA): This decoding is necessary before setting the value
            	// because
            	// apparently, the XSD takes care of BASE64 Encoding
            	// argAccAppRequest.setInsuranceSignature(model.getBase64EncodedJPGByteArray("userSignature"));
            	byte[] decodedBase64Image = Base64.decodeBase64(model.getBase64EncodedJPGByteArray("userSignature_CPLD"));
            	argAccAppRequest.setInsuranceSignatureCP(decodedBase64Image);
            }
        } catch (Exception e) {
        	log.warning(sMethod + " Exception: " + e.getMessage());
            e.printStackTrace();
        }
    }

	private void populateSignatureModel(CreditCardApplicationData argCreditCardData, AccountApplicationRequestType argAccAppRequest)
	{
		String sMethod = "[SignatureModel()]";
		log.info(sMethod + "::called");
		ImageUtils imageUtil = new ImageUtils();
		BaseModel model;
		try
		{
			model = argCreditCardData.getModel(MODEL_SIGNATURE_MODEL);
			if (model != null)
			{
				argAccAppRequest.setAgreedToTermsFlag("Y");

				// (AA): This decoding is necessary before setting the value
				// because apparently, the XSD takes care of BASE64 Encoding
				// argAccAppRequest.setApplicantSignature(model.getBase64EncodedJPGByteArray("userSignature"));
				byte[] decodedBase64Image = Base64.decodeBase64(model.getBase64EncodedJPGByteArray("userSignature"));
				argAccAppRequest.setApplicantSignature(decodedBase64Image);
				
				
				//argAccAppRequest.setApplicantSignature(decodedBase64Image.toString());
				//argAccAppRequest.setApplicantSignature(imageUtil.convertPNGDataURLToJPGByteString(model.get("userSignature")));
				argAccAppRequest.setSignatureFlag("Y");
				argAccAppRequest.setSignatureMatchFlag("Y");
				argAccAppRequest.setDateSigned(model.get("signDate"));
				/*try
				{
					XMLGregorianCalendar xgc;
					xgc = model.getGregorianDate("signDate");
					argAccAppRequest.setDateSigned(xgc);
				}
				catch (DatatypeConfigurationException e)
				{
					log.warning(sMethod + " MODEL_SIGNATURE_MODEL::signDate Exception: " + e.getMessage());
					e.printStackTrace();
				}*/
			}
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
		}
	}

	private void populateSuplementaryDataModel(CreditCardApplicationData argCreditCardData, AccountApplicationRequestType argAccAppRequest)
	{
		String sMethod = "[SuplementaryDataModel()]";
		log.info(sMethod);

		BaseModel model;
		try
		{
			model = argCreditCardData.getModel(MODEL_SUP_CARD_REQUEST_DATA);
			if (model != null && model.get("cardYesNo").equals("Y"))
			{
				argAccAppRequest.setSupp1FirstName(model.get("firstName"));
				argAccAppRequest.setSupp1LastName(model.get("lastName"));
				argAccAppRequest.setSupp1MiddleInitial(model.get("initial"));

				argAccAppRequest.setSupp1Relationship(model.get("cardRequestFor"));
				argAccAppRequest.setSupp1DateOfBirth(model.get("birthDate"));
				/*try
				{
					XMLGregorianCalendar xgc;
					xgc = model.getGregorianDate("birthDate");
					argAccAppRequest.setSupp1DateOfBirth(xgc);
				}
				catch (DatatypeConfigurationException e)
				{
					log.warning(sMethod + " MODEL_SUP_CARD_REQUEST_DATA::birthDate Exception: " + e.getMessage());
					e.printStackTrace();
				}*/

				argAccAppRequest.setSupp1AddrSameAsPrimary(model.get("sameAddressYesNo"));
				argAccAppRequest.setSupp1TelephoneNumber(model.get("phone"));
				
				if (model.get("sameAddressYesNo").equals("N"))
				{

					String addressLine1 = updateAddresslineOneWithHyphenSymbol(
							model.get("suiteUnit"),
							model.get("addressLine1"));
					
					addressLine1 += model.get("addressLine1");
					argAccAppRequest.setSupp1AddressLine1(addressLine1);

					argAccAppRequest.setSupp1AddressLine2(model.get("addressLine2"));
					argAccAppRequest.setSupp1City(model.get("city"));
					argAccAppRequest.setSupp1Province(model.get("province"));
					argAccAppRequest.setSupp1PostalCode(model.get("postalCode"));					
				}

			}
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
		}
	}

	private void populateFinancialDataModel(CreditCardApplicationData argCreditCardData, AccountApplicationRequestType argAccAppRequest) {
		String sMethod = "[FinancialDataModel()]";
		log.info(sMethod);

		BaseModel model;
		try {
			model = argCreditCardData.getModel(MODEL_FINANCIAL_DATA);
			if (model != null) {
				String emplStatus = model.get("employmentTypeDSS");
				String jobDescription = model.get("jobDescription");
				if(jobDescription.equalsIgnoreCase("OTHER")) {
					jobDescription = model.get("jobDescriptionOther");
				} else {
					jobDescription = model.get("jobDescription");
				}
				String emplCategory = model.get("jobCategory");
				String employerName = model.get("employerName");
				String employerPhone = model.get("employerPhone");
				String employerCity = model.get("employerCity");
				int howLongYears = model.getInt("howLongYears");
				int howLongMonthes = model.getInt("howLongMonthes");
				if (emplStatus.equalsIgnoreCase("RETIRED")) {
					emplStatus = "RETIRED";
					jobDescription = "RETIRED";
					emplCategory = "RETIRED";
					employerName = "RETIRED";
					employerPhone = "";
					howLongYears = 0;
					howLongMonthes = 0;
					employerCity = "";
				} else if(emplStatus.equalsIgnoreCase("HOMEMAKER")) {
					emplStatus = "HOMEMAKER";
					jobDescription = "HOMEMAKER";
					emplCategory = "HOMEMAKER";
					employerName = "HOMEMAKER";
					employerPhone = "";
					howLongYears = 0;
					howLongMonthes = 0;
					employerCity = "";
				} else if(emplStatus.equalsIgnoreCase("UNEMPLOYED")) {
					emplStatus = "UNEMPLOYED";
					jobDescription = "UNEMPLOYED";
					emplCategory = "UNEMPLOYED";
					employerName = "UNEMPLOYED";
					employerPhone = "";
					howLongYears = 0;
					howLongMonthes = 0;
					employerCity = "";
				}
				argAccAppRequest.setEmploymentStatus(emplStatus);
				if (jobDescription != null && !"".equals(jobDescription) && jobDescription.length()>19)
				{
					argAccAppRequest.setJobDescription(jobDescription.substring(0,19));
				}
				else
				{
					argAccAppRequest.setJobDescription(jobDescription);
				}
				argAccAppRequest.setJobCategory(emplCategory);
				argAccAppRequest.setEmployerName(employerName);
				argAccAppRequest.setEmployerTelephoneNumber(employerPhone);
				argAccAppRequest.setEmployerCity(employerCity);

				argAccAppRequest.setYearsAtEmployement(howLongYears);
				argAccAppRequest.setMonthsAtEmployement(howLongMonthes);

				argAccAppRequest.setGrossAnnualIncome(model.getInt("grossIncome"));
				
				//US3960  	
				argAccAppRequest.setGrossAnnualHouseholdIncome(model.getInt("grossHouseholdIncome"));
				
				argAccAppRequest.setBankCardFlag(model.get("cardVISAMCAMEX"));
				argAccAppRequest.setBankLoanFlag(model.get("cardBankLoan"));

				argAccAppRequest.setStoreCardFlag(model.get("cardStoreCard"));
				argAccAppRequest.setChequingAccountFlag(model.get("cardChequingAcct"));
				argAccAppRequest.setGasCardFlag(model.get("cardGasCard"));
				argAccAppRequest.setSavingsAccountFlag(model.get("cardSavingsAcct"));

				argAccAppRequest.setSin(model.get("sin"));
				argAccAppRequest.setInsurance_CPType_Offered(model.get("insurance_CPType_Offered"));
				argAccAppRequest.setInsurance_CPType_Selected(model.get("insurance_CPType_Selected"));
			}
		}
		catch (Exception e) {
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
		}
	}

	private void populatePersonalData2Model(CreditCardApplicationData argCreditCardData, AccountApplicationRequestType argAccAppRequest)
	{
		String sMethod = "[PersonalData2Model()]";
		log.info(sMethod);		

		BaseModel model;
		try
		{
			model = argCreditCardData.getModel(MODEL_PERSONAL_DATA2_ADDRESS);
			if (model != null)
			{
				argAccAppRequest.setCurrentAddressType(model.get("house"));

				String addressLine1 = updateAddresslineOneWithHyphenSymbol(
						model.get("suiteunit"), 
						model.get("addressline1"));
				
				addressLine1 += model.get("addressline1");
				argAccAppRequest.setCurrentAddressLine1(addressLine1);
				argAccAppRequest.setCurrentAddressLine2(model.get("addressline2"));
				argAccAppRequest.setCurrentCity(model.get("city"));
				argAccAppRequest.setCurrentProvince(ProvinceType.valueOf(model.get("province")));
				argAccAppRequest.setCurrentPostalCode(model.get("postalcode"));
				argAccAppRequest.setYearsAtCurrentAddress(model.getInt("years"));
				argAccAppRequest.setMonthsAtCurrentAddress(model.getInt("months"));

				String addressLine1Prev = updateAddresslineOneWithHyphenSymbol(
						model.get("suiteunit_prev"), 
						model.get("addressline1_prev"));				
				
				addressLine1Prev += model.get("addressline1_prev");
				argAccAppRequest.setPreviousAddressLine1(addressLine1Prev);
				if(argAccAppRequest.getPreviousAddressLine1()!= null && argAccAppRequest.getPreviousAddressLine1().equalsIgnoreCase("null")){
					argAccAppRequest.setPreviousAddressLine1(null);
					log.info(sMethod+ "addressline1_prev "+ argAccAppRequest.getPreviousAddressLine1());
				}

				argAccAppRequest.setPreviousAddressLine2(model.get("addressline2_prev"));
				argAccAppRequest.setPreviousCity(model.get("city_prev"));
				
				try
				{
					argAccAppRequest.setPreviousProvinceState(ProvinceStateType.valueOf(model.get("province_prev")));
				}
				catch (Exception e)
				{
					log.warning(sMethod + "Previous address section - province_prev! Exception: " + e.getMessage());
				}
				argAccAppRequest.setPreviousPostalCode(model.get("postalcode_prev"));
				argAccAppRequest.setMonthlyRentMortgageAmount(model.getInt("housingpayment"));
			}
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
		}
	}

	private void populatePersonalDataModel(CreditCardApplicationData argCreditCardData, AccountApplicationRequestType argAccAppRequest)
	{
		String sMethod = "[PersonalDataModel()]";
		log.info(sMethod);
		BaseModel model;
		try
		{
			model = argCreditCardData.getModel(MODEL_PERSONAL_DATA);
			if (model != null)
			{
				//US3012
				if("ON_AOC".equals(ApplicationConfiguration.getCategoryKeys(TOGGLE_SECTION).get(TOGGLE_KEY)))
				{
				 argAccAppRequest.setLoyaltyMembershipNumber(model.get("loyaltyMembershipNumber"));
				}
				argAccAppRequest.setFirstName(model.get("firstName"));
				argAccAppRequest.setMiddleInitial(model.get("initial"));
				argAccAppRequest.setLastName(model.get("lastName"));
				argAccAppRequest.setDateOfBirth(model.get("birthDate"));
				/*try
				{
					XMLGregorianCalendar xgc;
					xgc = model.getGregorianDate("birthDate");
					argAccAppRequest.setDateOfBirth(xgc);
				}
				catch (DatatypeConfigurationException e)
				{
					log.warning(sMethod + " MODEL_PERSONAL_DATA::birthDate Exception: " + e.getMessage());
					e.printStackTrace();
				}*/

				argAccAppRequest.setIdType(model.get("idtype"));
				argAccAppRequest.setIdNumber(model.get("idnumbers").replace("-", ""));
				argAccAppRequest.setPlaceOfIssue(model.get("placeofissue"));
				argAccAppRequest.setPreferedLanguage(model.get("correspondence"));
				argAccAppRequest.setIdExpiryDate(model.get("idExpiryDate"));
				// US4365
				/*if(model.get("idExpiryDate") != null) {
					try
					{
						XMLGregorianCalendar xgc;
						xgc = model.getGregorianDate("idExpiryDate");
						argAccAppRequest.setIDExpiryDate(model.get("idExpiryDate"));
					}
					catch (DatatypeConfigurationException e)
					{
						log.warning(sMethod + " MODEL_PERSONAL_DATA::expiryDate Exception: " + e.getMessage());
						e.printStackTrace();
					}
				}*/
				//String title = model.get("title");
				// US5073 WICI - Update Gender Mapping
			/*	String gender = null;
				if(title != null) {
					if (title.equals("MR")) {
						gender = "M";
					} else if (title.equals("MRS") || title.equals("MISS") || title.equals("MS")) {
						gender = "F";
					}
				}*/
				argAccAppRequest.setApplicantGender(model.get("title"));
				argAccAppRequest.setRequestedCreditLimit(model.getInt("requestedCreditLimit")); //US3270 Feb 17th, 2015
				argAccAppRequest.setDSAScore(model.get("DSAScore"));
				argAccAppRequest.setTreatmentCode(model.get("treatmentCode"));
				argAccAppRequest.setTmxProfileId(model.get("tmxProfileID"));
				argAccAppRequest.setPIISource(model.get("PIISource"));
			}
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
		}
	}

	private void populateLoginModel(CreditCardApplicationData argCreditCardData, AccountApplicationRequestType argAccAppRequest, boolean authfieldCheckEnable )
	{
		String sMethod = "[LoginModel()]";
		log.info(sMethod);
		try
		{
			BaseModel model = argCreditCardData.getModel(MODEL_LOGIN_SCREEN);
			String agency = "";
			String outletProvince = "";
			if (model != null)
			{
				agency = model.get("employerID");
				outletProvince = model.get("outletProvince");
				argAccAppRequest.setStoreNumber(model.get("locationFieldIDADM"));
				argAccAppRequest.setBusinessStoreNo(model.get("businessStoreNumber"));
				
				// VZE-436
				argAccAppRequest.setUserEmployerId(agency);
				//argAccAppRequest.setUserBanner("MARKS");
				
				/*WICIDBHelper wicidbHelper = new WICIDBHelper();
				String CONFIG_NAME_ENABLE_AGENT_AUTH = "ENABLE_AGENT_AUTH"; 
				boolean authfieldCheckEnable=wicidbHelper.isAuthfieldCheckEnabled(CONFIG_NAME_ENABLE_AGENT_AUTH);*/
				
				if (!("E".equalsIgnoreCase(agency))) {
					if (authfieldCheckEnable) {
						argAccAppRequest.setAgentId(model.get("employerID")
								+ model.get("agentID"));
					} else {
						argAccAppRequest.setAgentId(model.get("agentID"));
					}

				} else {
					argAccAppRequest.setAgentId(model.get("agentID"));
				}
				
				// agency = model.get("userID").substring(0,1);
				
				
                //US3103 - Sep 16 2014 Release  
				ApplicationConfiguration.readApplicationConfiguration();
				Map toggleMap = ApplicationConfiguration.getCategoryKeys(TOGGLE_SECTION);
				log.info("Toggle is set to "+toggleMap.get(TOGGLE_KEY));
								
				if(("OFF".equals(toggleMap.get(TOGGLE_KEY)))||("ON_NS".equals(toggleMap.get(TOGGLE_KEY))))
				{
					log.info("Setting ASC to " +ASC_DEFAULT);
					argAccAppRequest.setAcquistionStrategyCode("0" + agency.toUpperCase() + ASC_DEFAULT); //US3012 - changed agency.toUpperCase()
				}
				else if("ON_AOC".equals(toggleMap.get(TOGGLE_KEY)))
				{
					log.info("Setting ASC for All Of Canada");
					if (!("E".equalsIgnoreCase(agency))) {
						argAccAppRequest.setAcquistionStrategyCode("0" + agency.toUpperCase() + ASC_FMR);
					} else {
						if("QC".equalsIgnoreCase(outletProvince)) {
							argAccAppRequest.setAcquistionStrategyCode("0" + agency.toUpperCase() + ASC_STORE_STAFF_QC);
						} else {
							argAccAppRequest.setAcquistionStrategyCode("0" + agency.toUpperCase() + ASC_STORE_STAFF_ROC);
						}
					}
				}
				else
				{
					log.info("Setting ASC to " +ASC_DEFAULT);
					argAccAppRequest.setAcquistionStrategyCode("0" + agency.toUpperCase() + ASC_DEFAULT); //US3012 - changed agency.toUpperCase()
				} 
			}
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
		}
	}

	private void populateChooseProductModel(CreditCardApplicationData argCreditCardData, AccountApplicationRequestType argAccAppRequest)
	{
		String sMethod = "[ChooseProductModel()]";
		log.info(sMethod);
		ImageUtils imageUtil = new ImageUtils();
		BaseModel model;
		BaseModel loginModel;
		String agency = "";
		String outletProvince = "";
		try
		{
			model = argCreditCardData.getModel(MODEL_CHOOSE_PRODUCT);
			loginModel = argCreditCardData.getModel(MODEL_LOGIN_SCREEN);
			agency = model.get("employerID");
			outletProvince = loginModel.get("outletProvince");
			if (model != null && loginModel != null)
			{
				argAccAppRequest.setRequestedProductType(model.get("productCard"));
				argAccAppRequest.setAgencyPromoCode(model.get("agencyPromoCode"));
				argAccAppRequest.setControlConfirmationFlag(model.get("controlConfirmation"));
				
				byte[] decodedBase64Image = Base64.decodeBase64(model.getBase64EncodedJPGByteArray("signature_customer"));
				argAccAppRequest.setControlConfirmationSignature(decodedBase64Image);
				
				try
				{
					argAccAppRequest.setCostOfCreditFlag(model.get("costOfCreditAgreement"));
					argAccAppRequest.setCardMemberFlag(model.get("cardmemberAgreement"));
					argAccAppRequest.setTriangleRewardFlag(model.get("triangleRewardAgreement"));
				}
				catch (Exception e)
				{
					log.warning(sMethod + " MODEL_CHOOSE_PRODUCT::costOfCredit Exception: " + e.getMessage());
					e.printStackTrace();
				}
			}
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
		}
	}
	
	// US4637
	private void populateEmailInfoModel(CreditCardApplicationData argCreditCardData, AccountApplicationRequestType argAccAppRequest)
	{
		String sMethod = "[populateEmailInfoModel()]";
		log.info(sMethod);

		BaseModel model;
		try
		{
			model = argCreditCardData.getModel(MODEL_CONTACTINFO_SCREEN);
			if (model != null)
			{
				if(model.get("primaryLandline_CheckField").equalsIgnoreCase("Y") && model.get("secondaryLandline_CheckField").equalsIgnoreCase("Y")) {
					argAccAppRequest.setCurrentTelephoneNumber(model.get("homePhone"));
					argAccAppRequest.setCurrentCellPhoneNumber(model.get("cellPhone"));
				} else if(model.get("primaryMobile_CheckField").equalsIgnoreCase("Y") && model.get("secondaryMobile_CheckField").equalsIgnoreCase("Y")) {
					argAccAppRequest.setCurrentTelephoneNumber(model.get("cellPhone"));
					argAccAppRequest.setCurrentCellPhoneNumber(model.get("homePhone"));
				} else if(model.get("primaryLandline_CheckField").equalsIgnoreCase("Y") && model.get("secondaryMobile_CheckField").equalsIgnoreCase("Y")) {
					argAccAppRequest.setCurrentTelephoneNumber(model.get("homePhone"));
					argAccAppRequest.setCurrentCellPhoneNumber(model.get("cellPhone"));
				} else if(model.get("primaryMobile_CheckField").equalsIgnoreCase("Y") && model.get("secondaryLandline_CheckField").equalsIgnoreCase("Y")) {
					argAccAppRequest.setCurrentTelephoneNumber(model.get("cellPhone"));
					argAccAppRequest.setCurrentCellPhoneNumber(model.get("homePhone"));
				} else if(model.get("primaryMobile_CheckField").equalsIgnoreCase("Y")) {
					argAccAppRequest.setCurrentTelephoneNumber(model.get("homePhone"));
					argAccAppRequest.setCurrentCellPhoneNumber(model.get("homePhone"));
				} else if(model.get("primaryLandline_CheckField").equalsIgnoreCase("Y")) {
					argAccAppRequest.setCurrentTelephoneNumber(model.get("homePhone"));
					argAccAppRequest.setCurrentCellPhoneNumber(model.get("cellPhone"));
				} else if(model.get("secondaryMobile_CheckField").equalsIgnoreCase("Y")) {
					argAccAppRequest.setCurrentTelephoneNumber(model.get("cellPhone"));
					argAccAppRequest.setCurrentCellPhoneNumber(model.get("cellPhone"));
				} else if(model.get("secondaryLandline_CheckField").equalsIgnoreCase("Y")) {
					argAccAppRequest.setCurrentTelephoneNumber(model.get("cellPhone"));
					argAccAppRequest.setCurrentCellPhoneNumber("");
				}
				
				//argAccAppRequest.setCurrentTelephoneNumber(model.get("homePhone"));
				//argAccAppRequest.setCurrentCellPhoneNumber(model.get("cellPhone"));
				argAccAppRequest.setCurrentEmailAddress(model.get("email"));
				argAccAppRequest.setEmailConsentFlag(model.get("receiveEmail"));
				argAccAppRequest.setEstmt_consent((model.get("estmt_consent")));
			}
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
		}
	}
	
	private void populateEmailInfoModel(CreditCardApplicationData argCreditCardData, AccountApplicationContactInfo argAccAppContactInfo)
	{
		String sMethod = "[populateEmailInfoModel()]";
		log.info(sMethod);

		BaseModel model;
		try
		{
			model = argCreditCardData.getModel(MODEL_CONTACTINFO_SCREEN);
			if (model != null)
			{
				argAccAppContactInfo.setPrimaryPhone(model.get("homePhone"));
				argAccAppContactInfo.setPrimaryMobile_CheckField(model.get("primaryMobile_CheckField"));
				argAccAppContactInfo.setPrimaryLandline_CheckField(model.get("primaryLandline_CheckField"));
				argAccAppContactInfo.setSecondaryMobile_CheckField(model.get("secondaryMobile_CheckField"));
				argAccAppContactInfo.setSecondaryLandline_CheckField(model.get("secondaryLandline_CheckField"));
			}
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
		}
	}
	
	private void populateMobilePaymentsModel(CreditCardApplicationData argCreditCardData, AccountApplicationRequestType argAccAppRequest) {
		String sMethod = "[populateMobilePaymentsModel()]";
		log.info(sMethod);

		BaseModel model;
		try
		{
			model = argCreditCardData.getModel(MODEL_MOBILEPAYMENTS_SCREEN);
			if (model != null)
			{
				argAccAppRequest.setEnstreamConsent(model.get("consentGranted"));
			}
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
		}
	}

	private String updateAddresslineOneWithHyphenSymbol (String suiteUnit, String addressline1) {
		String updatedAddressLine = EMPTY_STRING;
		
		if (suiteUnit != null && !suiteUnit.isEmpty())
		{
			updatedAddressLine += suiteUnit + HYPHEN_SYMBOL;
		}
		else if (addressline1 != null && !addressline1.startsWith(HYPHEN_SYMBOL)) {
			updatedAddressLine += HYPHEN_SYMBOL;
		}
		
		return updatedAddressLine;
	}
}