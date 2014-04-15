
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for AdditionalResponseData complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="AdditionalResponseData">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="pinOffset" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;minLength value="1"/>
 *               &lt;maxLength value="25"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="visaCashLoadSignature" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;minLength value="1"/>
 *               &lt;maxLength value="16"/>
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
@XmlType(name = "AdditionalResponseData", propOrder = {
    "pinOffset",
    "visaCashLoadSignature"
})
@XmlSeeAlso({
    AdditionalResponseDataResponse.class
})
public class AdditionalResponseData
    implements Serializable
{

    protected String pinOffset;
    protected String visaCashLoadSignature;

    /**
     * Gets the value of the pinOffset property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPinOffset() {
        return pinOffset;
    }

    /**
     * Sets the value of the pinOffset property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPinOffset(String value) {
        this.pinOffset = value;
    }

    /**
     * Gets the value of the visaCashLoadSignature property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getVisaCashLoadSignature() {
        return visaCashLoadSignature;
    }

    /**
     * Sets the value of the visaCashLoadSignature property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setVisaCashLoadSignature(String value) {
        this.visaCashLoadSignature = value;
    }

}
