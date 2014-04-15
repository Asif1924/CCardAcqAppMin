
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for PostilionIccResponseData complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="PostilionIccResponseData">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="responseCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cvrAuthenticationResults" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="tvrAuthenticationResults" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
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
@XmlType(name = "PostilionIccResponseData", propOrder = {
    "responseCode",
    "cvrAuthenticationResults",
    "tvrAuthenticationResults"
})
public class PostilionIccResponseData
    implements Serializable
{

    protected String responseCode;
    protected String cvrAuthenticationResults;
    protected String tvrAuthenticationResults;

    /**
     * Gets the value of the responseCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getResponseCode() {
        return responseCode;
    }

    /**
     * Sets the value of the responseCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setResponseCode(String value) {
        this.responseCode = value;
    }

    /**
     * Gets the value of the cvrAuthenticationResults property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCvrAuthenticationResults() {
        return cvrAuthenticationResults;
    }

    /**
     * Sets the value of the cvrAuthenticationResults property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCvrAuthenticationResults(String value) {
        this.cvrAuthenticationResults = value;
    }

    /**
     * Gets the value of the tvrAuthenticationResults property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTvrAuthenticationResults() {
        return tvrAuthenticationResults;
    }

    /**
     * Sets the value of the tvrAuthenticationResults property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTvrAuthenticationResults(String value) {
        this.tvrAuthenticationResults = value;
    }

}
