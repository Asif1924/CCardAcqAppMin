
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
 * 			*NOTE: PAN is not included here. The PAN field is included on the response for both
 * 			PCI-compliant and non-PCI-compliant clients, but will contain a truncated version of
 * 			the PAN in both cases - it will never be a full PAN.			
 *    	  		
 *    	  		Field 35: Track 2 Data
 *    	  		Field 45: Track 1 Data
 *    	  	
 * 
 * <p>Java class for PCICompliantMessageFieldsResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="PCICompliantMessageFieldsResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
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
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "PCICompliantMessageFieldsResponse", propOrder = {
    "track2Data",
    "track1Data"
})
public class PCICompliantMessageFieldsResponse
    implements Serializable
{

    protected String track2Data;
    protected String track1Data;

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

}
