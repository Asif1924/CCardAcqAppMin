/**
 * FilterActivity.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.exacttarget.wsdl.partnerAPI;

public class FilterActivity  extends com.exacttarget.wsdl.partnerAPI.InteractionDefinition  implements java.io.Serializable {
    private java.lang.String filterActivityID;

    private java.lang.String filterDefinitionID;

    private java.lang.String destinationObjectID;

    private java.lang.Integer destinationTypeID;

    private java.lang.String sourceObjectID;

    private java.lang.Integer sourceTypeID;

    private java.lang.String ownerID;

    private java.lang.String statusID;

    private com.exacttarget.wsdl.partnerAPI.ClientID createdBy;

    private com.exacttarget.wsdl.partnerAPI.ClientID modifiedBy;

    public FilterActivity() {
    }

    public FilterActivity(
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
           java.lang.String filterActivityID,
           java.lang.String filterDefinitionID,
           java.lang.String destinationObjectID,
           java.lang.Integer destinationTypeID,
           java.lang.String sourceObjectID,
           java.lang.Integer sourceTypeID,
           java.lang.String ownerID,
           java.lang.String statusID,
           com.exacttarget.wsdl.partnerAPI.ClientID createdBy,
           com.exacttarget.wsdl.partnerAPI.ClientID modifiedBy) {
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
        this.filterActivityID = filterActivityID;
        this.filterDefinitionID = filterDefinitionID;
        this.destinationObjectID = destinationObjectID;
        this.destinationTypeID = destinationTypeID;
        this.sourceObjectID = sourceObjectID;
        this.sourceTypeID = sourceTypeID;
        this.ownerID = ownerID;
        this.statusID = statusID;
        this.createdBy = createdBy;
        this.modifiedBy = modifiedBy;
    }


    /**
     * Gets the filterActivityID value for this FilterActivity.
     * 
     * @return filterActivityID
     */
    public java.lang.String getFilterActivityID() {
        return filterActivityID;
    }


    /**
     * Sets the filterActivityID value for this FilterActivity.
     * 
     * @param filterActivityID
     */
    public void setFilterActivityID(java.lang.String filterActivityID) {
        this.filterActivityID = filterActivityID;
    }


    /**
     * Gets the filterDefinitionID value for this FilterActivity.
     * 
     * @return filterDefinitionID
     */
    public java.lang.String getFilterDefinitionID() {
        return filterDefinitionID;
    }


    /**
     * Sets the filterDefinitionID value for this FilterActivity.
     * 
     * @param filterDefinitionID
     */
    public void setFilterDefinitionID(java.lang.String filterDefinitionID) {
        this.filterDefinitionID = filterDefinitionID;
    }


    /**
     * Gets the destinationObjectID value for this FilterActivity.
     * 
     * @return destinationObjectID
     */
    public java.lang.String getDestinationObjectID() {
        return destinationObjectID;
    }


    /**
     * Sets the destinationObjectID value for this FilterActivity.
     * 
     * @param destinationObjectID
     */
    public void setDestinationObjectID(java.lang.String destinationObjectID) {
        this.destinationObjectID = destinationObjectID;
    }


    /**
     * Gets the destinationTypeID value for this FilterActivity.
     * 
     * @return destinationTypeID
     */
    public java.lang.Integer getDestinationTypeID() {
        return destinationTypeID;
    }


    /**
     * Sets the destinationTypeID value for this FilterActivity.
     * 
     * @param destinationTypeID
     */
    public void setDestinationTypeID(java.lang.Integer destinationTypeID) {
        this.destinationTypeID = destinationTypeID;
    }


    /**
     * Gets the sourceObjectID value for this FilterActivity.
     * 
     * @return sourceObjectID
     */
    public java.lang.String getSourceObjectID() {
        return sourceObjectID;
    }


    /**
     * Sets the sourceObjectID value for this FilterActivity.
     * 
     * @param sourceObjectID
     */
    public void setSourceObjectID(java.lang.String sourceObjectID) {
        this.sourceObjectID = sourceObjectID;
    }


    /**
     * Gets the sourceTypeID value for this FilterActivity.
     * 
     * @return sourceTypeID
     */
    public java.lang.Integer getSourceTypeID() {
        return sourceTypeID;
    }


    /**
     * Sets the sourceTypeID value for this FilterActivity.
     * 
     * @param sourceTypeID
     */
    public void setSourceTypeID(java.lang.Integer sourceTypeID) {
        this.sourceTypeID = sourceTypeID;
    }


    /**
     * Gets the ownerID value for this FilterActivity.
     * 
     * @return ownerID
     */
    public java.lang.String getOwnerID() {
        return ownerID;
    }


    /**
     * Sets the ownerID value for this FilterActivity.
     * 
     * @param ownerID
     */
    public void setOwnerID(java.lang.String ownerID) {
        this.ownerID = ownerID;
    }


    /**
     * Gets the statusID value for this FilterActivity.
     * 
     * @return statusID
     */
    public java.lang.String getStatusID() {
        return statusID;
    }


    /**
     * Sets the statusID value for this FilterActivity.
     * 
     * @param statusID
     */
    public void setStatusID(java.lang.String statusID) {
        this.statusID = statusID;
    }


    /**
     * Gets the createdBy value for this FilterActivity.
     * 
     * @return createdBy
     */
    public com.exacttarget.wsdl.partnerAPI.ClientID getCreatedBy() {
        return createdBy;
    }


    /**
     * Sets the createdBy value for this FilterActivity.
     * 
     * @param createdBy
     */
    public void setCreatedBy(com.exacttarget.wsdl.partnerAPI.ClientID createdBy) {
        this.createdBy = createdBy;
    }


    /**
     * Gets the modifiedBy value for this FilterActivity.
     * 
     * @return modifiedBy
     */
    public com.exacttarget.wsdl.partnerAPI.ClientID getModifiedBy() {
        return modifiedBy;
    }


    /**
     * Sets the modifiedBy value for this FilterActivity.
     * 
     * @param modifiedBy
     */
    public void setModifiedBy(com.exacttarget.wsdl.partnerAPI.ClientID modifiedBy) {
        this.modifiedBy = modifiedBy;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof FilterActivity)) return false;
        FilterActivity other = (FilterActivity) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = super.equals(obj) && 
            ((this.filterActivityID==null && other.getFilterActivityID()==null) || 
             (this.filterActivityID!=null &&
              this.filterActivityID.equals(other.getFilterActivityID()))) &&
            ((this.filterDefinitionID==null && other.getFilterDefinitionID()==null) || 
             (this.filterDefinitionID!=null &&
              this.filterDefinitionID.equals(other.getFilterDefinitionID()))) &&
            ((this.destinationObjectID==null && other.getDestinationObjectID()==null) || 
             (this.destinationObjectID!=null &&
              this.destinationObjectID.equals(other.getDestinationObjectID()))) &&
            ((this.destinationTypeID==null && other.getDestinationTypeID()==null) || 
             (this.destinationTypeID!=null &&
              this.destinationTypeID.equals(other.getDestinationTypeID()))) &&
            ((this.sourceObjectID==null && other.getSourceObjectID()==null) || 
             (this.sourceObjectID!=null &&
              this.sourceObjectID.equals(other.getSourceObjectID()))) &&
            ((this.sourceTypeID==null && other.getSourceTypeID()==null) || 
             (this.sourceTypeID!=null &&
              this.sourceTypeID.equals(other.getSourceTypeID()))) &&
            ((this.ownerID==null && other.getOwnerID()==null) || 
             (this.ownerID!=null &&
              this.ownerID.equals(other.getOwnerID()))) &&
            ((this.statusID==null && other.getStatusID()==null) || 
             (this.statusID!=null &&
              this.statusID.equals(other.getStatusID()))) &&
            ((this.createdBy==null && other.getCreatedBy()==null) || 
             (this.createdBy!=null &&
              this.createdBy.equals(other.getCreatedBy()))) &&
            ((this.modifiedBy==null && other.getModifiedBy()==null) || 
             (this.modifiedBy!=null &&
              this.modifiedBy.equals(other.getModifiedBy())));
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
        if (getFilterActivityID() != null) {
            _hashCode += getFilterActivityID().hashCode();
        }
        if (getFilterDefinitionID() != null) {
            _hashCode += getFilterDefinitionID().hashCode();
        }
        if (getDestinationObjectID() != null) {
            _hashCode += getDestinationObjectID().hashCode();
        }
        if (getDestinationTypeID() != null) {
            _hashCode += getDestinationTypeID().hashCode();
        }
        if (getSourceObjectID() != null) {
            _hashCode += getSourceObjectID().hashCode();
        }
        if (getSourceTypeID() != null) {
            _hashCode += getSourceTypeID().hashCode();
        }
        if (getOwnerID() != null) {
            _hashCode += getOwnerID().hashCode();
        }
        if (getStatusID() != null) {
            _hashCode += getStatusID().hashCode();
        }
        if (getCreatedBy() != null) {
            _hashCode += getCreatedBy().hashCode();
        }
        if (getModifiedBy() != null) {
            _hashCode += getModifiedBy().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(FilterActivity.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "FilterActivity"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("filterActivityID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "FilterActivityID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("filterDefinitionID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "FilterDefinitionID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("destinationObjectID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "DestinationObjectID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("destinationTypeID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "DestinationTypeID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("sourceObjectID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "SourceObjectID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("sourceTypeID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "SourceTypeID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ownerID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "OwnerID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("statusID");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "StatusID"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("createdBy");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "CreatedBy"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ClientID"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("modifiedBy");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ModifiedBy"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ClientID"));
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
