/**
 * ContactEvent.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.exacttarget.wsdl.partnerAPI;

public class ContactEvent  extends com.exacttarget.wsdl.partnerAPI.APIObject  implements java.io.Serializable {
    private java.lang.Long contactID;

    private java.lang.String contactKey;

    private java.lang.String eventDefinitionKey;

    private com.exacttarget.wsdl.partnerAPI.AttributeSet[] data;

    public ContactEvent() {
    }

    public ContactEvent(
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
           java.lang.Long contactID,
           java.lang.String contactKey,
           java.lang.String eventDefinitionKey,
           com.exacttarget.wsdl.partnerAPI.AttributeSet[] data) {
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
            objectState);
        this.contactID = contactID;
        this.contactKey = contactKey;
        this.eventDefinitionKey = eventDefinitionKey;
        this.data = data;
    }


    /**
     * Gets the contactID value for this ContactEvent.
     * 
     * @return contactID
     */
    public java.lang.Long getContactID() {
        return contactID;
    }


    /**
     * Sets the contactID value for this ContactEvent.
     * 
     * @param contactID
     */
    public void setContactID(java.lang.Long contactID) {
        this.contactID = contactID;
    }


    /**
     * Gets the contactKey value for this ContactEvent.
     * 
     * @return contactKey
     */
    public java.lang.String getContactKey() {
        return contactKey;
    }


    /**
     * Sets the contactKey value for this ContactEvent.
     * 
     * @param contactKey
     */
    public void setContactKey(java.lang.String contactKey) {
        this.contactKey = contactKey;
    }


    /**
     * Gets the eventDefinitionKey value for this ContactEvent.
     * 
     * @return eventDefinitionKey
     */
    public java.lang.String getEventDefinitionKey() {
        return eventDefinitionKey;
    }


    /**
     * Sets the eventDefinitionKey value for this ContactEvent.
     * 
     * @param eventDefinitionKey
     */
    public void setEventDefinitionKey(java.lang.String eventDefinitionKey) {
        this.eventDefinitionKey = eventDefinitionKey;
    }


    /**
     * Gets the data value for this ContactEvent.
     * 
     * @return data
     */
    public com.exacttarget.wsdl.partnerAPI.AttributeSet[] getData() {
        return data;
    }


    /**
     * Sets the data value for this ContactEvent.
     * 
     * @param data
     */
    public void setData(com.exacttarget.wsdl.partnerAPI.AttributeSet[] data) {
        this.data = data;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ContactEvent)) return false;
        ContactEvent other = (ContactEvent) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = super.equals(obj) && 
            ((this.contactID==null && other.getContactID()==null) || 
             (this.contactID!=null &&
              this.contactID.equals(other.getContactID()))) &&
            ((this.contactKey==null && other.getContactKey()==null) || 
             (this.contactKey!=null &&
              this.contactKey.equals(other.getContactKey()))) &&
            ((this.eventDefinitionKey==null && other.getEventDefinitionKey()==null) || 
             (this.eventDefinitionKey!=null &&
              this.eventDefinitionKey.equals(other.getEventDefinitionKey()))) &&
            ((this.data==null && other.getData()==null) || 
             (this.data!=null &&
              java.util.Arrays.equals(this.data, other.getData())));
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
        if (getContactID() != null) {
            _hashCode += getContactID().hashCode();
        }
        if (getContactKey() != null) {
            _hashCode += getContactKey().hashCode();
        }
        if (getEventDefinitionKey() != null) {
            _hashCode += getEventDefinitionKey().hashCode();
        }
        if (getData() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getData());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getData(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ContactEvent.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ContactEvent"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("contactID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ContactID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "long"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("contactKey");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ContactKey"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("eventDefinitionKey");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "EventDefinitionKey"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("data");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "Data"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "AttributeSet"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        elemField.setItemQName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "AttributeSet"));
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
