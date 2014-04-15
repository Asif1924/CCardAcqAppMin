
package com.exacttarget.wsdl.partnerapi;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for Automation complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="Automation">
 *   &lt;complexContent>
 *     &lt;extension base="{http://exacttarget.com/wsdl/partnerAPI}InteractionDefinition">
 *       &lt;sequence>
 *         &lt;element name="Schedule" type="{http://exacttarget.com/wsdl/partnerAPI}ScheduleDefinition" minOccurs="0"/>
 *         &lt;element name="AutomationTasks" minOccurs="0">
 *           &lt;complexType>
 *             &lt;complexContent>
 *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                 &lt;sequence>
 *                   &lt;element name="AutomationTask" type="{http://exacttarget.com/wsdl/partnerAPI}AutomationTask" maxOccurs="unbounded" minOccurs="0"/>
 *                 &lt;/sequence>
 *               &lt;/restriction>
 *             &lt;/complexContent>
 *           &lt;/complexType>
 *         &lt;/element>
 *         &lt;element name="IsActive" type="{http://www.w3.org/2001/XMLSchema}boolean" minOccurs="0"/>
 *         &lt;element name="AutomationSource" type="{http://exacttarget.com/wsdl/partnerAPI}AutomationSource" minOccurs="0"/>
 *         &lt;element name="Status" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="Notifications" minOccurs="0">
 *           &lt;complexType>
 *             &lt;complexContent>
 *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                 &lt;sequence>
 *                   &lt;element name="Notification" type="{http://exacttarget.com/wsdl/partnerAPI}AutomationNotification" maxOccurs="unbounded" minOccurs="0"/>
 *                 &lt;/sequence>
 *               &lt;/restriction>
 *             &lt;/complexContent>
 *           &lt;/complexType>
 *         &lt;/element>
 *         &lt;element name="ScheduledTime" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="AutomationType" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Automation", propOrder = {
    "schedule",
    "automationTasks",
    "isActive",
    "automationSource",
    "status",
    "notifications",
    "scheduledTime",
    "automationType"
})
@XmlSeeAlso({
    AutomationInstance.class
})
public class Automation
    extends InteractionDefinition
    implements Serializable
{

    @XmlElement(name = "Schedule")
    protected ScheduleDefinition schedule;
    @XmlElement(name = "AutomationTasks")
    protected Automation.AutomationTasks automationTasks;
    @XmlElement(name = "IsActive")
    protected Boolean isActive;
    @XmlElement(name = "AutomationSource")
    protected AutomationSource automationSource;
    @XmlElement(name = "Status")
    protected Integer status;
    @XmlElement(name = "Notifications")
    protected Automation.Notifications notifications;
    @XmlElement(name = "ScheduledTime")
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar scheduledTime;
    @XmlElement(name = "AutomationType")
    protected String automationType;

    /**
     * Gets the value of the schedule property.
     * 
     * @return
     *     possible object is
     *     {@link ScheduleDefinition }
     *     
     */
    public ScheduleDefinition getSchedule() {
        return schedule;
    }

    /**
     * Sets the value of the schedule property.
     * 
     * @param value
     *     allowed object is
     *     {@link ScheduleDefinition }
     *     
     */
    public void setSchedule(ScheduleDefinition value) {
        this.schedule = value;
    }

    /**
     * Gets the value of the automationTasks property.
     * 
     * @return
     *     possible object is
     *     {@link Automation.AutomationTasks }
     *     
     */
    public Automation.AutomationTasks getAutomationTasks() {
        return automationTasks;
    }

    /**
     * Sets the value of the automationTasks property.
     * 
     * @param value
     *     allowed object is
     *     {@link Automation.AutomationTasks }
     *     
     */
    public void setAutomationTasks(Automation.AutomationTasks value) {
        this.automationTasks = value;
    }

    /**
     * Gets the value of the isActive property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isIsActive() {
        return isActive;
    }

    /**
     * Sets the value of the isActive property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setIsActive(Boolean value) {
        this.isActive = value;
    }

    /**
     * Gets the value of the automationSource property.
     * 
     * @return
     *     possible object is
     *     {@link AutomationSource }
     *     
     */
    public AutomationSource getAutomationSource() {
        return automationSource;
    }

    /**
     * Sets the value of the automationSource property.
     * 
     * @param value
     *     allowed object is
     *     {@link AutomationSource }
     *     
     */
    public void setAutomationSource(AutomationSource value) {
        this.automationSource = value;
    }

    /**
     * Gets the value of the status property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getStatus() {
        return status;
    }

    /**
     * Sets the value of the status property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setStatus(Integer value) {
        this.status = value;
    }

    /**
     * Gets the value of the notifications property.
     * 
     * @return
     *     possible object is
     *     {@link Automation.Notifications }
     *     
     */
    public Automation.Notifications getNotifications() {
        return notifications;
    }

    /**
     * Sets the value of the notifications property.
     * 
     * @param value
     *     allowed object is
     *     {@link Automation.Notifications }
     *     
     */
    public void setNotifications(Automation.Notifications value) {
        this.notifications = value;
    }

    /**
     * Gets the value of the scheduledTime property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getScheduledTime() {
        return scheduledTime;
    }

    /**
     * Sets the value of the scheduledTime property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setScheduledTime(XMLGregorianCalendar value) {
        this.scheduledTime = value;
    }

    /**
     * Gets the value of the automationType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAutomationType() {
        return automationType;
    }

    /**
     * Sets the value of the automationType property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAutomationType(String value) {
        this.automationType = value;
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
     *         &lt;element name="AutomationTask" type="{http://exacttarget.com/wsdl/partnerAPI}AutomationTask" maxOccurs="unbounded" minOccurs="0"/>
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
        "automationTask"
    })
    public static class AutomationTasks
        implements Serializable
    {

        @XmlElement(name = "AutomationTask")
        protected List<AutomationTask> automationTask;

        /**
         * Gets the value of the automationTask property.
         * 
         * <p>
         * This accessor method returns a reference to the live list,
         * not a snapshot. Therefore any modification you make to the
         * returned list will be present inside the JAXB object.
         * This is why there is not a <CODE>set</CODE> method for the automationTask property.
         * 
         * <p>
         * For example, to add a new item, do as follows:
         * <pre>
         *    getAutomationTask().add(newItem);
         * </pre>
         * 
         * 
         * <p>
         * Objects of the following type(s) are allowed in the list
         * {@link AutomationTask }
         * 
         * 
         */
        public List<AutomationTask> getAutomationTask() {
            if (automationTask == null) {
                automationTask = new ArrayList<AutomationTask>();
            }
            return this.automationTask;
        }

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
     *         &lt;element name="Notification" type="{http://exacttarget.com/wsdl/partnerAPI}AutomationNotification" maxOccurs="unbounded" minOccurs="0"/>
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
        "notification"
    })
    public static class Notifications
        implements Serializable
    {

        @XmlElement(name = "Notification")
        protected List<AutomationNotification> notification;

        /**
         * Gets the value of the notification property.
         * 
         * <p>
         * This accessor method returns a reference to the live list,
         * not a snapshot. Therefore any modification you make to the
         * returned list will be present inside the JAXB object.
         * This is why there is not a <CODE>set</CODE> method for the notification property.
         * 
         * <p>
         * For example, to add a new item, do as follows:
         * <pre>
         *    getNotification().add(newItem);
         * </pre>
         * 
         * 
         * <p>
         * Objects of the following type(s) are allowed in the list
         * {@link AutomationNotification }
         * 
         * 
         */
        public List<AutomationNotification> getNotification() {
            if (notification == null) {
                notification = new ArrayList<AutomationNotification>();
            }
            return this.notification;
        }

    }

}
