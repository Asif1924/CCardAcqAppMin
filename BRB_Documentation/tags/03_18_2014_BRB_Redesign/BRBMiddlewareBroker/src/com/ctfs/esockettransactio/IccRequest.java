
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for IccRequest complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="IccRequest">
 *   &lt;complexContent>
 *     &lt;extension base="{http://ctfs.com/esocketTransactIo/}Icc">
 *       &lt;sequence>
 *         &lt;element name="issuerScriptResults" minOccurs="0">
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
@XmlType(name = "IccRequest", propOrder = {
    "issuerScriptResults"
})
public class IccRequest
    extends Icc
    implements Serializable
{

    protected String issuerScriptResults;

    /**
     * Gets the value of the issuerScriptResults property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIssuerScriptResults() {
        return issuerScriptResults;
    }

    /**
     * Sets the value of the issuerScriptResults property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIssuerScriptResults(String value) {
        this.issuerScriptResults = value;
    }

}
