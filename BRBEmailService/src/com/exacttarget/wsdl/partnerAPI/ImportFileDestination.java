/**
 * ImportFileDestination.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.exacttarget.wsdl.partnerAPI;

public class ImportFileDestination  extends com.exacttarget.wsdl.partnerAPI.APIObject  implements java.io.Serializable {
    private com.exacttarget.wsdl.partnerAPI.DataExtension templateCustomObject;

    private com.exacttarget.wsdl.partnerAPI.FileTransferLocation fileTransferLocation;

    private java.lang.String fileSpec;

    private java.lang.Integer encodingCodePage;

    private java.lang.Boolean hasColumnHeader;

    private java.lang.String fieldDelimiter;

    private java.lang.String rowDelimiter;

    private java.lang.String nullValue;

    private java.lang.String booleanFormat;

    private java.lang.String dateTimeFormat;

    private java.lang.String stringIdentifier;

    private java.lang.String escapeSequence;

    public ImportFileDestination() {
    }

    public ImportFileDestination(
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
           com.exacttarget.wsdl.partnerAPI.DataExtension templateCustomObject,
           com.exacttarget.wsdl.partnerAPI.FileTransferLocation fileTransferLocation,
           java.lang.String fileSpec,
           java.lang.Integer encodingCodePage,
           java.lang.Boolean hasColumnHeader,
           java.lang.String fieldDelimiter,
           java.lang.String rowDelimiter,
           java.lang.String nullValue,
           java.lang.String booleanFormat,
           java.lang.String dateTimeFormat,
           java.lang.String stringIdentifier,
           java.lang.String escapeSequence) {
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
        this.templateCustomObject = templateCustomObject;
        this.fileTransferLocation = fileTransferLocation;
        this.fileSpec = fileSpec;
        this.encodingCodePage = encodingCodePage;
        this.hasColumnHeader = hasColumnHeader;
        this.fieldDelimiter = fieldDelimiter;
        this.rowDelimiter = rowDelimiter;
        this.nullValue = nullValue;
        this.booleanFormat = booleanFormat;
        this.dateTimeFormat = dateTimeFormat;
        this.stringIdentifier = stringIdentifier;
        this.escapeSequence = escapeSequence;
    }


    /**
     * Gets the templateCustomObject value for this ImportFileDestination.
     * 
     * @return templateCustomObject
     */
    public com.exacttarget.wsdl.partnerAPI.DataExtension getTemplateCustomObject() {
        return templateCustomObject;
    }


    /**
     * Sets the templateCustomObject value for this ImportFileDestination.
     * 
     * @param templateCustomObject
     */
    public void setTemplateCustomObject(com.exacttarget.wsdl.partnerAPI.DataExtension templateCustomObject) {
        this.templateCustomObject = templateCustomObject;
    }


    /**
     * Gets the fileTransferLocation value for this ImportFileDestination.
     * 
     * @return fileTransferLocation
     */
    public com.exacttarget.wsdl.partnerAPI.FileTransferLocation getFileTransferLocation() {
        return fileTransferLocation;
    }


    /**
     * Sets the fileTransferLocation value for this ImportFileDestination.
     * 
     * @param fileTransferLocation
     */
    public void setFileTransferLocation(com.exacttarget.wsdl.partnerAPI.FileTransferLocation fileTransferLocation) {
        this.fileTransferLocation = fileTransferLocation;
    }


    /**
     * Gets the fileSpec value for this ImportFileDestination.
     * 
     * @return fileSpec
     */
    public java.lang.String getFileSpec() {
        return fileSpec;
    }


    /**
     * Sets the fileSpec value for this ImportFileDestination.
     * 
     * @param fileSpec
     */
    public void setFileSpec(java.lang.String fileSpec) {
        this.fileSpec = fileSpec;
    }


    /**
     * Gets the encodingCodePage value for this ImportFileDestination.
     * 
     * @return encodingCodePage
     */
    public java.lang.Integer getEncodingCodePage() {
        return encodingCodePage;
    }


    /**
     * Sets the encodingCodePage value for this ImportFileDestination.
     * 
     * @param encodingCodePage
     */
    public void setEncodingCodePage(java.lang.Integer encodingCodePage) {
        this.encodingCodePage = encodingCodePage;
    }


    /**
     * Gets the hasColumnHeader value for this ImportFileDestination.
     * 
     * @return hasColumnHeader
     */
    public java.lang.Boolean getHasColumnHeader() {
        return hasColumnHeader;
    }


    /**
     * Sets the hasColumnHeader value for this ImportFileDestination.
     * 
     * @param hasColumnHeader
     */
    public void setHasColumnHeader(java.lang.Boolean hasColumnHeader) {
        this.hasColumnHeader = hasColumnHeader;
    }


    /**
     * Gets the fieldDelimiter value for this ImportFileDestination.
     * 
     * @return fieldDelimiter
     */
    public java.lang.String getFieldDelimiter() {
        return fieldDelimiter;
    }


    /**
     * Sets the fieldDelimiter value for this ImportFileDestination.
     * 
     * @param fieldDelimiter
     */
    public void setFieldDelimiter(java.lang.String fieldDelimiter) {
        this.fieldDelimiter = fieldDelimiter;
    }


    /**
     * Gets the rowDelimiter value for this ImportFileDestination.
     * 
     * @return rowDelimiter
     */
    public java.lang.String getRowDelimiter() {
        return rowDelimiter;
    }


    /**
     * Sets the rowDelimiter value for this ImportFileDestination.
     * 
     * @param rowDelimiter
     */
    public void setRowDelimiter(java.lang.String rowDelimiter) {
        this.rowDelimiter = rowDelimiter;
    }


    /**
     * Gets the nullValue value for this ImportFileDestination.
     * 
     * @return nullValue
     */
    public java.lang.String getNullValue() {
        return nullValue;
    }


    /**
     * Sets the nullValue value for this ImportFileDestination.
     * 
     * @param nullValue
     */
    public void setNullValue(java.lang.String nullValue) {
        this.nullValue = nullValue;
    }


    /**
     * Gets the booleanFormat value for this ImportFileDestination.
     * 
     * @return booleanFormat
     */
    public java.lang.String getBooleanFormat() {
        return booleanFormat;
    }


    /**
     * Sets the booleanFormat value for this ImportFileDestination.
     * 
     * @param booleanFormat
     */
    public void setBooleanFormat(java.lang.String booleanFormat) {
        this.booleanFormat = booleanFormat;
    }


    /**
     * Gets the dateTimeFormat value for this ImportFileDestination.
     * 
     * @return dateTimeFormat
     */
    public java.lang.String getDateTimeFormat() {
        return dateTimeFormat;
    }


    /**
     * Sets the dateTimeFormat value for this ImportFileDestination.
     * 
     * @param dateTimeFormat
     */
    public void setDateTimeFormat(java.lang.String dateTimeFormat) {
        this.dateTimeFormat = dateTimeFormat;
    }


    /**
     * Gets the stringIdentifier value for this ImportFileDestination.
     * 
     * @return stringIdentifier
     */
    public java.lang.String getStringIdentifier() {
        return stringIdentifier;
    }


    /**
     * Sets the stringIdentifier value for this ImportFileDestination.
     * 
     * @param stringIdentifier
     */
    public void setStringIdentifier(java.lang.String stringIdentifier) {
        this.stringIdentifier = stringIdentifier;
    }


    /**
     * Gets the escapeSequence value for this ImportFileDestination.
     * 
     * @return escapeSequence
     */
    public java.lang.String getEscapeSequence() {
        return escapeSequence;
    }


    /**
     * Sets the escapeSequence value for this ImportFileDestination.
     * 
     * @param escapeSequence
     */
    public void setEscapeSequence(java.lang.String escapeSequence) {
        this.escapeSequence = escapeSequence;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof ImportFileDestination)) return false;
        ImportFileDestination other = (ImportFileDestination) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = super.equals(obj) && 
            ((this.templateCustomObject==null && other.getTemplateCustomObject()==null) || 
             (this.templateCustomObject!=null &&
              this.templateCustomObject.equals(other.getTemplateCustomObject()))) &&
            ((this.fileTransferLocation==null && other.getFileTransferLocation()==null) || 
             (this.fileTransferLocation!=null &&
              this.fileTransferLocation.equals(other.getFileTransferLocation()))) &&
            ((this.fileSpec==null && other.getFileSpec()==null) || 
             (this.fileSpec!=null &&
              this.fileSpec.equals(other.getFileSpec()))) &&
            ((this.encodingCodePage==null && other.getEncodingCodePage()==null) || 
             (this.encodingCodePage!=null &&
              this.encodingCodePage.equals(other.getEncodingCodePage()))) &&
            ((this.hasColumnHeader==null && other.getHasColumnHeader()==null) || 
             (this.hasColumnHeader!=null &&
              this.hasColumnHeader.equals(other.getHasColumnHeader()))) &&
            ((this.fieldDelimiter==null && other.getFieldDelimiter()==null) || 
             (this.fieldDelimiter!=null &&
              this.fieldDelimiter.equals(other.getFieldDelimiter()))) &&
            ((this.rowDelimiter==null && other.getRowDelimiter()==null) || 
             (this.rowDelimiter!=null &&
              this.rowDelimiter.equals(other.getRowDelimiter()))) &&
            ((this.nullValue==null && other.getNullValue()==null) || 
             (this.nullValue!=null &&
              this.nullValue.equals(other.getNullValue()))) &&
            ((this.booleanFormat==null && other.getBooleanFormat()==null) || 
             (this.booleanFormat!=null &&
              this.booleanFormat.equals(other.getBooleanFormat()))) &&
            ((this.dateTimeFormat==null && other.getDateTimeFormat()==null) || 
             (this.dateTimeFormat!=null &&
              this.dateTimeFormat.equals(other.getDateTimeFormat()))) &&
            ((this.stringIdentifier==null && other.getStringIdentifier()==null) || 
             (this.stringIdentifier!=null &&
              this.stringIdentifier.equals(other.getStringIdentifier()))) &&
            ((this.escapeSequence==null && other.getEscapeSequence()==null) || 
             (this.escapeSequence!=null &&
              this.escapeSequence.equals(other.getEscapeSequence())));
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
        if (getTemplateCustomObject() != null) {
            _hashCode += getTemplateCustomObject().hashCode();
        }
        if (getFileTransferLocation() != null) {
            _hashCode += getFileTransferLocation().hashCode();
        }
        if (getFileSpec() != null) {
            _hashCode += getFileSpec().hashCode();
        }
        if (getEncodingCodePage() != null) {
            _hashCode += getEncodingCodePage().hashCode();
        }
        if (getHasColumnHeader() != null) {
            _hashCode += getHasColumnHeader().hashCode();
        }
        if (getFieldDelimiter() != null) {
            _hashCode += getFieldDelimiter().hashCode();
        }
        if (getRowDelimiter() != null) {
            _hashCode += getRowDelimiter().hashCode();
        }
        if (getNullValue() != null) {
            _hashCode += getNullValue().hashCode();
        }
        if (getBooleanFormat() != null) {
            _hashCode += getBooleanFormat().hashCode();
        }
        if (getDateTimeFormat() != null) {
            _hashCode += getDateTimeFormat().hashCode();
        }
        if (getStringIdentifier() != null) {
            _hashCode += getStringIdentifier().hashCode();
        }
        if (getEscapeSequence() != null) {
            _hashCode += getEscapeSequence().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(ImportFileDestination.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ImportFileDestination"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("templateCustomObject");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "TemplateCustomObject"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "DataExtension"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("fileTransferLocation");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "FileTransferLocation"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "FileTransferLocation"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("fileSpec");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "FileSpec"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("encodingCodePage");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "EncodingCodePage"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("hasColumnHeader");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "HasColumnHeader"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "boolean"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("fieldDelimiter");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "FieldDelimiter"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("rowDelimiter");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "RowDelimiter"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("nullValue");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "NullValue"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("booleanFormat");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "BooleanFormat"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("dateTimeFormat");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "DateTimeFormat"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("stringIdentifier");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "StringIdentifier"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("escapeSequence");
        elemField.setXmlName(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "EscapeSequence"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
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
