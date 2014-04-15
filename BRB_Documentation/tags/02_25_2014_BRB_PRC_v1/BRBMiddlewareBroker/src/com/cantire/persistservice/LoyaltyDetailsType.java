
package com.cantire.persistservice;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * 
 *         *** FUTURE USAGE ***
 *         *** DO NOT USE YET ***
 * 
 *         Represents the loyalty details. This may not be present on a request
 * 
 *         If loyaltyDetailsType Present, fields are required.
 *       
 * 
 * <p>Java class for loyaltyDetailsType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="loyaltyDetailsType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="loyaltyProgram" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="loyaltyNumber" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "loyaltyDetailsType", propOrder = {
    "loyaltyProgram",
    "loyaltyNumber"
})
public class LoyaltyDetailsType
    implements Serializable
{

    @XmlElement(required = true)
    protected String loyaltyProgram;
    @XmlElement(required = true)
    protected String loyaltyNumber;

    /**
     * Gets the value of the loyaltyProgram property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLoyaltyProgram() {
        return loyaltyProgram;
    }

    /**
     * Sets the value of the loyaltyProgram property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLoyaltyProgram(String value) {
        this.loyaltyProgram = value;
    }

    /**
     * Gets the value of the loyaltyNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLoyaltyNumber() {
        return loyaltyNumber;
    }

    /**
     * Sets the value of the loyaltyNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLoyaltyNumber(String value) {
        this.loyaltyNumber = value;
    }

}
