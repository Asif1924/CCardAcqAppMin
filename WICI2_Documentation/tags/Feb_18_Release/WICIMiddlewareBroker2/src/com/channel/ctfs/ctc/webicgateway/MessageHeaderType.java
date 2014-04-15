
package com.channel.ctfs.ctc.webicgateway;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for MessageHeaderType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="MessageHeaderType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="secureContentFlag" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *         &lt;element name="messageType">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;maxLength value="30"/>
 *               &lt;whiteSpace value="collapse"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="responseMode" type="{http://www.ctc.ctfs.channel.com/WebICGateway/}ResponseModeType"/>
 *         &lt;element name="messageId" type="{http://www.ctc.ctfs.channel.com/WebICGateway/}MessageIdType"/>
 *         &lt;element name="correlationId" type="{http://www.ctc.ctfs.channel.com/WebICGateway/}MessageIdType" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "MessageHeaderType", propOrder = {
    "secureContentFlag",
    "messageType",
    "responseMode",
    "messageId",
    "correlationId"
})
public class MessageHeaderType
    implements Serializable
{

    protected boolean secureContentFlag;
    @XmlElement(required = true)
    protected String messageType;
    @XmlElement(required = true)
    protected ResponseModeType responseMode;
    @XmlElement(required = true)
    protected String messageId;
    protected String correlationId;

    /**
     * Gets the value of the secureContentFlag property.
     * 
     */
    public boolean isSecureContentFlag() {
        return secureContentFlag;
    }

    /**
     * Sets the value of the secureContentFlag property.
     * 
     */
    public void setSecureContentFlag(boolean value) {
        this.secureContentFlag = value;
    }

    /**
     * Gets the value of the messageType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMessageType() {
        return messageType;
    }

    /**
     * Sets the value of the messageType property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMessageType(String value) {
        this.messageType = value;
    }

    /**
     * Gets the value of the responseMode property.
     * 
     * @return
     *     possible object is
     *     {@link ResponseModeType }
     *     
     */
    public ResponseModeType getResponseMode() {
        return responseMode;
    }

    /**
     * Sets the value of the responseMode property.
     * 
     * @param value
     *     allowed object is
     *     {@link ResponseModeType }
     *     
     */
    public void setResponseMode(ResponseModeType value) {
        this.responseMode = value;
    }

    /**
     * Gets the value of the messageId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMessageId() {
        return messageId;
    }

    /**
     * Sets the value of the messageId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMessageId(String value) {
        this.messageId = value;
    }

    /**
     * Gets the value of the correlationId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCorrelationId() {
        return correlationId;
    }

    /**
     * Sets the value of the correlationId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCorrelationId(String value) {
        this.correlationId = value;
    }

}
