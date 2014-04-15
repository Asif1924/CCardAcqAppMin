
package com.exacttarget.wsdl.partnerapi;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for DataExtensionFieldType.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="DataExtensionFieldType">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Text"/>
 *     &lt;enumeration value="Number"/>
 *     &lt;enumeration value="Date"/>
 *     &lt;enumeration value="Boolean"/>
 *     &lt;enumeration value="EmailAddress"/>
 *     &lt;enumeration value="Phone"/>
 *     &lt;enumeration value="Decimal"/>
 *     &lt;enumeration value="Locale"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "DataExtensionFieldType")
@XmlEnum
public enum DataExtensionFieldType {

    @XmlEnumValue("Text")
    TEXT("Text"),
    @XmlEnumValue("Number")
    NUMBER("Number"),
    @XmlEnumValue("Date")
    DATE("Date"),
    @XmlEnumValue("Boolean")
    BOOLEAN("Boolean"),
    @XmlEnumValue("EmailAddress")
    EMAIL_ADDRESS("EmailAddress"),
    @XmlEnumValue("Phone")
    PHONE("Phone"),
    @XmlEnumValue("Decimal")
    DECIMAL("Decimal"),
    @XmlEnumValue("Locale")
    LOCALE("Locale");
    private final String value;

    DataExtensionFieldType(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static DataExtensionFieldType fromValue(String v) {
        for (DataExtensionFieldType c: DataExtensionFieldType.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
