/**
 * Automation.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.exacttarget.wsdl.partnerAPI;

public class Automation  extends com.exacttarget.wsdl.partnerAPI.InteractionDefinition  implements java.io.Serializable {
    private com.exacttarget.wsdl.partnerAPI.ScheduleDefinition schedule;

    private com.exacttarget.wsdl.partnerAPI.AutomationTask[] automationTasks;

    private java.lang.Boolean isActive;

    private com.exacttarget.wsdl.partnerAPI.AutomationSource automationSource;

    private java.lang.Integer status;

    private com.exacttarget.wsdl.partnerAPI.AutomationNotification[] notifications;

    private java.util.Calendar scheduledTime;

    private java.lang.String automationType;

    private java.lang.Boolean updateModified;

    private java.lang.String lastRunInstanceID;

    private java.lang.Long createdBy;

    private java.lang.String categoryID;

    private java.util.Calendar lastRunTime;

    private java.util.Calendar lastSaveDate;

    private java.lang.Long modifiedBy;

    private java.lang.String recurrenceID;

    private java.lang.Long lastSavedBy;

    public Automation() {
    }

    public Automation(
           com.exacttarget.wsdl.partnerAPI.ClientID client,
           java.lang.String partnerKey,
           com.exacttarget.wsdl.partnerAPI.APIProperty[] partnerProperties,
           java.util.Calendar createdDate,
           java.util.Calendar modifiedDate,
           java.lang.Integer ID,
           java.lang.String objectID,
           java.lang.String customerKey,
           com.exacttarget.wsdl.partnerAPI.Owner owner,
           java.lang.String correlationID,
           java.lang.String objectState,
           java.lang.String name,
           java.lang.String description,
           java.lang.String keyword,
           java.lang.String interactionObjectID,
           com.exacttarget.wsdl.partnerAPI.ScheduleDefinition schedule,
           com.exacttarget.wsdl.partnerAPI.AutomationTask[] automationTasks,
           java.lang.Boolean isActive,
           com.exacttarget.wsdl.partnerAPI.AutomationSource automationSource,
           java.lang.Integer status,
           com.exacttarget.wsdl.partnerAPI.AutomationNotification[] notifications,
           java.util.Calendar scheduledTime,
           java.lang.String automationType,
           java.lang.Boolean updateModified,
           java.lang.String lastRunInstanceID,
           java.lang.Long createdBy,
           java.lang.String categoryID,
           java.util.Calendar lastRunTime,
           java.util.Calendar lastSaveDate,
           java.lang.Long modifiedBy,
           java.lang.String recurrenceID,
           java.lang.Long lastSavedBy) {
        super(
            client,
            partnerKey,
            partnerProperties,
            createdDate,
            modifiedDate,
            ID,
            objectID,
            customerKey,
            owner,
            correlationID,
            objectState,
            name,
            description,
            keyword,
            interactionObjectID);
        this.schedule = schedule;
        this.automationTasks = automationTasks;
        this.isActive = isActive;
        this.automationSource = automationSource;
        this.status = status;
        this.notifications = notifications;
        this.scheduledTime = scheduledTime;
        this.automationType = automationType;
        this.updateModified = updateModified;
        this.lastRunInstanceID = lastRunInstanceID;
        this.createdBy = createdBy;
        this.categoryID = categoryID;
        this.lastRunTime = lastRunTime;
        this.lastSaveDate = lastSaveDate;
        this.modifiedBy = modifiedBy;
        this.recurrenceID = recurrenceID;
        this.lastSavedBy = lastSavedBy;
    }


    /**
     * Gets the schedule value for this Automation.
     * 
     * @return schedule
     */
    public com.exacttarget.wsdl.partnerAPI.ScheduleDefinition getSchedule() {
        return schedule;
    }


    /**
     * Sets the schedule value for this Automation.
     * 
     * @param schedule
     */
    public void setSchedule(com.exacttarget.wsdl.partnerAPI.ScheduleDefinition schedule) {
        this.schedule = schedule;
    }


    /**
     * Gets the automationTasks value for this Automation.
     * 
     * @return automationTasks
     */
    public com.exacttarget.wsdl.partnerAPI.AutomationTask[] getAutomationTasks() {
        return automationTasks;
    }


    /**
     * Sets the automationTasks value for this Automation.
     * 
     * @param automationTasks
     */
    public void setAutomationTasks(com.exacttarget.wsdl.partnerAPI.AutomationTask[] automationTasks) {
        this.automationTasks = automationTasks;
    }


    /**
     * Gets the isActive value for this Automation.
     * 
     * @return isActive
     */
    public java.lang.Boolean getIsActive() {
        return isActive;
    }


    /**
     * Sets the isActive value for this Automation.
     * 
     * @param isActive
     */
    public void setIsActive(java.lang.Boolean isActive) {
        this.isActive = isActive;
    }


    /**
     * Gets the automationSource value for this Automation.
     * 
     * @return automationSource
     */
    public com.exacttarget.wsdl.partnerAPI.AutomationSource getAutomationSource() {
        return automationSource;
    }


    /**
     * Sets the automationSource value for this Automation.
     * 
     * @param automationSource
     */
    public void setAutomationSource(com.exacttarget.wsdl.partnerAPI.AutomationSource automationSource) {
        this.automationSource = automationSource;
    }


    /**
     * Gets the status value for this Automation.
     * 
     * @return status
     */
    public java.lang.Integer getStatus() {
        return status;
    }


    /**
     * Sets the status value for this Automation.
     * 
     * @param status
     */
    public void setStatus(java.lang.Integer status) {
        this.status = status;
    }


    /**
     * Gets the notifications value for this Automation.
     * 
     * @return notifications
     */
    public com.exacttarget.wsdl.partnerAPI.AutomationNotification[] getNotifications() {
        return notifications;
    }


    /**
     * Sets the notifications value for this Automation.
     * 
     * @param notifications
     */
    public void setNotifications(com.exacttarget.wsdl.partnerAPI.AutomationNotification[] notifications) {
        this.notifications = notifications;
    }


    /**
     * Gets the scheduledTime value for this Automation.
     * 
     * @return scheduledTime
     */
    public java.util.Calendar getScheduledTime() {
        return scheduledTime;
    }


    /**
     * Sets the scheduledTime value for this Automation.
     * 
     * @param scheduledTime
     */
    public void setScheduledTime(java.util.Calendar scheduledTime) {
        this.scheduledTime = scheduledTime;
    }


    /**
     * Gets the automationType value for this Automation.
     * 
     * @return automationType
     */
    public java.lang.String getAutomationType() {
        return automationType;
    }


    /**
     * Sets the automationType value for this Automation.
     * 
     * @param automationType
     */
    public void setAutomationType(java.lang.String automationType) {
        this.automationType = automationType;
    }


    /**
     * Gets the updateModified value for this Automation.
     * 
     * @return updateModified
     */
    public java.lang.Boolean getUpdateModified() {
        return updateModified;
    }


    /**
     * Sets the updateModified value for this Automation.
     * 
     * @param updateModified
     */
    public void setUpdateModified(java.lang.Boolean updateModified) {
        this.updateModified = updateModified;
    }


    /**
     * Gets the lastRunInstanceID value for this Automation.
     * 
     * @return lastRunInstanceID
     */
    public java.lang.String getLastRunInstanceID() {
        return lastRunInstanceID;
    }


    /**
     * Sets the lastRunInstanceID value for this Automation.
     * 
     * @param lastRunInstanceID
     */
    public void setLastRunInstanceID(java.lang.String lastRunInstanceID) {
        this.lastRunInstanceID = lastRunInstanceID;
    }


    /**
     * Gets the createdBy value for this Automation.
     * 
     * @return createdBy
     */
    public java.lang.Long getCreatedBy() {
        return createdBy;
    }


    /**
     * Sets the createdBy value for this Automation.
     * 
     * @param createdBy
     */
    public void setCreatedBy(java.lang.Long createdBy) {
        this.createdBy = createdBy;
    }


    /**
     * Gets the categoryID value for this Automation.
     * 
     * @return categoryID
     */
    public java.lang.String getCategoryID() {
        return categoryID;
    }


    /**
     * Sets the categoryID value for this Automation.
     * 
     * @param categoryID
     */
    public void setCategoryID(java.lang.String categoryID) {
        this.categoryID = categoryID;
    }


    /**
     * Gets the lastRunTime value for this Automation.
     * 
     * @return lastRunTime
     */
    public java.util.Calendar getLastRunTime() {
        return lastRunTime;
    }


    /**
     * Sets the lastRunTime value for this Automation.
     * 
     * @param lastRunTime
     */
    public void setLastRunTime(java.util.Calendar lastRunTime) {
        this.lastRunTime = lastRunTime;
    }


    /**
     * Gets the lastSaveDate value for this Automation.
     * 
     * @return lastSaveDate
     */
    public java.util.Calendar getLastSaveDate() {
        return lastSaveDate;
    }


    /**
     * Sets the lastSaveDate value for this Automation.
     * 
     * @param lastSaveDate
     */
    public void setLastSaveDate(java.util.Calendar lastSaveDate) {
        this.lastSaveDate = lastSaveDate;
    }


    /**
     * Gets the modifiedBy value for this Automation.
     * 
     * @return modifiedBy
     */
    public java.lang.Long getModifiedBy() {
        return modifiedBy;
    }


    /**
     * Sets the modifiedBy value for this Automation.
     * 
     * @param modifiedBy
     */
    public void setModifiedBy(java.lang.Long modifiedBy) {
        this.modifiedBy = modifiedBy;
    }


    /**
     * Gets the recurrenceID value for this Automation.
     * 
     * @return recurrenceID
     */
    public java.lang.String getRecurrenceID() {
        return recurrenceID;
    }


    /**
     * Sets the recurrenceID value for this Automation.
     * 
     * @param recurrenceID
     */
    public void setRecurrenceID(java.lang.String recurrenceID) {
        this.recurrenceID = recurrenceID;
    }


    /**
     * Gets the lastSavedBy value for this Automation.
     * 
     * @return lastSavedBy
     */
    public java.lang.Long getLastSavedBy() {
        return lastSavedBy;
    }


    /**
     * Sets the lastSavedBy value for this Automation.
     * 
     * @param lastSavedBy
     */
    public void setLastSavedBy(java.lang.Long lastSavedBy) {
        this.lastSavedBy = lastSavedBy;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof Automation)) return false;
        Automation other = (Automation) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = super.equals(obj) && 
            ((this.schedule==null && other.getSchedule()==null) || 
             (this.schedule!=null &&
              this.schedule.equals(other.getSchedule()))) &&
            ((this.automationTasks==null && other.getAutomationTasks()==null) || 
             (this.automationTasks!=null &&
              java.util.Arrays.equals(this.automationTasks, other.getAutomationTasks()))) &&
            ((this.isActive==null && other.getIsActive()==null) || 
             (this.isActive!=null &&
              this.isActive.equals(other.getIsActive()))) &&
            ((this.automationSource==null && other.getAutomationSource()==null) || 
             (this.automationSource!=null &&
              this.automationSource.equals(other.getAutomationSource()))) &&
            ((this.status==null && other.getStatus()==null) || 
             (this.status!=null &&
              this.status.equals(other.getStatus()))) &&
            ((this.notifications==null && other.getNotifications()==null) || 
             (this.notifications!=null &&
              java.util.Arrays.equals(this.notifications, other.getNotifications()))) &&
            ((this.scheduledTime==null && other.getScheduledTime()==null) || 
             (this.scheduledTime!=null &&
              this.scheduledTime.equals(other.getScheduledTime()))) &&
            ((this.automationType==null && other.getAutomationType()==null) || 
             (this.automationType!=null &&
              this.automationType.equals(other.getAutomationType()))) &&
            ((this.updateModified==null && other.getUpdateModified()==null) || 
             (this.updateModified!=null &&
              this.updateModified.equals(other.getUpdateModified()))) &&
            ((this.lastRunInstanceID==null && other.getLastRunInstanceID()==null) || 
             (this.lastRunInstanceID!=null &&
              this.lastRunInstanceID.equals(other.getLastRunInstanceID()))) &&
            ((this.createdBy==null && other.getCreatedBy()==null) || 
             (this.createdBy!=null &&
              this.createdBy.equals(other.getCreatedBy()))) &&
            ((this.categoryID==null && other.getCategoryID()==null) || 
             (this.categoryID!=null &&
              this.categoryID.equals(other.getCategoryID()))) &&
            ((this.lastRunTime==null && other.getLastRunTime()==null) || 
             (this.lastRunTime!=null &&
              this.lastRunTime.equals(other.getLastRunTime()))) &&
            ((this.lastSaveDate==null && other.getLastSaveDate()==null) || 
             (this.lastSaveDate!=null &&
              this.lastSaveDate.equals(other.getLastSaveDate()))) &&
            ((this.modifiedBy==null && other.getModifiedBy()==null) || 
             (this.modifiedBy!=null &&
              this.modifiedBy.equals(other.getModifiedBy()))) &&
            ((this.recurrenceID==null && other.getRecurrenceID()==null) || 
             (this.recurrenceID!=null &&
              this.recurrenceID.equals(other.getRecurrenceID()))) &&
            ((this.lastSavedBy==null && other.getLastSavedBy()==null) || 
             (this.lastSavedBy!=null &&
              this.lastSavedBy.equals(other.getLastSavedBy())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = super.hashCode();
        if (getSchedule() != null) {
            _hashCode += getSchedule().hashCode();
        }
        if (getAutomationTasks() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getAutomationTasks());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getAutomationTasks(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        if (getIsActive() != null) {
            _hashCode += getIsActive().hashCode();
        }
        if (getAutomationSource() != null) {
            _hashCode += getAutomationSource().hashCode();
        }
        if (getStatus() != null) {
            _hashCode += getStatus().hashCode();
        }
        if (getNotifications() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getNotifications());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getNotifications(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        if (getScheduledTime() != null) {
            _hashCode += getScheduledTime().hashCode();
        }
        if (getAutomationType() != null) {
            _hashCode += getAutomationType().hashCode();
        }
        if (getUpdateModified() != null) {
            _hashCode += getUpdateModified().hashCode();
        }
        if (getLastRunInstanceID() != null) {
            _hashCode += getLastRunInstanceID().hashCode();
        }
        if (getCreatedBy() != null) {
            _hashCode += getCreatedBy().hashCode();
        }
        if (getCategoryID() != null) {
            _hashCode += getCategoryID().hashCode();
        }
        if (getLastRunTime() != null) {
            _hashCode += getLastRunTime().hashCode();
        }
        if (getLastSaveDate() != null) {
            _hashCode += getLastSaveDate().hashCode();
        }
        if (getModifiedBy() != null) {
            _hashCode += getModifiedBy().hashCode();
        }
        if (getRecurrenceID() != null) {
            _hashCode += getRecurrenceID().hashCode();
        }
        if (getLastSavedBy() != null) {
            _hashCode += getLastSavedBy().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(Automation.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "Automation"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("schedule");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "Schedule"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ScheduleDefinition"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("automationTasks");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "AutomationTasks"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "AutomationTask"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        elemField.setItemQName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "AutomationTask"));
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("isActive");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "IsActive"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("automationSource");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "AutomationSource"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "AutomationSource"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("status");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "Status"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("notifications");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "Notifications"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "AutomationNotification"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        elemField.setItemQName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "Notification"));
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("scheduledTime");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ScheduledTime"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "dateTime"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("automationType");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "AutomationType"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("updateModified");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "UpdateModified"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("lastRunInstanceID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "LastRunInstanceID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("createdBy");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "CreatedBy"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "long"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("categoryID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "CategoryID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("lastRunTime");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "LastRunTime"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "dateTime"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("lastSaveDate");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "LastSaveDate"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "dateTime"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("modifiedBy");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ModifiedBy"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "long"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("recurrenceID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "RecurrenceID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("lastSavedBy");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "LastSavedBy"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "long"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
    }

    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

    /**
     * Get Custom Serializer
     */
    public static org.apache.axis.encoding.Serializer getSerializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanSerializer(
            _javaType, _xmlType, typeDesc);
    }

    /**
     * Get Custom Deserializer
     */
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanDeserializer(
            _javaType, _xmlType, typeDesc);
    }

}
