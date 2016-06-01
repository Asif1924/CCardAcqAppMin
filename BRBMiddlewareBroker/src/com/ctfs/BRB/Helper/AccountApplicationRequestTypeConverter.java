package com.ctfs.BRB.Helper;

import java.text.ParseException;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.XMLGregorianCalendar;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctc.ctfs.channel.accountacquisition.CountryType;
import com.ctc.ctfs.channel.accountacquisition.PlaceOfIssueType;
import com.ctc.ctfs.channel.accountacquisition.ProvinceStateType;
import com.ctc.ctfs.channel.accountacquisition.ProvinceType;
import com.ctfs.BRB.Model.AccountApplicationRequestWrapper;
import com.ctfs.BRB.Model.BaseModel;
import com.ctfs.BRB.Model.CreditCardApplicationData;
import com.ctfs.BRB.Helper.ApplicationConfiguration;
import com.google.gson.Gson;

public class AccountApplicationRequestTypeConverter
{
	private static final String ASC_CTMA="004477";
	private static final String ASC_ECTM="002277"; //New Asc for US3382 - CP Revitalization //ASC_ECTM="003377"; 
	private static final String ASC_DEFAULT="005577";
	private static final String TOGGLE_SECTION="CTFS_LOYALTY_TOGGLE_FLAG";
	private static final String TOGGLE_KEY="ECTM_COMPONENTS_TOGGLE_FLAG";
	
	public static enum InsuranceCodeTypes
	{
		N("N"), CP("CP"), IL("IL"), W4("W4");

		private final String name;

		private InsuranceCodeTypes(String name)
		{
			this.name = name;
		}

		public Boolean equalsName(String otherName)
		{
			return otherName == null ? false : name.equals(otherName);
		}

		public String toString()
		{
			return name;
		}
	}

	private ScoreIdentityExamMemento memento;

	static Logger log = Logger.getLogger(AccountApplicationRequestTypeConverter.class.getName());
	static final String EMPTY_STRING = "";

	public AccountApplicationRequestWrapper convert(CreditCardApplicationData argCreditCardApplicationData) throws Exception
	{

		String sMethod = "[convert()]";
		log.info(sMethod);
		
		AccountApplicationRequestType populatedAccountApplicationRequest = new com.ctc.ctfs.channel.accountacquisition.ObjectFactory().createAccountApplicationRequestType();

		populatedAccountApplicationRequest.setExternalReferenceId(new GUIDGenerator().getGUIDAsString());

		populatedAccountApplicationRequest.setChannelIndicator("WP");
		populatedAccountApplicationRequest.setCurrentCountry("CA");
		populatedAccountApplicationRequest.setPreviousCountry(CountryType.CA);
		populatedAccountApplicationRequest.setSupp1Country(CountryType.CA);
		populatedAccountApplicationRequest.setEmployerCountry(CountryType.CA);

		// From AccountApplication.xsd v1.14 this filed have been removed
		// populatedAccountApplicationRequest.etRoadsideOnRequestFlag("N");

		PersonalInformationModel(argCreditCardApplicationData, populatedAccountApplicationRequest);
		AdditionalInformationModel(argCreditCardApplicationData, populatedAccountApplicationRequest);
		IdentityVerificationModel(argCreditCardApplicationData, populatedAccountApplicationRequest);
		OverviewModel(argCreditCardApplicationData, populatedAccountApplicationRequest);
		
		AccountApplicationRequestWrapper accountRequestWrapper = 
			new AccountApplicationRequestWrapper(populatedAccountApplicationRequest);
		
		ConfirmationModel(argCreditCardApplicationData, accountRequestWrapper);

		try
		{
			String result = (new Gson()).toJson(populatedAccountApplicationRequest);
			log.info(sMethod + " accountApplicationRequest populated with data: " + result);
		}
		catch (Exception e)
		{
		}

		return accountRequestWrapper;
	}

	public AccountApplicationRequestWrapper convert(CreditCardApplicationData argCreditCardApplicationData, ScoreIdentityExamMemento memento) throws Exception
	{
		this.memento = memento;
		return convert(argCreditCardApplicationData);
	}

	private void OverviewModel(CreditCardApplicationData data, AccountApplicationRequestType ar)
	{
		String sMethod = "[OverviewModel()]";
		log.info(sMethod);
		try
		{
			BaseModel model;
			model = data.getModel(CreditCardApplicationData.MODEL_OVERVIEW);
			if (model != null)
			{
				if (model.get("promoCode") != null)
				{
					ar.setAgencyPromoCode(model.get("promoCode"));
				}
			}
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
		}
	}

	private void IdentityVerificationModel(CreditCardApplicationData data, AccountApplicationRequestType ar)
	{
		String sMethod = "[IdentityVerificationModel()]";
		log.info(sMethod);
		ar.setStoreNumber(500);
		ar.setAgentId("MQSYS");
		ar.setRequestedProductType("OMC");// was omp

		//Added (02/06/2014) -- (AA). Please ensure this block is removed later
		//Removed (03/27/2014) -- (AA). Removed for final BRBMiddlewareBroker build
		//Block Start
		//ar.setIdType("DR");
		//ar.setIdNumber("BRB");
		//ar.setPlaceOfIssue(PlaceOfIssueType.AB);
		//Block End

		ar.setSignatureFlag("Y");
		ar.setAgreedToTermsFlag("Y");
		ar.setSignatureMatchFlag("Y");
		try
		{
			BaseModel model;
			model = data.getModel(CreditCardApplicationData.MODEL_IDENTITY_VERIFICATION);
			if (model != null)
			{
				ar.setTUExamResult(model.get("tuExamResult"));
				ScoreIdentityExamMemento _memento = memento != null ? memento : new ScoreIdentityExamMemento();
				String sessionId = (_memento).getSessionId(data.getBrbTransactionId());
				ar.setTUSessionID(sessionId);
			}
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			//e.printStackTrace();
		}
	}

	private void AdditionalInformationModel(CreditCardApplicationData data, AccountApplicationRequestType ar) throws Exception
	{
		String sMethod = "[AdditionalInformationModel()]";
		log.info(sMethod);

		try
		{
			BaseModel model;
			model = data.getModel(CreditCardApplicationData.MODEL_ADDITIONAL_INFORMATION);
			if (model != null)
			{
				if (Boolean.parseBoolean(model.get("suplementaryYesNo")))
				{
					ar.setSupp1FirstName(model.get("firstName"));
					ar.setSupp1LastName(model.get("lastName"));
					ar.setSupp1MiddleInitial(model.get("initial"));
					ar.setSupp1Relationship(model.get("relationship"));
					try
					{
						XMLGregorianCalendar xgc;
						xgc = model.getGregorianDate("birthDate");
						ar.setSupp1DateOfBirth(xgc);
					}
					catch (DatatypeConfigurationException e)
					{
						log.warning(sMethod + " MODEL_SUP_CARD_REQUEST_DATA::birthDate Exception: " + e.getMessage());
						e.printStackTrace();
						throw e;
					}
					// ar.setSupp1AddrSameAsPrimary(Boolean.parseBoolean(model.get("sameAddressArea"))?"N":"Y");
					// should be
					ar.setSupp1AddrSameAsPrimary(model.get("sameAddressArea"));
					if (ar.getSupp1AddrSameAsPrimary().equals("N"))
					{
						String addressLine1 = "";
						if (model.get("suiteUnit") != null && model.get("suiteUnit").length() > 0)
						{
							addressLine1 += model.get("suiteUnit") + "-";
						}
						addressLine1 += model.get("streetNumber") + " " + model.get("streetName");
						ar.setSupp1AddressLine1(addressLine1);

						ar.setSupp1AddressLine2(model.get("addressLine2"));
						ar.setSupp1City(model.get("city"));
						ar.setSupp1Province(ProvinceStateType.valueOf(model.get("province")));
						ar.setSupp1PostalCode(model.get("postalCode"));
						ar.setSupp1TelephoneNumber(model.get("primaryPhone"));
					}
				}
				else
				{
					ar.setSupp1Country(null);
				}
				ar.setInsuranceAgreedFlag("N");
				ar.setInsuranceCode(InsuranceCodeTypes.N.toString());
				if (model != null && model.get("optionalInsurance_CP") != null && model.get("optionalInsurance_CP").equals("true"))
				{
					ar.setInsuranceAgreedFlag("Y");
					ar.setInsuranceCode(InsuranceCodeTypes.CP.toString());
					ar.setInsuranceSignatureFlag("Y");
				}
				else if (model != null && model.get("optionalInsurance_IW") != null && model.get("optionalInsurance_IW").equals("true"))
				{
					ar.setInsuranceAgreedFlag("Y");
					ar.setInsuranceCode(InsuranceCodeTypes.IL.toString());
					ar.setInsuranceSignatureFlag("Y");
				}
				else if (model != null && model.get("optionalInsurance_PA") != null && model.get("optionalInsurance_PA").equals("true"))
				{
					ar.setInsuranceAgreedFlag("Y");
					ar.setInsuranceCode(InsuranceCodeTypes.W4.toString());
					ar.setInsuranceSignatureFlag("Y");
				}
				if (ar.getInsuranceSignatureFlag() == "Y")
				{
					try
					{
						XMLGregorianCalendar xgc;
						xgc = model.getGregorianDate(new Date());
						ar.setInsuranceDateSigned(xgc);
					}
					catch (DatatypeConfigurationException e)
					{
						log.warning(sMethod + " MODEL_OPTIONAL_PRODUCTS_MODEL::InsuranceDateSigned Exception: " + e.getMessage());
						e.printStackTrace();
						throw e;
					}
				}
				try
				{
					XMLGregorianCalendar xgc;
					xgc = model.getGregorianDate(new Date());
					ar.setDateSigned(xgc);
				}
				catch (DatatypeConfigurationException e)
				{
					log.warning(sMethod + " MODEL_OPTIONAL_PRODUCTS_MODEL::setDateSigned Exception: " + e.getMessage());
					e.printStackTrace();
					throw e;
				}
			}
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
			throw e;
		}
	}

	private void PersonalInformationModel(CreditCardApplicationData data, AccountApplicationRequestType ar) throws Exception
	{
		String sMethod = "[PersonalInformationModel()]";
		log.info(sMethod);

		try
		{
			BaseModel model;
			model = data.getModel(CreditCardApplicationData.MODEL_PERSONAL_INFORMATION);
			if (model != null)
			{
				ar.setFirstName(model.get("firstName"));
				ar.setLastName(model.get("lastName"));
				ar.setMiddleInitial(model.get("initial"));

				String addressLine = model.get("addressline1");
				Pattern pattern = Pattern.compile(", \\d*.*");
				Matcher matcher = pattern.matcher(addressLine);
				String addressLine1 = "";
				if (model.get("suiteunit") != null && model.get("suiteunit").length() > 0)
				{
					addressLine1 += model.get("suiteunit") + "-";
				}
				if (matcher.find())
				{
					ar.setCurrentAddressLine1(addressLine1 + model.get("streetnumber") + " " + addressLine.substring(0, addressLine.indexOf(", ")));
					ar.setCurrentAddressLine2(matcher.group(0).replace(", ", ""));
				}
				else if (!model.get("streetnumber").isEmpty() && !addressLine.isEmpty())
				{
					ar.setCurrentAddressLine1(addressLine1 + model.get("streetnumber") + " " + addressLine);
				}

				ar.setCurrentCity(model.get("city"));
				ar.setCurrentEmailAddress(model.get("email"));
				ar.setCurrentPostalCode(model.get("postalcode"));
				ar.setCurrentProvince(ProvinceType.valueOf(model.get("province")));
				
				//US3103 - Sep 16 2014 Release
				
				ApplicationConfiguration.readApplicationConfiguration();
				Map toggleMap = ApplicationConfiguration.getCategoryKeys(TOGGLE_SECTION);
				log.info("Toggle is set to "+toggleMap.get(TOGGLE_KEY));
				log.info("Province is "+model.get("province"));
				
				if("OFF".equals(toggleMap.get(TOGGLE_KEY)))
				{
					if (ProvinceType.valueOf(model.get("province")) == ProvinceType.NS)
					{
						log.info("Setting ASC to " +ASC_CTMA +" for NS");
						ar.setLoyaltyMembershipNumber(model.get("loyaltyMembershipNumber"));
						ar.setAcquistionStrategyCode(ASC_CTMA);
					}
					else
					{
						log.info("Setting ASC to " +ASC_DEFAULT);
						ar.setAcquistionStrategyCode(ASC_DEFAULT); 
					} 
				}
				else if("ON_NS".equals(toggleMap.get(TOGGLE_KEY)))
				{
					if (ProvinceType.valueOf(model.get("province")) == ProvinceType.NS)
					{
						log.info("Setting ASC to " +ASC_ECTM + " for NS");
						ar.setLoyaltyMembershipNumber(model.get("loyaltyMembershipNumber"));
						ar.setAcquistionStrategyCode(ASC_ECTM);
					}
					else
					{
						log.info("Setting ASC to " +ASC_DEFAULT);
						ar.setAcquistionStrategyCode(ASC_DEFAULT); 
					} 
				}
				else if("ON_AOC".equals(toggleMap.get(TOGGLE_KEY)))
				{
					log.info("Setting ASC to " +ASC_ECTM + " for All Of Canada");
					ar.setLoyaltyMembershipNumber(model.get("loyaltyMembershipNumber"));
					ar.setAcquistionStrategyCode(ASC_ECTM);
				}
				else
				{
					log.info("Setting ASC to " +ASC_DEFAULT);
					ar.setAcquistionStrategyCode(ASC_DEFAULT);
				}
				
				ar.setCurrentTelephoneNumber(model.get("primaryPhone"));
				ar.setPreferedLanguage(model.get("correspondence"));
				ar.setEmailConsentFlag(model.get("receiveEmail"));
				ar.setCurrentAddressType(model.get("house"));

				Date date = getDate(model.getInt("sinceYears") + "-" + model.getInt("sinceMonths"));
				ar.setYearsAtCurrentAddress(getYearCount(date));
				ar.setMonthsAtCurrentAddress(getMonthCount(date));

				if (model.get("isPrevAddressExist") != null && Boolean.parseBoolean(model.get("isPrevAddressExist")))
				{
					String addressLine1Prev = "";
					if (model.get("suiteunit_prev") != null && model.get("suiteunit_prev").length() > 0)
					{
						addressLine1Prev += model.get("suiteunit_prev") + "-";
					}
					addressLine1Prev += model.get("streetnumber_prev") + " " + model.get("addressline1_prev");
					ar.setPreviousAddressLine1(addressLine1Prev);
					ar.setPreviousCity(model.get("city_prev"));
					try
					{
						ar.setPreviousProvinceState(ProvinceStateType.valueOf(model.get("province_prev")));
					}
					catch (Exception e)
					{
						log.warning(sMethod + "Previous address section - province_prev! Exception: " + e.getMessage());
					}
					ar.setPreviousPostalCode(model.get("postalcode_prev"));
				}
				ar.setMonthlyRentMortgageAmount(model.getInt("housingpayment"));

				String emplStatus = model.get("employmentType");
				String jobTitle = model.get("jobDescription");
				String emplCategory = model.get("jobTitle");
				String employerName = model.get("employerName");
				String employerCity = model.get("employerCity");
				int howLongYears = 0;
				int howLongMonthes = 0;
				if(model.getInt("howLongYears") > 0 && model.getInt("howLongMonthes") > 0){
					date = getDate(model.getInt("howLongYears") + "-" + model.getInt("howLongMonthes"));
					howLongYears = getYearCount(date);
					howLongMonthes = getMonthCount(date);
				}
				if (emplStatus.equals("R"))
				{
					emplStatus = "F";
					jobTitle = "RETIRED";
					emplCategory = "RT";
					employerName = "RETIRED";
					howLongYears = 99;
					howLongMonthes = 0;
				}

				ar.setEmployementStatus(emplStatus);
				ar.setJobTitle(jobTitle);
				ar.setEmployementCategory(emplCategory);
				ar.setEmployerName(employerName);
				ar.setEmployerCity(employerCity);
				ar.setYearsAtEmployement(howLongYears);
				ar.setMonthsAtEmployement(howLongMonthes);

				ar.setGrossAnnualIncome(model.getInt("grossIncome"));
				
				//US3960 WICI:new "Household Income" field 
				ar.setGrossAnnualHouseholdIncome(model.getInt("grossHouseholdIncome"));
				
				ar.setBankCardFlag(model.get("cardVISAMCAMEX"));
				ar.setBankLoanFlag(model.get("cardBankLoan"));
				ar.setStoreCardFlag(model.get("cardStoreCard"));
				String title = model.get("title");
				if (title == null)
				{
					title = "MR";
				}
				String gender = "M";
				if (!title.equals("MR"))
				{
					gender = "F";
				}
				ar.setApplicantGender(gender);
				ar.setChequingAccountFlag(model.get("cardChequingAcct"));
				ar.setGasCardFlag(model.get("cardGasCard"));
				ar.setSavingsAccountFlag(model.get("cardSavingsAcct"));
				ar.setSin(model.get("sin"));

				try
				{
					XMLGregorianCalendar xgc;
					xgc = model.getGregorianDate("birthDate");
					ar.setDateOfBirth(xgc);
				}
				catch (DatatypeConfigurationException e)
				{
					log.warning(sMethod + " MODEL_PERSONAL_DATA::birthDate Exception: " + e.getMessage());
					e.printStackTrace();
					throw e;
				}
			}
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
			throw e;
		}
	}
	private void ConfirmationModel(CreditCardApplicationData data, AccountApplicationRequestWrapper accountRequestWrapper)
	{
		String sMethod = "[confirmation()]";
		log.info(sMethod);
		try
		{
			BaseModel model;
			model = data.getModel(CreditCardApplicationData.MODEL_CONFIRMATION);
			if (model != null)
			{
				accountRequestWrapper.setShouldUpdateCTProfile(model.getBoolean("updateCTProfileYesNo"));				
			}
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());
			e.printStackTrace();
		}
	}

	private static Date getDate(String arg) throws ParseException
	{
		Date date = new Date();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM");
		df.setLenient(false);
		try
		{
			date = df.parse(arg);
		}
		catch (ParseException e)
		{
			e.printStackTrace();
			throw e;
		}
		return date;
	}

	private static int getYearCount(Date d)
	{
		return getDiffMonth(d) / 12;
	}

	private static int getMonthCount(Date d)
	{
		return getDiffMonth(d) % 12;
	}

	private static int getDiffMonth(Date d)
	{
		Calendar cal = Calendar.getInstance();
		cal.setTime(new Date());
		int minuendMonth = cal.get(Calendar.MONTH);
		int minuendYear = cal.get(Calendar.YEAR);
		cal.setTime(d);
		int subtrahendMonth = cal.get(Calendar.MONTH);
		int subtrahendYear = cal.get(Calendar.YEAR);
		// DE1549
		return ((((minuendYear - subtrahendYear) * (cal.getMaximum(Calendar.MONTH) + 1))) + (minuendMonth - subtrahendMonth));
	}

}
