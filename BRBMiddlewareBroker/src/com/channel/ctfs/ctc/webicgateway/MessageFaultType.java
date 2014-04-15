
package com.channel.ctfs.ctc.webicgateway;

import java.io.Serializable;
import java.math.BigInteger;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * 
 * 						The type of the SOAP Fault that a SOAP Operation can throw.
 * 					
 * 
 * <p>Java class for MessageFaultType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="MessageFaultType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="errorCode" type="{http://www.ctc.ctfs.channel.com/WebICGateway/}ErrorCodeType"/>
 *         &lt;element name="errorMessageText" type="{http://www.ctc.ctfs.channel.com/WebICGateway/}ErrorMessageTextType"/>
 *         &lt;element name="errorLocation" type="{http://www.ctc.ctfs.channel.com/WebICGateway/}ErrorLocationType"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "MessageFaultType", propOrder = {
    "errorCode",
    "errorMessageText",
    "errorLocation"
})
public class MessageFaultType
    implements Serializable
{

    @XmlElement(required = true)
    protected BigInteger errorCode;
    @XmlElement(required = true)
    protected String errorMessageText;
    @XmlElement(required = true)
    protected ErrorLocationType errorLocation;

    /**
     * Gets the value of the errorCode property.
     * 
     * @return
     *     possible object is
     *     {@link BigInteger }
     *     
     */
    public BigInteger getErrorCode() {
        return errorCode;
    }

    /**
     * Sets the value of the errorCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link BigInteger }
     *     
     */
    public void setErrorCode(BigInteger value) {
        this.errorCode = value;
    }

    /**
     * Gets the value of the errorMessageText property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getErrorMessageText() {
        return errorMessageText;
    }

    /**
     * Sets the value of the errorMessageText property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setErrorMessageText(String value) {
        this.errorMessageText = value;
    }

    /**
     * Gets the value of the errorLocation property.
     * 
     * @return
     *     possible object is
     *     {@link ErrorLocationType }
     *     
     */
    public ErrorLocationType getErrorLocation() {
        return errorLocation;
    }

    /**
     * Sets the value of the errorLocation property.
     * 
     * @param value
     *     allowed object is
     *     {@link ErrorLocationType }
     *     
     */
    public void setErrorLocation(ErrorLocationType value) {
        this.errorLocation = value;
    }

}
