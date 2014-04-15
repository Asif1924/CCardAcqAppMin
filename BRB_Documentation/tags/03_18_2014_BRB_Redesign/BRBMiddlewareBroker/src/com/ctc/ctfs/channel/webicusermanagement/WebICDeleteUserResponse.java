
package com.ctc.ctfs.channel.webicusermanagement;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import com.ctc.ctfs.channel.MessageTextType;


/**
 * <p>Java class for WebICDeleteUserResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="WebICDeleteUserResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="MessageText" type="{http://www.channel.ctfs.ctc.com}messageTextType"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "WebICDeleteUserResponse", propOrder = {
    "messageText"
})
public class WebICDeleteUserResponse
    implements Serializable
{

    @XmlElement(name = "MessageText", required = true)
    protected MessageTextType messageText;

    /**
     * Gets the value of the messageText property.
     * 
     * @return
     *     possible object is
     *     {@link MessageTextType }
     *     
     */
    public MessageTextType getMessageText() {
        return messageText;
    }

    /**
     * Sets the value of the messageText property.
     * 
     * @param value
     *     allowed object is
     *     {@link MessageTextType }
     *     
     */
    public void setMessageText(MessageTextType value) {
        this.messageText = value;
    }

}
