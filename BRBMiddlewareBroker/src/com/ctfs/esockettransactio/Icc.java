
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for Icc complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="Icc">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="amountAuthorized" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="amountOther" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="applicationIdentifier" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="applicationInterchangeProfile" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="applicationTransactionCounter" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="applicationUsageControl" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="authorizationResponseCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cardAuthenticationReliabilityIndicator" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cardAuthenticationResultsCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="chipConditionCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cryptogram" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cryptogramInformationData" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cvmResults" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="interfaceDeviceSerialNumber" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="issuerActionCode" type="{http://ctfs.com/esocketTransactIo/}IssuerActionCode" minOccurs="0"/>
 *         &lt;element name="issuerApplicationData" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="issuerAuthenticationData" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="terminalApplicationVersionNumber" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="terminalCapabilities" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="terminalCountryCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="terminalType" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="terminalVerificationResult" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="transactionCategoryCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="transactionCurrencyCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="transactionDate" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="transactionSequenceCounter" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="transactionType" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="unpredictableNumber" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Icc", propOrder = {
    "amountAuthorized",
    "amountOther",
    "applicationIdentifier",
    "applicationInterchangeProfile",
    "applicationTransactionCounter",
    "applicationUsageControl",
    "authorizationResponseCode",
    "cardAuthenticationReliabilityIndicator",
    "cardAuthenticationResultsCode",
    "chipConditionCode",
    "cryptogram",
    "cryptogramInformationData",
    "cvmResults",
    "interfaceDeviceSerialNumber",
    "issuerActionCode",
    "issuerApplicationData",
    "issuerAuthenticationData",
    "terminalApplicationVersionNumber",
    "terminalCapabilities",
    "terminalCountryCode",
    "terminalType",
    "terminalVerificationResult",
    "transactionCategoryCode",
    "transactionCurrencyCode",
    "transactionDate",
    "transactionSequenceCounter",
    "transactionType",
    "unpredictableNumber"
})
@XmlSeeAlso({
    IccResponse.class,
    IccRequest.class
})
public class Icc
    implements Serializable
{

    protected String amountAuthorized;
    protected String amountOther;
    protected String applicationIdentifier;
    protected String applicationInterchangeProfile;
    protected String applicationTransactionCounter;
    protected String applicationUsageControl;
    protected String authorizationResponseCode;
    protected String cardAuthenticationReliabilityIndicator;
    protected String cardAuthenticationResultsCode;
    protected String chipConditionCode;
    protected String cryptogram;
    protected String cryptogramInformationData;
    protected String cvmResults;
    protected String interfaceDeviceSerialNumber;
    protected IssuerActionCode issuerActionCode;
    protected String issuerApplicationData;
    protected String issuerAuthenticationData;
    protected String terminalApplicationVersionNumber;
    protected String terminalCapabilities;
    protected String terminalCountryCode;
    protected String terminalType;
    protected String terminalVerificationResult;
    protected String transactionCategoryCode;
    protected String transactionCurrencyCode;
    protected String transactionDate;
    protected String transactionSequenceCounter;
    protected String transactionType;
    protected String unpredictableNumber;

    /**
     * Gets the value of the amountAuthorized property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAmountAuthorized() {
        return amountAuthorized;
    }

    /**
     * Sets the value of the amountAuthorized property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAmountAuthorized(String value) {
        this.amountAuthorized = value;
    }

    /**
     * Gets the value of the amountOther property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAmountOther() {
        return amountOther;
    }

    /**
     * Sets the value of the amountOther property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAmountOther(String value) {
        this.amountOther = value;
    }

    /**
     * Gets the value of the applicationIdentifier property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getApplicationIdentifier() {
        return applicationIdentifier;
    }

    /**
     * Sets the value of the applicationIdentifier property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setApplicationIdentifier(String value) {
        this.applicationIdentifier = value;
    }

    /**
     * Gets the value of the applicationInterchangeProfile property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getApplicationInterchangeProfile() {
        return applicationInterchangeProfile;
    }

    /**
     * Sets the value of the applicationInterchangeProfile property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setApplicationInterchangeProfile(String value) {
        this.applicationInterchangeProfile = value;
    }

    /**
     * Gets the value of the applicationTransactionCounter property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getApplicationTransactionCounter() {
        return applicationTransactionCounter;
    }

    /**
     * Sets the value of the applicationTransactionCounter property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setApplicationTransactionCounter(String value) {
        this.applicationTransactionCounter = value;
    }

    /**
     * Gets the value of the applicationUsageControl property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getApplicationUsageControl() {
        return applicationUsageControl;
    }

    /**
     * Sets the value of the applicationUsageControl property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setApplicationUsageControl(String value) {
        this.applicationUsageControl = value;
    }

    /**
     * Gets the value of the authorizationResponseCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAuthorizationResponseCode() {
        return authorizationResponseCode;
    }

    /**
     * Sets the value of the authorizationResponseCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAuthorizationResponseCode(String value) {
        this.authorizationResponseCode = value;
    }

    /**
     * Gets the value of the cardAuthenticationReliabilityIndicator property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardAuthenticationReliabilityIndicator() {
        return cardAuthenticationReliabilityIndicator;
    }

    /**
     * Sets the value of the cardAuthenticationReliabilityIndicator property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardAuthenticationReliabilityIndicator(String value) {
        this.cardAuthenticationReliabilityIndicator = value;
    }

    /**
     * Gets the value of the cardAuthenticationResultsCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardAuthenticationResultsCode() {
        return cardAuthenticationResultsCode;
    }

    /**
     * Sets the value of the cardAuthenticationResultsCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardAuthenticationResultsCode(String value) {
        this.cardAuthenticationResultsCode = value;
    }

    /**
     * Gets the value of the chipConditionCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getChipConditionCode() {
        return chipConditionCode;
    }

    /**
     * Sets the value of the chipConditionCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setChipConditionCode(String value) {
        this.chipConditionCode = value;
    }

    /**
     * Gets the value of the cryptogram property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCryptogram() {
        return cryptogram;
    }

    /**
     * Sets the value of the cryptogram property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCryptogram(String value) {
        this.cryptogram = value;
    }

    /**
     * Gets the value of the cryptogramInformationData property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCryptogramInformationData() {
        return cryptogramInformationData;
    }

    /**
     * Sets the value of the cryptogramInformationData property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCryptogramInformationData(String value) {
        this.cryptogramInformationData = value;
    }

    /**
     * Gets the value of the cvmResults property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCvmResults() {
        return cvmResults;
    }

    /**
     * Sets the value of the cvmResults property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCvmResults(String value) {
        this.cvmResults = value;
    }

    /**
     * Gets the value of the interfaceDeviceSerialNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInterfaceDeviceSerialNumber() {
        return interfaceDeviceSerialNumber;
    }

    /**
     * Sets the value of the interfaceDeviceSerialNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInterfaceDeviceSerialNumber(String value) {
        this.interfaceDeviceSerialNumber = value;
    }

    /**
     * Gets the value of the issuerActionCode property.
     * 
     * @return
     *     possible object is
     *     {@link IssuerActionCode }
     *     
     */
    public IssuerActionCode getIssuerActionCode() {
        return issuerActionCode;
    }

    /**
     * Sets the value of the issuerActionCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link IssuerActionCode }
     *     
     */
    public void setIssuerActionCode(IssuerActionCode value) {
        this.issuerActionCode = value;
    }

    /**
     * Gets the value of the issuerApplicationData property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIssuerApplicationData() {
        return issuerApplicationData;
    }

    /**
     * Sets the value of the issuerApplicationData property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIssuerApplicationData(String value) {
        this.issuerApplicationData = value;
    }

    /**
     * Gets the value of the issuerAuthenticationData property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIssuerAuthenticationData() {
        return issuerAuthenticationData;
    }

    /**
     * Sets the value of the issuerAuthenticationData property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIssuerAuthenticationData(String value) {
        this.issuerAuthenticationData = value;
    }

    /**
     * Gets the value of the terminalApplicationVersionNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTerminalApplicationVersionNumber() {
        return terminalApplicationVersionNumber;
    }

    /**
     * Sets the value of the terminalApplicationVersionNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTerminalApplicationVersionNumber(String value) {
        this.terminalApplicationVersionNumber = value;
    }

    /**
     * Gets the value of the terminalCapabilities property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTerminalCapabilities() {
        return terminalCapabilities;
    }

    /**
     * Sets the value of the terminalCapabilities property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTerminalCapabilities(String value) {
        this.terminalCapabilities = value;
    }

    /**
     * Gets the value of the terminalCountryCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTerminalCountryCode() {
        return terminalCountryCode;
    }

    /**
     * Sets the value of the terminalCountryCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTerminalCountryCode(String value) {
        this.terminalCountryCode = value;
    }

    /**
     * Gets the value of the terminalType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTerminalType() {
        return terminalType;
    }

    /**
     * Sets the value of the terminalType property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTerminalType(String value) {
        this.terminalType = value;
    }

    /**
     * Gets the value of the terminalVerificationResult property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTerminalVerificationResult() {
        return terminalVerificationResult;
    }

    /**
     * Sets the value of the terminalVerificationResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTerminalVerificationResult(String value) {
        this.terminalVerificationResult = value;
    }

    /**
     * Gets the value of the transactionCategoryCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTransactionCategoryCode() {
        return transactionCategoryCode;
    }

    /**
     * Sets the value of the transactionCategoryCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTransactionCategoryCode(String value) {
        this.transactionCategoryCode = value;
    }

    /**
     * Gets the value of the transactionCurrencyCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTransactionCurrencyCode() {
        return transactionCurrencyCode;
    }

    /**
     * Sets the value of the transactionCurrencyCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTransactionCurrencyCode(String value) {
        this.transactionCurrencyCode = value;
    }

    /**
     * Gets the value of the transactionDate property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTransactionDate() {
        return transactionDate;
    }

    /**
     * Sets the value of the transactionDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTransactionDate(String value) {
        this.transactionDate = value;
    }

    /**
     * Gets the value of the transactionSequenceCounter property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTransactionSequenceCounter() {
        return transactionSequenceCounter;
    }

    /**
     * Sets the value of the transactionSequenceCounter property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTransactionSequenceCounter(String value) {
        this.transactionSequenceCounter = value;
    }

    /**
     * Gets the value of the transactionType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTransactionType() {
        return transactionType;
    }

    /**
     * Sets the value of the transactionType property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTransactionType(String value) {
        this.transactionType = value;
    }

    /**
     * Gets the value of the unpredictableNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUnpredictableNumber() {
        return unpredictableNumber;
    }

    /**
     * Sets the value of the unpredictableNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUnpredictableNumber(String value) {
        this.unpredictableNumber = value;
    }

}
