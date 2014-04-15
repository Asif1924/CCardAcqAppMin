
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
 *         &lt;element name="requestDocument" type="{http://www.ctc.ctfs.channel.com/WebICGateway/}BodyType"/>
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
    "requestDocument"
})
@XmlRootElement(name = "processRequest")
public class ProcessRequest
    implements Serializable
{

    @XmlElement(required = true)
    protected String requestDocument;

    /**
     * Gets the value of the requestDocument property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRequestDocument() {
        return requestDocument;
    }

    /**
     * Sets the value of the requestDocument property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRequestDocument(String value) {
        this.requestDocument = value;
    }

}
