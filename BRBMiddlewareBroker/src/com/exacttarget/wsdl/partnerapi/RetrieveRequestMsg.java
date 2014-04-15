
package com.exacttarget.wsdl.partnerapi;

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
 *         &lt;element name="RetrieveRequest" type="{http://exacttarget.com/wsdl/partnerAPI}RetrieveRequest"/>
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
    "retrieveRequest"
})
@XmlRootElement(name = "RetrieveRequestMsg")
public class RetrieveRequestMsg
    implements Serializable
{

    @XmlElement(name = "RetrieveRequest", required = true)
    protected RetrieveRequest retrieveRequest;

    /**
     * Gets the value of the retrieveRequest property.
     * 
     * @return
     *     possible object is
     *     {@link RetrieveRequest }
     *     
     */
    public RetrieveRequest getRetrieveRequest() {
        return retrieveRequest;
    }

    /**
     * Sets the value of the retrieveRequest property.
     * 
     * @param value
     *     allowed object is
     *     {@link RetrieveRequest }
     *     
     */
    public void setRetrieveRequest(RetrieveRequest value) {
        this.retrieveRequest = value;
    }

}
