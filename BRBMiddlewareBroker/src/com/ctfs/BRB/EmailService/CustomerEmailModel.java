package com.ctfs.BRB.EmailService;

import java.util.ArrayList;
import java.util.List;

import com.ctfs.BRB.Helper.AccountApplicationRequestTypeConverter;
import com.ctfs.BRB.Model.BaseModel;
import com.exacttarget.wsdl.partnerapi.Attribute;

public class CustomerEmailModel extends BaseModel
{
	protected final static String NoInsuranceCode = "0";
	protected final static String YesInsuranceCode = "1";
	protected final static String LanguageAttribute = "CustomerKey";
	protected final static String ProductTypeAttribute = "ProductType";	
	protected final static String CustomerNameAttribute = "CustomerName";
	protected final static String CreditLimitAttribute = "creditLimit";
	protected final static String AprAttribute = "apr";
	protected final static String CashAprAttribute = "cashApr";
	protected final static String ProtectionAdvantageAttribute = "OP_ProtectionAdvantage";
	protected final static String CreditProtectorAttribute = "OP_CreditProtector";
	protected final static String IdentityWatchClassicAttribute = "OP_IdentityWatchClassic";
	//protected final static String ProductTypeValue = "OMC";
	protected final static String ProductTypeValue = "respCardType";
		
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
			String respCardType){		
		this.creditLimit = creditLimit;
		this.apr = apr;
		this.cashAPR = cashAPR;
		this.customerName = String.format("%s %s", firstName, lastName);			
		this.clientId = clientId;		
		this.emails = emails;
		this.respCardType = respCardType;
		
		processPreferedLanguage (preferedLanguage);
		processInsuranceData (insuranceCode);	
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
		productType.setValue(getRespCardType());
		attributes.add(productType);
		
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
		
		return attributes;
	}
}
