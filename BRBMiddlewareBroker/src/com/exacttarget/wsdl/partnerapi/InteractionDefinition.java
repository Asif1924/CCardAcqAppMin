
package com.exacttarget.wsdl.partnerapi;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for InteractionDefinition complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="InteractionDefinition">
 *   &lt;complexContent>
 *     &lt;extension base="{http://exacttarget.com/wsdl/partnerAPI}InteractionBaseObject">
 *       &lt;sequence>
 *         &lt;element name="InteractionObjectID" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "InteractionDefinition", propOrder = {
    "interactionObjectID"
})
@XmlSeeAlso({
    Campaign.class,
    QueryDefinition.class,
    ImportDefinition.class,
    MobileConnectRefreshListActivity.class,
    MobileConnectSendSmsActivity.class,
    DataExtractActivity.class,
    Automation.class,
    MessageSendActivity.class,
    FileTransferActivity.class,
    MobilePushSendMessageActivity.class,
    SendDefinition.class,
    ReportActivity.class,
    SmsSendActivity.class,
    GroupDefinition.class
})
public class InteractionDefinition
    extends InteractionBaseObject
    implements Serializable
{

    @XmlElement(name = "InteractionObjectID")
    protected String interactionObjectID;

    /**
     * Gets the value of the interactionObjectID property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInteractionObjectID() {
        return interactionObjectID;
    }

    /**
     * Sets the value of the interactionObjectID property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInteractionObjectID(String value) {
        this.interactionObjectID = value;
    }

}
