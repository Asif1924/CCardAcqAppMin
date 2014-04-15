
package com.exacttarget.wsdl.partnerapi;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for UnsubscribeFromSMSPublicationMOKeyword complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="UnsubscribeFromSMSPublicationMOKeyword">
 *   &lt;complexContent>
 *     &lt;extension base="{http://exacttarget.com/wsdl/partnerAPI}BaseMOKeyword">
 *       &lt;sequence>
 *         &lt;element name="NextMOKeyword" type="{http://exacttarget.com/wsdl/partnerAPI}BaseMOKeyword" minOccurs="0"/>
 *         &lt;element name="AllUnsubSuccessMessage" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="InvalidPublicationMessage" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="SingleUnsubSuccessMessage" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "UnsubscribeFromSMSPublicationMOKeyword", propOrder = {
    "nextMOKeyword",
    "allUnsubSuccessMessage",
    "invalidPublicationMessage",
    "singleUnsubSuccessMessage"
})
public class UnsubscribeFromSMSPublicationMOKeyword
    extends BaseMOKeyword
    implements Serializable
{

    @XmlElement(name = "NextMOKeyword")
    protected BaseMOKeyword nextMOKeyword;
    @XmlElement(name = "AllUnsubSuccessMessage", required = true)
    protected String allUnsubSuccessMessage;
    @XmlElement(name = "InvalidPublicationMessage", required = true)
    protected String invalidPublicationMessage;
    @XmlElement(name = "SingleUnsubSuccessMessage", required = true)
    protected String singleUnsubSuccessMessage;

    /**
     * Gets the value of the nextMOKeyword property.
     * 
     * @return
     *     possible object is
     *     {@link BaseMOKeyword }
     *     
     */
    public BaseMOKeyword getNextMOKeyword() {
        return nextMOKeyword;
    }

    /**
     * Sets the value of the nextMOKeyword property.
     * 
     * @param value
     *     allowed object is
     *     {@link BaseMOKeyword }
     *     
     */
    public void setNextMOKeyword(BaseMOKeyword value) {
        this.nextMOKeyword = value;
    }

    /**
     * Gets the value of the allUnsubSuccessMessage property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAllUnsubSuccessMessage() {
        return allUnsubSuccessMessage;
    }

    /**
     * Sets the value of the allUnsubSuccessMessage property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAllUnsubSuccessMessage(String value) {
        this.allUnsubSuccessMessage = value;
    }

    /**
     * Gets the value of the invalidPublicationMessage property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInvalidPublicationMessage() {
        return invalidPublicationMessage;
    }

    /**
     * Sets the value of the invalidPublicationMessage property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInvalidPublicationMessage(String value) {
        this.invalidPublicationMessage = value;
    }

    /**
     * Gets the value of the singleUnsubSuccessMessage property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSingleUnsubSuccessMessage() {
        return singleUnsubSuccessMessage;
    }

    /**
     * Sets the value of the singleUnsubSuccessMessage property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSingleUnsubSuccessMessage(String value) {
        this.singleUnsubSuccessMessage = value;
    }

}
