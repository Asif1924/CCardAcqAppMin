package com.ctfs.WICI.Helper;

import java.util.Map;
import java.util.logging.Logger;
import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.XMLGregorianCalendar;

import org.apache.commons.codec.binary.Base64;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctc.ctfs.channel.accountacquisition.CountryType;
import com.ctc.ctfs.channel.accountacquisition.PlaceOfIssueType;
import com.ctc.ctfs.channel.accountacquisition.ProvinceStateType;
import com.ctc.ctfs.channel.accountacquisition.ProvinceType;
import com.ctfs.WICI.Servlet.Model.BaseModel;
import com.ctfs.WICI.Servlet.Model.CreditCardApplicationData;
import com.ctfs.WICI.Helper.ApplicationConfiguration;

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
	private static final String MODEL_EMAILINFO_SCREEN = "emailInfoScreen";
	private static final String MODEL_MOBILEPAYMENTS_SCREEN = "mobilePaymentsScreen";
	private static final String HYPHEN_SYMBOL = "-";
	private static final String EMPTY_STRING = "";
	private static final String ASC_ECTM="9977"; //New Asc added for US4926 - Instant Issuance WICI - TSYS Enstream Integration //ASC_ECTM="2277"; //ASC_ECTM="3377";  
												 // US5244 - Bill 134 - New ASCs
	private static final String ASC_DEFAULT="9977"; // US5244 - Bill 134 - New ASCs
	private static final String TOGGLE_SECTION="CTFS_LOYALTY_TOGGLE_FLAG";
	private static final String TOGGLE_KEY="ECTM_COMPONENTS_TOGGLE_FLAG";
	
	

	static Logger log = Logger.getLogger(AccountApplicationRequestTypeConverter.class.getName());

	public AccountApplicationRequestType createAccountApplicationRequestFromCreditCardApplicationData(CreditCardApplicationData argCreditCardApplicationData,String tabSerialNum,boolean authFlag)
    {

                    String sMethod = "[createAccountApplicationRequestFromCreditCardApplicationData()]";
                    log.info(sMethod);

                    com.ctc.ctfs.channel.accountacquisition.ObjectFactory objectFactory = new com.ctc.ctfs.channel.accountacquisition.ObjectFactory();
                    AccountApplicationRequestType populatedAccountApplicationRequest = objectFactory.createAccountApplicationRequestType();

                    GUIDGenerator guidGenerator = new GUIDGenerator();
                    populatedAccountApplicationRequest.setExternalReferenceId(guidGenerator.getGUIDAsString());
                    populatedAccountApplicationRequest.setTabSerialId(tabSerialNum);
                    
                    //populatedAccountApplicationRequest.setChannelIndicator("IP");
                    //log.info("employerID:" + (argCreditCardApplicationData.getModel(MODEL_LOGIN_SCREEN)).get("employerID"));
                    //US3162  
                    
                    /* Before MARK IC Chenal     
                      if ("E".equalsIgnoreCase((argCreditCardApplicationData.getModel(MODEL_LOGIN_SCREEN)).get("employerID")))
                        {
                                       populatedAccountApplicationRequest.setChannelIndicator("DP");
                        }
                        else
                        {
                                       populatedAccountApplicationRequest.setChannelIndicator("IP");
                        } 
                    
                    */ 
                
                    //US4194
                    String  storeNumber = (argCreditCardApplicationData.getModel(MODEL_LOGIN_SCREEN)).get("locationFieldID") != null ? (argCreditCardApplicationData.getModel(MODEL_LOGIN_SCREEN)).get("locationFieldID") : "0";
                    
                    if(storeNumber.matches(".*[A-Za-z].*")){
                    	populatedAccountApplicationRequest.setChannelIndicator("HB");
                    }else{
                    	double storeNo = Double.parseDouble(storeNumber);
                        log.info(sMethod + " storeNo: " + storeNo);
                        // US4432
                        if( storeNo >= 4000 && storeNo <= 5999 ) {
                        	populatedAccountApplicationRequest.setChannelIndicator("FG");
                        }
                        else if( storeNo >= 6000 && storeNo <= 6999 ) {
        			        populatedAccountApplicationRequest.setChannelIndicator("IC");	
        			    } 
                        else if( storeNo >= 1000 && storeNo <= 1999 && !("E".equalsIgnoreCase((argCreditCardApplicationData.getModel(MODEL_LOGIN_SCREEN)).get("employerID")))){
        			        populatedAccountApplicationRequest.setChannelIndicator("GB");
        			    }
                        else if( storeNo == 500 &&  !("E".equalsIgnoreCase((argCreditCardApplicationData.getModel(MODEL_LOGIN_SCREEN)).get("employerID")))){
        			        populatedAccountApplicationRequest.setChannelIndicator("OS");
        			    }
        			    else if ("E".equalsIgnoreCase((argCreditCardApplicationData.getModel(MODEL_LOGIN_SCREEN)).get("employerID"))) {
        			    	populatedAccountApplicationRequest.setChannelIndicator("DP");
                        }
                        else {
                            populatedAccountApplicationRequest.setChannelIndicator("IP");
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
                                                    populatedAccountApplicationRequest.setSupp1Country(CountryType.CA);
                                    }
                    }
                    catch (Exception e)
                    {
                                    log.warning(sMethod + " Exception: " + e.getMessage());
                                    e.printStackTrace();
                    }
                    populatedAccountApplicationRequest.setEmployerCountry(CountryType.CA);

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

    private void populateOptionalProductsModel(CreditCardApplicationData argCreditCardData, AccountApplicationRequestType argAccAppRequest)
    {
                    String sMethod = "[OptionalProductsModel()]";
                    log.info(sMethod);

                    BaseModel model;
                    try
                    {
                                    model = argCreditCardData.getModel(MODEL_OPTIONAL_PRODUCTS_MODEL);
                                    if (model == null)
                                    {
                                                    return;
                                    }

                                    argAccAppRequest.setInsuranceAgreedFlag(model.get("insuranceAgreedFlag"));
                                    argAccAppRequest.setInsuranceCode(model.get("insuranceCode"));

                                    if (("Y").equalsIgnoreCase(argAccAppRequest.getInsuranceAgreedFlag()))
                                    {
                                                    argAccAppRequest.setInsuranceSignatureFlag("Y");

                                                    // (AA): This decoding is necessary before setting the value
                                                    // because
                                                    // apparently, the XSD takes care of BASE64 Encoding
                                                    // argAccAppRequest.setInsuranceSignature(model.getBase64EncodedJPGByteArray("userSingnature"));
                                                    byte[] decodedBase64Image = Base64.decodeBase64(model.getBase64EncodedJPGByteArray("userSingnature"));
                                                    argAccAppRequest.setInsuranceSignature(decodedBase64Image);

                                                    try
                                                    {
                                                                    XMLGregorianCalendar xgc;
                                                                    xgc = model.getGregorianDate("signDate");
                                                                    argAccAppRequest.setInsuranceDateSigned(xgc);
                                                    }
                                                    catch (DatatypeConfigurationException e)
                                                    {
                                                                    log.warning(sMethod + " MODEL_OPTIONAL_PRODUCTS_MODEL::signDate Exception: " + e.getMessage());
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

    
	private void populateSignatureModel(CreditCardApplicationData argCreditCardData, AccountApplicationRequestType argAccAppRequest)
	{
		String sMethod = "[SignatureModel()]";
		log.info(sMethod + "::called");

		BaseModel model;
		try
		{
			model = argCreditCardData.getModel(MODEL_SIGNATURE_MODEL);
			if (model != null)
			{
				argAccAppRequest.setAgreedToTermsFlag("Y");

				// (AA): This decoding is necessary before setting the value
				// because apparently, the XSD takes care of BASE64 Encoding
				// argAccAppRequest.setApplicantSignature(model.getBase64EncodedJPGByteArray("userSingnature"));
				byte[] decodedBase64Image = Base64.decodeBase64(model.getBase64EncodedJPGByteArray("userSingnature"));
				argAccAppRequest.setApplicantSignature(decodedBase64Image);

				argAccAppRequest.setSignatureFlag("Y");
				argAccAppRequest.setSignatureMatchFlag("Y");

				try
				{
					XMLGregorianCalendar xgc;
					xgc = model.getGregorianDate("signDate");
					argAccAppRequest.setDateSigned(xgc);
				}
				catch (DatatypeConfigurationException e)
				{
					log.warning(sMethod + " MODEL_SIGNATURE_MODEL::signDate Exception: " + e.getMessage());
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

				try
				{
					XMLGregorianCalendar xgc;
					xgc = model.getGregorianDate("birthDate");
					argAccAppRequest.setSupp1DateOfBirth(xgc);
				}
				catch (DatatypeConfigurationException e)
				{
					log.warning(sMethod + " MODEL_SUP_CARD_REQUEST_DATA::birthDate Exception: " + e.getMessage());
					e.printStackTrace();
				}

				argAccAppRequest.setSupp1AddrSameAsPrimary(model.get("sameAddressYesNo"));
				argAccAppRequest.setSupp1TelephoneNumber(model.get("phone"));
				
				if (model.get("sameAddressYesNo").equals("N"))
				{

					String addressLine1 = updateAddresslineOneWithHyphenSymbol(
							model.get("suiteUnit"),
							model.get("addressLine1"));
					
					addressLine1 += model.get("streetNumber") + " " + model.get("addressLine1");
					argAccAppRequest.setSupp1AddressLine1(addressLine1);

					argAccAppRequest.setSupp1AddressLine2(model.get("addressLine2"));
					argAccAppRequest.setSupp1City(model.get("city"));
					argAccAppRequest.setSupp1Province(ProvinceStateType.valueOf(model.get("province")));
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

	private void populateFinancialDataModel(CreditCardApplicationData argCreditCardData, AccountApplicationRequestType argAccAppRequest)
	{
		String sMethod = "[FinancialDataModel()]";
		log.info(sMethod);

		BaseModel model;
		try
		{
			model = argCreditCardData.getModel(MODEL_FINANCIAL_DATA);
			if (model != null)
			{

				String emplStatus = model.get("employmentType");
				String jobTitle = model.get("jobTitle");
				String emplCategory = model.get("jobCategory");
				String employerName = model.get("employerName");
				String employerPhone = model.get("employerPhone");
				String employerCity = model.get("employerCity");
				int howLongYears = model.getInt("howLongYears");
				int howLongMonthes = model.getInt("howLongMonthes");
				if (emplStatus.equals("R"))
				{
					emplStatus = "F";
					jobTitle = "RETIRED";
					emplCategory = "RT";
					employerName = "RETIRED";
					employerPhone = "";
					howLongYears = 99;
					howLongMonthes = 0;
					employerCity = argCreditCardData.getModel(MODEL_PERSONAL_DATA2_ADDRESS).get("city");
				}
				argAccAppRequest.setEmployementStatus(emplStatus);
				argAccAppRequest.setJobTitle(jobTitle);
				argAccAppRequest.setEmployementCategory(emplCategory);
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
			}
		}
		catch (Exception e)
		{
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
				
				addressLine1 += model.get("streetnumber") + " " + model.get("addressline1");
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
				
				addressLine1Prev += model.get("streetnumber_prev") + " " + model.get("addressline1_prev");
				argAccAppRequest.setPreviousAddressLine1(addressLine1Prev);

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

				try
				{
					XMLGregorianCalendar xgc;
					xgc = model.getGregorianDate("birthDate");
					argAccAppRequest.setDateOfBirth(xgc);
				}
				catch (DatatypeConfigurationException e)
				{
					log.warning(sMethod + " MODEL_PERSONAL_DATA::birthDate Exception: " + e.getMessage());
					e.printStackTrace();
				}

				argAccAppRequest.setIdType(model.get("idtype"));
				argAccAppRequest.setIdNumber(model.get("idnumbers"));
				argAccAppRequest.setPlaceOfIssue(PlaceOfIssueType.valueOf(model.get("placeofissue")));
				argAccAppRequest.setPreferedLanguage(model.get("correspondence"));

				// US4365
				if(model.get("idExpiryDate") != null) {
					try
					{
						XMLGregorianCalendar xgc;
						xgc = model.getGregorianDate("idExpiryDate");
						argAccAppRequest.setIDExpiryDate(xgc);
					}
					catch (DatatypeConfigurationException e)
					{
						log.warning(sMethod + " MODEL_PERSONAL_DATA::expiryDate Exception: " + e.getMessage());
						e.printStackTrace();
					}
				}
				String title = model.get("title");
				// US5073 WICI - Update Gender Mapping
				String gender = null;
				if(title != null) {
					if (title.equals("MR")) {
						gender = "M";
					} else if (title.equals("MRS") || title.equals("MISS") || title.equals("MS")) {
						gender = "F";
					}
				}
				argAccAppRequest.setApplicantGender(gender);
				argAccAppRequest.setCurrentTelephoneNumber(model.get("homePhone"));
				argAccAppRequest.setCurrentCellPhoneNumber(model.get("cellPhone"));
			    //argAccAppRequest.setEnstreamConsent(model.get("consentGranted"));
				
				
				// Moved to EmailInfo model
				// argAccAppRequest.setCurrentEmailAddress(model.get("email"));
				// argAccAppRequest.setEmailConsentFlag(model.get("receiveEmail"));
				
				argAccAppRequest.setRequestedCreditLimit(model.getInt("requestedCreditLimit")); //US3270 Feb 17th, 2015
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
			if (model != null)
			{
				agency = model.get("employerID");
				argAccAppRequest.setStoreNumber(model.get("locationFieldID"));
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
					log.info("Setting ASC to " +ASC_ECTM + " for All Of Canada");
					argAccAppRequest.setAcquistionStrategyCode("0" + agency.toUpperCase() + ASC_ECTM);  //US3012 - changed agency.toUpperCase()
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

		BaseModel model;
		try
		{
			model = argCreditCardData.getModel(MODEL_CHOOSE_PRODUCT);
			if (model != null)
			{
				argAccAppRequest.setRequestedProductType(model.get("productCard"));
				argAccAppRequest.setAgencyPromoCode(model.get("agencyPromoCode"));
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
			model = argCreditCardData.getModel(MODEL_EMAILINFO_SCREEN);
			if (model != null)
			{
				argAccAppRequest.setCurrentEmailAddress(model.get("email"));
				argAccAppRequest.setEmailConsentFlag(model.get("receiveEmail"));
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
