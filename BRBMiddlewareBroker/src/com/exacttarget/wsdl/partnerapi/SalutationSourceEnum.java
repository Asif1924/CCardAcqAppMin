
package com.exacttarget.wsdl.partnerapi;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for SalutationSourceEnum.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="SalutationSourceEnum">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Default"/>
 *     &lt;enumeration value="ContentLibrary"/>
 *     &lt;enumeration value="None"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "SalutationSourceEnum")
@XmlEnum
public enum SalutationSourceEnum {

    @XmlEnumValue("Default")
    DEFAULT("Default"),
    @XmlEnumValue("ContentLibrary")
    CONTENT_LIBRARY("ContentLibrary"),
    @XmlEnumValue("None")
    NONE("None");
    private final String value;

    SalutationSourceEnum(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static SalutationSourceEnum fromValue(String v) {
        for (SalutationSourceEnum c: SalutationSourceEnum.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
