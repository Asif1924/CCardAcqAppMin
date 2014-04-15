
package com.channel.ctfs.ctc.webicgateway;

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
 *         &lt;element name="responseDocument" type="{http://www.ctc.ctfs.channel.com/WebICGateway/}ResponseBodyType"/>
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
    "responseDocument"
})
@XmlRootElement(name = "processRequestResponse")
public class ProcessRequestResponse
    implements Serializable
{

    @XmlElement(required = true)
    protected ResponseBodyType responseDocument;

    /**
     * Gets the value of the responseDocument property.
     * 
     * @return
     *     possible object is
     *     {@link ResponseBodyType }
     *     
     */
    public ResponseBodyType getResponseDocument() {
        return responseDocument;
    }

    /**
     * Sets the value of the responseDocument property.
     * 
     * @param value
     *     allowed object is
     *     {@link ResponseBodyType }
     *     
     */
    public void setResponseDocument(ResponseBodyType value) {
        this.responseDocument = value;
    }

}
