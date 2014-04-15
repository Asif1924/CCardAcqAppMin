
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
 *         &lt;element name="rst" type="{http://persistservice.cantire.com/}cardRequestType" minOccurs="0"/>
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
    "rst"
})
@XmlRootElement(name = "SaveCustomerCardData", namespace = "http://tempuri.org/")
public class SaveCustomerCardData
    implements Serializable
{

    @XmlElementRef(name = "rst", namespace = "http://tempuri.org/", type = JAXBElement.class)
    protected JAXBElement<CardRequestType> rst;

    /**
     * Gets the value of the rst property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link CardRequestType }{@code >}
     *     
     */
    public JAXBElement<CardRequestType> getRst() {
        return rst;
    }

    /**
     * Sets the value of the rst property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link CardRequestType }{@code >}
     *     
     */
    public void setRst(JAXBElement<CardRequestType> value) {
        this.rst = ((JAXBElement<CardRequestType> ) value);
    }

}
