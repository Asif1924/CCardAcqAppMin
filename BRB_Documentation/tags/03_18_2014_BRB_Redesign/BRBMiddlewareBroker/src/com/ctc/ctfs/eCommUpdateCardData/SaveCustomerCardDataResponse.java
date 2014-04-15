
package com.ctc.ctfs.eCommUpdateCardData;

import java.io.Serializable;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
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
 *         &lt;element name="SaveCustomerCardDataResult" type="{http://persistservice.cantire.com/}cardResponseType" minOccurs="0"/>
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
    "saveCustomerCardDataResult"
})
@XmlRootElement(name = "SaveCustomerCardDataResponse", namespace = "http://tempuri.org/")
public class SaveCustomerCardDataResponse
    implements Serializable
{

    @XmlElementRef(name = "SaveCustomerCardDataResult", namespace = "http://tempuri.org/", type = JAXBElement.class)
    protected JAXBElement<CardResponseType> saveCustomerCardDataResult;

    /**
     * Gets the value of the saveCustomerCardDataResult property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link CardResponseType }{@code >}
     *     
     */
    public JAXBElement<CardResponseType> getSaveCustomerCardDataResult() {
        return saveCustomerCardDataResult;
    }

    /**
     * Sets the value of the saveCustomerCardDataResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link CardResponseType }{@code >}
     *     
     */
    public void setSaveCustomerCardDataResult(JAXBElement<CardResponseType> value) {
        this.saveCustomerCardDataResult = ((JAXBElement<CardResponseType> ) value);
    }

}
