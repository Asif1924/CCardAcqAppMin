
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for PCICompliantTransactionRequest complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="PCICompliantTransactionRequest">
 *   &lt;complexContent>
 *     &lt;extension base="{http://ctfs.com/esocketTransactIo/}TransactionRequest">
 *       &lt;sequence>
 *         &lt;element name="pciMessageFields" type="{http://ctfs.com/esocketTransactIo/}PCICompliantMessageFieldsRequest" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "PCICompliantTransactionRequest", propOrder = {
    "pciMessageFields"
})
public class PCICompliantTransactionRequest
    extends TransactionRequest
    implements Serializable
{

    protected PCICompliantMessageFieldsRequest pciMessageFields;

    /**
     * Gets the value of the pciMessageFields property.
     * 
     * @return
     *     possible object is
     *     {@link PCICompliantMessageFieldsRequest }
     *     
     */
    public PCICompliantMessageFieldsRequest getPciMessageFields() {
        return pciMessageFields;
    }

    /**
     * Sets the value of the pciMessageFields property.
     * 
     * @param value
     *     allowed object is
     *     {@link PCICompliantMessageFieldsRequest }
     *     
     */
    public void setPciMessageFields(PCICompliantMessageFieldsRequest value) {
        this.pciMessageFields = value;
    }

}
