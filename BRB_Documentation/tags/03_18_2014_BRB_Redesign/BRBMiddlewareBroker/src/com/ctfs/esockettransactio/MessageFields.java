
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for MessageFields complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="MessageFields">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="token" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{1,19}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="processingCode" type="{http://ctfs.com/esocketTransactIo/}ProcessingCode" minOccurs="0"/>
 *         &lt;element name="transactionAmount" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{1,12}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="settlementAmount" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{1,12}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="conversionRate" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{8}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="localTransactionTime" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{6}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="localTransactionDate" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{4}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="expiryDate" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{4}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="settlementDate" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{4}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="conversionDate" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{4}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="merchantType" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{4}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="pointOfServiceEntryMode" type="{http://ctfs.com/esocketTransactIo/}PointOfServiceEntryMode" minOccurs="0"/>
 *         &lt;element name="cardSequenceNumber" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{3}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="pointOfServiceConditionCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{2}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="transactionFee" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[CD][0-9]{1,8}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="settlementFee" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[CD][0-9]{1,8}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="transactionProcessingFee" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[CD][0-9]{1,8}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="settlementProcessingFee" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[CD][0-9]{1,8}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="acquiringInstitutionIdCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{1,11}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="forwardingInstitutionIdCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{1,11}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="retrievalReferenceNumber" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[a-zA-Z0-9]{1,12} {0,11}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="authorizationIdResponse" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[a-zA-Z0-9]{1,6} {0,5}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="responseCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[a-zA-Z0-9]{2}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="serviceRestrictionCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{3}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cardAcceptorTerminalId" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="8"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cardAcceptorIdCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="5"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cardAcceptorLocationName" type="{http://ctfs.com/esocketTransactIo/}CardAcceptorLocationName" minOccurs="0"/>
 *         &lt;element name="transactionCurrencyCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{3}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="settlementCurrencyCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{3}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="additionalAmountsList" type="{http://ctfs.com/esocketTransactIo/}AdditionalAmountsList" minOccurs="0"/>
 *         &lt;element name="messageReasonCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{1,4}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="extendedPaymentCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{2}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="fileUpdateCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9a-zA-Z]{1}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="replacementAmounts" type="{http://ctfs.com/esocketTransactIo/}ReplacementAmounts" minOccurs="0"/>
 *         &lt;element name="payee" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="25"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="receivingInstitutionIdCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{1,11}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="fileName" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;minLength value="1"/>
 *               &lt;maxLength value="17"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="accountIdentification1" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;minLength value="1"/>
 *               &lt;maxLength value="28"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="accountIdentification2" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;minLength value="1"/>
 *               &lt;maxLength value="28"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="pointOfServiceDataCode" type="{http://ctfs.com/esocketTransactIo/}PointOfServiceDataCode" minOccurs="0"/>
 *         &lt;element name="switchKey" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;minLength value="1"/>
 *               &lt;maxLength value="32"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="pointOfServiceData" type="{http://ctfs.com/esocketTransactIo/}PointOfServiceData" minOccurs="0"/>
 *         &lt;element name="authorizationProfile" type="{http://ctfs.com/esocketTransactIo/}AuthorizationProfile" minOccurs="0"/>
 *         &lt;element name="checkData" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;minLength value="1"/>
 *               &lt;maxLength value="70"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="retentionData" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;minLength value="1"/>
 *               &lt;maxLength value="999"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="additionalNodeData" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;minLength value="1"/>
 *               &lt;maxLength value="255"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="terminalOwner" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;minLength value="1"/>
 *               &lt;maxLength value="25"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="pointOfServiceGeographicData" type="{http://ctfs.com/esocketTransactIo/}PointOfServiceGeographicData" minOccurs="0"/>
 *         &lt;element name="sponsorBank" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="8"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="addressVerificationData" type="{http://ctfs.com/esocketTransactIo/}AddressVerificationData" minOccurs="0"/>
 *         &lt;element name="addressVerificationResult" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[A-Z]"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="bankDetails" type="{http://ctfs.com/esocketTransactIo/}BankDetails" minOccurs="0"/>
 *         &lt;element name="originatorAuthorizerSettlementDate" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{8}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="structuredData" type="{http://ctfs.com/esocketTransactIo/}StructuredData" minOccurs="0"/>
 *         &lt;element name="payeeNameAddress" type="{http://ctfs.com/esocketTransactIo/}PayeeNameAddress" minOccurs="0"/>
 *         &lt;element name="payerAccountId" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;minLength value="1"/>
 *               &lt;maxLength value="28"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="originalNode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;minLength value="1"/>
 *               &lt;maxLength value="20"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cardVerificationResult" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="1"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="secure3DResult" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="1"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="ucafData" type="{http://ctfs.com/esocketTransactIo/}UcafData" minOccurs="0"/>
 *         &lt;element name="extendedTransactionType" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{4}"/>
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
@XmlType(name = "MessageFields", propOrder = {
    "token",
    "processingCode",
    "transactionAmount",
    "settlementAmount",
    "conversionRate",
    "localTransactionTime",
    "localTransactionDate",
    "expiryDate",
    "settlementDate",
    "conversionDate",
    "merchantType",
    "pointOfServiceEntryMode",
    "cardSequenceNumber",
    "pointOfServiceConditionCode",
    "transactionFee",
    "settlementFee",
    "transactionProcessingFee",
    "settlementProcessingFee",
    "acquiringInstitutionIdCode",
    "forwardingInstitutionIdCode",
    "retrievalReferenceNumber",
    "authorizationIdResponse",
    "responseCode",
    "serviceRestrictionCode",
    "cardAcceptorTerminalId",
    "cardAcceptorIdCode",
    "cardAcceptorLocationName",
    "transactionCurrencyCode",
    "settlementCurrencyCode",
    "additionalAmountsList",
    "messageReasonCode",
    "extendedPaymentCode",
    "fileUpdateCode",
    "replacementAmounts",
    "payee",
    "receivingInstitutionIdCode",
    "fileName",
    "accountIdentification1",
    "accountIdentification2",
    "pointOfServiceDataCode",
    "switchKey",
    "pointOfServiceData",
    "authorizationProfile",
    "checkData",
    "retentionData",
    "additionalNodeData",
    "terminalOwner",
    "pointOfServiceGeographicData",
    "sponsorBank",
    "addressVerificationData",
    "addressVerificationResult",
    "bankDetails",
    "originatorAuthorizerSettlementDate",
    "structuredData",
    "payeeNameAddress",
    "payerAccountId",
    "originalNode",
    "cardVerificationResult",
    "secure3DResult",
    "ucafData",
    "extendedTransactionType"
})
@XmlSeeAlso({
    MessageFieldsResponse.class,
    MessageFieldsRequest.class
})
public class MessageFields
    implements Serializable
{

    protected String token;
    protected ProcessingCode processingCode;
    protected String transactionAmount;
    protected String settlementAmount;
    protected String conversionRate;
    protected String localTransactionTime;
    protected String localTransactionDate;
    protected String expiryDate;
    protected String settlementDate;
    protected String conversionDate;
    protected String merchantType;
    protected PointOfServiceEntryMode pointOfServiceEntryMode;
    protected String cardSequenceNumber;
    protected String pointOfServiceConditionCode;
    protected String transactionFee;
    protected String settlementFee;
    protected String transactionProcessingFee;
    protected String settlementProcessingFee;
    protected String acquiringInstitutionIdCode;
    protected String forwardingInstitutionIdCode;
    protected String retrievalReferenceNumber;
    protected String authorizationIdResponse;
    protected String responseCode;
    protected String serviceRestrictionCode;
    protected String cardAcceptorTerminalId;
    protected String cardAcceptorIdCode;
    protected CardAcceptorLocationName cardAcceptorLocationName;
    protected String transactionCurrencyCode;
    protected String settlementCurrencyCode;
    protected AdditionalAmountsList additionalAmountsList;
    protected String messageReasonCode;
    protected String extendedPaymentCode;
    protected String fileUpdateCode;
    protected ReplacementAmounts replacementAmounts;
    protected String payee;
    protected String receivingInstitutionIdCode;
    protected String fileName;
    protected String accountIdentification1;
    protected String accountIdentification2;
    protected PointOfServiceDataCode pointOfServiceDataCode;
    protected String switchKey;
    protected PointOfServiceData pointOfServiceData;
    protected AuthorizationProfile authorizationProfile;
    protected String checkData;
    protected String retentionData;
    protected String additionalNodeData;
    protected String terminalOwner;
    protected PointOfServiceGeographicData pointOfServiceGeographicData;
    protected String sponsorBank;
    protected AddressVerificationData addressVerificationData;
    protected String addressVerificationResult;
    protected BankDetails bankDetails;
    protected String originatorAuthorizerSettlementDate;
    protected StructuredData structuredData;
    protected PayeeNameAddress payeeNameAddress;
    protected String payerAccountId;
    protected String originalNode;
    protected String cardVerificationResult;
    protected String secure3DResult;
    protected UcafData ucafData;
    protected String extendedTransactionType;

    /**
     * Gets the value of the token property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getToken() {
        return token;
    }

    /**
     * Sets the value of the token property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setToken(String value) {
        this.token = value;
    }

    /**
     * Gets the value of the processingCode property.
     * 
     * @return
     *     possible object is
     *     {@link ProcessingCode }
     *     
     */
    public ProcessingCode getProcessingCode() {
        return processingCode;
    }

    /**
     * Sets the value of the processingCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link ProcessingCode }
     *     
     */
    public void setProcessingCode(ProcessingCode value) {
        this.processingCode = value;
    }

    /**
     * Gets the value of the transactionAmount property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTransactionAmount() {
        return transactionAmount;
    }

    /**
     * Sets the value of the transactionAmount property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTransactionAmount(String value) {
        this.transactionAmount = value;
    }

    /**
     * Gets the value of the settlementAmount property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSettlementAmount() {
        return settlementAmount;
    }

    /**
     * Sets the value of the settlementAmount property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSettlementAmount(String value) {
        this.settlementAmount = value;
    }

    /**
     * Gets the value of the conversionRate property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getConversionRate() {
        return conversionRate;
    }

    /**
     * Sets the value of the conversionRate property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setConversionRate(String value) {
        this.conversionRate = value;
    }

    /**
     * Gets the value of the localTransactionTime property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLocalTransactionTime() {
        return localTransactionTime;
    }

    /**
     * Sets the value of the localTransactionTime property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLocalTransactionTime(String value) {
        this.localTransactionTime = value;
    }

    /**
     * Gets the value of the localTransactionDate property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLocalTransactionDate() {
        return localTransactionDate;
    }

    /**
     * Sets the value of the localTransactionDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLocalTransactionDate(String value) {
        this.localTransactionDate = value;
    }

    /**
     * Gets the value of the expiryDate property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getExpiryDate() {
        return expiryDate;
    }

    /**
     * Sets the value of the expiryDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setExpiryDate(String value) {
        this.expiryDate = value;
    }

    /**
     * Gets the value of the settlementDate property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSettlementDate() {
        return settlementDate;
    }

    /**
     * Sets the value of the settlementDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSettlementDate(String value) {
        this.settlementDate = value;
    }

    /**
     * Gets the value of the conversionDate property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getConversionDate() {
        return conversionDate;
    }

    /**
     * Sets the value of the conversionDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setConversionDate(String value) {
        this.conversionDate = value;
    }

    /**
     * Gets the value of the merchantType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMerchantType() {
        return merchantType;
    }

    /**
     * Sets the value of the merchantType property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMerchantType(String value) {
        this.merchantType = value;
    }

    /**
     * Gets the value of the pointOfServiceEntryMode property.
     * 
     * @return
     *     possible object is
     *     {@link PointOfServiceEntryMode }
     *     
     */
    public PointOfServiceEntryMode getPointOfServiceEntryMode() {
        return pointOfServiceEntryMode;
    }

    /**
     * Sets the value of the pointOfServiceEntryMode property.
     * 
     * @param value
     *     allowed object is
     *     {@link PointOfServiceEntryMode }
     *     
     */
    public void setPointOfServiceEntryMode(PointOfServiceEntryMode value) {
        this.pointOfServiceEntryMode = value;
    }

    /**
     * Gets the value of the cardSequenceNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardSequenceNumber() {
        return cardSequenceNumber;
    }

    /**
     * Sets the value of the cardSequenceNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardSequenceNumber(String value) {
        this.cardSequenceNumber = value;
    }

    /**
     * Gets the value of the pointOfServiceConditionCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPointOfServiceConditionCode() {
        return pointOfServiceConditionCode;
    }

    /**
     * Sets the value of the pointOfServiceConditionCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPointOfServiceConditionCode(String value) {
        this.pointOfServiceConditionCode = value;
    }

    /**
     * Gets the value of the transactionFee property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTransactionFee() {
        return transactionFee;
    }

    /**
     * Sets the value of the transactionFee property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTransactionFee(String value) {
        this.transactionFee = value;
    }

    /**
     * Gets the value of the settlementFee property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSettlementFee() {
        return settlementFee;
    }

    /**
     * Sets the value of the settlementFee property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSettlementFee(String value) {
        this.settlementFee = value;
    }

    /**
     * Gets the value of the transactionProcessingFee property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTransactionProcessingFee() {
        return transactionProcessingFee;
    }

    /**
     * Sets the value of the transactionProcessingFee property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTransactionProcessingFee(String value) {
        this.transactionProcessingFee = value;
    }

    /**
     * Gets the value of the settlementProcessingFee property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSettlementProcessingFee() {
        return settlementProcessingFee;
    }

    /**
     * Sets the value of the settlementProcessingFee property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSettlementProcessingFee(String value) {
        this.settlementProcessingFee = value;
    }

    /**
     * Gets the value of the acquiringInstitutionIdCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAcquiringInstitutionIdCode() {
        return acquiringInstitutionIdCode;
    }

    /**
     * Sets the value of the acquiringInstitutionIdCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAcquiringInstitutionIdCode(String value) {
        this.acquiringInstitutionIdCode = value;
    }

    /**
     * Gets the value of the forwardingInstitutionIdCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getForwardingInstitutionIdCode() {
        return forwardingInstitutionIdCode;
    }

    /**
     * Sets the value of the forwardingInstitutionIdCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setForwardingInstitutionIdCode(String value) {
        this.forwardingInstitutionIdCode = value;
    }

    /**
     * Gets the value of the retrievalReferenceNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRetrievalReferenceNumber() {
        return retrievalReferenceNumber;
    }

    /**
     * Sets the value of the retrievalReferenceNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRetrievalReferenceNumber(String value) {
        this.retrievalReferenceNumber = value;
    }

    /**
     * Gets the value of the authorizationIdResponse property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAuthorizationIdResponse() {
        return authorizationIdResponse;
    }

    /**
     * Sets the value of the authorizationIdResponse property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAuthorizationIdResponse(String value) {
        this.authorizationIdResponse = value;
    }

    /**
     * Gets the value of the responseCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getResponseCode() {
        return responseCode;
    }

    /**
     * Sets the value of the responseCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setResponseCode(String value) {
        this.responseCode = value;
    }

    /**
     * Gets the value of the serviceRestrictionCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getServiceRestrictionCode() {
        return serviceRestrictionCode;
    }

    /**
     * Sets the value of the serviceRestrictionCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setServiceRestrictionCode(String value) {
        this.serviceRestrictionCode = value;
    }

    /**
     * Gets the value of the cardAcceptorTerminalId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardAcceptorTerminalId() {
        return cardAcceptorTerminalId;
    }

    /**
     * Sets the value of the cardAcceptorTerminalId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardAcceptorTerminalId(String value) {
        this.cardAcceptorTerminalId = value;
    }

    /**
     * Gets the value of the cardAcceptorIdCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardAcceptorIdCode() {
        return cardAcceptorIdCode;
    }

    /**
     * Sets the value of the cardAcceptorIdCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardAcceptorIdCode(String value) {
        this.cardAcceptorIdCode = value;
    }

    /**
     * Gets the value of the cardAcceptorLocationName property.
     * 
     * @return
     *     possible object is
     *     {@link CardAcceptorLocationName }
     *     
     */
    public CardAcceptorLocationName getCardAcceptorLocationName() {
        return cardAcceptorLocationName;
    }

    /**
     * Sets the value of the cardAcceptorLocationName property.
     * 
     * @param value
     *     allowed object is
     *     {@link CardAcceptorLocationName }
     *     
     */
    public void setCardAcceptorLocationName(CardAcceptorLocationName value) {
        this.cardAcceptorLocationName = value;
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
     * Gets the value of the settlementCurrencyCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSettlementCurrencyCode() {
        return settlementCurrencyCode;
    }

    /**
     * Sets the value of the settlementCurrencyCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSettlementCurrencyCode(String value) {
        this.settlementCurrencyCode = value;
    }

    /**
     * Gets the value of the additionalAmountsList property.
     * 
     * @return
     *     possible object is
     *     {@link AdditionalAmountsList }
     *     
     */
    public AdditionalAmountsList getAdditionalAmountsList() {
        return additionalAmountsList;
    }

    /**
     * Sets the value of the additionalAmountsList property.
     * 
     * @param value
     *     allowed object is
     *     {@link AdditionalAmountsList }
     *     
     */
    public void setAdditionalAmountsList(AdditionalAmountsList value) {
        this.additionalAmountsList = value;
    }

    /**
     * Gets the value of the messageReasonCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMessageReasonCode() {
        return messageReasonCode;
    }

    /**
     * Sets the value of the messageReasonCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMessageReasonCode(String value) {
        this.messageReasonCode = value;
    }

    /**
     * Gets the value of the extendedPaymentCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getExtendedPaymentCode() {
        return extendedPaymentCode;
    }

    /**
     * Sets the value of the extendedPaymentCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setExtendedPaymentCode(String value) {
        this.extendedPaymentCode = value;
    }

    /**
     * Gets the value of the fileUpdateCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFileUpdateCode() {
        return fileUpdateCode;
    }

    /**
     * Sets the value of the fileUpdateCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFileUpdateCode(String value) {
        this.fileUpdateCode = value;
    }

    /**
     * Gets the value of the replacementAmounts property.
     * 
     * @return
     *     possible object is
     *     {@link ReplacementAmounts }
     *     
     */
    public ReplacementAmounts getReplacementAmounts() {
        return replacementAmounts;
    }

    /**
     * Sets the value of the replacementAmounts property.
     * 
     * @param value
     *     allowed object is
     *     {@link ReplacementAmounts }
     *     
     */
    public void setReplacementAmounts(ReplacementAmounts value) {
        this.replacementAmounts = value;
    }

    /**
     * Gets the value of the payee property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPayee() {
        return payee;
    }

    /**
     * Sets the value of the payee property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPayee(String value) {
        this.payee = value;
    }

    /**
     * Gets the value of the receivingInstitutionIdCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getReceivingInstitutionIdCode() {
        return receivingInstitutionIdCode;
    }

    /**
     * Sets the value of the receivingInstitutionIdCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setReceivingInstitutionIdCode(String value) {
        this.receivingInstitutionIdCode = value;
    }

    /**
     * Gets the value of the fileName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFileName() {
        return fileName;
    }

    /**
     * Sets the value of the fileName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFileName(String value) {
        this.fileName = value;
    }

    /**
     * Gets the value of the accountIdentification1 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAccountIdentification1() {
        return accountIdentification1;
    }

    /**
     * Sets the value of the accountIdentification1 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAccountIdentification1(String value) {
        this.accountIdentification1 = value;
    }

    /**
     * Gets the value of the accountIdentification2 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAccountIdentification2() {
        return accountIdentification2;
    }

    /**
     * Sets the value of the accountIdentification2 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAccountIdentification2(String value) {
        this.accountIdentification2 = value;
    }

    /**
     * Gets the value of the pointOfServiceDataCode property.
     * 
     * @return
     *     possible object is
     *     {@link PointOfServiceDataCode }
     *     
     */
    public PointOfServiceDataCode getPointOfServiceDataCode() {
        return pointOfServiceDataCode;
    }

    /**
     * Sets the value of the pointOfServiceDataCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link PointOfServiceDataCode }
     *     
     */
    public void setPointOfServiceDataCode(PointOfServiceDataCode value) {
        this.pointOfServiceDataCode = value;
    }

    /**
     * Gets the value of the switchKey property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSwitchKey() {
        return switchKey;
    }

    /**
     * Sets the value of the switchKey property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSwitchKey(String value) {
        this.switchKey = value;
    }

    /**
     * Gets the value of the pointOfServiceData property.
     * 
     * @return
     *     possible object is
     *     {@link PointOfServiceData }
     *     
     */
    public PointOfServiceData getPointOfServiceData() {
        return pointOfServiceData;
    }

    /**
     * Sets the value of the pointOfServiceData property.
     * 
     * @param value
     *     allowed object is
     *     {@link PointOfServiceData }
     *     
     */
    public void setPointOfServiceData(PointOfServiceData value) {
        this.pointOfServiceData = value;
    }

    /**
     * Gets the value of the authorizationProfile property.
     * 
     * @return
     *     possible object is
     *     {@link AuthorizationProfile }
     *     
     */
    public AuthorizationProfile getAuthorizationProfile() {
        return authorizationProfile;
    }

    /**
     * Sets the value of the authorizationProfile property.
     * 
     * @param value
     *     allowed object is
     *     {@link AuthorizationProfile }
     *     
     */
    public void setAuthorizationProfile(AuthorizationProfile value) {
        this.authorizationProfile = value;
    }

    /**
     * Gets the value of the checkData property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCheckData() {
        return checkData;
    }

    /**
     * Sets the value of the checkData property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCheckData(String value) {
        this.checkData = value;
    }

    /**
     * Gets the value of the retentionData property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRetentionData() {
        return retentionData;
    }

    /**
     * Sets the value of the retentionData property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRetentionData(String value) {
        this.retentionData = value;
    }

    /**
     * Gets the value of the additionalNodeData property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAdditionalNodeData() {
        return additionalNodeData;
    }

    /**
     * Sets the value of the additionalNodeData property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAdditionalNodeData(String value) {
        this.additionalNodeData = value;
    }

    /**
     * Gets the value of the terminalOwner property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTerminalOwner() {
        return terminalOwner;
    }

    /**
     * Sets the value of the terminalOwner property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTerminalOwner(String value) {
        this.terminalOwner = value;
    }

    /**
     * Gets the value of the pointOfServiceGeographicData property.
     * 
     * @return
     *     possible object is
     *     {@link PointOfServiceGeographicData }
     *     
     */
    public PointOfServiceGeographicData getPointOfServiceGeographicData() {
        return pointOfServiceGeographicData;
    }

    /**
     * Sets the value of the pointOfServiceGeographicData property.
     * 
     * @param value
     *     allowed object is
     *     {@link PointOfServiceGeographicData }
     *     
     */
    public void setPointOfServiceGeographicData(PointOfServiceGeographicData value) {
        this.pointOfServiceGeographicData = value;
    }

    /**
     * Gets the value of the sponsorBank property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSponsorBank() {
        return sponsorBank;
    }

    /**
     * Sets the value of the sponsorBank property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSponsorBank(String value) {
        this.sponsorBank = value;
    }

    /**
     * Gets the value of the addressVerificationData property.
     * 
     * @return
     *     possible object is
     *     {@link AddressVerificationData }
     *     
     */
    public AddressVerificationData getAddressVerificationData() {
        return addressVerificationData;
    }

    /**
     * Sets the value of the addressVerificationData property.
     * 
     * @param value
     *     allowed object is
     *     {@link AddressVerificationData }
     *     
     */
    public void setAddressVerificationData(AddressVerificationData value) {
        this.addressVerificationData = value;
    }

    /**
     * Gets the value of the addressVerificationResult property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAddressVerificationResult() {
        return addressVerificationResult;
    }

    /**
     * Sets the value of the addressVerificationResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAddressVerificationResult(String value) {
        this.addressVerificationResult = value;
    }

    /**
     * Gets the value of the bankDetails property.
     * 
     * @return
     *     possible object is
     *     {@link BankDetails }
     *     
     */
    public BankDetails getBankDetails() {
        return bankDetails;
    }

    /**
     * Sets the value of the bankDetails property.
     * 
     * @param value
     *     allowed object is
     *     {@link BankDetails }
     *     
     */
    public void setBankDetails(BankDetails value) {
        this.bankDetails = value;
    }

    /**
     * Gets the value of the originatorAuthorizerSettlementDate property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOriginatorAuthorizerSettlementDate() {
        return originatorAuthorizerSettlementDate;
    }

    /**
     * Sets the value of the originatorAuthorizerSettlementDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOriginatorAuthorizerSettlementDate(String value) {
        this.originatorAuthorizerSettlementDate = value;
    }

    /**
     * Gets the value of the structuredData property.
     * 
     * @return
     *     possible object is
     *     {@link StructuredData }
     *     
     */
    public StructuredData getStructuredData() {
        return structuredData;
    }

    /**
     * Sets the value of the structuredData property.
     * 
     * @param value
     *     allowed object is
     *     {@link StructuredData }
     *     
     */
    public void setStructuredData(StructuredData value) {
        this.structuredData = value;
    }

    /**
     * Gets the value of the payeeNameAddress property.
     * 
     * @return
     *     possible object is
     *     {@link PayeeNameAddress }
     *     
     */
    public PayeeNameAddress getPayeeNameAddress() {
        return payeeNameAddress;
    }

    /**
     * Sets the value of the payeeNameAddress property.
     * 
     * @param value
     *     allowed object is
     *     {@link PayeeNameAddress }
     *     
     */
    public void setPayeeNameAddress(PayeeNameAddress value) {
        this.payeeNameAddress = value;
    }

    /**
     * Gets the value of the payerAccountId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPayerAccountId() {
        return payerAccountId;
    }

    /**
     * Sets the value of the payerAccountId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPayerAccountId(String value) {
        this.payerAccountId = value;
    }

    /**
     * Gets the value of the originalNode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOriginalNode() {
        return originalNode;
    }

    /**
     * Sets the value of the originalNode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOriginalNode(String value) {
        this.originalNode = value;
    }

    /**
     * Gets the value of the cardVerificationResult property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardVerificationResult() {
        return cardVerificationResult;
    }

    /**
     * Sets the value of the cardVerificationResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardVerificationResult(String value) {
        this.cardVerificationResult = value;
    }

    /**
     * Gets the value of the secure3DResult property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSecure3DResult() {
        return secure3DResult;
    }

    /**
     * Sets the value of the secure3DResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSecure3DResult(String value) {
        this.secure3DResult = value;
    }

    /**
     * Gets the value of the ucafData property.
     * 
     * @return
     *     possible object is
     *     {@link UcafData }
     *     
     */
    public UcafData getUcafData() {
        return ucafData;
    }

    /**
     * Sets the value of the ucafData property.
     * 
     * @param value
     *     allowed object is
     *     {@link UcafData }
     *     
     */
    public void setUcafData(UcafData value) {
        this.ucafData = value;
    }

    /**
     * Gets the value of the extendedTransactionType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getExtendedTransactionType() {
        return extendedTransactionType;
    }

    /**
     * Sets the value of the extendedTransactionType property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setExtendedTransactionType(String value) {
        this.extendedTransactionType = value;
    }

}
