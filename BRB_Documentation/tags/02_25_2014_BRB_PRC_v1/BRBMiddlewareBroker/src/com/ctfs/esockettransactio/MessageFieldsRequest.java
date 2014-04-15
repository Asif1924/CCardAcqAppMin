
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for MessageFieldsRequest complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="MessageFieldsRequest">
 *   &lt;complexContent>
 *     &lt;extension base="{http://ctfs.com/esocketTransactIo/}MessageFields">
 *       &lt;sequence>
 *         &lt;element name="pointOfServicePinCaptureCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{3}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="authorizationIdResponseLength" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{1}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="additionalResponseData" type="{http://ctfs.com/esocketTransactIo/}AdditionalResponseData" minOccurs="0"/>
 *         &lt;element name="securityRelatedControlInformation" type="{http://ctfs.com/esocketTransactIo/}SecurityRelatedControlInformation" minOccurs="0"/>
 *         &lt;element name="authorizationLifeCycleCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{1,3}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="originalSwitchKey" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;minLength value="1"/>
 *               &lt;maxLength value="32"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="validationData" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="icc" type="{http://ctfs.com/esocketTransactIo/}IccRequest" minOccurs="0"/>
 *         &lt;element name="secure3DData" type="{http://ctfs.com/esocketTransactIo/}Secure3DData" minOccurs="0"/>
 *         &lt;element name="accountTypeQualifiers" type="{http://ctfs.com/esocketTransactIo/}AccountTypeQualifiers" minOccurs="0"/>
 *         &lt;element name="acquirerNetworkId" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;minLength value="1"/>
 *               &lt;maxLength value="11"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "MessageFieldsRequest", propOrder = {
    "pointOfServicePinCaptureCode",
    "authorizationIdResponseLength",
    "additionalResponseData",
    "securityRelatedControlInformation",
    "authorizationLifeCycleCode",
    "originalSwitchKey",
    "validationData",
    "icc",
    "secure3DData",
    "accountTypeQualifiers",
    "acquirerNetworkId"
})
public class MessageFieldsRequest
    extends MessageFields
    implements Serializable
{

    protected String pointOfServicePinCaptureCode;
    protected String authorizationIdResponseLength;
    protected AdditionalResponseData additionalResponseData;
    protected SecurityRelatedControlInformation securityRelatedControlInformation;
    protected String authorizationLifeCycleCode;
    protected String originalSwitchKey;
    protected String validationData;
    protected IccRequest icc;
    protected Secure3DData secure3DData;
    protected AccountTypeQualifiers accountTypeQualifiers;
    protected String acquirerNetworkId;

    /**
     * Gets the value of the pointOfServicePinCaptureCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPointOfServicePinCaptureCode() {
        return pointOfServicePinCaptureCode;
    }

    /**
     * Sets the value of the pointOfServicePinCaptureCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPointOfServicePinCaptureCode(String value) {
        this.pointOfServicePinCaptureCode = value;
    }

    /**
     * Gets the value of the authorizationIdResponseLength property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAuthorizationIdResponseLength() {
        return authorizationIdResponseLength;
    }

    /**
     * Sets the value of the authorizationIdResponseLength property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAuthorizationIdResponseLength(String value) {
        this.authorizationIdResponseLength = value;
    }

    /**
     * Gets the value of the additionalResponseData property.
     * 
     * @return
     *     possible object is
     *     {@link AdditionalResponseData }
     *     
     */
    public AdditionalResponseData getAdditionalResponseData() {
        return additionalResponseData;
    }

    /**
     * Sets the value of the additionalResponseData property.
     * 
     * @param value
     *     allowed object is
     *     {@link AdditionalResponseData }
     *     
     */
    public void setAdditionalResponseData(AdditionalResponseData value) {
        this.additionalResponseData = value;
    }

    /**
     * Gets the value of the securityRelatedControlInformation property.
     * 
     * @return
     *     possible object is
     *     {@link SecurityRelatedControlInformation }
     *     
     */
    public SecurityRelatedControlInformation getSecurityRelatedControlInformation() {
        return securityRelatedControlInformation;
    }

    /**
     * Sets the value of the securityRelatedControlInformation property.
     * 
     * @param value
     *     allowed object is
     *     {@link SecurityRelatedControlInformation }
     *     
     */
    public void setSecurityRelatedControlInformation(SecurityRelatedControlInformation value) {
        this.securityRelatedControlInformation = value;
    }

    /**
     * Gets the value of the authorizationLifeCycleCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAuthorizationLifeCycleCode() {
        return authorizationLifeCycleCode;
    }

    /**
     * Sets the value of the authorizationLifeCycleCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAuthorizationLifeCycleCode(String value) {
        this.authorizationLifeCycleCode = value;
    }

    /**
     * Gets the value of the originalSwitchKey property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOriginalSwitchKey() {
        return originalSwitchKey;
    }

    /**
     * Sets the value of the originalSwitchKey property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOriginalSwitchKey(String value) {
        this.originalSwitchKey = value;
    }

    /**
     * Gets the value of the validationData property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getValidationData() {
        return validationData;
    }

    /**
     * Sets the value of the validationData property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setValidationData(String value) {
        this.validationData = value;
    }

    /**
     * Gets the value of the icc property.
     * 
     * @return
     *     possible object is
     *     {@link IccRequest }
     *     
     */
    public IccRequest getIcc() {
        return icc;
    }

    /**
     * Sets the value of the icc property.
     * 
     * @param value
     *     allowed object is
     *     {@link IccRequest }
     *     
     */
    public void setIcc(IccRequest value) {
        this.icc = value;
    }

    /**
     * Gets the value of the secure3DData property.
     * 
     * @return
     *     possible object is
     *     {@link Secure3DData }
     *     
     */
    public Secure3DData getSecure3DData() {
        return secure3DData;
    }

    /**
     * Sets the value of the secure3DData property.
     * 
     * @param value
     *     allowed object is
     *     {@link Secure3DData }
     *     
     */
    public void setSecure3DData(Secure3DData value) {
        this.secure3DData = value;
    }

    /**
     * Gets the value of the accountTypeQualifiers property.
     * 
     * @return
     *     possible object is
     *     {@link AccountTypeQualifiers }
     *     
     */
    public AccountTypeQualifiers getAccountTypeQualifiers() {
        return accountTypeQualifiers;
    }

    /**
     * Sets the value of the accountTypeQualifiers property.
     * 
     * @param value
     *     allowed object is
     *     {@link AccountTypeQualifiers }
     *     
     */
    public void setAccountTypeQualifiers(AccountTypeQualifiers value) {
        this.accountTypeQualifiers = value;
    }

    /**
     * Gets the value of the acquirerNetworkId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAcquirerNetworkId() {
        return acquirerNetworkId;
    }

    /**
     * Sets the value of the acquirerNetworkId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAcquirerNetworkId(String value) {
        this.acquirerNetworkId = value;
    }

}
