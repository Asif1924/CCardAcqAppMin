
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for PCICompliantTransactionResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="PCICompliantTransactionResponse">
 *   &lt;complexContent>
 *     &lt;extension base="{http://ctfs.com/esocketTransactIo/}TransactionResponse">
 *       &lt;sequence>
 *         &lt;element name="pciMessageFields" type="{http://ctfs.com/esocketTransactIo/}PCICompliantMessageFieldsResponse" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "PCICompliantTransactionResponse", propOrder = {
    "pciMessageFields"
})
public class PCICompliantTransactionResponse
    extends TransactionResponse
    implements Serializable
{

    protected PCICompliantMessageFieldsResponse pciMessageFields;

    /**
     * Gets the value of the pciMessageFields property.
     * 
     * @return
     *     possible object is
     *     {@link PCICompliantMessageFieldsResponse }
     *     
     */
    public PCICompliantMessageFieldsResponse getPciMessageFields() {
        return pciMessageFields;
    }

    /**
     * Sets the value of the pciMessageFields property.
     * 
     * @param value
     *     allowed object is
     *     {@link PCICompliantMessageFieldsResponse }
     *     
     */
    public void setPciMessageFields(PCICompliantMessageFieldsResponse value) {
        this.pciMessageFields = value;
    }

}
