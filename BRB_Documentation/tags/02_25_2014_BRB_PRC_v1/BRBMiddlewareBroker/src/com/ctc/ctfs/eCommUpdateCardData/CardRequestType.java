
package com.ctc.ctfs.eCommUpdateCardData;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for cardRequestType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="cardRequestType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="brbTransId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="customerInfo" type="{http://persistservice.cantire.com/}customerInfoType"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "cardRequestType", propOrder = {
    "brbTransId",
    "customerInfo"
})
public class CardRequestType
    implements Serializable
{

    @XmlElement(required = true, nillable = true)
    protected String brbTransId;
    @XmlElement(required = true, nillable = true)
    protected CustomerInfoType customerInfo;

    /**
     * Gets the value of the brbTransId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBrbTransId() {
        return brbTransId;
    }

    /**
     * Sets the value of the brbTransId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBrbTransId(String value) {
        this.brbTransId = value;
    }

    /**
     * Gets the value of the customerInfo property.
     * 
     * @return
     *     possible object is
     *     {@link CustomerInfoType }
     *     
     */
    public CustomerInfoType getCustomerInfo() {
        return customerInfo;
    }

    /**
     * Sets the value of the customerInfo property.
     * 
     * @param value
     *     allowed object is
     *     {@link CustomerInfoType }
     *     
     */
    public void setCustomerInfo(CustomerInfoType value) {
        this.customerInfo = value;
    }

}