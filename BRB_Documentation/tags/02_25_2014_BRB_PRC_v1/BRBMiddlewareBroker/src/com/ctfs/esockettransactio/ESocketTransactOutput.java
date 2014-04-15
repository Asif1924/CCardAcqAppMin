
package com.ctfs.esockettransactio;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ESocketTransactOutput complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ESocketTransactOutput">
 *   &lt;complexContent>
 *     &lt;extension base="{http://ctfs.com/esocketTransactIo/}ESocketTransactObject">
 *       &lt;sequence>
 *         &lt;element name="transaction" type="{http://ctfs.com/esocketTransactIo/}PCICompliantTransactionResponse"/>
 *         &lt;element name="passFail" type="{http://ctfs.com/esocketTransactIo/}TypeOfPassFail"/>
 *         &lt;element name="responseCodes" type="{http://www.w3.org/2001/XMLSchema}integer" maxOccurs="unbounded"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ESocketTransactOutput", propOrder = {
    "transaction",
    "passFail",
    "responseCodes"
})
public class ESocketTransactOutput
    extends ESocketTransactObject
    implements Serializable
{

    @XmlElement(required = true)
    protected PCICompliantTransactionResponse transaction;
    @XmlElement(required = true)
    protected TypeOfPassFail passFail;
    @XmlElement(required = true)
    protected List<BigInteger> responseCodes;

    /**
     * Gets the value of the transaction property.
     * 
     * @return
     *     possible object is
     *     {@link PCICompliantTransactionResponse }
     *     
     */
    public PCICompliantTransactionResponse getTransaction() {
        return transaction;
    }

    /**
     * Sets the value of the transaction property.
     * 
     * @param value
     *     allowed object is
     *     {@link PCICompliantTransactionResponse }
     *     
     */
    public void setTransaction(PCICompliantTransactionResponse value) {
        this.transaction = value;
    }

    /**
     * Gets the value of the passFail property.
     * 
     * @return
     *     possible object is
     *     {@link TypeOfPassFail }
     *     
     */
    public TypeOfPassFail getPassFail() {
        return passFail;
    }

    /**
     * Sets the value of the passFail property.
     * 
     * @param value
     *     allowed object is
     *     {@link TypeOfPassFail }
     *     
     */
    public void setPassFail(TypeOfPassFail value) {
        this.passFail = value;
    }

    /**
     * Gets the value of the responseCodes property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the responseCodes property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getResponseCodes().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link BigInteger }
     * 
     * 
     */
    public List<BigInteger> getResponseCodes() {
        if (responseCodes == null) {
            responseCodes = new ArrayList<BigInteger>();
        }
        return this.responseCodes;
    }

}
