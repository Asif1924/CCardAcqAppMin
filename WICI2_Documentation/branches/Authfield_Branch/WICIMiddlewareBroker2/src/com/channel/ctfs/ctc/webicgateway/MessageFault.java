
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
 *         &lt;element name="messageFault" type="{http://www.ctc.ctfs.channel.com/WebICGateway/}MessageFaultType"/>
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
    "messageFault"
})
@XmlRootElement(name = "messageFault")
public class MessageFault
    implements Serializable
{

    @XmlElement(required = true)
    protected MessageFaultType messageFault;

    /**
     * Gets the value of the messageFault property.
     * 
     * @return
     *     possible object is
     *     {@link MessageFaultType }
     *     
     */
    public MessageFaultType getMessageFault() {
        return messageFault;
    }

    /**
     * Sets the value of the messageFault property.
     * 
     * @param value
     *     allowed object is
     *     {@link MessageFaultType }
     *     
     */
    public void setMessageFault(MessageFaultType value) {
        this.messageFault = value;
    }

}
