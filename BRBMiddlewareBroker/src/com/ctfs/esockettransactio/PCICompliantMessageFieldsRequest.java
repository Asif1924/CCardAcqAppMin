
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * 
 *    	  		PCI-DSS section 3 identifies the following fields containing cardholder data as sensitive.
 *    	  		
 *    	  		As such, they are only exposed to the ESocketTransact service for PCI-compliant clients
 *    	  		and should only be populated by applications that are PCI-certified.
 *    	  		
 *    	  		Field 2: PAN
 *    	  		Field 35: Track 2 Data
 *    	  		Field 45: Track 1 Data
 *    	  		Field 52: PIN block
 *    	  		Field 127.010: CVV2
 *    	  		Field 127.028: American Express Card Identifier (CID)
 *    	  	
 * 
 * <p>Java class for PCICompliantMessageFieldsRequest complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="PCICompliantMessageFieldsRequest">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="pan" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{1,19}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="track2Data" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;maxLength value="37"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="track1Data" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;maxLength value="76"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="pinData" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;length value="8"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cvv2" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{3}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="americanExpressCardId" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{4}"/>
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
@XmlType(name = "PCICompliantMessageFieldsRequest", propOrder = {
    "pan",
    "track2Data",
    "track1Data",
    "pinData",
    "cvv2",
    "americanExpressCardId"
})
public class PCICompliantMessageFieldsRequest
    implements Serializable
{

    protected String pan;
    protected String track2Data;
    protected String track1Data;
    protected String pinData;
    protected String cvv2;
    protected String americanExpressCardId;

    /**
     * Gets the value of the pan property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPan() {
        return pan;
    }

    /**
     * Sets the value of the pan property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPan(String value) {
        this.pan = value;
    }

    /**
     * Gets the value of the track2Data property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTrack2Data() {
        return track2Data;
    }

    /**
     * Sets the value of the track2Data property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTrack2Data(String value) {
        this.track2Data = value;
    }

    /**
     * Gets the value of the track1Data property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTrack1Data() {
        return track1Data;
    }

    /**
     * Sets the value of the track1Data property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTrack1Data(String value) {
        this.track1Data = value;
    }

    /**
     * Gets the value of the pinData property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPinData() {
        return pinData;
    }

    /**
     * Sets the value of the pinData property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPinData(String value) {
        this.pinData = value;
    }

    /**
     * Gets the value of the cvv2 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCvv2() {
        return cvv2;
    }

    /**
     * Sets the value of the cvv2 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCvv2(String value) {
        this.cvv2 = value;
    }

    /**
     * Gets the value of the americanExpressCardId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAmericanExpressCardId() {
        return americanExpressCardId;
    }

    /**
     * Sets the value of the americanExpressCardId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAmericanExpressCardId(String value) {
        this.americanExpressCardId = value;
    }

}
