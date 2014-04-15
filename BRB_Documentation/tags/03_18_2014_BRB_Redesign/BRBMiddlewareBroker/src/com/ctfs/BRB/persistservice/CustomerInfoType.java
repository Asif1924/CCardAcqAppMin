
package com.ctfs.BRB.persistservice;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * 
 *         This is the main container to hold the customer specific information.
 *         customerId, billingAddress (optional), loyaltyInfo (optional)
 *       
 * 
 * <p>Java class for customerInfoType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="customerInfoType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ecommCustomerId">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="\{[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}\}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="email" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="firstName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="lastName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="phone" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="addressDetails" type="{http://persistservice.BRB.ctfs.com/}addressDetailsType" minOccurs="0"/>
 *         &lt;element name="loyaltyDetails" type="{http://persistservice.BRB.ctfs.com/}loyaltyDetailsType" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "customerInfoType", propOrder = {
    "ecommCustomerId",
    "email",
    "firstName",
    "lastName",
    "phone",
    "addressDetails",
    "loyaltyDetails"
})
public class CustomerInfoType
    implements Serializable
{

    @XmlElement(required = true)
    protected String ecommCustomerId;
    @XmlElement(required = true)
    protected String email;
    protected String firstName;
    protected String lastName;
    protected String phone;
    protected AddressDetailsType addressDetails;
    protected LoyaltyDetailsType loyaltyDetails;

    /**
     * Gets the value of the ecommCustomerId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEcommCustomerId() {
        return ecommCustomerId;
    }

    /**
     * Sets the value of the ecommCustomerId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEcommCustomerId(String value) {
        this.ecommCustomerId = value;
    }

    /**
     * Gets the value of the email property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEmail() {
        return email;
    }

    /**
     * Sets the value of the email property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEmail(String value) {
        this.email = value;
    }

    /**
     * Gets the value of the firstName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * Sets the value of the firstName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFirstName(String value) {
        this.firstName = value;
    }

    /**
     * Gets the value of the lastName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * Sets the value of the lastName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLastName(String value) {
        this.lastName = value;
    }

    /**
     * Gets the value of the phone property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPhone() {
        return phone;
    }

    /**
     * Sets the value of the phone property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPhone(String value) {
        this.phone = value;
    }

    /**
     * Gets the value of the addressDetails property.
     * 
     * @return
     *     possible object is
     *     {@link AddressDetailsType }
     *     
     */
    public AddressDetailsType getAddressDetails() {
        return addressDetails;
    }

    /**
     * Sets the value of the addressDetails property.
     * 
     * @param value
     *     allowed object is
     *     {@link AddressDetailsType }
     *     
     */
    public void setAddressDetails(AddressDetailsType value) {
        this.addressDetails = value;
    }

    /**
     * Gets the value of the loyaltyDetails property.
     * 
     * @return
     *     possible object is
     *     {@link LoyaltyDetailsType }
     *     
     */
    public LoyaltyDetailsType getLoyaltyDetails() {
        return loyaltyDetails;
    }

    /**
     * Sets the value of the loyaltyDetails property.
     * 
     * @param value
     *     allowed object is
     *     {@link LoyaltyDetailsType }
     *     
     */
    public void setLoyaltyDetails(LoyaltyDetailsType value) {
        this.loyaltyDetails = value;
    }

}
