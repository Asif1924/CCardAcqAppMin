
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for TransactionResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="TransactionResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="messageType" type="{http://ctfs.com/esocketTransactIo/}MessageTypeResponse"/>
 *         &lt;element name="messageFields" type="{http://ctfs.com/esocketTransactIo/}MessageFieldsResponse"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "TransactionResponse", propOrder = {
    "messageType",
    "messageFields"
})
@XmlSeeAlso({
    PCICompliantTransactionResponse.class
})
public class TransactionResponse
    implements Serializable
{

    @XmlElement(required = true)
    protected String messageType;
    @XmlElement(required = true)
    protected MessageFieldsResponse messageFields;

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
     * Gets the value of the messageFields property.
     * 
     * @return
     *     possible object is
     *     {@link MessageFieldsResponse }
     *     
     */
    public MessageFieldsResponse getMessageFields() {
        return messageFields;
    }

    /**
     * Sets the value of the messageFields property.
     * 
     * @param value
     *     allowed object is
     *     {@link MessageFieldsResponse }
     *     
     */
    public void setMessageFields(MessageFieldsResponse value) {
        this.messageFields = value;
    }

}
