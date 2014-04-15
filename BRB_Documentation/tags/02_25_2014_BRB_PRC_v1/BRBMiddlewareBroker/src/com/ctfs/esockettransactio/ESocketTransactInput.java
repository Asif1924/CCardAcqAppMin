
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ESocketTransactInput complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ESocketTransactInput">
 *   &lt;complexContent>
 *     &lt;extension base="{http://ctfs.com/esocketTransactIo/}ESocketTransactObject">
 *       &lt;sequence>
 *         &lt;element name="transaction" type="{http://ctfs.com/esocketTransactIo/}PCICompliantTransactionRequest"/>
 *         &lt;element name="tokenRequired" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;enumeration value="Y"/>
 *               &lt;enumeration value="R"/>
 *               &lt;enumeration value="N"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="agentId" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;maxLength value="20"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="agentIPAddress">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;maxLength value="15"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="clientIPAddress" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;maxLength value="15"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="hostSystem">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;maxLength value="50"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="hostSystemOperator" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;maxLength value="20"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ESocketTransactInput", propOrder = {
    "transaction",
    "tokenRequired",
    "agentId",
    "agentIPAddress",
    "clientIPAddress",
    "hostSystem",
    "hostSystemOperator"
})
public class ESocketTransactInput
    extends ESocketTransactObject
    implements Serializable
{

    @XmlElement(required = true)
    protected PCICompliantTransactionRequest transaction;
    protected String tokenRequired;
    protected String agentId;
    @XmlElement(required = true)
    protected String agentIPAddress;
    protected String clientIPAddress;
    @XmlElement(required = true)
    protected String hostSystem;
    protected String hostSystemOperator;

    /**
     * Gets the value of the transaction property.
     * 
     * @return
     *     possible object is
     *     {@link PCICompliantTransactionRequest }
     *     
     */
    public PCICompliantTransactionRequest getTransaction() {
        return transaction;
    }

    /**
     * Sets the value of the transaction property.
     * 
     * @param value
     *     allowed object is
     *     {@link PCICompliantTransactionRequest }
     *     
     */
    public void setTransaction(PCICompliantTransactionRequest value) {
        this.transaction = value;
    }

    /**
     * Gets the value of the tokenRequired property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTokenRequired() {
        return tokenRequired;
    }

    /**
     * Sets the value of the tokenRequired property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTokenRequired(String value) {
        this.tokenRequired = value;
    }

    /**
     * Gets the value of the agentId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAgentId() {
        return agentId;
    }

    /**
     * Sets the value of the agentId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAgentId(String value) {
        this.agentId = value;
    }

    /**
     * Gets the value of the agentIPAddress property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAgentIPAddress() {
        return agentIPAddress;
    }

    /**
     * Sets the value of the agentIPAddress property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAgentIPAddress(String value) {
        this.agentIPAddress = value;
    }

    /**
     * Gets the value of the clientIPAddress property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getClientIPAddress() {
        return clientIPAddress;
    }

    /**
     * Sets the value of the clientIPAddress property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setClientIPAddress(String value) {
        this.clientIPAddress = value;
    }

    /**
     * Gets the value of the hostSystem property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHostSystem() {
        return hostSystem;
    }

    /**
     * Sets the value of the hostSystem property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHostSystem(String value) {
        this.hostSystem = value;
    }

    /**
     * Gets the value of the hostSystemOperator property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHostSystemOperator() {
        return hostSystemOperator;
    }

    /**
     * Sets the value of the hostSystemOperator property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHostSystemOperator(String value) {
        this.hostSystemOperator = value;
    }

}
