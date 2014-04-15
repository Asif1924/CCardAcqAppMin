
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for PointOfServiceDataCode complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="PointOfServiceDataCode">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="cardDataInputCapability">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="1"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cardholderAuthenticationCapability">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="1"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cardCaptureCapability">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="1"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="operatingEnvironment">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="1"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cardholderIsPresent">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="1"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cardIsPresent">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="1"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cardDataInputMode">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="1"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cardholderAuthenticationMethod">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="1"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cardholderAuthenticationEntity">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="1"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cardDataOutputCapability">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="1"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="terminalOutputCapability">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="1"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="pinCaptureCapability">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="1"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="terminalOperator">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="1"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="terminalType">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="2"/>
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
@XmlType(name = "PointOfServiceDataCode", propOrder = {
    "cardDataInputCapability",
    "cardholderAuthenticationCapability",
    "cardCaptureCapability",
    "operatingEnvironment",
    "cardholderIsPresent",
    "cardIsPresent",
    "cardDataInputMode",
    "cardholderAuthenticationMethod",
    "cardholderAuthenticationEntity",
    "cardDataOutputCapability",
    "terminalOutputCapability",
    "pinCaptureCapability",
    "terminalOperator",
    "terminalType"
})
public class PointOfServiceDataCode
    implements Serializable
{

    @XmlElement(required = true)
    protected String cardDataInputCapability;
    @XmlElement(required = true)
    protected String cardholderAuthenticationCapability;
    @XmlElement(required = true)
    protected String cardCaptureCapability;
    @XmlElement(required = true)
    protected String operatingEnvironment;
    @XmlElement(required = true)
    protected String cardholderIsPresent;
    @XmlElement(required = true)
    protected String cardIsPresent;
    @XmlElement(required = true)
    protected String cardDataInputMode;
    @XmlElement(required = true)
    protected String cardholderAuthenticationMethod;
    @XmlElement(required = true)
    protected String cardholderAuthenticationEntity;
    @XmlElement(required = true)
    protected String cardDataOutputCapability;
    @XmlElement(required = true)
    protected String terminalOutputCapability;
    @XmlElement(required = true)
    protected String pinCaptureCapability;
    @XmlElement(required = true)
    protected String terminalOperator;
    @XmlElement(required = true)
    protected String terminalType;

    /**
     * Gets the value of the cardDataInputCapability property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardDataInputCapability() {
        return cardDataInputCapability;
    }

    /**
     * Sets the value of the cardDataInputCapability property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardDataInputCapability(String value) {
        this.cardDataInputCapability = value;
    }

    /**
     * Gets the value of the cardholderAuthenticationCapability property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardholderAuthenticationCapability() {
        return cardholderAuthenticationCapability;
    }

    /**
     * Sets the value of the cardholderAuthenticationCapability property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardholderAuthenticationCapability(String value) {
        this.cardholderAuthenticationCapability = value;
    }

    /**
     * Gets the value of the cardCaptureCapability property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardCaptureCapability() {
        return cardCaptureCapability;
    }

    /**
     * Sets the value of the cardCaptureCapability property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardCaptureCapability(String value) {
        this.cardCaptureCapability = value;
    }

    /**
     * Gets the value of the operatingEnvironment property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOperatingEnvironment() {
        return operatingEnvironment;
    }

    /**
     * Sets the value of the operatingEnvironment property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOperatingEnvironment(String value) {
        this.operatingEnvironment = value;
    }

    /**
     * Gets the value of the cardholderIsPresent property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardholderIsPresent() {
        return cardholderIsPresent;
    }

    /**
     * Sets the value of the cardholderIsPresent property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardholderIsPresent(String value) {
        this.cardholderIsPresent = value;
    }

    /**
     * Gets the value of the cardIsPresent property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardIsPresent() {
        return cardIsPresent;
    }

    /**
     * Sets the value of the cardIsPresent property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardIsPresent(String value) {
        this.cardIsPresent = value;
    }

    /**
     * Gets the value of the cardDataInputMode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardDataInputMode() {
        return cardDataInputMode;
    }

    /**
     * Sets the value of the cardDataInputMode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardDataInputMode(String value) {
        this.cardDataInputMode = value;
    }

    /**
     * Gets the value of the cardholderAuthenticationMethod property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardholderAuthenticationMethod() {
        return cardholderAuthenticationMethod;
    }

    /**
     * Sets the value of the cardholderAuthenticationMethod property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardholderAuthenticationMethod(String value) {
        this.cardholderAuthenticationMethod = value;
    }

    /**
     * Gets the value of the cardholderAuthenticationEntity property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardholderAuthenticationEntity() {
        return cardholderAuthenticationEntity;
    }

    /**
     * Sets the value of the cardholderAuthenticationEntity property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardholderAuthenticationEntity(String value) {
        this.cardholderAuthenticationEntity = value;
    }

    /**
     * Gets the value of the cardDataOutputCapability property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardDataOutputCapability() {
        return cardDataOutputCapability;
    }

    /**
     * Sets the value of the cardDataOutputCapability property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardDataOutputCapability(String value) {
        this.cardDataOutputCapability = value;
    }

    /**
     * Gets the value of the terminalOutputCapability property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTerminalOutputCapability() {
        return terminalOutputCapability;
    }

    /**
     * Sets the value of the terminalOutputCapability property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTerminalOutputCapability(String value) {
        this.terminalOutputCapability = value;
    }

    /**
     * Gets the value of the pinCaptureCapability property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPinCaptureCapability() {
        return pinCaptureCapability;
    }

    /**
     * Sets the value of the pinCaptureCapability property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPinCaptureCapability(String value) {
        this.pinCaptureCapability = value;
    }

    /**
     * Gets the value of the terminalOperator property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTerminalOperator() {
        return terminalOperator;
    }

    /**
     * Sets the value of the terminalOperator property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTerminalOperator(String value) {
        this.terminalOperator = value;
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

}
