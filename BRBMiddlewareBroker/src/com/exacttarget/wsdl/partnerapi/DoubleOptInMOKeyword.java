
package com.exacttarget.wsdl.partnerapi;

import java.io.Serializable;
import java.util.ArrayList;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for DoubleOptInMOKeyword complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="DoubleOptInMOKeyword">
 *   &lt;complexContent>
 *     &lt;extension base="{http://exacttarget.com/wsdl/partnerAPI}BaseMOKeyword">
 *       &lt;sequence>
 *         &lt;element name="DefaultPublication" type="{http://exacttarget.com/wsdl/partnerAPI}List"/>
 *         &lt;element name="InvalidPublicationMessage" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="InvalidResponseMessage" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="MissingPublicationMessage" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="NeedPublicationMessage" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="PromptMessage" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="SuccessMessage" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="UnexpectedErrorMessage" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="ValidPublications">
 *           &lt;complexType>
 *             &lt;complexContent>
 *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                 &lt;sequence>
 *                   &lt;element name="ValidPublication" type="{http://exacttarget.com/wsdl/partnerAPI}List" maxOccurs="unbounded"/>
 *                 &lt;/sequence>
 *               &lt;/restriction>
 *             &lt;/complexContent>
 *           &lt;/complexType>
 *         &lt;/element>
 *         &lt;element name="ValidResponses">
 *           &lt;complexType>
 *             &lt;complexContent>
 *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                 &lt;sequence>
 *                   &lt;element name="ValidResponse" type="{http://www.w3.org/2001/XMLSchema}string" maxOccurs="unbounded"/>
 *                 &lt;/sequence>
 *               &lt;/restriction>
 *             &lt;/complexContent>
 *           &lt;/complexType>
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
@XmlType(name = "DoubleOptInMOKeyword", propOrder = {
    "defaultPublication",
    "invalidPublicationMessage",
    "invalidResponseMessage",
    "missingPublicationMessage",
    "needPublicationMessage",
    "promptMessage",
    "successMessage",
    "unexpectedErrorMessage",
    "validPublications",
    "validResponses"
})
public class DoubleOptInMOKeyword
    extends BaseMOKeyword
    implements Serializable
{

    @XmlElement(name = "DefaultPublication", required = true)
    protected com.exacttarget.wsdl.partnerapi.List defaultPublication;
    @XmlElement(name = "InvalidPublicationMessage", required = true)
    protected String invalidPublicationMessage;
    @XmlElement(name = "InvalidResponseMessage", required = true)
    protected String invalidResponseMessage;
    @XmlElement(name = "MissingPublicationMessage", required = true)
    protected String missingPublicationMessage;
    @XmlElement(name = "NeedPublicationMessage", required = true)
    protected String needPublicationMessage;
    @XmlElement(name = "PromptMessage", required = true)
    protected String promptMessage;
    @XmlElement(name = "SuccessMessage", required = true)
    protected String successMessage;
    @XmlElement(name = "UnexpectedErrorMessage", required = true)
    protected String unexpectedErrorMessage;
    @XmlElement(name = "ValidPublications", required = true)
    protected DoubleOptInMOKeyword.ValidPublications validPublications;
    @XmlElement(name = "ValidResponses", required = true)
    protected DoubleOptInMOKeyword.ValidResponses validResponses;

    /**
     * Gets the value of the defaultPublication property.
     * 
     * @return
     *     possible object is
     *     {@link com.exacttarget.wsdl.partnerapi.List }
     *     
     */
    public com.exacttarget.wsdl.partnerapi.List getDefaultPublication() {
        return defaultPublication;
    }

    /**
     * Sets the value of the defaultPublication property.
     * 
     * @param value
     *     allowed object is
     *     {@link com.exacttarget.wsdl.partnerapi.List }
     *     
     */
    public void setDefaultPublication(com.exacttarget.wsdl.partnerapi.List value) {
        this.defaultPublication = value;
    }

    /**
     * Gets the value of the invalidPublicationMessage property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvalidPublicationMessage() {
        return invalidPublicationMessage;
    }

    /**
     * Sets the value of the invalidPublicationMessage property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvalidPublicationMessage(String value) {
        this.invalidPublicationMessage = value;
    }

    /**
     * Gets the value of the invalidResponseMessage property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvalidResponseMessage() {
        return invalidResponseMessage;
    }

    /**
     * Sets the value of the invalidResponseMessage property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvalidResponseMessage(String value) {
        this.invalidResponseMessage = value;
    }

    /**
     * Gets the value of the missingPublicationMessage property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMissingPublicationMessage() {
        return missingPublicationMessage;
    }

    /**
     * Sets the value of the missingPublicationMessage property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMissingPublicationMessage(String value) {
        this.missingPublicationMessage = value;
    }

    /**
     * Gets the value of the needPublicationMessage property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNeedPublicationMessage() {
        return needPublicationMessage;
    }

    /**
     * Sets the value of the needPublicationMessage property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNeedPublicationMessage(String value) {
        this.needPublicationMessage = value;
    }

    /**
     * Gets the value of the promptMessage property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPromptMessage() {
        return promptMessage;
    }

    /**
     * Sets the value of the promptMessage property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPromptMessage(String value) {
        this.promptMessage = value;
    }

    /**
     * Gets the value of the successMessage property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSuccessMessage() {
        return successMessage;
    }

    /**
     * Sets the value of the successMessage property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSuccessMessage(String value) {
        this.successMessage = value;
    }

    /**
     * Gets the value of the unexpectedErrorMessage property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUnexpectedErrorMessage() {
        return unexpectedErrorMessage;
    }

    /**
     * Sets the value of the unexpectedErrorMessage property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUnexpectedErrorMessage(String value) {
        this.unexpectedErrorMessage = value;
    }

    /**
     * Gets the value of the validPublications property.
     * 
     * @return
     *     possible object is
     *     {@link DoubleOptInMOKeyword.ValidPublications }
     *     
     */
    public DoubleOptInMOKeyword.ValidPublications getValidPublications() {
        return validPublications;
    }

    /**
     * Sets the value of the validPublications property.
     * 
     * @param value
     *     allowed object is
     *     {@link DoubleOptInMOKeyword.ValidPublications }
     *     
     */
    public void setValidPublications(DoubleOptInMOKeyword.ValidPublications value) {
        this.validPublications = value;
    }

    /**
     * Gets the value of the validResponses property.
     * 
     * @return
     *     possible object is
     *     {@link DoubleOptInMOKeyword.ValidResponses }
     *     
     */
    public DoubleOptInMOKeyword.ValidResponses getValidResponses() {
        return validResponses;
    }

    /**
     * Sets the value of the validResponses property.
     * 
     * @param value
     *     allowed object is
     *     {@link DoubleOptInMOKeyword.ValidResponses }
     *     
     */
    public void setValidResponses(DoubleOptInMOKeyword.ValidResponses value) {
        this.validResponses = value;
    }


    /**
     * <p>Java class for anonymous complex type.
     * 
     * <p>The following schema fragment specifies the expected content contained within this class.
     * 
     * <pre>
     * &lt;complexType>
     *   &lt;complexContent>
     *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
     *       &lt;sequence>
     *         &lt;element name="ValidPublication" type="{http://exacttarget.com/wsdl/partnerAPI}List" maxOccurs="unbounded"/>
     *       &lt;/sequence>
     *     &lt;/restriction>
     *   &lt;/complexContent>
     * &lt;/complexType>
     * </pre>
     * 
     * 
     */
    @XmlAccessorType(XmlAccessType.FIELD)
    @XmlType(name = "", propOrder = {
        "validPublication"
    })
    public static class ValidPublications
        implements Serializable
    {

        @XmlElement(name = "ValidPublication", required = true)
        protected java.util.List<com.exacttarget.wsdl.partnerapi.List> validPublication;

        /**
         * Gets the value of the validPublication property.
         * 
         * <p>
         * This accessor method returns a reference to the live list,
         * not a snapshot. Therefore any modification you make to the
         * returned list will be present inside the JAXB object.
         * This is why there is not a <CODE>set</CODE> method for the validPublication property.
         * 
         * <p>
         * For example, to add a new item, do as follows:
         * <pre>
         *    getValidPublication().add(newItem);
         * </pre>
         * 
         * 
         * <p>
         * Objects of the following type(s) are allowed in the list
         * {@link com.exacttarget.wsdl.partnerapi.List }
         * 
         * 
         */
        public java.util.List<com.exacttarget.wsdl.partnerapi.List> getValidPublication() {
            if (validPublication == null) {
                validPublication = new ArrayList<com.exacttarget.wsdl.partnerapi.List>();
            }
            return this.validPublication;
        }

    }


    /**
     * <p>Java class for anonymous complex type.
     * 
     * <p>The following schema fragment specifies the expected content contained within this class.
     * 
     * <pre>
     * &lt;complexType>
     *   &lt;complexContent>
     *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
     *       &lt;sequence>
     *         &lt;element name="ValidResponse" type="{http://www.w3.org/2001/XMLSchema}string" maxOccurs="unbounded"/>
     *       &lt;/sequence>
     *     &lt;/restriction>
     *   &lt;/complexContent>
     * &lt;/complexType>
     * </pre>
     * 
     * 
     */
    @XmlAccessorType(XmlAccessType.FIELD)
    @XmlType(name = "", propOrder = {
        "validResponse"
    })
    public static class ValidResponses
        implements Serializable
    {

        @XmlElement(name = "ValidResponse", required = true)
        protected java.util.List<String> validResponse;

        /**
         * Gets the value of the validResponse property.
         * 
         * <p>
         * This accessor method returns a reference to the live list,
         * not a snapshot. Therefore any modification you make to the
         * returned list will be present inside the JAXB object.
         * This is why there is not a <CODE>set</CODE> method for the validResponse property.
         * 
         * <p>
         * For example, to add a new item, do as follows:
         * <pre>
         *    getValidResponse().add(newItem);
         * </pre>
         * 
         * 
         * <p>
         * Objects of the following type(s) are allowed in the list
         * {@link String }
         * 
         * 
         */
        public java.util.List<String> getValidResponse() {
            if (validResponse == null) {
                validResponse = new ArrayList<String>();
            }
            return this.validResponse;
        }

    }

}
