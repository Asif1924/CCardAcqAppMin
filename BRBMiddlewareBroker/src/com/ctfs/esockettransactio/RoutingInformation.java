
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * 
 *    				This is a response-only field from Postilion. No client-side validation is necessary.
 *    			
 * 
 * <p>Java class for RoutingInformation complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="RoutingInformation">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="sourceNode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="sinkNode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="sourceNodeSystemTraceAuditNumber" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="sinkNodeSystemTraceAuditNumber" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="totalsGroup" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
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
@XmlType(name = "RoutingInformation", propOrder = {
    "sourceNode",
    "sinkNode",
    "sourceNodeSystemTraceAuditNumber",
    "sinkNodeSystemTraceAuditNumber",
    "totalsGroup"
})
public class RoutingInformation
    implements Serializable
{

    protected String sourceNode;
    protected String sinkNode;
    protected String sourceNodeSystemTraceAuditNumber;
    protected String sinkNodeSystemTraceAuditNumber;
    protected String totalsGroup;

    /**
     * Gets the value of the sourceNode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSourceNode() {
        return sourceNode;
    }

    /**
     * Sets the value of the sourceNode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSourceNode(String value) {
        this.sourceNode = value;
    }

    /**
     * Gets the value of the sinkNode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSinkNode() {
        return sinkNode;
    }

    /**
     * Sets the value of the sinkNode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSinkNode(String value) {
        this.sinkNode = value;
    }

    /**
     * Gets the value of the sourceNodeSystemTraceAuditNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSourceNodeSystemTraceAuditNumber() {
        return sourceNodeSystemTraceAuditNumber;
    }

    /**
     * Sets the value of the sourceNodeSystemTraceAuditNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSourceNodeSystemTraceAuditNumber(String value) {
        this.sourceNodeSystemTraceAuditNumber = value;
    }

    /**
     * Gets the value of the sinkNodeSystemTraceAuditNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSinkNodeSystemTraceAuditNumber() {
        return sinkNodeSystemTraceAuditNumber;
    }

    /**
     * Sets the value of the sinkNodeSystemTraceAuditNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSinkNodeSystemTraceAuditNumber(String value) {
        this.sinkNodeSystemTraceAuditNumber = value;
    }

    /**
     * Gets the value of the totalsGroup property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTotalsGroup() {
        return totalsGroup;
    }

    /**
     * Sets the value of the totalsGroup property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTotalsGroup(String value) {
        this.totalsGroup = value;
    }

}
