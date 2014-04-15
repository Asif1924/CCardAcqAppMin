
package com.exacttarget.wsdl.partnerapi;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for SenderProfile complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="SenderProfile">
 *   &lt;complexContent>
 *     &lt;extension base="{http://exacttarget.com/wsdl/partnerAPI}APIObject">
 *       &lt;sequence>
 *         &lt;element name="Name" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="Description" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="FromName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="FromAddress" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="UseDefaultRMMRules" type="{http://www.w3.org/2001/XMLSchema}boolean" minOccurs="0"/>
 *         &lt;element name="AutoForwardToEmailAddress" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="AutoForwardToName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="DirectForward" type="{http://www.w3.org/2001/XMLSchema}boolean" minOccurs="0"/>
 *         &lt;element name="AutoForwardTriggeredSend" type="{http://exacttarget.com/wsdl/partnerAPI}TriggeredSendDefinition" minOccurs="0"/>
 *         &lt;element name="AutoReply" type="{http://www.w3.org/2001/XMLSchema}boolean" minOccurs="0"/>
 *         &lt;element name="AutoReplyTriggeredSend" type="{http://exacttarget.com/wsdl/partnerAPI}TriggeredSendDefinition" minOccurs="0"/>
 *         &lt;element name="SenderHeaderEmailAddress" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="SenderHeaderName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="DataRetentionPeriodLength" type="{http://www.w3.org/2001/XMLSchema}short" minOccurs="0"/>
 *         &lt;element name="DataRetentionPeriodUnitOfMeasure" type="{http://exacttarget.com/wsdl/partnerAPI}RecurrenceTypeEnum" minOccurs="0"/>
 *         &lt;element name="ReplyManagementRuleSet" type="{http://exacttarget.com/wsdl/partnerAPI}APIObject" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "SenderProfile", propOrder = {
    "name",
    "description",
    "fromName",
    "fromAddress",
    "useDefaultRMMRules",
    "autoForwardToEmailAddress",
    "autoForwardToName",
    "directForward",
    "autoForwardTriggeredSend",
    "autoReply",
    "autoReplyTriggeredSend",
    "senderHeaderEmailAddress",
    "senderHeaderName",
    "dataRetentionPeriodLength",
    "dataRetentionPeriodUnitOfMeasure",
    "replyManagementRuleSet"
})
public class SenderProfile
    extends APIObject
    implements Serializable
{

    @XmlElement(name = "Name")
    protected String name;
    @XmlElement(name = "Description")
    protected String description;
    @XmlElement(name = "FromName")
    protected String fromName;
    @XmlElement(name = "FromAddress")
    protected String fromAddress;
    @XmlElement(name = "UseDefaultRMMRules")
    protected Boolean useDefaultRMMRules;
    @XmlElement(name = "AutoForwardToEmailAddress")
    protected String autoForwardToEmailAddress;
    @XmlElement(name = "AutoForwardToName")
    protected String autoForwardToName;
    @XmlElement(name = "DirectForward")
    protected Boolean directForward;
    @XmlElement(name = "AutoForwardTriggeredSend")
    protected TriggeredSendDefinition autoForwardTriggeredSend;
    @XmlElement(name = "AutoReply")
    protected Boolean autoReply;
    @XmlElement(name = "AutoReplyTriggeredSend")
    protected TriggeredSendDefinition autoReplyTriggeredSend;
    @XmlElement(name = "SenderHeaderEmailAddress")
    protected String senderHeaderEmailAddress;
    @XmlElement(name = "SenderHeaderName")
    protected String senderHeaderName;
    @XmlElement(name = "DataRetentionPeriodLength")
    protected Short dataRetentionPeriodLength;
    @XmlElement(name = "DataRetentionPeriodUnitOfMeasure")
    protected RecurrenceTypeEnum dataRetentionPeriodUnitOfMeasure;
    @XmlElement(name = "ReplyManagementRuleSet")
    protected APIObject replyManagementRuleSet;

    /**
     * Gets the value of the name property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the value of the name property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setName(String value) {
        this.name = value;
    }

    /**
     * Gets the value of the description property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDescription() {
        return description;
    }

    /**
     * Sets the value of the description property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDescription(String value) {
        this.description = value;
    }

    /**
     * Gets the value of the fromName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFromName() {
        return fromName;
    }

    /**
     * Sets the value of the fromName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFromName(String value) {
        this.fromName = value;
    }

    /**
     * Gets the value of the fromAddress property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFromAddress() {
        return fromAddress;
    }

    /**
     * Sets the value of the fromAddress property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFromAddress(String value) {
        this.fromAddress = value;
    }

    /**
     * Gets the value of the useDefaultRMMRules property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isUseDefaultRMMRules() {
        return useDefaultRMMRules;
    }

    /**
     * Sets the value of the useDefaultRMMRules property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setUseDefaultRMMRules(Boolean value) {
        this.useDefaultRMMRules = value;
    }

    /**
     * Gets the value of the autoForwardToEmailAddress property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAutoForwardToEmailAddress() {
        return autoForwardToEmailAddress;
    }

    /**
     * Sets the value of the autoForwardToEmailAddress property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAutoForwardToEmailAddress(String value) {
        this.autoForwardToEmailAddress = value;
    }

    /**
     * Gets the value of the autoForwardToName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAutoForwardToName() {
        return autoForwardToName;
    }

    /**
     * Sets the value of the autoForwardToName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAutoForwardToName(String value) {
        this.autoForwardToName = value;
    }

    /**
     * Gets the value of the directForward property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isDirectForward() {
        return directForward;
    }

    /**
     * Sets the value of the directForward property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setDirectForward(Boolean value) {
        this.directForward = value;
    }

    /**
     * Gets the value of the autoForwardTriggeredSend property.
     * 
     * @return
     *     possible object is
     *     {@link TriggeredSendDefinition }
     *     
     */
    public TriggeredSendDefinition getAutoForwardTriggeredSend() {
        return autoForwardTriggeredSend;
    }

    /**
     * Sets the value of the autoForwardTriggeredSend property.
     * 
     * @param value
     *     allowed object is
     *     {@link TriggeredSendDefinition }
     *     
     */
    public void setAutoForwardTriggeredSend(TriggeredSendDefinition value) {
        this.autoForwardTriggeredSend = value;
    }

    /**
     * Gets the value of the autoReply property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isAutoReply() {
        return autoReply;
    }

    /**
     * Sets the value of the autoReply property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setAutoReply(Boolean value) {
        this.autoReply = value;
    }

    /**
     * Gets the value of the autoReplyTriggeredSend property.
     * 
     * @return
     *     possible object is
     *     {@link TriggeredSendDefinition }
     *     
     */
    public TriggeredSendDefinition getAutoReplyTriggeredSend() {
        return autoReplyTriggeredSend;
    }

    /**
     * Sets the value of the autoReplyTriggeredSend property.
     * 
     * @param value
     *     allowed object is
     *     {@link TriggeredSendDefinition }
     *     
     */
    public void setAutoReplyTriggeredSend(TriggeredSendDefinition value) {
        this.autoReplyTriggeredSend = value;
    }

    /**
     * Gets the value of the senderHeaderEmailAddress property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSenderHeaderEmailAddress() {
        return senderHeaderEmailAddress;
    }

    /**
     * Sets the value of the senderHeaderEmailAddress property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSenderHeaderEmailAddress(String value) {
        this.senderHeaderEmailAddress = value;
    }

    /**
     * Gets the value of the senderHeaderName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSenderHeaderName() {
        return senderHeaderName;
    }

    /**
     * Sets the value of the senderHeaderName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSenderHeaderName(String value) {
        this.senderHeaderName = value;
    }

    /**
     * Gets the value of the dataRetentionPeriodLength property.
     * 
     * @return
     *     possible object is
     *     {@link Short }
     *     
     */
    public Short getDataRetentionPeriodLength() {
        return dataRetentionPeriodLength;
    }

    /**
     * Sets the value of the dataRetentionPeriodLength property.
     * 
     * @param value
     *     allowed object is
     *     {@link Short }
     *     
     */
    public void setDataRetentionPeriodLength(Short value) {
        this.dataRetentionPeriodLength = value;
    }

    /**
     * Gets the value of the dataRetentionPeriodUnitOfMeasure property.
     * 
     * @return
     *     possible object is
     *     {@link RecurrenceTypeEnum }
     *     
     */
    public RecurrenceTypeEnum getDataRetentionPeriodUnitOfMeasure() {
        return dataRetentionPeriodUnitOfMeasure;
    }

    /**
     * Sets the value of the dataRetentionPeriodUnitOfMeasure property.
     * 
     * @param value
     *     allowed object is
     *     {@link RecurrenceTypeEnum }
     *     
     */
    public void setDataRetentionPeriodUnitOfMeasure(RecurrenceTypeEnum value) {
        this.dataRetentionPeriodUnitOfMeasure = value;
    }

    /**
     * Gets the value of the replyManagementRuleSet property.
     * 
     * @return
     *     possible object is
     *     {@link APIObject }
     *     
     */
    public APIObject getReplyManagementRuleSet() {
        return replyManagementRuleSet;
    }

    /**
     * Sets the value of the replyManagementRuleSet property.
     * 
     * @param value
     *     allowed object is
     *     {@link APIObject }
     *     
     */
    public void setReplyManagementRuleSet(APIObject value) {
        this.replyManagementRuleSet = value;
    }

}
