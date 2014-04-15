
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for PointOfServiceEntryMode complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="PointOfServiceEntryMode">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="panEntryMode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{2}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="pinEntryCapability" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "PointOfServiceEntryMode", propOrder = {
    "panEntryMode",
    "pinEntryCapability"
})
public class PointOfServiceEntryMode
    implements Serializable
{

    protected String panEntryMode;
    protected String pinEntryCapability;

    /**
     * Gets the value of the panEntryMode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPanEntryMode() {
        return panEntryMode;
    }

    /**
     * Sets the value of the panEntryMode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPanEntryMode(String value) {
        this.panEntryMode = value;
    }

    /**
     * Gets the value of the pinEntryCapability property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPinEntryCapability() {
        return pinEntryCapability;
    }

    /**
     * Sets the value of the pinEntryCapability property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPinEntryCapability(String value) {
        this.pinEntryCapability = value;
    }

}
