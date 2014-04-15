
package com.exacttarget.wsdl.partnerapi;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;


/**
 * Maybe add verb here...
 * 
 * <p>Java class for BaseMOKeyword complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="BaseMOKeyword">
 *   &lt;complexContent>
 *     &lt;extension base="{http://exacttarget.com/wsdl/partnerAPI}APIObject">
 *       &lt;sequence>
 *         &lt;element name="IsDefaultKeyword" type="{http://www.w3.org/2001/XMLSchema}boolean" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "BaseMOKeyword", propOrder = {
    "isDefaultKeyword"
})
@XmlSeeAlso({
    SendEmailMOKeyword.class,
    DoubleOptInMOKeyword.class,
    SendSMSMOKeyword.class,
    HelpMOKeyword.class,
    UnsubscribeFromSMSPublicationMOKeyword.class
})
public class BaseMOKeyword
    extends APIObject
    implements Serializable
{

    @XmlElement(name = "IsDefaultKeyword")
    protected Boolean isDefaultKeyword;

    /**
     * Gets the value of the isDefaultKeyword property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isIsDefaultKeyword() {
        return isDefaultKeyword;
    }

    /**
     * Sets the value of the isDefaultKeyword property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setIsDefaultKeyword(Boolean value) {
        this.isDefaultKeyword = value;
    }

}
