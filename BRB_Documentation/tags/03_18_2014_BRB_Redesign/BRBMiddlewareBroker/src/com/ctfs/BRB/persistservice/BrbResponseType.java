
package com.ctfs.BRB.persistservice;

import java.io.Serializable;
import java.math.BigInteger;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * 
 *         Response from eComm indicating the status of the request as well as the brbTransId to attach to the URL
 *         when the customer is redirected to the application page. Error messages are in here as well.
 *       
 * 
 * <p>Java class for brbResponseType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="brbResponseType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="brbTransId">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="128"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="passFail" type="{http://persistservice.BRB.ctfs.com/}passFailType"/>
 *         &lt;element name="statusCode" type="{http://www.w3.org/2001/XMLSchema}integer"/>
 *         &lt;element name="errorMessage" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "brbResponseType", propOrder = {
    "brbTransId",
    "passFail",
    "statusCode",
    "errorMessage"
})
public class BrbResponseType
    implements Serializable
{

    @XmlElement(required = true)
    protected String brbTransId;
    @XmlElement(required = true)
    protected PassFailType passFail;
    @XmlElement(required = true)
    protected BigInteger statusCode;
    protected String errorMessage;

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
     * Gets the value of the passFail property.
     * 
     * @return
     *     possible object is
     *     {@link PassFailType }
     *     
     */
    public PassFailType getPassFail() {
        return passFail;
    }

    /**
     * Sets the value of the passFail property.
     * 
     * @param value
     *     allowed object is
     *     {@link PassFailType }
     *     
     */
    public void setPassFail(PassFailType value) {
        this.passFail = value;
    }

    /**
     * Gets the value of the statusCode property.
     * 
     * @return
     *     possible object is
     *     {@link BigInteger }
     *     
     */
    public BigInteger getStatusCode() {
        return statusCode;
    }

    /**
     * Sets the value of the statusCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link BigInteger }
     *     
     */
    public void setStatusCode(BigInteger value) {
        this.statusCode = value;
    }

    /**
     * Gets the value of the errorMessage property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getErrorMessage() {
        return errorMessage;
    }

    /**
     * Sets the value of the errorMessage property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setErrorMessage(String value) {
        this.errorMessage = value;
    }

}
