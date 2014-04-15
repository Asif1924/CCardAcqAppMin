
package com.exacttarget.wsdl.partnerapi;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for AutomationSource complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="AutomationSource">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="AutomationSourceID" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="AutomationSourceType" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "AutomationSource", propOrder = {
    "automationSourceID",
    "automationSourceType"
})
public class AutomationSource
    implements Serializable
{

    @XmlElement(name = "AutomationSourceID")
    protected String automationSourceID;
    @XmlElement(name = "AutomationSourceType")
    protected String automationSourceType;

    /**
     * Gets the value of the automationSourceID property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAutomationSourceID() {
        return automationSourceID;
    }

    /**
     * Sets the value of the automationSourceID property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAutomationSourceID(String value) {
        this.automationSourceID = value;
    }

    /**
     * Gets the value of the automationSourceType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAutomationSourceType() {
        return automationSourceType;
    }

    /**
     * Sets the value of the automationSourceType property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAutomationSourceType(String value) {
        this.automationSourceType = value;
    }

}
