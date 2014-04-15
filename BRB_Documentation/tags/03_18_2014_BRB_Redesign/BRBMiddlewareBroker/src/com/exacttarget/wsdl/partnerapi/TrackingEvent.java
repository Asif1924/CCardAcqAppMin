
package com.exacttarget.wsdl.partnerapi;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for TrackingEvent complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="TrackingEvent">
 *   &lt;complexContent>
 *     &lt;extension base="{http://exacttarget.com/wsdl/partnerAPI}APIObject">
 *       &lt;sequence>
 *         &lt;element name="SendID" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="SubscriberKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="EventDate" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="EventType" type="{http://exacttarget.com/wsdl/partnerAPI}EventType" minOccurs="0"/>
 *         &lt;element name="TriggeredSendDefinitionObjectID" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="BatchID" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "TrackingEvent", propOrder = {
    "sendID",
    "subscriberKey",
    "eventDate",
    "eventType",
    "triggeredSendDefinitionObjectID",
    "batchID"
})
@XmlSeeAlso({
    SurveyEvent.class,
    DeliveredEvent.class,
    SentEvent.class,
    ForwardedEmailEvent.class,
    NotSentEvent.class,
    OpenEvent.class,
    UnsubEvent.class,
    BounceEvent.class,
    ForwardedEmailOptInEvent.class,
    ClickEvent.class
})
public class TrackingEvent
    extends APIObject
    implements Serializable
{

    @XmlElement(name = "SendID")
    protected Integer sendID;
    @XmlElement(name = "SubscriberKey")
    protected String subscriberKey;
    @XmlElement(name = "EventDate")
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar eventDate;
    @XmlElement(name = "EventType")
    protected EventType eventType;
    @XmlElement(name = "TriggeredSendDefinitionObjectID")
    protected String triggeredSendDefinitionObjectID;
    @XmlElement(name = "BatchID")
    protected Integer batchID;

    /**
     * Gets the value of the sendID property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getSendID() {
        return sendID;
    }

    /**
     * Sets the value of the sendID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setSendID(Integer value) {
        this.sendID = value;
    }

    /**
     * Gets the value of the subscriberKey property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSubscriberKey() {
        return subscriberKey;
    }

    /**
     * Sets the value of the subscriberKey property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSubscriberKey(String value) {
        this.subscriberKey = value;
    }

    /**
     * Gets the value of the eventDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getEventDate() {
        return eventDate;
    }

    /**
     * Sets the value of the eventDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setEventDate(XMLGregorianCalendar value) {
        this.eventDate = value;
    }

    /**
     * Gets the value of the eventType property.
     * 
     * @return
     *     possible object is
     *     {@link EventType }
     *     
     */
    public EventType getEventType() {
        return eventType;
    }

    /**
     * Sets the value of the eventType property.
     * 
     * @param value
     *     allowed object is
     *     {@link EventType }
     *     
     */
    public void setEventType(EventType value) {
        this.eventType = value;
    }

    /**
     * Gets the value of the triggeredSendDefinitionObjectID property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTriggeredSendDefinitionObjectID() {
        return triggeredSendDefinitionObjectID;
    }

    /**
     * Sets the value of the triggeredSendDefinitionObjectID property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTriggeredSendDefinitionObjectID(String value) {
        this.triggeredSendDefinitionObjectID = value;
    }

    /**
     * Gets the value of the batchID property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getBatchID() {
        return batchID;
    }

    /**
     * Sets the value of the batchID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setBatchID(Integer value) {
        this.batchID = value;
    }

}
