
package com.ctc.ctfs.channel.webicusermanagement;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import com.ctc.ctfs.channel.MessageTextType;


/**
 * <p>Java class for WebICUpdateUserResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="WebICUpdateUserResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="Message" type="{http://www.channel.ctfs.ctc.com}messageTextType"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "WebICUpdateUserResponse", propOrder = {
    "message"
})
public class WebICUpdateUserResponse
    implements Serializable
{

    @XmlElement(name = "Message", required = true)
    protected MessageTextType message;

    /**
     * Gets the value of the message property.
     * 
     * @return
     *     possible object is
     *     {@link MessageTextType }
     *     
     */
    public MessageTextType getMessage() {
        return message;
    }

    /**
     * Sets the value of the message property.
     * 
     * @param value
     *     allowed object is
     *     {@link MessageTextType }
     *     
     */
    public void setMessage(MessageTextType value) {
        this.message = value;
    }

}
