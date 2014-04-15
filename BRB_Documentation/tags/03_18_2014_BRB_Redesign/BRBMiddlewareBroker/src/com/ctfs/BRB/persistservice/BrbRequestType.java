
package com.ctfs.BRB.persistservice;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * 
 *         Objects that represent the request. Will consist of ecomm customerInfo
 *       
 * 
 * <p>Java class for brbRequestType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="brbRequestType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="requestingSystem" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="customerInfo" type="{http://persistservice.BRB.ctfs.com/}customerInfoType"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "brbRequestType", propOrder = {
    "requestingSystem",
    "customerInfo"
})
public class BrbRequestType
    implements Serializable
{

    @XmlElement(required = true)
    protected String requestingSystem;
    @XmlElement(required = true)
    protected CustomerInfoType customerInfo;

    /**
     * Gets the value of the requestingSystem property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRequestingSystem() {
        return requestingSystem;
    }

    /**
     * Sets the value of the requestingSystem property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRequestingSystem(String value) {
        this.requestingSystem = value;
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
