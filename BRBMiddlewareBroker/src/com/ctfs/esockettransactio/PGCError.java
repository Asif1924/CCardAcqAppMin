
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


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
 *         &lt;element name="ErrorCode" type="{http://ctfs.com/esocketTransactIo/}ErrorCodeType"/>
 *         &lt;element name="ErrorMessage" type="{http://ctfs.com/esocketTransactIo/}ErrorMessageType"/>
 *         &lt;element name="ErrorDetectedBy" type="{http://ctfs.com/esocketTransactIo/}ErrorLocationType"/>
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
    "errorCode",
    "errorMessage",
    "errorDetectedBy"
})
@XmlRootElement(name = "PGCError")
public class PGCError
    implements Serializable
{

    @XmlElement(name = "ErrorCode", required = true)
    protected String errorCode;
    @XmlElement(name = "ErrorMessage", required = true)
    protected String errorMessage;
    @XmlElement(name = "ErrorDetectedBy", required = true)
    protected ErrorLocationType errorDetectedBy;

    /**
     * Gets the value of the errorCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getErrorCode() {
        return errorCode;
    }

    /**
     * Sets the value of the errorCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setErrorCode(String value) {
        this.errorCode = value;
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

    /**
     * Gets the value of the errorDetectedBy property.
     * 
     * @return
     *     possible object is
     *     {@link ErrorLocationType }
     *     
     */
    public ErrorLocationType getErrorDetectedBy() {
        return errorDetectedBy;
    }

    /**
     * Sets the value of the errorDetectedBy property.
     * 
     * @param value
     *     allowed object is
     *     {@link ErrorLocationType }
     *     
     */
    public void setErrorDetectedBy(ErrorLocationType value) {
        this.errorDetectedBy = value;
    }

}
