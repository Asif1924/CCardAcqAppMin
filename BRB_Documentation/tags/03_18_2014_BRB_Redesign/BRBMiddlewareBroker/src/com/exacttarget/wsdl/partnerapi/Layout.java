
package com.exacttarget.wsdl.partnerapi;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for Layout complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="Layout">
 *   &lt;complexContent>
 *     &lt;extension base="{http://exacttarget.com/wsdl/partnerAPI}APIObject">
 *       &lt;sequence>
 *         &lt;element name="LayoutName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Layout", propOrder = {
    "layoutName"
})
public class Layout
    extends APIObject
    implements Serializable
{

    @XmlElement(name = "LayoutName")
    protected String layoutName;

    /**
     * Gets the value of the layoutName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLayoutName() {
        return layoutName;
    }

    /**
     * Sets the value of the layoutName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLayoutName(String value) {
        this.layoutName = value;
    }

}
