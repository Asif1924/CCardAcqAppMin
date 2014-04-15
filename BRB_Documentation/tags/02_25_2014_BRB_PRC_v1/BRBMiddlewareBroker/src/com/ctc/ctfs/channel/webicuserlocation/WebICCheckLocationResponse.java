
package com.ctc.ctfs.channel.webicuserlocation;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import com.ctc.ctfs.channel.AddressProvinceType;
import com.ctc.ctfs.channel.MessageTextType;


/**
 * <p>Java class for WebICCheckLocationResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="WebICCheckLocationResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="Message" type="{http://www.channel.ctfs.ctc.com}messageTextType"/>
 *         &lt;element name="OutletName" type="{http://www.channel.ctfs.ctc.com}outletNameType"/>
 *         &lt;element name="OutletNumber" type="{http://www.channel.ctfs.ctc.com}outletNumberType"/>
 *         &lt;element name="OutletStreet" type="{http://www.channel.ctfs.ctc.com}addressLine1Type"/>
 *         &lt;element name="OutletCity" type="{http://www.channel.ctfs.ctc.com}addressMunicipalityType"/>
 *         &lt;element name="OutletProvince" type="{http://www.channel.ctfs.ctc.com}addressProvinceType"/>
 *         &lt;element name="OutletPostal" type="{http://www.channel.ctfs.ctc.com}addressPostalCodeType"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "WebICCheckLocationResponse", propOrder = {
    "message",
    "outletName",
    "outletNumber",
    "outletStreet",
    "outletCity",
    "outletProvince",
    "outletPostal"
})
public class WebICCheckLocationResponse
    implements Serializable
{

    @XmlElement(name = "Message", required = true)
    protected MessageTextType message;
    @XmlElement(name = "OutletName", required = true)
    protected String outletName;
    @XmlElement(name = "OutletNumber", required = true)
    protected String outletNumber;
    @XmlElement(name = "OutletStreet", required = true)
    protected String outletStreet;
    @XmlElement(name = "OutletCity", required = true)
    protected String outletCity;
    @XmlElement(name = "OutletProvince", required = true)
    protected AddressProvinceType outletProvince;
    @XmlElement(name = "OutletPostal", required = true)
    protected String outletPostal;

    /**
     * Gets the value of the message property.
     * 
     * @return
     *     possible object is
     *     {@link MessageTextType }
     *     
     */
    public MessageTextType getMessage() {
        return message;
    }

    /**
     * Sets the value of the message property.
     * 
     * @param value
     *     allowed object is
     *     {@link MessageTextType }
     *     
     */
    public void setMessage(MessageTextType value) {
        this.message = value;
    }

    /**
     * Gets the value of the outletName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOutletName() {
        return outletName;
    }

    /**
     * Sets the value of the outletName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOutletName(String value) {
        this.outletName = value;
    }

    /**
     * Gets the value of the outletNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOutletNumber() {
        return outletNumber;
    }

    /**
     * Sets the value of the outletNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOutletNumber(String value) {
        this.outletNumber = value;
    }

    /**
     * Gets the value of the outletStreet property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOutletStreet() {
        return outletStreet;
    }

    /**
     * Sets the value of the outletStreet property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOutletStreet(String value) {
        this.outletStreet = value;
    }

    /**
     * Gets the value of the outletCity property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOutletCity() {
        return outletCity;
    }

    /**
     * Sets the value of the outletCity property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOutletCity(String value) {
        this.outletCity = value;
    }

    /**
     * Gets the value of the outletProvince property.
     * 
     * @return
     *     possible object is
     *     {@link AddressProvinceType }
     *     
     */
    public AddressProvinceType getOutletProvince() {
        return outletProvince;
    }

    /**
     * Sets the value of the outletProvince property.
     * 
     * @param value
     *     allowed object is
     *     {@link AddressProvinceType }
     *     
     */
    public void setOutletProvince(AddressProvinceType value) {
        this.outletProvince = value;
    }

    /**
     * Gets the value of the outletPostal property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOutletPostal() {
        return outletPostal;
    }

    /**
     * Sets the value of the outletPostal property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOutletPostal(String value) {
        this.outletPostal = value;
    }

}
