
package com.ctc.ctfs.eCommUpdateCardData;

import java.io.Serializable;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for customerInfoType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="customerInfoType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ecommCustomerId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="email" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="firstName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="lastName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="phone" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="cardDetails" type="{http://persistservice.cantire.com/}cardDetailsType"/>
 *         &lt;element name="addressDetails" type="{http://persistservice.cantire.com/}addressDetailsType" minOccurs="0"/>
 *         &lt;element name="loyaltyDetails" type="{http://persistservice.cantire.com/}loyaltyDetailsType" minOccurs="0"/>
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
    "cardDetails",
    "addressDetails",
    "loyaltyDetails"
})
public class CustomerInfoType
    implements Serializable
{

    @XmlElement(required = true, nillable = true)
    protected String ecommCustomerId;
    @XmlElementRef(name = "email", namespace = "http://persistservice.cantire.com/", type = JAXBElement.class)
    protected JAXBElement<String> email;
    @XmlElementRef(name = "firstName", namespace = "http://persistservice.cantire.com/", type = JAXBElement.class)
    protected JAXBElement<String> firstName;
    @XmlElementRef(name = "lastName", namespace = "http://persistservice.cantire.com/", type = JAXBElement.class)
    protected JAXBElement<String> lastName;
    @XmlElementRef(name = "phone", namespace = "http://persistservice.cantire.com/", type = JAXBElement.class)
    protected JAXBElement<String> phone;
    @XmlElement(required = true, nillable = true)
    protected CardDetailsType cardDetails;
    @XmlElementRef(name = "addressDetails", namespace = "http://persistservice.cantire.com/", type = JAXBElement.class)
    protected JAXBElement<AddressDetailsType> addressDetails;
    @XmlElementRef(name = "loyaltyDetails", namespace = "http://persistservice.cantire.com/", type = JAXBElement.class)
    protected JAXBElement<LoyaltyDetailsType> loyaltyDetails;

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
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getEmail() {
        return email;
    }

    /**
     * Sets the value of the email property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setEmail(JAXBElement<String> value) {
        this.email = ((JAXBElement<String> ) value);
    }

    /**
     * Gets the value of the firstName property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getFirstName() {
        return firstName;
    }

    /**
     * Sets the value of the firstName property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setFirstName(JAXBElement<String> value) {
        this.firstName = ((JAXBElement<String> ) value);
    }

    /**
     * Gets the value of the lastName property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getLastName() {
        return lastName;
    }

    /**
     * Sets the value of the lastName property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setLastName(JAXBElement<String> value) {
        this.lastName = ((JAXBElement<String> ) value);
    }

    /**
     * Gets the value of the phone property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getPhone() {
        return phone;
    }

    /**
     * Sets the value of the phone property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setPhone(JAXBElement<String> value) {
        this.phone = ((JAXBElement<String> ) value);
    }

    /**
     * Gets the value of the cardDetails property.
     * 
     * @return
     *     possible object is
     *     {@link CardDetailsType }
     *     
     */
    public CardDetailsType getCardDetails() {
        return cardDetails;
    }

    /**
     * Sets the value of the cardDetails property.
     * 
     * @param value
     *     allowed object is
     *     {@link CardDetailsType }
     *     
     */
    public void setCardDetails(CardDetailsType value) {
        this.cardDetails = value;
    }

    /**
     * Gets the value of the addressDetails property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link AddressDetailsType }{@code >}
     *     
     */
    public JAXBElement<AddressDetailsType> getAddressDetails() {
        return addressDetails;
    }

    /**
     * Sets the value of the addressDetails property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link AddressDetailsType }{@code >}
     *     
     */
    public void setAddressDetails(JAXBElement<AddressDetailsType> value) {
        this.addressDetails = ((JAXBElement<AddressDetailsType> ) value);
    }

    /**
     * Gets the value of the loyaltyDetails property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link LoyaltyDetailsType }{@code >}
     *     
     */
    public JAXBElement<LoyaltyDetailsType> getLoyaltyDetails() {
        return loyaltyDetails;
    }

    /**
     * Sets the value of the loyaltyDetails property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link LoyaltyDetailsType }{@code >}
     *     
     */
    public void setLoyaltyDetails(JAXBElement<LoyaltyDetailsType> value) {
        this.loyaltyDetails = ((JAXBElement<LoyaltyDetailsType> ) value);
    }

}
