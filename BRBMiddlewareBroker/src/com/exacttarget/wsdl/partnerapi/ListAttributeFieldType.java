
package com.exacttarget.wsdl.partnerapi;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ListAttributeFieldType.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="ListAttributeFieldType">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Text"/>
 *     &lt;enumeration value="Number"/>
 *     &lt;enumeration value="Date"/>
 *     &lt;enumeration value="Boolean"/>
 *     &lt;enumeration value="Decimal"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "ListAttributeFieldType")
@XmlEnum
public enum ListAttributeFieldType {

    @XmlEnumValue("Text")
    TEXT("Text"),
    @XmlEnumValue("Number")
    NUMBER("Number"),
    @XmlEnumValue("Date")
    DATE("Date"),
    @XmlEnumValue("Boolean")
    BOOLEAN("Boolean"),
    @XmlEnumValue("Decimal")
    DECIMAL("Decimal");
    private final String value;

    ListAttributeFieldType(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static ListAttributeFieldType fromValue(String v) {
        for (ListAttributeFieldType c: ListAttributeFieldType.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
