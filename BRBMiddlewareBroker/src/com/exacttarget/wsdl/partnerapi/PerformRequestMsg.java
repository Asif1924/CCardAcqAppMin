
package com.exacttarget.wsdl.partnerapi;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="Options" type="{http://exacttarget.com/wsdl/partnerAPI}PerformOptions" minOccurs="0"/>
 *         &lt;element name="Action" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="Definitions" minOccurs="0">
 *           &lt;complexType>
 *             &lt;complexContent>
 *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                 &lt;sequence>
 *                   &lt;element name="Definition" type="{http://exacttarget.com/wsdl/partnerAPI}APIObject" maxOccurs="unbounded" minOccurs="0"/>
 *                 &lt;/sequence>
 *               &lt;/restriction>
 *             &lt;/complexContent>
 *           &lt;/complexType>
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
@XmlType(name = "", propOrder = {
    "options",
    "action",
    "definitions"
})
@XmlRootElement(name = "PerformRequestMsg")
public class PerformRequestMsg
    implements Serializable
{

    @XmlElement(name = "Options")
    protected PerformOptions options;
    @XmlElement(name = "Action")
    protected String action;
    @XmlElement(name = "Definitions")
    protected PerformRequestMsg.Definitions definitions;

    /**
     * Gets the value of the options property.
     * 
     * @return
     *     possible object is
     *     {@link PerformOptions }
     *     
     */
    public PerformOptions getOptions() {
        return options;
    }

    /**
     * Sets the value of the options property.
     * 
     * @param value
     *     allowed object is
     *     {@link PerformOptions }
     *     
     */
    public void setOptions(PerformOptions value) {
        this.options = value;
    }

    /**
     * Gets the value of the action property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAction() {
        return action;
    }

    /**
     * Sets the value of the action property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAction(String value) {
        this.action = value;
    }

    /**
     * Gets the value of the definitions property.
     * 
     * @return
     *     possible object is
     *     {@link PerformRequestMsg.Definitions }
     *     
     */
    public PerformRequestMsg.Definitions getDefinitions() {
        return definitions;
    }

    /**
     * Sets the value of the definitions property.
     * 
     * @param value
     *     allowed object is
     *     {@link PerformRequestMsg.Definitions }
     *     
     */
    public void setDefinitions(PerformRequestMsg.Definitions value) {
        this.definitions = value;
    }


    /**
     * <p>Java class for anonymous complex type.
     * 
     * <p>The following schema fragment specifies the expected content contained within this class.
     * 
     * <pre>
     * &lt;complexType>
     *   &lt;complexContent>
     *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
     *       &lt;sequence>
     *         &lt;element name="Definition" type="{http://exacttarget.com/wsdl/partnerAPI}APIObject" maxOccurs="unbounded" minOccurs="0"/>
     *       &lt;/sequence>
     *     &lt;/restriction>
     *   &lt;/complexContent>
     * &lt;/complexType>
     * </pre>
     * 
     * 
     */
    @XmlAccessorType(XmlAccessType.FIELD)
    @XmlType(name = "", propOrder = {
        "definition"
    })
    public static class Definitions
        implements Serializable
    {

        @XmlElement(name = "Definition")
        protected List<APIObject> definition;

        /**
         * Gets the value of the definition property.
         * 
         * <p>
         * This accessor method returns a reference to the live list,
         * not a snapshot. Therefore any modification you make to the
         * returned list will be present inside the JAXB object.
         * This is why there is not a <CODE>set</CODE> method for the definition property.
         * 
         * <p>
         * For example, to add a new item, do as follows:
         * <pre>
         *    getDefinition().add(newItem);
         * </pre>
         * 
         * 
         * <p>
         * Objects of the following type(s) are allowed in the list
         * {@link APIObject }
         * 
         * 
         */
        public List<APIObject> getDefinition() {
            if (definition == null) {
                definition = new ArrayList<APIObject>();
            }
            return this.definition;
        }

    }

}
