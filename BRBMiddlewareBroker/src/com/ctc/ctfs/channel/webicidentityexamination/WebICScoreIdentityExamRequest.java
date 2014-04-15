
package com.ctc.ctfs.channel.webicidentityexamination;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for WebICScoreIdentityExamRequest complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="WebICScoreIdentityExamRequest">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="identityExam" type="{http://www.channel.ctfs.ctc.com/WebICIdentityExamination}IdentityExam"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "WebICScoreIdentityExamRequest", propOrder = {
    "identityExam"
})
public class WebICScoreIdentityExamRequest
    implements Serializable
{

    @XmlElement(required = true)
    protected IdentityExam identityExam;

    /**
     * Gets the value of the identityExam property.
     * 
     * @return
     *     possible object is
     *     {@link IdentityExam }
     *     
     */
    public IdentityExam getIdentityExam() {
        return identityExam;
    }

    /**
     * Sets the value of the identityExam property.
     * 
     * @param value
     *     allowed object is
     *     {@link IdentityExam }
     *     
     */
    public void setIdentityExam(IdentityExam value) {
        this.identityExam = value;
    }

}
