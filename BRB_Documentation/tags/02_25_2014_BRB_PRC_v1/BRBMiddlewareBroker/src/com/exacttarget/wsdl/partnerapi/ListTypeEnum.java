
package com.exacttarget.wsdl.partnerapi;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ListTypeEnum.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="ListTypeEnum">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Public"/>
 *     &lt;enumeration value="Private"/>
 *     &lt;enumeration value="SalesForce"/>
 *     &lt;enumeration value="GlobalUnsubscribe"/>
 *     &lt;enumeration value="Master"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "ListTypeEnum")
@XmlEnum
public enum ListTypeEnum {

    @XmlEnumValue("Public")
    PUBLIC("Public"),
    @XmlEnumValue("Private")
    PRIVATE("Private"),
    @XmlEnumValue("SalesForce")
    SALES_FORCE("SalesForce"),
    @XmlEnumValue("GlobalUnsubscribe")
    GLOBAL_UNSUBSCRIBE("GlobalUnsubscribe"),
    @XmlEnumValue("Master")
    MASTER("Master");
    private final String value;

    ListTypeEnum(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static ListTypeEnum fromValue(String v) {
        for (ListTypeEnum c: ListTypeEnum.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
