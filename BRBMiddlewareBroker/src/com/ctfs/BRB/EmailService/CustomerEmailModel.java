package com.ctfs.BRB.EmailService;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import com.ctc.ctfs.channel.accountacquisition.ProvinceType;
import com.ctfs.BRB.Helper.AccountApplicationRequestTypeConverter;
import com.ctfs.BRB.Model.BaseModel;
import com.exacttarget.wsdl.partnerapi.Attribute;
import java.util.Date;

public class CustomerEmailModel extends BaseModel
{
	protected final static String NoInsuranceCode = "0";
	protected final static String YesInsuranceCode = "1";
	protected final static String LanguageAttribute = "CustomerKey";
	protected final static String ProductTypeAttribute = "ProductType";	
	protected final static String AppStatusAttribute = "AppStatus";	
	protected final static String CustomerNameAttribute = "CustomerName";
	protected final static String CreditLimitAttribute = "creditLimit";
	protected final static String AprAttribute = "apr";
	protected final static String CashAprAttribute = "cashApr";
	protected final static String ProtectionAdvantageAttribute = "OP_ProtectionAdvantage";
	protected final static String CreditProtectorAttribute = "OP_CreditProtector";
	protected final static String IdentityWatchClassicAttribute = "OP_IdentityWatchClassic";
	//protected final static String ProductTypeValue = "OMC";
	protected final static String ProductTypeValue = "respCardType";
	protected final static String AppStatusValue = "appStatus";
	
	// US5242	Bill 134 - BRB - Updated emails
	protected final static String ApplicationDate = "applicationDate";
	protected final static String CustAddressPart1 = "CustAddressPart1";
	protected final static String CustAddressPart2  = "CustAddressPart2";

	protected String creditLimit;
	protected String apr;
	protected String cashAPR;
	protected String protectionAdvantage;
	protected String creditProtector;
	protected String identityWatchClassic;		
	protected String customerName;	
	protected String customerKey;
	protected int clientId;		
	protected List <String> emails;
	protected String respCardType;
	protected String loyaltyMembershipNumber;
	protected String appStatus;
	
	// US5242	Bill 134 - BRB - Updated emails
	protected String addressLine1;
	protected String addressLine2;
	protected String city;
	protected ProvinceType province;
	protected String postalCode;
	protected String applicationDate;

	public void initializeModel (			
			String creditLimit,
			String apr,
			String cashAPR,			
			String firstName,
			String lastName,
			String insuranceCode,			
			int clientId,
			String preferedLanguage,			
			List <String> emails,
			String respCardType,
			String loyaltyMembershipNumber,
			String appStatus,
			String addressLine1,
			String addressLine2,
			String city,
			ProvinceType province,
			String postalCode
			){		
		this.creditLimit = creditLimit;
		this.apr = apr;
		this.cashAPR = cashAPR;
		this.customerName = String.format("%s %s", firstName, lastName);
		this.clientId = clientId;		
		this.emails = emails;
		this.respCardType = respCardType;
		this.loyaltyMembershipNumber = loyaltyMembershipNumber;
		this.appStatus = appStatus; 
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.city = city;
		this.province = province;
		this.postalCode = postalCode;
		
		processPreferedLanguage (preferedLanguage);
		processInsuranceData (insuranceCode);
		processApplicationDate ();
	}

	// US5242	Bill 134 - BRB - Updated emails
	private void processApplicationDate() {
		String pattern = "yyyy-MM-dd";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		Date date = new Date();
		this.setApplicationDate(simpleDateFormat.format(date));
	}

	private void processPreferedLanguage(String preferedLanguage)
	{
		if (preferedLanguage.toUpperCase().equals("E")){
			this.setCustomerKey(EmailLanguageType.English.toString());
		}
		else {
			this.setCustomerKey(EmailLanguageType.French.toString());
		}
	}
	
	private void processInsuranceData(String insuranceCode)
	{
		this.protectionAdvantage = this.creditProtector = this.identityWatchClassic = NoInsuranceCode;
		
		if (AccountApplicationRequestTypeConverter.InsuranceCodeTypes.CP.equalsName(insuranceCode)) {
			creditProtector = YesInsuranceCode;
		} else if (AccountApplicationRequestTypeConverter.InsuranceCodeTypes.IL.equalsName(insuranceCode)){
			identityWatchClassic = YesInsuranceCode;
		} else if (AccountApplicationRequestTypeConverter.InsuranceCodeTypes.W4.equalsName(insuranceCode)){
			protectionAdvantage = YesInsuranceCode;
		}					
	}

	/**
	 * @return the customerName
	 */
	public String getCustomerName()
	{
		return customerName;
	}
	/**
	 * @param customerName the customerName to set
	 */
	public void setCustomerName(String customerName)
	{
		this.customerName = customerName;
	}
	/**
	 * @return the creditLimit
	 */
	public String getCreditLimit()
	{
		return creditLimit;
	}
	/**
	 * @param creditLimit the creditLimit to set
	 */
	public void setCreditLimit(String creditLimit)
	{
		this.creditLimit = creditLimit;
	}
	/**
	 * @return the apr
	 */
	public String getApr()
	{
		return apr;
	}
	/**
	 * @param apr the apr to set
	 */
	public void setApr(String apr)
	{
		this.apr = apr;
	}
	/**
	 * @return the cashAPR
	 */
	public String getCashAPR()
	{
		return cashAPR;
	}
	/**
	 * @param cashAPR the cashAPR to set
	 */
	public void setCashAPR(String cashAPR)
	{
		this.cashAPR = cashAPR;
	}
	
	/**
	 * @return the protectionAdvantage
	 */
	public String getProtectionAdvantage()
	{
		return protectionAdvantage;
	}
	/**
	 * @param protectionAdvantage the protectionAdvantage to set
	 */
	public void setProtectionAdvantage(String protectionAdvantage)
	{
		this.protectionAdvantage = protectionAdvantage;
	}
	/**
	 * @return the creditProtector
	 */
	public String getCreditProtector()
	{
		return creditProtector;
	}
	/**
	 * @param creditProtector the creditProtector to set
	 */
	public void setCreditProtector(String creditProtector)
	{
		this.creditProtector = creditProtector;
	}
	/**
	 * @return the identityWatchClassic
	 */
	public String getIdentityWatchClassic()
	{
		return identityWatchClassic;
	}
	/**
	 * @param identityWatchClassic the identityWatchClassic to set
	 */
	public void setIdentityWatchClassic(String identityWatchClassic)
	{
		this.identityWatchClassic = identityWatchClassic;
	}	

	/**
	 * @return the customerKey
	 */
	public String getCustomerKey()
	{
		return customerKey;
	}

	/**
	 * @param customerKey the customerKey to set
	 */
	public void setCustomerKey(String customerKey)
	{
		this.customerKey = customerKey;
	}

	/**
	 * @return the clientId
	 */
	public int getClientId()
	{
		return clientId;
	}

	/**
	 * @param clientId the clientId to set
	 */
	public void setClientId(int clientId)
	{
		this.clientId = clientId;
	}

	/**
	 * @return the emails
	 */
	public List<String> getEmails()
	{
		if (emails == null) {		
			emails = new ArrayList <String>();
		}
		
		return emails;
	}	

	/**
	 * @param emails the emails to set
	 */
	public void setEmails(List<String> emails)
	{
		this.emails = emails;
	}
	
	/**
	 * @return the respCardType
	 */
	public String getRespCardType() {
		return respCardType;
	}

	/**
	 * @param respCardType the respCardType to set
	 */
	public void setRespCardType(String respCardType) {
		this.respCardType = respCardType;
	}
	
	public Boolean isModelValid () {
		if (customerName.isEmpty() || 
				clientId == 0 ||
				customerKey.isEmpty() ||
				emails == null ||
				emails.isEmpty()) {
			
			return false;
		}
		
		return true;
	}
	
	public List<Attribute> getAttributeCollection () {
		List<Attribute> attributes = new ArrayList<Attribute>();
		
		Attribute productType = new Attribute();
		productType.setName(ProductTypeAttribute);
//		productType.setValue(ProductTypeValue);
		productType.setValue(getRespCardType());
		attributes.add(productType);
		
		Attribute appStatus = new Attribute();
		appStatus.setName(AppStatusAttribute);
//		productType.setValue(ProductTypeValue);
		appStatus.setValue(getAppStatus());
		attributes.add(appStatus);
		
		Attribute customerName = new Attribute();
		customerName.setName(CustomerNameAttribute);
		customerName.setValue(getCustomerName());
		attributes.add(customerName);

		Attribute creditLimit = new Attribute();
		creditLimit.setName(CreditLimitAttribute);
		creditLimit.setValue(getCreditLimit());
		attributes.add(creditLimit);

		Attribute apr = new Attribute();
		apr.setName(AprAttribute);
		apr.setValue(getApr());
		attributes.add(apr);

		Attribute cashApr = new Attribute();
		cashApr.setName(CashAprAttribute);
		cashApr.setValue(getCashAPR());
		attributes.add(cashApr);

		Attribute protectionAdvantage = new Attribute();
		protectionAdvantage.setName(ProtectionAdvantageAttribute);
		protectionAdvantage.setValue(getProtectionAdvantage());
		attributes.add(protectionAdvantage);

		Attribute creditProtector = new Attribute();
		creditProtector.setName(CreditProtectorAttribute);
		creditProtector.setValue(getCreditProtector());
		attributes.add(creditProtector);

		Attribute identityWatchClassic = new Attribute();
		identityWatchClassic.setName(IdentityWatchClassicAttribute);
		identityWatchClassic.setValue(getIdentityWatchClassic());
		attributes.add(identityWatchClassic);

		StringBuilder address = new StringBuilder(addressLine1);
		if (addressLine2 != null) {
			address.append(" ");
			address.append(addressLine2);
		}
		Attribute addressPart1 = new Attribute();
		addressPart1.setName(CustAddressPart1);
		addressPart1.setValue(address.toString());
		attributes.add(addressPart1);

		Attribute addressPart2 = new Attribute();
		addressPart2.setName(CustAddressPart2);
		addressPart2.setValue(city + ", " + province + ", " + postalCode);
		attributes.add(addressPart2);

		Attribute applicationDate = new Attribute();
		applicationDate.setName(ApplicationDate);
		applicationDate.setValue(getApplicationDate());
		attributes.add(applicationDate);

		return attributes;
	}

	public String getLoyaltyMembershipNumber() {
		return loyaltyMembershipNumber;
	}

	public void setLoyaltyMembershipNumber(String loyaltyMembershipNumber) {
		this.loyaltyMembershipNumber = loyaltyMembershipNumber;
	}

	public String getAppStatus() {
		return appStatus;
	}

	public void setAppStatus(String appStatus) {
		this.appStatus = appStatus;
	}

	// US5242	Bill 134 - BRB - Updated emails
	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public ProvinceType getProvince() {
		return province;
	}

	public void setProvince(ProvinceType province) {
		this.province = province;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public String getApplicationDate() {
		return applicationDate;
	}

	public void setApplicationDate(String applicationDate) {
		this.applicationDate = applicationDate;
	}
}
