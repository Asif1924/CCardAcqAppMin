/**
 * ContactEventCreateResult.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.exacttarget.wsdl.partnerAPI;

public class ContactEventCreateResult  extends com.exacttarget.wsdl.partnerAPI.CreateResult  implements java.io.Serializable {
    private java.lang.String eventInstanceID;

    private java.lang.Long asyncRequestID;

    public ContactEventCreateResult() {
    }

    public ContactEventCreateResult(
           java.lang.String statusCode,
           java.lang.String statusMessage,
           java.lang.Integer ordinalID,
           java.lang.Integer errorCode,
           java.lang.String requestID,
           java.lang.String conversationID,
           java.lang.String overallStatusCode,
           com.exacttarget.wsdl.partnerAPI.RequestType requestType,
           java.lang.String resultType,
           java.lang.String resultDetailXML,
           int newID,
           java.lang.String newObjectID,
           java.lang.String partnerKey,
           com.exacttarget.wsdl.partnerAPI.APIObject object,
           com.exacttarget.wsdl.partnerAPI.CreateResult[] createResults,
           java.lang.String parentPropertyName,
           java.lang.String eventInstanceID,
           java.lang.Long asyncRequestID) {
        super(
            statusCode,
            statusMessage,
            ordinalID,
            errorCode,
            requestID,
            conversationID,
            overallStatusCode,
            requestType,
            resultType,
            resultDetailXML,
            newID,
            newObjectID,
            partnerKey,
            object,
            createResults,
            parentPropertyName);
        this.eventInstanceID = eventInstanceID;
        this.asyncRequestID = asyncRequestID;
    }


    /**
     * Gets the eventInstanceID value for this ContactEventCreateResult.
     * 
     * @return eventInstanceID
     */
    public java.lang.String getEventInstanceID() {
        return eventInstanceID;
    }


    /**
     * Sets the eventInstanceID value for this ContactEventCreateResult.
     * 
     * @param eventInstanceID
     */
    public void setEventInstanceID(java.lang.String eventInstanceID) {
        this.eventInstanceID = eventInstanceID;
    }


    /**
     * Gets the asyncRequestID value for this ContactEventCreateResult.
     * 
     * @return asyncRequestID
     */
    public java.lang.Long getAsyncRequestID() {
        return asyncRequestID;
    }


    /**
     * Sets the asyncRequestID value for this ContactEventCreateResult.
     * 
     * @param asyncRequestID
     */
    public void setAsyncRequestID(java.lang.Long asyncRequestID) {
        this.asyncRequestID = asyncRequestID;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ContactEventCreateResult)) return false;
        ContactEventCreateResult other = (ContactEventCreateResult) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = super.equals(obj) && 
            ((this.eventInstanceID==null && other.getEventInstanceID()==null) || 
             (this.eventInstanceID!=null &&
              this.eventInstanceID.equals(other.getEventInstanceID()))) &&
            ((this.asyncRequestID==null && other.getAsyncRequestID()==null) || 
             (this.asyncRequestID!=null &&
              this.asyncRequestID.equals(other.getAsyncRequestID())));
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
        if (getEventInstanceID() != null) {
            _hashCode += getEventInstanceID().hashCode();
        }
        if (getAsyncRequestID() != null) {
            _hashCode += getAsyncRequestID().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ContactEventCreateResult.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ContactEventCreateResult"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("eventInstanceID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "EventInstanceID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("asyncRequestID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "AsyncRequestID"));
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
