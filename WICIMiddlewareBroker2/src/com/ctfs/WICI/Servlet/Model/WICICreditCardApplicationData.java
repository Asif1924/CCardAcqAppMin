package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;
import java.util.List;
import java.util.logging.Logger;

import com.ctfs.WICI.Model.WICIAuthfieldValue;

//@JsonIgnoreProperties(ignoreUnknown=true)
public class WICICreditCardApplicationData implements Serializable {

	private static final long serialVersionUID = 1L;
	static Logger log = Logger.getLogger(WICICreditCardApplicationData.class.getName());
	
	private String requestBodyStr;
	private LoginScreenData loginScreenData;
	private ChooseProductData chooseProductData;
	private PersonalData personalData;
	private PersonalData2_Address personalData2_Address;
	private FinancialData financialData;
	private SupCardRequestData supCardRequestData;
	private SignatureData signatureData;
	private OptionalProducts optionalProductData;
	private ContactInfoScreen contactInfoScreenData;
	private MobilePaymentsData mobilePaymentsScreenData;
	private WICIAuthfieldValue wiciAuthfieldValue;
	private SummaryData summaryData;
	public List<BaseModel> models;
	
	/**
	 * @return the loginScreenData
	 */
	public LoginScreenData getLoginScreenData() {
		return loginScreenData;
	}

	/**
	 * @param loginScreenData the loginScreenData to set
	 */
	public void setLoginScreenData(LoginScreenData loginScreenData) {
		this.loginScreenData = loginScreenData;
	}

	/**
	 * @return the chooseProductData
	 */
	public ChooseProductData getChooseProductData() {
		return chooseProductData;
	}

	/**
	 * @param chooseProductData the chooseProductData to set
	 */
	public void setChooseProductData(ChooseProductData chooseProductData) {
		this.chooseProductData = chooseProductData;
	}

	/**
	 * @return the personalData
	 */
	public PersonalData getPersonalData() {
		return personalData;
	}

	/**
	 * @param personalData the personalData to set
	 */
	public void setPersonalData(PersonalData personalData) {
		this.personalData = personalData;
	}

	/**
	 * @return the financialData
	 */
	public FinancialData getFinancialData() {
		return financialData;
	}

	/**
	 * @param financialData the financialData to set
	 */
	public void setFinancialData(FinancialData financialData) {
		this.financialData = financialData;
	}

	/**
	 * @return the signatureData
	 */
	public SignatureData getSignatureData() {
		return signatureData;
	}

	/**
	 * @param signatureData the signatureData to set
	 */
	public void setSignatureData(SignatureData signatureData) {
		this.signatureData = signatureData;
	}

	/**
	 * @return the optionalProductData
	 */
	public OptionalProducts getOptionalProductData() {
		return optionalProductData;
	}

	/**
	 * @param optionalProductData the optionalProductData to set
	 */
	public void setOptionalProductData(OptionalProducts optionalProductData) {
		this.optionalProductData = optionalProductData;
	}

	/**
	 * @return the contactInfoScreenData
	 */
	public ContactInfoScreen getContactInfoScreenData() {
		return contactInfoScreenData;
	}

	/**
	 * @param contactInfoScreenData the contactInfoScreenData to set
	 */
	public void setContactInfoScreenData(ContactInfoScreen contactInfoScreenData) {
		this.contactInfoScreenData = contactInfoScreenData;
	}

	/**
	 * @return the mobilePaymentsScreenData
	 */
	public MobilePaymentsData getMobilePaymentsScreenData() {
		return mobilePaymentsScreenData;
	}

	/**
	 * @param mobilePaymentsScreenData the mobilePaymentsScreenData to set
	 */
	public void setMobilePaymentsScreenData(
			MobilePaymentsData mobilePaymentsScreenData) {
		this.mobilePaymentsScreenData = mobilePaymentsScreenData;
	}
	
	public String getRequestBodyStr() {
		return requestBodyStr;
	}

	public void setRequestBodyStr(String requestBodyStr) {
		this.requestBodyStr = requestBodyStr;
	}

	/**
	 * @return the summaryData
	 */
	public SummaryData getSummaryData() {
		return summaryData;
	}


	/**
	 * @param summaryData the summaryData to set
	 */
	public void setSummaryData(SummaryData summaryData) {
		this.summaryData = summaryData;
	}


	/**
	 * @return the personalData2_Address
	 */
	public PersonalData2_Address getPersonalData2_Address() {
		return personalData2_Address;
	}


	/**
	 * @param personalData2_Address the personalData2_Address to set
	 */
	public void setPersonalData2_Address(PersonalData2_Address personalData2_Address) {
		this.personalData2_Address = personalData2_Address;
	}


	/**
	 * @return the supCardRequestData
	 */
	public SupCardRequestData getSupCardRequestData() {
		return supCardRequestData;
	}


	/**
	 * @param supCardRequestData the supCardRequestData to set
	 */
	public void setSupCardRequestData(SupCardRequestData supCardRequestData) {
		this.supCardRequestData = supCardRequestData;
	}

	public List<BaseModel> getModels() {
		return models;
	}

	public void setModels(List<BaseModel> models) {
		this.models = models;
	}

	/**
	 * @return the wiciAuthfieldValue
	 */
	public WICIAuthfieldValue getWiciAuthfieldValue() {
		return wiciAuthfieldValue;
	}

	/**
	 * @param wiciAuthfieldValue the wiciAuthfieldValue to set
	 */
	public void setWiciAuthfieldValue(WICIAuthfieldValue wiciAuthfieldValue) {
		this.wiciAuthfieldValue = wiciAuthfieldValue;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "WICICreditCardApplicationData [requestBodyStr="
				+ requestBodyStr + ", loginScreenData=" + loginScreenData
				+ ", chooseProductData=" + chooseProductData
				+ ", personalData=" + personalData + ", personalData2_Address="
				+ personalData2_Address + ", financialData=" + financialData
				+ ", supCardRequestData=" + supCardRequestData
				+ ", signatureData=" + signatureData + ", optionalProductData="
				+ optionalProductData + ", contactInfoScreenData="
				+ contactInfoScreenData + ", mobilePaymentsScreenData="
				+ mobilePaymentsScreenData + ", wiciAuthfieldValue="
				+ wiciAuthfieldValue + ", summaryData=" + summaryData
				+ ", models=" + models + "]";
	}

}
