
package com.channel.ctfs.ctc.webicgateway;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ResponseBodyType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ResponseBodyType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="requestStatus" type="{http://www.ctc.ctfs.channel.com/WebICGateway/}StatusType"/>
 *         &lt;element name="resultDocument" type="{http://www.ctc.ctfs.channel.com/WebICGateway/}BodyType" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ResponseBodyType", propOrder = {
    "requestStatus",
    "resultDocument"
})
public class ResponseBodyType
    implements Serializable
{

    @XmlElement(required = true)
    protected StatusType requestStatus;
    protected String resultDocument;

    /**
     * Gets the value of the requestStatus property.
     * 
     * @return
     *     possible object is
     *     {@link StatusType }
     *     
     */
    public StatusType getRequestStatus() {
        return requestStatus;
    }

    /**
     * Sets the value of the requestStatus property.
     * 
     * @param value
     *     allowed object is
     *     {@link StatusType }
     *     
     */
    public void setRequestStatus(StatusType value) {
        this.requestStatus = value;
    }

    /**
     * Gets the value of the resultDocument property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getResultDocument() {
        return resultDocument;
    }

    /**
     * Sets the value of the resultDocument property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setResultDocument(String value) {
        this.resultDocument = value;
    }

}
