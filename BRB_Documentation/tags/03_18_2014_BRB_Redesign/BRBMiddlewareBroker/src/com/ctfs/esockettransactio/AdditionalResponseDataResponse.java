
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for AdditionalResponseDataResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="AdditionalResponseDataResponse">
 *   &lt;complexContent>
 *     &lt;extension base="{http://ctfs.com/esocketTransactIo/}AdditionalResponseData">
 *       &lt;sequence>
 *         &lt;element name="supplementalData" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "AdditionalResponseDataResponse", propOrder = {
    "supplementalData"
})
public class AdditionalResponseDataResponse
    extends AdditionalResponseData
    implements Serializable
{

    protected String supplementalData;

    /**
     * Gets the value of the supplementalData property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSupplementalData() {
        return supplementalData;
    }

    /**
     * Sets the value of the supplementalData property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSupplementalData(String value) {
        this.supplementalData = value;
    }

}
