
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for TransactionRequest complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="TransactionRequest">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="messageType" type="{http://ctfs.com/esocketTransactIo/}MessageTypeRequest"/>
 *         &lt;element name="messageFields" type="{http://ctfs.com/esocketTransactIo/}MessageFieldsRequest"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "TransactionRequest", propOrder = {
    "messageType",
    "messageFields"
})
@XmlSeeAlso({
    PCICompliantTransactionRequest.class
})
public class TransactionRequest
    implements Serializable
{

    @XmlElement(required = true)
    protected String messageType;
    @XmlElement(required = true)
    protected MessageFieldsRequest messageFields;

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
     *     {@link MessageFieldsRequest }
     *     
     */
    public MessageFieldsRequest getMessageFields() {
        return messageFields;
    }

    /**
     * Sets the value of the messageFields property.
     * 
     * @param value
     *     allowed object is
     *     {@link MessageFieldsRequest }
     *     
     */
    public void setMessageFields(MessageFieldsRequest value) {
        this.messageFields = value;
    }

}
