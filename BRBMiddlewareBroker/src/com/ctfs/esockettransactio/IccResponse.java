
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for IccResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="IccResponse">
 *   &lt;complexContent>
 *     &lt;extension base="{http://ctfs.com/esocketTransactIo/}Icc">
 *       &lt;sequence>
 *         &lt;element name="issuerScriptTemplate1" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="issuerScriptTemplate2" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="postilionIccResponseData" type="{http://ctfs.com/esocketTransactIo/}PostilionIccResponseData" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "IccResponse", propOrder = {
    "issuerScriptTemplate1",
    "issuerScriptTemplate2",
    "postilionIccResponseData"
})
public class IccResponse
    extends Icc
    implements Serializable
{

    protected String issuerScriptTemplate1;
    protected String issuerScriptTemplate2;
    protected PostilionIccResponseData postilionIccResponseData;

    /**
     * Gets the value of the issuerScriptTemplate1 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIssuerScriptTemplate1() {
        return issuerScriptTemplate1;
    }

    /**
     * Sets the value of the issuerScriptTemplate1 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIssuerScriptTemplate1(String value) {
        this.issuerScriptTemplate1 = value;
    }

    /**
     * Gets the value of the issuerScriptTemplate2 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIssuerScriptTemplate2() {
        return issuerScriptTemplate2;
    }

    /**
     * Sets the value of the issuerScriptTemplate2 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIssuerScriptTemplate2(String value) {
        this.issuerScriptTemplate2 = value;
    }

    /**
     * Gets the value of the postilionIccResponseData property.
     * 
     * @return
     *     possible object is
     *     {@link PostilionIccResponseData }
     *     
     */
    public PostilionIccResponseData getPostilionIccResponseData() {
        return postilionIccResponseData;
    }

    /**
     * Sets the value of the postilionIccResponseData property.
     * 
     * @param value
     *     allowed object is
     *     {@link PostilionIccResponseData }
     *     
     */
    public void setPostilionIccResponseData(PostilionIccResponseData value) {
        this.postilionIccResponseData = value;
    }

}
